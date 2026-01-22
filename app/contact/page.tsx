"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Phone, Mail, MapPin, Clock, Shield, CheckCircle, ChevronDown } from "lucide-react";
import { Button, Input, Card } from "@/components/ui";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

interface FormData {
  // Step 1
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  // Step 2
  netWorth: string;
  investmentGoals: string[];
  preferredContact: string;
  // Step 3
  preferredDay: string;
  preferredTime: string;
  message: string;
}

const steps = [
  { id: 1, title: "Contact Info" },
  { id: 2, title: "About You" },
  { id: 3, title: "Schedule" },
];

const netWorthOptions = [
  "$500K - $1M",
  "$1M - $2.5M",
  "$2.5M - $5M",
  "$5M - $10M",
  "$10M+",
];

const goalOptions = [
  "Retirement Planning",
  "Investment Management",
  "Tax Strategy",
  "Estate Planning",
  "Business Exit",
  "General Financial Planning",
];

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger,
  } = useForm<FormData>({
    defaultValues: {
      investmentGoals: [],
      preferredContact: "phone",
    },
  });

  const selectedGoals = watch("investmentGoals") || [];

  const toggleGoal = (goal: string) => {
    const current = selectedGoals;
    if (current.includes(goal)) {
      setValue(
        "investmentGoals",
        current.filter((g) => g !== goal)
      );
    } else {
      setValue("investmentGoals", [...current, goal]);
    }
  };

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  const nextStep = async () => {
    const fieldsToValidate: Record<number, (keyof FormData)[]> = {
      1: ['firstName', 'lastName', 'email', 'phone'],
      2: [],
      3: [],
    };

    const isValid = await trigger(fieldsToValidate[currentStep]);
    if (isValid) {
      setCurrentStep((s) => Math.min(s + 1, 3));
    }
  };
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));

  if (isSubmitted) {
    return (
      <section className="section-padding bg-background min-h-[60vh] flex items-center">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-12 shadow-large"
          >
            <div className="w-20 h-20 rounded-full bg-success-50 text-success flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h1 className="font-heading font-bold text-display-sm text-text mb-4">
              Thank You!
            </h1>
            <p className="text-body-lg text-text-secondary mb-8">
              We&apos;ve received your consultation request. A member of our team will
              contact you within one business day to schedule your meeting.
            </p>
            <Button variant="primary" asChild>
              <a href="/">Return to Home</a>
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-ocean text-white py-16 md:py-20">
        <div className="container-main relative z-10 text-center">
          <h1 className="font-heading font-bold text-display-md md:text-display-lg mb-4">
            Start a Conversation
          </h1>
          <p className="text-body-lg text-white/90 max-w-xl mx-auto">
            Schedule a complimentary consultation to discuss your financial goals.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="p-8">
                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-8">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-body-md transition-colors",
                          currentStep >= step.id
                            ? "bg-primary text-white"
                            : "bg-neutral-200 text-text-tertiary"
                        )}
                      >
                        {step.id}
                      </div>
                      <span
                        className={cn(
                          "ml-3 font-medium text-body-sm hidden sm:block",
                          currentStep >= step.id ? "text-text" : "text-text-tertiary"
                        )}
                      >
                        {step.title}
                      </span>
                      {index < steps.length - 1 && (
                        <div
                          className={cn(
                            "w-12 md:w-20 h-0.5 mx-4",
                            currentStep > step.id ? "bg-primary" : "bg-neutral-200"
                          )}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Step 1: Contact Info */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="font-heading font-bold text-heading-xl text-text mb-4">
                        Your Contact Information
                      </h2>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input
                          label="First Name"
                          placeholder="John"
                          error={errors.firstName?.message}
                          {...register("firstName", { required: "First name is required" })}
                        />
                        <Input
                          label="Last Name"
                          placeholder="Smith"
                          error={errors.lastName?.message}
                          {...register("lastName", { required: "Last name is required" })}
                        />
                      </div>

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

                      <Button type="button" variant="primary" className="w-full" onClick={() => nextStep()}>
                        Continue
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </motion.div>
                  )}

                  {/* Step 2: About You */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="font-heading font-bold text-heading-xl text-text mb-4">
                        Tell Us About Yourself
                      </h2>

                      <div>
                        <label className="block text-body-sm font-medium text-text mb-3">
                          Investable Assets
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {netWorthOptions.map((option) => (
                            <label
                              key={option}
                              className={cn(
                                "flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all",
                                "focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2",
                                watch("netWorth") === option
                                  ? "border-primary bg-primary-50"
                                  : "border-neutral-200 hover:border-neutral-300"
                              )}
                            >
                              <input
                                type="radio"
                                value={option}
                                {...register("netWorth")}
                                className="sr-only"
                              />
                              <span className="text-body-sm font-medium">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-body-sm font-medium text-text mb-3">
                          Investment Goals (Select all that apply)
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {goalOptions.map((goal) => (
                            <button
                              key={goal}
                              type="button"
                              onClick={() => toggleGoal(goal)}
                              className={cn(
                                "flex items-center justify-center p-3 rounded-lg border-2 transition-all text-left",
                                "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                                selectedGoals.includes(goal)
                                  ? "border-primary bg-primary-50"
                                  : "border-neutral-200 hover:border-neutral-300"
                              )}
                            >
                              <span className="text-body-sm">{goal}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button type="button" variant="secondary" onClick={prevStep}>
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Back
                        </Button>
                        <Button type="button" variant="primary" className="flex-1" onClick={() => nextStep()}>
                          Continue
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Schedule */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="font-heading font-bold text-heading-xl text-text mb-4">
                        Schedule Your Consultation
                      </h2>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-body-sm font-medium text-text mb-2">
                            Preferred Day
                          </label>
                          <div className="relative">
                            <select
                              {...register("preferredDay")}
                              className="w-full px-4 py-3 pr-10 bg-white border border-neutral-400 rounded-lg text-text appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            >
                              <option value="">Select a day</option>
                              <option value="monday">Monday</option>
                              <option value="tuesday">Tuesday</option>
                              <option value="wednesday">Wednesday</option>
                              <option value="thursday">Thursday</option>
                              <option value="friday">Friday</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary pointer-events-none" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-body-sm font-medium text-text mb-2">
                            Preferred Time
                          </label>
                          <div className="relative">
                            <select
                              {...register("preferredTime")}
                              className="w-full px-4 py-3 pr-10 bg-white border border-neutral-400 rounded-lg text-text appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            >
                              <option value="">Select a time</option>
                              <option value="morning">Morning (8am - 12pm)</option>
                              <option value="afternoon">Afternoon (12pm - 5pm)</option>
                              <option value="evening">Evening (5pm - 7pm)</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-body-sm font-medium text-text mb-2">
                          Additional Message (Optional)
                        </label>
                        <textarea
                          {...register("message")}
                          rows={4}
                          placeholder="Tell us more about what you'd like to discuss..."
                          className="w-full px-4 py-3 bg-white border border-neutral-400 rounded-lg text-text placeholder:text-text-tertiary resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>

                      <div className="flex gap-3">
                        <Button type="button" variant="secondary" onClick={prevStep}>
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Back
                        </Button>
                        <Button type="submit" variant="accent" className="flex-1">
                          Submit Request
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <h3 className="font-heading font-bold text-heading-lg text-text mb-6">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-text">Phone</p>
                      <a
                        href={`tel:${COMPANY.phoneFormatted}`}
                        className="text-primary hover:text-accent transition-colors"
                      >
                        {COMPANY.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-text">Email</p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-primary hover:text-accent transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-text">Office</p>
                      <p className="text-text-secondary">
                        {COMPANY.address.street}<br />
                        {COMPANY.address.suite}<br />
                        {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-text">Business Hours</p>
                      <p className="text-text-secondary">
                        Mon - Fri: {COMPANY.hours.weekdays}<br />
                        Sat: {COMPANY.hours.saturday}<br />
                        Sun: {COMPANY.hours.sunday}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-primary-50 border-0">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <p className="font-heading font-semibold text-text">Your Privacy Matters</p>
                </div>
                <p className="text-body-sm text-text-secondary">
                  All information you provide is kept strictly confidential and will
                  never be shared with third parties.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
