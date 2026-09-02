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

  const rows = [
    {
      id: "row-1",
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
      id: "row-2",
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
        desc: "Multidisciplinary squads building connected technology.",
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
      id: "row-3",
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
    <div className="w-full bg-gradient-to-b from-white/[0.04] via-black to-black border border-white/10 rounded-3xl p-4 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden font-space">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0052FF]/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Desktop & Tablet Unified 3-Row Hexagonal Network */}
      <div className="hidden md:flex flex-col space-y-6 lg:space-y-8 relative z-10">
        
        {/* SVG Polygon Overlay connecting the 6 nodes together in hexagon */}
        <svg 
          className="absolute inset-x-0 inset-y-0 w-full h-full pointer-events-none z-0" 
          preserveAspectRatio="none"
        >
          {/* Note: Nodes are positioned in grid columns, overlay handles ambient backdrop */}
        </svg>

        {rows.map((row, rIdx) => {
          const isLeftActive = activeNode === row.leftCard.nodeId;
          const isRightActive = activeNode === row.rightCard.nodeId;
          const LeftIcon = row.leftCard.icon;
          const RightIcon = row.rightCard.icon;

          return (
            <div key={row.id} className="grid grid-cols-12 items-center gap-0 relative z-10">
              
              {/* 1. Left Description Card (Cols 1-4) */}
              <div
                onMouseEnter={() => setActiveNode(row.leftCard.nodeId)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode(activeNode === row.leftCard.nodeId ? null : row.leftCard.nodeId)}
                className={`col-span-4 p-5 lg:p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative z-10 ${
                  isLeftActive
                    ? "bg-white/[0.09] border-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.25)] -translate-x-1"
                    : "bg-black/80 border-white/10 hover:border-white/30"
                }`}
              >
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

              {/* 2. Left Connector Line: Card to Left Node (Col 5) */}
              <div className="col-span-1 flex items-center justify-center relative">
                {/* Node Anchor Dot */}
                <div 
                  className={`w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-300 ${
                    isLeftActive ? "bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] scale-125" : "bg-white/40"
                  }`} 
                />
                {/* Continuous Connecting Line */}
                <div 
                  className={`flex-1 h-[2px] transition-all duration-300 ${
                    isLeftActive ? "bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" : "bg-white/20"
                  }`} 
                />
              </div>

              {/* 3. Center Hub Area: Left Node, Center Content/Hexagon, Right Node (Cols 6-7) */}
              <div className="col-span-2 flex items-center justify-between relative px-2">
                
                {/* Left Circular Node */}
                <div
                  onMouseEnter={() => setActiveNode(row.leftNode.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  onClick={() => setActiveNode(activeNode === row.leftNode.id ? null : row.leftNode.id)}
                  className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shrink-0 z-20 ${
                    isLeftActive
                      ? "bg-white text-black border-2 border-[#38bdf8] shadow-[0_0_25px_#38bdf8] scale-110"
                      : "bg-gradient-to-b from-slate-800 to-black text-white border border-white/30 hover:border-white hover:scale-105 shadow-xl"
                  }`}
                  title={row.leftNode.title}
                >
                  <LeftIcon className={`w-5 h-5 lg:w-6 lg:h-6 ${isLeftActive ? "text-black" : "text-[#38bdf8]"}`} />
                </div>

                {/* Center Content / Center Bridge */}
                {rIdx === 1 ? (
                  /* Middle Row: Center Shared Work Box */
                  <div className="text-center px-3 py-2.5 lg:px-4 lg:py-3 rounded-2xl bg-black/90 border border-white/20 backdrop-blur-md max-w-[130px] lg:max-w-[150px] shadow-2xl z-20 mx-auto">
                    <span className="text-[8px] font-mono text-[#38bdf8] uppercase tracking-widest block font-bold mb-0.5">
                      {row.centerBox.tagline}
                    </span>
                    <h4 className="text-[10px] lg:text-xs font-black text-white uppercase tracking-tight leading-tight mb-1">
                      {row.centerBox.title}
                    </h4>
                    <p className="text-[8px] lg:text-[9px] text-slate-400 font-light leading-snug">
                      {row.centerBox.desc}
                    </p>
                  </div>
                ) : (
                  /* Top and Bottom Rows: Hexagon connector lines bridging left and right nodes */
                  <div className="flex-1 flex items-center justify-center relative mx-2">
                    <div className="w-full h-[1.5px] bg-white/20" />
                  </div>
                )}

                {/* Right Circular Node */}
                <div
                  onMouseEnter={() => setActiveNode(row.rightNode.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  onClick={() => setActiveNode(activeNode === row.rightNode.id ? null : row.rightNode.id)}
                  className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shrink-0 z-20 ${
                    isRightActive
                      ? "bg-white text-black border-2 border-[#38bdf8] shadow-[0_0_25px_#38bdf8] scale-110"
                      : "bg-gradient-to-b from-slate-800 to-black text-white border border-white/30 hover:border-white hover:scale-105 shadow-xl"
                  }`}
                  title={row.rightNode.title}
                >
                  <RightIcon className={`w-5 h-5 lg:w-6 lg:h-6 ${isRightActive ? "text-black" : "text-[#38bdf8]"}`} />
                </div>

              </div>

              {/* 4. Right Connector Line: Right Node to Right Card (Col 8) */}
              <div className="col-span-1 flex items-center justify-center relative">
                {/* Continuous Connecting Line */}
                <div 
                  className={`flex-1 h-[2px] transition-all duration-300 ${
                    isRightActive ? "bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" : "bg-white/20"
                  }`} 
                />
                {/* Node Anchor Dot */}
                <div 
                  className={`w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-300 ${
                    isRightActive ? "bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] scale-125" : "bg-white/40"
                  }`} 
                />
              </div>

              {/* 5. Right Description Card (Cols 9-12) */}
              <div
                onMouseEnter={() => setActiveNode(row.rightCard.nodeId)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode(activeNode === row.rightCard.nodeId ? null : row.rightCard.nodeId)}
                className={`col-span-4 p-5 lg:p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative z-10 ${
                  isRightActive
                    ? "bg-white/[0.09] border-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.25)] translate-x-1"
                    : "bg-black/80 border-white/10 hover:border-white/30"
                }`}
              >
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

      {/* Mobile Responsive Layout (Stacked Connected Rows with Horizontal Connector Lines) */}
      <div className="md:hidden flex flex-col space-y-6">
        
        {/* Mobile Center Pill */}
        <div className="text-center p-3 rounded-2xl bg-black/80 border border-white/20 max-w-[200px] mx-auto">
          <span className="text-[8px] font-mono text-[#38bdf8] uppercase tracking-widest block font-bold">CONNECTED</span>
          <h4 className="text-xs font-black text-white uppercase">SHARED WORK MATRIX</h4>
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
              className="flex items-center gap-3"
            >
              {/* Circular Node */}
              <div 
                className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  isActive 
                    ? "bg-white text-black border-2 border-[#38bdf8] shadow-[0_0_15px_#38bdf8]" 
                    : "bg-slate-900 text-white border border-white/30"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-black" : "text-[#38bdf8]"}`} />
              </div>

              {/* Connector line */}
              <div className={`w-4 h-[2px] shrink-0 ${isActive ? "bg-[#38bdf8]" : "bg-white/30"}`} />

              {/* Connected Card */}
              <div 
                className={`flex-1 p-4 rounded-2xl border transition-all ${
                  isActive 
                    ? "bg-white/[0.08] border-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.25)]" 
                    : "bg-black/60 border-white/10"
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
