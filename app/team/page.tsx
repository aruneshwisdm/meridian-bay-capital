"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Award, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button, Card, Badge } from "@/components/ui";
import { advisors, type Advisor } from "@/lib/data/advisors";

function AdvisorCard({ advisor, onClick }: { advisor: Advisor; onClick: () => void }) {
  return (
    <Card
      variant="hover"
      className="cursor-pointer text-center group"
      onClick={onClick}
    >
      {/* Photo placeholder */}
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary-100 to-primary-50">
        <div className="absolute inset-0 flex items-center justify-center text-primary-300 font-heading font-bold text-display-sm">
          {advisor.name.split(" ").map((n) => n[0]).join("")}
        </div>
      </div>

      {/* Name & Credentials */}
      <h3 className="font-heading font-bold text-heading-lg text-text mb-1 group-hover:text-primary transition-colors">
        {advisor.name}
      </h3>
      <div className="flex items-center justify-center gap-2 mb-2">
        {advisor.credentials.map((cred) => (
          <Badge key={cred} variant="primary" size="sm">
            {cred}
          </Badge>
        ))}
      </div>

      {/* Title */}
      <p className="text-body-sm text-text-secondary mb-4">
        {advisor.title}
      </p>

      {/* Bio Preview */}
      <p className="text-body-sm text-text-tertiary line-clamp-2 mb-4">
        {advisor.bio}
      </p>

      {/* View Bio Button */}
      <span className="inline-flex items-center gap-1 text-body-sm font-semibold text-primary">
        View Full Bio
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </Card>
  );
}

function AdvisorModal({
  advisor,
  onClose,
}: {
  advisor: Advisor;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-large"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-neutral-200 p-4 flex items-center justify-between z-10">
          <h2 className="font-heading font-bold text-heading-lg text-text">
            {advisor.name}
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-text-secondary" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-50 mx-auto md:mx-0">
                <div className="w-full h-full flex items-center justify-center text-primary-300 font-heading font-bold text-display-sm">
                  {advisor.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                {advisor.credentials.map((cred) => (
                  <Badge key={cred} variant="primary">
                    {cred}
                  </Badge>
                ))}
              </div>
              <p className="text-body-md text-text-secondary mb-3">{advisor.title}</p>
              <p className="font-mono text-body-sm text-accent">
                {advisor.experience} Years Experience
              </p>
            </div>
          </div>

          {/* Full Bio */}
          <div className="mb-8">
            <h3 className="font-heading font-semibold text-heading-md text-text mb-3 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Biography
            </h3>
            <p className="text-body-md text-text-secondary leading-relaxed">
              {advisor.fullBio}
            </p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="font-heading font-semibold text-heading-md text-text mb-3 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h3>
            <ul className="space-y-2">
              {advisor.education.map((edu) => (
                <li key={edu} className="text-body-md text-text-secondary">
                  {edu}
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div className="mb-8">
            <h3 className="font-heading font-semibold text-heading-md text-text mb-3 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Specialties
            </h3>
            <div className="flex flex-wrap gap-2">
              {advisor.specialties.map((specialty) => (
                <Badge key={specialty} variant="accent">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200">
            <Button variant="primary" className="flex-1" asChild>
              <Link href="/contact">
                Schedule a Meeting
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            {advisor.linkedin && (
              <Button variant="secondary" asChild>
                <a
                  href={advisor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TeamPage() {
  const [selectedAdvisor, setSelectedAdvisor] = useState<Advisor | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-ocean text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="container-main relative z-10 text-center">
          <h1 className="font-heading font-bold text-display-md md:text-display-lg mb-6 text-white">
            Our Advisory Team
          </h1>
          <p className="text-body-lg md:text-heading-lg text-white/90 max-w-2xl mx-auto">
            Experienced professionals dedicated to helping you achieve your financial goals.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AdvisorCard
                  advisor={advisor}
                  onClick={() => setSelectedAdvisor(advisor)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-white">
        <div className="container-narrow text-center">
          <h2 className="font-heading font-bold text-display-sm text-text mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-body-lg text-text-secondary mb-8">
            Schedule a complimentary consultation to discuss how we can help you achieve your financial goals.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedAdvisor && (
          <AdvisorModal
            advisor={selectedAdvisor}
            onClose={() => setSelectedAdvisor(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
