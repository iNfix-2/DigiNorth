"use client";

import React from "react";
import Image from "next/image";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-3 font-semibold">
          Powered By Industry Leaders
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 uppercase">
          Industry Experience Supporting <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_30px_rgba(0,82,255,0.35)]">Ecosystem Growth</span>
        </h2>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          DigiNorth remains the principal programme identity. Nethawk Solutions Limited and Digi02 Tech Systems support the ecosystem as powering organisations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Digi02 Tech Systems */}
          <div className="bg-black border border-white/10 p-8 rounded-3xl flex items-center gap-6 text-left transition-all hover:border-white/30 shadow-xl">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 w-20 h-20">
              <Image
                src="/images/partners/digi02.png"
                alt="Digi02 Tech Systems Logo"
                width={80}
                height={40}
                className="w-full h-auto max-h-12 object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-white uppercase">Digi02 Tech Systems</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#38bdf8] font-semibold uppercase">
                  Powering Partner
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light mt-1">
                Software product studio providing commercial mentorship, prototype incubation, venue facilities, and venture pathways for DigiNorth builders.
              </p>
            </div>
          </div>

          {/* Nethawk Solutions Limited */}
          <div className="bg-black border border-white/10 p-8 rounded-3xl flex items-center gap-6 text-left transition-all hover:border-white/30 shadow-xl">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 w-20 h-20">
              <Image
                src="/images/partners/nethawk.png"
                alt="Nethawk Solutions Limited Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-white uppercase">Nethawk Solutions</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#38bdf8] font-semibold uppercase">
                  Powering Partner
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light mt-1">
                Enterprise cloud infrastructure, cybersecurity research, systems architecture, and network engineering support powering DigiNorth labs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
