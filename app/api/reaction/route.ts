export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateText } from "@/lib/gemini";

// Sanitize the reaction name before sending to the model
function clean(s: string) {
  return String(s).replace(/[<>{}]/g, "").slice(0, 120).trim();
}

export async function POST(request: Request) {
  try {
    const { reaction, language = "english" } = await request.json();
    const name = clean(reaction);
    if (!name) return NextResponse.json({ error: "Reaction name required" }, { status: 400 });

    const langLine =
      language === "hindi" ? "Respond in Hindi (Devanagari); keep chemical names/formulae in standard notation."
      : language === "hinglish" ? "Respond in Hinglish (Hindi in Roman script + English chemistry terms)."
      : "Respond in English.";

    const prompt = `You are a NEET/JEE/Olympiad organic chemistry expert. Explain the "${name}" in a tight, exam-focused format. ${langLine}

Use EXACTLY this markdown structure, no preamble:

## ⚗️ ${name}

**📘 What it does:** (1 line)

**🧪 Reagents / Conditions:** (key reagents, catalysts, conditions)

**🔁 Type:** (e.g. nucleophilic substitution / oxidation / rearrangement / condensation / coupling)

**🧠 Mechanism (steps):**
1. ...
2. ...
3. ...

**🎯 Exam Tip:** (the trap or one-liner examiners love; tag NEET / JEE / Olympiad relevance)

Use LaTeX for any formula ($...$). Be accurate and concise.`;

    const text = await generateText(prompt);
    return NextResponse.json({ explanation: text || "Could not generate explanation." });
  } catch (err: any) {
    console.error("Reaction explain error:", err);
    return NextResponse.json({ error: err.message || "Failed" }, { status: 500 });
  }
}
