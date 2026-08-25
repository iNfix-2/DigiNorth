"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import LockSection from "@/components/LockSection";
import PrizeSection from "@/components/PrizeSection";
import BentoSection from "@/components/BentoSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/TicketsModal";

export default function HackathonPage() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-[#0052FF] selection:text-white font-space">
      {/* Top Floating Navbar - Hackathon Mode */}
      <Navbar
        variant="hackathon"
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Hero with Interactive Bracket Scroll Reveal */}
      <HeroSection onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* The 4 Pillars (Collaborate, Innovate, Build, Win) */}
      <InfoSection />

      {/* 5 Days Lock-In Timeline (20-24 Oct, Kaduna @ Digi02) */}
      <LockSection onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Prize Pool & Grants */}
      <PrizeSection />

      {/* Media Bento Grid & Poster Spotlight */}
      <BentoSection />

      {/* FAQs Accordion */}
      <FaqSection />

      {/* Final Call to Action */}
      <CtaSection onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Footer with Socials & Updates */}
      <Footer />

      {/* Builder Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </main>
  );
}
