"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

const anchors = [
  { id: "wealth-planning", label: "Wealth Planning" },
  { id: "investment-management", label: "Investments" },
  { id: "retirement", label: "Retirement" },
  { id: "estate", label: "Estate & Legacy" },
];

export function ServiceHero() {
  const [activeAnchor, setActiveAnchor] = useState("wealth-planning");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if anchor nav should be sticky
      const heroHeight = 400;
      setIsSticky(window.scrollY > heroHeight);

      // Update active anchor based on scroll position
      for (const anchor of anchors.reverse()) {
        const element = document.getElementById(anchor.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveAnchor(anchor.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-ocean text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="container-main relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-display-md md:text-display-lg mb-6 text-white"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg md:text-heading-lg text-white/90 max-w-2xl mx-auto"
          >
            Comprehensive wealth management solutions designed to help you achieve
            your financial goals and secure your family&apos;s future.
          </motion.p>
        </div>
      </section>

      {/* Anchor Navigation */}
      <div
        className={cn(
          "bg-white border-b border-neutral-200 transition-all duration-300 z-40",
          isSticky ? "fixed top-[4.5rem] md:top-[6rem] left-0 right-0 shadow-soft" : ""
        )}
      >
        <div className="container-main">
          <nav className="flex items-center justify-center gap-1 md:gap-2 py-3 overflow-x-auto scrollbar-hide">
            {anchors.map((anchor) => (
              <button
                key={anchor.id}
                onClick={() => scrollToSection(anchor.id)}
                className={cn(
                  "px-4 py-2 rounded-lg font-heading font-medium text-body-sm whitespace-nowrap transition-all duration-300",
                  activeAnchor === anchor.id
                    ? "bg-primary text-white"
                    : "text-text-secondary hover:bg-primary-50 hover:text-primary"
                )}
              >
                {anchor.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Spacer when nav is sticky */}
      {isSticky && <div className="h-14" />}
    </>
  );
}
