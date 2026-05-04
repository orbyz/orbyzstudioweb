import { HeroSection } from "@/features/home/HeroSection";
import { ServicesSection } from "@/features/home/ServicesSection";
import { WhySection } from "@/features/home/WhySection";
import { ProcessSection } from "@/features/home/ProcessSection";
import { CTASection } from "@/features/home/cta/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
