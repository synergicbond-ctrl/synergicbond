// ═══════════════════════════════════════════════════════════════════════════
// TEMPORARY CONTENT-DEVELOPMENT BYPASS. REMOVE BEFORE PUBLIC LAUNCH.
// ═══════════════════════════════════════════════════════════════════════════
// Single, self-contained feature-flag location for the founder's temporary
// all-access grant, used ONLY for content creation / QA while auth recovery is
// finished. This is the ONE place the bypass logic lives — delete this file and
// its two call sites (see removal steps) to remove it entirely.
//
// It grants access ONLY when ALL of these are true (server-side only):
//   1. process.env.NODE_ENV === "production"
//   2. process.env.FOUNDER_DEV_BYPASS === "true"
//   3. the authenticated user's email === FOUNDER_EMAIL
//
// Deliberately NOT any of the following (by design):
//   • no UI button        • no guest access       • no public route
//   • no query-param unlock • no localStorage      • no anonymous unlock
//
// Because it is keyed on the *authenticated* account's email and reads no
// client-supplied input, public users are unaffected and cannot trigger it.
// The env-flag check short-circuits first, so when the flag is off there is
// zero extra work and zero behaviour change for everyone.
// ═══════════════════════════════════════════════════════════════════════════

// TEMPORARY: founder account for the content-development bypass.
export const FOUNDER_EMAIL = "synergicbond@gmail.com";

// Minimal structural type so this accepts either the ssr server client or the
// @supabase/supabase-js client without an import coupling.
type AuthClient = {
  auth: {
    getUser: () => Promise<{ data: { user: { email?: string | null } | null } }>;
  };
};

/**
 * TEMPORARY CONTENT-DEVELOPMENT BYPASS. REMOVE BEFORE PUBLIC LAUNCH.
 * True only for the founder account, in production, with FOUNDER_DEV_BYPASS=true.
 */
export async function isFounderBypassActive(supabase: AuthClient): Promise<boolean> {
  // Disabled by default — flag OFF or non-production means an instant `false`
  // with no auth call, so nothing changes for normal users or normal deploys.
  if (process.env.FOUNDER_DEV_BYPASS !== "true") return false;
  if (process.env.NODE_ENV !== "production") return false;

  try {
    const { data: { user } } = await supabase.auth.getUser();
    return !!user?.email && user.email.toLowerCase() === FOUNDER_EMAIL;
  } catch {
    return false;
  }
}
