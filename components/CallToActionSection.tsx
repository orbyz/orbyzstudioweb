"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToActionSection() {
  return (
    <section className="py-28 bg-gradient-to-br from-custom-black via-neutral-900 to-custom-black text-custom-green text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ¿Listo para marcar la diferencia?
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-xl mb-12 text-custom-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          En <strong className="text-custom-green">ORBYZ Studio</strong> te
          acompañamos desde la idea hasta la ejecución. Agenda una consultoría
          sin compromiso y descubre lo que tu marca puede alcanzar.
        </motion.p>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-custom-green px-6 py-3 font-semibold text-custom-black shadow-md hover:bg-custom-greenhover hover:shadow-lg transition"
          >
            Comenzar ahora
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
