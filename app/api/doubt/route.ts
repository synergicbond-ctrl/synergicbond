export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateText } from "@/lib/gemini";
import { createClient } from "@/lib/supabase/server";

// Server-side sanitizer — defense in depth on top of the client sanitizer
function clean(input: string): string {
  return String(input || "").replace(/<[^>]*>/g, "").slice(0, 2000);
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Sign in to use the doubt solver." }, { status: 401 });

    const { doubt, language = "english" } = await request.json();
    const safeDoubt = clean(doubt);
    if (!safeDoubt) return NextResponse.json({ error: "Doubt text required" }, { status: 400 });

    const langInstruction =
      language === "hinglish"
        ? "Answer in Hinglish (Hindi in Roman script + English chemistry terms)."
        : "Answer in clear English.";

    const prompt = `You are an expert NEET/JEE Chemistry tutor on SYNERGIC BOND. ${langInstruction}

Solve this student doubt with a clear, exam-focused structure:

## 🔍 Concept Required
[topic + key idea]

## ✏️ Step-by-Step Solution
[numbered steps]

## ✅ Final Answer
[bold answer with units if applicable]

## 🎯 Exam Tip
[a quick trick or common trap]

Use LaTeX for all formulas ($...$ inline, $$...$$ display).

Student doubt: ${safeDoubt}`;

    const reply = await generateText(prompt);
    return NextResponse.json({ reply });
  } catch (err: unknown) {
    console.error("Doubt route error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to solve doubt." },
      { status: 500 }
    );
  }
}
