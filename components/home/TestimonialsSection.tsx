"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils/cn";

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section ref={ref} className="section-padding bg-white overflow-hidden">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading font-bold text-display-sm md:text-display-md text-text mb-4">
            Client Success Stories
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Hear from the families and individuals we&apos;ve had the privilege to serve.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Quote Icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-glow-gold">
              <Quote className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl px-8 py-12 md:px-16 md:py-16 shadow-soft">
            <div className="relative min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  {/* Quote Text */}
                  <blockquote className="text-body-lg md:text-heading-lg text-text leading-relaxed mb-8">
                    &ldquo;{testimonials[activeIndex].quote}&rdquo;
                  </blockquote>

                  {/* Client Info */}
                  <div>
                    <p className="font-heading font-bold text-heading-md text-text">
                      {testimonials[activeIndex].name}
                    </p>
                    {testimonials[activeIndex].title && (
                      <p className="text-body-sm text-text-secondary">
                        {testimonials[activeIndex].title}
                      </p>
                    )}
                    <p className="text-body-sm text-accent mt-1">
                      Client since {testimonials[activeIndex].clientSince} •{" "}
                      {testimonials[activeIndex].location}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="hidden md:flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-text hover:text-primary hover:shadow-medium transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-text hover:text-primary hover:shadow-medium transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "bg-primary w-8"
                      : "bg-neutral-300 hover:bg-neutral-400"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : "false"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
