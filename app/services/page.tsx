import { ServicesHero } from "@/features/services/ServicesHero";
import { ServicesList } from "@/features/services/ServicesList";
import { ServicesMiniProcess } from "@/features/services/ServicesMiniProcess";
import { ServicesWhy } from "@/features/services/ServicesWhy";
import { ServicesCTA } from "@/features/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesMiniProcess />
      <ServicesWhy />
      <ServicesCTA />
    </>
  );
}
