"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Sparkles, Flag, Users, CheckCircle2, ChevronRight } from "lucide-react";

export default function Festival2027Page() {
  const tracks = [
    { name: "Founders & Venture Stage", desc: "Northern startup pitches, investor roundtables, and cross-border partnership announcements." },
    { name: "Emerging Tech & Engineering", desc: "Keynotes and deep dives on Artificial Intelligence, distributed computing, cyber resilience, and IoT hardware." },
    { name: "Ecosystem Policy & Talent", desc: "Regional workforce development, higher education alignment, and technology infrastructure policy." },
    { name: "Creative Economy & Digital Media", desc: "Digital media production, gaming, Hausa NLP/speech models, and digital creative ventures." },
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
            <span className="text-white">Festival 2027</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8]">
            <Flag className="w-3.5 h-3.5" />
            Flagship Ecosystem Gathering · April 2027
          </div>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-tight">
            DigiNorth Festival <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
              2027.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            A major annual technology and innovation festival for Northern Nigeria uniting founders, engineers, researchers, students, corporate leaders, and regional ecosystem partners.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/join"
              className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider"
            >
              <span>Join Community for Updates</span>
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>

            <Link
              href="/events"
              className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white"
            >
              All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Details Band */}
      <section className="border-y border-white/10 bg-white/[0.02] py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1 font-bold">Date</span>
            <strong className="text-sm font-bold text-white block">April 2027</strong>
            <span className="text-xs text-slate-400 font-light">Exact dates to be confirmed.</span>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1 font-bold">Format</span>
            <strong className="text-sm font-bold text-white block">Multi-Venue Festival</strong>
            <span className="text-xs text-slate-400 font-light">Keynotes, exhibition, & demo stages.</span>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1 font-bold">Location</span>
            <strong className="text-sm font-bold text-white block">Kaduna, Nigeria</strong>
            <span className="text-xs text-slate-400 font-light">Physical and live broadcast.</span>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1 font-bold">Status</span>
            <strong className="text-sm font-bold text-white block">Announced</strong>
            <span className="text-xs text-slate-400 font-light">Ecosystem partner calls open.</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            <article className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block font-bold">
                01 // FESTIVAL OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                The Annual Northern Innovation Summit
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                DigiNorth Festival 2027 serves as the annual focal point where Northern Nigerian technology talent, corporate enterprise partners, investors, academia, and policymakers converge to celebrate shipped products, announce regional initiatives, and accelerate technology commercialization.
              </p>
            </article>

            <article className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block font-bold">
                02 // FESTIVAL TRACKS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                Curated Focus Areas
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tracks.map((track, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-black border border-white/15 space-y-2">
                    <h3 className="text-sm font-bold text-white uppercase font-mono">{track.name}</h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">{track.desc}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/15 shadow-2xl space-y-6">
              <div>
                <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-widest block font-bold mb-1">
                  GET INVOLVED
                </span>
                <h3 className="text-xl font-bold text-white uppercase">Partner or Speak</h3>
              </div>

              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Institutions, companies, and community organizers wishing to host stages, sponsor tracks, or showcase regional pilots can submit expressions of interest.
              </p>

              <Link
                href="/join"
                className="button-enchanced is-primary w-full text-center text-xs font-bold uppercase tracking-wider block !py-3.5"
              >
                <span>Express Partnership Interest</span>
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
