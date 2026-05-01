"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../../constants";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [open, setOpen] = useState(false);

  // SCROLL BEHAVIOR
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;

          if (currentScroll > lastScroll && currentScroll > 80) {
            setVisible(false);
          } else {
            setVisible(true);
          }

          setLastScroll(currentScroll);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 backdrop-blur-md ${
          visible && !open ? "translate-y-0" : "-translate-y-full"
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

            {/* DESKTOP NAV */}
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
              <div className="relative h-5 w-6">
                <span
                  className={`absolute left-0 h-0.5 w-full bg-white transition-all duration-300 ${
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-white transition-opacity duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-full bg-white transition-all duration-300 ${
                    open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* OVERLAY */}
        <div
          onClick={() => setOpen(false)}
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
                onClick={() => setOpen(false)}
                className="text-lg font-semibold text-white hover:text-primary transition"
              >
                {link.name}
              </Link>
            ))}

            {/* CTA MOBILE */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-4 text-center"
            >
              Empecemos
            </Link>
          </ul>
        </aside>
      </div>
    </>
  );
}
