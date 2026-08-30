"use client";

import React from "react";
import Image from "next/image";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-black border-t border-white/10 font-space">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-3 font-semibold">
          Powered By Industry Leaders
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 uppercase">
          Industry Experience Supporting <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_30px_rgba(0,82,255,0.35)]">Ecosystem Growth</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-14 font-light leading-relaxed">
          DigiNorth remains the principal programme identity. Nethawk Solutions Limited and Digi02 Tech Systems support the ecosystem as powering organisations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Digi02 Tech Systems */}
          <div className="bg-black border border-white/10 p-8 sm:p-10 rounded-3xl flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 text-center sm:text-left transition-all hover:border-white/30 shadow-xl group">
            {/* Borderless Large Logo Container */}
            <div className="flex items-center justify-center shrink-0 w-32 sm:w-40 h-24 sm:h-28">
              <Image
                src="/images/partners/digi02.png"
                alt="Digi02 Tech Systems Logo"
                width={180}
                height={90}
                className="w-full h-auto max-h-20 sm:max-h-24 object-contain filter brightness-110 contrast-105 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">Digi02 Tech Systems</h3>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] font-semibold uppercase">
                  Powering Partner
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light mt-1">
                Software product studio providing commercial mentorship, prototype incubation, venue facilities, and venture pathways for DigiNorth builders.
              </p>
            </div>
          </div>

          {/* Nethawk Solutions Limited */}
          <div className="bg-black border border-white/10 p-8 sm:p-10 rounded-3xl flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 text-center sm:text-left transition-all hover:border-white/30 shadow-xl group">
            {/* Borderless Large Logo Container */}
            <div className="flex items-center justify-center shrink-0 w-32 sm:w-40 h-24 sm:h-28">
              <Image
                src="/images/partners/nethawk.png"
                alt="Nethawk Solutions Limited Logo"
                width={180}
                height={180}
                className="w-full h-auto max-h-24 sm:max-h-28 object-contain filter brightness-110 contrast-105 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">Nethawk Solutions</h3>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] font-semibold uppercase">
                  Powering Partner
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light mt-1">
                Enterprise cloud infrastructure, cybersecurity research, systems architecture, and network engineering support powering DigiNorth labs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
