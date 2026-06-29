export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateText } from "@/lib/gemini";
import { fetchSyllabusContext } from "@/lib/aiTutor";
import { createClient } from "@/lib/supabase/server";

const DIFFICULTY_INSTRUCTIONS: Record<string, string> = {
  ncert: "NCERT level — simple language, NCERT textbook only, suitable for NEET basic preparation.",
  jee_main: "JEE Main level — moderate depth, all NCERT + JEE concepts, numerical examples, important formulae.",
  jee_advanced: "JEE Advanced level — deep conceptual understanding, multi-step reasoning, edge cases, exceptions.",
  gate: "GATE level — graduate-level depth, theoretical derivations, advanced applications.",
  nsec: "NSEC Olympiad level — beyond JEE, include international chemistry concepts, advanced mechanisms.",
  incho: "INChO level — national olympiad, synthesis problems, spectroscopy, thermodynamics at university level.",
  icho: "IChO level — international olympiad, highest difficulty, cutting-edge chemistry.",
};

const LANG_INSTRUCTIONS: Record<string, string> = {
  english: "Write entirely in English.",
  hinglish: "Write in Hinglish — Hindi words in Roman script mixed with English chemistry terms.",
  hindi: "Write entirely in Hindi (Devanagari script). Keep chemical formulas in standard notation.",
};

export async function POST(req: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Sign in to generate notes." }, { status: 401 });

    const {
      topic,
      chapterId,
      difficulty = "jee_main",
      examType = "JEE Main",
      language = "english",
    } = await req.json();

    if (!topic && !chapterId) {
      return NextResponse.json({ error: "topic or chapterId required" }, { status: 400 });
    }

    const context = chapterId ? fetchSyllabusContext(chapterId) : null;
    const contextStr = context ? JSON.stringify(context).slice(0, 2000) : "";
    const difficultyInstruction = DIFFICULTY_INSTRUCTIONS[difficulty] || DIFFICULTY_INSTRUCTIONS.jee_main;
    const langInstruction = LANG_INSTRUCTIONS[language] || LANG_INSTRUCTIONS.english;

    const prompt = `You are an expert Chemistry Professor with 18+ years of JEE/NEET teaching experience on SYNERGIC BOND platform.

Generate comprehensive chemistry notes for: ${topic || chapterId}
Exam: ${examType}
Difficulty: ${difficultyInstruction}
Language: ${langInstruction}
${contextStr ? `Syllabus Context:\n${contextStr}` : ""}

Structure your notes EXACTLY like this:

# ${topic || chapterId}

## 📘 Core Concept
[Clear definition and fundamental understanding]

## ⚗️ Key Formulae & Equations
[All important formulas — use $ for inline LaTeX, $$ for display]

## 🧠 Detailed Explanation
[Step-by-step conceptual breakdown]

## 🔬 Important Reactions / Mechanisms
[Key reactions with conditions]

## 📊 Comparison Table
[Side-by-side comparison where useful — use markdown table]

## 💡 Solved Examples
[2-3 solved problems with steps]

## ⚠️ Exceptions & Common Mistakes
[What students get wrong in exams]

## 🎯 Exam Tips & Tricks
[Mnemonics, shortcuts, patterns for ${examType}]

## ✅ Quick Revision Points
[5-7 bullet points for last-minute revision]

Rules:
- Use LaTeX for ALL formulas ($...$ inline, $$...$$ display)
- Be precise and exam-relevant
- Do not add anything chemically inaccurate`;

    const content = await generateText(prompt, difficulty === "icho" || difficulty === "gate");

    return NextResponse.json({ content, topic: topic || chapterId, difficulty, examType, language, cached: false });
  } catch (error: any) {
    console.error("Notes error:", error);
    return NextResponse.json({ error: error.message || "Failed to generate notes" }, { status: 500 });
  }
}
