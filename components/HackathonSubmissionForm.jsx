"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ArrowLeft, Send, Sparkles, CheckCircle2, User, Users, Lightbulb, Code2, ShieldCheck, Plus, Trash2 } from "lucide-react";

export default function HackathonSubmissionForm({ onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submissionId, setSubmissionId] = useState("");

  const [formData, setFormData] = useState({
    // Step 1: Participant info (builder.identify())
    fullName: "",
    email: "",
    phone: "",
    location: "Kaduna, Nigeria",
    submissionType: "Individual", // "Individual" | "Team"
    teamName: "",
    teamMembers: [
      { name: "", email: "", role: "Developer" },
    ],

    // Step 2: Skills & Team (team.compose())
    roles: ["Frontend developer"],
    roleOther: "",
    experienceLevel: "Intermediate",
    needTeamMembers: "No",
    lookingForSkills: "",

    // Step 3: Hackathon Idea (idea.compile())
    ideaTitle: "",
    oneSentenceDescription: "",
    problemSolved: "",
    whoExperiencesProblem: "",
    currentHandling: "",
    proposedSolution: "",
    mainFeatures: "",
    differentiation: "",
    category: "Education",
    categoryOther: "",

    // Step 4: Implementation (build.plan())
    technicalFeasibility: "",
    keyMilestones: "",
    prototypeBaseline: "Concept only",
    demoUrl: "",

    // Step 5: Submission & Verification (project.submit())
    physicalAttendanceConfirmed: true,
    guidelinesAgreement: true,
    privacyConsent: true,
  });

  const rolesList = [
    "Frontend developer",
    "Backend developer",
    "Mobile developer",
    "Data analyst",
    "Data scientist",
    "AI or machine learning developer",
    "Cybersecurity specialist",
    "UI/UX designer",
    "Product manager",
    "Business or market researcher",
    "Technical writer",
    "Presenter or pitch lead",
    "Other",
  ];

  const categoriesList = [
    "Education",
    "Healthcare",
    "Finance",
    "Governance or civic technology",
    "Climate or environment",
    "Transportation",
    "Security/defence",
    "Business productivity",
    "Agriculture / AgTech",
    "Creative economy / Media",
    "Other",
  ];

  const prototypeBaselines = [
    "Concept only (No code yet)",
    "Wireframes / UI Mockups ready",
    "Working Prototype / Baseline started",
    "Existing Open-source Codebase",
  ];

  const handleCheckboxArrayToggle = (key, val) => {
    setFormData((prev) => {
      const arr = prev[key] || [];
      if (arr.includes(val)) {
        return { ...prev, [key]: arr.filter((item) => item !== val) };
      } else {
        return { ...prev, [key]: [...arr, val] };
      }
    });
  };

  const handleAddTeamMember = () => {
    if (formData.teamMembers.length >= 5) return;
    setFormData((prev) => ({
      ...prev,
      teamMembers: [...prev.teamMembers, { name: "", email: "", role: "Developer" }],
    }));
  };

  const handleRemoveTeamMember = (index) => {
    setFormData((prev) => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((_, idx) => idx !== index),
    }));
  };

  const handleUpdateTeamMember = (index, field, value) => {
    setFormData((prev) => {
      const updated = [...prev.teamMembers];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, teamMembers: updated };
    });
  };

  const validateStep = (step) => {
    setErrorMsg("");
    if (step === 1) {
      if (!formData.fullName.trim()) return "Please enter your full name";
      if (!formData.email.trim() || !formData.email.includes("@")) return "Please enter a valid email address";
      if (!formData.phone.trim()) return "Please enter your phone number or handle";
      if (!formData.location.trim()) return "Please enter your location";
      if (formData.submissionType === "Team" && !formData.teamName.trim()) {
        return "Please enter your team name";
      }
    }
    if (step === 2) {
      if (!formData.roles.length) return "Please select at least one role";
      if (formData.roles.includes("Other") && !formData.roleOther.trim()) {
        return "Please specify your custom role";
      }
    }
    if (step === 3) {
      if (!formData.ideaTitle.trim()) return "Please enter the title of your hackathon idea";
      if (!formData.oneSentenceDescription.trim()) return "Please describe your idea in one clear sentence";
      if (!formData.problemSolved.trim()) return "Please describe the problem your idea solves";
      if (!formData.proposedSolution.trim()) return "Please describe your proposed solution";
      if (!formData.mainFeatures.trim()) return "Please list the main features of your proposed solution";
    }
    if (step === 4) {
      if (!formData.technicalFeasibility.trim()) return "Please describe your tech stack and feasibility";
    }
    if (step === 5) {
      if (!formData.physicalAttendanceConfirmed) return "Please confirm availability for physical attendance in Kaduna";
      if (!formData.guidelinesAgreement) return "Please agree to the DigiNorth hackathon rules & guidelines";
    }
    return null;
  };

  const nextStep = () => {
    const err = validateStep(currentStep);
    if (err) {
      setErrorMsg(err);
      return;
    }
    setErrorMsg("");
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setErrorMsg("");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validateStep(5);
    if (err) {
      setErrorMsg(err);
      return;
    }
    const randId = `DN-HACK-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmissionId(randId);
    setSubmitted(true);
  };

  const steps = [
    { num: 1, label: "Participant", kicker: "BUILDER_01", icon: User },
    { num: 2, label: "Skills & Team", kicker: "TEAM_02", icon: Users },
    { num: 3, label: "Idea", kicker: "IDEA_03", icon: Lightbulb },
    { num: 4, label: "Implementation", kicker: "BUILD_04", icon: Code2 },
    { num: 5, label: "Submission", kicker: "SUBMIT_05", icon: ShieldCheck },
  ];

  return (
    <div className="w-full font-space text-white">
      {/* Top Stepper Indicator */}
      <div className="mb-8">
        <div className="relative flex items-center justify-between max-w-xl mx-auto px-4">
          <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-[2px] bg-white/10 -z-0" />
          <div
            className="absolute top-1/2 left-4 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#0052FF] to-[#38bdf8] transition-all duration-500 -z-0"
            style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
          />

          {steps.map((s) => {
            const isCompleted = currentStep > s.num;
            const isActive = currentStep === s.num;
            return (
              <div key={s.num} className="relative z-10 flex flex-col items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    if (s.num < currentStep) setCurrentStep(s.num);
                  }}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    isActive
                      ? "bg-[#0052FF] text-white border-2 border-[#38bdf8] shadow-[0_0_20px_rgba(0,82,255,0.6)]"
                      : isCompleted
                      ? "bg-[#0052FF] text-white border border-[#0052FF]"
                      : "bg-black border border-white/20 text-slate-500 hover:border-white/40"
                  }`}
                >
                  {isCompleted ? <Check className="w-4 h-4 text-white" /> : `0${s.num}`}
                </button>
                <span className={`text-[10px] sm:text-xs font-mono uppercase tracking-wider hidden sm:block ${
                  isActive ? "text-[#38bdf8] font-bold" : isCompleted ? "text-slate-300" : "text-slate-500"
                }`}>
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          {errorMsg}
        </div>
      )}

      {submitted ? (
        <div className="py-12 px-6 text-center animate-in fade-in duration-500 bg-black/80 border border-white/15 rounded-3xl backdrop-blur-xl">
          <div className="w-16 h-16 rounded-full bg-[#0052FF]/20 border border-[#0052FF]/50 text-[#38bdf8] flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,82,255,0.4)]">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-bold">
            HACKATHON // APPLICATION RECEIVED
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase mb-2">
            Idea Submission Confirmed!
          </h3>

          <div className="my-6 inline-flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/15">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Submission Tracking ID</span>
            <strong className="text-lg sm:text-xl font-mono text-[#38bdf8] font-bold tracking-wider mt-1">
              {submissionId}
            </strong>
          </div>

          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed font-light mb-8">
            Your project <strong className="text-white">"{formData.ideaTitle}"</strong> has been logged into the BuildLab review pool. Shortlisted teams will receive sprint pass confirmation and logistics details via <span className="text-[#38bdf8]">{formData.email}</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {onClose ? (
              <button
                onClick={onClose}
                className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Close & Return
              </button>
            ) : (
              <a
                href="/projects"
                className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                View BuildLab Projects
              </a>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-black/80 border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          {/* STEP 1: PARTICIPANT INFORMATION */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-semibold">
                  01 / BUILDER.IDENTIFY()
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">
                  Participant & Team Information
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light mt-1">
                  Tell us about yourself and whether you are submitting as an individual builder or a project team.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    1. Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    2. Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    3. Phone / Handle <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. +234 800 123 4567 or @handle"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    4. Location (City, Country) <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Kaduna, Nigeria"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                  5. Submission Type <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, submissionType: "Individual" })}
                    className={`p-4 rounded-2xl border text-left transition cursor-pointer flex items-center justify-between ${
                      formData.submissionType === "Individual"
                        ? "bg-[#0052FF]/30 border-[#38bdf8] shadow-lg"
                        : "bg-black/50 border-white/15 text-slate-400 hover:border-white/30"
                    }`}
                  >
                    <div>
                      <strong className="text-sm text-white block uppercase">Individual Builder</strong>
                      <span className="text-xs text-slate-400 font-light">Submitting as a solo builder</span>
                    </div>
                    {formData.submissionType === "Individual" && <Check className="w-4 h-4 text-[#38bdf8]" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, submissionType: "Team" })}
                    className={`p-4 rounded-2xl border text-left transition cursor-pointer flex items-center justify-between ${
                      formData.submissionType === "Team"
                        ? "bg-[#0052FF]/30 border-[#38bdf8] shadow-lg"
                        : "bg-black/50 border-white/15 text-slate-400 hover:border-white/30"
                    }`}
                  >
                    <div>
                      <strong className="text-sm text-white block uppercase">Squad / Team</strong>
                      <span className="text-xs text-slate-400 font-light">Submitting as a collaborative team</span>
                    </div>
                    {formData.submissionType === "Team" && <Check className="w-4 h-4 text-[#38bdf8]" />}
                  </button>
                </div>
              </div>

              {formData.submissionType === "Team" && (
                <div className="p-5 rounded-2xl bg-white/5 border border-white/15 space-y-4 animate-in fade-in duration-300">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      6. Team Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Arewa Neural Labs, SolarGrid Squad"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-mono uppercase text-slate-300 font-semibold">
                        7. Team Members ({formData.teamMembers.length} / 5)
                      </label>
                      {formData.teamMembers.length < 5 && (
                        <button
                          type="button"
                          onClick={handleAddTeamMember}
                          className="text-[11px] font-mono text-[#38bdf8] hover:underline flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" /> Add Member
                        </button>
                      )}
                    </div>

                    <div className="space-y-3">
                      {formData.teamMembers.map((member, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/10">
                          <span className="text-xs font-mono text-[#38bdf8] font-bold">0{idx + 1}</span>
                          <input
                            type="text"
                            placeholder="Member Name"
                            value={member.name}
                            onChange={(e) => handleUpdateTeamMember(idx, "name", e.target.value)}
                            className="flex-1 bg-transparent border-b border-white/20 pb-1 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8]"
                          />
                          <input
                            type="email"
                            placeholder="Member Email"
                            value={member.email}
                            onChange={(e) => handleUpdateTeamMember(idx, "email", e.target.value)}
                            className="flex-1 bg-transparent border-b border-white/20 pb-1 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8]"
                          />
                          {idx > 0 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveTeamMember(idx)}
                              className="text-slate-500 hover:text-red-400 transition"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 2: SKILLS & TEAM */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-semibold">
                  02 / TEAM.COMPOSE()
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">
                  Skills & Role Composition
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light mt-1">
                  Select the roles and disciplines you or your team cover for the hackathon sprint.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-3 font-semibold">
                  8. What roles will you or your team play? <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-56 overflow-y-auto pr-1">
                  {rolesList.map((r) => {
                    const isSelected = formData.roles.includes(r);
                    return (
                      <button
                        key={r}
                        type="button"
                        onClick={() => handleCheckboxArrayToggle("roles", r)}
                        className={`p-3 rounded-xl text-left border text-xs transition cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-[#0052FF]/30 border-[#38bdf8] text-white font-semibold"
                            : "bg-black/50 border-white/10 text-slate-400 hover:border-white/30"
                        }`}
                      >
                        <span className="truncate">{r}</span>
                        <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${isSelected ? "bg-[#38bdf8] text-black font-bold" : "border border-white/20"}`}>
                          {isSelected && "✓"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {formData.roles.includes("Other") && (
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    Please Specify Role <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Smart Contract Auditor, Embedded Systems Engineer"
                    value={formData.roleOther}
                    onChange={(e) => setFormData({ ...formData, roleOther: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    9. Experience Level <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38bdf8]"
                  >
                    <option value="Beginner">Beginner (New to building)</option>
                    <option value="Intermediate">Intermediate (Have shipped prototypes)</option>
                    <option value="Advanced">Advanced (Production experience)</option>
                    <option value="Professional">Professional (Senior engineer/lead)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    10. Do you need additional team members? <span className="text-red-400">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Yes", "No"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, needTeamMembers: opt })}
                        className={`py-3 px-4 rounded-xl border text-xs font-semibold uppercase tracking-wider transition cursor-pointer text-center ${
                          formData.needTeamMembers === opt
                            ? "bg-[#0052FF] text-white border-[#38bdf8]"
                            : "bg-black/50 border-white/10 text-slate-400 hover:border-white/30"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {formData.needTeamMembers === "Yes" && (
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    11. What skills or collaborators are you looking for?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Looking for a Python/FastAPI backend developer, UI/UX designer, or data annotator..."
                    value={formData.lookingForSkills}
                    onChange={(e) => setFormData({ ...formData, lookingForSkills: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>
              )}
            </div>
          )}

          {/* STEP 3: HACKATHON IDEA */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-semibold">
                  03 / IDEA.COMPILE()
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">
                  Problem & Proposed Solution
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light mt-1">
                  Define the validated Northern Nigerian challenge your team will solve during the sprint.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    13. Idea / Project Title <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter a catchy title for your project"
                    value={formData.ideaTitle}
                    onChange={(e) => setFormData({ ...formData, ideaTitle: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    14. One-Sentence Summary <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Summarize your solution in one clear sentence"
                    value={formData.oneSentenceDescription}
                    onChange={(e) => setFormData({ ...formData, oneSentenceDescription: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    15. What problem does this solve? <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe the specific pain point or regional inefficiency..."
                    value={formData.problemSolved}
                    onChange={(e) => setFormData({ ...formData, problemSolved: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    16. Who experiences this problem? <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Identify target users, communities, or businesses affected..."
                    value={formData.whoExperiencesProblem}
                    onChange={(e) => setFormData({ ...formData, whoExperiencesProblem: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    18. Describe your proposed solution <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Explain how your software, hardware, or AI solution addresses the problem..."
                    value={formData.proposedSolution}
                    onChange={(e) => setFormData({ ...formData, proposedSolution: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    19. Key Features & Functionality <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="List the top 3-4 core features you will demonstrate..."
                    value={formData.mainFeatures}
                    onChange={(e) => setFormData({ ...formData, mainFeatures: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-3 font-semibold">
                  21. Challenge Category <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {categoriesList.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setFormData({ ...formData, category: cat })}
                      className={`p-3 rounded-xl text-left border text-xs transition cursor-pointer flex items-center justify-between ${
                        formData.category === cat
                          ? "bg-[#0052FF] text-white border-[#38bdf8] shadow-lg font-bold"
                          : "bg-black/50 border-white/10 text-slate-400 hover:border-white/30"
                      }`}
                    >
                      <span className="truncate">{cat}</span>
                      {formData.category === cat && <Check className="w-3.5 h-3.5 text-white ml-1" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: IMPLEMENTATION */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-semibold">
                  04 / BUILD.PLAN()
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">
                  Technical Architecture & Sprint Plan
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light mt-1">
                  Demonstrate feasibility, technical stack, and your 3-day sprint milestone backlog.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                  22. Technical Feasibility & Tech Stack <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="What frameworks, databases, APIs, machine learning models, or hardware kits will you use?"
                  value={formData.technicalFeasibility}
                  onChange={(e) => setFormData({ ...formData, technicalFeasibility: e.target.value })}
                  className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    24. Current Prototype Status <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.prototypeBaseline}
                    onChange={(e) => setFormData({ ...formData, prototypeBaseline: e.target.value })}
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38bdf8]"
                  >
                    {prototypeBaselines.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    25. Repository or Demo Link <span className="text-slate-500 text-[10px]">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/... or Figma link"
                    value={formData.demoUrl}
                    onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: SUBMISSION */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-semibold">
                  05 / PROJECT.SUBMIT()
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">
                  Review & Final Confirmation
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light mt-1">
                  Confirm attendance and guidelines for the October 2026 Build for the North Mini-Hackathon.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Project Name</span>
                  <span className="text-xs font-mono text-[#38bdf8] font-bold uppercase">{formData.category}</span>
                </div>
                <h4 className="text-lg font-bold text-white uppercase">{formData.ideaTitle || "Untitled Project"}</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">{formData.oneSentenceDescription}</p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Lead: {formData.fullName}</span>
                  <span>Type: {formData.submissionType}</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-white/10 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.physicalAttendanceConfirmed}
                    onChange={(e) => setFormData({ ...formData, physicalAttendanceConfirmed: e.target.checked })}
                    className="mt-1 accent-[#0052FF]"
                  />
                  <span className="text-xs text-slate-300 leading-relaxed font-light">
                    <strong className="text-white">Physical Attendance Confirmation:</strong> I confirm that I (and team members if applicable) can attend the 3-day sprint physically in Kaduna, Nigeria during October 2026. <span className="text-red-400">*</span>
                  </span>
                </label>

                <label className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-white/10 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.guidelinesAgreement}
                    onChange={(e) => setFormData({ ...formData, guidelinesAgreement: e.target.checked })}
                    className="mt-1 accent-[#0052FF]"
                  />
                  <span className="text-xs text-slate-300 leading-relaxed font-light">
                    <strong className="text-white">Originality & Integrity:</strong> I certify that all work presented is original and developed in accordance with DigiNorth BuildLab ethical engineering guidelines. <span className="text-red-400">*</span>
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Action Navigation Buttons */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="button-enchanced is-outline !py-3 !px-6 text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
              >
                <ArrowLeft className="mr-2 h-4 w-4 inline" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-xl ml-auto"
              >
                <span>Continue to {steps[currentStep].label}</span>
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            ) : (
              <button
                type="submit"
                className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-2xl ml-auto"
              >
                <span>Submit Hackathon Idea</span>
                <Send className="ml-2 h-4 w-4 inline" />
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
