// ─────────────────────────────────────────────────────────────────────────────
// Server-side route guards — the SINGLE shared mechanism for gating premium and
// entitlement-protected surfaces (notes, board dashboards, admin). Called from
// Server Components / layouts so authorization runs BEFORE any protected payload
// is rendered or streamed to the client.
//
// SERVER-ONLY: imports lib/supabase/server (next/headers) and lib/auth/access
// (entitlements → next/headers). Never import from a client component.
//
// Truth model (never fabricated):
//   • Privileged (owner/admin, profiles.role) ⇒ unrestricted — bypasses paywall
//     and entitlement checks.
//   • Premium content ⇒ requires an active Pro subscription (isProActive).
//   • Program content ⇒ requires the matching purchased entitlement key
//     (hasProgramAccess), which also grants Pro/privileged all-access. Per-program
//     isolation is enforced by the exact key — one purchase never unlocks another.
//   • Redirects: signed-out → /auth/signin?next=…; signed-in-but-unentitled →
//     /pricing (scoped to the target program where applicable).
// ─────────────────────────────────────────────────────────────────────────────
import { redirect, notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getAccessUser, isPrivileged, type AccessUser } from "@/lib/auth/roles";
import { isProActive } from "@/lib/subscription";
import { hasProgramAccess } from "@/lib/access/entitlements";
import { signinRedirect } from "@/lib/access/contentAccess";

/**
 * Owner/admin only. Non-privileged visitors get a 404 so the route is not even
 * discoverable — mirrors the existing /dashboard/subscription/admin pattern.
 */
export async function requireAdmin(): Promise<AccessUser> {
  const supabase = await createClient();
  const user = await getAccessUser(supabase);
  if (!isPrivileged(user)) {
    notFound();
  }
  return user!;
}

/**
 * Premium (Pro all-access) content gate. Signed-out users are sent to sign-in
 * (returning to `path`); signed-in users without an active Pro plan are sent to
 * pricing. Privileged users bypass (isProActive short-circuits on role).
 */
export async function requirePaidContent(path: string): Promise<void> {
  const supabase = await createClient();
  const user = await getAccessUser(supabase);
  if (!user) {
    redirect(signinRedirect(path));
  }
  if (isPrivileged(user)) return;
  const pro = await isProActive(supabase, user.id);
  if (!pro) {
    redirect(`/pricing?next=${encodeURIComponent(path)}`);
  }
}

/**
 * Purchased-program entitlement gate (e.g. "cbse:class-11", "neet"). Signed-out
 * users go to sign-in; users lacking the specific entitlement (and not Pro /
 * privileged) go to pricing scoped to that program. hasProgramAccess enforces
 * per-program isolation: a purchase for one program never satisfies another.
 */
export async function requireProgramEntitlement(programKey: string, path: string): Promise<void> {
  const supabase = await createClient();
  const user = await getAccessUser(supabase);
  if (!user) {
    redirect(signinRedirect(path));
  }
  if (isPrivileged(user)) return;
  const ok = await hasProgramAccess(programKey);
  if (!ok) {
    redirect(`/pricing?program=${encodeURIComponent(programKey)}&next=${encodeURIComponent(path)}`);
  }
}
