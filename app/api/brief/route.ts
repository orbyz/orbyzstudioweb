import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type Answers = Record<string, string>;

type SaveBriefPayload = {
  id: string;
  answers: Answers;
  currentStep: number;
  status: "in_progress" | "completed";
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizeAnswers(value: unknown): Answers | null {
  if (!isPlainObject(value)) return null;

  const entries = Object.entries(value).filter(
    (entry): entry is [string, string] => typeof entry[1] === "string",
  );

  return Object.fromEntries(entries);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<SaveBriefPayload>;
    const answers = normalizeAnswers(body.answers);

    if (!body.id || typeof body.id !== "string") {
      return NextResponse.json({ error: "id inválido" }, { status: 400 });
    }

    if (!answers) {
      return NextResponse.json({ error: "answers inválido" }, { status: 400 });
    }

    if (
      typeof body.currentStep !== "number" ||
      !Number.isInteger(body.currentStep) ||
      body.currentStep < 0
    ) {
      return NextResponse.json(
        { error: "currentStep inválido" },
        { status: 400 },
      );
    }

    if (body.status !== "in_progress" && body.status !== "completed") {
      return NextResponse.json({ error: "status inválido" }, { status: 400 });
    }

    const { error } = await supabaseServer.from("client_briefs").upsert(
      {
        id: body.id,
        answers,
        current_step: body.currentStep,
        status: body.status,
      },
      { onConflict: "id" },
    );

    if (error) {
      console.error("❌ Error guardando brief:", error);
      return NextResponse.json(
        { error: "No se pudo guardar el brief" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Error general guardando brief:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
