import OpenAI from "openai";
import { buildAiTutorPrompt, type AiTutorRequest } from "@/lib/aiTutor";

export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey || apiKey === "your_real_key_here") {
    return Response.json(
      { error: "Add your real OPENAI_API_KEY in .env.local, then restart npm run dev." },
      { status: 500 }
    );
  }

  try {
    const body = (await req.json()) as Partial<AiTutorRequest>;
    const question = body.question?.trim();

    if (!question) {
      return Response.json({ error: "Question is required." }, { status: 400 });
    }

    const client = new OpenAI({ apiKey });
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a world-class Chemistry tutor for NEET and JEE students. Give clear, step-by-step, exam-focused explanations, diagnose likely mistakes, and keep the response practical.",
        },
        {
          role: "user",
          content: buildAiTutorPrompt({
            question,
            chapter: body.chapter,
          }),
        },
      ],
    });

    return Response.json({
      answer: completion.choices[0].message.content || "No answer returned.",
    });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to generate an AI answer right now.",
      },
      { status: 500 }
    );
  }
}
