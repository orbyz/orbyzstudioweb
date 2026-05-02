import { Service } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

type Props = {
  services: Service[];
};

export function ServicesGrid({ services }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
}
