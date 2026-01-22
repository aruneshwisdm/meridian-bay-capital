"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { NAV_ITEMS, COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft"
            : "bg-white"
        )}
      >
        {/* Trust indicator bar */}
        <div className="hidden md:block bg-primary-50 border-b border-primary-100">
          <div className="container-main">
            <div className="flex items-center justify-center gap-4 py-1.5">
              <div className="flex items-center gap-2 text-caption text-primary-700">
                <Shield className="h-3 w-3" />
                <span>{COMPANY.registration.sec}</span>
                <span className="text-primary-400">•</span>
                <span>{COMPANY.registration.fiduciary}</span>
              </div>
            </div>
          </div>
        </div>

        <nav className="container-main">
          <div className="flex items-center justify-between h-18 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="flex flex-col transition-opacity duration-300 group-hover:opacity-80">
                <span className="font-heading font-bold text-xl md:text-2xl text-primary tracking-tight">
                  MERIDIAN BAY
                </span>
                <span className="font-heading font-medium text-xs md:text-sm text-secondary tracking-[0.2em]">
                  CAPITAL
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative font-heading font-medium text-body-md transition-colors duration-300",
                    "hover:text-primary",
                    "after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5",
                    "after:bg-accent after:scale-x-0 after:origin-right",
                    "after:transition-transform after:duration-300",
                    "hover:after:scale-x-100 hover:after:origin-left",
                    pathname === item.href
                      ? "text-primary after:scale-x-100"
                      : "text-text-secondary"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="secondary" size="sm" asChild>
                <Link href="/portal">Client Portal</Link>
              </Button>
              <Button variant="primary" size="sm" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-text hover:text-primary transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden shadow-large"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-neutral-200">
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-lg text-primary tracking-tight">
                      MERIDIAN BAY
                    </span>
                    <span className="font-heading font-medium text-xs text-secondary tracking-[0.2em]">
                      CAPITAL
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-text hover:text-primary transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-1">
                    {NAV_ITEMS.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "block py-3 px-4 font-heading font-medium text-body-lg rounded-lg transition-colors",
                            pathname === item.href
                              ? "bg-primary-50 text-primary"
                              : "text-text hover:bg-neutral-100"
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* CTAs */}
                <div className="p-4 border-t border-neutral-200 space-y-3">
                  <Button variant="secondary" className="w-full" asChild>
                    <Link href="/portal">Client Portal</Link>
                  </Button>
                  <Button variant="primary" className="w-full" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="p-4 bg-primary-50">
                  <div className="flex items-center justify-center gap-2 text-caption text-primary">
                    <Shield className="h-3 w-3" />
                    <span>{COMPANY.registration.sec}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to account for fixed header */}
      <div className="h-[72px] md:h-[104px]" />
    </>
  );
}
