"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Sparkles, Trophy, Users, ShieldCheck, Clock, CheckCircle2, ChevronRight } from "lucide-react";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: "emerging-technologies-hackathon-2026",
      type: "Mini-Hackathon",
      title: "DigiNorth Build for the North Mini-Hackathon 2026",
      monthYear: "October 2026",
      dateNote: "Exact dates to be confirmed",
      location: "Digi02 Hub, Kaduna / Physical Sprint",
      status: "Registration open",
      statusColor: "text-[#38bdf8] bg-[#0052FF]/20 border-[#0052FF]/40",
      desc: "A three-day October 2026 final build sprint and demonstration for qualified DigiNorth BuildLab teams. Multidisciplinary squads demonstrate working software, AI, and hardware prototypes grounded in regional evidence.",
      href: "/events/emerging-technologies-hackathon-2026",
      registerHref: "/hackathon/register",
      featured: true,
    },
    {
      id: "diginorth-festival-2027",
      type: "Technology and Innovation Festival",
      title: "DigiNorth Festival 2027",
      monthYear: "April 2027",
      dateNote: "Exact dates to be confirmed",
      location: "Kaduna, Nigeria · Multi-Venue",
      status: "Announced",
      statusColor: "text-slate-300 bg-white/5 border-white/10",
      desc: "The flagship annual innovation gathering for Northern Nigeria uniting founders, engineers, researchers, students, corporate leaders, and regional ecosystem partners.",
      href: "/events/diginorth-festival-2027",
      registerHref: "/join",
      featured: false,
    },
  ];

  const ongoingCadence = [
    {
      day: "Friday Community",
      timing: "Weekly Friday · 4:00 PM WAT",
      focus: "Connection, industry exposure, technical alignment, and regional ecosystem signals.",
      badge: "Weekly Friday",
      href: "/community",
    },
    {
      day: "Saturday Starter Circle & BuildLab",
      timing: "Weekly Saturday · 10:00 AM WAT",
      focus: "Hands-on build labs, peer reviews, technical debugging, and prototype demonstrations.",
      badge: "Weekly Saturday",
      href: "/community",
    },
    {
      day: "DigiNorth Community Season 01",
      timing: "Active Season · From August 2026",
      focus: "Full build season bringing Explorers, Learners, Builders, Mentors, and Partners together.",
      badge: "Active Season",
      href: "/events/diginorth-community-season-01",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8]">
              <Sparkles className="w-3.5 h-3.5" />
              DigiNorth Events · Confirmed Programme Information
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.02]">
              Meet. Learn. Build. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
                Demonstrate.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light max-w-xl">
              DigiNorth events bring people together to learn, build, and demonstrate solutions that solve real problems in Northern Nigeria. Published events appear with honest date, format, venue, and capacity information.
            </p>

            {/* Confirmed Programme Callout Card */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/15 space-y-1.5">
              <span className="text-[11px] font-mono uppercase text-[#38bdf8] font-semibold tracking-wider block">
                Next Published Programme
              </span>
              <div className="text-lg font-bold text-white uppercase">
                October 2026 · Exact dates to be confirmed
              </div>
              <p className="text-xs text-slate-400 font-light">
                Our next published milestone is the <strong className="text-white font-medium">DigiNorth Build for the North Mini-Hackathon 2026</strong>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#upcoming-events"
                className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                <span>Explore Upcoming Events</span>
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </a>
              <Link
                href="/hackathon/register"
                className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white"
              >
                Register for Hackathon
              </Link>
            </div>
          </div>

          {/* Right Column - High-Fidelity Editorial Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 group">
              <div className="aspect-[4/3] w-full relative">
                <img
                  src="https://images.unsplash.com/photo-1778877035089-c80dcb877f45?auto=format&fit=crop&fm=jpg&q=82&w=1200"
                  alt="DigiNorth innovators and builders collaborating at conference"
                  className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-widest block font-bold">
                  KADUNA REGIONAL NODE
                </span>
                <h3 className="text-xl font-extrabold text-white uppercase leading-snug">
                  Evidence-based building in the North.
                </h3>
                <p className="text-xs text-slate-300 font-light">
                  Direct physical cohorts, mentor checkpoints, and live user demonstration sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Standards Band */}
      <section className="border-y border-white/10 bg-white/[0.02] py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1 font-bold">01 · Date</span>
            <strong className="text-sm font-bold text-white block">Confirmed Timing Only</strong>
            <span className="text-xs text-slate-400 font-light">Month-only or TBC labels are used when exact calendar slots are pending.</span>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1 font-bold">02 · Format</span>
            <strong className="text-sm font-bold text-white block">Physical & Hybrid Delivery</strong>
            <span className="text-xs text-slate-400 font-light">Participants see transparent physical venue and digital streaming parameters.</span>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1 font-bold">03 · Registration</span>
            <strong className="text-sm font-bold text-white block">Capacity-Aware Entry</strong>
            <span className="text-xs text-slate-400 font-light">Structured 5-step intake workflows aligned with venue and mentorship seats.</span>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1 font-bold">04 · Programme</span>
            <strong className="text-sm font-bold text-white block">Published Tracks Only</strong>
            <span className="text-xs text-slate-400 font-light">Agendas and judges require verified ecosystem accreditation.</span>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming-events" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
              Live Pipeline
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">Published Events.</span>
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400 font-bold bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg w-fit">
            {upcomingEvents.length} Programmed Milestones
          </span>
        </div>

        <div className="space-y-6">
          {upcomingEvents.map((evt) => (
            <div
              key={evt.id}
              className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                evt.featured
                  ? "bg-black border-[#0052FF]/60 shadow-[0_0_35px_rgba(0,82,255,0.25)]"
                  : "bg-black border-white/15 hover:border-white/30"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Date Badge */}
                <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between lg:justify-center p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-base sm:text-lg font-mono font-black text-white uppercase">
                    {evt.monthYear}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-light">
                    {evt.dateNote}
                  </span>
                </div>

                {/* Event Details */}
                <div className="lg:col-span-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase text-[#38bdf8] px-2.5 py-0.5 rounded bg-white/5 border border-white/10 font-bold">
                      {evt.type}
                    </span>
                    <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded border font-semibold ${evt.statusColor}`}>
                      {evt.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white uppercase leading-snug">
                    <Link href={evt.href} className="hover:text-[#38bdf8] transition">
                      {evt.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {evt.desc}
                  </p>
                </div>

                {/* Actions */}
                <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                  <Link
                    href={evt.href}
                    className="button-enchanced is-primary !py-3 !px-6 text-center text-xs font-bold uppercase tracking-wider"
                  >
                    <span>View Details</span>
                    <ArrowRight className="ml-2 h-3.5 w-3.5 inline" />
                  </Link>

                  <Link
                    href={evt.registerHref}
                    className="button-enchanced is-outline !py-3 !px-6 text-center text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    <span>Register Now</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Cadence & Community Build Sessions */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
            Weekly Rhythm
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
            Active Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">Weekly Cadence.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ongoingCadence.map((item, idx) => (
            <div
              key={idx}
              className="bg-black border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/30 transition shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-[#38bdf8] uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10 font-bold">
                    {item.badge}
                  </span>
                  <Calendar className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase mb-1">{item.day}</h3>
                <span className="text-xs font-mono text-slate-400 block mb-3">{item.timing}</span>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">{item.focus}</p>
              </div>

              <Link
                href={item.href}
                className="pt-4 border-t border-white/10 text-xs font-mono font-bold text-[#38bdf8] hover:underline flex items-center justify-between"
              >
                <span>View Track Details</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Final Hackathon Spotlight Banner */}
      <section className="py-24 px-4 sm:px-6 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0052FF]/20 border border-[#0052FF]/40 text-xs font-mono uppercase tracking-widest text-[#38bdf8]">
            <Trophy className="w-3.5 h-3.5" />
            October 2026 Flagship Sprint
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight">
            Can your tech secure the North? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
              Build for the North Mini-Hackathon.
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            The three-day event will serve as a final sprint and live demonstration for qualified BuildLab teams in Kaduna, Northern Nigeria.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/hackathon/register"
              className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider"
            >
              <span>Register Hackathon Team</span>
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
            <Link
              href="/events/emerging-technologies-hackathon-2026"
              className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white"
            >
              <span>Read Full Event Brief</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
