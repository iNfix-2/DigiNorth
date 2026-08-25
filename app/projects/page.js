"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, FolderGit2, Search, Filter, Layers, CheckCircle2 } from "lucide-react";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStage, setSelectedStage] = useState("");

  const sampleProjects = [
    {
      id: "agri-intel",
      name: "AgriIntel Northern Yield",
      stage: "Prototype",
      category: "AI & Agriculture",
      desc: "Computer vision crop disease diagnostic model trained on sorghum, millet, and tomato leaves for Northern Nigerian rural farmers.",
      contributors: "3 builders",
      status: "Open for UI/UX",
    },
    {
      id: "kaduna-transit",
      name: "Kaduna Transit Mesh",
      stage: "Discovery",
      category: "Mobility & Infra",
      desc: "Decentralized offline transport route and schedule mapping protocol for intra-state transit corridors.",
      contributors: "2 builders",
      status: "Open for Research",
    },
    {
      id: "arewa-devs",
      name: "Arewa Open Source Guild",
      stage: "MVP",
      category: "Developer Tools",
      desc: "Hausa and Nupe localized documentation parser and developer onboarding toolchain for beginner programmers.",
      contributors: "5 builders",
      status: "Open for Backend",
    },
  ];

  const filteredProjects = sampleProjects.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = selectedStage === "" || p.stage === selectedStage;
    return matchesSearch && matchesStage;
  });

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-6">
            <FolderGit2 className="w-3.5 h-3.5" />
            DigiNorth Projects · Public Build Record
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            Technology being <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
              Built in Public.
            </span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-light mb-8">
            Explore approved projects, the problems they address, their current stage, reviewed progress, technology choices, and open opportunities to contribute.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#catalogue" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Explore Projects</span>
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </a>
            <Link href="/join" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              Join BuildLab
            </Link>
          </div>
        </div>
      </section>

      {/* Catalogue Principles */}
      <section className="border-y border-white/10 bg-white/[0.02] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Problem</span>
            <strong className="text-sm font-bold text-white block">Why the project exists</strong>
            <span className="text-xs text-slate-400 font-light">Public projects begin with a clear regional challenge.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Stage</span>
            <strong className="text-sm font-bold text-white block">Where the work stands</strong>
            <span className="text-xs text-slate-400 font-light">Discovery through prototype, MVP, and scaling.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Evidence</span>
            <strong className="text-sm font-bold text-white block">What has been completed</strong>
            <span className="text-xs text-slate-400 font-light">Progress is peer-reviewed before being published.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Contribution</span>
            <strong className="text-sm font-bold text-white block">Where help is useful</strong>
            <span className="text-xs text-slate-400 font-light">Open roles appear only when teams request them.</span>
          </div>
        </div>
      </section>

      {/* Catalogue Console */}
      <section id="catalogue" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
              Project Catalogue
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
              Approved Ecosystem <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">Work.</span>
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400">
            <strong>{filteredProjects.length}</strong> active projects listed
          </div>
        </div>

        {/* Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 bg-black border border-white/10 p-4 rounded-2xl">
          <div className="relative sm:col-span-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects, domains, or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border border-white/10 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#38bdf8]"
            />
          </div>
          <div>
            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#38bdf8]"
            >
              <option value="">All Stages</option>
              <option value="Discovery">Discovery</option>
              <option value="Prototype">Prototype</option>
              <option value="MVP">MVP</option>
              <option value="Deployed">Deployed</option>
            </select>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div key={p.id} className="bg-black border border-white/10 rounded-3xl p-8 shadow-xl flex flex-col justify-between hover:border-white/30 transition">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-400">
                    {p.category}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#38bdf8] border border-[#0052FF]/30 font-semibold">
                    {p.stage}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white uppercase mb-3">{p.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">{p.desc}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#38bdf8]">{p.status}</span>
                <Link href="/join" className="text-xs font-mono text-white hover:text-[#38bdf8] font-bold">
                  Contribute →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-3 font-semibold">
            Have the Right Skill for a Team?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mb-6 leading-tight">
            Contribute to Work That Has a Real User and a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
              Visible Next Step.
            </span>
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Beginners can also contribute through research, user interviews, testing, documentation, and design support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/join" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Join DigiNorth</span>
            </Link>
            <Link href="/buildlab" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              Understand BuildLab
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
