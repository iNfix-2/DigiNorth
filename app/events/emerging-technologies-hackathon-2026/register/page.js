"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HackathonSubmissionForm from "@/components/HackathonSubmissionForm";
import Link from "next/link";
import { Trophy, Sparkles } from "lucide-react";

export default function HackathonEventRegisterPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar variant="hackathon" />

      <section className="pt-36 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <nav className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400 mb-4">
            <Link href="/events" className="hover:text-[#38bdf8] transition">Events</Link>
            <span>/</span>
            <Link href="/events/emerging-technologies-hackathon-2026" className="hover:text-[#38bdf8] transition">Mini-Hackathon 2026</Link>
            <span>/</span>
            <span className="text-white">Register</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-6">
            <Trophy className="w-3.5 h-3.5" />
            OCTOBER 2026 // HACKATHON INTAKE
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">
            Register for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">Mini-Hackathon.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Submit your idea, register your team, and build for Northern Nigeria during the October 2026 3-day sprint in Kaduna.
          </p>
        </div>

        <HackathonSubmissionForm />
      </section>

      <Footer />
    </main>
  );
}
