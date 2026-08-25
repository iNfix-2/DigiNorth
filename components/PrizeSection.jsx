"use client";

import { ScrambleText } from "./useScrambleText";

const PARTNERS = [
  {
    name: "DICON",
    label: "Defence Industries Corp.",
    logo: "/images/partners/dicon.png",
    height: "h-14 sm:h-16",
  },
  {
    name: "NAF",
    label: "Nigerian Air Force",
    logo: "/images/partners/naf.png",
    height: "h-14 sm:h-16",
  },
  {
    name: "NPF",
    label: "Nigeria Police Force",
    logo: "/images/partners/npf.png",
    height: "h-14 sm:h-16",
  },
  {
    name: "NSP",
    label: "North South Power",
    logo: "/images/partners/nsp.png",
    height: "h-12 sm:h-14",
  },
  {
    name: "NCC",
    label: "Communications Commission",
    logo: "/images/partners/ncc.png",
    height: "h-12 sm:h-14",
  },
  {
    name: "Digi02",
    label: "Venue Partner",
    logo: "/images/partners/digi02.png",
    height: "h-12 sm:h-14",
  },
  {
    name: "Nethawk",
    label: "Technology Partner",
    logo: "/images/partners/nethawk.png",
    height: "h-14 sm:h-16",
  },
];

export default function PrizeSection() {
  return (
    <section id="prizes" className="relative w-full overflow-hidden bg-black py-24 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background Bracket Glyph Art */}
      <div className="pointer-events-none absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 opacity-20">
        <img
          src="https://cdn.prod.website-files.com/6756df8f05088bc3e51c64c0/6a82d0f1a2c7f848fe1c2c2a_55a497591f6eb6a392ec96f862b9269b_bracket%20glyph.avif"
          alt=""
          className="h-[550px] w-auto object-contain drop-shadow-[0_0_50px_rgba(0,82,255,0.4)]"
        />
      </div>

      <div className="relative mx-auto max-w-5xl flex flex-col items-center justify-center text-center">
        {/* Main Title with Scramble */}
        <h2 className="heading-hero text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase">
          <ScrambleText text="PRIZE POOL & GRANTS" triggerOnScroll={true} />
        </h2>

        {/* Subtitle */}
        <p className="mt-4 font-space text-2xl sm:text-3xl md:text-4xl font-light text-[#38bdf8] tracking-wide">
          <ScrambleText text="Millions in Prizes, Grants & Incubation" delay={150} triggerOnScroll={true} />
        </p>

        <p className="mt-4 max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed font-light">
          Winners receive equity-free seed grants, cloud credits, direct incubation support, and introductions to leading venture capital funds across Africa and globally.
        </p>

        {/* 3 Clean Value Columns */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          <div className="p-6 text-center border-t border-white/10 hover:border-white/30 transition-colors">
            <h4 className="font-space font-bold text-2xl text-white uppercase">
              <ScrambleText text="Cash Prizes" delay={200} triggerOnScroll={true} />
            </h4>
            <p className="text-sm text-slate-400 mt-2 font-light leading-relaxed">Direct non-dilutive financial rewards for top teams in each track.</p>
          </div>

          <div className="p-6 text-center border-t border-white/10 hover:border-white/30 transition-colors">
            <h4 className="font-space font-bold text-2xl text-white uppercase">
              <ScrambleText text="Incubation" delay={300} triggerOnScroll={true} />
            </h4>
            <p className="text-sm text-slate-400 mt-2 font-light leading-relaxed">Free workstation space at Digi02, technical tooling, and cloud credits.</p>
          </div>

          <div className="p-6 text-center border-t border-white/10 hover:border-white/30 transition-colors">
            <h4 className="font-space font-bold text-2xl text-white uppercase">
              <ScrambleText text="Demo Day" delay={400} triggerOnScroll={true} />
            </h4>
            <p className="text-sm text-slate-400 mt-2 font-light leading-relaxed">Pitch on stage to regional and international angel & VC investors.</p>
          </div>
        </div>

        {/* Official Ecosystem & Strategic Partners Section */}
        <div id="partners" className="mt-20 pt-12 border-t border-white/10 w-full flex flex-col items-center gap-8">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-400 font-bold">
            OFFICIAL ECOSYSTEM & STRATEGIC PARTNERS
          </span>

          {/* Mobile Slideshow / Marquee */}
          <div className="sm:hidden relative w-full overflow-hidden py-4 border border-white/10 rounded-2xl bg-black/60">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

            <div className="animate-marquee-mobile flex items-center gap-8 px-4">
              {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center shrink-0 w-28 text-center">
                  <div className="h-14 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className={`${partner.height} w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]`}
                    />
                  </div>
                  <span className="mt-2 font-space font-bold text-xs text-white uppercase tracking-tight">
                    {partner.name}
                  </span>
                  <span className="text-[0.55rem] font-mono text-slate-400 uppercase">
                    {partner.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Responsive Grid */}
          <div className="hidden sm:grid sm:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6 items-center justify-items-center w-full max-w-6xl px-2">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center p-3 group transition-transform duration-300 hover:scale-105"
              >
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`${partner.height} w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]`}
                  />
                </div>
                <span className="mt-2 font-space font-bold text-xs text-white uppercase tracking-tight">
                  {partner.name}
                </span>
                <span className="text-[0.58rem] font-mono text-slate-400 uppercase">
                  {partner.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
