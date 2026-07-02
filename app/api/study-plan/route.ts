export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateJSON } from "@/lib/gemini";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Sign in to generate a study plan." }, { status: 401 });

    const { weakTopics, examType, examDate, hoursPerDay = 4, language = "english" } = await request.json();

    if (!weakTopics || !examType) {
      return NextResponse.json({ error: "weakTopics and examType required" }, { status: 400 });
    }

    const daysLeft = examDate
      ? Math.ceil((new Date(examDate).getTime() - Date.now()) / 86400000)
      : 30;

    const langInstruction = language === "hindi" ? "Write in Hindi." : language === "hinglish" ? "Write in Hinglish." : "Write in English.";

    const prompt = `You are an expert ${examType} Chemistry mentor with 18+ years experience. ${langInstruction}

Create a personalized ${Math.min(daysLeft, 30)}-day study plan.
Exam: ${examType}
Days until exam: ${daysLeft}
Hours available per day: ${hoursPerDay}
Weak topics that need focus: ${weakTopics.join(", ")}

Respond with ONLY this JSON:
{
  "plan": {
    "title": "Your Personalized ${examType} Study Plan",
    "totalDays": ${Math.min(daysLeft, 30)},
    "examType": "${examType}",
    "strategy": "2-line overall strategy",
    "weeks": [
      {
        "week": 1,
        "theme": "week theme",
        "focus": "what to focus on",
        "days": [
          {
            "day": 1,
            "topic": "topic name",
            "subtopics": ["subtopic1", "subtopic2"],
            "tasks": ["task1", "task2", "task3"],
            "duration": "${hoursPerDay} hours",
            "resources": "Notes + Quiz on SYNERGIC BOND",
            "goal": "what to achieve today"
          }
        ]
      }
    ],
    "tips": ["tip1", "tip2", "tip3"],
    "dailyRoutine": {
      "morning": "what to study",
      "afternoon": "what to study",
      "evening": "revision + quiz"
    }
  }
}`;

    const raw = await generateJSON(prompt);
    const clean = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const data = JSON.parse(clean);

    return NextResponse.json(data);
  } catch (err: unknown) {
    console.error("Study plan error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to generate study plan" },
      { status: 500 }
    );
  }
}
