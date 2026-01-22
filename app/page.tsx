import {
  HeroSection,
  StatsSection,
  ApproachSection,
  ProcessTimeline,
  ServicesPreview,
  TestimonialsSection,
  CTASection,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ApproachSection />
      <ProcessTimeline />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
