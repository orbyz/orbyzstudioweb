"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { MobileMenu } from "./MobileMenu";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

  // SCROLL (optimizado)
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LOCK SCROLL cuando menu abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-200 backdrop-blur-md ${
          open
            ? "translate-y-0"
            : visible
              ? "translate-y-0"
              : "-translate-y-full"
        }`}
        style={{ backgroundColor: "rgba(13,17,23,0.7)" }}
      >
        <div className="border-b border-default">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="OrByZ Studio"
                width={70}
                height={70}
                priority
              />
              <span className="font-semibold text-xl">
                OrByZ <span className="text-primary">Studio</span>
              </span>
            </Link>

            {/* NAV DESKTOP */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="hover:text-primary transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <Link href="/contact" className="btn btn-primary">
                Empecemos
              </Link>
            </div>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-md md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <div className="relative h-5 w-6 text-text transform-gpu">
                <span
                  className={`absolute left-0 h-0.5 w-full bg-current transition-transform duration-200 ${
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-current transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-full bg-current transition-transform duration-200 ${
                    open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
