"use client";

import { useState } from "react";
import { 
  Code2, 
  Database, 
  ShieldCheck, 
  Layers, 
  Search, 
  Server, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function SkillsInfographic() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const leftDisciplines = [
    {
      id: "se",
      nodeId: 0,
      title: "SOFTWARE ENGINEERING",
      tagline: "DISCOVER & BUILD",
      icon: Code2,
      desc: "Build web, mobile, backend, API, automation, and platform solutions while learning to ship reliable products.",
      accent: "#38bdf8",
    },
    {
      id: "cyber",
      nodeId: 2,
      title: "CYBERSECURITY & INFRASTRUCTURE",
      tagline: "SECURITY & RESILIENCE",
      icon: ShieldCheck,
      desc: "Learn secure systems, networking, cloud, infrastructure, defensive security, and resilient digital operations.",
      accent: "#60a5fa",
    },
    {
      id: "research",
      nodeId: 4,
      title: "RESEARCH & EMERGING TECH",
      tagline: "EXPLORATION & EXPERIMENTATION",
      icon: Search,
      desc: "Investigate new technologies, local problems, user needs, technical feasibility, and opportunities for practical experimentation.",
      accent: "#a855f7",
    },
  ];

  const rightDisciplines = [
    {
      id: "ai",
      nodeId: 1,
      title: "AI & DATA",
      tagline: "INTELLIGENCE & MODELS",
      icon: Database,
      desc: "Explore data, machine learning, artificial intelligence, analytics, and responsible AI applications.",
      accent: "#38bdf8",
    },
    {
      id: "product",
      nodeId: 3,
      title: "PRODUCT & DESIGN",
      tagline: "STRATEGY & USER EXPERIENCE",
      icon: Layers,
      desc: "Turn user needs into clear product decisions, useful interfaces, prototypes, testing plans, and stronger experiences.",
      accent: "#60a5fa",
    },
    {
      id: "cloud",
      nodeId: 5,
      title: "PLATFORMS & DEVOPS",
      tagline: "INFRASTRUCTURE & SCALE",
      icon: Server,
      desc: "Deploy, scale, and maintain high-availability infrastructure, automated workflows, and resilient digital products.",
      accent: "#a855f7",
    },
  ];

  // Hexagon node layout positions for SVG in viewBox 0 0 440 440:
  // Center is (220, 220)
  // Node 0: Top Left (120, 90)
  // Node 1: Top Right (320, 90)
  // Node 2: Mid Left (50, 220)
  // Node 3: Mid Right (390, 220)
  // Node 4: Bottom Left (120, 350)
  // Node 5: Bottom Right (320, 350)
  const hexNodes = [
    { id: 0, x: 120, y: 90, icon: Code2, title: "Software Engineering", side: "left", cardIdx: 0 },
    { id: 1, x: 320, y: 90, icon: Database, title: "AI & Data", side: "right", cardIdx: 0 },
    { id: 2, x: 50, y: 220, icon: ShieldCheck, title: "Cybersecurity & Infrastructure", side: "left", cardIdx: 1 },
    { id: 3, x: 390, y: 220, icon: Layers, title: "Product & Design", side: "right", cardIdx: 1 },
    { id: 4, x: 120, y: 350, icon: Search, title: "Research & Emerging Tech", side: "left", cardIdx: 2 },
    { id: 5, x: 320, y: 350, icon: Server, title: "Platforms & DevOps", side: "right", cardIdx: 2 },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white/[0.03] to-black border border-white/10 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden font-space">
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#0052FF]/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Desktop & Tablet Hexagonal Hub & Spoke Layout */}
      <div className="hidden lg:grid grid-cols-12 gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: 3 Cards */}
        <div className="col-span-4 flex flex-col justify-between space-y-8">
          {leftDisciplines.map((item) => {
            const isHovered = hoveredIdx === item.nodeId;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(item.nodeId)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative group p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? "bg-white/[0.09] border-[#38bdf8] shadow-[0_0_30px_rgba(56,189,248,0.25)] -translate-x-1"
                    : "bg-black/60 border-white/10 hover:border-white/30"
                }`}
              >
                {/* Connecting horizontal line to the right */}
                <div
                  className={`hidden lg:block absolute -right-8 top-1/2 w-8 h-[1.5px] transition-colors duration-300 ${
                    isHovered ? "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" : "bg-white/20"
                  }`}
                />
                <div
                  className={`hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-colors duration-300 ${
                    isHovered ? "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" : "bg-white/40"
                  }`}
                />

                <span className="text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] block mb-1.5 font-bold">
                  {item.tagline}
                </span>
                <h3 className="text-base font-extrabold text-white uppercase tracking-tight mb-2.5 group-hover:text-[#38bdf8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CENTER COLUMN: Hexagonal Network Diagram (SVG Hub) */}
        <div className="col-span-4 flex items-center justify-center relative">
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            
            {/* SVG Connecting Hexagon Mesh Lines */}
            <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 440 440">
              {/* Central Hexagon Perimeter Lines */}
              <polygon
                points="120,90 320,90 390,220 320,350 120,350 50,220"
                fill="rgba(0, 82, 255, 0.05)"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="2"
              />

              {/* Cross Interconnect Lattice Lines */}
              <line x1="120" y1="90" x2="320" y2="350" stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="3,3" />
              <line x1="320" y1="90" x2="120" y2="350" stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="3,3" />
              <line x1="50" y1="220" x2="390" y2="220" stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="3,3" />

              {/* Active Highlight Ring around Hovered Node */}
              {hoveredIdx !== null && (
                <circle
                  cx={hexNodes[hoveredIdx].x}
                  cy={hexNodes[hoveredIdx].y}
                  r="34"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  className="animate-pulse"
                />
              )}
            </svg>

            {/* Center Core Hub Title & Description Box (Matching Exact Reference) */}
            <div className="text-center px-5 py-4 rounded-2xl bg-black/85 border border-white/20 backdrop-blur-md max-w-[190px] shadow-2xl z-10">
              <span className="text-[9px] font-mono text-[#38bdf8] uppercase tracking-widest block font-bold mb-1">
                CONNECTED
              </span>
              <h4 className="text-xs font-black text-white uppercase tracking-tight leading-tight mb-2">
                SHARED WORK
              </h4>
              <p className="text-[10px] text-slate-300 font-light leading-relaxed">
                Multidisciplinary squads building connected, scalable technology.
              </p>
            </div>

            {/* 6 Circular Metallic Nodes */}
            {hexNodes.map((node) => {
              const NodeIcon = node.icon;
              const isHovered = hoveredIdx === node.id;

              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setHoveredIdx(node.id)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    position: "absolute",
                    left: `${(node.x / 440) * 100}%`,
                    top: `${(node.y / 440) * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-20 ${
                    isHovered
                      ? "bg-white text-black border-2 border-[#38bdf8] shadow-[0_0_25px_#38bdf8] scale-110"
                      : "bg-gradient-to-b from-slate-800 to-black text-white border border-white/30 hover:border-white hover:scale-105 shadow-xl"
                  }`}
                  title={node.title}
                >
                  <NodeIcon className={`w-6 h-6 ${isHovered ? "text-black" : "text-[#38bdf8]"}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: 3 Cards */}
        <div className="col-span-4 flex flex-col justify-between space-y-8">
          {rightDisciplines.map((item) => {
            const isHovered = hoveredIdx === item.nodeId;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(item.nodeId)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative group p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? "bg-white/[0.09] border-[#38bdf8] shadow-[0_0_30px_rgba(56,189,248,0.25)] translate-x-1"
                    : "bg-black/60 border-white/10 hover:border-white/30"
                }`}
              >
                {/* Connecting horizontal line to the left */}
                <div
                  className={`hidden lg:block absolute -left-8 top-1/2 w-8 h-[1.5px] transition-colors duration-300 ${
                    isHovered ? "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" : "bg-white/20"
                  }`}
                />
                <div
                  className={`hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-colors duration-300 ${
                    isHovered ? "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" : "bg-white/40"
                  }`}
                />

                <span className="text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] block mb-1.5 font-bold">
                  {item.tagline}
                </span>
                <h3 className="text-base font-extrabold text-white uppercase tracking-tight mb-2.5 group-hover:text-[#38bdf8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      {/* Mobile & Tablet Responsive Layout (Hexagon Hub + Responsive Cards Grid) */}
      <div className="lg:hidden flex flex-col gap-8">
        
        {/* Compact Mobile Hexagon Node Wheel */}
        <div className="flex items-center justify-center py-4">
          <div className="relative w-72 h-72 flex items-center justify-center">
            
            <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 440 440">
              <polygon
                points="120,90 320,90 390,220 320,350 120,350 50,220"
                fill="rgba(0, 82, 255, 0.08)"
                stroke="rgba(255, 255, 255, 0.25)"
                strokeWidth="2"
              />
            </svg>

            {/* Mobile Center Pill */}
            <div className="text-center px-3.5 py-2.5 rounded-xl bg-black/85 border border-white/20 z-10 max-w-[130px]">
              <span className="text-[8px] font-mono text-[#38bdf8] font-bold uppercase block">CONNECTED</span>
              <span className="text-[10px] font-black text-white uppercase block leading-tight">SHARED WORK</span>
            </div>

            {/* 6 Mobile Circular Nodes */}
            {hexNodes.map((node) => {
              const NodeIcon = node.icon;
              const isHovered = hoveredIdx === node.id;

              return (
                <button
                  key={node.id}
                  onClick={() => setHoveredIdx(hoveredIdx === node.id ? null : node.id)}
                  style={{
                    position: "absolute",
                    left: `${(node.x / 440) * 100}%`,
                    top: `${(node.y / 440) * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                    isHovered
                      ? "bg-white text-black border-2 border-[#38bdf8] shadow-[0_0_20px_#38bdf8] scale-110"
                      : "bg-slate-900 text-white border border-white/30"
                  }`}
                >
                  <NodeIcon className={`w-4 h-4 ${isHovered ? "text-black" : "text-[#38bdf8]"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Disciplines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[...leftDisciplines, ...rightDisciplines].map((item) => {
            const Icon = item.icon;
            const isHovered = hoveredIdx === item.nodeId;

            return (
              <div
                key={item.id}
                onClick={() => setHoveredIdx(hoveredIdx === item.nodeId ? null : item.nodeId)}
                className={`p-5 rounded-2xl border transition-all ${
                  isHovered
                    ? "bg-white/[0.08] border-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                    : "bg-black/60 border-white/10"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#38bdf8]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-[#38bdf8] uppercase block font-semibold">{item.tagline}</span>
                    <h3 className="text-sm font-bold text-white uppercase">{item.title}</h3>
                  </div>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
