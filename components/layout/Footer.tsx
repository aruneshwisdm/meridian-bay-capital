"use client";

import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { COMPANY, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-ocean text-white overflow-hidden">
      {/* Subtle wave pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
          backgroundSize: "1440px 200px",
        }}
      />

      <div className="relative container-main section-padding-sm">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white tracking-tight">
                  MERIDIAN BAY
                </span>
                <span className="font-heading font-medium text-xs text-white/80 tracking-[0.2em]">
                  CAPITAL
                </span>
              </div>
            </Link>
            <p className="text-body-sm text-white/70 mb-4 leading-relaxed">
              {COMPANY.tagline}
            </p>
            <p className="text-body-sm text-white/60 leading-relaxed">
              Comprehensive wealth management for high-net-worth individuals and families in the Bay Area and beyond.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={COMPANY.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-heading-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-heading-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-heading-sm mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-caption text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-caption text-white/60">
            © {currentYear} {COMPANY.name}. {COMPANY.registration.sec}.
          </p>
        </div>

        {/* Regulatory Disclosure */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-caption text-white/40 leading-relaxed">
            Meridian Bay Capital is a registered investment advisor. Registration does not imply any level of skill or training. The information provided is for general educational purposes only and should not be considered investment advice. Past performance is not indicative of future results. Investing involves risk, including the potential loss of principal.
          </p>
        </div>
      </div>
    </footer>
  );
}
