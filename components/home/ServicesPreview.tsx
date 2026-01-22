"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { TrendingUp, LineChart, Landmark, Users, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui";

const services = [
  {
    icon: TrendingUp,
    title: "Wealth Planning",
    description: "Comprehensive financial strategies tailored to your unique goals and lifestyle.",
    href: "/services#wealth-planning",
  },
  {
    icon: LineChart,
    title: "Investment Management",
    description: "Disciplined portfolio management focused on your long-term success.",
    href: "/services#investment-management",
  },
  {
    icon: Landmark,
    title: "Retirement Planning",
    description: "Strategic planning for a secure and fulfilling retirement.",
    href: "/services#retirement",
  },
  {
    icon: Users,
    title: "Estate & Legacy",
    description: "Preserve and transfer your wealth according to your wishes.",
    href: "/services#estate",
  },
];

export function ServicesPreview() {
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
            Comprehensive Wealth Solutions
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Integrated services that work together to secure your financial future.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={service.href} className="block h-full group">
                  <Card
                    variant="hover"
                    className="h-full border border-transparent hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-5">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon className="h-6 w-6" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-bold text-heading-lg text-text mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-body-md text-text-secondary mb-4">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-body-sm font-semibold text-primary">
                          Learn More
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
