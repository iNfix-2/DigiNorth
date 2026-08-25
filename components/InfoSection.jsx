"use client";

import { ScrambleText } from "./useScrambleText";

const PILLARS = [
  {
    title: "Access",
    description:
      "Access Northern Nigeria's premier innovation ecosystem. Connect with ambitious engineers, designers, media, and leaders shaping the future.",
    glyph: "https://cdn.prod.website-files.com/6756df8f05088bc3e51c64c0/6a783ab84ce60953f7c6aed6_Glyphs%201%203.avif",
  },
  {
    title: "Build",
    description:
      "Take your idea from concept to working product in 5 intensive days. Free meals, rest zones, and snacks keep you locked in.",
    glyph: "https://cdn.prod.website-files.com/6756df8f05088bc3e51c64c0/6a783ab81c4aa6bb51ce37a3_Glyphs_Coloured%2015%201.avif",
  },
  {
    title: "Demo",
    description:
      "Build in AI, FinTech, AgriTech, HealthTech, or Web3. Get 1-on-1 mentorship. Demo on the Digi02 stage to investors and executives.",
    glyph: "https://cdn.prod.website-files.com/6756df8f05088bc3e51c64c0/6a783ab84ce60953f7c6aed6_Glyphs%201%203.avif",
  },
  {
    title: "Win",
    description:
      "Compete for prizes, grants, and accelerator spots. Pitch for seed funding and global recognition.",
    glyph: "https://cdn.prod.website-files.com/6756df8f05088bc3e51c64c0/6a783ab84d8e47d2867ad52c_Glyphs_Coloured%2018%201.avif",
  },
];

export default function InfoSection() {
  return (
    <section id="pillars" className="relative w-full bg-black py-20 sm:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col space-y-12 sm:space-y-16">
          {PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              {/* Left Column: 3D Chrome Glyph + Title */}
              <div className="md:col-span-6 flex items-center gap-5 sm:gap-6">
                <img
                  src={pillar.glyph}
                  alt=""
                  className="h-12 sm:h-16 w-auto object-contain shrink-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                />
                <h3 className="font-space text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white uppercase">
                  <ScrambleText text={pillar.title} delay={idx * 150} triggerOnScroll={true} />
                </h3>
              </div>

              {/* Right Column: Clean Description Paragraph */}
              <div className="md:col-span-6 md:pt-2">
                <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
