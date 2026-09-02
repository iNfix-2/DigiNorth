"use client";

import { useState } from "react";
import { 
  Code2, 
  Database, 
  ShieldCheck, 
  Layers, 
  Search, 
  Sparkles, 
  Cpu, 
  Users, 
  ArrowRight,
  TrendingUp,
  Sliders,
  CheckCircle2
} from "lucide-react";

export default function SkillsInfographic() {
  const [activeIdx, setActiveIdx] = useState(0);

  const skills = [
    {
      id: "se",
      step: "01",
      name: "Software Engineering",
      tagline: "Systems, Web & Mobile",
      percentage: "35%",
      angle: 250, // Top Left
      icon: Code2,
      desc: "Build web, mobile, backend APIs, automation, and resilient platform architecture while shipping robust, verified production software.",
      metrics: "React · Node · Python · Go · Rust",
      deliverable: "Production MVPs & Core Protocols",
    },
    {
      id: "ai",
      step: "02",
      name: "AI & Data Intelligence",
      tagline: "Models & Analytics",
      percentage: "25%",
      angle: 310, // Top Right
      icon: Database,
      desc: "Explore data pipelines, localized machine learning, foundation model fine-tuning, automated agents, and responsible sovereign AI.",
      metrics: "PyTorch · Vector DBs · Multi-Agent · SQL",
      deliverable: "Domain LLMs & Edge Vision",
    },
    {
      id: "cyber",
      step: "03",
      name: "Cybersecurity & Infra",
      tagline: "Zero-Trust & Cloud",
      percentage: "18%",
      angle: 15, // Middle Right
      icon: ShieldCheck,
      desc: "Architect secure multi-cloud environments, zero-trust cryptographic identities, defensive operations, and resilient IoT edge hardware.",
      metrics: "Kubernetes · Linux Kernel · Zero Trust · PQC",
      deliverable: "Hardened Mesh Infrastructure",
    },
    {
      id: "product",
      step: "04",
      name: "Product & UI/UX Design",
      tagline: "Experience & Systems",
      percentage: "12%",
      angle: 120, // Bottom Right
      icon: Layers,
      desc: "Transform messy real-world challenges into intuitive interfaces, design systems, clickable prototypes, and validated user flows.",
      metrics: "Figma · Design Systems · User Research",
      deliverable: "Tested Prototypes & Flow Specs",
    },
    {
      id: "research",
      step: "05",
      name: "Research & Emerging Tech",
      tagline: "Frontier & Field Studies",
      percentage: "10%",
      angle: 195, // Bottom Left
      icon: Search,
      desc: "Investigate regional challenges, user needs, quantum crypto resilience, and practical hardware experimentation across Northern Nigeria.",
      metrics: "Field Studies · Feasibility · Hardware Prototyping",
      deliverable: "Whitepapers & Field Data Sets",
    },
  ];

  const current = skills[activeIdx];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full bg-black/90 border border-white/10 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden font-space">
      
      {/* Background Subtle Grid & Ambient Flare */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0052FF]/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#38bdf8]/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Top Header Infographic Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10 relative z-10 mb-8 sm:mb-12">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] animate-pulse shadow-[0_0_10px_#38bdf8]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] font-bold">
            Interactive Ecosystem Matrix
          </span>
        </div>

        {/* Top Mini Slider Indicators (Matching Reference) */}
        <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase text-slate-500">Cross-Disciplinary Ratio:</span>
            <div className="flex items-center gap-1">
              <span className="w-4 h-1 rounded-full bg-[#38bdf8]" />
              <span className="w-3 h-1 rounded-full bg-[#60a5fa]" />
              <span className="w-2 h-1 rounded-full bg-white/40" />
            </div>
          </div>
          <span className="hidden md:inline text-white font-bold">5 Specialized Tracks</span>
        </div>
      </div>

      {/* Main Infographic Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* LEFT / CENTER: Circular Segmented Radar Hub (SVG & Canvas-Style Infographic) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          
          <div className="relative w-72 sm:w-96 aspect-square flex items-center justify-center">
            
            {/* Concentric Outer Thin Rings (Matching Reference) */}
            <div className="absolute inset-0 rounded-full border border-white/15 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-dashed border-white/20" />
            <div className="absolute inset-10 rounded-full border border-white/10" />

            {/* SVG Interactive Pie / Wedge Slices */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
              {skills.map((skill, idx) => {
                // Approximate 5 arc segments
                const sliceDegree = 360 / skills.length;
                const startAngle = idx * sliceDegree;
                const endAngle = (idx + 1) * sliceDegree - 4; // gap
                
                const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
                  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
                  return {
                    x: centerX + radius * Math.cos(angleInRadians),
                    y: centerY + radius * Math.sin(angleInRadians),
                  };
                };

                const describeArc = (x, y, radius, innerRadius, startAngle, endAngle) => {
                  const start = polarToCartesian(x, y, radius, endAngle);
                  const end = polarToCartesian(x, y, radius, startAngle);
                  const innerStart = polarToCartesian(x, y, innerRadius, endAngle);
                  const innerEnd = polarToCartesian(x, y, innerRadius, startAngle);
                  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

                  return [
                    "M", start.x, start.y,
                    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
                    "L", innerEnd.x, innerEnd.y,
                    "A", innerRadius, innerRadius, 0, largeArcFlag, 1, innerStart.x, innerStart.y,
                    "Z"
                  ].join(" ");
                };

                const isSelected = activeIdx === idx;

                return (
                  <path
                    key={skill.id}
                    d={describeArc(100, 100, isSelected ? 92 : 86, 52, startAngle, endAngle)}
                    fill={isSelected ? "rgba(56, 189, 248, 0.3)" : "rgba(255, 255, 255, 0.04)"}
                    stroke={isSelected ? "#38bdf8" : "rgba(255, 255, 255, 0.2)"}
                    strokeWidth={isSelected ? "2" : "1"}
                    className="cursor-pointer transition-all duration-300 hover:fill-[#38bdf8]/40"
                    onClick={() => setActiveIdx(idx)}
                  />
                );
              })}
            </svg>

            {/* Inner Center Hub Nucleus with Graph Icon */}
            <div className="absolute w-28 sm:w-36 aspect-square rounded-full bg-gradient-to-tr from-black via-slate-900 to-black border border-white/25 shadow-2xl flex flex-col items-center justify-center text-center p-2 z-20">
              <CurrentIcon className="w-6 h-6 text-[#38bdf8] mb-1 animate-pulse" />
              <span className="text-xl sm:text-2xl font-black text-white font-mono leading-none">
                {current.percentage}
              </span>
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest mt-1">
                {current.step} / 05
              </span>
            </div>

            {/* Radial Interactive Node Pins (Clickable Dots) */}
            {skills.map((skill, idx) => {
              const angles = [45, 115, 190, 260, 330];
              const angleRad = (angles[idx] * Math.PI) / 180;
              const radius = 135; // Position outside ring
              const isSelected = activeIdx === idx;

              return (
                <button
                  key={skill.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`absolute w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 z-30 cursor-pointer ${
                    isSelected
                      ? "bg-[#38bdf8] text-black border-white shadow-[0_0_15px_#38bdf8] scale-125"
                      : "bg-black/90 text-slate-300 border-white/30 hover:border-white hover:scale-110"
                  }`}
                  style={{
                    transform: `translate(${Math.cos(angleRad) * radius}px, ${Math.sin(angleRad) * radius}px)`,
                  }}
                  title={skill.name}
                >
                  <span className="text-[10px] font-mono font-bold">{skill.step}</span>
                </button>
              );
            })}
          </div>

          {/* Bottom Quick Switcher Pills for Mobile/Tablet */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8 max-w-sm">
            {skills.map((skill, idx) => (
              <button
                key={skill.id}
                onClick={() => setActiveIdx(idx)}
                className={`px-3 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all ${
                  activeIdx === idx
                    ? "bg-[#38bdf8] text-black font-bold shadow-md"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {skill.step} · {skill.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Active Selected Discipline Infographic Card (With Technical Details) */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          <div className="bg-gradient-to-b from-white/[0.05] to-black border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            
            {/* Top Tag & Step Number */}
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052FF]/20 border border-[#0052FF]/40 text-xs font-mono text-[#38bdf8] font-bold uppercase">
                <CurrentIcon className="w-3.5 h-3.5" />
                <span>STEP {current.step} · {current.tagline}</span>
              </div>

              <div className="text-right">
                <span className="text-2xl font-black text-white font-mono">{current.percentage}</span>
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Talent Share</span>
              </div>
            </div>

            {/* Discipline Headline */}
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4 leading-snug">
              {current.name}
            </h3>

            {/* In-depth Description */}
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
              {current.desc}
            </p>

            {/* Metrics & Deliverable Spec Box */}
            <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
              <div className="flex items-start gap-3 text-xs font-mono">
                <span className="text-slate-500 shrink-0 uppercase">Core Stack:</span>
                <span className="text-[#93c5fd] font-medium">{current.metrics}</span>
              </div>
              <div className="flex items-start gap-3 text-xs font-mono">
                <span className="text-slate-500 shrink-0 uppercase">Output Focus:</span>
                <span className="text-white font-medium">{current.deliverable}</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#join-community"
                className="button-enchanced is-primary !py-3 !px-7 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Join {current.name} Track</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setActiveIdx((prev) => (prev + 1) % skills.length)}
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 text-xs font-mono text-slate-300 hover:text-white transition-colors uppercase"
              >
                Next Discipline →
              </button>
            </div>
          </div>

          {/* Bottom Infographic Team Composition Legend */}
          <div className="bg-black/60 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1.5">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="w-6 h-6 rounded-full bg-slate-800 border border-white/20 flex items-center justify-center">
                    <Users className="w-3 h-3 text-[#38bdf8]" />
                  </div>
                ))}
              </div>
              <div>
                <span className="text-xs font-bold text-white uppercase block">Multidisciplinary Squads</span>
                <span className="text-[10px] font-mono text-slate-400">Teams combine engineers, designers & researchers</span>
              </div>
            </div>

            <span className="text-[11px] font-mono text-[#38bdf8] bg-[#0052FF]/20 px-2.5 py-1 rounded-lg border border-[#0052FF]/30 w-fit">
              100% Collaborative
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}
