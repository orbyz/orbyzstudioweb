import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseServer } from "@/lib/supabase/server";
import { BRIEF_FIELDS } from "@/features/brief/briefQuestions";

export const dynamic = "force-dynamic";

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("❌ RESEND_API_KEY no configurada");
      return NextResponse.json(
        { error: "Servicio de correo no configurado" },
        { status: 500 },
      );
    }

    const { id } = await req.json();

    if (!id || typeof id !== "string") {
      return NextResponse.json({ error: "id inválido" }, { status: 400 });
    }

    // Usa la service role key: puede leer el brief sin importar las policies de RLS.
    const { data: brief, error: fetchError } = await supabaseServer
      .from("client_briefs")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchError || !brief) {
      console.error("❌ Brief no encontrado:", fetchError);
      return NextResponse.json({ error: "Brief no encontrado" }, { status: 404 });
    }

    // Evita reenvíos duplicados si el cliente llama al endpoint más de una vez.
    if (brief.notified) {
      return NextResponse.json({ success: true, skipped: true });
    }

    const answers: Record<string, string> = brief.answers ?? {};

    const rowsHtml = BRIEF_FIELDS.map((field) => {
      const value = answers[field.id];
      if (!value) return "";
      return `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #27272a;color:#6B6259;font-size:13px;white-space:nowrap;vertical-align:top;">
            ${escapeHtml(field.section)}
          </td>
          <td style="padding:8px 12px;border-bottom:1px solid #27272a;">
            <strong>${escapeHtml(field.label)}</strong><br/>
            ${escapeHtml(value).replace(/\n/g, "<br/>")}
          </td>
        </tr>
      `;
    }).join("");

    const resend = new Resend(apiKey);

    const companyName = answers.company_name || "Sin nombre";
    const contactEmail = answers.contact_email;

    const { error: sendError } = await resend.emails.send({
      from: "OrByZ Studio <contact@orbyzstudio.dev>",
      to: ["orbyzstudio.dev@gmail.com"],
      subject: `📋 Nuevo brief completado: ${escapeHtml(companyName)}`,
      replyTo: contactEmail || undefined,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <h2>Nuevo brief de cliente</h2>
          <p><strong>Empresa:</strong> ${escapeHtml(companyName)}</p>
          <p><strong>Contacto:</strong> ${escapeHtml(answers.contact_name || "-")}</p>
          <p><strong>Email:</strong> ${escapeHtml(contactEmail || "-")}</p>
          <hr />
          <table style="border-collapse:collapse;width:100%;">
            ${rowsHtml}
          </table>
        </div>
      `,
    });

    if (sendError) {
      console.error("❌ Error Resend:", sendError);
      return NextResponse.json({ error: "Error enviando correo" }, { status: 500 });
    }

    await supabaseServer
      .from("client_briefs")
      .update({ notified: true })
      .eq("id", id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Error general:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
