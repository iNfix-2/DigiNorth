"use client";

import React from "react";
import { Users, GraduationCap, Cpu, ArrowRight, Zap } from "lucide-react";
import { ScrambleText } from "./useScrambleText";

export default function EcosystemEngines() {
  const engines = [
    {
      id: "community",
      badge: "Engine 01 · Community",
      icon: Users,
      title: "Find Your People",
      tagline: "Discover & Connect",
      description:
        "Meet builders, share knowledge, discover opportunities, form multidisciplinary teams, and contribute at the level you are ready for.",
      features: [
        "Friday Community Meetups & Knowledge Sharing",
        "Saturday Starter Circle & Peer Workshops",
        "Discord & Local Kaduna Guild Channels",
        "Open-source Mentorship Networks",
      ],
      ctaText: "Enter Community",
      ctaLink: "#join-community",
    },
    {
      id: "academy",
      badge: "Engine 02 · Academy",
      icon: GraduationCap,
      title: "Learn to Build",
      tagline: "Learn & Practise",
      description:
        "Develop practical technology skills through project-based learning, consistent code reviews, industry feedback, and building in public.",
      features: [
        "Project-driven Software Architecture & AI",
        "Code Reviews from Senior Engineers",
        "Full-stack WebGL, Web3 & Mobile Tracks",
        "Evidence-based Portfolio Development",
      ],
      ctaText: "Enter Academy",
      ctaLink: "#join-community",
    },
    {
      id: "buildlab",
      badge: "Engine 03 · BuildLab",
      icon: Cpu,
      title: "Build What Matters",
      tagline: "Build & Launch",
      description:
        "Research real regional challenges in Northern Nigeria, validate assumptions, develop functional prototypes, and launch viable tech ventures.",
      features: [
        "Real Problem Scoping & Field Testing",
        "Rapid Prototyping & MVP Incubation",
        "Access to Founder Mentors & Angel Capital",
        "October 'Build for the North' Hackathon",
      ],
      ctaText: "Enter BuildLab",
      ctaLink: "#join-community",
    },
  ];

  return (
    <section id="engines" className="relative py-28 sm:py-36 bg-black overflow-hidden scroll-mt-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-xs font-mono uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5 text-[#38bdf8]" /> One Connected System
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6 uppercase">
            Three Engines. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_30px_rgba(0,82,255,0.35)]">One Progression Pathway.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            The parts are designed to strengthen one another rather than operate as isolated programmes.
            Talent moves seamlessly from curiosity to real useful technology.
          </p>
        </div>

        {/* Engine Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {engines.map((engine) => {
            const IconComponent = engine.icon;
            return (
              <div
                key={engine.id}
                id={engine.id}
                className="group relative bg-black rounded-3xl p-8 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-white/5 text-slate-300 border border-white/10">
                      {engine.badge}
                    </span>
                    <div className="p-3 rounded-2xl bg-white/5 text-white border border-white/10 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Tagline & Title */}
                  <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-medium">
                    {engine.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight uppercase">
                    {engine.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-8 font-light">
                    {engine.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
                    {engine.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <a
                  href={engine.ctaLink}
                  className="button-enchanced is-primary w-full text-center text-xs font-bold uppercase tracking-wider"
                >
                  <span>{engine.ctaText}</span>
                  <ArrowRight className="ml-2 h-4 w-4 inline" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
