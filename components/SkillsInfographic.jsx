"use client";

import { useState } from "react";
import { 
  Code2, 
  Database, 
  ShieldCheck, 
  Layers, 
  Search, 
  Server,
  Sparkles
} from "lucide-react";

export default function SkillsInfographic() {
  const [activeNode, setActiveNode] = useState(null);

  const rows = [
    {
      id: "row-top",
      leftCard: {
        id: "se",
        nodeId: 0,
        title: "SOFTWARE ENGINEERING",
        tagline: "DISCOVER & BUILD",
        desc: "Build web, mobile, backend, API, automation, and platform solutions while learning to ship reliable products.",
        icon: Code2,
      },
      leftNode: { id: 0, icon: Code2, title: "Software Engineering" },
      rightNode: { id: 1, icon: Database, title: "AI & Data" },
      rightCard: {
        id: "ai",
        nodeId: 1,
        title: "AI & DATA",
        tagline: "INTELLIGENCE & MODELS",
        desc: "Explore data, machine learning, artificial intelligence, analytics, and responsible AI applications.",
        icon: Database,
      },
    },
    {
      id: "row-mid",
      leftCard: {
        id: "cyber",
        nodeId: 2,
        title: "CYBERSECURITY & INFRA",
        tagline: "SECURITY & RESILIENCE",
        desc: "Learn secure systems, networking, cloud, infrastructure, defensive security, and resilient digital operations.",
        icon: ShieldCheck,
      },
      leftNode: { id: 2, icon: ShieldCheck, title: "Cybersecurity & Infra" },
      centerBox: {
        title: "SHARED WORK",
        tagline: "CONNECTED",
        desc: "Multidisciplinary squads building connected, scalable technology.",
      },
      rightNode: { id: 3, icon: Layers, title: "Product & Design" },
      rightCard: {
        id: "product",
        nodeId: 3,
        title: "PRODUCT & DESIGN",
        tagline: "STRATEGY & EXPERIENCE",
        desc: "Turn user needs into clear product decisions, useful interfaces, prototypes, testing plans, and stronger experiences.",
        icon: Layers,
      },
    },
    {
      id: "row-bot",
      leftCard: {
        id: "research",
        nodeId: 4,
        title: "RESEARCH & EMERGING TECH",
        tagline: "EXPLORATION & EXPERIMENT",
        desc: "Investigate new technologies, local problems, user needs, technical feasibility, and opportunities for practical experimentation.",
        icon: Search,
      },
      leftNode: { id: 4, icon: Search, title: "Research & Emerging Tech" },
      rightNode: { id: 5, icon: Server, title: "Platforms & DevOps" },
      rightCard: {
        id: "devops",
        nodeId: 5,
        title: "PLATFORMS & DEVOPS",
        tagline: "INFRASTRUCTURE & SCALE",
        desc: "Deploy, scale, and maintain high-availability infrastructure, automated workflows, and resilient digital products.",
        icon: Server,
      },
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white/[0.05] via-black to-black border border-white/15 rounded-3xl p-4 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden font-space">
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#0052FF]/15 blur-[160px] pointer-events-none rounded-full" />

      {/* Desktop & Tablet Hexagonal Connected Structure */}
      <div className="hidden md:flex flex-col space-y-8 lg:space-y-12 relative z-10 max-w-6xl mx-auto">
        
        {/* SVG Polygon Overlay connecting the 6 nodes together in hexagon */}
        <svg className="w-full h-full absolute inset-0 pointer-events-none z-0" viewBox="0 0 1000 600" preserveAspectRatio="none">
          {/* Top to Mid Left */}
          <line x1="390" y1="90" x2="355" y2="300" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
          {/* Mid Left to Bottom Left */}
          <line x1="355" y1="300" x2="390" y2="510" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
          {/* Top Left to Top Right */}
          <line x1="390" y1="90" x2="610" y2="90" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
          {/* Top Right to Mid Right */}
          <line x1="610" y1="90" x2="645" y2="300" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
          {/* Mid Right to Bottom Right */}
          <line x1="645" y1="300" x2="610" y2="510" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
          {/* Bottom Left to Bottom Right */}
          <line x1="390" y1="510" x2="610" y2="510" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
        </svg>

        {rows.map((row, rIdx) => {
          const isLeftActive = activeNode === row.leftCard.nodeId;
          const isRightActive = activeNode === row.rightCard.nodeId;
          const LeftIcon = row.leftCard.icon;
          const RightIcon = row.rightCard.icon;

          return (
            <div key={row.id} className="flex items-center w-full relative z-10">
              
              {/* 1. LEFT CARD (Glassmorphism rounded box matching reference) */}
              <div
                onMouseEnter={() => setActiveNode(row.leftCard.nodeId)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode(activeNode === row.leftCard.nodeId ? null : row.leftCard.nodeId)}
                className={`w-[260px] lg:w-[320px] p-5 rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-md relative z-10 shrink-0 ${
                  isLeftActive
                    ? "bg-white/[0.12] border-[#38bdf8] shadow-[0_0_30px_rgba(56,189,248,0.3)] -translate-x-1"
                    : "bg-white/[0.04] border-white/15 hover:border-white/35 shadow-xl"
                }`}
              >
                {/* Top Subtle Frosted Highlight Glow */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-2xl" />

                <span className="text-[9px] lg:text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-bold">
                  {row.leftCard.tagline}
                </span>
                <h3 className="text-sm lg:text-base font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#38bdf8] transition-colors">
                  {row.leftCard.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {row.leftCard.desc}
                </p>
              </div>

              {/* 2. LEFT CONTINUOUS LINE (Touches Card and Left Node with zero gap) */}
              <div className="flex-1 flex items-center relative">
                <div 
                  className={`w-full h-[2px] transition-all duration-300 ${
                    isLeftActive 
                      ? "bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" 
                      : "bg-gradient-to-r from-white/40 via-white/30 to-white/40"
                  }`} 
                />
              </div>

              {/* 3. CENTER HEXAGON NODE AREA */}
              <div className={`flex items-center justify-between relative shrink-0 ${
                rIdx === 1 ? "w-[300px] lg:w-[340px]" : "w-[230px] lg:w-[260px]"
              }`}>
                
                {/* Left Circular Metallic Node */}
                <div
                  onMouseEnter={() => setActiveNode(row.leftNode.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  onClick={() => setActiveNode(activeNode === row.leftNode.id ? null : row.leftNode.id)}
                  className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shrink-0 z-20 ${
                    isLeftActive
                      ? "bg-white text-black border-2 border-[#38bdf8] shadow-[0_0_30px_#38bdf8] scale-110"
                      : "bg-gradient-to-b from-slate-700 via-slate-900 to-black text-white border-2 border-white/40 hover:border-white hover:scale-105 shadow-2xl"
                  }`}
                  title={row.leftNode.title}
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/60 flex items-center justify-center border border-white/20">
                    <LeftIcon className={`w-5 h-5 lg:w-6 lg:h-6 ${isLeftActive ? "text-black" : "text-white"}`} />
                  </div>
                </div>

                {/* Center Box in Middle Row */}
                {rIdx === 1 ? (
                  <div className="text-center px-4 py-3 rounded-2xl bg-black/90 border border-white/25 backdrop-blur-md max-w-[150px] shadow-2xl z-20 mx-2">
                    <span className="text-[8px] font-mono text-[#38bdf8] uppercase tracking-widest block font-bold mb-0.5">
                      {row.centerBox.tagline}
                    </span>
                    <h4 className="text-[11px] lg:text-xs font-black text-white uppercase tracking-tight leading-tight mb-1">
                      {row.centerBox.title}
                    </h4>
                    <p className="text-[9px] text-slate-300 font-light leading-snug">
                      {row.centerBox.desc}
                    </p>
                  </div>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-full h-[2px] bg-white/25" />
                  </div>
                )}

                {/* Right Circular Metallic Node */}
                <div
                  onMouseEnter={() => setActiveNode(row.rightNode.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  onClick={() => setActiveNode(activeNode === row.rightNode.id ? null : row.rightNode.id)}
                  className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shrink-0 z-20 ${
                    isRightActive
                      ? "bg-white text-black border-2 border-[#38bdf8] shadow-[0_0_30px_#38bdf8] scale-110"
                      : "bg-gradient-to-b from-slate-700 via-slate-900 to-black text-white border-2 border-white/40 hover:border-white hover:scale-105 shadow-2xl"
                  }`}
                  title={row.rightNode.title}
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/60 flex items-center justify-center border border-white/20">
                    <RightIcon className={`w-5 h-5 lg:w-6 lg:h-6 ${isRightActive ? "text-black" : "text-white"}`} />
                  </div>
                </div>

              </div>

              {/* 4. RIGHT CONTINUOUS LINE (Touches Right Node and Card with zero gap) */}
              <div className="flex-1 flex items-center relative">
                <div 
                  className={`w-full h-[2px] transition-all duration-300 ${
                    isRightActive 
                      ? "bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" 
                      : "bg-gradient-to-r from-white/40 via-white/30 to-white/40"
                  }`} 
                />
              </div>

              {/* 5. RIGHT CARD (Glassmorphism rounded box matching reference) */}
              <div
                onMouseEnter={() => setActiveNode(row.rightCard.nodeId)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode(activeNode === row.rightCard.nodeId ? null : row.rightCard.nodeId)}
                className={`w-[260px] lg:w-[320px] p-5 rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-md relative z-10 shrink-0 ${
                  isRightActive
                    ? "bg-white/[0.12] border-[#38bdf8] shadow-[0_0_30px_rgba(56,189,248,0.3)] translate-x-1"
                    : "bg-white/[0.04] border-white/15 hover:border-white/35 shadow-xl"
                }`}
              >
                {/* Top Subtle Frosted Highlight Glow */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-2xl" />

                <span className="text-[9px] lg:text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-bold">
                  {row.rightCard.tagline}
                </span>
                <h3 className="text-sm lg:text-base font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#38bdf8] transition-colors">
                  {row.rightCard.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {row.rightCard.desc}
                </p>
              </div>

            </div>
          );
        })}

      </div>

      {/* Mobile Responsive Layout (Horizontal Linked Rows) */}
      <div className="md:hidden flex flex-col space-y-6">
        
        {/* Mobile Center Pill */}
        <div className="text-center p-3.5 rounded-2xl bg-black/80 border border-white/20 max-w-[220px] mx-auto">
          <span className="text-[8px] font-mono text-[#38bdf8] uppercase tracking-widest block font-bold">CONNECTED</span>
          <h4 className="text-xs font-black text-white uppercase mb-1">SHARED WORK MATRIX</h4>
          <p className="text-[9px] text-slate-400">Multidisciplinary technology squads.</p>
        </div>

        {/* 6 Connected Mobile Item Cards */}
        {rows.flatMap((r) => [
          { card: r.leftCard, node: r.leftNode },
          { card: r.rightCard, node: r.rightNode },
        ]).map((item) => {
          const isActive = activeNode === item.node.id;
          const Icon = item.node.icon;

          return (
            <div 
              key={item.card.id}
              onClick={() => setActiveNode(activeNode === item.node.id ? null : item.node.id)}
              className="flex items-center w-full gap-0 cursor-pointer"
            >
              {/* Circular Node */}
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all z-10 ${
                  isActive 
                    ? "bg-white text-black border-2 border-[#38bdf8] shadow-[0_0_15px_#38bdf8]" 
                    : "bg-slate-900 text-white border-2 border-white/30"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-black" : "text-white"}`} />
              </div>

              {/* Continuous Line to Card */}
              <div className={`w-5 h-[2px] shrink-0 transition-colors ${isActive ? "bg-[#38bdf8]" : "bg-white/40"}`} />

              {/* Connected Card */}
              <div 
                className={`flex-1 p-4 rounded-2xl border transition-all backdrop-blur-md ${
                  isActive 
                    ? "bg-white/[0.12] border-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.25)]" 
                    : "bg-white/[0.04] border-white/15"
                }`}
              >
                <span className="text-[9px] font-mono text-[#38bdf8] uppercase block font-bold mb-0.5">
                  {item.card.tagline}
                </span>
                <h3 className="text-xs font-bold text-white uppercase mb-1">
                  {item.card.title}
                </h3>
                <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                  {item.card.desc}
                </p>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}
