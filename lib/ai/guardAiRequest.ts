// ─────────────────────────────────────────────────────────────────────────────
// Centralized guard for AI routes that consume a paid provider (Gemini / OpenAI).
//
// One pattern for every such route: authenticate, then apply the shared in-memory
// rate limiter (lib/rateLimit) keyed per user (IP fallback). This is deliberately
// the SAME limiter Snap & Solve uses — no divergent/incompatible copies — and its
// production limitation is documented there and in the handover (per-instance;
// upgrade to Vercel KV / Upstash for a hard cross-lambda quota).
//
// Returns a discriminated union so callers do exactly:
//     const gate = await guardAiRequest(req);
//     if (!gate.ok) return gate.response;   // 401 or 429, no provider details
//     // …use gate.userId / gate.supabase…
//
// SERVER-ONLY (imports lib/supabase/server → next/headers). Never leaks provider
// errors or secrets: only generic client-safe messages are returned.
// ─────────────────────────────────────────────────────────────────────────────
import { NextResponse } from "next/server";
import type { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import { rateLimit, clientIp } from "@/lib/rateLimit";

export interface AiGuardOk {
  ok: true;
  userId: string;
  supabase: SupabaseClient;
}
export interface AiGuardDenied {
  ok: false;
  response: NextResponse;
}
export type AiGuardResult = AiGuardOk | AiGuardDenied;

export interface AiGuardOptions {
  /** Requests allowed per window per user. Default 30. */
  limit?: number;
  /** Window length in ms. Default 60s. */
  windowMs?: number;
  /** Namespace so different tools don't share a counter. Default "ai". */
  bucket?: string;
  /**
   * Allow unauthenticated callers (rare — only for routes explicitly and safely
   * intended as public). When true, the rate-limit key falls back to client IP.
   * Default false: sign-in required.
   */
  allowAnonymous?: boolean;
}

export async function guardAiRequest(
  request: Request,
  opts: AiGuardOptions = {},
): Promise<AiGuardResult> {
  const { limit = 30, windowMs = 60_000, bucket = "ai", allowAnonymous = false } = opts;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && !allowAnonymous) {
    return {
      ok: false,
      response: NextResponse.json(
        { error: "Please sign in to use this feature." },
        { status: 401 },
      ),
    };
  }

  const key = `${bucket}:${user?.id ?? clientIp(request)}`;
  const rl = rateLimit(key, limit, windowMs);
  if (!rl.ok) {
    return {
      ok: false,
      response: NextResponse.json(
        { error: "Too many requests. Please wait a moment and try again." },
        { status: 429, headers: { "Retry-After": String(rl.retryAfter) } },
      ),
    };
  }

  return { ok: true, userId: user?.id ?? "anonymous", supabase };
}
