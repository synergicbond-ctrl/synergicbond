import OpenAI from "openai";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { fetchSyllabusContext } from "@/lib/aiTutor";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `
You are a STRICT NEET/JEE Chemistry Tutor.

You NEVER behave like a chatbot.

You ALWAYS respond in this structure:

1. 📘 Concept:
2. ⚗️ Formulae & Equations:
3. 🧠 Step-by-Step Explanation:
4. ⚠️ Exceptions & Key Points:
5. 🎯 Exam Trick / Tip:

RULES:
- No greetings
- No conversational language
- Exam-focused only
- Use LaTeX when needed
`;

export async function POST(req: Request) {
  try {
    const { message, chapterId, history = [] } = await req.json();

    if (!message || !chapterId) {
      return NextResponse.json(
        { error: "message and chapterId required" },
        { status: 400 }
      );
    }

    // ===============================
    // 1. SYLLABUS CONTEXT
    // ===============================
    const context = fetchSyllabusContext(chapterId);

    // ===============================
    // 2. MISTAKE MEMORY (SUPABASE)
    // ===============================
    const userId = "demo-user";

    const { data: mistakes } = await supabase
      .from("mistakes")
      .select("chapter_id")
      .eq("user_id", userId);

    const frequency: Record<string, number> = {};

    for (const m of mistakes || []) {
      frequency[m.chapter_id] = (frequency[m.chapter_id] || 0) + 1;
    }

    const weakTopics = Object.entries(frequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([chapter, count]) => `${chapter} (${count} mistakes)`);

    // ===============================
    // 3. SAFE HISTORY
    // ===============================
    const sanitizedHistory = Array.isArray(history)
      ? history.map((h: any) => ({
          role: h.role,
          content: h.content,
        }))
      : [];

    // ===============================
    // 4. CONTEXT TRIMMING
    // ===============================
    const trimmedContext = JSON.stringify(context).slice(0, 3000);

    // ===============================
    // 5. BUILD MESSAGE FLOW
    // ===============================
    const messages = [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "system",
        content: `
Chapter Context: ${chapterId}
Syllabus Data: ${trimmedContext}

Student Weak Topics (VERY IMPORTANT):
${weakTopics.length ? weakTopics.join(", ") : "No weak topics yet"}

INSTRUCTIONS:
- If question matches weak topic → teach slower
- Focus more on basics for weak areas
- Reinforce core concepts
        `,
      },
      ...sanitizedHistory,
      {
        role: "user",
        content: message,
      },
    ];

    // ===============================
    // 6. STREAM RESPONSE
    // ===============================
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages as any[],
      stream: true,
    });

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();

        for await (const chunk of completion) {
          const text = chunk.choices[0]?.delta?.content || "";
          if (!text) continue;

          controller.enqueue(encoder.encode(text));
        }

        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });

  } catch (e) {
    console.error("API Error:", e);
    return NextResponse.json(
      { error: "AI request failed" },
      { status: 500 }
    );
  }
}