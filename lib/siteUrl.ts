// Canonical, production-safe site URL for auth email redirects (password reset,
// email confirmation / magic link). Supabase sends these links by email, so the
// redirect target must be the real production origin — never a localhost picked
// up from window.location during local dev. Set NEXT_PUBLIC_SITE_URL in the
// environment (Vercel) to override; falls back to the production domain.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.synergicbond.com"
).replace(/\/+$/, "");

/** Build an absolute URL on the canonical site origin. */
export function siteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
