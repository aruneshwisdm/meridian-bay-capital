"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button, Badge } from "@/components/ui";
import { serviceTiers } from "@/lib/data/services";
import { cn } from "@/lib/utils/cn";

export function ComparisonTable() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = Object.keys(serviceTiers[0].features);

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-display-sm md:text-display-md text-text mb-4">
            Service Tiers
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Choose the level of service that best fits your needs. All tiers include our
            fiduciary commitment and personalized approach.
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left p-6 w-1/4">
                    <span className="font-heading font-semibold text-text-secondary">
                      Features
                    </span>
                  </th>
                  {serviceTiers.map((tier, index) => (
                    <th key={tier.name} className="p-6 text-center">
                      <div className="space-y-2">
                        {index === 1 && (
                          <Badge variant="accent" size="sm">
                            Popular
                          </Badge>
                        )}
                        <h3 className="font-heading font-bold text-heading-lg text-text">
                          {tier.name}
                        </h3>
                        <p className="text-body-sm text-text-secondary">
                          {tier.description}
                        </p>
                        <p className="font-mono font-semibold text-heading-md text-primary">
                          {tier.minimumAssets}+
                        </p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={feature}
                    className={cn(
                      "border-b border-neutral-100",
                      index % 2 === 0 && "bg-neutral-50/50"
                    )}
                  >
                    <td className="p-6 text-body-md text-text">{feature}</td>
                    {serviceTiers.map((tier) => (
                      <td key={`${tier.name}-${feature}`} className="p-6 text-center">
                        {tier.features[feature as keyof typeof tier.features] ? (
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-success-50 text-success">
                            <Check className="h-4 w-4" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-neutral-100 text-neutral-400">
                            <X className="h-4 w-4" />
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {serviceTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "bg-white rounded-xl p-6 shadow-soft",
                index === 1 && "ring-2 ring-accent"
              )}
            >
              <div className="text-center mb-6">
                {index === 1 && (
                  <Badge variant="accent" size="sm" className="mb-2">
                    Popular
                  </Badge>
                )}
                <h3 className="font-heading font-bold text-heading-lg text-text">
                  {tier.name}
                </h3>
                <p className="text-body-sm text-text-secondary mt-1">
                  {tier.description}
                </p>
                <p className="font-mono font-semibold text-heading-md text-primary mt-2">
                  {tier.minimumAssets}+
                </p>
              </div>

              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    {tier.features[feature as keyof typeof tier.features] ? (
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success-50 text-success flex items-center justify-center">
                        <Check className="h-3 w-3" />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center">
                        <X className="h-3 w-3" />
                      </div>
                    )}
                    <span
                      className={cn(
                        "text-body-sm",
                        tier.features[feature as keyof typeof tier.features]
                          ? "text-text"
                          : "text-text-tertiary"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button variant="accent" size="lg" asChild>
            <Link href="/contact">Contact for Custom Plan</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
