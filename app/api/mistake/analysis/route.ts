export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data, error } = await supabase
      .from("mistakes")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Aggregate by chapter
    const frequency: Record<string, { count: number; questions: string[] }> = {};
    for (const m of data || []) {
      if (!frequency[m.chapter_id]) {
        frequency[m.chapter_id] = { count: 0, questions: [] };
      }
      frequency[m.chapter_id].count++;
      if (m.question) frequency[m.chapter_id].questions.push(m.question);
    }

    const weakTopics = Object.entries(frequency)
      .sort((a, b) => b[1].count - a[1].count)
      .map(([chapter, data]) => ({
        chapter,
        mistakes: data.count,
        accuracy: Math.max(0, Math.round(100 - (data.count / Math.max(data.count + 5, 10)) * 100)),
        recentQuestions: data.questions.slice(0, 3),
      }));

    return NextResponse.json({
      weakTopics,
      totalMistakes: data?.length || 0,
      raw: data ?? [],
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
