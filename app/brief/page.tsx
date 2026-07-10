import type { Metadata } from "next";
import { BriefWizard } from "@/features/brief/BriefWizard";

// Página oculta: no se enlaza desde la navegación y se excluye de índices/sitemap.
export const metadata: Metadata = {
  title: "Cuéntanos sobre tu proyecto",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function BriefPage() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <BriefWizard />
      </div>
    </section>
  );
}
