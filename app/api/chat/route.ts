export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { createClient } from "@/lib/supabase/server";
import { fetchSyllabusContext } from "@/lib/aiTutor";

function getAI() {
  return new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || "" });
}

export async function POST(req: Request) {
  try {
    const { message, chapterId, history = [], language = "english" } = await req.json();

    if (!message || !chapterId) {
      return NextResponse.json({ error: "message and chapterId required" }, { status: 400 });
    }

    let weakTopics: string[] = [];
    try {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.id) {
        const { data: mistakes } = await supabase
          .from("mistakes").select("chapter_id").eq("user_id", user.id);
        const freq: Record<string, number> = {};
        for (const m of mistakes || []) freq[m.chapter_id] = (freq[m.chapter_id] || 0) + 1;
        weakTopics = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 5)
          .map(([c, n]) => `${c} (${n} mistakes)`);
      }
    } catch {}

    const context = fetchSyllabusContext(chapterId);
    const trimmedContext = JSON.stringify(context).slice(0, 2000);

    const langInstruction =
      language === "hindi" ? "Respond in Hindi (Devanagari script). Keep formulas in standard notation."
      : language === "hinglish" ? "Respond in Hinglish — Hindi words in Roman script + English chemistry terms."
      : "Respond in English.";

    const systemInstruction = `You are a STRICT NEET/JEE Chemistry Tutor on SYNERGIC BOND platform.
${langInstruction}

ALWAYS respond in this exact structure:
1. 📘 Concept:
2. ⚗️ Formulae & Equations:
3. 🧠 Step-by-Step Explanation:
4. ⚠️ Exceptions & Key Points:
5. 🎯 Exam Trick / Tip:

Chapter: ${chapterId}
Syllabus Data: ${trimmedContext}
Student Weak Topics: ${weakTopics.length ? weakTopics.join(", ") : "None recorded"}

Rules:
- No greetings or conversational language
- Exam-focused only
- Use LaTeX for formulas ($...$ notation)
- If question is about a weak topic, teach from basics`;

    // Build conversation history
    const contents = [
      ...history.slice(-8).map((h: { role?: string; content?: string }) => ({
        role: h.role === "assistant" ? "model" : "user",
        parts: [{ text: h.content }],
      })),
      { role: "user", parts: [{ text: message }] },
    ];

    const stream = await getAI().models.generateContentStream({
      model: "gemini-2.0-flash",
      contents,
      config: { systemInstruction },
    });

    const readable = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        for await (const chunk of stream) {
          const text = chunk.text ?? "";
          if (text) controller.enqueue(encoder.encode(text));
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-cache" },
    });
  } catch (e: unknown) {
    console.error("Chat error:", e);
    return NextResponse.json({ error: "AI request failed" }, { status: 500 });
  }
}
