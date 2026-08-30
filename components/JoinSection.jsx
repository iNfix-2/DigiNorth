"use client";

import React from "react";
import CommunityRegistrationForm from "./CommunityRegistrationForm";

export default function JoinSection() {
  return (
    <section
      id="join-community"
      className="py-24 sm:py-32 bg-black relative overflow-hidden scroll-mt-10 border-t border-white/10 font-space"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-3 font-semibold">
            Join the DigiNorth Community
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Be Part of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">Northern Tech Ecosystem.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Connect with builders, attend Friday & Saturday sessions, learn practical emerging technologies, and solve real regional problems.
          </p>
        </div>

        {/* 5-Step Community Registration Form */}
        <CommunityRegistrationForm />
      </div>
    </section>
  );
}
