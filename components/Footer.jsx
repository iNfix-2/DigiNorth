"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Linkedin, Instagram, Twitter } from "lucide-react";
import { useScrambleText } from "./useScrambleText";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/diginorth_ng",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/diginorth",
    icon: Linkedin,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/NorthDigi59258",
    icon: Twitter,
  },
];

const ECOSYSTEM_LINKS = [
  { name: "Ecosystem", href: "/ecosystem" },
  { name: "Community", href: "/community" },
  { name: "Academy", href: "/academy" },
  { name: "BuildLab", href: "/buildlab" },
  { name: "Projects", href: "/projects" },
  { name: "Events", href: "/events" },
  { name: "Stories", href: "/stories" },
  { name: "About", href: "/about" },
  { name: "Hackathon", href: "/hackathon" },
  { name: "Join", href: "/join" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const subscribeBtn = useScrambleText("SUBSCRIBE");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-black text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      
      {/* Massive Background DIGINORTH Typography Watermark */}
      <div className="pointer-events-none absolute inset-x-0 top-4 sm:top-8 flex items-center justify-center select-none overflow-hidden z-0">
        <span className="font-space font-black text-6xl sm:text-8xl md:text-9xl lg:text-[13rem] tracking-tighter text-white/[0.10] uppercase leading-none whitespace-nowrap">
          DIGINORTH
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-2xl flex flex-col items-center justify-center text-center">
        
        {/* Sign-up For Updates Section */}
        <h3 className="font-space font-bold text-xl sm:text-2xl uppercase tracking-tight text-white">
          SIGN-UP FOR UPDATES
        </h3>

        <div className="mt-5 w-full">
          {submitted ? (
            <div className="flex items-center justify-center gap-3 rounded-lg bg-white/10 p-3.5 text-slate-200 border border-white/20">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
                <Check className="h-3.5 w-3.5" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-white">You're on the priority notification list.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL HERE"
                className="w-full bg-transparent border-b border-white/30 py-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-white placeholder-slate-500 focus:outline-none focus:border-white transition text-center"
              />
              <button
                type="submit"
                onMouseEnter={subscribeBtn.startScramble}
                className="w-full bg-white hover:bg-slate-100 text-black py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-200 active:scale-[0.99] cursor-pointer shadow-xl"
              >
                <span>{subscribeBtn.displayText}</span>
              </button>
            </form>
          )}
        </div>

        {/* Stay Connected Section */}
        <div className="mt-12 w-full flex flex-col items-center">
          <h4 className="font-space font-bold text-sm sm:text-base uppercase tracking-tight text-white">
            STAY CONNECTED
          </h4>

          <div className="mt-4 flex items-center justify-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.04] border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/[0.1] hover:border-white/30 text-slate-300 hover:text-white cursor-pointer"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Centralized Navigation Links */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs uppercase tracking-wider font-medium text-slate-400">
          {ECOSYSTEM_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Centralized Copyright & Official Powering Info */}
        <div className="mt-10 pt-6 border-t border-white/10 w-full flex flex-col items-center justify-center text-center">
          <p className="text-[0.68rem] sm:text-xs text-slate-400 font-mono uppercase tracking-wider">
            Northern Nigeria should not only consume technology. It should research, design, build, and export it.
          </p>
          <p className="text-[0.62rem] sm:text-[0.68rem] text-slate-500 font-mono uppercase tracking-widest mt-2">
            © 2026 DIGINORTH • Powered by Digi02 Tech Systems and Nethawk Solutions Limited
          </p>
        </div>

      </div>
    </footer>
  );
}
