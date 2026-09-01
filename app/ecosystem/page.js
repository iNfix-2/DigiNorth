"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Compass, BookOpen, Cpu, Sparkles, Layers, CheckCircle2, Users, Lightbulb, Clock, Eye, Target, Send } from "lucide-react";
import { ScrambleText } from "@/components/useScrambleText";
import EngineSlider from "@/components/EngineSlider";

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
      <section className="bg-white/[0.02] py-8 px-6">
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

      {/* 8-Step Participant Journey — Center-Line Vertical Timeline */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="mb-20 text-center max-w-2xl mx-auto">
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

        {/* Central Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Continuous Glowing Vertical Center Line */}
          <div className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#38bdf8]/40 via-[#0052FF]/60 to-[#38bdf8]/40 shadow-[0_0_12px_rgba(56,189,248,0.5)] pointer-events-none" />

          {/* Steps */}
          <div className="space-y-16 sm:space-y-24 relative">
            {[
              {
                num: "01",
                category: "COMMUNITY EXPLORATION",
                title: "DISCOVER",
                desc: "Join community meetups, meet builders, explore domain tracks, and find your starting point in the ecosystem.",
                isLeft: true,
              },
              {
                num: "02",
                category: "SKILL MASTERY",
                title: "LEARN",
                desc: "Master hands-on tech skills in Academy with weekly practice, deep mentorship, and rigorous code reviews.",
                isLeft: false,
              },
              {
                num: "03",
                category: "COLLABORATIVE SQUADS",
                title: "JOIN A TEAM",
                desc: "Form multidisciplinary squads with developers, UI/UX designers, product managers, and researchers.",
                isLeft: true,
              },
              {
                num: "04",
                category: "PRACTICAL ENGINEERING",
                title: "BUILD",
                desc: "Work on real regional problems in BuildLab to create functional, robust, and high-quality tech solutions.",
                isLeft: false,
              },
              {
                num: "05",
                category: "PROOF OF WORK",
                title: "DEMONSTRATE",
                desc: "Present working software at Saturday Starter Circle sessions, peer feedback rounds, and community demo days.",
                isLeft: true,
              },
              {
                num: "06",
                category: "VENTURE & PRODUCTION",
                title: "LAUNCH",
                desc: "Deploy products into the wild, pitch to founders and investors, or scale into enduring commercial ventures.",
                isLeft: false,
              },
              {
                num: "07",
                category: "ECOSYSTEM GROWTH",
                title: "SCALE & PILOT",
                desc: "Advance validated solutions into public and private sector pilots across Northern Nigeria.",
                isLeft: true,
              },
              {
                num: "08",
                category: "NETWORK STEWARDSHIP",
                title: "MENTOR",
                desc: "Help the next cohort move faster, open partner networks, and strengthen the regional ecosystem.",
                isLeft: false,
              },
            ].map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between group">
                {/* Left Side Container */}
                <div className="w-[42%] flex items-center justify-end">
                  {step.isLeft ? (
                    /* Content on Left (Right-Aligned towards center) */
                    <div className="text-right pr-2 sm:pr-4">
                      <span className="text-[10px] sm:text-xs font-mono font-semibold text-[#38bdf8] tracking-widest uppercase mb-1 block">
                        {step.category}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-black text-white uppercase tracking-tight mb-1.5 group-hover:text-[#93c5fd] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ) : (
                    /* Number on Left */
                    <div className="pr-4 sm:pr-6">
                      <span className="text-2xl sm:text-4xl font-extrabold font-mono text-slate-700/80 group-hover:text-slate-500 transition-colors select-none">
                        {step.num}
                      </span>
                    </div>
                  )}
                </div>

                {/* Center Concentric Glowing Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#38bdf8] bg-black flex items-center justify-center shadow-[0_0_16px_rgba(56,189,248,0.7)] group-hover:scale-125 group-hover:shadow-[0_0_24px_rgba(56,189,248,1)] transition-all duration-300">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
                  </div>
                </div>

                {/* Right Side Container */}
                <div className="w-[42%] flex items-center justify-start">
                  {!step.isLeft ? (
                    /* Content on Right (Left-Aligned away from center) */
                    <div className="text-left pl-2 sm:pr-0 sm:pl-4">
                      <span className="text-[10px] sm:text-xs font-mono font-semibold text-[#38bdf8] tracking-widest uppercase mb-1 block">
                        {step.category}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-black text-white uppercase tracking-tight mb-1.5 group-hover:text-[#93c5fd] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ) : (
                    /* Number on Right */
                    <div className="pl-4 sm:pl-6">
                      <span className="text-2xl sm:text-4xl font-extrabold font-mono text-slate-700/80 group-hover:text-slate-500 transition-colors select-none">
                        {step.num}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Connected Engines — Cinematic Image Background Slider */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
            Three Connected Engines
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            Different Functions. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">One Regional Mission.</span>
          </h2>
        </div>

        {/* Cinematic Slider */}
        <EngineSlider />
      </section>

      {/* Current Programmes */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
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
      <section className="py-24 px-6 bg-white/[0.02]">
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
