"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Sparkles, Trophy, Users, ShieldCheck, CheckCircle2, ChevronRight, BarChart3, Clock } from "lucide-react";

export default function EmergingTechHackathonPage() {
  const judgingCriteria = [
    { label: "Problem Evidence & Regional Relevance", weight: "20%", desc: "Demonstrated evidence that the problem is real, urgent, and experienced by Northern Nigerian users." },
    { label: "Prototype Functionality & Code Quality", weight: "25%", desc: "A working software, hardware, or AI prototype that performs its core functions reliably during live demo." },
    { label: "User Value & Community Impact", weight: "20%", desc: "Direct, measurable utility and positive improvement for users, businesses, or public infrastructure." },
    { label: "Feasibility & Operating Sustainability", weight: "15%", desc: "Realistic deployment model considering Northern infrastructure, power, connectivity, and unit economics." },
    { label: "Team Execution & Iteration Speed", weight: "10%", desc: "Effective collaboration, discipline distribution, and receptive application of mentor feedback." },
    { label: "Demonstration & Technical Pitch", weight: "10%", desc: "Clear, concise, live proof of concept without reliance on non-functional mockups." },
  ];

  const sprintDays = [
    {
      day: "Day 01 · Sprint Kickoff",
      title: "Challenge Confirmation & Architecture Review",
      tasks: ["Challenge baseline confirmation", "Sprint backlog sprint review", "Architecture & security checks", "Opening dev sprint sprint start"],
    },
    {
      day: "Day 02 · Main Build Sprint",
      title: "Core Development & Mentor Checkpoints",
      tasks: ["Full-day production coding", "Technical mentor checkpoints", "User edge-case testing", "Documentation & demo rehearsal"],
    },
    {
      day: "Day 03 · Demo & Review",
      title: "Live Verification & Incubation Decisions",
      tasks: ["Final build freeze", "Live system demonstrations", "Judging panel assessment", "BuildLab incubation decisions"],
    },
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
            <span className="text-white">Mini-Hackathon 2026</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8]">
            <Trophy className="w-3.5 h-3.5" />
            Mini-Hackathon 2026 · Flagship Programme
          </div>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-tight">
            DigiNorth Build for the North <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
              Mini-Hackathon 2026.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            A three-day October 2026 final build sprint and live demonstration for qualified DigiNorth BuildLab teams in Kaduna, Northern Nigeria.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/hackathon/register"
              className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider"
            >
              <span>Register for this Event</span>
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

      {/* Confirmed Details Band */}
      <section className="border-y border-white/10 bg-white/[0.02] py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1 font-bold">Date</span>
            <strong className="text-sm font-bold text-white block">October 2026</strong>
            <span className="text-xs text-slate-400 font-light">Exact dates confirmed separately.</span>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1 font-bold">Format</span>
            <strong className="text-sm font-bold text-white block">Physical Sprint</strong>
            <span className="text-xs text-slate-400 font-light">In-person at Digi02 Hub, Kaduna.</span>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1 font-bold">Location</span>
            <strong className="text-sm font-bold text-white block">Kaduna, Nigeria</strong>
            <span className="text-xs text-slate-400 font-light">Digi02 Innovation Hub.</span>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1 font-bold">Registration</span>
            <strong className="text-sm font-bold text-white block">Open Pipeline</strong>
            <span className="text-xs text-slate-400 font-light">Capacity & validation rules apply.</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Brief Articles */}
          <div className="lg:col-span-8 space-y-12">
            {/* About this event */}
            <article className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block font-bold">
                01 // MISSION BRIEF
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                About This Event
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                The mini-hackathon is the culmination of the Community Season 01 build cycle, not the point where teams first start their projects. Teams arrive with a validated regional problem, working baseline, user evidence, and a focused final sprint backlog.
              </p>
            </article>

            {/* Theme */}
            <article className="space-y-4 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block font-bold">
                02 // THEME
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                Build for the North
              </h2>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Teams focus on useful, locally relevant problems across Northern Nigeria—including education accessibility, agricultural supply chains, healthcare diagnostics, cybersecurity & critical infrastructure protection, governance accountability, and regional commerce.
              </p>
            </article>

            {/* Eligibility & Qualification */}
            <article className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block font-bold">
                03 // ELIGIBILITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                Qualification, Not First-Day Idea Generation
              </h2>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Final teams qualify through the DigiNorth BuildLab pipeline with a defined problem, target user evidence, team responsibilities, and prototype baseline. Multidisciplinary roles include software developers, UI/UX designers, data scientists, product managers, and technical researchers.
              </p>
            </article>

            {/* 3-Day Sprint Agenda */}
            <article className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block font-bold">
                04 // AGENDA
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                Three-Day Final Sprint Blueprint
              </h2>

              <div className="space-y-4">
                {sprintDays.map((day, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-black border border-white/15 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#38bdf8] uppercase font-bold">{day.day}</span>
                      <Clock className="w-4 h-4 text-slate-400" />
                    </div>
                    <h3 className="text-base font-bold text-white uppercase">{day.title}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/10">
                      {day.tasks.map((task, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2 text-xs text-slate-300 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* Judging & Scoring Rubric */}
            <article className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block font-bold">
                05 // JUDGING RUBRIC
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                How Projects Will Be Evaluated
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {judgingCriteria.map((crit, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-black border border-white/15 space-y-2">
                    <div className="flex items-center justify-between">
                      <strong className="text-xs font-mono text-white font-bold uppercase">{crit.label}</strong>
                      <span className="text-xs font-mono text-[#38bdf8] font-black px-2 py-0.5 rounded bg-white/5 border border-white/10">
                        {crit.weight}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">{crit.desc}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          {/* Sidebar Control Cards */}
          <aside className="lg:col-span-4 space-y-6 sticky top-28">
            {/* Event Control */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/15 shadow-2xl space-y-6">
              <div>
                <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-widest block font-bold mb-1">
                  EVENT CONTROL
                </span>
                <h3 className="text-xl font-bold text-white uppercase">Confirmed Details</h3>
              </div>

              <div className="space-y-3 text-xs font-mono border-y border-white/10 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Date</span>
                  <span className="text-white font-bold">October 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Format</span>
                  <span className="text-white font-bold">Physical Sprint</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Venue</span>
                  <span className="text-white font-bold">Digi02 Hub, Kaduna</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Status</span>
                  <span className="text-[#38bdf8] font-bold uppercase">Registration Open</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  href="/hackathon/register"
                  className="button-enchanced is-primary w-full text-center text-xs font-bold uppercase tracking-wider block !py-3.5"
                >
                  <span>Register Squad Now</span>
                  <ArrowRight className="ml-2 h-4 w-4 inline" />
                </Link>

                <Link
                  href="/hackathon"
                  className="button-enchanced is-outline w-full text-center text-xs font-semibold text-slate-300 hover:text-white block !py-3"
                >
                  <span>Explore Hackathon Page</span>
                </Link>
              </div>
            </div>

            {/* Powering Partners Callout */}
            <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-2 text-xs">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                POWERING PARTNERS
              </span>
              <p className="text-slate-300 font-light">
                DigiNorth is powered by <strong className="text-white">Nethawk Solutions Limited</strong> and <strong className="text-white">Digi02 Tech Systems</strong>.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
