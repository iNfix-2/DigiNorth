"use client";

import { ScrambleText } from "./useScrambleText";

const MILESTONES = [
  {
    date: "19 Aug",
    title: "Registrations open",
    active: true,
    icon: "https://cdn.prod.website-files.com/6756df8f05088bc3e51c64c0/6a7836b7a7f49fc88c00238e_Event%20Icon%20Container.avif",
  },
  {
    date: "14 Sep",
    title: "Application Deadline",
    active: false,
    icon: "https://cdn.prod.website-files.com/6756df8f05088bc3e51c64c0/6a7838e3a594e82a1ebf981e_Event%20Icon.avif",
  },
  {
    date: "28 Sep",
    title: "Participants announced",
    active: false,
    icon: "https://cdn.prod.website-files.com/6756df8f05088bc3e51c64c0/6a7838e3a594e82a1ebf981e_Event%20Icon.avif",
  },
  {
    date: "20-24 Oct",
    title: "Hackathon",
    active: false,
    icon: "https://cdn.prod.website-files.com/6756df8f05088bc3e51c64c0/6a7838e3a594e82a1ebf981e_Event%20Icon.avif",
  },
];

export default function LockSection({ onOpenRegister }) {
  return (
    <section id="timeline" className="relative w-full bg-black py-24 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 3D Glass Chevron / Bracket Background Elements */}
      <div className="pointer-events-none absolute left-0 top-1/3 -translate-y-1/2 -translate-x-8 sm:-translate-x-4 z-0 opacity-90">
        <img
          src="https://cdn.prod.website-files.com/6756df8f05088bc3e51c64c0/6a7831eb6ed37e52918b49c9_Glyphs_Coloured%201%201.avif"
          alt="3D Metallic Chevrons"
          className="h-44 sm:h-72 md:h-96 w-auto object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.2)]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center justify-center text-center">
        {/* Main 96 hours heading */}
        <h2 className="font-space text-5xl sm:text-7xl font-normal tracking-tight text-white leading-none">
          <ScrambleText text="96 hours." triggerOnScroll={true} />
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-lg sm:text-xl font-light text-slate-300 tracking-wide">
          Lock in.
        </p>

        {/* Solid White Button */}
        <div className="mt-6">
          <button
            onClick={onOpenRegister}
            className="bg-white hover:bg-slate-100 text-black font-semibold text-sm sm:text-base px-8 py-3 rounded-lg shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
          >
            Apply Now
          </button>
        </div>

        {/* Interactive Progress Timeline with Glowing & Loading Beam Animations */}
        <div className="mt-16 sm:mt-24 w-full relative">
          
          {/* Progress Track Line */}
          <div 
            className="absolute left-[12.5%] right-[12.5%] top-[10px] sm:top-[12px] h-[2px] z-0 flex items-center"
            style={{
              borderBottom: "2px dashed #262626",
            }}
          >
            {/* Active Glowing Progress Track Segment connecting Node 1 to Node 2 */}
            <div 
              className="relative h-[2px] w-[33.33%] bg-gradient-to-r from-[#0052FF] via-[#38bdf8] to-[#93c5fd] timeline-track-glow" 
            >
              {/* Traveling Photon / Loading Beam Head */}
              <div className="timeline-beam-head" />
            </div>
          </div>

          {/* 4 Milestone Nodes Grid */}
          <div className="relative z-10 grid grid-cols-4 w-full">
            {MILESTONES.map((milestone, idx) => (
              <div
                key={milestone.date}
                className="flex flex-col items-center text-center group cursor-default px-1"
              >
                {/* Node Box Icon with Ripple Aura */}
                <div className="relative h-[20px] sm:h-[24px] flex items-center justify-center mb-4 sm:mb-5">
                  {milestone.active && (
                    <>
                      <div className="beacon-ring" />
                      <div className="absolute inset-0 bg-[#38bdf8]/30 blur-md rounded-full animate-pulse" />
                    </>
                  )}
                  <img
                    src={milestone.icon}
                    alt=""
                    className={`relative z-10 h-5 w-5 sm:h-6 sm:w-6 object-contain transition-transform duration-300 group-hover:scale-110 ${
                      milestone.active
                        ? "drop-shadow-[0_0_15px_rgba(56,189,248,1)] brightness-125"
                        : "opacity-35"
                    }`}
                  />
                </div>

                {/* Date */}
                <h4
                  className={`font-space text-xs sm:text-lg md:text-xl font-semibold tracking-tight ${
                    milestone.active
                      ? "text-white"
                      : "text-[#404040] group-hover:text-slate-400"
                  }`}
                >
                  <ScrambleText text={milestone.date} delay={idx * 150} triggerOnScroll={true} />
                </h4>

                {/* Subtitle / Description */}
                <p
                  className={`mt-1 text-[0.62rem] sm:text-xs font-normal leading-snug max-w-[110px] sm:max-w-[140px] ${
                    milestone.active
                      ? "text-slate-300"
                      : "text-[#333333]"
                  }`}
                >
                  {milestone.title}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
