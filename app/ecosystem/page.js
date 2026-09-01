"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Compass, BookOpen, Cpu, Sparkles, Layers, CheckCircle2, Users } from "lucide-react";
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

      {/* 8-Step Participant Journey — Vertical 3D Glowing Winding Road */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Participant Roadmap
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

        {/* Vertical 3D Winding Road Container — 100% responsive, no horizontal scroll */}
        <div className="relative w-full rounded-3xl bg-gradient-to-b from-white/[0.03] via-black to-black/90 border border-white/10 p-4 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
          {/* Background Ambient Glows */}
          <div className="absolute top-20 left-1/4 w-80 h-80 rounded-full bg-[#00f2fe]/10 blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-[#0052FF]/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#38bdf8]/10 blur-[100px] pointer-events-none" />

          {/* SVG Canvas for Vertical Road */}
          <div className="relative w-full aspect-[720/1900] sm:aspect-[760/1850]">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 760 1850"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Vertical Road Extrusion Gradient */}
                <linearGradient id="vRoadExtrudeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#0052FF" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.95" />
                </linearGradient>

                {/* Vertical Road Surface Gradient */}
                <linearGradient id="vRoadSurfaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0c1629" />
                  <stop offset="50%" stopColor="#0a1220" />
                  <stop offset="100%" stopColor="#0d1c38" />
                </linearGradient>

                {/* Neon Edge Glow Filter */}
                <filter id="vNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="vSoftGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="14" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Deep 3D Shadow Ribbon (offset bottom-right) */}
              <path
                d="M 380 40 C 230 40, 230 110, 230 160 C 230 260, 530 280, 530 380 C 530 480, 230 500, 230 600 C 230 700, 530 720, 530 820 C 530 920, 230 940, 230 1040 C 230 1140, 530 1160, 530 1260 C 530 1360, 230 1380, 230 1480 C 230 1580, 530 1600, 530 1700 C 530 1760, 420 1790, 380 1800"
                transform="translate(10, 16)"
                stroke="#000000"
                strokeWidth="62"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.8"
                filter="url(#vSoftGlow)"
              />

              {/* 2. 3D Under-Extrusion & Neon Glowing Edge Lip */}
              <path
                d="M 380 40 C 230 40, 230 110, 230 160 C 230 260, 530 280, 530 380 C 530 480, 230 500, 230 600 C 230 700, 530 720, 530 820 C 530 920, 230 940, 230 1040 C 230 1140, 530 1160, 530 1260 C 530 1360, 230 1380, 230 1480 C 230 1580, 530 1600, 530 1700 C 530 1760, 420 1790, 380 1800"
                transform="translate(4, 8)"
                stroke="url(#vRoadExtrudeGrad)"
                strokeWidth="56"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#vNeonGlow)"
                opacity="0.9"
              />

              {/* 3. Dark 3D Road Thickness Body */}
              <path
                d="M 380 40 C 230 40, 230 110, 230 160 C 230 260, 530 280, 530 380 C 530 480, 230 500, 230 600 C 230 700, 530 720, 530 820 C 530 920, 230 940, 230 1040 C 230 1140, 530 1160, 530 1260 C 530 1360, 230 1380, 230 1480 C 230 1580, 530 1600, 530 1700 C 530 1760, 420 1790, 380 1800"
                transform="translate(2, 4)"
                stroke="#060c17"
                strokeWidth="52"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* 4. Top Road Asphalt Ribbon Surface */}
              <path
                d="M 380 40 C 230 40, 230 110, 230 160 C 230 260, 530 280, 530 380 C 530 480, 230 500, 230 600 C 230 700, 530 720, 530 820 C 530 920, 230 940, 230 1040 C 230 1140, 530 1160, 530 1260 C 530 1360, 230 1380, 230 1480 C 230 1580, 530 1600, 530 1700 C 530 1760, 420 1790, 380 1800"
                stroke="url(#vRoadSurfaceGrad)"
                strokeWidth="48"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* 5. Glowing Neon Border Line */}
              <path
                d="M 380 40 C 230 40, 230 110, 230 160 C 230 260, 530 280, 530 380 C 530 480, 230 500, 230 600 C 230 700, 530 720, 530 820 C 530 920, 230 940, 230 1040 C 230 1140, 530 1160, 530 1260 C 530 1360, 230 1380, 230 1480 C 230 1580, 530 1600, 530 1700 C 530 1760, 420 1790, 380 1800"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                opacity="0.8"
                filter="url(#vNeonGlow)"
              />

              {/* 6. Center Dashed Lane Divider */}
              <path
                d="M 380 40 C 230 40, 230 110, 230 160 C 230 260, 530 280, 530 380 C 530 480, 230 500, 230 600 C 230 700, 530 720, 530 820 C 530 920, 230 940, 230 1040 C 230 1140, 530 1160, 530 1260 C 530 1360, 230 1380, 230 1480 C 230 1580, 530 1600, 530 1700 C 530 1760, 420 1790, 380 1800"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeDasharray="14 10"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                opacity="0.85"
              />

              {/* Crosswalk Zebra Stripes at each of the 8 checkpoints */}
              {[160, 380, 600, 820, 1040, 1260, 1480, 1700].map((yPos, i) => {
                const xPos = i % 2 === 0 ? 230 : 530;
                return (
                  <g key={i} opacity="0.75">
                    {[-14, -7, 0, 7, 14].map((offset, j) => (
                      <line
                        key={j}
                        x1={xPos - 18}
                        y1={yPos + offset}
                        x2={xPos + 18}
                        y2={yPos + offset}
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    ))}
                  </g>
                );
              })}

              {/* Connecting dashed lines between Road & Badges/Cards */}
              {[
                { x1: 230, y1: 160, x2: 90, y2: 160 },
                { x1: 530, y1: 380, x2: 670, y2: 380 },
                { x1: 230, y1: 600, x2: 90, y2: 600 },
                { x1: 530, y1: 820, x2: 670, y2: 820 },
                { x1: 230, y1: 1040, x2: 90, y2: 1040 },
                { x1: 530, y1: 1260, x2: 670, y2: 1260 },
                { x1: 230, y1: 1480, x2: 90, y2: 1480 },
                { x1: 530, y1: 1700, x2: 670, y2: 1700 },
              ].map((conn, idx) => (
                <line
                  key={idx}
                  x1={conn.x1}
                  y1={conn.y1}
                  x2={conn.x2}
                  y2={conn.y2}
                  stroke={idx < 4 ? "#38bdf8" : "#0052FF"}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.6"
                />
              ))}

              {/* Terminal Arrow at Bottom */}
              <g transform="translate(380, 1800) rotate(90)">
                <polygon
                  points="0,-24 40,0 0,24 8,0"
                  fill="url(#vRoadExtrudeGrad)"
                  filter="url(#vNeonGlow)"
                  opacity="0.9"
                />
              </g>
            </svg>

            {/* 8 Milestone Waypoint Badges & Content Cards */}
            {[
              {
                num: "01",
                label: "Market & Discovery",
                sub: "DISCOVER",
                desc: "Understand technology opportunities through community belonging and open exploration.",
                icon: Compass,
                badgeX: "12%",
                badgeY: "8.6%",
                cardX: "46%",
                cardY: "6.2%",
                isLeft: true,
              },
              {
                num: "02",
                label: "Foundational Skills",
                sub: "LEARN",
                desc: "Build practical, job-ready technology foundations in the Emerging Tech Academy.",
                icon: BookOpen,
                badgeX: "88%",
                badgeY: "20.5%",
                cardX: "6%",
                cardY: "18.2%",
                isLeft: false,
              },
              {
                num: "03",
                label: "High-Intent Personas",
                sub: "JOIN",
                desc: "Enter the right community lane matched to current readiness and domain ambition.",
                icon: Users,
                badgeX: "12%",
                badgeY: "32.4%",
                cardX: "46%",
                cardY: "30.1%",
                isLeft: true,
              },
              {
                num: "04",
                label: "Squad Formation",
                sub: "COLLABORATE",
                desc: "Form multidisciplinary builder squads across Northern Nigerian hubs.",
                icon: Layers,
                badgeX: "88%",
                badgeY: "44.3%",
                cardX: "6%",
                cardY: "42.0%",
                isLeft: false,
              },
              {
                num: "05",
                label: "Working Prototypes",
                sub: "BUILD",
                desc: "Create working evidence, software architectures, and hardware prototypes in BuildLab.",
                icon: Cpu,
                badgeX: "12%",
                badgeY: "56.2%",
                cardX: "46%",
                cardY: "53.9%",
                isLeft: true,
              },
              {
                num: "06",
                label: "Public Proof & Demo",
                sub: "DEMONSTRATE",
                desc: "Show verified progress publicly at demo days, partner showcases, and hackathons.",
                icon: CheckCircle2,
                badgeX: "88%",
                badgeY: "68.1%",
                cardX: "6%",
                cardY: "65.8%",
                isLeft: false,
              },
              {
                num: "07",
                label: "Pilots & Product Launch",
                sub: "LAUNCH",
                desc: "Move validated solutions toward live commercial pilots, real users, and venture products.",
                icon: Sparkles,
                badgeX: "12%",
                badgeY: "80.0%",
                cardX: "46%",
                cardY: "77.7%",
                isLeft: true,
              },
              {
                num: "08",
                label: "Ecosystem Multiplication",
                sub: "MENTOR",
                desc: "Help the next cohort move faster, open partner networks, and scale regional capacity.",
                icon: ArrowRight,
                badgeX: "88%",
                badgeY: "91.9%",
                cardX: "6%",
                cardY: "89.6%",
                isLeft: false,
              },
            ].map((node, idx) => {
              const Icon = node.icon;
              const isCyan = idx < 4;
              const neonBorder = isCyan ? "border-[#38bdf8]" : "border-[#0052FF]";
              const glowBox = isCyan
                ? "shadow-[0_0_24px_rgba(56,189,248,0.45)]"
                : "shadow-[0_0_24px_rgba(0,82,255,0.55)]";

              return (
                <div key={idx}>
                  {/* Glowing Milestone Badge on the side */}
                  <div
                    className="absolute z-20 group cursor-pointer transition-transform duration-300 hover:scale-110"
                    style={{
                      left: node.badgeX,
                      top: node.badgeY,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/90 border-2 ${neonBorder} ${glowBox} flex items-center justify-center relative backdrop-blur-md`}
                    >
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border ${
                          isCyan
                            ? "bg-gradient-to-br from-[#38bdf8]/30 via-black to-[#0052FF]/20 border-[#38bdf8]/50"
                            : "bg-gradient-to-br from-[#0052FF]/40 via-black to-[#38bdf8]/30 border-[#0052FF]/60"
                        }`}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                      </div>

                      {/* Step Number Tag */}
                      <div className="absolute -bottom-1 -right-1 px-1.5 py-0.2 rounded-full bg-black border border-white/20 text-[8px] sm:text-[9px] font-mono font-bold text-white shadow">
                        {node.num}
                      </div>

                      {/* Pulse Halo */}
                      <div
                        className="absolute inset-0 rounded-full border border-current opacity-30 animate-ping pointer-events-none"
                        style={{ color: isCyan ? "#38bdf8" : "#0052FF", animationDuration: "3s", animationDelay: `${idx * 0.3}s` }}
                      />
                    </div>
                  </div>

                  {/* Stage Card Callout */}
                  <div
                    className="absolute z-30 w-[46%] sm:w-[42%] max-w-[320px] p-3 sm:p-4 rounded-2xl bg-black/85 border border-white/10 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-black/95"
                    style={{
                      left: node.cardX,
                      top: node.cardY,
                    }}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[9px] sm:text-[11px] font-mono font-bold text-[#38bdf8] uppercase tracking-wider">
                        {node.num} · {node.sub}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight mb-1">
                      {node.label}
                    </h4>
                    <p className="text-[9px] sm:text-xs text-slate-300 font-light leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Card Footer */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
              <span>Continuous Progression · Evidence-Driven Trajectory</span>
            </div>
            <div className="text-slate-500">
              Northern Nigeria Tech Talent Pipeline 2026–2027
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
