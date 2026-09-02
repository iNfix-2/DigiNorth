"use client";

import { useState } from "react";
import { 
  Code2, 
  Database, 
  ShieldCheck, 
  Layers, 
  Search, 
  Server 
} from "lucide-react";

export default function SkillsInfographic() {
  const [activeNode, setActiveNode] = useState(null);

  const leftCards = [
    {
      id: "se",
      nodeId: 0,
      title: "SOFTWARE ENGINEERING",
      tagline: "DISCOVER & BUILD",
      desc: "Build web, mobile, backend, API, automation, and platform solutions while learning to ship reliable products.",
      icon: Code2,
    },
    {
      id: "cyber",
      nodeId: 2,
      title: "CYBERSECURITY & INFRA",
      tagline: "SECURITY & RESILIENCE",
      desc: "Learn secure systems, networking, cloud, infrastructure, defensive security, and resilient digital operations.",
      icon: ShieldCheck,
    },
    {
      id: "research",
      nodeId: 4,
      title: "RESEARCH & EMERGING TECH",
      tagline: "EXPLORATION & EXPERIMENT",
      desc: "Investigate new technologies, local problems, user needs, technical feasibility, and opportunities for practical experimentation.",
      icon: Search,
    },
  ];

  const rightCards = [
    {
      id: "ai",
      nodeId: 1,
      title: "AI & DATA",
      tagline: "INTELLIGENCE & MODELS",
      desc: "Explore data, machine learning, artificial intelligence, analytics, and responsible AI applications.",
      icon: Database,
    },
    {
      id: "product",
      nodeId: 3,
      title: "PRODUCT & DESIGN",
      tagline: "STRATEGY & EXPERIENCE",
      desc: "Turn user needs into clear product decisions, useful interfaces, prototypes, testing plans, and stronger experiences.",
      icon: Layers,
    },
    {
      id: "devops",
      nodeId: 5,
      title: "PLATFORMS & DEVOPS",
      tagline: "INFRASTRUCTURE & SCALE",
      desc: "Deploy, scale, and maintain high-availability infrastructure, automated workflows, and resilient digital products.",
      icon: Server,
    },
  ];

  const nodes = [
    { id: 0, x: 130, y: 95, icon: Code2, label: "Software" },
    { id: 1, x: 310, y: 95, icon: Database, label: "AI & Data" },
    { id: 2, x: 60, y: 220, icon: ShieldCheck, label: "Cyber" },
    { id: 3, x: 380, y: 220, icon: Layers, label: "Design" },
    { id: 4, x: 130, y: 345, icon: Search, label: "Research" },
    { id: 5, x: 310, y: 345, icon: Server, label: "DevOps" },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white/[0.04] via-black to-black border border-white/10 rounded-3xl p-4 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden font-space">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0052FF]/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Main Infographic Grid: 3 Columns on md/lg, compact interactive flow on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: 3 Cards */}
        <div className="order-2 md:order-1 md:col-span-4 flex flex-col justify-between space-y-4 lg:space-y-8">
          {leftCards.map((card) => {
            const isHighlighted = activeNode === card.nodeId;
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveNode(card.nodeId)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode(activeNode === card.nodeId ? null : card.nodeId)}
                className={`relative group p-4 sm:p-5 lg:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isHighlighted
                    ? "bg-white/[0.09] border-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.25)] md:-translate-x-1"
                    : "bg-black/60 border-white/10 hover:border-white/30"
                }`}
              >
                {/* Horizontal Connector Line & Node Dot (Desktop/Tablet) */}
                <div
                  className={`hidden md:block absolute -right-6 lg:-right-8 top-1/2 w-6 lg:w-8 h-[2px] transition-colors duration-300 ${
                    isHighlighted ? "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" : "bg-white/20"
                  }`}
                />
                <div
                  className={`hidden md:block absolute -right-6 lg:-right-8 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    isHighlighted ? "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" : "bg-white/40"
                  }`}
                />

                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="md:hidden p-1.5 rounded-lg bg-white/5 border border-white/10 text-[#38bdf8]">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] font-bold">
                    {card.tagline}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#38bdf8] transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-xs sm:text-xs text-slate-300 leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CENTER COLUMN: Hexagonal Network Hub (SVG + 6 Glowing Nodes) */}
        <div className="order-1 md:order-2 md:col-span-4 flex items-center justify-center relative py-4 sm:py-6">
          <div className="relative w-[280px] sm:w-[340px] lg:w-[380px] aspect-square flex items-center justify-center">
            
            {/* SVG Connecting Polygon and Radial Lines */}
            <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 440 440">
              {/* Outer Hexagon Line */}
              <polygon
                points="130,95 310,95 380,220 310,345 130,345 60,220"
                fill="rgba(0, 82, 255, 0.06)"
                stroke="rgba(255, 255, 255, 0.25)"
                strokeWidth="2"
              />

              {/* Cross Interconnect Dashed Lines */}
              <line x1="130" y1="95" x2="310" y2="345" stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="3,3" />
              <line x1="310" y1="95" x2="130" y2="345" stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="3,3" />
              <line x1="60" y1="220" x2="380" y2="220" stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="3,3" />

              {/* Active Pulse Circle on Hovered Node */}
              {activeNode !== null && (
                <circle
                  cx={nodes[activeNode].x}
                  cy={nodes[activeNode].y}
                  r="30"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  className="animate-pulse"
                />
              )}
            </svg>

            {/* Center Core Hub Title & Description (Matching Reference Center Box) */}
            <div className="text-center px-4 py-3 sm:px-5 sm:py-4 rounded-2xl bg-black/85 border border-white/20 backdrop-blur-md max-w-[150px] sm:max-w-[180px] shadow-2xl z-10">
              <span className="text-[8px] sm:text-[9px] font-mono text-[#38bdf8] uppercase tracking-widest block font-bold mb-1">
                CONNECTED
              </span>
              <h4 className="text-[11px] sm:text-xs font-black text-white uppercase tracking-tight leading-tight mb-1.5">
                SHARED WORK
              </h4>
              <p className="text-[9px] sm:text-[10px] text-slate-300 font-light leading-relaxed">
                Multidisciplinary squads building connected technology.
              </p>
            </div>

            {/* 6 Circular Nodes */}
            {nodes.map((node) => {
              const NodeIcon = node.icon;
              const isSelected = activeNode === node.id;

              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                  style={{
                    position: "absolute",
                    left: `${(node.x / 440) * 100}%`,
                    top: `${(node.y / 440) * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-20 ${
                    isSelected
                      ? "bg-white text-black border-2 border-[#38bdf8] shadow-[0_0_25px_#38bdf8] scale-115"
                      : "bg-gradient-to-b from-slate-800 to-black text-white border border-white/30 hover:border-white hover:scale-105 shadow-xl"
                  }`}
                  title={node.label}
                >
                  <NodeIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${isSelected ? "text-black" : "text-[#38bdf8]"}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: 3 Cards */}
        <div className="order-3 md:col-span-4 flex flex-col justify-between space-y-4 lg:space-y-8">
          {rightCards.map((card) => {
            const isHighlighted = activeNode === card.nodeId;
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveNode(card.nodeId)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode(activeNode === card.nodeId ? null : card.nodeId)}
                className={`relative group p-4 sm:p-5 lg:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isHighlighted
                    ? "bg-white/[0.09] border-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.25)] md:translate-x-1"
                    : "bg-black/60 border-white/10 hover:border-white/30"
                }`}
              >
                {/* Horizontal Connector Line & Node Dot (Desktop/Tablet) */}
                <div
                  className={`hidden md:block absolute -left-6 lg:-left-8 top-1/2 w-6 lg:w-8 h-[2px] transition-colors duration-300 ${
                    isHighlighted ? "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" : "bg-white/20"
                  }`}
                />
                <div
                  className={`hidden md:block absolute -left-6 lg:-left-8 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    isHighlighted ? "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" : "bg-white/40"
                  }`}
                />

                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="md:hidden p-1.5 rounded-lg bg-white/5 border border-white/10 text-[#38bdf8]">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] font-bold">
                    {card.tagline}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#38bdf8] transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-xs sm:text-xs text-slate-300 leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
