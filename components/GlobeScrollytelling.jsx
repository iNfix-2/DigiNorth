"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Globe as GlobeIcon, MapPin, Sparkles } from "lucide-react";
import { ScrambleText } from "./useScrambleText";

// Local cached GeoJSON endpoint for country boundaries
const LOCAL_GEOJSON_URL = "/data/countries.geojson";

// Coordinates
const KADUNA = { lat: 10.52, lng: 7.44, label: "Kaduna (DigiNorth Hub)" };
const GLOBAL_HUBS = [
  { lat: 37.7749, lng: -122.4194, label: "Silicon Valley" },
  { lat: 51.5074, lng: -0.1278, label: "London" },
  { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
  { lat: -1.2921, lng: 36.8219, label: "Nairobi" },
];

// Helper: Convert Lat/Lng to 3D Cartesian coordinates on sphere
function getSphericalCoords(lat, lng, radius = 100) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return {
    x: -(radius * Math.sin(phi) * Math.cos(theta)),
    y: radius * Math.cos(phi),
    z: radius * Math.sin(phi) * Math.sin(theta),
  };
}

export default function GlobeScrollytelling() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);

  // State for DOM Tooltip on Raycast / Hover
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    title: "DigiNorth Community Hub",
    subtitle: "Kaduna, Nigeria (10.52° N, 7.44° E)",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    let animationFrameId;
    let renderer = null;
    let scene = null;
    let camera = null;
    let timeline = null;
    let handleMouseMove = null;
    let handleClick = null;
    let handleResize = null;

    // Helper: Test WebGL support
    const isWebGLAvailable = () => {
      try {
        const testCanvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl"))
        );
      } catch (e) {
        return false;
      }
    };

    if (isWebGLAvailable()) {
      try {
        // 2. Three.js Scene, Camera, and WebGL Renderer
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
          45,
          window.innerWidth / window.innerHeight,
          0.1,
          2000
        );
        camera.position.set(0, 0, 320);

        renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current,
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

        // 3. Monochromatic Lighting Setup
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
        scene.add(ambientLight);

        // White directional key light
        const keyLight = new THREE.DirectionalLight(0xffffff, 3.0);
        keyLight.position.set(-180, 120, 160);
        scene.add(keyLight);

        // Fill light
        const fillLight = new THREE.DirectionalLight(0xffffff, 1.4);
        fillLight.position.set(200, -80, 120);
        scene.add(fillLight);

        // 4. Initialize ThreeGlobe
        const globe = new ThreeGlobe()
          .showAtmosphere(true)
          .atmosphereColor("#ffffff")
          .atmosphereAltitude(0.16);

        // Pure pitch-black emissive base material
        const globeMat = globe.globeMaterial();
        globeMat.color = new THREE.Color("#050505");
        globeMat.emissive = new THREE.Color("#000000");
        globeMat.emissiveIntensity = 0.5;
        globeMat.roughness = 0.85;
        globeMat.metalness = 0.2;

        scene.add(globe);

        // 5. Monochromatic Arcs Data Setup
        const activeArcsData = GLOBAL_HUBS.map((hub) => ({
          startLat: hub.lat,
          startLng: hub.lng,
          endLat: KADUNA.lat,
          endLng: KADUNA.lng,
          color: ["#ffffff", "#94a3b8"],
        }));

        globe
          .arcsData([])
          .arcColor((d) => d.color)
          .arcAltitude(0.32)
          .arcStroke(1.8)
          .arcDashLength(0.4)
          .arcDashGap(3)
          .arcDashInitialGap((d, i) => i * 1.2)
          .arcDashAnimateTime(1800);

        // 6. Monochromatic Rings Data (Kaduna beacon + Global Hubs)
        const ringsData = [
          {
            lat: KADUNA.lat,
            lng: KADUNA.lng,
            maxR: 9,
            propagationSpeed: 2.8,
            repeatPeriod: 1000,
            color: () => "#ffffff",
          },
          ...GLOBAL_HUBS.map((hub) => ({
            lat: hub.lat,
            lng: hub.lng,
            maxR: 4.5,
            propagationSpeed: 1.6,
            repeatPeriod: 1400,
            color: () => "#cbd5e1",
          })),
        ];

        globe
          .ringsData(ringsData)
          .ringColor((d) => d.color)
          .ringMaxRadius((d) => d.maxR)
          .ringPropagationSpeed((d) => d.propagationSpeed)
          .ringRepeatPeriod((d) => d.repeatPeriod);

        // 7. GeoJSON Boundaries (Loaded instantly from local cached file)
        fetch(LOCAL_GEOJSON_URL)
          .then((res) => res.json())
          .then((countries) => {
            globe
              .polygonsData(countries.features)
              .polygonAltitude((d) => {
                const name = d.properties.ADMIN || d.properties.NAME || d.properties.name;
                return name === "Nigeria" ? 0.06 : 0.01;
              })
              .polygonCapColor((d) => {
                const name = d.properties.ADMIN || d.properties.NAME || d.properties.name;
                return name === "Nigeria"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(20, 20, 20, 0.9)";
              })
              .polygonSideColor(() => "rgba(40, 40, 40, 0.4)")
              .polygonStrokeColor((d) => {
                const name = d.properties.ADMIN || d.properties.NAME || d.properties.name;
                return name === "Nigeria" ? "#ffffff" : "rgba(100, 100, 100, 0.35)";
              });
          })
          .catch((err) => {
            console.warn("Could not load local GeoJSON, continuing with base globe:", err);
          });

        // 8. Kaduna Hitbox for Raycasting
        const kadunaCoords = getSphericalCoords(KADUNA.lat, KADUNA.lng, 101);
        const hitboxGeometry = new THREE.SphereGeometry(6, 16, 16);
        const hitboxMaterial = new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0,
          depthWrite: false,
        });
        const kadunaHitbox = new THREE.Mesh(hitboxGeometry, hitboxMaterial);
        kadunaHitbox.position.set(kadunaCoords.x, kadunaCoords.y, kadunaCoords.z);
        kadunaHitbox.name = "kaduna_hitbox";
        globe.add(kadunaHitbox);

        // 9. Raycasting
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        handleMouseMove = (event) => {
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObject(kadunaHitbox, true);

          if (intersects.length > 0) {
            setTooltip((prev) => ({
              ...prev,
              visible: true,
              x: event.clientX + 16,
              y: event.clientY + 16,
            }));
            document.body.style.cursor = "pointer";
          } else {
            setTooltip((prev) => (prev.visible ? { ...prev, visible: false } : prev));
            document.body.style.cursor = "default";
          }
        };

        handleClick = (event) => {
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObject(kadunaHitbox, true);

          if (intersects.length > 0) {
            const joinSection = document.getElementById("join-community");
            if (joinSection) {
              joinSection.scrollIntoView({ behavior: "smooth" });
            }
          }
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("click", handleClick);

        // 10. GSAP Scrollytelling Timeline & ScrollTriggers
        const kadunaRotX = -THREE.MathUtils.degToRad(KADUNA.lat);
        const kadunaRotY = -THREE.MathUtils.degToRad(KADUNA.lng + 90);
        const africaRotX = -THREE.MathUtils.degToRad(5);
        const africaRotY = -THREE.MathUtils.degToRad(110);

        globe.rotation.x = 0.25;
        globe.rotation.y = 0;

        timeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        // Waypoint 1 (Global -> Africa)
        timeline.to(globe.rotation, {
          x: africaRotX,
          y: africaRotY,
          duration: 1.5,
          ease: "power2.inOut",
        }, 0);

        timeline.to(camera.position, {
          z: 240,
          duration: 1.5,
          ease: "power2.inOut",
        }, 0);

        // Waypoint 2 (Africa -> Nigeria / Kaduna Centered)
        timeline.to(globe.rotation, {
          x: kadunaRotX,
          y: kadunaRotY,
          duration: 1.5,
          ease: "power2.inOut",
        }, 1.5);

        timeline.to(camera.position, {
          z: 175,
          duration: 1.5,
          ease: "power2.inOut",
        }, 1.5);

        // Waypoint 3 (Nigeria -> Kaduna Extreme Close-up + Arcs Animation Trigger)
        timeline.to(camera.position, {
          z: 128,
          duration: 1.5,
          ease: "power3.inOut",
          onStart: () => {
            globe.arcsData(activeArcsData);
          },
          onReverseComplete: () => {
            globe.arcsData([]);
          },
        }, 3.0);

        // Render loop
        let autoRot = 0;
        const animate = () => {
          // Subtle idle rotation when at top
          if (timeline && timeline.scrollTrigger && timeline.scrollTrigger.progress === 0) {
            autoRot += 0.0015;
            globe.rotation.y = autoRot;
          }
          renderer.render(scene, camera);
          animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // Responsive Resize
        handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          ScrollTrigger.refresh();
        };
        window.addEventListener("resize", handleResize);

      } catch (err) {
        console.warn("WebGL initialization failed, falling back to 2D Canvas mode:", err);
        setWebglSupported(false);
      }
    } else {
      setWebglSupported(false);
    }

    // 2D Canvas Fallback loop in Pure Monochromatic Style
    if (!renderer && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      let angle = 0;

      const resize2D = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resize2D();
      window.addEventListener("resize", resize2D);

      const render2D = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const radius = Math.min(cx, cy) * 0.42;

        // Globe outline ring
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
        ctx.lineWidth = 1.5;
        ctx.shadowColor = "#ffffff";
        ctx.shadowBlur = 15;
        ctx.stroke();

        // Atmosphere glow
        const grad = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.15);
        grad.addColorStop(0, "rgba(255, 255, 255, 0.12)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.fill();

        // Rotating nodes
        angle += 0.008;
        const points = [
          { name: "Kaduna", lat: 0.18, lng: 0.1, color: "#ffffff", isKaduna: true },
          { name: "Silicon Valley", lat: -0.4, lng: -0.6, color: "#cbd5e1" },
          { name: "London", lat: 0.4, lng: -0.1, color: "#cbd5e1" },
          { name: "Tokyo", lat: 0.3, lng: 0.7, color: "#cbd5e1" },
          { name: "Nairobi", lat: -0.1, lng: 0.3, color: "#cbd5e1" },
        ];

        points.forEach((pt) => {
          const px = cx + radius * Math.cos(pt.lng + angle) * Math.cos(pt.lat);
          const py = cy + radius * Math.sin(pt.lat);

          ctx.beginPath();
          ctx.arc(px, py, pt.isKaduna ? 8 : 4, 0, Math.PI * 2);
          ctx.fillStyle = pt.color;
          ctx.fill();

          if (pt.isKaduna) {
            ctx.beginPath();
            ctx.arc(px, py, 14 + Math.sin(angle * 5) * 4, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
            ctx.stroke();

            // Connect arcs to Kaduna
            points.forEach((other) => {
              if (!other.isKaduna) {
                const ox = cx + radius * Math.cos(other.lng + angle) * Math.cos(other.lat);
                const oy = cy + radius * Math.sin(other.lat);
                ctx.beginPath();
                ctx.moveTo(ox, oy);
                ctx.quadraticCurveTo(cx, cy - 30, px, py);
                ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            });
          }
        });

        animationFrameId = requestAnimationFrame(render2D);
      };
      render2D();
    }

    // Component Cleanup
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (handleResize) window.removeEventListener("resize", handleResize);
      if (handleMouseMove) window.removeEventListener("mousemove", handleMouseMove);
      if (handleClick) window.removeEventListener("click", handleClick);
      document.body.style.cursor = "default";

      if (timeline) timeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      if (renderer) renderer.dispose();
      if (scene) scene.clear();
    };
  }, []);

  return (
    <div
      id="vision"
      ref={containerRef}
      className="relative bg-black text-slate-100 selection:bg-white selection:text-black"
    >
      {/* 3D WebGL / 2D Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Floating Raycast Tooltip */}
      {tooltip.visible && (
        <div
          style={{
            transform: `translate(${tooltip.x}px, ${tooltip.y}px)`,
          }}
          className="fixed top-0 left-0 z-50 pointer-events-none transition-transform duration-75 ease-out"
        >
          <div className="backdrop-blur-xl bg-black/90 border border-white/20 px-4 py-2.5 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                {tooltip.title}
              </p>
              <p className="text-[11px] text-slate-400 font-mono">
                {tooltip.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Scrollable Narrative Content Sections */}
      <div className="relative z-10">
        {/* Section 1: Global Stage */}
        <section className="min-h-screen flex items-center px-6 sm:px-12 lg:px-24">
          <div className="max-w-xl backdrop-blur-xl bg-black/80 border border-white/15 p-8 sm:p-10 rounded-3xl shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              Global Tech Frontier
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6 uppercase">
              Connecting Northern Nigeria to the World.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
              DigiNorth is a regional technology collective pioneering decentralized innovation,
              world-class software craftsmanship, and venture building anchored in Kaduna.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="animate-bounce text-white">↓</span> Scroll to explore the journey
            </div>
          </div>
        </section>

        {/* Section 2: African Tech Landscape */}
        <section className="min-h-screen flex items-center justify-end px-6 sm:px-12 lg:px-24">
          <div className="max-w-xl backdrop-blur-xl bg-black/80 border border-white/15 p-8 sm:p-10 rounded-3xl shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Pan-African Momentum
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-6 uppercase">
              A Continent Rising on Code and Ambition.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
              From Silicon Savannah to Lagos, African tech is transforming global industries.
              Northern Nigeria is the next massive frontier—rich with untapped developer talent,
              audacious founders, and vibrant academic institutions.
            </p>
          </div>
        </section>

        {/* Section 3: Nigeria & The Northern Corridor */}
        <section className="min-h-screen flex items-center px-6 sm:px-12 lg:px-24">
          <div className="max-w-xl backdrop-blur-xl bg-black/80 border border-white/15 p-8 sm:p-10 rounded-3xl shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              The Anchor of Northern Nigeria
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-6 uppercase">
              Kaduna: The Center of Gravity.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
              Historically the administrative capital of Northern Nigeria, Kaduna is
              rapidly transforming into a high-density engineering and startup hub, uniting
              developers from across Kano, Jos, Abuja, and Zaria.
            </p>
          </div>
        </section>

        {/* Section 4: DigiNorth Hub Activation */}
        <section className="min-h-screen flex items-center justify-end px-6 sm:px-12 lg:px-24">
          <div className="max-w-xl backdrop-blur-xl bg-black/80 border border-white/20 p-8 sm:p-10 rounded-3xl shadow-[0_0_60px_rgba(255,255,255,0.1)]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
              DigiNorth Anchor Node
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-6 uppercase">
              Global Bridges Direct to Kaduna.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
              We connect local engineering brilliance with global venture networks, mentors,
              and distributed teams across Silicon Valley, London, Tokyo, and Nairobi.
            </p>
            <div className="pt-2">
              <a
                href="#join-community"
                className="button-enchanced is-primary inline-flex items-center justify-center gap-2 !py-3.5 !px-8 text-sm font-bold shadow-2xl cursor-pointer"
              >
                <span>Join the DigiNorth Community</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
