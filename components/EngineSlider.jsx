"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Compass, BookOpen, Cpu, ArrowRight } from "lucide-react";

export default function EngineSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      code: "01 · COMMUNITY",
      engineName: "Community Engine",
      title: "WHERE PEOPLE BELONG, DISCOVER, AND COLLABORATE.",
      desc: "Builders, beginners, learners, mentors, founders, researchers, and partners meet, share knowledge, identify problems, and form teams.",
      link: "/community",
      linkText: "Enter Community",
      secondaryLink: "/community",
      secondaryText: "Explore Lanes",
      image: "/images/engines/community.jpg",
      icon: Compass,
      accent: "#38bdf8",
    },
    {
      code: "02 · ACADEMY",
      engineName: "Academy Engine",
      title: "WHERE PRACTICAL TECHNOLOGY CAPABILITY IS DEVELOPED.",
      desc: "Structured, project-based learning helps participants move beyond course completion into credible work and collaborative building.",
      link: "/academy",
      linkText: "Explore Academy",
      secondaryLink: "/academy",
      secondaryText: "View Pathways",
      image: "/images/engines/academy.jpg",
      icon: BookOpen,
      accent: "#60a5fa",
    },
    {
      code: "03 · BUILDLAB",
      engineName: "BuildLab Engine",
      title: "WHERE VALIDATED PROBLEMS BECOME WORKING SOLUTIONS.",
      desc: "Multidisciplinary teams research users, define scope, build prototypes, test assumptions, document progress, and prepare for pilots.",
      link: "/buildlab",
      linkText: "Explore BuildLab",
      secondaryLink: "/projects",
      secondaryText: "Active Prototypes",
      image: "/images/engines/buildlab.jpg",
      icon: Cpu,
      accent: "#a855f7",
    },
  ];

  // Auto-play timer (6 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Touch Swipe handlers for mobile
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

  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images with Crossfade & Ambient Zoom */}
      <div className="relative h-[480px] sm:h-[520px] w-full overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? "opacity-100 z-10 scale-105" : "opacity-0 z-0 scale-100"
            } transition-transform duration-10000 ease-out`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* Multi-layered cinematic contrast gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40 z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent z-20" />

        {/* Main Content Area (Overlaying the background image) */}
        <div className="absolute inset-0 z-30 flex flex-col justify-end p-6 sm:p-12 pb-14 sm:pb-14 max-w-4xl">
          {slides.map((slide, idx) => {
            const Icon = slide.icon;
            if (currentSlide !== idx) return null;

            return (
              <div key={idx} className="animate-in fade-in slide-in-from-bottom-6 duration-500">
                {/* Engine Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-4 backdrop-blur-md">
                  <Icon className="w-3.5 h-3.5" />
                  <span>{slide.engineName}</span>
                </div>

                {/* Main Headline */}
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight sm:leading-tight mb-4 drop-shadow-lg">
                  {slide.title}
                </h3>

                {/* Subtitle Description */}
                <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light mb-8 max-w-2xl drop-shadow-md">
                  {slide.desc}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={slide.link}
                    className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider"
                  >
                    <span>{slide.linkText}</span>
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </Link>

                  <Link
                    href={slide.secondaryLink}
                    className="button-enchanced is-outline !py-3.5 !px-6 text-xs font-semibold text-slate-200 hover:text-white uppercase tracking-wider backdrop-blur-md bg-black/40 border-white/20 hover:border-white/50"
                  >
                    {slide.secondaryText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="absolute bottom-6 left-6 sm:left-12 z-30 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === idx
                  ? "w-8 h-1.5 bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]"
                  : "w-2 h-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
