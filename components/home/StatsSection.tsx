"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  format?: "currency" | "number" | "percent";
}

const stats: Stat[] = [
  {
    value: 2.5,
    suffix: "B",
    prefix: "$",
    label: "Assets Under Management",
    format: "currency",
  },
  {
    value: 500,
    suffix: "+",
    label: "Satisfied Clients",
    format: "number",
  },
  {
    value: 25,
    suffix: "+",
    label: "Years Experience",
    format: "number",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
    format: "percent",
  },
];

function CountUp({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const endValue = end;

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = easeOut * endValue;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  const displayValue = end < 10 ? count.toFixed(1) : Math.round(count);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="stats-section"
      ref={ref}
      className="section-padding-sm bg-white"
    >
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative">
                <div className="text-display-md md:text-display-lg font-bold text-primary mb-2">
                  <CountUp
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <p className="text-body-md text-text-secondary font-medium">
                  {stat.label}
                </p>

                {/* Subtle underline accent */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-accent/40 group-hover:bg-accent transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
