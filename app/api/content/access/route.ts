export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Free chapters per category — students can access these without subscription
const FREE_CHAPTERS: Record<string, string[]> = {
  physical: ["mole-concept", "atomic-structure"],
  organic: ["general-organic-chemistry", "hydrocarbons"],
  inorganic: ["periodic-table", "chemical-bonding"],
  spectroscopy: ["introduction-to-spectroscopy"],
  analytical: ["gravimetric-analysis"],
};

const ALL_FREE_CHAPTERS = Object.values(FREE_CHAPTERS).flat();

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const chapterId = url.searchParams.get("chapterId");
    const feature = url.searchParams.get("feature"); // notes | assignment | exam | tutor

    if (!chapterId && !feature) {
      return NextResponse.json({ error: "chapterId or feature required" }, { status: 400 });
    }

    // Check if chapter is free
    const isChapterFree = chapterId ? ALL_FREE_CHAPTERS.includes(chapterId) : false;
    if (isChapterFree) {
      return NextResponse.json({ access: true, reason: "free_chapter", tier: "free" });
    }

    // Get user subscription
    let userId: string | null = null;
    let subscriptionActive = false;

    try {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();
      userId = user?.id ?? null;

      if (userId) {
        const { data: sub } = await supabase
          .from("subscriptions")
          .select("status, expires_at, plan")
          .eq("user_id", userId)
          .eq("status", "active")
          .gte("expires_at", new Date().toISOString())
          .order("expires_at", { ascending: false })
          .limit(1)
          .single();

        subscriptionActive = !!sub;
      }
    } catch {}

    if (!userId) {
      return NextResponse.json({
        access: false,
        reason: "not_logged_in",
        tier: "guest",
        freeChapters: ALL_FREE_CHAPTERS,
      });
    }

    if (!subscriptionActive) {
      return NextResponse.json({
        access: false,
        reason: "no_subscription",
        tier: "free",
        freeChapters: ALL_FREE_CHAPTERS,
        upgradeMessage: "Upgrade to SYNERGIC BOND Pro to unlock all 33 chapters + unlimited AI",
      });
    }

    return NextResponse.json({
      access: true,
      reason: "subscription_active",
      tier: "pro",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
