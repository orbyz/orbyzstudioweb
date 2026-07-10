import "server-only";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Proyectos nuevos de Supabase (post nov-2025) usan sb_secret_... en vez del
// service_role key JWT legacy. Mismo privilegio (bypassa RLS), solo cambia
// el formato del string. NUNCA exponer esta variable al navegador.
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseSecretKey) {
  console.warn(
    "⚠️ Supabase (server) no está configurado: define NEXT_PUBLIC_SUPABASE_URL y SUPABASE_SECRET_KEY",
  );
}

// ⚠️ SOLO usar dentro de API routes / Server Components.
// La secret key bypassa RLS por completo — nunca exponer al cliente.
export const supabaseServer = createClient(
  supabaseUrl ?? "",
  supabaseSecretKey ?? "",
);
