// ---------------------------------------------------------------------------
// Subscription plan config + Pro-status check (shared by the paywall, the Snap
// quota gate, and the Razorpay routes). Amounts are in paise (INR).
// ---------------------------------------------------------------------------
import type { SupabaseClient } from "@supabase/supabase-js";
import { isPrivilegedById } from "@/lib/auth/roles";

export const PLANS = {
  pro_monthly: { amount: 14900, days: 30, label: "Pro Monthly" },   // ₹149
  pro_annual:  { amount: 99900, days: 365, label: "Pro Annual" },    // ₹999
} as const;

// Founder-approved single-program access pricing (in paise).
export const PROGRAM_ACCESS_PRICE_PAISE_BY_KEY: Record<string, number> = {
  "neet": 99900,
  "jee-main": 109900,
  "jee-advanced": 149900,
  "cbse:class-11": 49900,
  "icse:class-11": 49900,
  "isc:class-11": 49900,
  "state-boards:class-11": 49900,
  "cbse:class-12": 69900,
  "icse:class-12": 69900,
  "isc:class-12": 69900,
  "state-boards:class-12": 69900,
};

export type PlanId = keyof typeof PLANS;

export function isValidPlan(plan: unknown): plan is PlanId {
  return typeof plan === "string" && plan in PLANS;
}

// ─── "Coming Soon" programs ──────────────────────────────────────────────────
// Program keys whose DATA is kept (owner can still preview them) but that are
// NOT purchasable yet. State Boards will launch after CBSE and ISC stabilize.
// Enforced server-side (create-order / webhook) and in the pricing UI.
export const COMING_SOON_PROGRAM_KEYS: ReadonlySet<string> = new Set([
  "state-boards:class-11",
  "state-boards:class-12",
]);

export const COMING_SOON_NOTE =
  "State board coverage will be launched after CBSE and ISC stabilization.";

/** A program key that may be bought right now (not coming-soon). */
export function isSaleableProgram(programKey: string): boolean {
  return !COMING_SOON_PROGRAM_KEYS.has(programKey);
}

/** Returns true if the user has an active, unexpired subscription. Degrades to
 *  false on any error (e.g. table not migrated yet) so the app stays usable. */
export async function isProActive(supabase: SupabaseClient, userId: string): Promise<boolean> {
  // ── Role-based all-access (owner/admin) — the SINGLE privilege gate. ────────
  // Centralized in lib/auth/access.ts (profiles.role), no email hardcoding.
  // getUserEntitlements() derives ALL program keys from this, so this single
  // line also grants every program entitlement to privileged users.
  if (await isPrivilegedById(supabase, userId)) return true;
  // ───────────────────────────────────────────────────────────────────────────
  try {
    const { data } = await supabase
      .from("subscriptions")
      .select("status, expires_at")
      .eq("user_id", userId)
      .eq("status", "active")
      .gte("expires_at", new Date().toISOString())
      .limit(1)
      .maybeSingle();
    return !!data;
  } catch {
    return false;
  }
}
