"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils/cn";
import type { Service } from "@/lib/data/services";

interface ServiceSectionProps {
  service: Service;
  index: number;
}

export function ServiceSection({ service, index }: ServiceSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 1;

  // Get the icon component dynamically
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] || LucideIcons.Star;

  return (
    <section
      ref={ref}
      id={service.id}
      className="section-padding scroll-mt-32"
    >
      <div className="container-main">
        <div
          className={cn(
            "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
            isEven && "lg:grid-flow-dense"
          )}
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={isEven ? "lg:col-start-2" : ""}
          >
            {/* Icon & Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary flex items-center justify-center">
                <IconComponent className="h-7 w-7" />
              </div>
              <h2 className="font-heading font-bold text-display-sm text-text">
                {service.title}
              </h2>
            </div>

            {/* Description */}
            <div className="prose prose-lg mb-8">
              {service.description.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-body-md text-text-secondary leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success-50 text-success flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-body-md text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button variant="primary" asChild>
              <Link href="/contact">
                Discuss This Service
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={isEven ? "lg:col-start-1" : ""}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-large">
              {/* Placeholder gradient - replace with actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-primary-50 to-accent-50" />

              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                  <IconComponent className="h-16 w-16 text-primary/30" />
                </div>
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
