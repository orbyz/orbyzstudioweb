import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequest {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactRequest;
    const { name, email, whatsapp, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios" },
        { status: 400 },
      );
    }

    // Envía el correo con Resend
    const { data, error } = await resend.emails.send({
      from: "ORBYZ Studio <contact@orbyzstudio.dev>",
      to: ["orbyzstudio.dev@gmail.com"],
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo mensaje desde ORBYZ Studio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
      reply_to: email,
    });

    if (error) {
      console.error("❌ Error Resend:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("✅ Correo enviado:", data?.id);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ Error general:", error);
    return NextResponse.json(
      { error: "Error al enviar correo" },
      { status: 500 },
    );
  }
}
