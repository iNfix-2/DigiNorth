"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommunityRegistrationForm from "@/components/CommunityRegistrationForm";
import { Users, Sparkles } from "lucide-react";

export default function CommunityRegisterPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      <section className="pt-36 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-6">
            <Users className="w-3.5 h-3.5" />
            DIGINORTH_COMMUNITY / 2026
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">DigiNorth Community.</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            DigiNorth connects people to community, practical learning, multidisciplinary teams, real projects, mentors, and opportunities—so talent can move from curiosity to useful technology.
          </p>
        </div>

        <CommunityRegistrationForm />
      </section>

      <Footer />
    </main>
  );
}
