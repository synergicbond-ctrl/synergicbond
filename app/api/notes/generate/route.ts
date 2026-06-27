export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { fetchSyllabusContext } from "@/lib/aiTutor";

const DIFFICULTY_INSTRUCTIONS: Record<string, string> = {
  ncert: "NCERT level — simple language, all concepts from NCERT textbook only, suitable for NEET basic preparation. Use examples from NCERT.",
  jee_main: "JEE Main level — moderate depth, include all NCERT + additional JEE concepts, numerical examples, important formulae.",
  jee_advanced: "JEE Advanced level — deep conceptual understanding, multi-step reasoning, edge cases, advanced problem-solving approaches, exceptions.",
  gate: "GATE level — graduate-level depth, theoretical derivations, advanced applications, spectroscopy correlations where applicable.",
  nsec: "NSEC Olympiad level — beyond JEE, include international chemistry concepts, advanced mechanisms, non-standard problems.",
  incho: "INChO level — national olympiad depth, synthesis problems, spectroscopy, thermodynamics at university level.",
  icho: "IChO level — international olympiad, highest difficulty, cutting-edge chemistry, research-level concepts.",
};

const LANG_INSTRUCTIONS: Record<string, string> = {
  english: "Write entirely in English.",
  hinglish: "Write in Hinglish — use Hindi words in Roman script mixed with English chemistry terms. Example: 'Yeh reaction mein nucleophile attack karta hai carbon pe.'",
  hindi: "Write entirely in Hindi (Devanagari script). Keep chemical formulas, equations, and IUPAC names in English/standard notation.",
};

export async function POST(req: Request) {
  try {
    const OpenAI = (await import("openai")).default;
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

    const {
      topic,
      chapterId,
      difficulty = "jee_main",
      examType = "JEE Main",
      language = "english",
      includeFormulas = true,
      includeExamples = true,
      includePYQ = true,
    } = await req.json();

    if (!topic && !chapterId) {
      return NextResponse.json({ error: "topic or chapterId required" }, { status: 400 });
    }

    // Get authenticated user (optional — notes work for guests too)
    let userId: string | null = null;
    try {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();
      userId = user?.id ?? null;
    } catch {}

    // Check cache — if same notes already generated, return saved version
    if (userId) {
      try {
        const supabase = await createClient();
        const { data: cached } = await supabase
          .from("generated_notes")
          .select("content, created_at")
          .eq("user_id", userId)
          .eq("topic", topic || chapterId)
          .eq("difficulty", difficulty)
          .eq("language", language)
          .order("created_at", { ascending: false })
          .limit(1)
          .single();

        if (cached) {
          return NextResponse.json({
            content: cached.content,
            cached: true,
            topic: topic || chapterId,
            difficulty,
            language,
          });
        }
      } catch {}
    }

    // Fetch syllabus context
    const context = chapterId ? fetchSyllabusContext(chapterId) : null;
    const contextStr = context ? JSON.stringify(context).slice(0, 3000) : "";

    const difficultyInstruction = DIFFICULTY_INSTRUCTIONS[difficulty] || DIFFICULTY_INSTRUCTIONS.jee_main;
    const langInstruction = LANG_INSTRUCTIONS[language] || LANG_INSTRUCTIONS.english;

    const systemPrompt = `You are an expert Chemistry Professor on SYNERGIC BOND platform with 18+ years of JEE/NEET teaching experience.

Generate comprehensive, exam-focused chemistry notes.

Difficulty: ${difficultyInstruction}
Language: ${langInstruction}
Exam: ${examType}

${contextStr ? `Syllabus Context (use this as base — do not contradict it):\n${contextStr}` : ""}

STRUCTURE YOUR NOTES EXACTLY LIKE THIS:

# [Topic Name]

## 📘 Core Concept
[Clear definition and fundamental understanding]

## ⚗️ Key Formulae & Equations
${includeFormulas ? "[All important formulas with LaTeX notation using $...$ for inline, $$...$$ for display]" : "[Skip this section]"}

## 🧠 Detailed Explanation
[Step-by-step conceptual breakdown]

## 🔬 Important Reactions / Mechanisms
[Relevant reactions with conditions]

## 📊 Comparison Tables
[Side-by-side comparisons where useful — use markdown tables]

## 💡 Examples & Applications
${includeExamples ? "[Solved examples with step-by-step solutions]" : "[Skip this section]"}

## ⚠️ Exceptions & Common Mistakes
[What students commonly get wrong]

## 🎯 Exam Tips & Tricks
[Mnemonics, shortcuts, patterns for ${examType}]

## 📝 PYQ Pattern
${includePYQ ? `[How this topic appears in ${examType} past year questions — types of questions asked]` : "[Skip this section]"}

## ✅ Quick Revision Points
[5-7 bullet points for last-minute revision]

RULES:
- Use LaTeX for ALL formulas ($...$ inline, $$...$$ display)
- Be precise — no vague statements
- Every claim must be exam-relevant
- Do not add any content beyond what is chemically accurate`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Generate complete notes for: ${topic || chapterId}\nExam: ${examType}\nDifficulty: ${difficulty}` },
      ],
      temperature: 0.3,
      max_tokens: 3000,
    });

    const content = completion.choices[0]?.message?.content || "";

    // Save to database for this user
    if (userId && content) {
      try {
        const supabase = await createClient();
        await supabase.from("generated_notes").insert({
          user_id: userId,
          topic: topic || chapterId,
          exam_type: examType,
          difficulty,
          language,
          content,
        });
      } catch {}
    }

    return NextResponse.json({
      content,
      cached: false,
      topic: topic || chapterId,
      difficulty,
      examType,
      language,
    });
  } catch (error: any) {
    console.error("Notes generation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
