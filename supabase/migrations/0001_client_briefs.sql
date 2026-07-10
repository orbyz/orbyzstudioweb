-- Tabla para almacenar las respuestas del formulario de brief de clientes (/brief)
create table if not exists public.client_briefs (
  id uuid primary key default gen_random_uuid(),
  status text not null default 'in_progress' check (status in ('in_progress', 'completed')),
  current_step integer not null default 0,
  answers jsonb not null default '{}'::jsonb,
  notified boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Mantener updated_at al día en cada cambio
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists client_briefs_set_updated_at on public.client_briefs;
create trigger client_briefs_set_updated_at
  before update on public.client_briefs
  for each row execute function public.set_updated_at();

-- Row Level Security
alter table public.client_briefs enable row level security;

-- El navegador (rol anon) puede CREAR un brief nuevo...
drop policy if exists "anon puede insertar brief" on public.client_briefs;
create policy "anon puede insertar brief"
  on public.client_briefs
  for insert
  to anon
  with check (true);

-- ...y ACTUALIZAR el brief mientras avanza en el wizard (autosave por paso).
-- El id (uuid) actúa como token de sesión: solo quien lo generó en su navegador lo conoce.
drop policy if exists "anon puede actualizar su brief" on public.client_briefs;
create policy "anon puede actualizar su brief"
  on public.client_briefs
  for update
  to anon
  using (true)
  with check (true);

-- A propósito NO se crea policy de SELECT para "anon":
-- así nadie con la anon key (pública, visible en el navegador) puede listar
-- o leer los briefs de otros clientes. Tú los consultas desde el Table Editor
-- de Supabase (usa tus credenciales de proyecto, no la anon key) y el correo
-- de notificación se arma con la service_role key desde el servidor.
