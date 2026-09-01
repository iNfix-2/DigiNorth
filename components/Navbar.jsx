"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import DigiNorthLogo from "./DigiNorthLogo";
import { useScrambleText } from "./useScrambleText";

export default function Navbar({ onOpenRegister, variant = "default" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  const joinBtn = useScrambleText("JOIN DIGINORTH");
  const registerBtn = useScrambleText("REGISTER NOW");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current + 10 && currentScrollY > 120) {
        setIsCollapsed(true);
      } else if (currentScrollY < lastScrollY.current - 10) {
        setIsCollapsed(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Main DigiNorth Navigation Links matching diginorth.net
  const mainNavLinks = [
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "Community", href: "/community" },
    { name: "Academy", href: "/academy" },
    { name: "BuildLab", href: "/buildlab" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
    { name: "Hackathon", href: "/hackathon" },
  ];

  // Hackathon-specific navigation links for /hackathon page
  const hackathonNavLinks = [
    { name: "About", href: "#about" },
    { name: "Pillars", href: "#pillars" },
    { name: "Timeline", href: "#timeline" },
    { name: "Prizes", href: "#prizes" },
    { name: "Partners", href: "#partners" },
    { name: "FAQs", href: "#faqs" },
    { name: "Main Site", href: "/" },
  ];

  const isHackathonRoute = pathname === "/hackathon" || variant === "hackathon";
  const navLinks = isHackathonRoute ? hackathonNavLinks : mainNavLinks;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isCollapsed ? "-translate-y-full" : "translate-y-0"
      } ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-gradient-to-b from-black/95 via-black/50 to-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          
          {/* Left: Brand Logo Lockup */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center group transition">
              <DigiNorthLogo className="h-8 sm:h-9 w-auto" />
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-7 shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] 2xl:text-xs font-semibold uppercase tracking-wider transition-colors duration-200 whitespace-nowrap relative py-1 ${
                    isActive
                      ? "text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#38bdf8] after:rounded-full"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Action CTA Button (Guaranteed single-line whitespace-nowrap & fixed sleek height) */}
          <div className="hidden sm:flex items-center shrink-0">
            {isHackathonRoute ? (
              <button
                onClick={onOpenRegister}
                onMouseEnter={registerBtn.startScramble}
                className="button-enchanced is-primary text-xs !py-2.5 !px-5 font-bold cursor-pointer shadow-xl whitespace-nowrap shrink-0 leading-none inline-flex items-center justify-center"
              >
                <span>{registerBtn.displayText}</span>
              </button>
            ) : (
              <Link
                href="/join"
                onMouseEnter={joinBtn.startScramble}
                className="button-enchanced is-primary text-xs !py-2.5 !px-5 font-bold cursor-pointer shadow-xl inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 leading-none"
              >
                <span>{joinBtn.displayText}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
            )}
          </div>

          {/* Mobile & Mid-Screen Menu Toggle & Action Button */}
          <div className="flex xl:hidden items-center gap-3 shrink-0">
            {isHackathonRoute ? (
              <button
                onClick={onOpenRegister}
                className="button-enchanced is-primary text-xs !py-2 !px-3.5 sm:hidden font-bold cursor-pointer whitespace-nowrap"
              >
                Register
              </button>
            ) : (
              <Link
                href="/join"
                className="button-enchanced is-primary text-xs !py-2 !px-3.5 sm:hidden font-bold cursor-pointer whitespace-nowrap"
              >
                Join
              </Link>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-white cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-b border-white/10 bg-black/95 px-6 pt-4 pb-8 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-semibold uppercase tracking-wider ${
                    isActive ? "text-[#38bdf8]" : "text-slate-200 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4">
              {isHackathonRoute ? (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenRegister?.();
                  }}
                  className="button-enchanced is-primary w-full text-center text-sm !py-3.5 font-bold cursor-pointer"
                >
                  REGISTER NOW
                </button>
              ) : (
                <Link
                  href="/join"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="button-enchanced is-primary w-full text-center text-sm !py-3.5 font-bold cursor-pointer block"
                >
                  JOIN DIGINORTH
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
