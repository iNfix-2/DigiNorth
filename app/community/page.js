"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Users, Sparkles, Calendar, Code, Database, Shield, Layers, Search } from "lucide-react";

export default function CommunityPage() {
  const lanes = [
    {
      code: "01 · Explorer",
      title: "New to Technology",
      desc: "Discover pathways, digital tools, community problems, and practical ways to begin contributing.",
    },
    {
      code: "02 · Learner",
      title: "Developing a Skill",
      desc: "Practise with peers, join skill circles, complete useful tasks, and prepare for collaborative work.",
    },
    {
      code: "03 · Builder",
      title: "Ready to Create",
      desc: "Join multidisciplinary teams, own deliverables, share evidence, test ideas, and help projects move.",
    },
    {
      code: "04 · Mentor / Partner",
      title: "Opening Access",
      desc: "Bring expertise, real challenges, user access, resources, introductions, or pilot opportunities.",
    },
  ];

  const disciplines = [
    {
      name: "Software Engineering",
      icon: Code,
      desc: "Build web, mobile, backend, API, automation, and platform solutions while learning to ship reliable products.",
    },
    {
      name: "AI & Data",
      icon: Database,
      desc: "Explore data, machine learning, artificial intelligence, analytics, and responsible AI applications.",
    },
    {
      name: "Cybersecurity & Infrastructure",
      icon: Shield,
      desc: "Learn secure systems, networking, cloud, infrastructure, defensive security, and resilient digital operations.",
    },
    {
      name: "Product & Design",
      icon: Layers,
      desc: "Turn user needs into clear product decisions, useful interfaces, prototypes, testing plans, and stronger experiences.",
    },
    {
      name: "Research & Emerging Tech",
      icon: Search,
      desc: "Investigate new technologies, local problems, user needs, technical feasibility, and opportunities for practical experimentation.",
    },
  ];

  const events = [
    {
      type: "Mini-hackathon",
      title: "DigiNorth Build for the North Mini-Hackathon 2026",
      date: "October 2026 · exact dates to be confirmed",
      desc: "A three-day October 2026 final build sprint and demonstration for qualified DigiNorth BuildLab teams.",
      href: "/hackathon",
    },
    {
      type: "Technology and innovation festival",
      title: "DigiNorth Festival 2027",
      date: "April 2027",
      desc: "A major technology and innovation event for Northern Nigeria, scheduled for April 2027.",
      href: "/events",
    },
    {
      type: "Community programme",
      title: "DigiNorth Community Season 01",
      date: "Fridays & Saturdays · from 21 August 2026",
      desc: "DigiNorth Community brings Explorers, Learners, Builders, Mentors, and Partners together every Friday and Saturday to learn, connect, build, and solve.",
      href: "/events",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
        {/* Foreground Content - Exact unshifted layout */}
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-6">
            <Users className="w-3.5 h-3.5" />
            DigiNorth Community · Every Friday & Saturday
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            Find your people. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
              Learn Together. Build Together.
            </span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-light mb-8 max-w-2xl">
            A working technology community for beginners, learners, developers, designers, researchers, founders, mentors, product thinkers, and innovators across Northern Nigeria.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/community/register" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Join the Community</span>
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
            <Link href="/projects" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              Find a Project
            </Link>
          </div>
        </div>

        {/* Right-Aligned Glowing Hero Image (Background layer with natural overlap) */}
        <div className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] md:w-[560px] lg:w-[660px] aspect-square z-0 flex items-center justify-center translate-x-12 sm:translate-x-6 lg:translate-x-0">
          {/* Subtle atmospheric ambient glow */}
          <div className="pointer-events-none absolute inset-4 rounded-full bg-gradient-to-tr from-[#0052FF]/20 via-[#38bdf8]/10 to-transparent blur-3xl" />
          
          <img
            src="/images/community-network-hands.png"
            alt="DigiNorth interconnected builders network constellation"
            className="w-full h-full object-contain filter drop-shadow-[0_0_60px_rgba(0,82,255,0.55)] opacity-90 lg:opacity-100 animate-in fade-in duration-700"
          />
        </div>
      </section>

      {/* Weekly Rhythm Band */}
      <section className="border-y border-white/10 bg-white/[0.02] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Friday</span>
            <strong className="text-sm font-bold text-white block">Community & Exposure</strong>
            <span className="text-xs text-slate-400 font-light">Updates, learning, opportunities, and team alignment.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Saturday</span>
            <strong className="text-sm font-bold text-white block">Practice & Delivery</strong>
            <span className="text-xs text-slate-400 font-light">Starter Circle, BuildLab sprints, and demonstrations.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Entry</span>
            <strong className="text-sm font-bold text-white block">All Experience Levels</strong>
            <span className="text-xs text-slate-400 font-light">Start as an Explorer, Learner, Builder, Mentor, or Partner.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Standard</span>
            <strong className="text-sm font-bold text-white block">Evidence Over Attendance</strong>
            <span className="text-xs text-slate-400 font-light">Learning tasks, research, designs, tests, and working code.</span>
          </div>
        </div>
      </section>

      {/* Participant Journey — Snake Path Infographic */}
      <section className="py-28 px-6 max-w-7xl mx-auto overflow-x-auto">
        <div className="mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
            Participant Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            A Pathway Designed for Momentum—<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
              Not Isolated Activity.
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-4 font-light leading-relaxed">
            Each stage has a clear purpose. People can enter at the level that matches their experience and move forward as their capability grows.
          </p>
        </div>

        {/* Snake SVG infographic */}
        <div className="min-w-[700px]">
          {/* Row 1: steps 1–4, alternating high/low */}
          <div className="relative flex items-center justify-between mb-0" style={{ height: "260px" }}>
            {/* Wavy dotted SVG path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 260" preserveAspectRatio="none" fill="none">
              <path
                d="M100 190 Q200 60 300 190 Q400 320 500 190 Q600 60 700 190"
                stroke="#38bdf8"
                strokeWidth="1.5"
                strokeDasharray="6 5"
                opacity="0.35"
              />
            </svg>

            {[
              { num: "01", label: "DISCOVER", desc: "Understand technology and opportunity through community belonging.", top: true },
              { num: "02", label: "LEARN", desc: "Build practical foundations in the Emerging Tech Academy.", top: false },
              { num: "03", label: "JOIN", desc: "Enter the right community lane based on current readiness.", top: true },
              { num: "04", label: "COLLABORATE", desc: "Form useful multidisciplinary squads across Northern Nigeria.", top: false },
            ].map((step, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center"
                style={{ width: "25%", position: "absolute", left: `${i * 25 + 12.5}%`, top: step.top ? "20px" : "auto", bottom: step.top ? "auto" : "20px" }}
              >
                {!step.top && (
                  <div className="mb-3 space-y-0.5">
                    <span className="text-[#38bdf8] text-[10px] font-mono font-bold block">{step.num}</span>
                    <span className="text-white text-xs font-extrabold uppercase tracking-wider block">{step.label}</span>
                    <p className="text-slate-400 text-[10px] font-light leading-relaxed max-w-[120px] mx-auto">{step.desc}</p>
                  </div>
                )}
                <div className="relative">
                  <div className="w-[72px] h-[72px] rounded-full border-2 border-[#38bdf8] bg-black flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.35)]">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0052FF]/25 to-[#38bdf8]/15 border border-[#38bdf8]/30 flex items-center justify-center">
                      <span className="text-[#38bdf8] text-base font-black font-mono">{parseInt(step.num)}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full border border-[#38bdf8]/15 scale-[1.3] animate-pulse pointer-events-none" />
                </div>
                {step.top && (
                  <div className="mt-3 space-y-0.5">
                    <span className="text-[#38bdf8] text-[10px] font-mono font-bold block">{step.num}</span>
                    <span className="text-white text-xs font-extrabold uppercase tracking-wider block">{step.label}</span>
                    <p className="text-slate-400 text-[10px] font-light leading-relaxed max-w-[120px] mx-auto">{step.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Turn connector */}
          <div className="relative" style={{ height: "40px" }}>
            <svg className="absolute w-full h-full" viewBox="0 0 800 40" preserveAspectRatio="none" fill="none">
              <path d="M700 0 Q750 20 700 40" stroke="#0052FF" strokeWidth="1.5" strokeDasharray="6 5" opacity="0.35" />
            </svg>
          </div>

          {/* Row 2: steps 5–8, reversed direction, alternating low/high */}
          <div className="relative flex items-center justify-between" style={{ height: "260px" }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 260" preserveAspectRatio="none" fill="none">
              <path
                d="M700 70 Q600 200 500 70 Q400 -60 300 70 Q200 200 100 70"
                stroke="#0052FF"
                strokeWidth="1.5"
                strokeDasharray="6 5"
                opacity="0.35"
              />
            </svg>

            {[
              { num: "05", label: "BUILD", desc: "Create working evidence and prototypes in BuildLab.", top: false },
              { num: "06", label: "DEMONSTRATE", desc: "Show verified progress publicly at demo days and showcases.", top: true },
              { num: "07", label: "LAUNCH", desc: "Move validated solutions toward pilots, users, and venture products.", top: false },
              { num: "08", label: "MENTOR", desc: "Help the next cohort move faster and strengthen the network.", top: true },
            ].map((step, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center"
                style={{ width: "25%", position: "absolute", left: `${i * 25 + 12.5}%`, top: step.top ? "20px" : "auto", bottom: step.top ? "auto" : "20px" }}
              >
                {!step.top && (
                  <div className="mb-3 space-y-0.5">
                    <span className="text-[#93c5fd] text-[10px] font-mono font-bold block">{step.num}</span>
                    <span className="text-white text-xs font-extrabold uppercase tracking-wider block">{step.label}</span>
                    <p className="text-slate-400 text-[10px] font-light leading-relaxed max-w-[120px] mx-auto">{step.desc}</p>
                  </div>
                )}
                <div className="relative">
                  <div className="w-[72px] h-[72px] rounded-full border-2 border-[#0052FF] bg-black flex items-center justify-center shadow-[0_0_20px_rgba(0,82,255,0.4)]">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0052FF]/25 to-[#38bdf8]/10 border border-[#0052FF]/30 flex items-center justify-center">
                      <span className="text-[#93c5fd] text-base font-black font-mono">{parseInt(step.num)}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full border border-[#0052FF]/15 scale-[1.3] animate-pulse pointer-events-none" style={{ animationDelay: "0.7s" }} />
                </div>
                {step.top && (
                  <div className="mt-3 space-y-0.5">
                    <span className="text-[#93c5fd] text-[10px] font-mono font-bold block">{step.num}</span>
                    <span className="text-white text-xs font-extrabold uppercase tracking-wider block">{step.label}</span>
                    <p className="text-slate-400 text-[10px] font-light leading-relaxed max-w-[120px] mx-auto">{step.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Starter Circle Highlight */}
      <section className="py-24 px-6 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
              Starter Circle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase mb-6">
              A lighter entry path for people who cannot yet <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
                Follow the Full Academy Timetable.
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
              The Starter Circle introduces technology pathways, digital collaboration, user-centred problem solving, emerging technologies, simple prototyping, teamwork, and presentation.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex gap-4 items-start">
                <span className="text-sm font-mono text-[#38bdf8] font-bold">01</span>
                <div>
                  <strong className="text-sm text-white block">Learn without being left behind</strong>
                  <span className="text-xs text-slate-400 font-light">Beginner-friendly explanations and practical weekly tasks.</span>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-sm font-mono text-[#38bdf8] font-bold">02</span>
                <div>
                  <strong className="text-sm text-white block">Contribute before you can code</strong>
                  <span className="text-xs text-slate-400 font-light">Research, interviews, documentation, testing, design support, and data collection all matter.</span>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-sm font-mono text-[#38bdf8] font-bold">03</span>
                <div>
                  <strong className="text-sm text-white block">Progress into the right pathway</strong>
                  <span className="text-xs text-slate-400 font-light">Move toward Academy learning, Community skill circles, or a suitable BuildLab role.</span>
                </div>
              </div>
            </div>
            <Link href="/join" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Join Starter Circle</span>
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
          </div>

          <div className="lg:col-span-5 bg-black border border-white/15 rounded-3xl p-8 shadow-2xl">
            <span className="text-[10px] font-mono uppercase text-[#38bdf8] tracking-widest block mb-4">COMMUNITY SIGNAL</span>
            <blockquote className="text-xl font-bold text-white leading-snug mb-6 uppercase">
              "Belong first. Learn continuously. Contribute meaningfully."
            </blockquote>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              DigiNorth is built on the principle that community connection creates the fertile ground from which world-class engineering capability grows.
            </p>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="py-28 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
            Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
            Different Skills, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">Shared Work.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map((d, idx) => {
            const Icon = d.icon;
            return (
              <div key={idx} className="bg-black border border-white/10 p-8 rounded-3xl shadow-xl flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#38bdf8] w-fit mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 uppercase">{d.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">{d.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 px-6 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
                Meet and Build
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
                Upcoming Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">Activity.</span>
              </h2>
            </div>
            <Link href="/events" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white hidden sm:block">
              All Events →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((e, idx) => (
              <Link key={idx} href={e.href} className="bg-black border border-white/10 rounded-3xl p-8 hover:border-white/30 transition shadow-xl flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase text-[#38bdf8] px-2.5 py-1 rounded bg-white/5 border border-white/10">
                      {e.type}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Physical</span>
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase mb-2 group-hover:text-[#38bdf8] transition-colors">
                    {e.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 block mb-4">{e.date}</span>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">{e.desc}</p>
                </div>
                <span className="text-xs font-mono font-bold text-[#38bdf8] flex items-center gap-1">
                  Open event brief →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stewardship CTA */}
      <section className="py-24 px-6 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-3 font-semibold">
            Participation, Not Hierarchy
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mb-6 leading-tight">
            Share What You Know. Ask Good Questions. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
              Help Someone Else Move Forward.
            </span>
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 font-light">
            Community stewardship is coordinated by <strong>Abraham Salifu</strong>, Community Lead.
          </p>
          <Link href="/join" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
            <span>Apply for Membership</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
