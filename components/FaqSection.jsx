"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ScrambleText } from "./useScrambleText";

const FAQS = [
  {
    id: 1,
    question: "Is there a registration fee for DigiNorth Hackathon 2026?",
    answer: "No. The hackathon is 100% free for all accepted builders — including meals, drinks, high-speed internet, workstation access, and demo day entry.",
  },
  {
    id: 2,
    question: "Where is the event taking place?",
    answer: "The hackathon takes place at the Digi02 Innovation Hub in Kaduna, Nigeria from 20th to 24th October 2026.",
  },
  {
    id: 3,
    question: "Who should apply for the hackathon?",
    answer: (
      <div>
        <p className="mb-2">DigiNorth Hackathon is built for creators who want to ship impactful solutions. You should apply if you are:</p>
        <ol className="list-decimal pl-5 space-y-1 text-slate-300">
          <li>A software engineer, frontend/backend developer, or AI builder</li>
          <li>A product designer (UI/UX) or systems architect</li>
          <li>A student, researcher, or early-stage startup founder in Northern Nigeria & across the country</li>
        </ol>
      </div>
    ),
  },
  {
    id: 4,
    question: "How many members are allowed per team?",
    answer: "Teams can have between 2 to 4 members. Solo applicants are also welcome — we host a dedicated team-formation session during kickoff to help solo builders find teammates.",
  },
  {
    id: 5,
    question: "What challenge tracks can we build in?",
    answer: "Projects can be developed across key thematic areas including Artificial Intelligence (AI), FinTech, AgriTech & Food Systems, HealthTech, GovTech & Civic Tech, Web3 & Decentralized Systems, and Northern Nigeria Public Goods.",
  },
  {
    id: 6,
    question: "What facilities are provided at Digi02?",
    answer: "Digi02 provides 24/7 dedicated power backups, high-speed fiber internet, dedicated team desks, breakout rooms, rest/chill zones, free meals and refreshments throughout the 5 days.",
  },
  {
    id: 7,
    question: "Can I start coding before the hackathon begins?",
    answer: "No. To maintain fairness, all project code, architecture, and prototypes must be developed starting from the official kickoff on 20th October 2026. You may brainstorm ideas beforehand, but no pre-written application code is allowed.",
  },
  {
    id: 8,
    question: "How will projects be judged?",
    answer: "Projects are evaluated on 4 core criteria: Problem Relevance & Impact, Technical Execution & Architecture, Design & User Experience, and Business Feasibility & Scalability.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="relative w-full bg-black py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <h2 className="heading-hero text-4xl sm:text-6xl tracking-tight text-white sticky top-28 uppercase">
              <ScrambleText text="FREQUENTLY ASKED QUESTIONS" triggerOnScroll={true} />
            </h2>
            <p className="mt-4 text-sm text-slate-400 font-light">
              Have more questions? Reach out to our team on socials <span className="text-white font-medium">@diginorthng</span>.
            </p>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-8 flex flex-col space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border-b border-white/10 transition-colors"
                >
                  {/* Trigger */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-center justify-between py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-space text-lg sm:text-xl font-medium uppercase text-white pr-4 leading-snug">
                      {faq.question}
                    </h3>

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center text-slate-400">
                      {isOpen ? <Minus className="h-4 w-4 text-white" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </button>

                  {/* Content */}
                  {isOpen && (
                    <div className="pb-6 text-base leading-relaxed text-slate-300 font-light animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
