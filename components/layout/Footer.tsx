import { FooterColumn } from "@/components/ui/FooterColumn";
import { FooterBottom } from "@/components/ui/FooterBottom";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-default py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <FooterColumn>
            <h3 className="text-lg font-semibold text-text mb-4">
              OrByZ Studio
            </h3>
            <p>
              Construimos sistemas digitales que generan clientes, no solo webs.
            </p>
          </FooterColumn>

          {/* NAV */}
          <FooterColumn title="Navegación">
            <Link href="/">Inicio</Link>
            <Link href="/services">Servicios</Link>
            <Link href="/projects">Proyectos</Link>
            <Link href="/contact">Contacto</Link>
          </FooterColumn>

          {/* SERVICES */}
          <FooterColumn title="Servicios">
            <span>Webs que convierten</span>
            <span>Captación automatizada</span>
            <span>Branding digital</span>
          </FooterColumn>

          {/* CONTACT */}
          <FooterColumn title="Contacto">
            <span>España</span>
            <a href="/contact" className="text-primary">
              Solicitar propuesta →
            </a>
          </FooterColumn>
        </div>

        {/* BOTTOM */}
        <FooterBottom />
      </div>
    </footer>
  );
}
