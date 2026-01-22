import type { Metadata } from "next";
import { ServiceHero, ServiceSection, ComparisonTable } from "@/components/services";
import { CTASection } from "@/components/home";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive wealth management services including financial planning, investment management, retirement planning, and estate planning. SEC Registered Investment Advisor.",
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />

      {/* Service Sections */}
      {services.map((service, index) => (
        <div
          key={service.id}
          className={index % 2 === 0 ? "bg-white" : "bg-background"}
        >
          <ServiceSection service={service} index={index} />
        </div>
      ))}

      {/* Comparison Table */}
      <ComparisonTable />

      {/* CTA */}
      <div className="bg-white">
        <CTASection />
      </div>
    </>
  );
}
