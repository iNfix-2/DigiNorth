"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function ProgressionPathway() {
  const steps = [
    {
      step: "01",
      title: "Discover",
      tag: "Community Exploration",
      desc: "Join community meetups, meet builders, explore domain tracks, and find your starting point in the ecosystem.",
    },
    {
      step: "02",
      title: "Learn",
      tag: "Skill Mastery",
      desc: "Master hands-on tech skills in Academy with weekly practice, deep mentorship, and rigorous code reviews.",
    },
    {
      step: "03",
      title: "Join a Team",
      tag: "Collaborative Squads",
      desc: "Form multidisciplinary squads with developers, UI/UX designers, product managers, and researchers.",
    },
    {
      step: "04",
      title: "Build",
      tag: "Practical Engineering",
      desc: "Work on real regional problems in BuildLab to create functional, robust, and high-quality tech solutions.",
    },
    {
      step: "05",
      title: "Demonstrate",
      tag: "Proof of Work",
      desc: "Present working software at Saturday Starter Circle sessions, peer feedback rounds, and community demo days.",
    },
    {
      step: "06",
      title: "Launch",
      tag: "Venture & Production",
      desc: "Deploy products into the wild, pitch to founders and investors, or scale into enduring commercial ventures.",
    },
  ];

  return (
    <section id="pathway" className="py-28 sm:py-36 bg-black relative scroll-mt-10 border-t border-white/10 font-space overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0052FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Progression Roadmap
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight mb-4">
            How Talent Moves from <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_30px_rgba(0,82,255,0.35)]">
              Curiosity to Impact
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto">
            A structured, continuous pipeline designed to take aspiring technologists from their very first meetup to shipping scalable production systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Spine Line (Desktop: Center, Mobile: Left) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#38bdf8]/10 via-[#38bdf8]/40 to-[#38bdf8]/10 pointer-events-none" />

          <div className="space-y-14 sm:space-y-24">
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 0; // True for 01, 03, 05 (Left on desktop)

              return (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row items-start md:items-center group"
                >
                  {/* Left Side (Desktop: Content if even, Number if odd) */}
                  <div
                    className={`w-full md:w-1/2 pl-14 md:pl-0 ${
                      isEven ? "md:pr-14 md:text-right" : "md:pr-14 md:text-right order-2 md:order-1"
                    }`}
                  >
                    {isEven ? (
                      /* Even Step Content on Left (Desktop) */
                      <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
                        <div className="flex items-center gap-2 md:justify-end mb-1">
                          <span className="md:hidden text-xs font-mono font-bold text-[#38bdf8] bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                            {item.step}
                          </span>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#38bdf8]">
                            {item.tag}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light max-w-md ml-auto">
                          {item.desc}
                        </p>
                      </div>
                    ) : (
                      /* Odd Step Large Watermark Number on Left (Desktop) */
                      <div className="hidden md:flex items-center justify-end pr-4 select-none">
                        <span className="text-7xl lg:text-8xl font-black font-mono text-white/[0.07] tracking-tighter transition-colors duration-300 group-hover:text-[#38bdf8]/20">
                          {item.step}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Center Node (Circular Target Indicator on the Vertical Line) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-1.5 md:top-auto z-20 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      {/* Outer target ring */}
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black border-2 border-[#38bdf8] flex items-center justify-center shadow-[0_0_18px_rgba(56,189,248,0.45)] transition-transform duration-300 group-hover:scale-110">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#38bdf8]" />
                      </div>
                    </div>
                  </div>

                  {/* Right Side (Desktop: Number if even, Content if odd) */}
                  <div
                    className={`w-full md:w-1/2 pl-14 md:pl-14 ${
                      isEven ? "order-1 md:order-2 md:text-left" : "order-1 md:order-2 md:text-left"
                    }`}
                  >
                    {isEven ? (
                      /* Even Step Large Watermark Number on Right (Desktop) */
                      <div className="hidden md:flex items-center pl-4 select-none">
                        <span className="text-7xl lg:text-8xl font-black font-mono text-white/[0.07] tracking-tighter transition-colors duration-300 group-hover:text-[#38bdf8]/20">
                          {item.step}
                        </span>
                      </div>
                    ) : (
                      /* Odd Step Content on Right (Desktop) */
                      <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="md:hidden text-xs font-mono font-bold text-[#38bdf8] bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                            {item.step}
                          </span>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#38bdf8]">
                            {item.tag}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light max-w-md">
                          {item.desc}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
