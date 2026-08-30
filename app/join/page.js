"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommunityRegistrationForm from "@/components/CommunityRegistrationForm";
import { Sparkles, Users, Code, Cpu, Target } from "lucide-react";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-16 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          DIGINORTH_COMMUNITY / 2026
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
          Connect. Learn. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
            Build Together.
          </span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto mb-10">
          DigiNorth brings together developers, creators, researchers, founders, mentors, and enthusiasts to collaborate and build useful technology for Northern Nigeria.
        </p>

        {/* 5-Step Community Form */}
        <div className="text-left mt-6">
          <CommunityRegistrationForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
