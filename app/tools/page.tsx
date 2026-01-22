import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InvestmentCalculator } from "@/components/tools";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Financial Planning Tools",
  description:
    "Free financial planning calculators to help you visualize your investment growth and plan for the future. Investment growth calculator, retirement planning tools, and more.",
};

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-ocean text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="container-main relative z-10 text-center">
          <h1 className="font-heading font-bold text-display-md md:text-display-lg mb-4 text-white">
            Financial Planning Tools
          </h1>
          <p className="text-body-lg md:text-heading-lg text-white/90 max-w-2xl mx-auto">
            Interactive calculators to help you visualize your financial future and make informed decisions.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <InvestmentCalculator />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-white">
        <div className="container-narrow text-center">
          <h2 className="font-heading font-bold text-display-sm text-text mb-4">
            Ready to Discuss Your Investment Strategy?
          </h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-xl mx-auto">
            Our advisors can help you create a personalized plan based on your unique goals and circumstances.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
