"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Sparkles, Trophy, Flag, Users } from "lucide-react";

export default function EventsPage() {
  const events = [
    {
      id: "hackathon-2026",
      type: "Mini-Hackathon",
      title: "DigiNorth Build for the North Mini-Hackathon 2026",
      date: "October 2026 · exact dates to be confirmed",
      location: "Digi02 Hub, Kaduna / Hybrid",
      status: "Registration Open",
      desc: "A three-day October 2026 final build sprint and demonstration for qualified DigiNorth BuildLab teams. Squads pitch working prototypes to regional leaders and angel investors.",
      href: "/hackathon",
      featured: true,
    },
    {
      id: "festival-2027",
      type: "Technology and Innovation Festival",
      title: "DigiNorth Festival 2027",
      date: "April 2027",
      location: "Kaduna, Nigeria",
      status: "Upcoming Announcement",
      desc: "A major technology and innovation festival for Northern Nigeria uniting founders, engineers, researchers, students, and policymakers.",
      href: "/join",
    },
    {
      id: "community-s01",
      type: "Community Programme",
      title: "DigiNorth Community Season 01",
      date: "Fridays & Saturdays · from 21 August 2026",
      location: "Kaduna Node & Online Discord",
      status: "Active Weekly",
      desc: "DigiNorth Community brings Explorers, Learners, Builders, Mentors, and Partners together every Friday and Saturday to learn, connect, build, and solve.",
      href: "/community",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-6">
            <Calendar className="w-3.5 h-3.5" />
            DigiNorth Events · Confirmed Programme Information
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            Meet. Learn. Build. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
              Demonstrate.
            </span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-light mb-8">
            Published events appear with honest date, format, venue, capacity, and registration information. Unconfirmed details remain clearly marked.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#event-list" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Explore Events</span>
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </a>
            <Link href="/join" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              Join the Community
            </Link>
          </div>
        </div>
      </section>

      {/* Standards Band */}
      <section className="border-y border-white/10 bg-white/[0.02] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Date</span>
            <strong className="text-sm font-bold text-white block">Only confirmed timing</strong>
            <span className="text-xs text-slate-400 font-light">Month-only or TBA labels are used when exact dates are pending.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Format</span>
            <strong className="text-sm font-bold text-white block">Physical, online, or hybrid</strong>
            <span className="text-xs text-slate-400 font-light">Participants see the real delivery format.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Registration</span>
            <strong className="text-sm font-bold text-white block">Capacity-aware workflow</strong>
            <span className="text-xs text-slate-400 font-light">Registration follows venue capacity constraints.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Programme</span>
            <strong className="text-sm font-bold text-white block">Published sections only</strong>
            <span className="text-xs text-slate-400 font-light">Tracks, schedules, and mentors require ecosystem approval.</span>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section id="event-list" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
              Event Signal
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
              Upcoming & Published <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">DigiNorth Activity.</span>
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400 font-bold">{events.length} Published Events</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e) => (
            <div
              key={e.id}
              className={`bg-black border rounded-3xl p-8 flex flex-col justify-between shadow-xl transition ${
                e.featured ? "border-[#0052FF]/60 shadow-[0_0_30px_rgba(0,82,255,0.2)]" : "border-white/10 hover:border-white/30"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase text-[#38bdf8] px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    {e.type}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Physical</span>
                </div>

                <h3 className="text-xl font-bold text-white uppercase mb-2 leading-snug">
                  {e.title}
                </h3>
                <span className="text-xs font-mono text-slate-400 block mb-4">{e.date}</span>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">{e.desc}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">{e.status}</span>
                <Link href={e.href} className="text-xs font-mono font-bold text-[#38bdf8] hover:underline flex items-center gap-1">
                  Open brief →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hackathon Spotlight */}
      <section className="py-24 px-6 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-3 font-semibold">
            October 2026 Sprint
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mb-6 leading-tight">
            Build for the North <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">Mini-Hackathon.</span>
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
            The three-day event will serve as a final sprint and public demonstration for qualified BuildLab teams.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/hackathon" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>View Hackathon Page</span>
            </Link>
            <Link href="/join" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              Support the Programme
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
