import { CTAContent } from "@/features/home/cta/CTAContent";
import { CTAActions } from "@/features/home/cta/CTAActions";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-default p-10 md:p-14">
          {/* OPTIONAL GLOW BACKGROUND */}
          <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--color-primary),transparent_70%)]" />

          <div className="relative z-10 flex flex-col gap-6">
            <CTAContent />
            <CTAActions />
          </div>
        </div>
      </div>
    </section>
  );
}
