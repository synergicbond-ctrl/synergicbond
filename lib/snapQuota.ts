// ---------------------------------------------------------------------------
// Snap & Solve daily-quota gate (the monetization boundary).
//
// - Pro users:  unlimited.
// - Free (signed-in) users:  SNAP_FREE_DAILY_LIMIT solves/day, then 402 paywall.
// - Guests (no auth):  not metered here in Phase 1 — covered only by the per-IP
//   rate limiter. Tightening guests to sign-in (or an IP/day cap) is a Phase 2
//   toggle. Documented as a known gap.
//
// Every Supabase call degrades OPEN (allow) on error so the product keeps
// working before the 003/004 migrations have run on prod.
// ---------------------------------------------------------------------------
import { createClient } from "@/lib/supabase/server";
import { isProActive } from "@/lib/subscription";

export const SNAP_FREE_DAILY_LIMIT = 5;

export interface SnapQuota {
  allowed: boolean;
  paywall: boolean;
  tier: "guest" | "free" | "pro";
  remaining: number | null; // null = unlimited / unknown
}

export async function checkAndConsumeSnapQuota(): Promise<SnapQuota> {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // Guests: allow (rate-limiter handles abuse). Not metered in Phase 1.
    if (!user) return { allowed: true, paywall: false, tier: "guest", remaining: null };

    // Pro: unlimited.
    if (await isProActive(supabase, user.id)) {
      return { allowed: true, paywall: false, tier: "pro", remaining: null };
    }

    // Free: count today's solves.
    const day = new Date().toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
    const { data: usage } = await supabase
      .from("snap_usage")
      .select("count")
      .eq("user_id", user.id)
      .eq("day", day)
      .maybeSingle();

    const used = usage?.count ?? 0;
    if (used >= SNAP_FREE_DAILY_LIMIT) {
      return { allowed: false, paywall: true, tier: "free", remaining: 0 };
    }

    // Consume one (upsert on the (user_id, day) primary key).
    await supabase
      .from("snap_usage")
      .upsert({ user_id: user.id, day, count: used + 1 }, { onConflict: "user_id,day" });

    return {
      allowed: true,
      paywall: false,
      tier: "free",
      remaining: SNAP_FREE_DAILY_LIMIT - (used + 1),
    };
  } catch (e) {
    console.error("snap quota check failed (degrading open):", e);
    return { allowed: true, paywall: false, tier: "guest", remaining: null };
  }
}
