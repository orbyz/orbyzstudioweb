import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Llama a esta ruta (por POST) para forzar que /blog se regenere al instante,
// en vez de esperar a la revalidación automática de 1 hora.
// Ejemplo: POST https://www.orbyzstudio.dev/api/revalidate?secret=TU_SECRETO
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  revalidatePath("/blog");
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
