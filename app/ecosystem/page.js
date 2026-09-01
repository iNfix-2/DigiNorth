"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Compass, BookOpen, Cpu, Sparkles, Layers, CheckCircle2 } from "lucide-react";
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

      {/* 8-Step Participant Journey — Connected Snake Track */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
            Participant Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            A pathway designed for momentum— <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
              Not Isolated Activity.
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-4 font-light leading-relaxed">
            Each stage has a clear purpose. People can enter at the level that matches their experience and move forward as their capability grows.
          </p>
        </div>

        {/* Single connected snake track — scrolls horizontally on small screens */}
        <div className="overflow-x-auto pb-4">
          <div style={{ minWidth: "800px", position: "relative", height: "420px" }}>

            {/* One continuous SVG path through all 8 nodes */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 800 420"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Single continuous wavy dashed line connecting all 8 nodes */}
              <path
                d="M50 180 C100 60, 150 60, 200 180 C250 300, 300 300, 350 180 C400 60, 450 60, 500 180 C550 300, 600 300, 650 180 C700 60, 750 60, 750 180"
                stroke="url(#snakeGrad)"
                strokeWidth="1.5"
                strokeDasharray="7 5"
                opacity="0.5"
              />
              <defs>
                <linearGradient id="snakeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#0052FF" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>

            {/* Nodes — 8 steps placed along the snake path */}
            {[
              { num: "01", label: "DISCOVER",     desc: "Understand technology and opportunity through community belonging.",        x: "6.25%",  y: 165, above: true  },
              { num: "02", label: "LEARN",         desc: "Build practical foundations in the Emerging Tech Academy.",                 x: "18.75%", y: 285, above: false },
              { num: "03", label: "JOIN",          desc: "Enter the right community lane based on current readiness.",               x: "31.25%", y: 165, above: true  },
              { num: "04", label: "COLLABORATE",  desc: "Form useful multidisciplinary squads across Northern Nigeria.",             x: "43.75%", y: 285, above: false },
              { num: "05", label: "BUILD",         desc: "Create working evidence and prototypes in BuildLab.",                      x: "56.25%", y: 165, above: true  },
              { num: "06", label: "DEMONSTRATE",  desc: "Show verified progress publicly at demo days and showcases.",              x: "68.75%", y: 285, above: false },
              { num: "07", label: "LAUNCH",        desc: "Move validated solutions toward pilots, users, and venture products.",     x: "81.25%", y: 165, above: true  },
              { num: "08", label: "MENTOR",        desc: "Help the next cohort move faster and strengthen the network.",            x: "93.75%", y: 165, above: true  },
            ].map((step, i) => {
              const isBlue = i >= 4;
              const borderColor = isBlue ? "#0052FF" : "#38bdf8";
              const textColor   = isBlue ? "#93c5fd" : "#38bdf8";
              const glowColor   = isBlue ? "rgba(0,82,255,0.4)" : "rgba(56,189,248,0.35)";
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: step.x,
                    top: `${step.y}px`,
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    zIndex: 10,
                  }}
                >
                  {/* Label above */}
                  {step.above && (
                    <div style={{ marginBottom: "10px" }}>
                      <span style={{ color: textColor, fontSize: "10px", fontFamily: "monospace", fontWeight: "bold", display: "block" }}>{step.num}</span>
                      <span style={{ color: "white", fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>{step.label}</span>
                      <p style={{ color: "#94a3b8", fontSize: "9px", fontWeight: "300", lineHeight: "1.4", maxWidth: "90px", margin: "0 auto" }}>{step.desc}</p>
                    </div>
                  )}

                  {/* Circle node */}
                  <div style={{ position: "relative" }}>
                    <div style={{
                      width: "68px", height: "68px", borderRadius: "50%",
                      border: `2px solid ${borderColor}`,
                      background: "black",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: `0 0 22px ${glowColor}`,
                    }}>
                      <div style={{
                        width: "42px", height: "42px", borderRadius: "50%",
                        background: `radial-gradient(circle, ${borderColor}22, ${borderColor}08)`,
                        border: `1px solid ${borderColor}44`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <span style={{ color: textColor, fontSize: "15px", fontWeight: "900", fontFamily: "monospace" }}>{parseInt(step.num)}</span>
                      </div>
                    </div>
                    {/* Pulse ring */}
                    <div style={{
                      position: "absolute", inset: 0, borderRadius: "50%",
                      border: `1px solid ${borderColor}25`,
                      transform: "scale(1.35)",
                      animation: "pulse 2s infinite",
                      animationDelay: `${i * 0.15}s`,
                    }} />
                  </div>

                  {/* Label below */}
                  {!step.above && (
                    <div style={{ marginTop: "10px" }}>
                      <span style={{ color: textColor, fontSize: "10px", fontFamily: "monospace", fontWeight: "bold", display: "block" }}>{step.num}</span>
                      <span style={{ color: "white", fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>{step.label}</span>
                      <p style={{ color: "#94a3b8", fontSize: "9px", fontWeight: "300", lineHeight: "1.4", maxWidth: "90px", margin: "0 auto" }}>{step.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
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
