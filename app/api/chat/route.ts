import { NextResponse } from "next/server";

import { masterSyllabus } from "@/lib/masterSyllabus";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const chapter = masterSyllabus.find(
      (c) =>
        c.title.toLowerCase().includes(message.toLowerCase()) ||
        c.pyqTags.some((t) =>
          message.toLowerCase().includes(t)
        )
    );

    const context = chapter
      ? {
          chapter: chapter.title,
          concepts: chapter.concepts,
          difficulty: chapter.difficulty,
        }
      : null;

    return NextResponse.json({
      reply:
        "AI mode is currently disabled. Connect an OpenAI API key later to enable live tutoring.",

      context,
    });
  } catch {
    return NextResponse.json(
      {
        reply: "Unable to process request.",
      },
      {
        status: 500,
      }
    );
  }
}