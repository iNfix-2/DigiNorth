"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Newspaper, Calendar, BookOpen, Clock } from "lucide-react";

export default function StoriesPage() {
  const stories = [
    {
      id: "season-01-launch",
      category: "Community",
      readTime: "2 min read",
      title: "DigiNorth Community Season 01 Starts 21 August 2026",
      date: "16 Aug 2026",
      desc: "A structured Friday-and-Saturday season connecting Community, Academy, and BuildLab and building toward an October 2026 mini-hackathon.",
      author: "DigiNorth Editorial",
    },
    {
      id: "regional-tech-thesis",
      category: "Ecosystem Strategy",
      readTime: "4 min read",
      title: "Why Northern Nigeria Must Export Technology, Not Just Consume It",
      date: "10 Aug 2026",
      desc: "An architectural blueprint for decentralized regional software craftsmanship, local problem scoping, and commercial software exports from Kaduna.",
      author: "John Okojere",
    },
    {
      id: "ai-in-agriculture",
      category: "AI & Research",
      readTime: "3 min read",
      title: "Building Practical Edge ML Models for Northern Nigerian Crops",
      date: "04 Aug 2026",
      desc: "Field observations from BuildLab researchers testing low-latency offline computer vision models with farmers across Zaria and Kano.",
      author: "Ini Esiset",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-6">
            <Newspaper className="w-3.5 h-3.5" />
            Inside the Ecosystem · Published Stories
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            Ideas, people, research, and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
              Documented Progress.
            </span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-light mb-8">
            Read approved articles, interviews, field notes, project stories, reports, and reflections from across the DigiNorth ecosystem.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#journal" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Read the Journal</span>
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </a>
            <Link href="/join" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              Join the Ecosystem
            </Link>
          </div>
        </div>
      </section>

      {/* Story Coverage Band */}
      <section className="border-y border-white/10 bg-white/[0.02] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">People</span>
            <strong className="text-sm font-bold text-white block">Builders and mentors</strong>
            <span className="text-xs text-slate-400 font-light">The people shaping pathways and products.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Work</span>
            <strong className="text-sm font-bold text-white block">Projects and programmes</strong>
            <span className="text-xs text-slate-400 font-light">How ideas move from learning to delivery.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Knowledge</span>
            <strong className="text-sm font-bold text-white block">Research and reflection</strong>
            <span className="text-xs text-slate-400 font-light">What the ecosystem is discovering and building.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Region</span>
            <strong className="text-sm font-bold text-white block">Northern Nigerian context</strong>
            <span className="text-xs text-slate-400 font-light">Stories grounded in local relevance and impact.</span>
          </div>
        </div>
      </section>

      {/* Signal Journal Grid */}
      <section id="journal" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
              Signal Journal
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
              Published Stories from <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">Across DigiNorth.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((s) => (
            <article key={s.id} className="bg-black border border-white/10 rounded-3xl p-8 shadow-xl flex flex-col justify-between hover:border-white/30 transition group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-400">
                    {s.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {s.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white uppercase mb-3 leading-snug group-hover:text-[#38bdf8] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">{s.desc}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">{s.date}</span>
                <span className="text-[#38bdf8] font-bold">Read signal →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-3 font-semibold">
            Document What Matters
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mb-6 leading-tight">
            A Strong Ecosystem Remembers What It Built, What It Learned, and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
              Who Made Progress Possible.
            </span>
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
            DigiNorth stories turn useful activity into accessible knowledge for members, partners, institutions, and future builders.
          </p>
          <Link href="/join" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
            <span>Join the Ecosystem</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
