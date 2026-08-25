"use client";

import Image from "next/image";

export default function DigiNorthLogo({ className = "h-8 sm:h-9 w-auto", showSubtitle = true }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      {/* Brand Icon */}
      <img
        src="/images/diginorth-logo.png"
        alt="DigiNorth Logo"
        className={`${className} object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`}
      />

      {/* Brand Name Lockup with Monochromatic Gradient */}
      {showSubtitle && (
        <div className="flex flex-col text-left">
          <span className="font-space text-lg sm:text-xl font-extrabold tracking-tight uppercase leading-none text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            DIGINORTH
          </span>
          <span className="text-[0.58rem] sm:text-[0.68rem] font-mono tracking-widest text-slate-400 uppercase font-semibold mt-1">
            Northern Innovation Ecosystem
          </span>
        </div>
      )}
    </div>
  );
}
