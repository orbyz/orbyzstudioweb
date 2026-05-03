import { ServicesHero } from "@/sections/services-page/ServicesHero";
import { ServicesList } from "@/sections/services-page/ServicesList";
import { ServicesMiniProcess } from "@/sections/services-page/ServicesMiniProcess";
import { ServicesWhy } from "@/sections/services-page/ServicesWhy";
import { ServicesCTA } from "@/sections/services-page/ServicesCTA";

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
