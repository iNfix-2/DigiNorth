"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Sparkles, Users, CheckCircle2, ChevronRight } from "lucide-react";

export default function CommunitySeason01Page() {
  const lanes = [
    { name: "Friday Community", desc: "Weekly Friday exposure, speaker sessions, ecosystem signals, and lightning talks." },
    { name: "Saturday Starter Circle", desc: "Hands-on build labs, peer reviews, technical pair programming, and prototype demos." },
    { name: "Mentorship Sprints", desc: "1-on-1 technical and product feedback from experienced industry engineers and founders." },
    { name: "BuildLab Pipeline", desc: "Squad formation around verified regional problems in agriculture, health, education, and finance." },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl space-y-6">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/events" className="hover:text-[#38bdf8] transition">Events</Link>
            <span>/</span>
            <span className="text-white">Community Season 01</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8]">
            <Users className="w-3.5 h-3.5" />
            Active Community Programme
          </div>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-tight">
            DigiNorth Community <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
              Season 01.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            DigiNorth Community brings Explorers, Learners, Builders, Mentors, and Partners together every Friday and Saturday to learn, connect, build, and solve real regional problems.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/community/register"
              className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider"
            >
              <span>Join Community Season 01</span>
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>

            <Link
              href="/community"
              className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white"
            >
              Community Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Details Band */}
      <section className="border-y border-white/10 bg-white/[0.02] py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1 font-bold">Timing</span>
            <strong className="text-sm font-bold text-white block">Fridays & Saturdays</strong>
            <span className="text-xs text-slate-400 font-light">From 21 August 2026 onwards.</span>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1 font-bold">Format</span>
            <strong className="text-sm font-bold text-white block">Kaduna Node & Discord</strong>
            <span className="text-xs text-slate-400 font-light">Physical and digital collaboration.</span>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1 font-bold">Location</span>
            <strong className="text-sm font-bold text-white block">Kaduna, Nigeria</strong>
            <span className="text-xs text-slate-400 font-light">Digi02 Hub & Partner Labs.</span>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1 font-bold">Entry</span>
            <strong className="text-sm font-bold text-white block">Open Registration</strong>
            <span className="text-xs text-slate-400 font-light">All builder pathways welcome.</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            <article className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block font-bold">
                01 // PROGRAMME RATIONALE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                The Foundation for Evidence-Based Building
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                Community Season 01 is designed to break the cycle of isolated hobby coding. Through weekly structured touchpoints, builders gain continuous exposure to practical tools, user problem discovery, and collaborative team sprints.
              </p>
            </article>

            <article className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block font-bold">
                02 // WEEKLY PILLARS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                Season Architecture
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {lanes.map((lane, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-black border border-white/15 space-y-2">
                    <h3 className="text-sm font-bold text-white uppercase font-mono">{lane.name}</h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">{lane.desc}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/15 shadow-2xl space-y-6">
              <div>
                <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-widest block font-bold mb-1">
                  JOIN SEASON 01
                </span>
                <h3 className="text-xl font-bold text-white uppercase">Register Profile</h3>
              </div>

              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Complete your 5-step community registration to receive Discord invites, weekly schedule digests, and BuildLab intake links.
              </p>

              <Link
                href="/community/register"
                className="button-enchanced is-primary w-full text-center text-xs font-bold uppercase tracking-wider block !py-3.5"
              >
                <span>Register for Community</span>
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
