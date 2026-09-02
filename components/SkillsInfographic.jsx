"use client";

import { useState } from "react";
import { 
  Code2, 
  Database, 
  ShieldCheck, 
  Layers, 
  Search, 
  Server,
  Sparkles,
  ChevronRight
} from "lucide-react";

export default function SkillsInfographic() {
  const [activeNode, setActiveNode] = useState(null);

  const leftCards = [
    {
      id: "se",
      nodeId: 0,
      title: "SOFTWARE ENGINEERING",
      desc: "Build web, mobile, backend, API, automation, and platform solutions while learning to ship reliable products.",
      icon: Code2,
    },
    {
      id: "cyber",
      nodeId: 2,
      title: "CYBERSECURITY & INFRA",
      desc: "Learn secure systems, networking, cloud, infrastructure, defensive security, and resilient digital operations.",
      icon: ShieldCheck,
    },
    {
      id: "research",
      nodeId: 4,
      title: "RESEARCH & EMERGING TECH",
      desc: "Investigate new technologies, local problems, user needs, technical feasibility, and opportunities for practical experimentation.",
      icon: Search,
    },
  ];

  const rightCards = [
    {
      id: "ai",
      nodeId: 1,
      title: "AI & DATA",
      desc: "Explore data, machine learning, artificial intelligence, analytics, and responsible AI applications.",
      icon: Database,
    },
    {
      id: "product",
      nodeId: 3,
      title: "PRODUCT & DESIGN",
      desc: "Turn user needs into clear product decisions, useful interfaces, prototypes, testing plans, and stronger experiences.",
      icon: Layers,
    },
    {
      id: "devops",
      nodeId: 5,
      title: "PLATFORMS & DEVOPS",
      desc: "Deploy, scale, and maintain high-availability infrastructure, automated workflows, and resilient digital products.",
      icon: Server,
    },
  ];

  const nodes = [
    { id: 0, x: 380, y: 100, icon: Code2, title: "Software Engineering" },
    { id: 1, x: 620, y: 100, icon: Database, title: "AI & Data" },
    { id: 2, x: 330, y: 300, icon: ShieldCheck, title: "Cybersecurity & Infra" },
    { id: 3, x: 670, y: 300, icon: Layers, title: "Product & Design" },
    { id: 4, x: 380, y: 500, icon: Search, title: "Research & Emerging Tech" },
    { id: 5, x: 620, y: 500, icon: Server, title: "Platforms & DevOps" },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white/[0.05] via-black to-black border border-white/15 rounded-3xl p-3 sm:p-6 lg:p-10 shadow-2xl relative overflow-hidden font-space">
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0052FF]/15 blur-[160px] pointer-events-none rounded-full" />

      {/* Main Infographic Workspace (100% Identical Visual Pattern on Both Mobile & Desktop) */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        
        {/* Full Infographic Grid with 3 Columns: Left Cards - Center Hexagon Hub - Right Cards */}
        <div className="grid grid-cols-12 items-center gap-1 sm:gap-2 lg:gap-4 relative z-10 py-2 sm:py-6">
          
          {/* LEFT 3 CARDS (Col 1 to 4) */}
          <div className="col-span-4 flex flex-col justify-between space-y-3 sm:space-y-6 lg:space-y-10">
            {leftCards.map((card) => {
              const isHighlighted = activeNode === card.nodeId;

              return (
                <div key={card.id} className="flex items-center w-full">
                  {/* Glassmorphic Card */}
                  <div
                    onMouseEnter={() => setActiveNode(card.nodeId)}
                    onMouseLeave={() => setActiveNode(null)}
                    onClick={() => setActiveNode(activeNode === card.nodeId ? null : card.nodeId)}
                    className={`flex-1 p-2 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-xl relative overflow-hidden ${
                      isHighlighted
                        ? "bg-white/[0.14] border-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.35)] -translate-x-0.5 sm:-translate-x-1"
                        : "bg-white/[0.05] border-white/20 hover:border-white/40 shadow-lg"
                    }`}
                  >
                    {/* Top Edge Glossy Highlight */}
                    <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                    <h3 className="text-[10px] sm:text-xs lg:text-sm font-black text-white uppercase tracking-tight mb-0.5 sm:mb-1.5 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[8px] sm:text-[10px] lg:text-xs text-slate-300 font-light leading-snug line-clamp-3 sm:line-clamp-none">
                      {card.desc}
                    </p>
                  </div>

                  {/* Direct Connecting Line from Card into Circle Node */}
                  <div className="w-3 sm:w-6 lg:w-10 flex items-center shrink-0">
                    <div 
                      className={`w-full h-[1.5px] sm:h-[2px] transition-all duration-300 ${
                        isHighlighted ? "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" : "bg-white/40"
                      }`} 
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* CENTER HEXAGON HUB & 6 3D SPHERICAL NODES (Col 5 to 8) */}
          <div className="col-span-4 flex items-center justify-center relative py-1 sm:py-2">
            <div className="relative w-full aspect-square max-w-[190px] sm:max-w-[320px] lg:max-w-[380px] flex items-center justify-center">
              
              {/* SVG Hexagon Frame Lines Connecting the 6 Nodes */}
              <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 400 400">
                {/* Thick Metallic Hexagon Polygon */}
                <polygon
                  points="130,85 270,85 340,200 270,315 130,315 60,200"
                  fill="rgba(0, 82, 255, 0.08)"
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth="3"
                />

                {/* Inner Ambient Glow Polygon */}
                <polygon
                  points="130,85 270,85 340,200 270,315 130,315 60,200"
                  fill="none"
                  stroke="rgba(56, 189, 248, 0.2)"
                  strokeWidth="6"
                  className="filter blur-xs"
                />

                {/* Cross Connecting Dashed Lines */}
                <line x1="130" y1="85" x2="270" y2="315" stroke="rgba(255, 255, 255, 0.12)" strokeDasharray="3,3" />
                <line x1="270" y1="85" x2="130" y2="315" stroke="rgba(255, 255, 255, 0.12)" strokeDasharray="3,3" />
                <line x1="60" y1="200" x2="340" y2="200" stroke="rgba(255, 255, 255, 0.12)" strokeDasharray="3,3" />

                {/* Pulse Glow Ring on Active Node */}
                {activeNode !== null && (
                  <circle
                    cx={
                      activeNode === 0 ? 130 :
                      activeNode === 1 ? 270 :
                      activeNode === 2 ? 60 :
                      activeNode === 3 ? 340 :
                      activeNode === 4 ? 130 : 270
                    }
                    cy={
                      activeNode === 0 || activeNode === 1 ? 85 :
                      activeNode === 2 || activeNode === 3 ? 200 : 315
                    }
                    r="26"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="3"
                    className="animate-pulse"
                  />
                )}
              </svg>

              {/* Center Glass Hexagon Badge (Matching Reference) */}
              <div className="text-center px-2 py-1.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-black/85 border border-white/25 backdrop-blur-md max-w-[90px] sm:max-w-[150px] shadow-2xl z-10">
                <span className="text-[6px] sm:text-[8px] lg:text-[9px] font-mono text-[#38bdf8] uppercase tracking-widest block font-bold mb-0.5">
                  CONNECTED
                </span>
                <h4 className="text-[7px] sm:text-[11px] lg:text-xs font-black text-white uppercase tracking-tight leading-tight mb-0.5 sm:mb-1">
                  SHARED WORK
                </h4>
                <p className="hidden sm:block text-[8px] lg:text-[9px] text-slate-300 font-light leading-tight">
                  Multidisciplinary squads building connected tech.
                </p>
              </div>

              {/* 6 3D Spherical Metallic Nodes */}
              {[
                { id: 0, x: 130, y: 85, icon: Code2, title: "Software Engineering" },
                { id: 1, x: 270, y: 85, icon: Database, title: "AI & Data" },
                { id: 2, x: 60, y: 200, icon: ShieldCheck, title: "Cybersecurity & Infra" },
                { id: 3, x: 340, y: 200, icon: Layers, title: "Product & Design" },
                { id: 4, x: 130, y: 315, icon: Search, title: "Research & Emerging Tech" },
                { id: 5, x: 270, y: 315, icon: Server, title: "Platforms & DevOps" },
              ].map((node) => {
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
                      left: `${(node.x / 400) * 100}%`,
                      top: `${(node.y / 400) * 100}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    className={`w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-20 ${
                      isSelected
                        ? "bg-white text-black border-2 border-[#38bdf8] shadow-[0_0_25px_#38bdf8] scale-110"
                        : "bg-gradient-to-b from-slate-700 via-slate-900 to-black text-white border sm:border-2 border-white/50 hover:border-white hover:scale-105 shadow-xl"
                    }`}
                    title={node.title}
                  >
                    {/* Glossy Spherical Highlight Reflection */}
                    <div className="absolute inset-0.5 sm:inset-1 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                    
                    <NodeIcon className={`w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 relative z-10 ${isSelected ? "text-black" : "text-white"}`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT 3 CARDS (Col 9 to 12) */}
          <div className="col-span-4 flex flex-col justify-between space-y-3 sm:space-y-6 lg:space-y-10">
            {rightCards.map((card) => {
              const isHighlighted = activeNode === card.nodeId;

              return (
                <div key={card.id} className="flex items-center w-full">
                  {/* Direct Connecting Line from Circle Node into Card */}
                  <div className="w-3 sm:w-6 lg:w-10 flex items-center shrink-0">
                    <div 
                      className={`w-full h-[1.5px] sm:h-[2px] transition-all duration-300 ${
                        isHighlighted ? "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" : "bg-white/40"
                      }`} 
                    />
                  </div>

                  {/* Glassmorphic Card */}
                  <div
                    onMouseEnter={() => setActiveNode(card.nodeId)}
                    onMouseLeave={() => setActiveNode(null)}
                    onClick={() => setActiveNode(activeNode === card.nodeId ? null : card.nodeId)}
                    className={`flex-1 p-2 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-xl relative overflow-hidden ${
                      isHighlighted
                        ? "bg-white/[0.14] border-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.35)] translate-x-0.5 sm:translate-x-1"
                        : "bg-white/[0.05] border-white/20 hover:border-white/40 shadow-lg"
                    }`}
                  >
                    {/* Top Edge Glossy Highlight */}
                    <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                    <h3 className="text-[10px] sm:text-xs lg:text-sm font-black text-white uppercase tracking-tight mb-0.5 sm:mb-1.5 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[8px] sm:text-[10px] lg:text-xs text-slate-300 font-light leading-snug line-clamp-3 sm:line-clamp-none">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Active Node Detail Modal / Drawer for Mobile Reading Clarity */}
        {activeNode !== null && (
          <div className="sm:hidden mt-3 p-3 rounded-xl bg-black/95 border border-[#38bdf8]/50 shadow-2xl animate-in fade-in slide-in-from-bottom-2">
            {[...leftCards, ...rightCards].filter(c => c.nodeId === activeNode).map(item => (
              <div key={item.id} className="flex flex-col">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-mono text-[#38bdf8] uppercase font-bold">Selected Track</span>
                  <button onClick={() => setActiveNode(null)} className="text-[9px] text-slate-400 uppercase">✕ Close</button>
                </div>
                <h4 className="text-xs font-black text-white uppercase mb-1">{item.title}</h4>
                <p className="text-[10px] text-slate-300 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}
