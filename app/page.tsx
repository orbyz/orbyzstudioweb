import FeatureGrid from "@components/FeaturesGrid";
import Hero from "@components/Hero";
import WhyChooseUsSection from "@components/WhyChooseUsSection";
import ProcessSection from "@components/ProcessSection";
import CallToActionSection from "@components/CallToActionSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <WhyChooseUsSection />
      <ProcessSection />
      <CallToActionSection />
    </>
  );
}
