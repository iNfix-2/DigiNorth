"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Users, 
  GraduationCap, 
  Cpu, 
  ArrowRight
} from "lucide-react";

export default function EcosystemEngines() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const engines = [
    {
      id: "community",
      code: "01 · COMMUNITY",
      icon: Users,
      title: "FIND YOUR PEOPLE",
      tagline: "DISCOVER & CONNECT",
      description:
        "Meet builders, share knowledge, discover opportunities, form multidisciplinary teams, and contribute at the level you are ready for.",
      features: [
        "Friday Community Meetups & Knowledge Sharing",
        "Saturday Starter Circle & Peer Workshops",
        "Discord & Local Kaduna Guild Channels",
        "Open-source Mentorship Networks",
      ],
      ctaText: "ENTER COMMUNITY",
      ctaLink: "/community",
      image: "/images/engines/community.jpg",
      accent: "#38bdf8",
    },
    {
      id: "academy",
      code: "02 · ACADEMY",
      icon: GraduationCap,
      title: "LEARN TO BUILD",
      tagline: "LEARN & PRACTISE",
      description:
        "Develop practical technology skills through project-based learning, consistent code reviews, industry feedback, and building in public.",
      features: [
        "Project-driven Software Architecture & AI",
        "Code Reviews from Senior Engineers",
        "Full-stack WebGL, Web3 & Mobile Tracks",
        "Evidence-based Portfolio Development",
      ],
      ctaText: "ENTER ACADEMY",
      ctaLink: "/academy",
      image: "/images/engines/academy.jpg",
      accent: "#60a5fa",
    },
    {
      id: "buildlab",
      code: "03 · BUILDLAB",
      icon: Cpu,
      title: "BUILD WHAT MATTERS",
      tagline: "BUILD & LAUNCH",
      description:
        "Research real regional challenges in Northern Nigeria, validate assumptions, develop functional prototypes, and launch viable tech ventures.",
      features: [
        "Real Problem Scoping & Field Testing",
        "Rapid Prototyping & MVP Incubation",
        "Access to Founder Mentors & Angel Capital",
        "October 'Build for the North' Hackathon",
      ],
      ctaText: "ENTER BUILDLAB",
      ctaLink: "/buildlab",
      image: "/images/engines/buildlab.jpg",
      accent: "#a855f7",
    },
  ];

  // Auto-play timer (6 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % engines.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, engines.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % engines.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + engines.length) % engines.length);
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  const activeEngine = engines[currentSlide];

  return (
    <section id="engines" className="relative py-24 sm:py-32 bg-black overflow-hidden scroll-mt-10 font-space">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 sm:mb-6 uppercase leading-tight">
            Three Engines. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_30px_rgba(0,82,255,0.35)]">One Progression Pathway.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            The parts are designed to strengthen one another rather than operate as isolated programmes.
            Talent moves seamlessly from curiosity to real useful technology.
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div
          className="relative w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Background Images with Crossfade & Slow Scale Zoom */}
          <div className="relative min-h-[520px] sm:min-h-[480px] w-full overflow-hidden flex flex-col justify-between p-6 sm:p-12">
            
            {engines.map((engine, idx) => (
              <div
                key={engine.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  currentSlide === idx ? "opacity-100 z-0 scale-105" : "opacity-0 -z-10 scale-100"
                } transition-transform duration-10000 ease-out`}
                style={{
                  backgroundImage: `url(${engine.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}

            {/* Multi-layered Contrast Dark Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60 z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30 z-10" />

            {/* Active Engine Card Content */}
            <div className="relative z-20 my-auto py-6 max-w-3xl">
              
              {/* Tagline */}
              <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-bold">
                {activeEngine.tagline}
              </span>

              {/* Title */}
              <h3 className="text-2xl sm:text-4xl font-black text-white mb-4 tracking-tight uppercase leading-tight">
                {activeEngine.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light max-w-2xl">
                {activeEngine.description}
              </p>

              {/* Bullet Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-4 border-t border-white/10 max-w-2xl">
                {activeEngine.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shrink-0 shadow-[0_0_8px_#38bdf8]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Primary Action Link */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={activeEngine.ctaLink}
                  className="button-enchanced is-primary !py-3 !px-8 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>{activeEngine.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/ecosystem"
                  className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 text-xs font-mono uppercase text-slate-300 hover:text-white transition-colors"
                >
                  View Full Ecosystem
                </Link>
              </div>
            </div>

            {/* Bottom Slider Pagination Indicator */}
            <div className="relative z-20 flex items-center justify-start pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                {engines.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx
                        ? "w-10 bg-[#38bdf8] shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                        : "w-3 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
