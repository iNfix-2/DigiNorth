"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, GraduationCap, BookOpen, Layers, CheckCircle2, Award, Zap } from "lucide-react";

export default function AcademyPage() {
  const steps = [
    { step: "01", title: "Learn", desc: "Build the right mental model with foundational concepts." },
    { step: "02", title: "Practise", desc: "Use concepts repeatedly in hands-on code exercises." },
    { step: "03", title: "Build", desc: "Create a working, reviewable portfolio project." },
    { step: "04", title: "Join Community", desc: "Learn with peers and get feedback from mentors." },
    { step: "05", title: "Enter BuildLab", desc: "Contribute to real multidisciplinary product teams." },
    { step: "06", title: "Launch", desc: "Prepare finished software for live users and pilots." },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-6">
            <GraduationCap className="w-3.5 h-3.5" />
            Emerging Technologies Academy
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            Learn practical skills. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
              Become Capable of Building.
            </span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-light mb-8">
            DigiNorth's structured talent-development arm connects learning to practice, public work, Community collaboration, and a direct path into BuildLab.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/join" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Explore Academy Applications</span>
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
            <Link href="/community" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              Start with Community
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Principles Band */}
      <section className="border-y border-white/10 bg-white/[0.02] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Foundation</span>
            <strong className="text-sm font-bold text-white block">Understand the tools</strong>
            <span className="text-xs text-slate-400 font-light">Clear concepts before unnecessary complexity.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Practice</span>
            <strong className="text-sm font-bold text-white block">Use what you learn</strong>
            <span className="text-xs text-slate-400 font-light">Tasks, exercises, and guided experimentation.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Projects</span>
            <strong className="text-sm font-bold text-white block">Solve a real problem</strong>
            <span className="text-xs text-slate-400 font-light">Learning becomes visible through useful work.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Progression</span>
            <strong className="text-sm font-bold text-white block">Enter Community & BuildLab</strong>
            <span className="text-xs text-slate-400 font-light">Skills connect to collaborators and products.</span>
          </div>
        </div>
      </section>

      {/* 6-Step Learning Model */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
            Learning Model
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            The goal is capability— <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
              Not Attendance or Certificates Alone.
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-4 font-light leading-relaxed">
            Every stage should move a learner closer to independently understanding, creating, testing, and explaining useful technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-black border border-white/10 p-8 rounded-3xl hover:border-white/30 transition shadow-xl">
              <span className="text-2xl font-black font-mono text-[#38bdf8] block mb-3">{s.step}</span>
              <h3 className="text-xl font-bold text-white mb-2 uppercase">{s.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Method Highlight */}
      <section className="py-24 px-6 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 bg-black border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <span className="text-[10px] font-mono uppercase text-[#38bdf8] tracking-widest block mb-4">ACADEMY METHOD</span>
            <blockquote className="text-2xl font-black text-white leading-snug mb-6 uppercase">
              Learn → Practise → Build → Explain → Improve.
            </blockquote>
            <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
              Concepts are connected to practical applications, not taught in isolation. Learners produce evidence they can explain and iterate on.
            </p>
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
              Academy Stewardship: <strong className="text-white">Kosisochukwu Ugwubma</strong>, Academy Lead.
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block font-semibold">
              Learning Made Useful
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase leading-tight">
              Technical knowledge becomes stronger when it is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
                Connected to People and Problems.
              </span>
            </h2>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Academy learners are encouraged to document their work, communicate decisions, collaborate across disciplines, and move beyond tutorial completion.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <span>Practical instruction tied to active Northern Nigerian use cases</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <span>Real portfolio repository proof reviewed by senior engineers</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <span>Direct progression into BuildLab venture tracks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cohorts */}
      <section className="py-28 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
            Programmes and Cohorts
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
            Published Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">Opportunities.</span>
          </h2>
        </div>

        <div className="max-w-3xl bg-black border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-[#38bdf8] uppercase font-bold">Emerging Technologies Academy</span>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0052FF]/20 text-[#38bdf8] border border-[#0052FF]/30">Active</span>
          </div>
          <h3 className="text-xl font-bold text-white uppercase mb-4">
            Structured practical learning arm developing useful technology skills and direct pathways into BuildLab.
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
            Learn, practise, build, demonstrate, and progress into real collaborative squads.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs">
            <div>
              <span className="text-slate-500 font-mono block mb-1">Duration</span>
              <strong className="text-white">Ongoing Cohorts</strong>
            </div>
            <div>
              <span className="text-slate-500 font-mono block mb-1">Level</span>
              <strong className="text-white">Structured Pathways</strong>
            </div>
            <div>
              <span className="text-slate-500 font-mono block mb-1">Format</span>
              <strong className="text-white">Project-Based Learning</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-3 font-semibold">
            Not Ready for a Full Cohort?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mb-6 leading-tight">
            The Starter Circle Provides a Lighter <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
              Bridge into Technology.
            </span>
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Beginners can develop digital foundations, explore pathways, and contribute through research, documentation, testing, and design support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/join" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Join DigiNorth</span>
            </Link>
            <Link href="/community" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              Explore Community
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
