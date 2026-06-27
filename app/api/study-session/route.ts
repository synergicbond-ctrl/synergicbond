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

    const { minutes, chapterId } = await req.json();

    if (!minutes || minutes <= 0) {
      return NextResponse.json({ error: "minutes must be positive" }, { status: 400 });
    }

    const { error } = await supabase.from("study_sessions").insert({
      user_id: user.id,
      minutes: Math.round(minutes),
      chapter_id: chapterId ?? null,
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
