export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// POST: award XP for an action
// GET: fetch current user XP/level/streak
export async function POST(req: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { action } = await req.json();

    const XP_VALUES: Record<string, number> = {
      quiz_complete: 20,
      quiz_perfect: 50,
      chapter_read: 10,
      chapter_saved: 5,
      streak_day: 15,
      tutor_session: 8,
    };

    const xpGained = XP_VALUES[action] ?? 5;

    const { data: existing } = await supabase
      .from("user_xp")
      .select("xp, xp_level, streak, last_active")
      .eq("user_id", user.id)
      .single();

    const now = new Date();
    const today = now.toISOString().split("T")[0];

    if (!existing) {
      await supabase.from("user_xp").insert({
        user_id: user.id,
        xp: xpGained,
        xp_level: 1,
        streak: 1,
        last_active: today,
      });
      return NextResponse.json({ xp: xpGained, xp_level: 1, xpGained });
    }

    const currentXp = existing.xp + xpGained;
    const xp_level = Math.floor(currentXp / 100) + 1;

    const lastActive = existing.last_active;
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    const streak =
      lastActive === yesterdayStr
        ? existing.streak + 1
        : lastActive === today
        ? existing.streak
        : 1;

    await supabase
      .from("user_xp")
      .update({ xp: currentXp, xp_level, streak, last_active: today })
      .eq("user_id", user.id);

    return NextResponse.json({ xp: currentXp, xp_level, streak, xpGained });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data } = await supabase
      .from("user_xp")
      .select("xp, xp_level, streak, last_active")
      .eq("user_id", user.id)
      .single();

    return NextResponse.json(data ?? { xp: 0, xp_level: 1, streak: 0 });
  } catch {
    return NextResponse.json({ xp: 0, level: 1, streak: 0 });
  }
}
