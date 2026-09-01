"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
const EcosystemHero = dynamic(() => import("@/components/EcosystemHero"), {
  ssr: false,
});
import EcosystemEngines from "@/components/EcosystemEngines";
import ProgressionPathway from "@/components/ProgressionPathway";
import HackathonSection from "@/components/HackathonSection";
import LeadershipSection from "@/components/LeadershipSection";
import PartnersSection from "@/components/PartnersSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section with 3D World Map Globe Animation Background */}
      <EcosystemHero />

      {/* Three Engines Section (Community, Academy, BuildLab) */}
      <EcosystemEngines />

      {/* Talent Progression Pathway (Roadmap from Curiosity to Useful Tech) */}
      <ProgressionPathway />

      {/* Build for the North Mini-Hackathon Culmination Sprint */}
      <HackathonSection />

      {/* Leadership Team (People Shaping the Pathways) */}
      <LeadershipSection />

      {/* Powering Partners (Digi02 Tech Systems & Nethawk Solutions Limited) */}
      <PartnersSection />

      {/* Join Ecosystem Pathways (Explore, Learn, Build, Enable) */}
      <JoinSection />

      {/* Centralized Monochromatic Footer with Giant Typography Watermark */}
      <Footer />
    </main>
  );
}
