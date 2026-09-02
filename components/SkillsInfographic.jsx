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
      tagline: "CORE SYSTEMS",
      icon: Code2,
      desc: "Build web, mobile, backend APIs, automation, and platform solutions while learning to ship reliable, verified products.",
      accent: "#38bdf8",
    },
    {
      id: "cyber",
      nodeId: 2,
      title: "CYBERSECURITY & INFRA",
      tagline: "ZERO TRUST",
      icon: ShieldCheck,
      desc: "Learn secure systems, networking, cloud infrastructure, defensive security, and resilient digital operations.",
      accent: "#60a5fa",
    },
    {
      id: "research",
      nodeId: 4,
      title: "RESEARCH & EMERGING TECH",
      tagline: "FIELD STUDIES",
      icon: Search,
      desc: "Investigate new technologies, regional challenges, technical feasibility, and opportunities for practical experimentation.",
      accent: "#a855f7",
    },
  ];

  const rightDisciplines = [
    {
      id: "ai",
      nodeId: 1,
      title: "AI & DATA INTELLIGENCE",
      tagline: "MODELS & ANALYTICS",
      icon: Database,
      desc: "Explore data pipelines, machine learning, artificial intelligence, analytics, and responsible sovereign AI applications.",
      accent: "#38bdf8",
    },
    {
      id: "product",
      nodeId: 3,
      title: "PRODUCT & UI/UX DESIGN",
      tagline: "EXPERIENCE DESIGN",
      icon: Layers,
      desc: "Turn user needs into clear product decisions, useful interfaces, prototypes, testing plans, and stronger experiences.",
      accent: "#60a5fa",
    },
    {
      id: "cloud",
      nodeId: 5,
      title: "DEVOPS & CLOUD ARCHITECTURE",
      tagline: "RELIABILITY & SCALE",
      icon: Server,
      desc: "Architect continuous integration, container orchestration, high-availability deployments, and edge telemetry.",
      accent: "#a855f7",
    },
  ];

  // Hexagon node layout positions for SVG in viewBox 0 0 400 400:
  // Node 0: Top Left (110, 80)
  // Node 1: Top Right (290, 80)
  // Node 2: Mid Left (40, 200)
  // Node 3: Mid Right (360, 200)
  // Node 4: Bottom Left (110, 320)
  // Node 5: Bottom Right (290, 320)
  const hexNodes = [
    { id: 0, x: 110, y: 80, icon: Code2, title: "Software Engineering", side: "left", cardIdx: 0 },
    { id: 1, x: 290, y: 80, icon: Database, title: "AI & Data", side: "right", cardIdx: 0 },
    { id: 2, x: 50, y: 200, icon: ShieldCheck, title: "Cybersecurity", side: "left", cardIdx: 1 },
    { id: 3, x: 350, y: 200, icon: Layers, title: "Product & Design", side: "right", cardIdx: 1 },
    { id: 4, x: 110, y: 320, icon: Search, title: "Research & Tech", side: "left", cardIdx: 2 },
    { id: 5, x: 290, y: 320, icon: Server, title: "DevOps & Cloud", side: "right", cardIdx: 2 },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white/[0.03] to-black border border-white/10 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden font-space">
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0052FF]/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Desktop & Tablet Hexagonal Hub & Spoke Layout */}
      <div className="hidden lg:grid grid-cols-12 gap-6 items-center relative z-10">
        
        {/* LEFT COLUMN: 3 Cards */}
        <div className="col-span-4 flex flex-col justify-between space-y-8">
          {leftDisciplines.map((item, idx) => {
            const isHovered = hoveredIdx === item.nodeId;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(item.nodeId)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative group p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? "bg-white/[0.08] border-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.25)] -translate-x-1"
                    : "bg-black/60 border-white/10 hover:border-white/30"
                }`}
              >
                {/* Connecting horizontal line to the right */}
                <div
                  className={`hidden lg:block absolute -right-6 top-1/2 w-6 h-[1.5px] transition-colors duration-300 ${
                    isHovered ? "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" : "bg-white/20"
                  }`}
                />
                <div
                  className={`hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-colors duration-300 ${
                    isHovered ? "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" : "bg-white/40"
                  }`}
                />

                <span className="text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-semibold">
                  {item.tagline}
                </span>
                <h3 className="text-base font-bold text-white uppercase tracking-tight mb-2 group-hover:text-[#38bdf8] transition-colors">
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
          <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
            
            {/* SVG Connecting Hexagon Mesh Lines */}
            <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 400 400">
              {/* Central Hexagon Perimeter Lines */}
              <polygon
                points="110,80 290,80 350,200 290,320 110,320 50,200"
                fill="rgba(0, 82, 255, 0.05)"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="2"
              />

              {/* Cross Interconnect Lattice Lines */}
              <line x1="110" y1="80" x2="290" y2="320" stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="3,3" />
              <line x1="290" y1="80" x2="110" y2="320" stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="3,3" />
              <line x1="50" y1="200" x2="350" y2="200" stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="3,3" />

              {/* Active Highlight Line around Polygon */}
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

            {/* Center Core Hub Title Box */}
            <div className="text-center px-4 py-3 rounded-2xl bg-black/80 border border-white/20 backdrop-blur-md max-w-[150px] shadow-2xl z-10">
              <span className="text-[9px] font-mono text-[#38bdf8] uppercase tracking-widest block font-bold mb-1">
                CONNECTED
              </span>
              <h4 className="text-xs font-black text-white uppercase tracking-tight leading-tight">
                SHARED WORK MATRIX
              </h4>
            </div>

            {/* 6 Circular Nodes */}
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
                    left: `${(node.x / 400) * 100}%`,
                    top: `${(node.y / 400) * 100}%`,
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
          {rightDisciplines.map((item, idx) => {
            const isHovered = hoveredIdx === item.nodeId;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(item.nodeId)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative group p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? "bg-white/[0.08] border-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.25)] translate-x-1"
                    : "bg-black/60 border-white/10 hover:border-white/30"
                }`}
              >
                {/* Connecting horizontal line to the left */}
                <div
                  className={`hidden lg:block absolute -left-6 top-1/2 w-6 h-[1.5px] transition-colors duration-300 ${
                    isHovered ? "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" : "bg-white/20"
                  }`}
                />
                <div
                  className={`hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-colors duration-300 ${
                    isHovered ? "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" : "bg-white/40"
                  }`}
                />

                <span className="text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-semibold">
                  {item.tagline}
                </span>
                <h3 className="text-base font-bold text-white uppercase tracking-tight mb-2 group-hover:text-[#38bdf8] transition-colors">
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
          <div className="relative w-64 h-64 flex items-center justify-center">
            
            <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 400 400">
              <polygon
                points="110,80 290,80 350,200 290,320 110,320 50,200"
                fill="rgba(0, 82, 255, 0.08)"
                stroke="rgba(255, 255, 255, 0.25)"
                strokeWidth="2"
              />
            </svg>

            {/* Mobile Center Pill */}
            <div className="text-center px-3 py-2 rounded-xl bg-black/80 border border-white/20 z-10">
              <span className="text-[8px] font-mono text-[#38bdf8] font-bold uppercase block">MATRIX</span>
              <span className="text-[10px] font-black text-white uppercase">6 DISCIPLINES</span>
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
                    left: `${(node.x / 400) * 100}%`,
                    top: `${(node.y / 400) * 100}%`,
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
