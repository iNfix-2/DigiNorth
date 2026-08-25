"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Info, Linkedin, Twitter, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "John Okojere",
      role: "Ecosystem Lead",
      domain: "Ecosystem Strategy",
      desc: "Coordinates DigiNorth's connected ecosystem pathways, partnerships, and strategic expansion across Northern Nigeria.",
    },
    {
      name: "Covenant Iregbeyen",
      role: "Technical Lead",
      domain: "Technology & Systems",
      desc: "Supports the technical direction, architecture, and standards of DigiNorth programmes, open-source builds, and products.",
    },
    {
      name: "Kosisochukwu Ugwubma",
      role: "Academy Lead",
      domain: "Learning & Talent",
      desc: "Guides practical learning pathways, curriculum design, and hands-on skill development for emerging tech talent.",
    },
    {
      name: "Abraham Salifu",
      role: "Community Lead",
      domain: "Community Building",
      desc: "Stewards community connection, engagement, event curation, and builder participation across the ecosystem.",
    },
    {
      name: "Ini Esiset",
      role: "AI/Data Lead",
      domain: "AI & Data Science",
      desc: "Guides AI research, machine learning engineering, and data initiative activity within the DigiNorth ecosystem.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-6">
            <Info className="w-3.5 h-3.5" />
            About DigiNorth · Northern Nigeria
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            Building the conditions for technology to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
              Emerge and Endure.
            </span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-light mb-8">
            DigiNorth is a connected technology and innovation ecosystem bringing together practical learning, community, research, projects, events, companies, mentors, and opportunity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/ecosystem" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Explore the Ecosystem</span>
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
            <Link href="/join" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              Join DigiNorth
            </Link>
          </div>
        </div>
      </section>

      {/* Purpose Band */}
      <section className="border-y border-white/10 bg-white/[0.02] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Community</span>
            <strong className="text-sm font-bold text-white block">Connect people</strong>
            <span className="text-xs text-slate-400 font-light">Create belonging, collaboration, and problem discovery.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Education</span>
            <strong className="text-sm font-bold text-white block">Develop capability</strong>
            <span className="text-xs text-slate-400 font-light">Turn learning into practical, explainable skill.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Innovation</span>
            <strong className="text-sm font-bold text-white block">Build useful work</strong>
            <span className="text-xs text-slate-400 font-light">Move validated problems toward products and pilots.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Region</span>
            <strong className="text-sm font-bold text-white block">Multiply opportunity</strong>
            <span className="text-xs text-slate-400 font-light">Grow mentors, companies, and investment readiness.</span>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black border border-white/10 p-8 sm:p-10 rounded-3xl shadow-xl">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-3 font-semibold">DN // MISSION</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase mb-4 leading-snug">
              Help people learn, collaborate, solve problems, and build.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              We create practical pathways for talent to develop, form multidisciplinary teams, test ideas, create useful products, and launch initiatives that contribute to regional technological and economic development.
            </p>
          </div>

          <div className="bg-black border border-white/10 p-8 sm:p-10 rounded-3xl shadow-xl">
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-3 font-semibold">DN // VISION</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase mb-4 leading-snug">
              A globally relevant Northern Nigerian technology region.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              A region with visible talent, ambitious research, credible products, growing companies, mentors, investment, and a culture of shared progress.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-6 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-xs font-mono uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" /> Leadership Team
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6 uppercase">
              People Stewarding <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">The Pathways.</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              The leadership team coordinates ecosystem strategy, technology, learning, community, AI, data, and programme delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-black border border-white/10 rounded-3xl p-8 shadow-xl flex flex-col justify-between hover:border-white/30 transition">
                <div>
                  <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 block w-fit mb-6">
                    {member.domain}
                  </span>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg bg-white/5 border border-white/10 text-white">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white uppercase">{member.name}</h3>
                      <p className="text-xs font-mono text-slate-400 uppercase mt-0.5">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">{member.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Kaduna Node</span>
                  <div className="flex items-center gap-2">
                    <a href="https://linkedin.com/company/diginorth" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a href="https://x.com/NorthDigi59258" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white">
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powering Partners with Real Official Logos */}
      <section className="py-28 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
            Technology and Strategic Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
            Powered by Organisations Committed to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">Long-Term Growth.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Digi02 Tech Systems */}
          <div className="bg-black border border-white/10 p-8 rounded-3xl shadow-xl flex items-center gap-6 transition-all hover:border-white/30">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 w-20 h-20">
              <Image
                src="/images/partners/digi02.png"
                alt="Digi02 Tech Systems Logo"
                width={80}
                height={40}
                className="w-full h-auto max-h-12 object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-white uppercase">Digi02 Tech Systems</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#38bdf8] font-semibold uppercase">
                  Powering Partner
                </span>
              </div>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Supports technology, software, product development, engineering guidance, and the digital systems behind the ecosystem.
              </p>
            </div>
          </div>

          {/* Nethawk Solutions Limited */}
          <div className="bg-black border border-white/10 p-8 rounded-3xl shadow-xl flex items-center gap-6 transition-all hover:border-white/30">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 w-20 h-20">
              <Image
                src="/images/partners/nethawk.png"
                alt="Nethawk Solutions Limited Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-white uppercase">Nethawk Solutions</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#38bdf8] font-semibold uppercase">
                  Powering Partner
                </span>
              </div>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Contributes industry perspective, systems thinking, mentorship, real-world challenges, and strategic support for practical innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conviction CTA */}
      <section className="py-24 px-6 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-3 font-semibold">
            The Conviction
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mb-6 leading-tight">
            Northern Nigeria Should Not Only Consume Technology. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
              It Should Research, Design, Build, and Export It.
            </span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link href="/join" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Join DigiNorth</span>
            </Link>
            <Link href="/ecosystem" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              Ecosystem Overview
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
