import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const formData = await req.formData();
  const image = formData.get("image") as File;

  const buffer = await image.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");

  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are a chemistry expert. Solve doubts from images step by step.",
      },
      {
        role: "user",
        content: [
          { type: "text", text: "Solve this chemistry question" },
          {
            type: "image_url",
            image_url: {
              url: `data:image/png;base64,${base64}`,
            },
          },
        ],
      },
    ],
  });

  return NextResponse.json({
    answer: res.choices[0].message.content,
  });
}