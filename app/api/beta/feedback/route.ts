export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { sanitizeAnalyticsText } from "@/lib/betaAnalytics";
import type { BetaFeedbackPayload } from "@/lib/betaAnalytics";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null) as Partial<BetaFeedbackPayload> | null;
    const rating = Number(body?.rating);
    const anonymousId = sanitizeAnalyticsText(body?.anonymousId, 120);
    const sessionId = sanitizeAnalyticsText(body?.sessionId, 120);
    const triggerReason = sanitizeAnalyticsText(body?.triggerReason, 30) || "manual";

    if (!anonymousId || !sessionId || !Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Invalid feedback." }, { status: 400 });
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    const { error } = await supabase.from("beta_feedback").insert({
      user_id: user?.id ?? null,
      anonymous_id: anonymousId,
      session_id: sessionId,
      rating,
      most_useful_feature: sanitizeAnalyticsText(body?.mostUsefulFeature, 160),
      biggest_issue: sanitizeAnalyticsText(body?.biggestIssue, 600),
      would_recommend: body?.wouldRecommend === true,
      trigger_reason: triggerReason,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ success: true, duplicate: true });
      }
      console.error("beta feedback insert error:", error);
      return NextResponse.json({ error: "Could not save feedback." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("beta feedback failed:", error);
    return NextResponse.json({ error: "Could not save feedback." }, { status: 500 });
  }
}
