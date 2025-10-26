"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          La diferencia que tu marca estaba esperando
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto text-lg mb-12 text-neutral-600 dark:text-neutral-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          En <strong>ORBYZ Studio</strong> combinamos creatividad estratégica,
          dominio técnico y un enfoque orientado a resultados. Creamos
          identidades memorables, estrategias de marketing que conectan y sitios
          web que convierten.
          <br />
          <br />
          Si buscas destacar, construir una presencia digital sólida y evitar
          soluciones improvisadas, estás en el lugar indicado.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              title: "Identidad coherente",
              desc: "Más que un logo, una historia visual que conecta con tu público.",
            },
            {
              title: "Marketing con métricas",
              desc: "Cada acción, un impacto medible que impulsa tus resultados.",
            },
            {
              title: "Tecnología a tu servicio",
              desc: "Sitios rápidos, seguros y escalables, pensados para durar.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-2xl bg-white/70 dark:bg-neutral-800 shadow-sm border border-neutral-200 dark:border-neutral-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-black dark:bg-custom-green dark:text-black rounded-full hover:opacity-90 transition"
          >
            Hablemos de tu próximo proyecto
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
