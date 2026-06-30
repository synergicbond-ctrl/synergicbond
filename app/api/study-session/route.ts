export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { minutes, chapterId } = body as { minutes?: unknown; chapterId?: unknown };
    const parsedMinutes =
      typeof minutes === "number"
        ? minutes
        : typeof minutes === "string"
          ? Number(minutes)
          : NaN;

    if (!Number.isFinite(parsedMinutes) || parsedMinutes <= 0) {
      return NextResponse.json({ error: "minutes must be positive" }, { status: 400 });
    }

    const { error } = await supabase.from("study_sessions").insert({
      user_id: user.id,
      minutes: Math.round(parsedMinutes),
      chapter_id: typeof chapterId === "string" && chapterId.trim() ? chapterId.trim() : null,
    });

    if (error) {
      console.error("study_sessions insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
