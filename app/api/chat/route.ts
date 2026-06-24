import { NextResponse } from "next/server";
import OpenAI from "openai";
import { masterSyllabus } from "@/lib/masterSyllabus";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  // find relevant chapter context
  const chapter = masterSyllabus.find((c) =>
    c.title.toLowerCase().includes(message.toLowerCase()) ||
    c.pyqTags.some((t) => message.toLowerCase().includes(t))
  );

  const context = chapter
    ? `
Chapter: ${chapter.title}
Concepts: ${chapter.concepts.join(", ")}
Difficulty: ${chapter.difficulty}/5
`
    : "No direct chapter found in syllabus.";

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are an expert Chemistry tutor for NEET, JEE Main, and JEE Advanced students. Explain clearly and step-by-step.",
      },
      {
        role: "user",
        content: `${context}\n\nStudent question: ${message}`,
      },
    ],
  });

  return NextResponse.json({
    reply: completion.choices[0].message.content,
  });
}