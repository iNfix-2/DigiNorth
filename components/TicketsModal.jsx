"use client";

import { useState, useEffect } from "react";
import { X, Check, Send, Users, User } from "lucide-react";

export default function RegistrationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "Full Stack Engineer",
    track: "Artificial Intelligence (AI)",
    type: "team",
    teamName: "",
    location: "Kaduna",
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-black/95 p-6 sm:p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 max-h-[90vh] overflow-y-auto">
        {/* Subtle white glow accent */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-white/30 hover:bg-white/10 hover:text-white cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h3 className="font-space text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
            REGISTER FOR DIGINORTH 2026
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            20th – 24th October 2026 • Digi02 Hub, Kaduna, Nigeria
          </p>
        </div>

        {submitted ? (
          <div className="my-8 rounded-xl border border-white/20 bg-white/10 p-6 text-center animate-in fade-in duration-300">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white">
              <Check className="h-8 w-8" />
            </div>
            <h4 className="font-space text-xl font-bold uppercase text-white">APPLICATION RECEIVED!</h4>
            <p className="mt-2 text-sm text-slate-300">
              Thank you for applying to the DigiNorth Hackathon 2026. We will review your submission and email you the confirmation and onboarding instructions.
            </p>
            <button
              onClick={onClose}
              className="button-enchanced is-primary mt-6 !py-2.5 !px-6 text-xs font-bold cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Solo vs Team toggle */}
            <div className="grid grid-cols-2 gap-3 p-1 rounded-xl bg-white/5 border border-white/10">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, type: "team" })}
                className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                  formData.type === "team" ? "bg-white text-black shadow-md font-semibold" : "text-slate-400 hover:text-white"
                }`}
              >
                <Users className="h-3.5 w-3.5" /> Team (2-4 Builders)
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, type: "solo" })}
                className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                  formData.type === "solo" ? "bg-white text-black shadow-md font-semibold" : "text-slate-400 hover:text-white"
                }`}
              >
                <User className="h-3.5 w-3.5" /> Solo Builder
              </button>
            </div>

            {formData.type === "team" && (
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Team Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Builders Northern Squad"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
                />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Primary Role</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
                >
                  <option value="Full Stack Engineer">Full Stack Engineer</option>
                  <option value="AI / ML Engineer">AI / ML Engineer</option>
                  <option value="Frontend Engineer">Frontend Engineer</option>
                  <option value="Backend / Systems Dev">Backend / Systems Dev</option>
                  <option value="Product Designer (UI/UX)">Product Designer (UI/UX)</option>
                  <option value="Smart Contract / Web3 Dev">Smart Contract / Web3 Dev</option>
                  <option value="Product Manager / Founder">Product Manager / Founder</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Target Track</label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
                >
                  <option value="Artificial Intelligence (AI)">Artificial Intelligence (AI)</option>
                  <option value="FinTech & Digital Payments">FinTech & Digital Payments</option>
                  <option value="AgriTech & Supply Chain">AgriTech & Supply Chain</option>
                  <option value="HealthTech & Telemedicine">HealthTech & Telemedicine</option>
                  <option value="GovTech & Civic Infrastructure">GovTech & Civic Infrastructure</option>
                  <option value="Web3 & Decentralized Systems">Web3 & Decentralized Systems</option>
                  <option value="Northern Nigeria Public Goods">Northern Nigeria Public Goods</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="button-enchanced is-primary w-full !py-3.5 text-center text-sm font-bold shadow-xl cursor-pointer"
              >
                <span>SUBMIT HACKATHON APPLICATION</span>
                <Send className="ml-2 h-4 w-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
