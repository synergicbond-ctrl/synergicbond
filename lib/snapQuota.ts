// ---------------------------------------------------------------------------
// Snap & Solve daily-quota gate (the monetization boundary).
//
// - Pro users:  unlimited.
// - Free (signed-in) users:  SNAP_FREE_DAILY_LIMIT solves/day, then 402 paywall.
// - Guests (no auth):  blocked — must create a free account to use Snap & Solve.
//
// Quota errors fail closed so Snap & Solve cannot bypass the free-tier limit.
// ---------------------------------------------------------------------------
import { createClient } from "@/lib/supabase/server";
import { isProActive } from "@/lib/subscription";

export const SNAP_FREE_DAILY_LIMIT = 5;

export interface SnapQuota {
  allowed: boolean;
  paywall: boolean;
  tier: "guest" | "free" | "pro";
  remaining: number | null; // null = unlimited / unknown
  reason?: "quota_error";
}

export async function checkAndConsumeSnapQuota(): Promise<SnapQuota> {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // Guests must sign in — a free account gives 5 solves/day at no cost.
    if (!user) return { allowed: false, paywall: false, tier: "guest", remaining: null };

    // Pro: unlimited.
    if (await isProActive(supabase, user.id)) {
      return { allowed: true, paywall: false, tier: "pro", remaining: null };
    }

    // Free: count today's solves.
    const day = new Date().toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
    const { data: usage, error: usageError } = await supabase
      .from("snap_usage")
      .select("count")
      .eq("user_id", user.id)
      .eq("day", day)
      .maybeSingle();

    if (usageError) throw usageError;

    const used = usage?.count ?? 0;
    if (used >= SNAP_FREE_DAILY_LIMIT) {
      return { allowed: false, paywall: true, tier: "free", remaining: 0 };
    }

    // Consume one (upsert on the (user_id, day) primary key).
    const { error: upsertError } = await supabase
      .from("snap_usage")
      .upsert({ user_id: user.id, day, count: used + 1 }, { onConflict: "user_id,day" });

    if (upsertError) throw upsertError;

    return {
      allowed: true,
      paywall: false,
      tier: "free",
      remaining: SNAP_FREE_DAILY_LIMIT - (used + 1),
    };
  } catch (e) {
    console.error("snap quota check failed:", e);
    return { allowed: false, paywall: false, tier: "free", remaining: null, reason: "quota_error" };
  }
}
