export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

type BetaEventRow = {
  user_id: string | null;
  anonymous_id: string;
  session_id: string;
  event_name: string;
  created_at: string;
  metadata: Record<string, unknown> | null;
};

type FeedbackRow = {
  id: string;
  rating: number;
  created_at: string;
};

function identity(row: BetaEventRow) {
  return row.user_id ?? row.anonymous_id;
}

export async function GET(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createAdminClient();
  if (!admin) {
    return NextResponse.json({ error: "Service role not configured." }, { status: 503 });
  }

  const url = new URL(req.url);
  const days = [1, 7, 30].includes(Number(url.searchParams.get("days"))) ? Number(url.searchParams.get("days")) : 7;
  const since = new Date(Date.now() - days * 86_400_000).toISOString();

  const [{ data: events, error: eventsError }, { data: feedback, error: feedbackError }, { count: paidConversions }] =
    await Promise.all([
      admin.from("beta_events").select("user_id, anonymous_id, session_id, event_name, created_at, metadata").gte("created_at", since),
      admin.from("beta_feedback").select("id, rating, created_at").gte("created_at", since),
      admin.from("subscriptions").select("user_id", { count: "exact", head: true }).eq("status", "active").gte("expires_at", new Date().toISOString()),
    ]);

  if (eventsError || feedbackError) {
    console.error("beta analytics query failed:", eventsError || feedbackError);
    return NextResponse.json({ error: "Could not load beta analytics." }, { status: 500 });
  }

  const typedEvents = (events ?? []) as BetaEventRow[];
  const typedFeedback = (feedback ?? []) as FeedbackRow[];
  const identities = new Set(typedEvents.map(identity));
  const sessions = new Set(typedEvents.map((event) => event.session_id));
  const datesByIdentity = new Map<string, Set<string>>();

  for (const event of typedEvents) {
    const key = identity(event);
    const date = event.created_at.slice(0, 10);
    const dates = datesByIdentity.get(key) ?? new Set<string>();
    dates.add(date);
    datesByIdentity.set(key, dates);
  }

  const durations = typedEvents
    .filter((event) => event.event_name === "session_end")
    .map((event) => Number(event.metadata?.durationSeconds))
    .filter((duration) => Number.isFinite(duration) && duration > 0);

  const averageSessionDurationSeconds = durations.length
    ? Math.round(durations.reduce((sum, duration) => sum + duration, 0) / durations.length)
    : 0;

  const countEvent = (name: string) => typedEvents.filter((event) => event.event_name === name).length;

  return NextResponse.json({
    days,
    totals: {
      totalUsers: identities.size,
      activeUsers: identities.size,
      returningUsers: [...datesByIdentity.values()].filter((dates) => dates.size > 1).length,
      totalSolves: countEvent("snap_solve_completed"),
      aiSolves: countEvent("snap_solve_completed"),
      searches: countEvent("search"),
      sessions: sessions.size,
      averageSessionDurationSeconds,
      feedbackCount: typedFeedback.length,
      paidConversions: paidConversions ?? 0,
    },
    recentFeedback: typedFeedback.slice(0, 10),
    eventCounts: Object.fromEntries(
      [...new Set(typedEvents.map((event) => event.event_name))]
        .sort()
        .map((name) => [name, countEvent(name)])
    ),
  });
}
