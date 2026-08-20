import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { requireEnv } from "../runtime-safe/env";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    requireEnv("NEXT_PUBLIC_SUPABASE_URL"),
    requireEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // createClient() is also used from Server Components, where
            // Next.js forbids writing cookies — Supabase still attempts a
            // session-refresh write there regardless. proxy.ts only refreshes
            // the session on protected routes (by design, to skip an extra
            // round trip for anonymous visitors), so on public pages this
            // write was always going to fail here; the only question is
            // whether it crashes the request or is silently skipped. Without
            // this guard it was an unhandled rejection that killed the whole
            // serverless instance (digest 2958656126, exit 128) instead of
            // just no-op'ing the one write that could never have succeeded
            // from this context anyway.
          }
        },
      },
    }
  );
}
