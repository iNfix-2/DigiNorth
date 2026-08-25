"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

const CIPHER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=-_";

/**
 * Scramble / Decipher Text component replicating TOKEN2049 Origins animation
 */
export function ScrambleText({
  text,
  className = "",
  triggerOnScroll = true,
  triggerOnHover = true,
  speed = 35,
  delay = 0,
  as: Component = "span",
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const isAnimatingRef = useRef(false);
  const frameRef = useRef(null);
  const elementRef = useRef(null);
  const hasScrolledIntoViewRef = useRef(false);

  const startScramble = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsScrambling(true);

    const length = text.length;
    const totalIterations = Math.max(12, length + 8);
    let iteration = 0;

    if (frameRef.current) clearInterval(frameRef.current);

    frameRef.current = setInterval(() => {
      iteration += 1;

      const current = text
        .split("")
        .map((char, index) => {
          if (char === " " || char === "\n") return char;
          // Character is resolved when iteration passes its position index
          if (index < iteration - 4) {
            return text[index];
          }
          return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
        })
        .join("");

      setDisplayText(current);

      if (iteration >= totalIterations + 4) {
        clearInterval(frameRef.current);
        setDisplayText(text);
        isAnimatingRef.current = false;
        setIsScrambling(false);
      }
    }, speed);
  }, [text, speed]);

  // Scroll Trigger with IntersectionObserver
  useEffect(() => {
    if (!triggerOnScroll) return;
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasScrolledIntoViewRef.current) {
          hasScrolledIntoViewRef.current = true;
          if (delay > 0) {
            setTimeout(startScramble, delay);
          } else {
            startScramble();
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnScroll, delay, startScramble]);

  useEffect(() => {
    setDisplayText(text);
    return () => {
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, [text]);

  const handleMouseEnter = () => {
    if (triggerOnHover) {
      startScramble();
    }
  };

  return (
    <Component
      ref={elementRef}
      className={`inline-block font-mono tracking-tight transition-colors duration-150 ${className} ${
        isScrambling ? "text-[#BAE6FD]" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      style={{
        fontVariantNumeric: "tabular-nums",
        minWidth: "fit-content",
      }}
    >
      {displayText}
    </Component>
  );
}

/**
 * Hook for buttons or custom elements that need cipher scramble on hover
 */
export function useScrambleText(originalText, speed = 30) {
  const [displayText, setDisplayText] = useState(originalText);
  const [isScrambling, setIsScrambling] = useState(false);
  const timerRef = useRef(null);
  const isRunningRef = useRef(false);

  const startScramble = useCallback(() => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;
    setIsScrambling(true);

    const length = originalText.length;
    const totalIterations = length + 8;
    let iteration = 0;

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      iteration += 1;

      const scrambled = originalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < iteration - 3) {
            return originalText[index];
          }
          return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
        })
        .join("");

      setDisplayText(scrambled);

      if (iteration >= totalIterations + 3) {
        clearInterval(timerRef.current);
        setDisplayText(originalText);
        isRunningRef.current = false;
        setIsScrambling(false);
      }
    }, speed);
  }, [originalText, speed]);

  const stopScramble = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setDisplayText(originalText);
    isRunningRef.current = false;
    setIsScrambling(false);
  }, [originalText]);

  useEffect(() => {
    setDisplayText(originalText);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [originalText]);

  return { displayText, isScrambling, startScramble, stopScramble };
}
