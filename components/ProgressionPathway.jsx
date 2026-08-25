"use client";

import React from "react";
import { Compass, BookOpen, Users, Hammer, Presentation, Rocket } from "lucide-react";
import { ScrambleText } from "./useScrambleText";

export default function ProgressionPathway() {
  const steps = [
    {
      step: "01",
      title: "Discover",
      icon: Compass,
      desc: "Join community meetups, meet builders, explore domain tracks, and find your starting point.",
    },
    {
      step: "02",
      title: "Learn",
      icon: BookOpen,
      desc: "Master hands-on tech skills in Academy with weekly practice, mentorship, and code reviews.",
    },
    {
      step: "03",
      title: "Join a Team",
      icon: Users,
      desc: "Form multidisciplinary squads with developers, designers, product managers, and researchers.",
    },
    {
      step: "04",
      title: "Build",
      icon: Hammer,
      desc: "Work on real regional problems in BuildLab to create functional, high-quality tech solutions.",
    },
    {
      step: "05",
      title: "Demonstrate",
      icon: Presentation,
      desc: "Present working software at Saturday Starter Circle sessions & community demo days.",
    },
    {
      step: "06",
      title: "Launch",
      icon: Rocket,
      desc: "Deploy products into the wild, pitch to founders/investors, or scale into commercial ventures.",
    },
  ];

  return (
    <section id="pathway" className="py-24 sm:py-32 bg-black relative scroll-mt-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-3 font-semibold">
            Ecosystem Progression Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            How Talent Moves from <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_30px_rgba(0,82,255,0.35)]">Curiosity to Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-black p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-white/80 group-hover:text-white">
                      {item.step}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Connecting arrow indicator for lg screens */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-600 pointer-events-none">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
