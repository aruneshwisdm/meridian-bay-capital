import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Heart, Target, Users, ArrowRight, Award, Building } from "lucide-react";
import { Button, Card, Badge } from "@/components/ui";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Meridian Bay Capital's history, philosophy, and commitment to fiduciary wealth management. Serving Bay Area families since 1999.",
};

const values = [
  {
    icon: Shield,
    title: "Fiduciary First",
    description:
      "We are legally bound to act in your best interest. Your success is our only measure of success.",
  },
  {
    icon: Heart,
    title: "Client-Centered",
    description:
      "Every decision we make starts with understanding your unique goals, values, and circumstances.",
  },
  {
    icon: Target,
    title: "Long-Term Focus",
    description:
      "We build portfolios and plans designed to weather short-term volatility while capturing long-term growth.",
  },
  {
    icon: Users,
    title: "Relationship Driven",
    description:
      "We serve a limited number of clients to ensure each family receives the attention they deserve.",
  },
];

const credentials = [
  "SEC Registered Investment Advisor",
  "Member, National Association of Personal Financial Advisors (NAPFA)",
  "CFP® Professional Standards",
  "CFA Institute Code of Ethics",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-ocean text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="container-main relative z-10 text-center">
          <h1 className="font-heading font-bold text-display-md md:text-display-lg mb-6 text-white">
            About Meridian Bay Capital
          </h1>
          <p className="text-body-lg md:text-heading-lg text-white/90 max-w-2xl mx-auto">
            {COMPANY.tagline}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge variant="accent" className="mb-4">Our Story</Badge>
              <h2 className="font-heading font-bold text-display-sm md:text-display-md text-text mb-6">
                Founded on Fiduciary Principles
              </h2>
              <div className="space-y-4 text-body-lg text-text-secondary leading-relaxed">
                <p>
                  Founded in the Bay Area in 1999, Meridian Bay Capital was built on a simple
                  premise: that wealthy families deserve advisors who are legally bound to act
                  in their best interest—without conflicts or hidden agendas.
                </p>
                <p>
                  Our founder, James Chen, left a career at a major Wall Street firm because
                  he believed there was a better way to serve clients. He established Meridian
                  Bay as a fee-only fiduciary firm, ensuring our interests are always aligned
                  with those of our clients.
                </p>
                <p>
                  Today, we continue that tradition of putting clients first. Our team of
                  experienced professionals brings expertise across financial planning,
                  investment management, tax strategy, and estate planning—all working
                  together to serve your complete financial picture.
                </p>
              </div>
            </div>

            {/* Image/Visual placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 via-primary-50 to-accent-50 shadow-large">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building className="h-24 w-24 text-primary/20" />
                </div>
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl p-6 shadow-large">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-mono font-bold text-heading-lg text-primary">
                      {COMPANY.founded}
                    </p>
                    <p className="text-caption text-text-secondary">Founded</p>
                  </div>
                  <div>
                    <p className="font-mono font-bold text-heading-lg text-primary">
                      {COMPANY.aum}
                    </p>
                    <p className="text-caption text-text-secondary">AUM</p>
                  </div>
                  <div>
                    <p className="font-mono font-bold text-heading-lg text-primary">
                      {COMPANY.clients}
                    </p>
                    <p className="text-caption text-text-secondary">Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-4">Our Philosophy</Badge>
            <h2 className="font-heading font-bold text-display-sm md:text-display-md text-text mb-4">
              Guiding Principles
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              These core values guide every interaction and decision we make on behalf of our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} variant="bordered" className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading font-bold text-heading-md text-text mb-2">
                    {value.title}
                  </h3>
                  <p className="text-body-sm text-text-secondary">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="accent" className="mb-4">Credentials</Badge>
              <h2 className="font-heading font-bold text-display-sm text-text mb-6">
                Professional Standards
              </h2>
              <p className="text-body-lg text-text-secondary mb-8">
                We hold ourselves to the highest professional standards in the industry,
                maintaining multiple certifications and adhering to strict ethical codes.
              </p>

              <ul className="space-y-4">
                {credentials.map((credential) => (
                  <li key={credential} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-success-50 text-success flex items-center justify-center flex-shrink-0">
                      <Award className="h-4 w-4" />
                    </div>
                    <span className="text-body-md text-text">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary-50 rounded-2xl p-8 lg:p-10">
              <h3 className="font-heading font-bold text-heading-xl text-text mb-4">
                What Being a Fiduciary Means
              </h3>
              <p className="text-body-md text-text-secondary mb-6 leading-relaxed">
                As a registered investment advisor, we are held to a fiduciary standard at
                all times. This means we have a legal obligation to:
              </p>
              <ul className="space-y-3 text-body-md text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Act in your best interest, not ours
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Disclose all potential conflicts of interest
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Provide full transparency in fees and compensation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Exercise the care of a prudent professional
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-primary-50">
        <div className="container-narrow text-center">
          <h2 className="font-heading font-bold text-display-sm text-text mb-4">
            Meet Our Team
          </h2>
          <p className="text-body-lg text-text-secondary mb-8">
            Get to know the experienced professionals who will guide your financial journey.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/team">
              View Our Advisory Team
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
