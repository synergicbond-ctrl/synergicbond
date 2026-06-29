import { createClient } from "@supabase/supabase-js";

// ---------------------------------------------------------------------------
// Service-role Supabase client — SERVER-ONLY, used exclusively by the Razorpay
// webhook to write subscription rows. The webhook has no user session, so RLS
// (auth.uid()) would block it; the service role bypasses RLS by design.
//
// NEVER import this into a client component or a client-reachable path. Returns
// null if SUPABASE_SERVICE_ROLE_KEY is not configured (caller degrades to 503).
// ---------------------------------------------------------------------------
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}
