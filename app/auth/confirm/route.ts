import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import type { EmailOtpType } from "@supabase/supabase-js";

// Server-side email OTP confirmation (password recovery, email confirm / magic
// link). Uses verifyOtp(token_hash) — unlike the PKCE ?code= flow this needs NO
// locally-stored verifier, so a link opened from the Gmail app, a different
// browser, or another device still establishes the session. On success the
// session is written to cookies and the user is redirected to `next`.
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const token_hash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type") as EmailOtpType | null;
  const origin = url.origin;

  // Same-origin relative redirect only (open-redirect guard).
  const rawNext = url.searchParams.get("next") ?? "/dashboard";
  const next = rawNext.startsWith("/") && !rawNext.startsWith("//") ? rawNext : "/dashboard";

  if (token_hash && type) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (supabaseUrl && supabaseAnonKey) {
      const cookieStore = await cookies();
      const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          },
        },
      });
      const { error } = await supabase.auth.verifyOtp({ type, token_hash });
      if (!error) {
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  // Missing / expired / already-used token → reset page shows the clear
  // "expired or invalid" message immediately (no spinner wait).
  return NextResponse.redirect(`${origin}/reset-password?error=invalid`);
}
