"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import logoImg from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="relative bg-custom-black">
      <div className="mx-auto min-h-[300px] max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3 items-center">
        {/* Left: Brand & Social */}
        <section className="flex flex-col gap-4">
          <Link href="/" className="flex font-bold">
            <Image src={logoImg} alt="logo" width={48} height={48} />
            <span className="md:w-auto self-center text-lg font-semibold whitespace-nowrap text-custom-white">
              ORBYZ Studio
            </span>
          </Link>
          <p className="text-sm text-custom-white">
            Branding, Marketing Digital y Desarrollo Web
          </p>

          <div className="flex gap-4 text-2xl">
            <a
              href="https://instagram.com/orbyzstudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 transition"
            >
              <Icon icon="mdi:instagram" ssr={true} />
            </a>

            <a
              href="https://linkedin.com/company/orbyzstudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-sky-400 transition"
            >
              <Icon icon="mdi:linkedin" width="24" height="24" />
            </a>

            <a
              href="https://wa.me/message/DN2V2QSDWSRJA1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-green-400 transition"
            >
              <Icon icon="ic:baseline-whatsapp" width="24" height="24" />
            </a>

            <a
              href="mailto:contact@orbyzstudio.dev"
              aria-label="Email"
              className="hover:text-custom-green transition"
            >
              <Icon icon="material-symbols:mail" width="24" height="24" />
            </a>
          </div>
        </section>

        {/* Center: Newsletter */}
        <section className="md:col-start-2">
          <h3 className="mb-2">
            Obtenga actualizaciones sobre marca, marketing, web y seguridad.
          </h3>

          <form
            action="/api/newsletter" // create this API route or use a provider
            method="POST"
            className="flex gap-2 "
          >
            <input
              name="email"
              type="email"
              placeholder="tu@email.com"
              required
              className="w-full rounded-md px-3 py-2 text-custom-white border border-custom-green"
            />
            <button
              type="submit"
              className="rounded-md bg-custom-green px-4 py-2 text-sm font-medium text-custom-black hover:bg-custom-greenhover hover:text-custom-black transition"
            >
              Suscribir
            </button>
          </form>
        </section>

        {/* Right: Legal */}
        <section className="md:text-right text-sm text-custom-white">
          <h3 className="mb-2 font-semibold text-lg">Derechos legales</h3>
          <h4 className="mb-2 font-semibold">
            <Link
              href="/legal/privacy-policy"
              className=" transition hover:text-custom-green"
            >
              Política de privacidad
            </Link>
          </h4>
          <h4 className="mb-2 font-semibold hover:text-custom-green">
            <Link
              href="/legal/terms-conditions"
              className=" transition hover:text-custom-green"
            >
              Términos y condiciones
            </Link>
          </h4>
          <h4 className="mb-2 font-semibold hover:text-custom-green">
            <Link
              href="/legal/cookies-policy"
              className=" transition hover:text-custom-green"
            >
              Política de cookies
            </Link>
          </h4>
        </section>
      </div>
      <div className="flexflex-row md:max-w-[1280px] mx-auto items-center md:justify-center">
        <p className="m-2 text-center">
          © 2025 Orbyz Studio. Todos los derechos reservados.
        </p>
        <p className="m-2 text-center">Hecho con ❤️ en España</p>
      </div>
    </footer>
  );
}
