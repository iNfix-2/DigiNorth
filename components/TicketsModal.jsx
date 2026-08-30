"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import HackathonSubmissionForm from "./HackathonSubmissionForm";

export default function RegistrationModal({ isOpen, onClose }) {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 font-space">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-black/95 p-4 sm:p-8 shadow-2xl backdrop-blur-2xl transition-all duration-300 max-h-[92vh] overflow-y-auto z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-400 transition hover:border-white/30 hover:bg-white/10 hover:text-white cursor-pointer z-20"
          aria-label="Close Modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-bold">
            DIGINORTH // BUILD FOR THE NORTH 2026
          </span>
          <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
            Hackathon Registration & Idea Submission
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-400 font-light">
            October 2026 • 3-Day Sprint • Kaduna, Northern Nigeria
          </p>
        </div>

        {/* 5-Step Hackathon Form */}
        <HackathonSubmissionForm onClose={onClose} />
      </div>
    </div>
  );
}
