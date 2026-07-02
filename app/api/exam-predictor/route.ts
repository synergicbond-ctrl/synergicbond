export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateJSON } from "@/lib/gemini";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Sign in to use the exam predictor." }, { status: 401 });

    const { quizScores, weakTopics, strongTopics, examType, practiceHours = 2 } = await request.json();

    if (!examType) return NextResponse.json({ error: "examType required" }, { status: 400 });

    const avgScore = quizScores?.length
      ? Math.round(quizScores.reduce((a: number, b: number) => a + b, 0) / quizScores.length)
      : 60;

    const prompt = `You are an expert ${examType} rank predictor with deep knowledge of exam patterns.

Student data:
- Exam: ${examType}
- Average quiz score: ${avgScore}%
- Weak topics: ${(weakTopics || []).join(", ") || "Unknown"}
- Strong topics: ${(strongTopics || []).join(", ") || "Unknown"}
- Daily study hours: ${practiceHours}

Predict their performance and provide actionable insights.

Respond with ONLY this JSON:
{
  "prediction": {
    "examType": "${examType}",
    "currentLevel": "Beginner/Intermediate/Advanced",
    "estimatedScore": {
      "chemistry": 85,
      "overall": 520,
      "outOf": 720
    },
    "estimatedRank": {
      "optimistic": "under 5000",
      "realistic": "5000-15000",
      "conservative": "15000-30000"
    },
    "percentile": "top X%",
    "strengthAreas": ["topic1", "topic2"],
    "criticalWeaknesses": ["topic1", "topic2"],
    "improvementPotential": "X marks improvable in Y weeks",
    "weeklyTargets": [
      {"week": 1, "target": "what to achieve", "expectedScoreGain": "+5 marks"},
      {"week": 2, "target": "what to achieve", "expectedScoreGain": "+8 marks"},
      {"week": 3, "target": "what to achieve", "expectedScoreGain": "+10 marks"},
      {"week": 4, "target": "what to achieve", "expectedScoreGain": "+12 marks"}
    ],
    "topicsToFocusNow": ["most important topic1", "most important topic2", "most important topic3"],
    "motivationalMessage": "personalized encouraging message",
    "successProbability": "X% chance of getting under 10000 rank with consistent effort"
  }
}`;

    const raw = await generateJSON(prompt);
    const clean = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const data = JSON.parse(clean);

    return NextResponse.json(data);
  } catch (err: unknown) {
    console.error("Predictor error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to generate prediction" },
      { status: 500 }
    );
  }
}
