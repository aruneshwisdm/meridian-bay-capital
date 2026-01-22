"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { ArrowRight, Phone, Shield, Award } from "lucide-react";
import { Button, Input } from "@/components/ui";
import { COMPANY } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Demo - just log the data
    console.log("Form submitted:", data);
    alert("Thank you! We'll be in touch soon.");
  };

  return (
    <section ref={ref} className="section-padding bg-primary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary to-transparent" />
      </div>

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-display-sm md:text-display-md text-text mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-body-lg text-text-secondary mb-8 leading-relaxed">
              Schedule a complimentary consultation to discuss your financial goals and
              learn how our fiduciary approach can help you achieve them.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-body-sm text-text-secondary">
                <Shield className="h-5 w-5 text-primary" />
                <span>Fiduciary Duty</span>
              </div>
              <div className="flex items-center gap-2 text-body-sm text-text-secondary">
                <Award className="h-5 w-5 text-primary" />
                <span>SEC Registered</span>
              </div>
            </div>

            {/* Phone CTA */}
            <div className="flex items-center gap-4">
              <span className="text-body-md text-text-secondary">Or call us at</span>
              <a
                href={`tel:${COMPANY.phoneFormatted}`}
                className="flex items-center gap-2 text-heading-lg font-heading font-bold text-primary hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5" />
                {COMPANY.phone}
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-large">
              <h3 className="font-heading font-bold text-heading-lg text-text mb-6">
                Schedule a Consultation
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <Input
                  label="Full Name"
                  placeholder="John Smith"
                  error={errors.name?.message}
                  {...register("name", { required: "Name is required" })}
                />

                <Input
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  error={errors.email?.message}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="(415) 555-0123"
                  error={errors.phone?.message}
                  {...register("phone", { required: "Phone is required" })}
                />

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  loading={isSubmitting}
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Schedule Consultation
                </Button>
              </form>

              <p className="text-caption text-text-tertiary mt-4 text-center">
                No obligation. Your information is secure and confidential.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
