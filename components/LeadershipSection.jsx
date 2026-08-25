"use client";

import React from "react";
import { ShieldCheck, Linkedin, Twitter } from "lucide-react";

export default function LeadershipSection() {
  const team = [
    {
      name: "John Okojere",
      role: "Ecosystem Lead",
      domain: "Ecosystem Strategy",
      desc: "Coordinates DigiNorth's connected ecosystem pathways, partnerships, and strategic expansion across Northern Nigeria.",
    },
    {
      name: "Covenant Iregbeyen",
      role: "Technical Lead",
      domain: "Technology & Systems",
      desc: "Supports the technical direction, architecture, and standards of DigiNorth programmes, open-source builds, and products.",
    },
    {
      name: "Kosisochukwu Ugwubma",
      role: "Academy Lead",
      domain: "Learning & Talent",
      desc: "Guides practical learning pathways, curriculum design, and hands-on skill development for emerging tech talent.",
    },
    {
      name: "Abraham Salifu",
      role: "Community Lead",
      domain: "Community Building",
      desc: "Stewards community connection, engagement, event curation, and builder participation across the ecosystem.",
    },
    {
      name: "Ini Esiset",
      role: "AI/Data Lead",
      domain: "AI & Data Science",
      desc: "Guides AI research, machine learning engineering, and data initiative activity within the DigiNorth ecosystem.",
    },
  ];

  return (
    <section id="leadership" className="py-28 bg-black relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-xs font-mono uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" /> Leadership Team
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6 uppercase">
            People Shaping <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_30px_rgba(0,82,255,0.35)]">The Pathways.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            DigiNorth is built by people coordinating community, learning, technology, AI & data, and ecosystem development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-black border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                    {member.domain}
                  </span>
                </div>

                {/* Avatar Initial */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg bg-white/5 border border-white/10 text-white">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase group-hover:text-slate-200 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 font-medium uppercase mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {member.desc}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500 uppercase">Kaduna Node</span>
                <div className="flex items-center gap-2">
                  <a href="https://linkedin.com/company/diginorth" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer">
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://x.com/NorthDigi59258" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer">
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
