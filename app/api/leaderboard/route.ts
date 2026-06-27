export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(req: Request) {
  try {
    const supabase = await createClient();
    const url = new URL(req.url);
    const scope = url.searchParams.get("scope") || "global"; // global | weekly
    const limit = Math.min(parseInt(url.searchParams.get("limit") || "50"), 100);

    // Get current user
    const { data: { user } } = await supabase.auth.getUser();

    // Build leaderboard query from user_xp joined with profiles
    let query = supabase
      .from("user_xp")
      .select(`
        user_id,
        xp,
        xp_level,
        streak,
        last_active,
        profiles:user_id (
          full_name,
          exam_target
        )
      `)
      .order("xp", { ascending: false })
      .limit(limit);

    // Weekly scope — filter to users active in last 7 days
    if (scope === "weekly") {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      query = query.gte("last_active", weekAgo.toISOString().split("T")[0]);
    }

    const { data: leaderboard, error } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Format and add rank
    const ranked = (leaderboard || []).map((entry: any, index: number) => ({
      rank: index + 1,
      userId: entry.user_id,
      name: entry.profiles?.full_name || "Anonymous Student",
      examTarget: entry.profiles?.exam_target || "JEE",
      xp: entry.xp,
      level: entry.xp_level,
      streak: entry.streak,
      lastActive: entry.last_active,
      isCurrentUser: entry.user_id === user?.id,
    }));

    // Find current user's rank if they're outside top limit
    let currentUserRank = null;
    if (user) {
      const userEntry = ranked.find((r) => r.isCurrentUser);
      if (!userEntry) {
        const { data: userXp } = await supabase
          .from("user_xp")
          .select("xp, xp_level, streak")
          .eq("user_id", user.id)
          .single();

        if (userXp) {
          const { count } = await supabase
            .from("user_xp")
            .select("*", { count: "exact", head: true })
            .gt("xp", userXp.xp);

          const { data: profile } = await supabase
            .from("profiles")
            .select("full_name, exam_target")
            .eq("id", user.id)
            .single();

          currentUserRank = {
            rank: (count || 0) + 1,
            userId: user.id,
            name: profile?.full_name || "You",
            examTarget: profile?.exam_target || "JEE",
            xp: userXp.xp,
            level: userXp.xp_level,
            streak: userXp.streak,
            isCurrentUser: true,
          };
        }
      }
    }

    return NextResponse.json({
      leaderboard: ranked,
      currentUserRank,
      scope,
      total: ranked.length,
    });
  } catch (error: any) {
    console.error("Leaderboard error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
