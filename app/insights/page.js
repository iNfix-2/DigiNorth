"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  Sparkles, 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Radio, 
  Atom, 
  Server, 
  Zap, 
  X, 
  Share2, 
  Bookmark, 
  TrendingUp,
  Flame
} from "lucide-react";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = [
    { name: "All", icon: Sparkles },
    { name: "Artificial Intelligence", icon: Cpu },
    { name: "Defense Tech & Robotics", icon: Radio },
    { name: "Cybersecurity & Zero Trust", icon: ShieldCheck },
    { name: "Cloud & Infrastructure", icon: Server },
    { name: "Quantum Computing & PQC", icon: Atom },
    { name: "Edge & Northern Radar", icon: Zap },
  ];

  const articles = [
    {
      id: "sovereign-ai-africa",
      isFeatured: true,
      category: "Artificial Intelligence",
      categoryTag: "AI & Sovereign Compute",
      title: "The Sovereign AI Imperative: Why African Nations Are Building Indigenous Compute & Foundation Pipelines",
      subtitle: "From 100MW hyperscale clusters in Nigeria to local language foundational models, the continent is shifting from consuming foreign APIs to engineering sovereign intelligence.",
      author: "DigiNorth Intelligence Desk",
      role: "Ecosystem Research",
      date: "01 Sep 2026",
      readTime: "5 min read",
      gradient: "from-[#0052FF]/30 via-transparent to-transparent",
      badgeColor: "bg-[#0052FF]/20 text-[#38bdf8] border-[#0052FF]/40",
      content: `
### The Transition from API Consumers to Model Creators
For the past three years, the global AI landscape has been dominated by a handful of hyperscale API providers. However, 2026 marks a decisive geopolitical and architectural turning point: the emergence of Sovereign AI.

National security, cultural preservation, and economic resilience require sovereign data pipelines that run on domestically governed high-performance compute clusters.

#### Key Strategic Pillars:
1. **Hyperscale National Data Infrastructure**: Projects like the 100MW KASI Hyperscale facility backed by the Nigeria Sovereign Investment Authority (NSIA) provide local bare-metal GPU clusters capable of continuous pre-training and fine-tuning.
2. **Local Multi-Modal Foundation Models**: Domain-specific models trained on indigenous languages (Hausa, Yoruba, Igbo, Fulfulde) and regional legal, agricultural, and administrative corpuses.
3. **Data Residency & Security**: Strict governance frameworks ensuring sensitive governmental and enterprise telemetry never leaves sovereign boundaries.

> *"If you do not train the models that govern your digital infrastructure, you will forever lease your economic future from those who do."*

#### What This Means for DigiNorth Builders:
Through DigiNorth BuildLab and Academy, multidisciplinary engineering teams are actively fine-tuning quantized edge models that operate offline without relying on continuous high-bandwidth cloud connectivity.
      `,
    },
    {
      id: "defense-tech-autonomous-drones",
      isFeatured: false,
      category: "Defense Tech & Robotics",
      categoryTag: "Defense Tech",
      title: "Autonomous Defense & Swarm Intelligence: How DICON and NITDA Are Modernizing National Security",
      subtitle: "The transition from traditional ordnance to sensor-fused drones, real-time battlefield edge compute, and the newly established Defence Futures Lab.",
      author: "Tactical Systems Research",
      role: "Defense & Robotics Squad",
      date: "28 Aug 2026",
      readTime: "6 min read",
      gradient: "from-[#ef4444]/20 via-transparent to-transparent",
      badgeColor: "bg-[#ef4444]/15 text-[#f87171] border-[#ef4444]/30",
      content: `
### Modernizing Battlefield Awareness
Modern defense is no longer won by heavy hardware alone—it is won by information dominance, rapid sensor-to-shooter telemetry, and decentralized autonomous swarms.

#### Recent Reforms & Initiatives:
- **Defence Industries Corporation of Nigeria (DICON) Modernization**: Moving from assembly of small arms to indigenous drone design, RF jamming systems, and ruggedized edge compute modules in Kaduna.
- **Data as a Battlefield Asset**: Integrating AI-powered real-time satellite imagery feeds, thermal reconnaissance, and autonomous patrol drones for critical infrastructure protection across Northern corridors.
- **The Defence Futures Lab Pathway**: Facilitating private-public partnerships where local software engineers build validated geospatial and computer vision tools for defense personnel.
      `,
    },
    {
      id: "post-quantum-cryptography",
      isFeatured: false,
      category: "Quantum Computing & PQC",
      categoryTag: "Quantum Computing",
      title: "Post-Quantum Cryptography (PQC) & 'Q-Day': Securing Banking and Telemetry Before Fault-Tolerant Qubits",
      subtitle: "70 logical qubits demonstrated in 2026 have accelerated the timeline for NIST post-quantum encryption standards across enterprise infrastructure.",
      author: "Cryptographic Architecture Team",
      role: "Security Research",
      date: "24 Aug 2026",
      readTime: "4 min read",
      gradient: "from-[#a855f7]/20 via-transparent to-transparent",
      badgeColor: "bg-[#a855f7]/15 text-[#c084fc] border-[#a855f7]/30",
      content: `
### Preparing for 'Harvest Now, Decrypt Later'
With quantum processors achieving significant milestones in error-corrected logical qubits, adversary groups are actively collecting encrypted state telemetry to decrypt later.

#### Critical Upgrades:
- **NIST PQC Standards Adoption**: Transitioning legacy RSA and ECC asymmetric encryption to ML-KEM (Kyber) and ML-DSA (Dilithium) lattice-based algorithms.
- **Zero-Downtime Migration**: Implementing crypto-agile software architecture across fintech switches, payment gateways, and sovereign identity databases.
- **Hardware Security Modules (HSMs)**: Upgrading microcontrollers with hardware-level post-quantum signature verification.
      `,
    },
    {
      id: "agentic-ai-swarms",
      isFeatured: false,
      category: "Artificial Intelligence",
      categoryTag: "Agentic AI",
      title: "Agentic AI in Production: The End of Simple Chatbots and the Rise of Autonomous Engineering Swarms",
      subtitle: "How autonomous coding agents, multi-agent planners, and self-healing CI/CD pipelines are redefining full-stack engineering in 2026.",
      author: "BuildLab Engineering",
      role: "Core Architecture",
      date: "20 Aug 2026",
      readTime: "4 min read",
      gradient: "from-[#0052FF]/20 via-transparent to-transparent",
      badgeColor: "bg-[#0052FF]/15 text-[#38bdf8] border-[#0052FF]/30",
      content: `
### Autonomous Software Workflows
In 2026, AI is no longer a passive text completer. Modern systems deploy multi-agent coordination loops where specialized agents write code, execute test suites, analyze telemetry, and deploy fixes autonomously.

#### Architecture Highlights:
- **Planner-Executor-Critic Loops**: Breaking complex system refactors into verifiable atomic stages.
- **Self-Healing Infrastructure**: Continuous runtime inspection that automatically generates PRs for memory leaks and accessibility flaws.
- **Human-in-the-Loop Safeguards**: High-level strategic human review while machines execute repetitive development tasks.
      `,
    },
    {
      id: "cyber-zero-day-fuzzing",
      isFeatured: false,
      category: "Cybersecurity & Zero Trust",
      categoryTag: "Cybersecurity",
      title: "Project Glasswing & AI Red-Teaming: Automating Zero-Day Discovery Before Adversaries",
      subtitle: "How frontier reasoning models are continuously fuzzing kernel code, decompiling firmware, and preempting critical infrastructure exploits.",
      author: "Cyber Threat Intelligence",
      role: "Security Research",
      date: "18 Aug 2026",
      readTime: "5 min read",
      gradient: "from-[#10b981]/20 via-transparent to-transparent",
      badgeColor: "bg-[#10b981]/15 text-[#34d399] border-[#10b981]/30",
      content: `
### Proactive Defensive Engineering
Defenders now utilize specialized AI models to simulate millions of polymorphic cyber attack vectors, finding memory safety bugs in C/C++ libraries before they can be weaponized in the wild.

#### Key Insights:
- Continuous binary de-compilation and symbolic execution.
- Automated generation of proof-of-concept patches.
- Real-time zero-trust network attestation for critical national telemetry.
      `,
    },
    {
      id: "cloud-energy-smr",
      isFeatured: false,
      category: "Cloud & Infrastructure",
      categoryTag: "Cloud & Data Infra",
      title: "Small Modular Nuclear Reactors (SMRs) & the $1 Trillion Cloud Power Bottleneck",
      subtitle: "As global cloud spend tops $1T, data center operators are pairing gigawatt AI clusters directly with dedicated clean microgrids and next-gen cooling.",
      author: "Infrastructure & Energy Group",
      role: "Systems Research",
      date: "14 Aug 2026",
      readTime: "6 min read",
      gradient: "from-[#f59e0b]/20 via-transparent to-transparent",
      badgeColor: "bg-[#f59e0b]/15 text-[#fbbf24] border-[#f59e0b]/30",
      content: `
### The Physical Constraints of Compute
The compute revolution is fundamentally an energy revolution. Training frontier trillion-parameter models requires gigawatts of uninterrupted, carbon-free baseload power.

#### Emerging Paradigm:
- Direct co-location of data centers at SMR nuclear and geothermal power stations.
- Direct-to-chip liquid immersion cooling reducing cooling power overhead by 40%.
- Decentralized micro-data centers distributed along high-capacity power lines.
      `,
    },
    {
      id: "satellite-fiber-bridge",
      isFeatured: false,
      category: "Cloud & Infrastructure",
      categoryTag: "Telecom & Satellite",
      title: "Project BRIDGE & NIGCOMSAT-2: Scaling 90,000km of Fiber and Space Telemetry Across West Africa",
      subtitle: "Connecting Northern Nigerian innovation hubs to subsea cables and low-earth orbit constellations for uninterrupted regional bandwidth.",
      author: "Telecom & Space Desk",
      role: "Infrastructure Squad",
      date: "10 Aug 2026",
      readTime: "3 min read",
      gradient: "from-[#0284c7]/20 via-transparent to-transparent",
      badgeColor: "bg-[#0284c7]/15 text-[#38bdf8] border-[#0284c7]/30",
      content: `
### Closing the Terrestrial Connectivity Gap
Nigeria's national deployment of Project BRIDGE is threading high-speed fiber across all local government wards, while NIGCOMSAT-2A/2B satellites ensure redundant high-bandwidth backhaul.
      `,
    },
    {
      id: "offline-agritech-edge-vision",
      isFeatured: false,
      category: "Edge & Northern Radar",
      categoryTag: "Northern Nigeria Radar",
      title: "Offline Edge Vision Models for Agricultural Yield & Crop Disease Detection in Kaduna",
      subtitle: "Field notes from BuildLab deploying lightweight quantized computer vision algorithms running on 5W solar-powered edge nodes.",
      author: "BuildLab Agritech Squad",
      role: "Edge Engineering",
      date: "06 Aug 2026",
      readTime: "4 min read",
      gradient: "from-[#84cc16]/20 via-transparent to-transparent",
      badgeColor: "bg-[#84cc16]/15 text-[#a3e635] border-[#84cc16]/30",
      content: `
### Engineering for Low-Connectivity Realities
BuildLab researchers in Kaduna and Zaria have deployed quantized MobileNet models on Raspberry Pi / ESP32 cameras to detect tomato blight and maize armyworm without needing cellular data.
      `,
    },
    {
      id: "zero-trust-identity-cloud",
      isFeatured: false,
      category: "Cybersecurity & Zero Trust",
      categoryTag: "Zero Trust",
      title: "Zero-Trust Identity Fabric in Distributed Hybrid Cloud Infrastructures",
      subtitle: "Eliminating static perimeter defenses with continuous behavioral biometric authentication and cryptographic workload attestation.",
      author: "Security Architecture Review",
      role: "Cybersecurity",
      date: "02 Aug 2026",
      readTime: "4 min read",
      gradient: "from-[#10b981]/20 via-transparent to-transparent",
      badgeColor: "bg-[#10b981]/15 text-[#34d399] border-[#10b981]/30",
      content: `
### Beyond the VPN Perimeter
Modern cybersecurity treats every packet, API call, and microservice invocation as untrusted until cryptographically verified with ephemeral SPIFFE/SPIRE identity tokens.
      `,
    },
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory = selectedCategory === "All" || a.category === selectedCategory;
      const matchesSearch = 
        searchQuery === "" ||
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.categoryTag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, articles]);

  const featuredArticle = articles.find((a) => a.isFeatured) || articles[0];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      {/* Top Intelligence Radar Ticker */}
      <div className="pt-24 sm:pt-28 border-b border-white/10 bg-white/[0.02] py-2.5 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-[#38bdf8] font-bold uppercase tracking-wider flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span>RADAR WIRE</span>
          </div>
          <div className="text-slate-400 truncate flex items-center gap-4">
            <span>• 100MW Hyperscale Data Centres breaking ground in Nigeria</span>
            <span>• NIST finalizes Post-Quantum Cryptography standards</span>
            <span>• DICON & NITDA launch Defense Futures Lab</span>
            <span>• Agentic AI models reach production in enterprise workflows</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-14 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            DigiNorth Insights · Frontier Tech Intelligence
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            Frontier Tech Intelligence, Research, and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
              Documented Progress.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light mb-8 max-w-3xl">
            Your one-stop radar for verified breakthroughs in Artificial Intelligence, Defense Tech, Cybersecurity, Cloud Infrastructure, and Quantum Computing across Africa and the global frontier.
          </p>

          {/* Search & Filter Input */}
          <div className="relative max-w-xl">
            <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech sector, AI, defense, cybersecurity, cloud..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/[0.05] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Pills Bar */}
      <section className="px-6 max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((c, idx) => {
            const Icon = c.icon;
            const count = c.name === "All" 
              ? articles.length 
              : articles.filter((a) => a.category === c.name).length;

            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(c.name)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center gap-2 whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === c.name
                    ? "bg-[#38bdf8] text-black font-bold shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                    : "bg-white/5 text-slate-300 border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{c.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  selectedCategory === c.name ? "bg-black/20 text-black font-bold" : "bg-white/10 text-slate-400"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured Spotlight Article (Shown when viewing 'All' and no search query) */}
      {selectedCategory === "All" && !searchQuery && (
        <section className="px-6 max-w-7xl mx-auto mb-16">
          <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/[0.04] via-black to-black p-6 sm:p-12 shadow-2xl group hover:border-[#38bdf8]/50 transition-all">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0052FF]/20 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0052FF]/30 text-[#38bdf8] border border-[#0052FF]/40 text-xs font-mono font-bold uppercase tracking-widest">
                  <Flame className="w-3.5 h-3.5" />
                  Featured Spotlight
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {featuredArticle.date} · {featuredArticle.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 leading-tight group-hover:text-[#93c5fd] transition-colors">
                {featuredArticle.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8">
                {featuredArticle.subtitle}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0052FF]/30 border border-[#0052FF]/50 flex items-center justify-center font-mono font-bold text-xs text-[#38bdf8]">
                    DN
                  </div>
                  <div>
                    <strong className="text-xs font-bold text-white block">{featuredArticle.author}</strong>
                    <span className="text-[10px] font-mono text-slate-400">{featuredArticle.role}</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveArticle(featuredArticle)}
                  className="button-enchanced is-primary !py-2.5 !px-6 text-xs font-bold uppercase tracking-wider"
                >
                  <span>Read Full Analysis</span>
                  <ArrowRight className="ml-2 w-3.5 h-3.5 inline" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Articles Grid */}
      <section className="px-6 max-w-7xl mx-auto pb-28">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-semibold">
              {selectedCategory === "All" ? "All Sector Reports" : `${selectedCategory} Intelligence`}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
              Latest Briefings & Research ({filteredArticles.length})
            </h2>
          </div>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-white/[0.02] border border-white/10 rounded-3xl p-8">
            <Search className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white uppercase mb-1">No articles found</h3>
            <p className="text-xs text-slate-400 font-light mb-4">Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="px-4 py-2 rounded-xl bg-white/10 text-xs font-mono text-white hover:bg-white/20"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="bg-black border border-white/10 rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col justify-between hover:border-white/30 hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                {/* Subtle top glow */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#0052FF]/10 blur-3xl pointer-events-none group-hover:bg-[#38bdf8]/20 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded border font-semibold ${article.badgeColor}`}>
                      {article.categoryTag}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white uppercase mb-3 leading-snug group-hover:text-[#38bdf8] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-6 line-clamp-3">
                    {article.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">{article.date}</span>
                  <span className="text-[#38bdf8] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Report <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Article Detail Modal / Reader View */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-black border border-white/20 rounded-3xl shadow-2xl overflow-y-auto p-6 sm:p-10 text-white scrollbar-thin">
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded border font-semibold ${activeArticle.badgeColor}`}>
                  {activeArticle.categoryTag}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeArticle.date} · {activeArticle.readTime}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
                {activeArticle.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {activeArticle.subtitle}
              </p>
            </div>

            {/* Author Attribution */}
            <div className="py-4 border-y border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 mb-8">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0052FF]/30 border border-[#0052FF]/50 flex items-center justify-center font-bold text-[#38bdf8]">
                  DN
                </div>
                <div>
                  <span className="text-white font-bold block">{activeArticle.author}</span>
                  <span className="text-[10px] text-slate-500">{activeArticle.role}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Article link copied to clipboard!");
                    }
                  }}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" /> Share
                </button>
              </div>
            </div>

            {/* Article Body Content */}
            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed font-light space-y-4">
              <div className="whitespace-pre-line">
                {activeArticle.content}
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                DigiNorth Research & Frontier Tech Intelligence
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

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-3 font-semibold">
            Contribute Intelligence
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mb-6 leading-tight">
            Have a Research Discovery, Defense Innovation, or <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
              Engineering Breakthrough?
            </span>
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
            DigiNorth Insights publishes peer-reviewed research, prototype analyses, and frontier briefings from builders across Northern Nigeria and the globe.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/join" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Submit Research / Join</span>
            </Link>
            <Link href="/projects" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              Explore Active Prototypes
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
