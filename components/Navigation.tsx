"use client";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../assets/logo.svg";
import { NAV_LINKS } from "../constants";
import { clsx } from "clsx";
import { useState } from "react";

export default function Navigation(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header className="relative bg-custom-white dark:bg-custom-black shadow">
      {/* Contenido desktop */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex text-xl font-bold">
          <Image src={logoImg} alt="logo" width={64} height={64} />
          <span className="md:w-auto self-center text-xl font-semibold whitespace-nowrap dark:text-custom-white">
            ORBYZ Studio
          </span>
        </Link>
        <ul className="hidden gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              as={""}
              href={link.path}
              key={link.name}
              className="block font-semibold text-custom-black rounded-sm hover:bg-custom-green md:hover:bg-transparent md:hover:text-custom-green md:px-3 dark:text-custom-white md:dark:hover:text-custom-green dark:hover:bg-custom-green dark:hover:text-custom-green md:dark:hover:bg-transparent dark:border-gray-800"
            >
              {link.name}
            </Link>
          ))}
        </ul>
        {/* Botón hamburguesa (mobile) */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-md md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <div className="relative h-5 w-6">
            <span
              className={clsx(
                "absolute left-0 h-0.5 w-full bg-custom-black dark:bg-custom-white transition-all duration-300",
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
              )}
            />
            <span
              className={clsx(
                "absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-custom-black dark:bg-custom-white transition-opacity duration-500",
                open && "opacity-0",
              )}
            />
            <span
              className={clsx(
                "absolute left-0 h-0.5 w-full bg-custom-black dark:bg-custom-white transition-all duration-300",
                open
                  ? "top-1/2 -translate-y-1/2 -rotate-45"
                  : "bottom-0 top-auto",
              )}
            />
          </div>
        </button>
      </nav>
      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={clsx(
          "fixed inset-0 z-40 grid md:hidden",
          open ? "visible" : "invisible",
        )}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={clsx(
            "absolute inset-0 bg-black/40 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Sidebar */}
        <aside
          className={clsx(
            "relative w-4/5 max-w-sm -translate-x-full bg-custom-white dark:bg-custom-black p-6 shadow-xl transition-transform duration-300",
            open && "translate-x-0",
          )}
        >
          <ul className="mt-6 flex flex-col gap-4 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                as={""}
                href={link.path}
                key={link.name}
                onClick={() => setOpen(false)}
                className="block text-center text-xl font-semibold text-custom-black rounded-sm hover:bg-custom-green md:hover:bg-transparent md:hover:text-custom-green md:px-3 dark:text-custom-white md:dark:hover:text-custom-green dark:hover:bg-custom-green dark:hover:text-custom-green md:dark:hover:bg-transparent dark:border-gray-800"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </aside>
      </div>
    </header>
  );
}
