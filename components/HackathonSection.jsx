"use client";

import React from "react";
import Link from "next/link";
import { Calendar, CheckCircle2, Trophy, ArrowRight } from "lucide-react";

export default function HackathonSection() {
  const schedule = [
    {
      day: "Friday Community",
      focus: "Connection, exposure, technical alignment & ecosystem signals.",
      badge: "Weekly Friday",
    },
    {
      day: "Saturday Starter Circle",
      focus: "Hands-on build labs, peer reviews & prototype demonstrations.",
      badge: "Weekly Saturday",
    },
    {
      day: "October Mini-Hackathon",
      focus: "Build for the North: Culmination sprint for validated team prototypes.",
      badge: "October 2026 Sprint",
      highlight: true,
    },
  ];

  const sprintStages = [
    "1. Validate Problem",
    "2. Form Team",
    "3. Build Prototype",
    "4. Field Test",
    "5. Demonstrate Live",
    "6. Incubate & Launch",
  ];

  return (
    <section id="hackathon" className="py-28 bg-black relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-xs font-mono font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
              Community Season 01 Active
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight uppercase">
              Build for the North. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
                October 2026 Mini-Hackathon.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              The DigiNorth mini-hackathon is designed as the final focused sprint of an evidence-based build cycle—not the first day teams think about their problem. Teams spend the season discovering, testing assumptions, and crafting production code.
            </p>

            {/* Weekly Cadence List */}
            <div className="space-y-4 pt-4">
              {schedule.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    item.highlight
                      ? "bg-black border-white/30 shadow-2xl"
                      : "bg-black border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white flex items-center gap-2 uppercase">
                      <Calendar className="w-4 h-4 text-[#38bdf8]" />
                      {item.day}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#38bdf8] font-semibold">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-light">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Hackathon Sprint Card */}
          <div className="lg:col-span-5">
            <div className="bg-black rounded-3xl p-8 border border-white/15 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div>
                  <span className="text-[11px] text-[#38bdf8] font-mono font-bold uppercase tracking-wider block">
                    BuildLab Culmination Sprint
                  </span>
                  <h3 className="text-xl font-bold text-white uppercase">Sprint Execution Blueprint</h3>
                </div>
                <Trophy className="w-7 h-7 text-[#38bdf8]" />
              </div>

              <p className="text-xs text-slate-300 mb-6 leading-relaxed font-light">
                Multidisciplinary squads spend 5 days building live at Digi02 Hub, stress-testing solutions with users, and presenting to regional and global venture leaders.
              </p>

              <div className="grid grid-cols-2 gap-2.5 mb-8">
                {sprintStages.map((stage, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                    <span>{stage}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/hackathon"
                  className="button-enchanced is-primary w-full text-center text-xs font-bold uppercase tracking-wider block"
                >
                  <span>Explore Hackathon 2026</span>
                  <ArrowRight className="ml-2 h-4 w-4 inline" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
