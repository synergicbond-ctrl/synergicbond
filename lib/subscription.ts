// ---------------------------------------------------------------------------
// Subscription plan config + Pro-status check (shared by the paywall, the Snap
// quota gate, and the Razorpay routes). Amounts are in paise (INR).
// ---------------------------------------------------------------------------
import type { SupabaseClient } from "@supabase/supabase-js";

export const PLANS = {
  pro_monthly: { amount: 14900, days: 30, label: "Pro Monthly" },   // ₹149
  pro_annual:  { amount: 99900, days: 365, label: "Pro Annual" },    // ₹999
} as const;

export type PlanId = keyof typeof PLANS;

export function isValidPlan(plan: unknown): plan is PlanId {
  return typeof plan === "string" && plan in PLANS;
}

/** Returns true if the user has an active, unexpired subscription. Degrades to
 *  false on any error (e.g. table not migrated yet) so the app stays usable. */
export async function isProActive(supabase: SupabaseClient, userId: string): Promise<boolean> {
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
