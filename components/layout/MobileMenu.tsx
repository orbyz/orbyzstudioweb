"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/constants";

interface Props {
  onClose: () => void;
}

export function MobileMenu({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-[40] md:hidden">
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 transition-opacity duration-200 opacity-100"
      />

      {/* PANEL */}
      <aside
        className="
          absolute top-0 left-0 h-full
          w-4/5 max-w-sm
          bg-[var(--color-bg)]
          p-6
          transform
          animate-[slideIn_0.2s_ease-out]
        "
      >
        <ul className="mt-16 flex flex-col gap-6">
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
