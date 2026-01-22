"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui";
import { TRUST_INDICATORS } from "@/lib/constants";

export function HeroSection() {
  const scrollToContent = () => {
    const element = document.getElementById("stats-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-ocean" style={{ minHeight: '85dvh' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Horizon gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-secondary/80" />

        {/* Subtle wave pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64 C288,128 576,0 864,64 C1152,128 1440,32 1440,32 L1440,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Subtle horizon line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-main text-center text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-heading font-bold text-display-md md:text-display-lg lg:text-display-xl mb-6 max-w-4xl mx-auto leading-tight text-white">
            Navigate Your Financial Future
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-body text-body-lg md:text-heading-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Comprehensive wealth management for those who value expertise and coastal living
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button variant="accent" size="lg" asChild>
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
          <Button variant="outline-white" size="lg" asChild>
            <Link href="/services">Explore Services</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-body-sm text-white/80"
        >
          {TRUST_INDICATORS.map((indicator, index) => (
            <span key={indicator} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:inline text-accent">•</span>
              )}
              <span>{indicator}</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to content"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}
