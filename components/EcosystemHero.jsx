"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import { ArrowRight } from "lucide-react";
import { ScrambleText, useScrambleText } from "./useScrambleText";

const LOCAL_GEOJSON_URL = "/data/countries.geojson";

const KADUNA = { lat: 10.52, lng: 7.44, label: "Kaduna (DigiNorth Hub)" };
const GLOBAL_HUBS = [
  { lat: 37.7749, lng: -122.4194, label: "Silicon Valley" },
  { lat: 51.5074, lng: -0.1278, label: "London" },
  { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
  { lat: -1.2921, lng: 36.8219, label: "Nairobi" },
];

export default function EcosystemHero() {
  const canvasRef = useRef(null);
  const enterBtn = useScrambleText("ENTER THE ECOSYSTEM");

  useEffect(() => {
    if (typeof window === "undefined" || !canvasRef.current) return;

    let animationFrameId;
    let renderer = null;
    let scene = null;
    let camera = null;
    let handleResize = null;

    // Helper: Test WebGL context safely
    const isWebGLAvailable = () => {
      try {
        const testCanvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (testCanvas.getContext("webgl") ||
            testCanvas.getContext("experimental-webgl"))
        );
      } catch (e) {
        return false;
      }
    };

    if (isWebGLAvailable()) {
      try {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
          45,
          window.innerWidth / window.innerHeight,
          0.1,
          2000
        );
        camera.position.set(0, 0, 290);

        const isMobile = window.innerWidth < 768;
        renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current,
          alpha: true,
          antialias: !isMobile,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5));

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
        scene.add(ambientLight);

        const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
        keyLight.position.set(-180, 120, 160);
        scene.add(keyLight);

        const fillLight = new THREE.DirectionalLight(0xffffff, 1.5);
        fillLight.position.set(200, -80, 120);
        scene.add(fillLight);

        // ThreeGlobe setup
        const globe = new ThreeGlobe()
          .showAtmosphere(true)
          .atmosphereColor("#ffffff")
          .atmosphereAltitude(0.18);

        const globeMat = globe.globeMaterial();
        globeMat.color = new THREE.Color("#050505");
        globeMat.emissive = new THREE.Color("#000000");
        globeMat.emissiveIntensity = 0.5;
        globeMat.roughness = 0.8;
        globeMat.metalness = 0.25;

        scene.add(globe);

        // Animated Arcs
        const activeArcsData = GLOBAL_HUBS.map((hub) => ({
          startLat: hub.lat,
          startLng: hub.lng,
          endLat: KADUNA.lat,
          endLng: KADUNA.lng,
          color: ["#ffffff", "#94a3b8"],
        }));

        globe
          .arcsData(activeArcsData)
          .arcColor((d) => d.color)
          .arcAltitude(0.32)
          .arcStroke(1.8)
          .arcDashLength(0.4)
          .arcDashGap(3)
          .arcDashInitialGap((d, i) => i * 1.2)
          .arcDashAnimateTime(1800);

        // Pulsing Rings
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

        // Country Polygons
        fetch(LOCAL_GEOJSON_URL)
          .then((res) => res.json())
          .then((countries) => {
            if (!countries || !countries.features) return;
            globe
              .polygonsData(countries.features)
              .polygonAltitude((d) => {
                const name = d.properties?.ADMIN || d.properties?.NAME || d.properties?.name;
                return name === "Nigeria" ? 0.06 : 0.01;
              })
              .polygonCapColor((d) => {
                const name = d.properties?.ADMIN || d.properties?.NAME || d.properties?.name;
                return name === "Nigeria"
                  ? "rgba(255, 255, 255, 0.45)"
                  : "rgba(20, 20, 20, 0.9)";
              })
              .polygonSideColor(() => "rgba(40, 40, 40, 0.4)")
              .polygonStrokeColor((d) => {
                const name = d.properties?.ADMIN || d.properties?.NAME || d.properties?.name;
                return name === "Nigeria" ? "#ffffff" : "rgba(100, 100, 100, 0.35)";
              });
          })
          .catch(() => {});

        // Initial globe orientation
        const kadunaRotX = -THREE.MathUtils.degToRad(KADUNA.lat);
        const kadunaRotY = -THREE.MathUtils.degToRad(KADUNA.lng + 90);
        globe.rotation.x = kadunaRotX;
        globe.rotation.y = kadunaRotY;

        // Smooth subtle rotation with Viewport Visibility Observer
        let isSectionVisible = true;
        let rot = kadunaRotY;
        const animate = () => {
          if (isSectionVisible && document.visibilityState !== "hidden") {
            rot += 0.0018;
            globe.rotation.y = rot;
            if (renderer && scene && camera) {
              renderer.render(scene, camera);
            }
          }
          animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // IntersectionObserver to pause loop when scrolled out of view
        if (containerRef.current && "IntersectionObserver" in window) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              isSectionVisible = entry.isIntersecting;
            },
            { threshold: 0.05 }
          );
          observer.observe(containerRef.current);
        }

        handleResize = () => {
          if (!camera || !renderer) return;
          const mobile = window.innerWidth < 768;
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.0 : 1.5));
        };
        window.addEventListener("resize", handleResize);

      } catch (err) {
        console.warn("WebGL initialization failed in EcosystemHero, using 2D Canvas fallback:", err);
        renderer = null;
      }
    }

    // High-performance 2D Canvas fallback if WebGL is unavailable or failed
    if (!renderer && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      let angle = 0;

      const resize2D = () => {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resize2D();
      window.addEventListener("resize", resize2D);

      const render2D = () => {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const radius = Math.min(cx, cy) * 0.42;

        // Globe outline ring
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Atmosphere glow
        const grad = ctx.createRadialGradient(cx, cy, radius * 0.75, cx, cy, radius * 1.15);
        grad.addColorStop(0, "rgba(255, 255, 255, 0.08)");
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

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (handleResize) window.removeEventListener("resize", handleResize);
      if (renderer) {
        try {
          renderer.dispose();
        } catch (e) {}
      }
      if (scene) {
        try {
          scene.clear();
        } catch (e) {}
      }
    };
  }, []);

  return (
    <section id="about" className="relative min-h-screen w-full bg-black text-white flex flex-col justify-between overflow-hidden pt-28 pb-10 px-4 sm:px-6 lg:px-8">
      {/* 3D World Map / 2D Canvas in Background */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full z-0 opacity-75"
      />

      {/* Subtle vignette / overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-0" />

      {/* Main Hero Typography & Call-To-Action (Centered) */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-12">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
          Northern Nigeria Technology Ecosystem
        </div>

        {/* Massive Headline with Blue and White Gradient */}
        <h1 className="heading-hero text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.95]">
          <span className="block text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            <ScrambleText text="DIGINORTH" speed={30} />
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)] mt-1">
            <ScrambleText text="INNOVATION REGION" speed={25} delay={150} />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl font-light text-slate-300 leading-relaxed px-4">
          Building the environment from which Northern Nigeria's next generation of technology builders, products, and companies can emerge.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#engines"
            onMouseEnter={enterBtn.startScramble}
            className="button-enchanced is-primary !py-3.5 sm:!py-4 !px-8 sm:!px-10 text-xs sm:text-sm font-bold shadow-2xl cursor-pointer"
          >
            <span>{enterBtn.displayText}</span>
            <ArrowRight className="ml-2 h-4 w-4 inline" />
          </a>

          <a
            href="#join-community"
            className="button-enchanced is-outline text-xs sm:text-sm font-medium text-slate-300 hover:text-white cursor-pointer"
          >
            Join Community
          </a>
        </div>
      </div>

    </section>
  );
}
