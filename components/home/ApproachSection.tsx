"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserCheck, Shield, Eye } from "lucide-react";
import { Card } from "@/components/ui";

const approaches = [
  {
    icon: UserCheck,
    title: "Personalized Planning",
    description:
      "Every financial plan is crafted around your unique goals, lifestyle, and values. We take the time to understand what matters most to you.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "We build portfolios designed to weather market volatility while capturing long-term growth. Your peace of mind is our priority.",
  },
  {
    icon: Eye,
    title: "Transparent Fees",
    description:
      "No hidden costs, no commissions. Our fee-only model ensures our advice is always aligned with your best interests.",
  },
];

export function ApproachSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading font-bold text-display-sm md:text-display-md text-text mb-4">
            Our Fiduciary Approach
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            As fiduciaries, we&apos;re legally bound to act in your best interest—always.
            Here&apos;s what that means in practice.
          </p>
        </motion.div>

        {/* Approach Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => {
            const Icon = approach.icon;
            return (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card
                  variant="bordered"
                  className="h-full text-center hover:border-accent transition-colors duration-300"
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 text-primary mb-6">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-heading-lg text-text mb-3">
                    {approach.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body-md text-text-secondary leading-relaxed">
                    {approach.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
