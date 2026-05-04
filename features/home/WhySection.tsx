import { WhyIntro } from "@/components/ui/WhyIntro";
import { WhyGrid } from "@/components/ui/WhyGrid";

export function WhySection() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* LEFT */}
          <WhyIntro />

          {/* RIGHT */}
          <WhyGrid />
        </div>
      </div>
    </section>
  );
}
