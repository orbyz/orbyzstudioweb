import Hero from "@components/Hero";
import { ServicesSection } from "@/sections/services/ServicesSection";
import { WhySection } from "@/sections/why/WhySection";
import { ProcessSection } from "@/sections/process/ProcessSection";
import { CTASection } from "@/sections/cta/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
