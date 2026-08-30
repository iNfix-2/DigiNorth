"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Linkedin, Twitter } from "lucide-react";

export default function LeadershipSection() {
  const team = [
    {
      name: "John Okojere",
      role: "Ecosystem Lead",
      domain: "Ecosystem Strategy",
      image: "/images/leadership/john.webp",
      objectPos: "center 10%",
      desc: "Coordinates DigiNorth's connected ecosystem pathways, partnerships, and strategic expansion across Northern Nigeria.",
    },
    {
      name: "Covenant Iregbeyen",
      role: "Technical Lead",
      domain: "Technology & Systems",
      image: "/images/leadership/covenant_hd.webp",
      objectPos: "center 15%",
      desc: "Supports the technical direction, architecture, and standards of DigiNorth programmes, open-source builds, and products.",
    },
    {
      name: "Kosisochukwu Ugwubma",
      role: "Academy Lead",
      domain: "Learning & Talent",
      image: "/images/leadership/kosi.webp",
      objectPos: "center 15%",
      desc: "Guides practical learning pathways, curriculum design, and hands-on skill development for emerging tech talent.",
    },
    {
      name: "Abraham Salifu",
      role: "Community Lead",
      domain: "Community Building",
      image: "/images/leadership/abraham.webp",
      objectPos: "center 15%",
      desc: "Stewards community connection, engagement, event curation, and builder participation across the ecosystem.",
    },
    {
      name: "Ini Esiset",
      role: "AI/Data Lead",
      domain: "AI & Data Science",
      image: "/images/leadership/ini.webp",
      objectPos: "center 20%",
      desc: "Guides AI research, machine learning engineering, and data initiative activity within the DigiNorth ecosystem.",
    },
  ];

  const executiveDirection = [
    {
      tag: "01 / FOUNDER",
      name: "Doyin Akerele",
      role: "Founder · Nethawk Solutions",
      image: "/images/leadership/doyin.webp",
      objectPos: "center 18%",
    },
    {
      tag: "02 / LEADERSHIP",
      name: "Olamide",
      role: "Managing Director · Nethawk Solutions",
      image: "/images/leadership/olamide.webp",
      objectPos: "center 18%",
    },
    {
      tag: "03 / LEADERSHIP",
      name: "Ovidi",
      role: "Chief Executive Officer · Digi02 Tech Systems",
      image: "/images/leadership/ovidi.webp",
      objectPos: "center 18%",
    },
  ];

  return (
    <section id="leadership" className="py-24 sm:py-28 bg-black relative border-t border-white/10 font-space">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Executive Direction (The people helping shape DigiNorth's direction) */}
        <div className="mb-24 sm:mb-28">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-3 font-semibold">
              PEOPLE // LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight mb-4">
              The people helping shape <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_30px_rgba(0,82,255,0.35)]">
                DigiNorth’s direction.
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              DigiNorth is strengthened by leaders building technology capability, partnerships, and long-term institutional direction across the ecosystem.
            </p>
          </div>

          {/* 3-Column Full-Height Portrait Grid for 100% Uncropped Full-Image Visibility */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {executiveDirection.map((exec, idx) => (
              <div
                key={idx}
                className="bg-[#071a38]/30 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative group hover:border-white/30 transition aspect-[4/5] min-h-[440px] sm:min-h-[480px] flex flex-col justify-end"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={exec.image}
                    alt={exec.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectPosition: exec.objectPos }}
                    className="object-cover filter contrast-105 brightness-95 group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                </div>
                
                <div className="relative z-10 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    {exec.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-300 uppercase mt-1">
                    {exec.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Leadership Team (People Shaping The Pathways) */}
        <div className="border-t border-white/10 pt-20 sm:pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-xs font-mono uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" /> Leadership Team
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 sm:mb-6 uppercase">
              People Shaping <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_30px_rgba(0,82,255,0.35)]">The Pathways.</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light px-2">
              DigiNorth is built by people coordinating community, learning, technology, AI & data, and ecosystem development.
            </p>
          </div>

          {/* Top 3 Operational Leads */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.slice(0, 3).map((member, idx) => (
              <div
                key={idx}
                className="bg-black border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/30 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Portrait Frame - Standardized Square Aspect Ratio (1:1) */}
                  <div className="relative w-full aspect-square overflow-hidden bg-[#0d0d0d] border-b border-white/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectPosition: member.objectPos }}
                      className="object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Clean Content Area */}
                  <div className="p-6 sm:p-8">
                    <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] font-semibold mb-2">
                      {member.domain}
                    </span>
                    <h3 className="text-xl font-bold text-white uppercase group-hover:text-slate-200 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 font-medium uppercase mt-0.5 mb-4">
                      {member.role}
                    </p>

                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      {member.desc}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Kaduna Node</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://linkedin.com/company/diginorth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://x.com/NorthDigi59258"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom 2 Operational Leads - Centered on Desktop Screen */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-8 mt-6 sm:mt-8">
            {team.slice(3, 5).map((member, idx) => (
              <div
                key={idx}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc((100%-4rem)/3)] max-w-md lg:max-w-none bg-black border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/30 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Portrait Frame - Standardized Square Aspect Ratio (1:1) */}
                  <div className="relative w-full aspect-square overflow-hidden bg-[#0d0d0d] border-b border-white/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectPosition: member.objectPos }}
                      className="object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Clean Content Area */}
                  <div className="p-6 sm:p-8">
                    <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] font-semibold mb-2">
                      {member.domain}
                    </span>
                    <h3 className="text-xl font-bold text-white uppercase group-hover:text-slate-200 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 font-medium uppercase mt-0.5 mb-4">
                      {member.role}
                    </p>

                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      {member.desc}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Kaduna Node</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://linkedin.com/company/diginorth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://x.com/NorthDigi59258"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
