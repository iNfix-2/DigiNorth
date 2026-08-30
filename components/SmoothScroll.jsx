"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Accessibility: Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    // 2. Detect small / touch devices to prevent touch gesture hanging
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 768;

    let lenis = null;
    let rafId = null;

    if (!isTouchDevice) {
      // Initialize Lenis for desktop / mouse pointer devices
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        infinite: false,
      });

      window.lenis = lenis;

      function raf(time) {
        if (document.visibilityState !== "hidden" && lenis) {
          lenis.raf(time);
        }
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    }

    // 3. Smooth in-page anchor link handler (#leadership, #about, etc.)
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const elem = document.querySelector(href);
        if (elem) {
          e.preventDefault();
          if (lenis) {
            lenis.scrollTo(elem, {
              offset: -80, // Navbar height offset
              duration: 1.2,
            });
          } else {
            // Native smooth scroll for mobile
            const topOffset = elem.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
              top: topOffset,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      if (lenis) {
        lenis.destroy();
        window.lenis = null;
      }
    };
  }, []);

  // Reset scroll position on route changes
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}
