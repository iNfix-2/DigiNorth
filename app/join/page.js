"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Compass, BookOpen, Cpu, Users, Handshake, HeartHandshake, DollarSign, Send } from "lucide-react";

export default function JoinPage() {
  const [activePathway, setActivePathway] = useState("community");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    state: "Kaduna",
    city: "Kaduna",
    techSkill: "",
    isNewToTech: "no",
    motivation: "",
  });

  const pathways = [
    {
      id: "community",
      code: "01 · Community",
      title: "Community Membership",
      desc: "Connect, attend Friday & Saturday activities, and collaborate with other builders.",
      icon: Compass,
    },
    {
      id: "academy",
      code: "02 · Academy",
      title: "Academy Application",
      desc: "Express interest in structured, practical emerging technology learning cohorts.",
      icon: BookOpen,
    },
    {
      id: "buildlab",
      code: "03 · BuildLab",
      title: "BuildLab Application",
      desc: "Join multidisciplinary project teams solving verified regional problems.",
      icon: Cpu,
    },
    {
      id: "mentor",
      code: "04 · Mentor",
      title: "Mentor Application",
      desc: "Support builders with relevant technical, product, research, or venture experience.",
      icon: Users,
    },
    {
      id: "partner",
      code: "05 · Partner",
      title: "Partnership Enquiry",
      desc: "Bring institutions, communities, users, real challenges, or pilot opportunities.",
      icon: Handshake,
    },
    {
      id: "sponsor",
      code: "06 · Support",
      title: "Sponsorship Enquiry",
      desc: "Support talent, open infrastructure, hardware labs, and credible tech initiatives.",
      icon: HeartHandshake,
    },
    {
      id: "invest",
      code: "07 · Investment",
      title: "Investment Enquiry",
      desc: "Connect with emerging projects, vetted teams, and high-growth Northern startups.",
      icon: DollarSign,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Join DigiNorth · Choose Your Pathway
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            Enter the ecosystem where you can <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF] drop-shadow-[0_0_35px_rgba(0,82,255,0.45)]">
              Make Progress Now.
            </span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-light mb-8">
            Learn, build, join the Community, mentor, partner, support a programme, or connect with emerging projects through the workflow designed for that purpose.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#form-section" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Start Application</span>
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </a>
            <a href="#pathways" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              Explore Pathways
            </a>
          </div>
        </div>
      </section>

      {/* Entry Lanes Band */}
      <section className="border-y border-white/10 bg-white/[0.02] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Explorer</span>
            <strong className="text-sm font-bold text-white block">New to technology</strong>
            <span className="text-xs text-slate-400 font-light">Discover pathways and build digital foundations.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Learner</span>
            <strong className="text-sm font-bold text-white block">Developing capability</strong>
            <span className="text-xs text-slate-400 font-light">Practise skills and complete useful code tasks.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Builder</span>
            <strong className="text-sm font-bold text-white block">Ready to contribute</strong>
            <span className="text-xs text-slate-400 font-light">Join teams and own visible deliverables.</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#38bdf8] uppercase block mb-1">Mentor / Partner</span>
            <strong className="text-sm font-bold text-white block">Opening access</strong>
            <span className="text-xs text-slate-400 font-light">Provide expertise, users, or opportunities.</span>
          </div>
        </div>
      </section>

      {/* Pathways Selection */}
      <section id="pathways" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-semibold">
            Participation Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
            Use the application that matches <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">Your Purpose.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pathways.map((p) => {
            const Icon = p.icon;
            const isSelected = activePathway === p.id;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setActivePathway(p.id);
                  document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`p-6 rounded-3xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "bg-black border-[#0052FF] shadow-[0_0_30px_rgba(0,82,255,0.3)]"
                    : "bg-black border-white/10 hover:border-white/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-400">{p.code}</span>
                    <div className={`p-2.5 rounded-xl border ${isSelected ? "bg-[#0052FF] text-white border-[#0052FF]" : "bg-white/5 border-white/10 text-white"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white uppercase mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{p.desc}</p>
                </div>
                <span className="text-xs font-mono font-bold text-[#38bdf8] mt-6 block">
                  Select pathway ↓
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Intake Application Form */}
      <section id="form-section" className="py-24 px-6 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block font-semibold">
              DN // INTAKE FORM
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase leading-tight">
              Tell us where you are and where you <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">Want to Grow.</span>
            </h2>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Application details remain private and are available only to authorised ecosystem leadership.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                Choose the skill or area that best reflects your current interest.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                Tell us whether you are new to technology.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                Explain what you want to learn, build, or contribute.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                Use accurate Northern Nigerian state and city information.
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 bg-black border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-8 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#0052FF]/20 border border-[#0052FF]/40 text-[#38bdf8] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 uppercase">Application Received!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed font-light mb-6">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your application for the <span className="text-[#38bdf8] font-semibold uppercase">"{activePathway}"</span> pathway has been received. Our team will review and assign onboarding details to your email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white cursor-pointer"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center pb-4 border-b border-white/10 mb-4">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Pathway Selected: <span className="text-[#38bdf8] uppercase font-bold">{activePathway}</span>
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-semibold">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amina Bello"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-semibold">Email *</label>
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
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-semibold">Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-semibold">State *</label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38bdf8]"
                    >
                      <option value="Kaduna">Kaduna</option>
                      <option value="Kano">Kano</option>
                      <option value="Plateau">Plateau (Jos)</option>
                      <option value="Abuja">FCT Abuja</option>
                      <option value="Katsina">Katsina</option>
                      <option value="Sokoto">Sokoto</option>
                      <option value="Bauchi">Bauchi</option>
                      <option value="Other">Other Northern State</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-semibold">New to Tech? *</label>
                    <select
                      value={formData.isNewToTech}
                      onChange={(e) => setFormData({ ...formData, isNewToTech: e.target.value })}
                      className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38bdf8]"
                    >
                      <option value="no">No (Have some experience)</option>
                      <option value="yes">Yes (Beginner)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-semibold">Primary Skill or Interest *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Python, Frontend, UI/UX, Cybersecurity, AI/Data, Founder"
                    value={formData.techSkill}
                    onChange={(e) => setFormData({ ...formData, techSkill: e.target.value })}
                    className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-semibold">What do you want to build or learn?</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your goals, projects, or how you wish to contribute..."
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
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

      <Footer />
    </main>
  );
}
