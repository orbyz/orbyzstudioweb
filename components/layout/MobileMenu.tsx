"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/constants";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: Props) {
  return (
    <div
      className={`fixed inset-0 z-[60] md:hidden ${
        open ? "visible" : "invisible"
      }`}
    >
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* PANEL */}
      <aside
        className={`relative w-4/5 max-w-sm h-full bg-[var(--color-bg)] p-6 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="mt-10 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={onClose}
              className="text-lg font-semibold text-text hover:text-primary transition"
            >
              {link.name}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            onClick={onClose}
            className="btn btn-primary mt-4 text-center"
          >
            Empecemos
          </Link>
        </ul>
      </aside>
    </div>
  );
}
