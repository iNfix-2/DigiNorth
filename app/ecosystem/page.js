"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Compass, BookOpen, Cpu, Sparkles, Layers, CheckCircle2, Users, Lightbulb, Clock, Eye, Target, Send } from "lucide-react";
import { ScrambleText } from "@/components/useScrambleText";

export default function EcosystemPage() {
  const pathwaySteps = [
    { step: "01", name: "Discover", desc: "Understand technology and opportunity through community belonging." },
    { step: "02", name: "Learn", desc: "Build practical foundations in the Emerging Tech Academy." },
    { step: "03", name: "Join", desc: "Enter the right community lane based on current readiness." },
    { step: "04", name: "Collaborate", desc: "Form useful multidisciplinary squads across Northern Nigeria." },
    { step: "05", name: "Build", desc: "Create working evidence and prototypes in BuildLab." },
    { step: "06", name: "Demonstrate", desc: "Show verified progress publicly at demo days and showcases." },
    { step: "07", name: "Launch", desc: "Move validated solutions toward pilots, users, and venture products." },
    { step: "08", name: "Mentor", desc: "Help the next cohort move faster and strengthen the network." },
  ];

  const engines = [
    {
      code: "01 · Community",
      title: "Where people belong, discover, and collaborate.",
      desc: "Builders, beginners, learners, mentors, founders, researchers, and partners meet, share knowledge, identify problems, and form teams.",
      link: "/community",
      linkText: "Enter Community →",
      icon: Compass,
    },
    {
      code: "02 · Academy",
      title: "Where practical technology capability is developed.",
      desc: "Structured, project-based learning helps participants move beyond course completion into credible work and collaborative building.",
      link: "/academy",
      linkText: "Explore Academy →",
      icon: BookOpen,
    },
    {
      code: "03 · BuildLab",
      title: "Where validated problems become working solutions.",
      desc: "Multidisciplinary teams research users, define scope, build prototypes, test assumptions, document progress, and prepare for pilots.",
      link: "/buildlab",
      linkText: "Explore BuildLab →",
      icon: Cpu,
    },
  ];

  const programmes = [
    {
      name: "DigiNorth BuildLab",
      status: "Active",
      desc: "A structured innovation environment where multidisciplinary teams turn validated community problems into prototypes, test them with real users, and prepare strong projects for demonstration, incubation, and pilot opportunities.",
      href: "/join",
      cta: "Applications Open →",
    },
    {
      name: "DigiNorth Community Season 01",
      status: "Active",
      desc: "A Friday-and-Saturday technology community season connecting beginners, learners, builders, mentors, and partners through practical learning, collaboration, problem discovery, and visible progress toward the October 2026 mini-hackathon.",
      href: "/join",
      cta: "Applications Open →",
    },
    {
      name: "DigiNorth Starter Circle",
      status: "Active",
      desc: "A lightweight beginner pathway inside the Community for people who are new to tech or cannot currently follow the full Academy timetable.",
      href: "/join",
      cta: "Applications Open →",
    },
    {
      name: "Emerging Technologies Academy",
      status: "Active",
      desc: "DigiNorth's structured practical learning arm, helping participants develop useful technology skills and a direct pathway into Community collaboration and BuildLab projects.",
      href: "/academy",
      cta: "Programme Information →",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            DigiNorth Ecosystem · Northern Nigeria
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            One system for people to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
              Learn, Connect, Build, and Launch.
            </span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-light mb-8">
            DigiNorth connects Community, Academy, and BuildLab so talent can move from first exposure to practical capability, collaborative work, useful products, and lasting opportunity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/join" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Enter the Ecosystem</span>
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
            <Link href="/projects" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              Explore Active Work
            </Link>
          </div>
        </div>
      </section>

      {/* Signal Band */}
      <section className="border-y border-white/10 bg-white/[0.02] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">01 · Discover</span>
            <strong className="text-sm font-bold text-white block">Find people and possibilities</strong>
            <span className="text-xs text-slate-400 font-light">Community exposure and belonging.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">02 · Learn</span>
            <strong className="text-sm font-bold text-white block">Develop practical capability</strong>
            <span className="text-xs text-slate-400 font-light">Project-based Academy pathways.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">03 · Build</span>
            <strong className="text-sm font-bold text-white block">Turn problems into products</strong>
            <span className="text-xs text-slate-400 font-light">Evidence-driven BuildLab teams.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">04 · Return</span>
            <strong className="text-sm font-bold text-white block">Launch, mentor, and multiply</strong>
            <span className="text-xs text-slate-400 font-light">Progress that strengthens the next cycle.</span>
          </div>
        </div>
      </section>

      {/* 8-Step Participant Journey — Clean Vertical Dotted Infographic Path */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Participant Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            A Pathway Designed for Momentum— <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
              Not Isolated Activity.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 font-light leading-relaxed">
            Each stage has a clear purpose. People can enter at the level that matches their experience and move forward as their capability grows along a connected regional pipeline.
          </p>
        </div>

        {/* Vertical Dotted Path Timeline Container */}
        <div className="relative">
          {/* Subtle Ambient Background Glows */}
          <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-[#00f2fe]/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-[#0052FF]/15 blur-[100px] pointer-events-none" />

          {/* SVG Dotted Winding Guide Track (Desktop & Tablet) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 800 1760"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Dotted S-curves threading through each node */}
            <path
              d="M 400 60 
                 C 260 60, 260 160, 260 210 
                 C 260 320, 540 330, 540 440 
                 C 540 550, 260 560, 260 670 
                 C 260 780, 540 790, 540 900 
                 C 540 1010, 260 1020, 260 1130 
                 C 260 1240, 540 1250, 540 1360 
                 C 540 1470, 260 1480, 260 1590 
                 C 260 1680, 400 1680, 480 1720"
              stroke="url(#dotLineGrad)"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
              opacity="0.65"
            />
            <defs>
              <linearGradient id="dotLineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="25%" stopColor="#22d3ee" />
                <stop offset="55%" stopColor="#0052FF" />
                <stop offset="80%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Vertical Linear Track for Mobile (< md screens) */}
          <div className="absolute left-6 top-6 bottom-16 w-px border-l-2 border-dashed border-white/20 md:hidden pointer-events-none" />

          {/* 8 Milestone Steps */}
          <div className="space-y-12 sm:space-y-16 relative z-10">
            {[
              {
                step: "STEP 01",
                title: "DISCOVER",
                desc: "Understand technology opportunities, explore local challenges, and find your community belonging.",
                icon: Lightbulb,
                color: "#84cc16", // Lime / Green
                bgGrad: "from-[#84cc16]/20 to-transparent",
                ringBorder: "border-[#84cc16]",
                textColor: "text-[#84cc16]",
                isLeft: true,
              },
              {
                step: "STEP 02",
                title: "LEARN",
                desc: "Build practical, job-ready foundations through structured Emerging Tech Academy pathways.",
                icon: BookOpen,
                color: "#10b981", // Emerald
                bgGrad: "from-[#10b981]/20 to-transparent",
                ringBorder: "border-[#10b981]",
                textColor: "text-[#10b981]",
                isLeft: false,
              },
              {
                step: "STEP 03",
                title: "JOIN",
                desc: "Enter the right participation lane matched to your current capability and ambition.",
                icon: Users,
                color: "#06b6d4", // Cyan
                bgGrad: "from-[#06b6d4]/20 to-transparent",
                ringBorder: "border-[#06b6d4]",
                textColor: "text-[#06b6d4]",
                isLeft: true,
              },
              {
                step: "STEP 04",
                title: "COLLABORATE",
                desc: "Form multidisciplinary builder squads across Northern Nigerian hubs to tackle real problems.",
                icon: Clock,
                color: "#0284c7", // Sky blue
                bgGrad: "from-[#0284c7]/20 to-transparent",
                ringBorder: "border-[#0284c7]",
                textColor: "text-[#0284c7]",
                isLeft: false,
              },
              {
                step: "STEP 05",
                title: "BUILD",
                desc: "Create working evidence, validated prototypes, and software architectures in BuildLab.",
                icon: Cpu,
                color: "#0052FF", // Electric Blue
                bgGrad: "from-[#0052FF]/20 to-transparent",
                ringBorder: "border-[#0052FF]",
                textColor: "text-[#38bdf8]",
                isLeft: true,
              },
              {
                step: "STEP 06",
                title: "DEMONSTRATE",
                desc: "Show verified progress publicly at demo days, partner showcases, and hackathons.",
                icon: Eye,
                color: "#6366f1", // Indigo
                bgGrad: "from-[#6366f1]/20 to-transparent",
                ringBorder: "border-[#6366f1]",
                textColor: "text-[#818cf8]",
                isLeft: false,
              },
              {
                step: "STEP 07",
                title: "LAUNCH",
                desc: "Move validated solutions toward live commercial pilots, real users, and venture products.",
                icon: Target,
                color: "#a855f7", // Purple
                bgGrad: "from-[#a855f7]/20 to-transparent",
                ringBorder: "border-[#a855f7]",
                textColor: "text-[#c084fc]",
                isLeft: true,
              },
              {
                step: "STEP 08",
                title: "MENTOR",
                desc: "Help the next cohort move faster, open partner networks, and strengthen the regional ecosystem.",
                icon: Send,
                color: "#ec4899", // Pink / Fuchsia
                bgGrad: "from-[#ec4899]/20 to-transparent",
                ringBorder: "border-[#ec4899]",
                textColor: "text-[#f472b6]",
                isLeft: false,
              },
            ].map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-5 sm:gap-8 ${
                    s.isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Circular Node with Segmented Accent Ring */}
                  <div className="relative flex-shrink-0 z-20 group">
                    {/* Outer Segmented Arc Ring (Like reference infographic) */}
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center p-1 relative transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: `radial-gradient(circle, ${s.color}15 0%, transparent 70%)`,
                      }}
                    >
                      {/* Decorative outer arc brackets */}
                      <div
                        className="absolute inset-0 rounded-full border-2 border-transparent transition-all duration-300"
                        style={{
                          borderTopColor: s.color,
                          borderBottomColor: s.color,
                          transform: `rotate(${idx * 45}deg)`,
                          boxShadow: `0 0 16px ${s.color}40`,
                        }}
                      />

                      {/* Inner Circular Card */}
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/90 border border-white/15 flex items-center justify-center shadow-xl relative backdrop-blur-md">
                        <Icon
                          className="w-5 h-5 sm:w-7 sm:h-7 transition-colors duration-300"
                          style={{ color: s.color }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Block */}
                  <div
                    className={`flex-1 pl-12 md:pl-0 ${
                      s.isLeft ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold mb-1.5 ${s.textColor}`}
                    >
                      <span>{s.step}</span>
                    </div>
                    <h3 className="text-base sm:text-xl font-extrabold text-white tracking-tight uppercase mb-1">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-md">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ending Trail with Paper Plane Launch Icon */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
              <span>Full Pipeline Continuum · From First Discovery to Scaled Impact</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Send className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>DigiNorth Ecosystem 2026–2027</span>
            </div>
          </div>
        </div>
      </section>

      {/* Three Connected Engines */}
      <section className="py-24 px-6 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
              Three Connected Engines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
              Different Functions. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">One Regional Mission.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {engines.map((e, idx) => {
              const Icon = e.icon;
              return (
                <Link
                  key={idx}
                  href={e.link}
                  className="bg-black border border-white/10 rounded-3xl p-8 hover:border-white/30 hover:-translate-y-1 transition-all shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono text-slate-400">{e.code}</span>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white group-hover:text-[#38bdf8]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase mb-4 group-hover:text-slate-200">
                      {e.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                      {e.desc}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#38bdf8] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {e.linkText}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Programmes */}
      <section className="py-28 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
            Current Programmes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
            What the Ecosystem is <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">Operating Now.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programmes.map((p, idx) => (
            <div key={idx} className="bg-black border border-white/10 rounded-3xl p-8 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white uppercase">{p.name}</h3>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#0052FF]/20 text-[#38bdf8] border border-[#0052FF]/30">
                    {p.status}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                  {p.desc}
                </p>
              </div>
              <Link href={p.href} className="text-xs font-mono font-bold text-[#38bdf8] hover:underline">
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 px-6 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-3 font-semibold">
            The Regional Ambition
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mb-6 leading-tight">
            Build a Concentration of Skills, Research, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">Opportunity.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-2xl mx-auto">
            DigiNorth is designed to help Northern Nigeria research, design, build, and export technology—not only consume it.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/join" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Join DigiNorth</span>
            </Link>
            <Link href="/about" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              About Ecosystem
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
