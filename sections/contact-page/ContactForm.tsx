"use client";

import { useState } from "react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget; // 👈 GUARDAR REFERENCIA

    setLoading(true);
    setStatus("idle");

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      message: formData.get("message"),
      company: formData.get("company"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("success");
        form.reset(); // 👈 USAR REFERENCIA SEGURA
      } else {
        setStatus("error");
        setErrorMsg(result.error || "Error al enviar");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Error de conexión");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      {/* HONEYPOT */}
      <input
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <input
        name="name"
        placeholder="Nombre"
        required
        className="w-full p-3 border border-default rounded-lg bg-transparent text-text"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full p-3 border border-default rounded-lg bg-transparent text-text"
      />

      <input
        name="whatsapp"
        placeholder="WhatsApp (opcional)"
        className="w-full p-3 border border-default rounded-lg bg-transparent text-text"
      />

      <textarea
        name="message"
        placeholder="¿Qué problema quieres resolver?"
        required
        rows={4}
        className="w-full p-3 border border-default rounded-lg bg-transparent text-text"
      />

      <button disabled={loading} className="btn btn-primary w-full">
        {loading ? "Enviando..." : "Solicitar propuesta"}
      </button>

      {/* SUCCESS */}
      {status === "success" && (
        <p className="text-sm text-primary">
          ✔ Mensaje enviado correctamente. Te responderemos en menos de 24h.
        </p>
      )}

      {/* ERROR */}
      {status === "error" && (
        <p className="text-sm text-red-500">❌ {errorMsg}</p>
      )}

      {/* TRUST */}
      <p className="text-sm text-muted">
        Respuesta en menos de 24h · Sin compromiso
      </p>
    </form>
  );
}
