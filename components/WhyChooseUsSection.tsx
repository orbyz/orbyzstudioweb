"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-custom-black text-custom-green">
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
          className="max-w-3xl mx-auto text-lg mb-12 text-custom-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          En <strong className="text-custom-green">ORBYZ Studio</strong>{" "}
          combinamos creatividad estratégica, dominio técnico y un enfoque
          orientado a resultados. Creamos identidades memorables, estrategias de
          marketing que conectan y sitios web que convierten.
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
              className="p-8 rounded-2xl bg-custom-black shadow-sm shadow-custom-green border border-custom-green"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-custom-white">{item.desc}</p>
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
            className="inline-flex items-center gap-2 rounded-lg bg-custom-green px-6 py-3 font-semibold text-black shadow-md hover:bg-custom-greenhover hover:shadow-lg transition"
          >
            Hablemos de tu próximo proyecto
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
