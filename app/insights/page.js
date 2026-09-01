"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  Sparkles, 
  Search, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Radio, 
  Atom, 
  Server, 
  Zap, 
  X, 
  Share2, 
  Play, 
  Headphones, 
  Flame, 
  FileText, 
  TrendingUp,
  ExternalLink
} from "lucide-react";

export default function InsightsPage() {
  const [selectedTopic, setSelectedTopic] = useState("Artificial Intelligence");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);
  const [trendingSlide, setTrendingSlide] = useState(0);

  const topics = [
    { name: "All Topics", slug: "all", count: 18 },
    { name: "Artificial Intelligence", slug: "ai", count: 6 },
    { name: "Defense Tech", slug: "defense", count: 4 },
    { name: "Cybersecurity", slug: "cybersecurity", count: 4 },
    { name: "Cloud & Infrastructure", slug: "cloud", count: 3 },
    { name: "Quantum Computing", slug: "quantum", count: 3 },
    { name: "Data & Edge", slug: "data", count: 3 },
  ];

  const allArticles = [
    // Lead Center Hero
    {
      id: "dot-advisor-ai-procurement",
      isHero: true,
      topic: "Artificial Intelligence",
      chips: [
        { label: "Video", type: "media", icon: Play },
        { label: "AI GovCast", type: "category" }
      ],
      duration: "11m watch",
      title: "DOT Advisor: Federal Contracting & Enterprise Sourcing Must Adapt to Keep Pace With Frontier AI",
      excerpt: "AI capabilities are advancing faster than traditional multi-year procurement cycles, making modular contracting, algorithmic disclosure, and adaptive unit pricing increasingly critical.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
      date: "01 Sep 2026",
      author: "Neil Chaudhry & DigiNorth Intelligence",
      content: `
### Accelerating Enterprise & Defense AI Procurement
Artificial intelligence is evolving exponentially compared to traditional procurement and software deployment cycles. In this briefing, leaders discuss how agencies and enterprise labs are shifting to agile modular delivery frameworks.

#### Key Strategic Pillars:
1. **Modular AI Contracts**: Breaking multi-year monolithic IT contracts into 90-day iterative capability deployments.
2. **Model Transparency & Disclosure**: Mandatory disclosure of foundational model training data, alignment protocols, and data residency guarantees.
3. **Adaptive Unit Economics**: Moving away from static software seat licenses to compute-indexed pricing based on GPU utilization.

> *"If government and enterprise procurement cycles take 24 months, you will deploy technology that is already three architectural generations obsolete."*
      `,
    },

    // Lead Left Column Cards
    {
      id: "nist-ai-devsecops",
      isLeadLeft: true,
      topic: "Artificial Intelligence",
      chips: [
        { label: "CyberCast", type: "category" },
        { label: "Podcast", type: "media", icon: Headphones }
      ],
      duration: "4m watch",
      title: "NIST Explores Autonomous AI Agents’ Role in Next-Gen DevSecOps",
      excerpt: "Michael Ogata discusses NIST’s latest DevSecOps research, the growing role of autonomous coding agents, and the need for new approaches to continuous workload attestation.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
      date: "30 Aug 2026",
      author: "Michael Ogata (NIST)",
      content: `
### Autonomous AI in DevSecOps Pipelines
As autonomous software agents begin generating, testing, and modifying production codebases, traditional perimeter and static code analysis tools are insufficient.

NIST researchers are defining new guidelines for zero-trust authorization where AI agents are treated as non-human identities with dynamic, verifiable permissions.
      `,
    },
    {
      id: "pentagon-ai-arsenal-supercomputing",
      isLeadLeft: true,
      topic: "Defense Tech",
      chips: [
        { label: "Defense Tech", type: "category" },
        { label: "Research", type: "category" }
      ],
      duration: "5m read",
      title: "DOD Requests $30 Billion for 'AI Arsenal' Supercomputing Infrastructure Initiative",
      excerpt: "The Department of War moves away from fragmented computing clusters toward an integrated, sovereign supercomputing infrastructure for tactical and strategic battlefield AI.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      date: "28 Aug 2026",
      author: "DefenseScoop & Strategic Analysis",
      content: `
### Unified Supercomputing for Strategic Defense
The $30 billion AI Arsenal initiative consolidates decentralized GPU clusters into sovereign high-performance computing centers capable of training trillion-parameter multi-modal models for real-time situational awareness and electronic warfare.
      `,
    },

    // Trending Stories (Right Column)
    {
      id: "project-glasswing-anthropic",
      isTrending: true,
      slideIndex: 0,
      topic: "Cybersecurity",
      duration: "4m read",
      title: "Project Glasswing: Frontier Reasoning Models Automate Zero-Day Vulnerability Discovery",
      partner: "Intelligence Partner",
    },
    {
      id: "dicon-nitda-defence-futures",
      isTrending: true,
      slideIndex: 0,
      topic: "Defense Tech",
      duration: "6m read",
      title: "DICON & NITDA Launch Defence Futures Lab in Kaduna for Indigenous Drone Swarms",
      partner: "Regional Radar",
    },
    {
      id: "gold-eagle-cisa-ai",
      isTrending: true,
      slideIndex: 0,
      topic: "Cybersecurity",
      duration: "3m read",
      title: "CISA & Treasury Release 'Gold Eagle' to Triage AI-Powered Cyber Attacks at Machine Speed",
      partner: "",
    },
    {
      id: "post-quantum-crypto-2030",
      isTrending: true,
      slideIndex: 0,
      topic: "Quantum Computing",
      duration: "5m read",
      title: "Government Mandates Post-Quantum Cryptography Migration for High-Impact Systems by 2030",
      partner: "",
    },
    {
      id: "nigeria-100mw-hyperscale",
      isTrending: true,
      slideIndex: 1,
      topic: "Cloud & Infrastructure",
      duration: "4m read",
      title: "Nigeria Breaks Ground on 100MW KASI Hyperscale Facility to Power Sovereign AI Compute",
      partner: "Infrastructure",
    },
    {
      id: "smr-nuclear-cloud-power",
      isTrending: true,
      slideIndex: 1,
      topic: "Cloud & Infrastructure",
      duration: "6m read",
      title: "Small Modular Nuclear Reactors (SMRs) Emerge to Solve the $1 Trillion Cloud Power Bottleneck",
      partner: "Energy Desk",
    },
    {
      id: "intelligence-targeting-automation",
      isTrending: true,
      slideIndex: 1,
      topic: "Defense Tech",
      duration: "4m read",
      title: "Defense Intelligence Agencies Accelerate Sensor-to-Shooter Targeting with Multi-Agent AI",
      partner: "",
    },
    {
      id: "agentforce-dod-il5",
      isTrending: true,
      slideIndex: 1,
      topic: "Artificial Intelligence",
      duration: "3m read",
      title: "Salesforce Agentforce 360 Authorized for DOD Impact Level 5 Enterprise Workloads",
      partner: "",
    },

    // Additional Latest Articles Grid
    {
      id: "sovereign-ai-africa-model",
      topic: "Artificial Intelligence",
      chips: [
        { label: "Artificial Intelligence", type: "category" },
        { label: "Sovereign AI", type: "category" }
      ],
      duration: "5m read",
      title: "The Sovereign AI Imperative: Why African Nations Are Building Indigenous Foundation Pipelines",
      excerpt: "From 100MW hyperscale clusters in Nigeria to local language foundational models, the continent is shifting from consuming foreign APIs to engineering sovereign intelligence.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
      date: "29 Aug 2026",
      author: "DigiNorth Intelligence Desk",
      content: `
### African Foundation Model Architectures
Developing multi-modal foundation models trained on indigenous languages (Hausa, Yoruba, Igbo, Fulfulde) ensures that high-stakes judicial, educational, and agronomic decisions reflect local context without offshore telemetry leaks.
      `,
    },
    {
      id: "quantum-logical-qubits",
      topic: "Quantum Computing",
      chips: [
        { label: "Quantum Computing", type: "category" },
        { label: "PQC", type: "category" }
      ],
      duration: "4m read",
      title: "70 Logical Qubits Milestone Accelerates Post-Quantum Cryptography Implementation Timelines",
      excerpt: "With fault-tolerant quantum error correction demonstrating commercial utility, banking switches and national identity registries must immediately migrate to ML-KEM and ML-DSA lattice encryption.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80",
      date: "27 Aug 2026",
      author: "Cryptographic Architecture Group",
      content: `
### Defeating 'Harvest Now, Decrypt Later'
Adversaries actively siphon encrypted state transmissions to decrypt when quantum hardware matures. The migration to lattice-based post-quantum cryptography is now an operational mandate.
      `,
    },
    {
      id: "project-bridge-fiber-satellite",
      topic: "Cloud & Infrastructure",
      chips: [
        { label: "Cloud & Infrastructure", type: "category" },
        { label: "Satellite", type: "category" }
      ],
      duration: "3m read",
      title: "Project BRIDGE & NIGCOMSAT-2: Scaling 90,000km of Fiber and Space Telemetry Across West Africa",
      excerpt: "Connecting Northern Nigerian innovation hubs to subsea cables and low-earth orbit satellite constellations for uninterrupted, low-latency bandwidth.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      date: "25 Aug 2026",
      author: "Telecom & Space Research",
      content: `
### Sovereign Communications Backbone
Combining national terrestrial fiber deployment with NIGCOMSAT-2A/2B communications satellites guarantees high-reliability connectivity for regional hubs and defense assets.
      `,
    },
    {
      id: "offline-agritech-kaduna",
      topic: "Data & Edge",
      chips: [
        { label: "Data & Edge", type: "category" },
        { label: "Agritech", type: "category" }
      ],
      duration: "4m read",
      title: "Offline Edge Vision Models for Agricultural Yield & Crop Disease Detection in Kaduna",
      excerpt: "Field notes from BuildLab deploying lightweight quantized computer vision algorithms running on 5W solar-powered edge nodes across rural farms.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      date: "22 Aug 2026",
      author: "BuildLab Agritech Squad",
      content: `
### Edge AI in Rural Farming
Deploying quantized neural networks directly onto solar-powered microcontrollers allows farmers to diagnose tomato blight and maize armyworm without cellular coverage.
      `,
    },
    {
      id: "zero-trust-identity-cloud-security",
      topic: "Cybersecurity",
      chips: [
        { label: "Cybersecurity", type: "category" },
        { label: "Zero Trust", type: "category" }
      ],
      duration: "5m read",
      title: "Zero-Trust Identity Fabric: Securing Autonomous AI Agents in Hybrid Cloud Architectures",
      excerpt: "Eliminating static perimeter defenses with continuous cryptographic workload attestation and behavioral anomaly detection across multi-cloud environments.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
      date: "20 Aug 2026",
      author: "Security Architecture Review",
      content: `
### Zero Trust at the Application Layer
Every API invocation, database query, and model execution must be cryptographically attested using short-lived SPIRE/SPIFFE credentials rather than persistent secret keys.
      `,
    },
    {
      id: "autonomous-drone-swarms-defense",
      topic: "Defense Tech",
      chips: [
        { label: "Defense Tech", type: "category" },
        { label: "Robotics", type: "category" }
      ],
      duration: "6m read",
      title: "Decentralized Swarm Robotics: Sensor Fusion and Real-Time Battlefield Edge Compute",
      excerpt: "How modern defense forces are replacing vulnerable centralized command stations with self-coordinating autonomous drone meshes resilient against electronic jamming.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
      date: "18 Aug 2026",
      author: "Tactical Systems Research Group",
      content: `
### Mesh-Coordinated Drone Networks
Decentralized autonomous algorithms allow drone swarms to dynamically allocate reconnaissance and defense tasks even when satellite GPS and cellular telemetry are jammed.
      `,
    },
  ];

  // Filtered stories based on topic and search
  const filteredArticles = useMemo(() => {
    return allArticles.filter((a) => {
      const matchesTopic = selectedTopic === "All Topics" || a.topic === selectedTopic;
      const matchesSearch =
        searchQuery === "" ||
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (a.excerpt && a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
        a.topic.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTopic && matchesSearch;
    });
  }, [selectedTopic, searchQuery]);

  const trendingItems = allArticles.filter((a) => a.isTrending && a.slideIndex === trendingSlide);
  const heroArticle = allArticles.find((a) => a.isHero) || allArticles[0];
  const leadLeftArticles = allArticles.filter((a) => a.isLeadLeft);
  const latestArticles = allArticles.filter((a) => !a.isHero && !a.isLeadLeft && !a.isTrending);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      {/* GovCIO-style Top Breadcrumb & Page Heading */}
      <section className="pt-32 pb-6 px-4 sm:px-6 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-semibold">
              The latest in
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {selectedTopic}
            </h1>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search intelligence..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#38bdf8] transition-colors"
            />
          </div>
        </div>

        {/* Horizontal Topic Bar (Exact GovCIO Style) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-6 pb-2 scrollbar-none">
          {topics.map((t, idx) => (
            <button
              key={idx}
              onClick={() => { setSelectedTopic(t.name); setSearchQuery(""); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                selectedTopic === t.name
                  ? "bg-[#38bdf8] text-black font-bold shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-transparent"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </section>

      {/* GovCIO Asymmetric Lead Grid (Left Stacked Cards + Center Hero + Right Trending Carousel) */}
      <section className="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN (2 Stacked Editorial Cards) */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {leadLeftArticles.map((art) => (
              <article
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className="group cursor-pointer flex flex-col justify-between bg-black/60 rounded-2xl border border-white/10 p-4 hover:border-white/30 transition-all shadow-lg"
              >
                <div>
                  {/* Card Thumbnail Image */}
                  <div className="w-full h-44 rounded-xl overflow-hidden mb-3.5 relative bg-white/5">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Chips Group */}
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    {art.chips.map((chip, cIdx) => {
                      const Icon = chip.icon;
                      return (
                        <span
                          key={cIdx}
                          className={`inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                            chip.type === "media"
                              ? "bg-white text-black"
                              : "bg-[#0052FF]/20 text-[#38bdf8] border border-[#0052FF]/30"
                          }`}
                        >
                          {Icon && <Icon className="w-3 h-3" />}
                          <span>{chip.label}</span>
                        </span>
                      );
                    })}
                  </div>

                  {/* Headline */}
                  <h2 className="text-base font-bold text-white uppercase leading-snug group-hover:text-[#38bdf8] transition-colors mb-2">
                    {art.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-3 mb-3">
                    {art.excerpt}
                  </p>
                </div>

                {/* Duration / Read time */}
                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500 pt-2 border-t border-white/5">
                  <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>{art.duration}</span>
                </div>
              </article>
            ))}
          </div>

          {/* CENTER COLUMN (Featured Hero Article) */}
          <div className="lg:col-span-6 flex flex-col">
            <article
              onClick={() => setActiveArticle(heroArticle)}
              className="group cursor-pointer flex-1 bg-gradient-to-b from-white/[0.04] to-black rounded-3xl border border-white/15 p-6 sm:p-8 flex flex-col justify-between hover:border-[#38bdf8]/50 transition-all shadow-2xl relative overflow-hidden"
            >
              <div>
                {/* Hero Feature Image */}
                <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 relative bg-white/5">
                  <img
                    src={heroArticle.image}
                    alt={heroArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                {/* Hero Chips */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {heroArticle.chips.map((chip, cIdx) => {
                    const Icon = chip.icon;
                    return (
                      <span
                        key={cIdx}
                        className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase px-2.5 py-1 rounded ${
                          chip.type === "media"
                            ? "bg-white text-black"
                            : "bg-[#0052FF]/30 text-[#38bdf8] border border-[#0052FF]/50"
                        }`}
                      >
                        {Icon && <Icon className="w-3.5 h-3.5" />}
                        <span>{chip.label}</span>
                      </span>
                    );
                  })}
                </div>

                {/* Hero Headline */}
                <h2 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight leading-tight group-hover:text-[#93c5fd] transition-colors mb-3">
                  {heroArticle.title}
                </h2>

                {/* Hero Excerpt */}
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {heroArticle.excerpt}
                </p>
              </div>

              {/* Bottom Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
                <span className="text-slate-400">{heroArticle.author}</span>
                <div className="flex items-center gap-1.5 text-[#38bdf8] font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{heroArticle.duration}</span>
                </div>
              </div>
            </article>
          </div>

          {/* RIGHT COLUMN (Trending Carousel Feed) */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="rounded-2xl border border-white/10 bg-black/80 p-5 shadow-xl flex-1 flex flex-col justify-between">
              
              {/* Header with Module Label & Arrows */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#38bdf8] text-black text-xs font-mono font-bold uppercase tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Trending</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setTrendingSlide((prev) => (prev === 0 ? 1 : 0))}
                    aria-label="Previous trending slide"
                    className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setTrendingSlide((prev) => (prev === 1 ? 0 : 1))}
                    aria-label="Next trending slide"
                    className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Trending Stories List */}
              <ul className="space-y-4 flex-1">
                {trendingItems.map((item, idx) => (
                  <li
                    key={item.id}
                    onClick={() => setActiveArticle(item)}
                    className="group cursor-pointer pb-3.5 border-b border-white/5 last:border-none"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-slate-500">0{idx + 1 + trendingSlide * 4}</span>
                      <span className="text-[10px] font-mono text-[#38bdf8] uppercase font-bold">{item.topic}</span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-white uppercase leading-snug group-hover:text-[#38bdf8] transition-colors mb-1.5">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>{item.duration}</span>
                      {item.partner && (
                        <span className="text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">{item.partner}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Slide Dots */}
              <div className="flex items-center justify-center gap-1.5 pt-3 border-t border-white/10 mt-4">
                <span className={`w-2 h-2 rounded-full transition-all ${trendingSlide === 0 ? "bg-[#38bdf8] w-4" : "bg-white/30"}`} />
                <span className={`w-2 h-2 rounded-full transition-all ${trendingSlide === 1 ? "bg-[#38bdf8] w-4" : "bg-white/30"}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GovCIO-style "LATEST" 4-Column Responsive Grid */}
      <section className="py-14 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-white text-black text-xs font-mono font-bold uppercase tracking-wider">
              Latest
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Sector Briefings & Research Wire
            </h2>
          </div>

          <span className="text-xs font-mono text-slate-400">
            Showing {filteredArticles.length} Intelligence Reports
          </span>
        </div>

        {/* 3 to 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((art) => (
            <article
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="group cursor-pointer bg-black/70 border border-white/10 rounded-2xl p-5 hover:border-white/30 hover:-translate-y-1 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="w-full h-44 rounded-xl overflow-hidden mb-4 relative bg-white/5">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Chips */}
                <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                  {art.chips?.map((chip, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#38bdf8] border border-[#0052FF]/30"
                    >
                      {chip.label}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white uppercase leading-snug group-hover:text-[#38bdf8] transition-colors mb-2">
                  {art.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-3 mb-4">
                  {art.excerpt}
                </p>
              </div>

              {/* Meta */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{art.date}</span>
                <span className="text-[#38bdf8] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Analysis <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-black border border-white/20 rounded-3xl shadow-2xl overflow-y-auto p-6 sm:p-10 text-white scrollbar-thin">
            {/* Close */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#0052FF]/20 text-[#38bdf8] border border-[#0052FF]/30 font-bold">
                  {activeArticle.topic}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeArticle.date || "01 Sep 2026"} · {activeArticle.duration || "4m read"}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
                {activeArticle.title}
              </h2>

              {activeArticle.excerpt && (
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {activeArticle.excerpt}
                </p>
              )}
            </div>

            {/* Author */}
            <div className="py-4 border-y border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 mb-8">
              <div>
                <span className="text-white font-bold block">{activeArticle.author || "DigiNorth Intelligence"}</span>
                <span className="text-[10px] text-slate-500">Editorial & Systems Research</span>
              </div>

              <button
                onClick={() => {
                  if (navigator.clipboard) {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Article link copied!");
                  }
                }}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 flex items-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" /> Share
              </button>
            </div>

            {/* Content */}
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed font-light space-y-4">
              <div className="whitespace-pre-line">
                {activeArticle.content || `
### Strategic Executive Briefing
This briefing highlights frontier technical architecture, sovereign deployment requirements, and implementation benchmarks across national security and enterprise digital infrastructure.

#### Tactical Insights:
1. **Infrastructure Integration**: Upgrading legacy computational layers with high-density GPU accelerators and liquid cooling.
2. **Deterministic Security Protocols**: Continuous workload attestation and zero-trust perimeter verification.
3. **Decentralized Regional Execution**: Training and deploying localized models across edge hardware clusters.
                `}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                DigiNorth Intelligence · GovCIO Media Pattern
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="button-enchanced is-primary !py-2.5 !px-6 text-xs font-bold uppercase tracking-wider"
              >
                Close Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Newsletter & Submission Section */}
      <section className="py-24 px-6 bg-white/[0.02] border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-3 font-semibold">
            Intelligence Dispatch
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mb-6 leading-tight">
            Stay Ahead of Frontier AI, Defense Tech, and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
              Sovereign Infrastructure.
            </span>
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Get curated briefings, research papers, and technology analysis delivered directly to your engineering team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/join" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Subscribe to Intelligence</span>
            </Link>
            <Link href="/projects" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              Explore BuildLab Prototypes
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
