import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Calculator,
  Video,
  BookOpen,
  HelpCircle,
  Download,
  ArrowRight,
} from "lucide-react";
import { Card, Button, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Financial Resources",
  description:
    "Free financial planning resources including market reports, calculators, guides, and educational content from Meridian Bay Capital.",
};

const resourceCategories = [
  {
    title: "Market Reports",
    description: "Quarterly market commentary and economic outlooks",
    icon: FileText,
    items: [
      { name: "Q4 2024 Market Review", type: "PDF", size: "2.4 MB" },
      { name: "2025 Economic Outlook", type: "PDF", size: "3.1 MB" },
      { name: "Monthly Market Update - January 2025", type: "PDF", size: "1.8 MB" },
    ],
    href: "#market-reports",
  },
  {
    title: "Calculators & Tools",
    description: "Interactive tools to help plan your financial future",
    icon: Calculator,
    items: [
      { name: "Investment Growth Calculator", type: "Tool", href: "/tools" },
      { name: "Retirement Readiness Assessment", type: "Tool", href: "/tools" },
      { name: "Fee Impact Calculator", type: "Tool", href: "/tools" },
    ],
    href: "/tools",
  },
  {
    title: "Guides & Whitepapers",
    description: "In-depth educational content on key financial topics",
    icon: BookOpen,
    items: [
      { name: "The Complete Guide to Retirement Planning", type: "PDF", size: "5.2 MB" },
      { name: "Tax-Efficient Investing Strategies", type: "PDF", size: "3.8 MB" },
      { name: "Estate Planning Essentials", type: "PDF", size: "4.1 MB" },
    ],
    href: "#guides",
  },
  {
    title: "Webinars & Events",
    description: "Educational webinars and upcoming client events",
    icon: Video,
    items: [
      { name: "2025 Tax Planning Strategies (Recording)", type: "Video", duration: "45 min" },
      { name: "Market Outlook Webinar - Q1 2025", type: "Video", duration: "60 min" },
      { name: "Social Security Optimization Workshop", type: "Upcoming", date: "Feb 15, 2025" },
    ],
    href: "#webinars",
  },
  {
    title: "FAQ",
    description: "Answers to frequently asked questions",
    icon: HelpCircle,
    items: [
      { name: "Getting Started with Meridian Bay", type: "Article" },
      { name: "Understanding Our Fee Structure", type: "Article" },
      { name: "Account Security & Access", type: "Article" },
    ],
    href: "/faq",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-ocean text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="container-main relative z-10 text-center">
          <h1 className="font-heading font-bold text-display-md md:text-display-lg mb-6 text-white">
            Financial Resources
          </h1>
          <p className="text-body-lg md:text-heading-lg text-white/90 max-w-2xl mx-auto">
            Tools, guides, and insights to help you make informed financial decisions.
          </p>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="section-padding-sm bg-white">
        <div className="container-main">
          <Card className="bg-gradient-to-br from-primary-50 to-accent-50 border-0 p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="accent" className="mb-4">Featured</Badge>
                <h2 className="font-heading font-bold text-display-sm text-text mb-4">
                  2025 Economic & Market Outlook
                </h2>
                <p className="text-body-lg text-text-secondary mb-6">
                  Our comprehensive analysis of the economic landscape and market
                  opportunities for the year ahead. Essential reading for long-term investors.
                </p>
                <Button variant="primary">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report (PDF)
                </Button>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="w-48 h-64 bg-white rounded-lg shadow-large flex items-center justify-center">
                  <FileText className="h-16 w-16 text-primary-200" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-heading-md text-text">
                        {category.title}
                      </h3>
                      <p className="text-body-sm text-text-secondary">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {category.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0"
                      >
                        <span className="text-body-sm text-text">{item.name}</span>
                        <Badge variant="accent" size="sm">
                          {item.type}
                        </Badge>
                      </li>
                    ))}
                  </ul>

                  {category.href.startsWith("/") ? (
                    <Button variant="secondary" className="w-full" asChild>
                      <Link href={category.href}>
                        View All
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="secondary" className="w-full">
                      Browse Resources
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-white">
        <div className="container-narrow text-center">
          <h2 className="font-heading font-bold text-display-sm text-text mb-4">
            Need Personalized Guidance?
          </h2>
          <p className="text-body-lg text-text-secondary mb-8">
            Our advisors can help you apply these resources to your specific situation.
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
