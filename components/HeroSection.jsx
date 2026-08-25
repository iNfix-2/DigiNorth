"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrambleText, useScrambleText } from "./useScrambleText";

const HERO_PARTNERS = [
  {
    name: "DICON",
    label: "Defence Corp.",
    logo: "/images/partners/dicon.png",
    height: "h-5 sm:h-7",
  },
  {
    name: "NAF",
    label: "Air Force",
    logo: "/images/partners/naf.png",
    height: "h-5 sm:h-7",
  },
  {
    name: "NPF",
    label: "Police Force",
    logo: "/images/partners/npf.png",
    height: "h-5 sm:h-7",
  },
  {
    name: "NSP",
    label: "North South Power",
    logo: "/images/partners/nsp.png",
    height: "h-5 sm:h-7",
  },
  {
    name: "NCC",
    label: "Commission",
    logo: "/images/partners/ncc.png",
    height: "h-4 sm:h-6",
  },
  {
    name: "Digi02",
    label: "Venue Partner",
    logo: "/images/partners/digi02.png",
    height: "h-4 sm:h-6",
  },
  {
    name: "Nethawk",
    label: "Tech Partner",
    logo: "/images/partners/nethawk.png",
    height: "h-5 sm:h-7",
  },
];

export default function HeroSection({ onOpenRegister }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const registerBtn = useScrambleText("REGISTER NOW");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalScrollDistance = rect.height - windowHeight;
      if (totalScrollDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sliding bracket animation physics (0 to 50vw spread)
  const bracketDistance = Math.min(50, scrollProgress * 65);

  // Top hero content opacity (fades out during initial scroll)
  const topContentOpacity = Math.max(0, 1 - scrollProgress * 3.5);

  // Brackets opacity (hidden on initial top view, fades in on scroll, fades out before next section)
  let bracketOpacity = 0;
  if (scrollProgress >= 0.04 && scrollProgress <= 0.80) {
    bracketOpacity = Math.min(1, (scrollProgress - 0.04) * 8);
  } else if (scrollProgress > 0.80) {
    bracketOpacity = Math.max(0, 1 - (scrollProgress - 0.80) * 5);
  }

  // Headline text opacity (fades in as brackets slide, then fades out before next section)
  let textOpacity = 0;
  if (scrollProgress >= 0.15 && scrollProgress <= 0.78) {
    textOpacity = Math.min(1, (scrollProgress - 0.15) * 4);
  } else if (scrollProgress > 0.78) {
    textOpacity = Math.max(0, 1 - (scrollProgress - 0.78) * 5);
  }
  const textScale = 0.90 + Math.min(0.10, scrollProgress * 0.18);

  // Background visual opacity (portrait video on mobile, image on desktop)
  let visualOpacity = 0;
  if (scrollProgress >= 0.22 && scrollProgress <= 0.76) {
    visualOpacity = Math.min(1, (scrollProgress - 0.22) * 4.5);
  } else if (scrollProgress > 0.76) {
    visualOpacity = Math.max(0, 1 - (scrollProgress - 0.76) * 5);
  }

  // Video playback control tied to visibility
  useEffect(() => {
    if (!videoRef.current) return;
    if (visualOpacity > 0.05) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [visualOpacity]);

  return (
    <div id="about" ref={containerRef} className="relative w-full bg-black text-white" style={{ minHeight: "300vh" }}>
      {/* Sticky Viewport */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden px-4 pt-16 pb-4 sm:px-6 lg:px-8 bg-black">
        
        {/* Pure Pitch Black Background */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-black" />

        {/* Video Background Animation */}
        <div
          className="pointer-events-none absolute top-0 inset-x-0 h-[48vh] md:h-[52vh] lg:h-[58vh] z-0 overflow-hidden transition-opacity duration-150"
          style={{
            opacity: visualOpacity,
          }}
        >
          <video
            ref={videoRef}
            src="/videos/DigiVid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black pointer-events-none" />
        </div>

        {/* Top Hero Content (Layer 1: Initial Page Load Stage) */}
        <div
          className="relative z-10 my-auto flex flex-col items-center justify-center text-center transition-all duration-200 max-w-5xl mx-auto pt-6"
          style={{
            opacity: topContentOpacity,
            transform: `translateY(-${scrollProgress * 80}px)`,
            pointerEvents: topContentOpacity < 0.1 ? "none" : "auto",
          }}
        >
          {/* Main Hero Typography */}
          <h1 className="heading-hero text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase">
            <span className="text-white block drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
              <ScrambleText text="DIGINORTH" speed={30} />
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] block drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
              <ScrambleText text="HACKATHON 2026" speed={25} delay={150} />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 max-w-2xl text-base sm:text-xl font-light text-slate-300 leading-relaxed px-4">
            Solve real problems. Build smart solutions. Win prizes. Create lasting impact.
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenRegister}
              onMouseEnter={registerBtn.startScramble}
              className="button-enchanced is-primary !py-3.5 sm:!py-4 !px-8 sm:!px-10 text-sm sm:text-base font-bold shadow-2xl"
            >
              <span>{registerBtn.displayText}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>

            <a
              href="#pillars"
              className="button-enchanced is-outline text-sm sm:text-base font-medium text-slate-300 hover:text-white"
            >
              Explore Tracks
            </a>
          </div>
        </div>

        {/* Center Revealed Stage (Layer 2: Sliding Brackets & Revealed Headline) */}
        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
          
          {/* Brackets & Headline Lockup */}
          <div className="relative flex w-full max-w-5xl items-center justify-center">
            
            {/* Left 3D Metallic Bracket */}
            <div
              className="absolute left-1/2 -translate-x-full pr-1 sm:pr-4 transition-all duration-100 ease-out pointer-events-none"
              style={{
                opacity: bracketOpacity,
                transform: `translateX(calc(-100% - ${bracketDistance}vw))`,
              }}
            >
              <img
                src="https://cdn.prod.website-files.com/6756df8f05088bc3e51c64c0/6a7816137e6816676b05eeb9_Glyphs%201%201.avif"
                alt="Left Bracket"
                className="h-36 sm:h-60 md:h-72 lg:h-88 w-auto object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]"
              />
            </div>

            {/* Center Revealed Massive Headline + Brief Description */}
            <div
              className="relative flex flex-col items-center justify-center text-center px-3 sm:px-6 transition-all duration-200 pointer-events-none max-w-3xl mx-auto z-10 mt-[16vh] md:mt-[22vh]"
              style={{
                opacity: textOpacity,
                transform: `scale(${textScale}) translateY(${(1 - textOpacity) * 15}px)`,
              }}
            >
              <h2 className="font-space font-extrabold text-2xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-[1.0] drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
                <span className="block">
                  <ScrambleText text="CAN YOUR TECH" triggerOnScroll={true} />
                </span>
                <span className="block bg-gradient-to-r from-white via-[#BAE6FD] to-[#0052FF] bg-clip-text text-transparent mt-1">
                  <ScrambleText text="SECURE THE NORTH" delay={150} triggerOnScroll={true} />
                </span>
              </h2>
              
              <p className="mt-2.5 sm:mt-3 text-[0.68rem] sm:text-sm font-mono tracking-widest text-[#38bdf8] uppercase font-semibold">
                20th – 24th October 2026
              </p>

              {/* Brief Description */}
              <p className="mt-2.5 sm:mt-4 text-xs sm:text-base font-light text-slate-300 leading-relaxed max-w-2xl mx-auto px-2">
                Join Northern Nigeria’s premier 5-day hackathon uniting engineers, researchers, and creators to build mission-critical solutions in AI, security, and digital infrastructure.
              </p>
            </div>

            {/* Right 3D Metallic Bracket */}
            <div
              className="absolute right-1/2 translate-x-full pl-1 sm:pl-4 transition-all duration-100 ease-out pointer-events-none"
              style={{
                opacity: bracketOpacity,
                transform: `translateX(calc(100% + ${bracketDistance}vw))`,
              }}
            >
              <img
                src="https://cdn.prod.website-files.com/6756df8f05088bc3e51c64c0/6a7816131f6681ee559ce584_Glyphs%201%202.avif"
                alt="Right Bracket"
                className="h-36 sm:h-60 md:h-72 lg:h-88 w-auto object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]"
              />
            </div>

          </div>

        </div>

        {/* Sleek Horizontal Partner Strip */}
        <div id="partners" className="relative z-30 mx-auto w-full max-w-6xl pb-2">
          {/* Mobile Partner Slideshow / Marquee */}
          <div className="sm:hidden relative w-full overflow-hidden py-2 border-t border-white/10 backdrop-blur-md bg-black/80 rounded-xl">
            <div className="animate-marquee-mobile flex items-center gap-6 px-3">
              {[...HERO_PARTNERS, ...HERO_PARTNERS].map((partner, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center shrink-0 w-20 text-center">
                  <div className="h-7 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className={`${partner.height} w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
                    />
                  </div>
                  <span className="text-[0.62rem] font-mono text-slate-400 uppercase mt-1">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Clean Row */}
          <div className="hidden sm:flex items-center justify-between gap-4 px-6 py-3 border-t border-white/10 backdrop-blur-md bg-black/80 rounded-xl">
            {HERO_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center text-center group transition-transform hover:scale-105"
              >
                <div className="h-8 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`${partner.height} w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]`}
                  />
                </div>
                <span className="mt-1 font-space font-bold text-[0.68rem] text-white uppercase group-hover:text-slate-200">
                  {partner.name}
                </span>
                <span className="text-[0.55rem] font-mono text-slate-400 uppercase">
                  {partner.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
