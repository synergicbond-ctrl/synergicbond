export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateJSON } from "@/lib/gemini";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // Get weak topics from mistakes
    let weakTopics: string[] = ["Mole Concept", "Chemical Bonding"];
    const examType = "JEE Main";

    if (user) {
      const { data: mistakes } = await supabase
        .from("mistakes").select("chapter_id").eq("user_id", user.id).limit(50);
      const freq: Record<string, number> = {};
      for (const m of mistakes || []) freq[m.chapter_id] = (freq[m.chapter_id] || 0) + 1;
      const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 3);
      if (sorted.length > 0) weakTopics = sorted.map(([c]) => c);
    }

    const prompt = `Generate a 5-question personalized daily practice set focused on weak topics.
Weak topics: ${weakTopics.join(", ")}
Exam: ${examType}
Mix: 3 questions from weakest topic, 2 from others. Medium-hard difficulty.

Respond with ONLY this JSON:
{
  "title": "Today's Personalized Practice",
  "focusTopics": ${JSON.stringify(weakTopics)},
  "questions": [
    {
      "id": 1,
      "topic": "topic name",
      "question": "question with LaTeX $...$",
      "options": {"A": "opt1", "B": "opt2", "C": "opt3", "D": "opt4"},
      "answer": "A",
      "explanation": "detailed explanation",
      "difficulty": "medium"
    }
  ]
}`;

    const raw = await generateJSON(prompt);
    const clean = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const data = JSON.parse(clean);

    return NextResponse.json(data);
  } catch (err: unknown) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to generate daily practice" },
      { status: 500 }
    );
  }
}
