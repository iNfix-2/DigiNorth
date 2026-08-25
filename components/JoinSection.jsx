"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, Compass, BookOpen, Hammer, Handshake, Send } from "lucide-react";

export default function JoinSection() {
  const [activePathway, setActivePathway] = useState("explore");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    location: "Kaduna",
    skills: "",
  });

  const pathways = [
    {
      id: "explore",
      title: "Explore",
      subtitle: "New to tech or seeking community",
      icon: Compass,
      desc: "Connect with builders, attend Friday meetups, and get introduced to technology domains.",
    },
    {
      id: "learn",
      title: "Learn",
      subtitle: "Academy Student Pathway",
      icon: BookOpen,
      desc: "Enroll in emerging technology tracks with hands-on practice, mentorship, and code reviews.",
    },
    {
      id: "build",
      title: "Build",
      subtitle: "BuildLab Contributor",
      icon: Hammer,
      desc: "Join project squads solving real problems, preparing for the October mini-hackathon.",
    },
    {
      id: "enable",
      title: "Enable",
      subtitle: "Mentor, Partner, or Sponsor",
      icon: Handshake,
      desc: "Bring mentorship, user problems, compute resources, or funding to power the ecosystem.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="join-community"
      className="py-28 sm:py-36 bg-black relative overflow-hidden scroll-mt-10 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-xs font-mono font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4 text-[#38bdf8]" />
            Find Your Way In
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6 uppercase">
            Be Part of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">Northern Tech Renaissance.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Start with the pathway that matches what you can contribute now. You can progress as your capability and availability grow.
          </p>
        </div>

        {/* Pathway Selection Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {pathways.map((p) => {
            const Icon = p.icon;
            const isSelected = activePathway === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePathway(p.id)}
                className={`p-6 rounded-2xl text-left transition-all duration-200 flex flex-col justify-between cursor-pointer border ${
                  isSelected
                    ? "bg-black border-[#0052FF] shadow-[0_0_30px_rgba(0,82,255,0.3)]"
                    : "bg-black border-white/10 hover:border-white/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isSelected ? "text-[#38bdf8]" : "text-slate-400"}`}>
                      {p.title}
                    </span>
                    <div className={`p-2 rounded-xl border ${isSelected ? "bg-[#0052FF] text-white border-[#0052FF]" : "bg-white/5 border-white/10 text-white"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 uppercase">{p.subtitle}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{p.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Application Card */}
        <div className="max-w-2xl mx-auto bg-black border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="py-8 text-center animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-[#0052FF]/20 border border-[#0052FF]/40 text-[#38bdf8] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Welcome to DigiNorth!</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed font-light">
                Your application for the <span className="text-[#38bdf8] font-semibold uppercase">"{activePathway}"</span> pathway has been received. Check your email for community onboarding details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center pb-4 border-b border-white/10 mb-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Pathway Selected: <span className="text-[#38bdf8] uppercase">{activePathway}</span>
                </span>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-semibold">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Amina Bello"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-semibold">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="amina@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-semibold">Your Focus or Skills</label>
                <input
                  type="text"
                  placeholder="e.g. Python, UI Design, AI Research, Cyber, Beginner"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="button-enchanced is-primary w-full !py-3.5 text-center text-xs font-bold uppercase tracking-wider cursor-pointer shadow-2xl"
                >
                  <span>Submit Application</span>
                  <Send className="ml-2 h-4 w-4 inline" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
