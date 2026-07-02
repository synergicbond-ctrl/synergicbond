export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateJSON } from "@/lib/gemini";
import { createClient } from "@/lib/supabase/server";

// Deterministic topic rotation by date
const TOPICS = [
  "Mole Concept", "Atomic Structure", "Chemical Bonding", "Thermodynamics",
  "Chemical Equilibrium", "Electrochemistry", "Organic Chemistry - GOC",
  "Hydrocarbons", "Coordination Compounds", "p-Block Elements",
  "d-Block Elements", "Solutions", "Solid State", "Surface Chemistry",
  "Reaction Kinetics", "Periodic Table", "s-Block Elements", "Biomolecules",
  "Polymers", "Environmental Chemistry"
];

export async function GET(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Sign in to access the daily challenge." }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const exam = searchParams.get("exam") || "JEE Main";
    const date = new Date().toISOString().split("T")[0];
    const dayIndex = Math.floor(Date.now() / 86400000) % TOPICS.length;
    const topic = TOPICS[dayIndex];

    const prompt = `Generate 1 high-quality ${exam} Chemistry question for today's daily challenge.
Topic: ${topic}
Date: ${date}
Difficulty: medium-hard
Make it thought-provoking and unique.

Respond with ONLY this JSON:
{
  "date": "${date}",
  "topic": "${topic}",
  "exam": "${exam}",
  "question": "full question text with LaTeX formulas using $...$",
  "options": {"A": "option1", "B": "option2", "C": "option3", "D": "option4"},
  "answer": "A",
  "explanation": "detailed step-by-step explanation",
  "difficulty": "medium",
  "xpReward": 50,
  "hint": "one-line hint without giving away the answer"
}`;

    const raw = await generateJSON(prompt);
    const clean = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const challenge = JSON.parse(clean);

    return NextResponse.json(challenge);
  } catch (err: unknown) {
    console.error("Daily challenge error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to generate daily challenge" },
      { status: 500 }
    );
  }
}
