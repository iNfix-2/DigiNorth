"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ScrambleText, useScrambleText } from "./useScrambleText";

export default function CtaSection({ onOpenRegister }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const registerBtn = useScrambleText("REGISTER NOW");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalDistance = windowHeight + rect.height;
      const currentScroll = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalDistance));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Chevron gliding physics on scroll
  const moveDistanceX = scrollProgress * 70; // 0 to 70px outward spread
  const moveDistanceY = scrollProgress * 55; // 0 to 55px vertical glide
  const chevronScale = 0.85 + scrollProgress * 0.25;
  const chevronOpacity = Math.min(1, 0.4 + scrollProgress * 0.7);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-black py-28 sm:py-44 px-4 sm:px-6 lg:px-8 border-t border-white/10"
    >
      {/* Top Left Floating 3D Metallic Chevron - Glides towards top-left on scroll */}
      <div
        className="pointer-events-none absolute left-3 sm:left-14 top-4 sm:top-12 z-0 transition-transform duration-100 ease-out"
        style={{
          opacity: chevronOpacity,
          transform: `translate(-${moveDistanceX}px, -${moveDistanceY}px) rotate(${-40 - scrollProgress * 15}deg) scale(${chevronScale})`,
        }}
      >
        <img
          src="https://cdn.prod.website-files.com/6756df8f05088bc3e51c64c0/6a7831eb6ed37e52918b49c9_Glyphs_Coloured%201%201.avif"
          alt=""
          className="h-32 sm:h-52 md:h-64 w-auto object-contain drop-shadow-[0_0_40px_rgba(56,189,248,0.4)]"
        />
      </div>

      {/* Bottom Right Floating 3D Metallic Chevron - Glides towards bottom-right on scroll */}
      <div
        className="pointer-events-none absolute right-3 sm:right-14 bottom-4 sm:bottom-12 z-0 transition-transform duration-100 ease-out"
        style={{
          opacity: chevronOpacity,
          transform: `translate(${moveDistanceX}px, ${moveDistanceY}px) rotate(${135 + scrollProgress * 15}deg) scale(${chevronScale})`,
        }}
      >
        <img
          src="https://cdn.prod.website-files.com/6756df8f05088bc3e51c64c0/6a7831eb6ed37e52918b49c9_Glyphs_Coloured%201%201.avif"
          alt=""
          className="h-32 sm:h-52 md:h-64 w-auto object-contain drop-shadow-[0_0_40px_rgba(56,189,248,0.4)]"
        />
      </div>

      {/* Central Content */}
      <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center justify-center text-center">
        
        {/* Monospace Framed Tag */}
        <div className="border border-white/20 rounded px-3.5 py-1 text-[0.65rem] sm:text-xs font-mono uppercase tracking-widest text-[#38bdf8] backdrop-blur-md bg-white/[0.03]">
          DIGINORTH HACKATHON 2026
        </div>

        {/* Main Heading */}
        <h2 className="heading-hero text-4xl sm:text-6xl md:text-7xl tracking-tight text-white mt-6 uppercase leading-[0.95] drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          <span className="block">
            <ScrambleText text="BUILD FOR THE NORTH." triggerOnScroll={true} />
          </span>
          <span className="block bg-gradient-to-r from-white via-[#BAE6FD] to-[#0052FF] bg-clip-text text-transparent mt-1">
            <ScrambleText text="DEPLOY FOR THE WORLD." delay={150} triggerOnScroll={true} />
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-lg font-light text-slate-300 leading-relaxed max-w-xl px-2">
          5 days of intense engineering, security problem-solving, and deployment at Digi02 Hub. Compete for seed funding, incubation, and regional impact.
        </p>

        {/* Action Button */}
        <div className="mt-8">
          <button
            onClick={onOpenRegister}
            onMouseEnter={registerBtn.startScramble}
            className="button-enchanced is-primary !py-4 !px-10 text-sm sm:text-base font-bold shadow-2xl transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>{registerBtn.displayText}</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
