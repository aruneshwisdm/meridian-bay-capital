"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Target, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We learn about your goals, values, and current financial situation through in-depth conversations.",
  },
  {
    icon: Target,
    title: "Strategy",
    description: "We develop a comprehensive plan tailored to your unique circumstances and objectives.",
  },
  {
    icon: Rocket,
    title: "Implementation",
    description: "We execute your plan with precision, coordinating all aspects of your financial life.",
  },
  {
    icon: BarChart3,
    title: "Monitoring",
    description: "We continuously track progress and adjust strategies as your life and markets evolve.",
  },
];

export function ProcessTimeline() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading font-bold text-display-sm md:text-display-md text-text mb-4">
            Our Wealth Management Process
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            A disciplined approach that guides you from where you are to where you want to be.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-neutral-200 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary via-accent to-primary origin-left"
            />
          </div>

          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="text-center"
                >
                  {/* Icon Circle */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-accent shadow-medium mb-6 z-10 isolate">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-caption font-bold mb-3">
                    {index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-heading-md text-text mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="w-full h-full bg-gradient-to-b from-primary via-accent to-primary origin-top"
            />
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="flex gap-6"
                >
                  {/* Icon Circle */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-accent shadow-medium flex items-center justify-center z-10 relative">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-caption font-bold mb-2">
                      {index + 1}
                    </div>
                    <h3 className="font-heading font-bold text-heading-md text-text mb-2">
                      {step.title}
                    </h3>
                    <p className="text-body-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
