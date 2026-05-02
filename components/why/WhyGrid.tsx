import { whyItems } from "@/data/why";
import { WhyItem } from "./WhyItem";

export function WhyGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {whyItems.map((item) => (
        <WhyItem key={item.id} {...item} />
      ))}
    </div>
  );
}
