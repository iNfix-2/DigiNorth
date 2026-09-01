"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ScrollRoadmap() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  const steps = [
    {
      num: "01",
      category: "COMMUNITY EXPLORATION",
      title: "DISCOVER",
      desc: "Join community meetups, meet builders, explore domain tracks, and find your starting point in the ecosystem.",
      isLeft: true,
    },
    {
      num: "02",
      category: "SKILL MASTERY",
      title: "LEARN",
      desc: "Master hands-on tech skills in Academy with weekly practice, deep mentorship, and rigorous code reviews.",
      isLeft: false,
    },
    {
      num: "03",
      category: "COLLABORATIVE SQUADS",
      title: "JOIN A TEAM",
      desc: "Form multidisciplinary squads with developers, UI/UX designers, product managers, and researchers.",
      isLeft: true,
    },
    {
      num: "04",
      category: "PRACTICAL ENGINEERING",
      title: "BUILD",
      desc: "Work on real regional problems in BuildLab to create functional, robust, and high-quality tech solutions.",
      isLeft: false,
    },
    {
      num: "05",
      category: "PROOF OF WORK",
      title: "DEMONSTRATE",
      desc: "Present working software at Saturday Starter Circle sessions, peer feedback rounds, and community demo days.",
      isLeft: true,
    },
    {
      num: "06",
      category: "VENTURE & PRODUCTION",
      title: "LAUNCH",
      desc: "Deploy products into the wild, pitch to founders and investors, or scale into enduring commercial ventures.",
      isLeft: false,
    },
    {
      num: "07",
      category: "ECOSYSTEM GROWTH",
      title: "SCALE & PILOT",
      desc: "Advance validated solutions into public and private sector pilots across Northern Nigeria.",
      isLeft: true,
    },
    {
      num: "08",
      category: "NETWORK STEWARDSHIP",
      title: "MENTOR",
      desc: "Help the next cohort move faster, open partner networks, and strengthen the regional ecosystem.",
      isLeft: false,
    },
  ];

  useEffect(() => {
    let animationFrameId;

    const updateScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      const currentScroll = -rect.top;

      if (totalScrollable > 0) {
        const rawProgress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
        setProgress(rawProgress);
        const calculatedIndex = Math.min(
          steps.length - 1,
          Math.floor(rawProgress * steps.length)
        );
        setActiveIdx(calculatedIndex);
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [steps.length]);

  const scrollToStep = (idx) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetY = scrollTop + rect.top + (idx / steps.length) * totalScrollable + 50;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="relative h-[280vh] sm:h-[300vh] my-10">
      {/* Sticky Viewport Container — Pinned on screen during scroll */}
      <div className="sticky top-20 sm:top-24 h-[82vh] sm:h-[78vh] max-h-[760px] w-full rounded-3xl bg-gradient-to-b from-white/[0.04] via-black to-black/95 border border-white/10 p-5 sm:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Background Ambient Glows */}
        <div
          className="absolute w-96 h-96 rounded-full bg-[#0052FF]/20 blur-[120px] pointer-events-none transition-all duration-700 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: steps[activeIdx].isLeft ? "25%" : "75%",
            top: "50%",
          }}
        />

        {/* Top Header & Step Jump Pills */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] font-semibold">
                Scroll-Driven Journey · Stage {steps[activeIdx].num} / 08
              </span>
            </div>

            {/* Quick Step Jump Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {steps.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToStep(idx)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all duration-300 ${
                    activeIdx === idx
                      ? "bg-[#38bdf8] text-black shadow-[0_0_12px_rgba(56,189,248,0.8)] scale-105"
                      : idx < activeIdx
                      ? "bg-white/10 text-white/80 hover:bg-white/20"
                      : "bg-white/5 text-white/40 hover:bg-white/10"
                  }`}
                >
                  {s.num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Central Vertical Timeline Display with Animated Laser Line */}
        <div className="relative flex-1 flex items-center justify-center my-2">
          {/* Inactive Base Vertical Line */}
          <div className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-white/10" />

          {/* Active Animated Glowing Neon Laser Line (Drawn based on scroll progress) */}
          <div
            className="absolute left-1/2 top-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#38bdf8] via-[#0052FF] to-[#38bdf8] shadow-[0_0_14px_#38bdf8] transition-all duration-150 ease-out"
            style={{
              height: `calc(${progress * 100}% - 32px)`,
              maxHeight: "calc(100% - 32px)",
            }}
          />

          {/* 8 Nodes positioned vertically along the central axis */}
          <div className="absolute inset-y-4 left-1/2 -translate-x-1/2 flex flex-col justify-between items-center pointer-events-none">
            {steps.map((s, idx) => {
              const isActive = activeIdx === idx;
              const isPassed = activeIdx >= idx;

              return (
                <div
                  key={idx}
                  className={`relative z-10 transition-all duration-500 ${
                    isActive
                      ? "scale-125"
                      : isPassed
                      ? "scale-100 opacity-90"
                      : "scale-90 opacity-30"
                  }`}
                >
                  {/* Concentric Node */}
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 bg-black flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? "border-[#38bdf8] shadow-[0_0_20px_#38bdf8]"
                        : isPassed
                        ? "border-[#38bdf8]/70 shadow-[0_0_8px_rgba(56,189,248,0.4)]"
                        : "border-white/20 shadow-none"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${
                        isActive
                          ? "bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] scale-125"
                          : isPassed
                          ? "bg-[#38bdf8]/80"
                          : "bg-white/20"
                      }`}
                    />
                  </div>

                  {/* Pulsing halo ring on active node */}
                  {isActive && (
                    <div className="absolute -inset-1 rounded-full border border-[#38bdf8] animate-ping opacity-50" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Step Content Callout Card (Floating in place, matching screenshot) */}
          <div className="w-full grid grid-cols-12 items-center gap-4 z-20">
            {/* Left Column */}
            <div className="col-span-5 flex items-center justify-end">
              {steps[activeIdx].isLeft ? (
                /* Active Content on Left */
                <div className="text-right pr-3 sm:pr-8 animate-in fade-in slide-in-from-left-4 duration-300">
                  <span className="text-[10px] sm:text-xs font-mono font-semibold text-[#38bdf8] tracking-widest uppercase mb-1.5 block">
                    {steps[activeIdx].category}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2 leading-tight">
                    {steps[activeIdx].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm ml-auto">
                    {steps[activeIdx].desc}
                  </p>
                </div>
              ) : (
                /* Ghost Number on Left */
                <div className="pr-4 sm:pr-8 animate-in fade-in duration-300">
                  <span className="text-4xl sm:text-7xl font-black font-mono text-slate-700/80 select-none">
                    {steps[activeIdx].num}
                  </span>
                </div>
              )}
            </div>

            {/* Center Spacer */}
            <div className="col-span-2" />

            {/* Right Column */}
            <div className="col-span-5 flex items-center justify-start">
              {!steps[activeIdx].isLeft ? (
                /* Active Content on Right */
                <div className="text-left pl-3 sm:pl-8 animate-in fade-in slide-in-from-right-4 duration-300">
                  <span className="text-[10px] sm:text-xs font-mono font-semibold text-[#38bdf8] tracking-widest uppercase mb-1.5 block">
                    {steps[activeIdx].category}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2 leading-tight">
                    {steps[activeIdx].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm mr-auto">
                    {steps[activeIdx].desc}
                  </p>
                </div>
              ) : (
                /* Ghost Number on Right */
                <div className="pl-4 sm:pl-8 animate-in fade-in duration-300">
                  <span className="text-4xl sm:text-7xl font-black font-mono text-slate-700/80 select-none">
                    {steps[activeIdx].num}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Status & Scroll Prompt */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-[#38bdf8] font-bold">{Math.round(progress * 100)}%</span>
            <span className="text-slate-500">Pipeline Progression</span>
          </div>

          <div className="flex items-center gap-1 text-slate-400 animate-bounce text-[11px]">
            <span>Scroll to advance</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#38bdf8]" />
          </div>
        </div>
      </div>
    </div>
  );
}
