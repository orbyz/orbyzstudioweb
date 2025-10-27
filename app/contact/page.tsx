"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", whatsapp: "", message: "" });
      } else throw new Error("Error al enviar");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-40 bg-gradient-to-b from-neutral-950 to-neutral-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center mb-12"
      >
        <h1 className="text-4xl text-shadow-custom-white md:text-5xl font-bold mb-4">
          Conversemos sobre{" "}
          <span className="text-custom-green">tu próximo proyecto 🚀</span>
        </h1>
        <p className="text-custom-white ">
          Ya sea que necesites una identidad visual, una web profesional o una
          estrategia digital integral, estamos listos para escucharte y llevar
          tu marca al siguiente nivel.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full max-w-lg bg-neutral-800/40 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-custom-green"
      >
        <div className="grid gap-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            required
            className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:border-custom-green outline-none transition"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            required
            className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:border-custom-green outline-none transition"
          />

          <input
            type="tel"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="Número de WhatsApp (con código de país)"
            required
            className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:border-custom-green outline-none transition"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Cuéntanos un poco sobre tu proyecto o idea..."
            required
            rows={5}
            className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:border-custom-green outline-none transition resize-none"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex items-center justify-center gap-2 bg-custom-green hover:bg-custom-greenhover transition rounded-lg p-3 text-custom-black font-semibold"
          >
            {status === "loading" ? (
              "Enviando..."
            ) : (
              <>
                <Send className="w-5 h-5" />
                Enviar mensaje
              </>
            )}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center mt-2">
              ✅ ¡Mensaje enviado con éxito! Te responderemos pronto.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center mt-2">
              ❌ Hubo un error al enviar. Intenta de nuevo más tarde.
            </p>
          )}
        </div>
      </motion.form>
    </section>
  );
}
