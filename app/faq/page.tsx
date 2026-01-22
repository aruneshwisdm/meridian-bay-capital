"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, ArrowRight } from "lucide-react";
import { Button, Card } from "@/components/ui";
import { faqs, faqCategories, type FAQCategory } from "@/lib/data/faq";
import { cn } from "@/lib/utils/cn";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  const triggerId = `faq-trigger-${id}`;
  const panelId = `faq-panel-${id}`;

  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        id={triggerId}
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset rounded-lg"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-heading font-semibold text-heading-sm text-text pr-4 group-hover:text-primary transition-colors">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-text-tertiary flex-shrink-0 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-body-md text-text-secondary pb-5 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>(faqCategories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = faq.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // If searching, show all matching FAQs regardless of category
  const displayFAQs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFAQs;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-ocean text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="container-main relative z-10 text-center">
          <h1 className="font-heading font-bold text-display-md md:text-display-lg mb-6 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-body-lg md:text-heading-lg text-white/90 max-w-2xl mx-auto mb-8">
            Find answers to common questions about our services, fees, and approach to wealth management.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-text placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h2 className="font-heading font-semibold text-heading-md text-text mb-4">
                  Categories
                </h2>
                <nav className="space-y-1">
                  {faqCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setSearchQuery("");
                        setOpenIndex(0);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2.5 rounded-lg font-medium text-body-md transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                        selectedCategory === category && !searchQuery
                          ? "bg-primary text-white"
                          : "text-text-secondary hover:bg-white hover:text-primary"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              {searchQuery && (
                <p className="text-body-md text-text-secondary mb-6">
                  Showing {displayFAQs.length} result{displayFAQs.length !== 1 && "s"} for &ldquo;{searchQuery}&rdquo;
                </p>
              )}

              <Card>
                {displayFAQs.length > 0 ? (
                  displayFAQs.map((faq, index) => (
                    <FAQItem
                      key={`${faq.category}-${index}`}
                      id={`${faq.category.toLowerCase().replace(/\s+/g, '-')}-${index}`}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === index}
                      onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                  ))
                ) : (
                  <div className="py-8 text-center">
                    <p className="text-text-secondary">No questions found matching your search.</p>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-white">
        <div className="container-narrow text-center">
          <h2 className="font-heading font-bold text-display-sm text-text mb-4">
            Still Have Questions?
          </h2>
          <p className="text-body-lg text-text-secondary mb-8">
            We&apos;re here to help. Reach out to our team for personalized answers.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link href="/contact">
              Contact Us
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
