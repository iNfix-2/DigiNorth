"use client";

import React, { useEffect, useRef } from "react";
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
  { lat: 1.3521, lng: 103.8198, label: "Singapore" },
  { lat: 25.2048, lng: 55.2708, label: "Dubai" },
];

export default function EcosystemHero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const enterBtn = useScrambleText("ENTER THE ECOSYSTEM");

  useEffect(() => {
    if (typeof window === "undefined" || !canvasRef.current) return;

    let animationFrameId;
    let renderer = null;
    let scene = null;
    let camera = null;
    let handleResize = null;
    let observer = null;

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
        camera.position.set(0, 0, 300);

        // High-DPI Sharp WebGL Renderer with full antialiasing
        renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current,
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        // Force high resolution pixel ratio for ultra-crisp, razor-thin vector lines
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2.5));

        // Pinpoint Starfield Particles
        const starsGeo = new THREE.BufferGeometry();
        const starCount = 500;
        const starPositions = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount * 3; i += 3) {
          starPositions[i] = (Math.random() - 0.5) * 800;
          starPositions[i + 1] = (Math.random() - 0.5) * 800;
          starPositions[i + 2] = (Math.random() - 0.5) * 400 - 100;
        }
        starsGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
        const starsMat = new THREE.PointsMaterial({
          color: 0xffffff,
          size: 0.8,
          transparent: true,
          opacity: 0.35,
        });
        const starField = new THREE.Points(starsGeo, starsMat);
        scene.add(starField);

        // Pure Crisp Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
        scene.add(ambientLight);

        const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
        keyLight.position.set(-180, 140, 180);
        scene.add(keyLight);

        const fillLight = new THREE.DirectionalLight(0xffffff, 1.2);
        fillLight.position.set(200, -100, 140);
        scene.add(fillLight);

        // ThreeGlobe setup (Razor-sharp Black & White theme)
        const globe = new ThreeGlobe()
          .showAtmosphere(true)
          .atmosphereColor("#ffffff")
          .atmosphereAltitude(0.09);

        const globeMat = globe.globeMaterial();
        globeMat.color = new THREE.Color("#030303");
        globeMat.emissive = new THREE.Color("#000000");
        globeMat.emissiveIntensity = 0.2;
        globeMat.roughness = 0.9;
        globeMat.metalness = 0.1;

        scene.add(globe);

        // Thin, razor-sharp white animated flight arcs
        const activeArcsData = GLOBAL_HUBS.map((hub) => ({
          startLat: hub.lat,
          startLng: hub.lng,
          endLat: KADUNA.lat,
          endLng: KADUNA.lng,
          color: ["#ffffff", "rgba(255, 255, 255, 0.35)"],
        }));

        globe
          .arcsData(activeArcsData)
          .arcColor((d) => d.color)
          .arcAltitude(0.28)
          .arcStroke(0.45) // Hair-thin crisp lines
          .arcDashLength(0.35)
          .arcDashGap(2.0)
          .arcDashInitialGap((d, i) => i * 0.7)
          .arcDashAnimateTime(2200);

        // Thin, crisp pulsing radar rings
        const ringsData = [
          {
            lat: KADUNA.lat,
            lng: KADUNA.lng,
            maxR: 9,
            propagationSpeed: 2.5,
            repeatPeriod: 1000,
            color: () => "#ffffff",
          },
          ...GLOBAL_HUBS.map((hub) => ({
            lat: hub.lat,
            lng: hub.lng,
            maxR: 4.5,
            propagationSpeed: 1.5,
            repeatPeriod: 1500,
            color: () => "rgba(255, 255, 255, 0.6)",
          })),
        ];

        globe
          .ringsData(ringsData)
          .ringColor((d) => d.color)
          .ringMaxRadius((d) => d.maxR)
          .ringPropagationSpeed((d) => d.propagationSpeed)
          .ringRepeatPeriod((d) => d.repeatPeriod);

        // Razor-thin, highly detailed GeoJSON Country Polygons
        fetch(LOCAL_GEOJSON_URL)
          .then((res) => res.json())
          .then((countries) => {
            if (!countries || !countries.features) return;
            globe
              .polygonsData(countries.features)
              .polygonAltitude((d) => {
                const name = d.properties?.ADMIN || d.properties?.NAME || d.properties?.name;
                return name === "Nigeria" ? 0.008 : 0.003;
              })
              .polygonCapColor((d) => {
                const name = d.properties?.ADMIN || d.properties?.NAME || d.properties?.name;
                return name === "Nigeria"
                  ? "rgba(255, 255, 255, 0.22)"
                  : "rgba(255, 255, 255, 0.04)";
              })
              .polygonSideColor(() => "rgba(0, 0, 0, 0)") // Zero extrusion blur
              .polygonStrokeColor((d) => {
                const name = d.properties?.ADMIN || d.properties?.NAME || d.properties?.name;
                return name === "Nigeria"
                  ? "#ffffff"
                  : "rgba(255, 255, 255, 0.65)"; // Crisp high-definition white boundary lines
              });
          })
          .catch(() => {});

        // Initial orientation toward Africa / Nigeria
        const kadunaRotX = -THREE.MathUtils.degToRad(KADUNA.lat);
        const kadunaRotY = -THREE.MathUtils.degToRad(KADUNA.lng + 90);
        globe.rotation.x = kadunaRotX;
        globe.rotation.y = kadunaRotY;

        // Smooth continuous 3D world rotation
        let isSectionVisible = true;
        let rot = kadunaRotY;
        const animate = () => {
          if (isSectionVisible && document.visibilityState !== "hidden") {
            rot += 0.0016;
            globe.rotation.y = rot;
            starField.rotation.y += 0.0002;
            if (renderer && scene && camera) {
              renderer.render(scene, camera);
            }
          }
          animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // Viewport Visibility Observer to pause when scrolled out of view
        if (containerRef.current && "IntersectionObserver" in window) {
          observer = new IntersectionObserver(
            ([entry]) => {
              isSectionVisible = entry.isIntersecting;
            },
            { threshold: 0.05 }
          );
          observer.observe(containerRef.current);
        }

        handleResize = () => {
          if (!camera || !renderer) return;
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2.5));
        };
        window.addEventListener("resize", handleResize);

      } catch (err) {
        console.warn("WebGL initialization note in EcosystemHero:", err);
      }
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (handleResize) window.removeEventListener("resize", handleResize);
      if (observer && containerRef.current) observer.unobserve(containerRef.current);
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen w-full bg-black text-white flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8 font-space"
    >
      {/* 3D Black & White Razor-Sharp Globe Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full z-0 opacity-90 [image-rendering:-webkit-optimize-contrast]"
      />

      {/* Subtle depth vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-0" />

      {/* Main Hero Typography & Call-To-Action */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-12">
        {/* Massive Headline */}
        <h1 className="heading-hero text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.95]">
          <span className="block text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
            <ScrambleText text="DIGINORTH" speed={30} />
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.5)] mt-2">
            <ScrambleText text="INNOVATION REGION" speed={25} delay={150} />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl font-light text-slate-300 leading-relaxed px-4">
          Building the environment from which Northern Nigeria's next generation of technology builders, products, and companies can emerge.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4">
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
