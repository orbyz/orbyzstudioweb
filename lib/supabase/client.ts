import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Proyectos nuevos de Supabase (post nov-2025) usan sb_publishable_... en vez
// del anon key JWT legacy. Ambos cumplen el mismo rol (clave pública, baja
// privilegio, respeta RLS), solo cambia el formato del string.
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  console.warn(
    "⚠️ Supabase no está configurado: define NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
  );
}

// Cliente para uso en el navegador (Client Components).
// Solo puede insertar/actualizar filas de client_briefs (ver RLS en la migración SQL),
// nunca leer datos de otros clientes.
export const supabaseBrowser = createClient(
  supabaseUrl ?? "",
  supabasePublishableKey ?? "",
);
