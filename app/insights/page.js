"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { INSIGHTS_ARTICLES } from "@/data/insightsData";
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
  Play, 
  Headphones, 
  TrendingUp,
  Share2,
  Check
} from "lucide-react";

export default function InsightsPage() {
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");
  const [trendingSlide, setTrendingSlide] = useState(0);

  const topics = [
    { name: "All Topics", slug: "all", icon: Sparkles },
    { name: "Artificial Intelligence", slug: "ai", icon: Cpu },
    { name: "Defense Tech", slug: "defense", icon: Radio },
    { name: "Cybersecurity", slug: "cybersecurity", icon: ShieldCheck },
    { name: "Cloud & Infrastructure", slug: "cloud", icon: Server },
    { name: "Quantum Computing", slug: "quantum", icon: Atom },
    { name: "Data & Edge", slug: "data", icon: Zap },
  ];

  const allArticles = INSIGHTS_ARTICLES;

  // Dynamically calculate articles for the currently selected topic
  const currentTopicArticles = useMemo(() => {
    let list = allArticles;
    if (selectedTopic !== "All Topics") {
      list = allArticles.filter((a) => a.topic === selectedTopic);
    }
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.topic.toLowerCase().includes(q) ||
          a.author.toLowerCase().includes(q)
      );
    }
    return list;
  }, [selectedTopic, searchQuery, allArticles]);

  // Lead Section Structure for the Active Tab:
  // Top Story -> Center Hero
  // Next 2 Stories -> Left Column Stacked Cards
  // Remaining Stories -> Latest Grid
  const leadHero = currentTopicArticles[0] || allArticles[0];
  const leadLeft = currentTopicArticles.slice(1, 3);
  const latestGrid = currentTopicArticles.slice(3);

  // Global trending list
  const trendingList = allArticles.slice(0, 8);
  const trendingItems = trendingList.slice(trendingSlide * 4, trendingSlide * 4 + 4);

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
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search ${selectedTopic === "All Topics" ? "all sectors" : selectedTopic}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#38bdf8] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Category Tabs Bar (GovCIO Pattern) */}
        <div className="flex items-center gap-2 overflow-x-auto pt-6 pb-2 scrollbar-none">
          {topics.map((t, idx) => {
            const count = t.name === "All Topics" 
              ? allArticles.length 
              : allArticles.filter((a) => a.topic === t.name).length;
            const Icon = t.icon;

            return (
              <button
                key={idx}
                onClick={() => { setSelectedTopic(t.name); setSearchQuery(""); }}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  selectedTopic === t.name
                    ? "bg-[#38bdf8] text-black font-bold shadow-[0_0_15px_rgba(56,189,248,0.5)] scale-105"
                    : "bg-white/5 text-slate-300 hover:bg-white/15 hover:text-white border border-white/10"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{t.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  selectedTopic === t.name ? "bg-black/20 text-black" : "bg-white/10 text-slate-400"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* GovCIO Asymmetric Lead Grid (Left Stacked Cards + Center Hero + Right Trending Carousel) */}
      <section className="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
        {currentTopicArticles.length === 0 ? (
          <div className="text-center py-20 bg-white/[0.02] border border-white/10 rounded-3xl p-8">
            <Search className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white uppercase mb-1">No articles found</h3>
            <p className="text-xs text-slate-400 font-light mb-4">No stories matched "{searchQuery}" in {selectedTopic}.</p>
            <button
              onClick={() => { setSelectedTopic("All Topics"); setSearchQuery(""); }}
              className="px-4 py-2 rounded-xl bg-white/10 text-xs font-mono text-white hover:bg-white/20"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN (Stacked Editorial Cards) */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              {leadLeft.length > 0 ? (
                leadLeft.map((art) => (
                  <Link
                    key={art.id}
                    href={`/insights/${art.slug}`}
                    className="group flex flex-col justify-between bg-black/60 rounded-2xl border border-white/10 p-4 hover:border-white/30 transition-all shadow-lg"
                  >
                    <div>
                      {/* Card Thumbnail Image */}
                      <div className="w-full h-40 rounded-xl overflow-hidden mb-3.5 relative bg-white/5">
                        <img
                          src={art.image}
                          alt={art.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Chips Group */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-2">
                        {art.chips?.map((chip, cIdx) => (
                          <span
                            key={cIdx}
                            className={`inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                              chip.type === "media"
                                ? "bg-white text-black"
                                : "bg-[#0052FF]/20 text-[#38bdf8] border border-[#0052FF]/30"
                            }`}
                          >
                            {chip.label === "Video" && <Play className="w-2.5 h-2.5 fill-current" />}
                            {chip.label === "Podcast" && <Headphones className="w-2.5 h-2.5" />}
                            <span>{chip.label}</span>
                          </span>
                        ))}
                      </div>

                      {/* Headline */}
                      <h2 className="text-sm font-bold text-white uppercase leading-snug group-hover:text-[#38bdf8] transition-colors mb-2 line-clamp-2">
                        {art.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-2 mb-3">
                        {art.excerpt}
                      </p>
                    </div>

                    {/* Duration / Read time */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-white/5">
                      <div className="flex items-center gap-1 text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
                        <span>{art.duration}</span>
                      </div>
                      <span className="text-slate-500">{art.date}</span>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center text-xs font-mono text-slate-500">
                  More briefings coming soon for {selectedTopic}
                </div>
              )}
            </div>

            {/* CENTER COLUMN (Featured Hero Article of this topic) */}
            <div className="lg:col-span-6 flex flex-col">
              {leadHero && (
                <Link
                  href={`/insights/${leadHero.slug}`}
                  className="group flex-1 bg-gradient-to-b from-white/[0.04] to-black rounded-3xl border border-white/15 p-6 sm:p-8 flex flex-col justify-between hover:border-[#38bdf8]/50 transition-all shadow-2xl relative overflow-hidden"
                >
                  <div>
                    {/* Hero Feature Image */}
                    <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 relative bg-white/5">
                      <img
                        src={leadHero.image}
                        alt={leadHero.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Hero Chips */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {leadHero.chips?.map((chip, cIdx) => (
                        <span
                          key={cIdx}
                          className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase px-2.5 py-1 rounded ${
                            chip.type === "media"
                              ? "bg-white text-black"
                              : "bg-[#0052FF]/30 text-[#38bdf8] border border-[#0052FF]/50"
                          }`}
                        >
                          {chip.label === "Video" && <Play className="w-3 h-3 fill-current" />}
                          {chip.label === "Podcast" && <Headphones className="w-3 h-3" />}
                          <span>{chip.label}</span>
                        </span>
                      ))}
                    </div>

                    {/* Hero Headline */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight group-hover:text-[#93c5fd] transition-colors mb-3">
                      {leadHero.title}
                    </h2>

                    {/* Hero Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                      {leadHero.excerpt}
                    </p>
                  </div>

                  {/* Bottom Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
                    <span className="text-slate-400">{leadHero.author}</span>
                    <div className="flex items-center gap-1.5 text-[#38bdf8] font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{leadHero.duration}</span>
                    </div>
                  </div>
                </Link>
              )}
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
                      className="pb-3.5 border-b border-white/5 last:border-none"
                    >
                      <Link
                        href={`/insights/${item.slug}`}
                        className="group block"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono text-slate-500">0{idx + 1 + trendingSlide * 4}</span>
                          <span className="text-[10px] font-mono text-[#38bdf8] uppercase font-bold">{item.topic}</span>
                        </div>

                        <h3 className="text-xs sm:text-sm font-bold text-white uppercase leading-snug group-hover:text-[#38bdf8] transition-colors mb-1.5 line-clamp-2">
                          {item.title}
                        </h3>

                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                          <span>{item.duration}</span>
                          <span className="text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">{item.date}</span>
                        </div>
                      </Link>
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
        )}
      </section>

      {/* GovCIO-style "LATEST" Sector Wire Grid */}
      <section className="py-14 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-white text-black text-xs font-mono font-bold uppercase tracking-wider">
              Latest
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              {selectedTopic === "All Topics" ? "All Sector Reports" : `${selectedTopic} Wire`} ({latestGrid.length})
            </h2>
          </div>

          <span className="text-xs font-mono text-slate-400">
            {selectedTopic} · Verified Intelligence Briefings
          </span>
        </div>

        {/* 3 Column Grid */}
        {latestGrid.length === 0 ? (
          <div className="py-12 text-center bg-white/[0.02] rounded-2xl border border-white/10 text-xs font-mono text-slate-500">
            Showing all {currentTopicArticles.length} featured items in lead showcase above.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestGrid.map((art) => (
              <Link
                key={art.id}
                href={`/insights/${art.slug}`}
                className="group bg-black/70 border border-white/10 rounded-2xl p-5 hover:border-white/30 hover:-translate-y-1 transition-all shadow-xl flex flex-col justify-between"
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
                  <h3 className="text-base font-bold text-white uppercase leading-snug group-hover:text-[#38bdf8] transition-colors mb-2 line-clamp-2">
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
              </Link>
            ))}
          </div>
        )}
      </section>

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
