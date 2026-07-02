export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { betaEventSet, sanitizeAnalyticsText, sanitizeMetadata } from "@/lib/betaAnalytics";
import type { BetaEventPayload } from "@/lib/betaAnalytics";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null) as Partial<BetaEventPayload> | null;
    const eventName = sanitizeAnalyticsText(body?.eventName, 80);
    const anonymousId = sanitizeAnalyticsText(body?.anonymousId, 120);
    const sessionId = sanitizeAnalyticsText(body?.sessionId, 120);
    const route = sanitizeAnalyticsText(body?.route, 200) || null;

    if (!betaEventSet.has(eventName) || !anonymousId || !sessionId) {
      return NextResponse.json({ error: "Invalid analytics event." }, { status: 400 });
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    const { error } = await supabase.from("beta_events").insert({
      user_id: user?.id ?? null,
      anonymous_id: anonymousId,
      session_id: sessionId,
      event_name: eventName,
      route,
      metadata: sanitizeMetadata(body?.metadata),
    });

    if (error) {
      console.error("beta event insert error:", error);
      return NextResponse.json({ error: "Could not save analytics event." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("beta track failed:", error);
    return NextResponse.json({ error: "Could not save analytics event." }, { status: 500 });
  }
}
