"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ArrowLeft, Send, Sparkles, CheckCircle2, User, Cpu, Target, HeartHandshake, ShieldCheck } from "lucide-react";

export default function CommunityRegistrationForm({ initialPathway = "explore" }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    // Step 1: Profile
    fullName: "",
    preferredName: "",
    email: "",
    location: "Kaduna, Nigeria",
    linkedin: "",
    github: "",
    portfolio: "",
    blog: "",

    // Step 2: Tech Journey
    participantType: "Student",
    techAreas: ["Software development"],
    techStack: "",
    experienceLevel: "Beginner",
    yearsInTech: "Less than 6 months",
    currentProject: "",
    proudAchievement: "",

    // Step 3: Goals
    reasonsJoining: ["Learn new technical skills", "Meet other tech professionals"],
    goals: "",
    learningTopics: "",
    activities: ["Technical workshops", "Coding sessions", "Hackathons"],
    learningFormat: ["In-person events", "Group projects"],

    // Step 4: Contribution
    contributions: ["Building community projects", "Volunteering"],
    teachingInterest: "Maybe later",
    teachingTopic: "",
    opportunities: ["Learning partners", "Project collaborators"],

    // Step 5: Final details
    valuableExpectations: "",
    participationFrequency: "Weekly",
    announcementConsent: true,
    hackathonInterest: "Yes",
    hackathonAreas: ["Software Development"],
    hackathonOther: "",
    additionalInfo: "",
    rulesAgreement: true,
  });

  const participantTypes = [
    "Student",
    "Beginner",
    "Self-taught tech enthusiast",
    "Professional",
    "Freelancer",
    "Founder",
    "Educator or trainer",
    "Researcher",
    "Career switcher",
    "Other",
  ];

  const techAreasList = [
    "Software development",
    "Web development",
    "Mobile development",
    "Data analysis",
    "Data science",
    "Artificial intelligence or machine learning",
    "Cybersecurity",
    "Cloud computing",
    "DevOps",
    "Networking",
    "UI/UX design",
    "Product management",
    "Project management",
    "Quality assurance and testing",
    "Technical writing",
    "Blockchain or Web3",
    "Hardware or IoT",
    "Digital marketing",
    "Other",
  ];

  const reasonsList = [
    "Learn new technical skills",
    "Meet other tech professionals",
    "Find mentors",
    "Find mentees",
    "Collaborate on projects",
    "Find job or freelance opportunities",
    "Share knowledge",
    "Promote my work",
    "Attend events and workshops",
    "Build a startup or product",
    "Participate in open-source projects",
    "Other",
  ];

  const activitiesList = [
    "Technical workshops",
    "Coding sessions",
    "Hackathons",
    "Study groups",
    "Career discussions",
    "Networking events",
    "Mentorship sessions",
    "Project collaborations",
    "Startup discussions",
    "Technical talks",
    "Job opportunities",
  ];

  const learningFormatsList = [
    "In-person events",
    "Virtual meetings",
    "Online courses",
    "Written tutorials",
    "Live coding sessions",
    "Group projects",
    "One-on-one mentorship",
  ];

  const contributionsList = [
    "Teaching or hosting sessions",
    "Mentoring others",
    "Organizing events",
    "Sharing job and learning opportunities",
    "Writing tutorials",
    "Building community projects",
    "Providing technical support",
    "Sponsoring events",
    "Volunteering",
    "Networking and referrals",
    "I am not sure yet",
  ];

  const opportunitiesList = [
    "A mentor",
    "A mentee",
    "Project collaborators",
    "Employment",
    "Freelance work",
    "Co-founders",
    "Investment or funding",
    "Learning partners",
    "None at the moment",
  ];

  const hackathonAreasList = [
    "Software Development",
    "Artificial Intelligence",
    "Cybersecurity",
    "Data Science",
    "UI/UX Design",
    "Product Development",
    "Hardware / IoT",
    "Other",
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

  const validateStep = (step) => {
    setErrorMsg("");
    if (step === 1) {
      if (!formData.fullName.trim()) return "Please enter your full name";
      if (!formData.email.trim() || !formData.email.includes("@")) return "Please enter a valid email address";
      if (!formData.location.trim()) return "Please enter your location";
    }
    if (step === 2) {
      if (!formData.techAreas.length) return "Please select at least one area of technology";
      if (!formData.techStack.trim()) return "Please specify technologies or tools you use or want to learn";
    }
    if (step === 3) {
      if (!formData.reasonsJoining.length) return "Please select at least one reason for joining";
      if (!formData.goals.trim()) return "Please describe your goals for the next 6-12 months";
    }
    if (step === 4) {
      if (!formData.contributions.length) return "Please select how you'd like to contribute";
      if (formData.teachingInterest === "Yes" && !formData.teachingTopic.trim()) {
        return "Please specify the topic you could speak or teach about";
      }
    }
    if (step === 5) {
      if (!formData.rulesAgreement) return "Please agree to the DigiNorth community rules";
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
    setSubmitted(true);
  };

  const steps = [
    { num: 1, label: "Profile", kicker: "PROFILE_01", icon: User },
    { num: 2, label: "Technology", kicker: "STACK_02", icon: Cpu },
    { num: 3, label: "Goals", kicker: "GOALS_03", icon: Target },
    { num: 4, label: "Contribute", kicker: "BUILD_04", icon: HeartHandshake },
    { num: 5, label: "Complete", kicker: "READY_05", icon: ShieldCheck },
  ];

  return (
    <div className="w-full font-space text-white">
      {/* Top Stepper Indicator */}
      <div className="mb-10">
        <div className="relative flex items-center justify-between max-w-2xl mx-auto px-4">
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
        <div className="py-12 px-6 text-center animate-in fade-in duration-500 bg-black/60 border border-white/15 rounded-3xl backdrop-blur-xl">
          <div className="w-16 h-16 rounded-full bg-[#0052FF]/20 border border-[#0052FF]/50 text-[#38bdf8] flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,82,255,0.4)]">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-2 font-bold">
            COMMUNITY // REGISTRATION CONFIRMED
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase mb-4">
            Welcome to the DigiNorth Ecosystem!
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed font-light mb-8">
            Thank you, <strong className="text-white">{formData.fullName}</strong>. Your profile has been recorded in the community registry. Onboarding instructions, calendar invites for Friday & Saturday sessions, and channel links have been queued to <span className="text-[#38bdf8]">{formData.email}</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/hackathon"
              className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <span>Explore Mini-Hackathon</span>
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </a>
            <button
              onClick={() => {
                setSubmitted(false);
                setCurrentStep(1);
              }}
              className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-black/70 border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          {/* STEP 1: PROFILE */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-semibold">
                  01 / PROFILE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">
                  Tell Us About Yourself
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light mt-1">
                  Help us understand who you are and connect you with the right peers and mentors across Northern Nigeria.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    Preferred Name / Community Handle <span className="text-slate-500 text-[10px]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., AlexM"
                    value={formData.preferredName}
                    onChange={(e) => setFormData({ ...formData, preferredName: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g., alex.morgan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    Current Location (City, Country) <span className="text-red-400">*</span>
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
                  Online Presence & Portfolios <span className="text-slate-500 text-[10px]">(Optional)</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="url"
                    placeholder="LinkedIn Profile URL"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                  <input
                    type="url"
                    placeholder="GitHub Profile URL"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                  <input
                    type="url"
                    placeholder="Portfolio / Personal Website"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                  <input
                    type="url"
                    placeholder="Blog / Project Link"
                    value={formData.blog}
                    onChange={(e) => setFormData({ ...formData, blog: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: TECHNOLOGY */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-semibold">
                  02 / STACK & EXPERIENCE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">
                  Your Technology Journey
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light mt-1">
                  Tell us about your background, skills, and the technologies you work with.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-3 font-semibold">
                  Which best describes you? <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                  {participantTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, participantType: type })}
                      className={`p-3 rounded-xl text-left border text-xs font-medium transition cursor-pointer flex items-center justify-between ${
                        formData.participantType === type
                          ? "bg-[#0052FF] text-white border-[#38bdf8] shadow-lg font-bold"
                          : "bg-black/50 border-white/10 text-slate-300 hover:border-white/30"
                      }`}
                    >
                      <span>{type}</span>
                      {formData.participantType === type && <Check className="w-3.5 h-3.5 text-white ml-1" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-3 font-semibold">
                  Which area or areas of technology are you involved in? <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto pr-1">
                  {techAreasList.map((area) => {
                    const isSelected = formData.techAreas.includes(area);
                    return (
                      <button
                        key={area}
                        type="button"
                        onClick={() => handleCheckboxArrayToggle("techAreas", area)}
                        className={`p-3 rounded-xl text-left border text-xs transition cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-[#0052FF]/30 border-[#38bdf8] text-white font-semibold"
                            : "bg-black/50 border-white/10 text-slate-400 hover:border-white/30"
                        }`}
                      >
                        <span>{area}</span>
                        <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${isSelected ? "bg-[#38bdf8] text-black font-bold" : "border border-white/20"}`}>
                          {isSelected && "✓"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                  What technologies, tools, or programming languages do you currently use or want to master? <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="e.g., Python, JavaScript, React, Next.js, Flutter, AWS, Docker, Figma, PyTorch..."
                  value={formData.techStack}
                  onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                  className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    Experience Level <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38bdf8]"
                  >
                    <option value="Just getting started">Just getting started</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Professional or expert">Professional or expert</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    Years Learning or Working in Tech <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.yearsInTech}
                    onChange={(e) => setFormData({ ...formData, yearsInTech: e.target.value })}
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38bdf8]"
                  >
                    <option value="Less than 6 months">Less than 6 months</option>
                    <option value="6 months to 1 year">6 months to 1 year</option>
                    <option value="1–2 years">1–2 years</option>
                    <option value="3–5 years">3–5 years</option>
                    <option value="More than 5 years">More than 5 years</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: GOALS */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-semibold">
                  03 / GOALS & ASPIRATIONS
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">
                  What Do You Want from DigiNorth?
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light mt-1">
                  Help us tailor the community experience, mentorship squads, and tracks to your aspirations.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-3 font-semibold">
                  Why would you like to join this community? <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {reasonsList.map((reason) => {
                    const isSelected = formData.reasonsJoining.includes(reason);
                    return (
                      <button
                        key={reason}
                        type="button"
                        onClick={() => handleCheckboxArrayToggle("reasonsJoining", reason)}
                        className={`p-3 rounded-xl text-left border text-xs transition cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-[#0052FF]/30 border-[#38bdf8] text-white font-semibold"
                            : "bg-black/50 border-white/10 text-slate-400 hover:border-white/30"
                        }`}
                      >
                        <span>{reason}</span>
                        <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${isSelected ? "bg-[#38bdf8] text-black font-bold" : "border border-white/20"}`}>
                          {isSelected && "✓"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                  What do you hope to gain from the community in the next 6–12 months? <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Share your specific career goals, skills you want to master, or products you want to launch..."
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-3 font-semibold">
                  What type of activities interest you most?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {activitiesList.map((activity) => {
                    const isSelected = formData.activities.includes(activity);
                    return (
                      <button
                        key={activity}
                        type="button"
                        onClick={() => handleCheckboxArrayToggle("activities", activity)}
                        className={`p-2.5 rounded-xl text-left border text-xs transition cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-[#0052FF]/30 border-[#38bdf8] text-white font-semibold"
                            : "bg-black/50 border-white/10 text-slate-400 hover:border-white/30"
                        }`}
                      >
                        <span className="truncate">{activity}</span>
                        <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[9px] ${isSelected ? "bg-[#38bdf8] text-black font-bold" : "border border-white/20"}`}>
                          {isSelected && "✓"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: CONTRIBUTION */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-semibold">
                  04 / CONTRIBUTE & COLLABORATE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">
                  How Would You Like to Contribute?
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light mt-1">
                  DigiNorth thrives through the active contribution, knowledge sharing, and mutual support of its builders.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-3 font-semibold">
                  What can you contribute to the ecosystem? <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {contributionsList.map((contrib) => {
                    const isSelected = formData.contributions.includes(contrib);
                    return (
                      <button
                        key={contrib}
                        type="button"
                        onClick={() => handleCheckboxArrayToggle("contributions", contrib)}
                        className={`p-3 rounded-xl text-left border text-xs transition cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-[#0052FF]/30 border-[#38bdf8] text-white font-semibold"
                            : "bg-black/50 border-white/10 text-slate-400 hover:border-white/30"
                        }`}
                      >
                        <span>{contrib}</span>
                        <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${isSelected ? "bg-[#38bdf8] text-black font-bold" : "border border-white/20"}`}>
                          {isSelected && "✓"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    Interested in speaking, teaching, or hosting a session? <span className="text-red-400">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Yes", "Maybe later", "No"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, teachingInterest: opt })}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-semibold uppercase tracking-wider transition cursor-pointer text-center ${
                          formData.teachingInterest === opt
                            ? "bg-[#0052FF] text-white border-[#38bdf8]"
                            : "bg-black/50 border-white/10 text-slate-400 hover:border-white/30"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.teachingInterest === "Yes" && (
                  <div className="animate-in fade-in duration-300">
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                      What topic could you speak or teach about? <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Intro to Machine Learning, System Design, React"
                      value={formData.teachingTopic}
                      onChange={(e) => setFormData({ ...formData, teachingTopic: e.target.value })}
                      className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-3 font-semibold">
                  Are you currently looking for any of the following?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {opportunitiesList.map((opp) => {
                    const isSelected = formData.opportunities.includes(opp);
                    return (
                      <button
                        key={opp}
                        type="button"
                        onClick={() => handleCheckboxArrayToggle("opportunities", opp)}
                        className={`p-2.5 rounded-xl text-left border text-xs transition cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-[#0052FF]/30 border-[#38bdf8] text-white font-semibold"
                            : "bg-black/50 border-white/10 text-slate-400 hover:border-white/30"
                        }`}
                      >
                        <span className="truncate">{opp}</span>
                        <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[9px] ${isSelected ? "bg-[#38bdf8] text-black font-bold" : "border border-white/20"}`}>
                          {isSelected && "✓"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: READY */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-semibold">
                  05 / READY TO JOIN
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">
                  Final Details & Hackathon Sync
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light mt-1">
                  Connect your profile with the upcoming October Build for the North Mini-Hackathon.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0052FF]/10 border border-[#0052FF]/30 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#38bdf8] font-bold">
                    Participate in the October Mini-Hackathon?
                  </span>
                  <div className="flex gap-2">
                    {["Yes", "Community only"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, hackathonInterest: opt })}
                        className={`py-1.5 px-3 rounded-lg border text-xs font-semibold uppercase tracking-wider transition cursor-pointer ${
                          formData.hackathonInterest === opt
                            ? "bg-[#0052FF] text-white border-[#38bdf8]"
                            : "bg-black/50 border-white/20 text-slate-400"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.hackathonInterest === "Yes" && (
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <label className="block text-xs font-mono uppercase text-slate-300 font-semibold">
                      Hackathon Track Area Preference:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {hackathonAreasList.map((area) => {
                        const isSelected = formData.hackathonAreas.includes(area);
                        return (
                          <button
                            key={area}
                            type="button"
                            onClick={() => handleCheckboxArrayToggle("hackathonAreas", area)}
                            className={`p-2 rounded-lg text-left border text-xs transition cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? "bg-[#0052FF] text-white border-[#38bdf8] font-semibold"
                                : "bg-black/50 border-white/10 text-slate-400"
                            }`}
                          >
                            <span className="truncate">{area}</span>
                            {isSelected && <Check className="w-3 h-3 text-white ml-1" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    How often would you like to participate?
                  </label>
                  <select
                    value={formData.participationFrequency}
                    onChange={(e) => setFormData({ ...formData, participationFrequency: e.target.value })}
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38bdf8]"
                  >
                    <option value="Weekly">Weekly (Fridays & Saturdays)</option>
                    <option value="Twice a month">Twice a month</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Occasionally">Occasionally</option>
                    <option value="I am not sure yet">I am not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    Additional Notes <span className="text-slate-500 text-[10px]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Anything else you'd like leadership to know..."
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#38bdf8] transition"
                  />
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <label className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-white/10 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.announcementConsent}
                    onChange={(e) => setFormData({ ...formData, announcementConsent: e.target.checked })}
                    className="mt-1 accent-[#0052FF]"
                  />
                  <span className="text-xs text-slate-300 leading-relaxed font-light">
                    I would like to receive DigiNorth community announcements, event notifications, and weekly briefing digests.
                  </span>
                </label>

                <label className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-white/10 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.rulesAgreement}
                    onChange={(e) => setFormData({ ...formData, rulesAgreement: e.target.checked })}
                    className="mt-1 accent-[#0052FF]"
                  />
                  <span className="text-xs text-slate-300 leading-relaxed font-light">
                    <strong className="text-white">Community Covenant:</strong> I agree to DigiNorth's community standards: active learning, respecting peers, evidence-based building, and mutual progress. <span className="text-red-400">*</span>
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
                <span>Join the DigiNorth Community</span>
                <Send className="ml-2 h-4 w-4 inline" />
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
