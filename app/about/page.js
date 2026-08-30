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
      image: "/images/leadership/john.webp",
      objectPos: "center 10%",
      desc: "Coordinates DigiNorth's connected ecosystem pathways, partnerships, and strategic expansion across Northern Nigeria.",
    },
    {
      name: "Covenant Iregbeyen",
      role: "Technical Lead",
      domain: "Technology & Systems",
      image: "/images/leadership/covenant_hd.webp",
      objectPos: "center 15%",
      desc: "Supports the technical direction, architecture, and standards of DigiNorth programmes, open-source builds, and products.",
    },
    {
      name: "Kosisochukwu Ugwubma",
      role: "Academy Lead",
      domain: "Learning & Talent",
      image: "/images/leadership/kosi.webp",
      objectPos: "center 15%",
      desc: "Guides practical learning pathways, curriculum design, and hands-on skill development for emerging tech talent.",
    },
    {
      name: "Abraham Salifu",
      role: "Community Lead",
      domain: "Community Building",
      image: "/images/leadership/abraham.webp",
      objectPos: "center 15%",
      desc: "Stewards community connection, engagement, event curation, and builder participation across the ecosystem.",
    },
    {
      name: "Ini Esiset",
      role: "AI/Data Lead",
      domain: "AI & Data Science",
      image: "/images/leadership/ini.webp",
      objectPos: "center 20%",
      desc: "Guides AI research, machine learning engineering, and data initiative activity within the DigiNorth ecosystem.",
    },
  ];

  const executiveDirection = [
    {
      tag: "01 / FOUNDER",
      name: "Doyin Akerele",
      role: "Founder · Nethawk Solutions",
      image: "/images/leadership/doyin.webp",
      objectPos: "center 18%",
    },
    {
      tag: "02 / LEADERSHIP",
      name: "Olamide",
      role: "Managing Director · Nethawk Solutions",
      image: "/images/leadership/olamide.webp",
      objectPos: "center 18%",
    },
    {
      tag: "03 / LEADERSHIP",
      name: "Ovidi",
      role: "Chief Executive Officer · Digi02 Tech Systems",
      image: "/images/leadership/ovidi.webp",
      objectPos: "center 18%",
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

      {/* Executive Direction (Shaping DigiNorth's Direction) */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-3 font-semibold">
              PEOPLE // LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight mb-4">
              The people helping shape <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_30px_rgba(0,82,255,0.35)]">
                DigiNorth’s direction.
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              DigiNorth is strengthened by leaders building technology capability, partnerships, and long-term institutional direction across the ecosystem.
            </p>
          </div>

          {/* 3-Column Full-Height Portrait Grid for 100% Uncropped Full-Image Visibility */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {executiveDirection.map((exec, idx) => (
              <div
                key={idx}
                className="bg-[#071a38]/30 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative group hover:border-white/30 transition aspect-[4/5] min-h-[440px] sm:min-h-[480px] flex flex-col justify-end"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={exec.image}
                    alt={exec.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectPosition: exec.objectPos }}
                    className="object-cover filter contrast-105 brightness-95 group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                </div>
                
                <div className="relative z-10 p-6 sm:p-8">
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#38bdf8] block mb-1">
                    {exec.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    {exec.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-300 uppercase mt-1">
                    {exec.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Pathways Leadership Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-xs font-mono uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" /> Leadership Team
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 sm:mb-6 uppercase">
              People Stewarding <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">The Pathways.</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              The leadership team coordinates ecosystem strategy, technology, learning, community, AI, data, and programme delivery.
            </p>
          </div>

          {/* Top 3 Operational Leads */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.slice(0, 3).map((member, idx) => (
              <div
                key={idx}
                className="bg-black border border-white/10 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-white/30 transition group"
              >
                <div>
                  {/* Photo Portrait Frame - Standardized Square Aspect Ratio (1:1) */}
                  <div className="relative w-full aspect-square overflow-hidden bg-[#0d0d0d] border-b border-white/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectPosition: member.objectPos }}
                      className="object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Content Area */}
                  <div className="p-6 sm:p-8">
                    <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] font-semibold mb-2">
                      {member.domain}
                    </span>
                    <h3 className="text-xl font-bold text-white uppercase group-hover:text-slate-200 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 font-medium uppercase mt-0.5 mb-4">
                      {member.role}
                    </p>

                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      {member.desc}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Kaduna Node</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://linkedin.com/company/diginorth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://x.com/NorthDigi59258"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom 2 Operational Leads - Centered on Desktop Screen */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-8 mt-6 sm:mt-8">
            {team.slice(3, 5).map((member, idx) => (
              <div
                key={idx}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc((100%-4rem)/3)] max-w-md lg:max-w-none bg-black border border-white/10 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-white/30 transition group"
              >
                <div>
                  {/* Photo Portrait Frame - Standardized Square Aspect Ratio (1:1) */}
                  <div className="relative w-full aspect-square overflow-hidden bg-[#0d0d0d] border-b border-white/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectPosition: member.objectPos }}
                      className="object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Content Area */}
                  <div className="p-6 sm:p-8">
                    <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] font-semibold mb-2">
                      {member.domain}
                    </span>
                    <h3 className="text-xl font-bold text-white uppercase group-hover:text-slate-200 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 font-medium uppercase mt-0.5 mb-4">
                      {member.role}
                    </p>

                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      {member.desc}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Kaduna Node</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://linkedin.com/company/diginorth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://x.com/NorthDigi59258"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Digi02 Tech Systems */}
          <div className="bg-black border border-white/10 p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left transition-all hover:border-white/30 group">
            <div className="flex items-center justify-center shrink-0 w-32 sm:w-40 h-24 sm:h-28">
              <Image
                src="/images/partners/digi02.png"
                alt="Digi02 Tech Systems Logo"
                width={180}
                height={90}
                className="w-full h-auto max-h-20 sm:max-h-24 object-contain filter brightness-110 contrast-105 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">Digi02 Tech Systems</h3>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] font-semibold uppercase">
                  Powering Partner
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                Supports technology, software, product development, engineering guidance, and the digital systems behind the ecosystem.
              </p>
            </div>
          </div>

          {/* Nethawk Solutions Limited */}
          <div className="bg-black border border-white/10 p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left transition-all hover:border-white/30 group">
            <div className="flex items-center justify-center shrink-0 w-32 sm:w-40 h-24 sm:h-28">
              <Image
                src="/images/partners/nethawk.png"
                alt="Nethawk Solutions Limited Logo"
                width={180}
                height={180}
                className="w-full h-auto max-h-24 sm:max-h-28 object-contain filter brightness-110 contrast-105 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">Nethawk Solutions</h3>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] font-semibold uppercase">
                  Powering Partner
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
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
