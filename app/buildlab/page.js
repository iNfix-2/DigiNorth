"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Cpu, Layers, CheckCircle2, ShieldAlert, Sparkles } from "lucide-react";

export default function BuildLabPage() {
  const pipeline = [
    { step: "01", title: "Discover", desc: "Source a real regional challenge in Northern Nigeria." },
    { step: "02", title: "Form Teams", desc: "Combine engineers, designers, researchers, and product thinkers." },
    { step: "03", title: "Research", desc: "Interview prospective users and gather verifiable evidence." },
    { step: "04", title: "Design", desc: "Map the critical user journey and software architecture." },
    { step: "05", title: "Build", desc: "Create the essential functional prototype." },
    { step: "06", title: "Test", desc: "Put prototype in front of actual users and stress-test assumptions." },
    { step: "07", title: "Demonstrate", desc: "Explain evidence, metrics, and progress publicly." },
    { step: "08", title: "Continue", desc: "Incubate, pilot with powering partners, or commercialize." },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-6">
            <Cpu className="w-3.5 h-3.5" />
            DigiNorth BuildLab · Pioneer Cohort
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            Turn real problems into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
              Useful Technology.
            </span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-light mb-8">
            Beginning Friday, 21 August 2026, multidisciplinary teams move from problem discovery through validation, design, prototyping, testing, demonstration, and continued incubation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/join" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Apply to BuildLab</span>
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
            <Link href="/hackathon" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              Mini-Hackathon Sprint
            </Link>
          </div>
        </div>
      </section>

      {/* Standards Band */}
      <section className="border-y border-white/10 bg-white/[0.02] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Problem</span>
            <strong className="text-sm font-bold text-white block">Start with evidence</strong>
            <span className="text-xs text-slate-400 font-light">Access real users before expanding scope.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Team</span>
            <strong className="text-sm font-bold text-white block">Build across disciplines</strong>
            <span className="text-xs text-slate-400 font-light">Engineering, design, research, product, and strategy.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Progress</span>
            <strong className="text-sm font-bold text-white block">Demonstrate weekly</strong>
            <span className="text-xs text-slate-400 font-light">Show research, decisions, prototypes, and tests.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Outcome</span>
            <strong className="text-sm font-bold text-white block">Prepare for continued use</strong>
            <span className="text-xs text-slate-400 font-light">Demo, incubation, pilot, or commercial scale.</span>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
            The BuildLab Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Evidence is required before a project <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
              Moves Forward.
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-4 font-light leading-relaxed">
            The mini-hackathon is the final focused sprint for qualified teams—not the first day of idea generation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pipeline.map((s, idx) => (
            <div key={idx} className="bg-black border border-white/10 p-6 rounded-2xl hover:border-white/30 transition shadow-xl">
              <span className="text-xl font-black font-mono text-[#38bdf8] block mb-2">{s.step}</span>
              <h3 className="text-base font-bold text-white mb-2 uppercase">{s.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Operating Standard */}
      <section className="py-24 px-6 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block font-semibold">
              Operating Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase leading-tight">
              A team advances through proof— <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
                Not Confidence Alone.
              </span>
            </h2>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              BuildLab keeps ambitious work manageable by using clear stage gates and visible responsibilities.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-black border border-white/10">
                <span className="text-xs font-mono text-[#38bdf8] font-bold block mb-1">01 · Problem Intake</span>
                <p className="text-xs text-slate-300 font-light">Named problem owner, affected users, initial evidence, and access for field research.</p>
              </div>
              <div className="p-5 rounded-2xl bg-black border border-white/10">
                <span className="text-xs font-mono text-[#38bdf8] font-bold block mb-1">02 · Validation</span>
                <p className="text-xs text-slate-300 font-light">User interviews, refined problem statement, and explicit riskiest assumptions.</p>
              </div>
              <div className="p-5 rounded-2xl bg-black border border-white/10">
                <span className="text-xs font-mono text-[#38bdf8] font-bold block mb-1">03 · Prototype & Testing</span>
                <p className="text-xs text-slate-300 font-light">A demonstrable core journey, user feedback metrics, and documented technical iteration.</p>
              </div>
              <div className="p-5 rounded-2xl bg-black border border-white/10">
                <span className="text-xs font-mono text-[#38bdf8] font-bold block mb-1">04 · Demo & Continuation</span>
                <p className="text-xs text-slate-300 font-light">Technical verification, presentation, and a realistic incubation or partner pilot plan.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-black border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <span className="text-[10px] font-mono uppercase text-[#38bdf8] tracking-widest block mb-4">BUILD SIGNAL</span>
            <blockquote className="text-2xl font-black text-white leading-snug mb-6 uppercase">
              Problem → Evidence → Prototype → User Test → Decision.
            </blockquote>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Every commitment in BuildLab requires a verifiable link: research docs, Figma frames, GitHub PRs, or user interview audio notes.
            </p>
          </div>
        </div>
      </section>

      {/* Pioneer Cohort Info */}
      <section className="py-28 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="max-w-3xl bg-black border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-[#38bdf8] uppercase font-bold">BuildLab Pioneer Cohort</span>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0052FF]/20 text-[#38bdf8] border border-[#0052FF]/30">Active</span>
          </div>
          <h3 className="text-xl font-bold text-white uppercase mb-4">
            Structured innovation environment turning community problems into prototypes and venture pilots.
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
            Pioneer cohort runs from August to October 2026, culminating in the "Build for the North" Hackathon.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs mb-8">
            <div>
              <span className="text-slate-500 font-mono block mb-1">Duration</span>
              <strong className="text-white">Aug – Oct 2026</strong>
            </div>
            <div>
              <span className="text-slate-500 font-mono block mb-1">Participant Level</span>
              <strong className="text-white">Multidisciplinary</strong>
            </div>
            <div>
              <span className="text-slate-500 font-mono block mb-1">Format</span>
              <strong className="text-white">Weekly Checkpoints</strong>
            </div>
          </div>
          <Link href="/join" className="button-enchanced is-primary !py-3.5 w-full text-center text-xs font-bold uppercase tracking-wider block">
            <span>Apply to BuildLab</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
