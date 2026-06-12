import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

// 🔐 Escape HTML (seguridad)
function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  try {
    // ✅ Verificar configuración de Resend
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("❌ RESEND_API_KEY no configurada");

      return NextResponse.json(
        { error: "Servicio de correo no configurado" },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const { name, email, whatsapp, message, company } = body;

    // 🛑 Honeypot anti-spam
    if (company) {
      return NextResponse.json({ success: true });
    }

    // ✅ Validaciones
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "Nombre inválido" }, { status: 400 });
    }

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Mensaje demasiado corto" },
        { status: 400 },
      );
    }

    // 📩 Envío email
    const { data, error } = await resend.emails.send({
      from: "OrByZ Studio <contact@orbyzstudio.dev>",
      to: ["orbyzstudio.dev@gmail.com"],
      subject: `🔥 Nuevo lead: ${escapeHtml(name)}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <h2>Nuevo lead - OrByZ Studio</h2>

          <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp || "-")}</p>

          <hr />

          <p><strong>Mensaje:</strong></p>
          <p>${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Error Resend:", error);

      return NextResponse.json(
        { error: "Error enviando correo" },
        { status: 500 },
      );
    }

    console.log("📩 Lead recibido:", {
      name,
      email,
      whatsapp,
      id: data?.id,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Error general:", error);

    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 },
    );
  }
}
