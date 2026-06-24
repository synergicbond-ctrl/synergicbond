import OpenAI from "openai";
import { masterSyllabus } from "./masterSyllabus";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateQuestion(chapterQuery: string) {
  const chapter = masterSyllabus.find((c) =>
    c.title.toLowerCase().includes(chapterQuery.toLowerCase())
  );

  if (!chapter) {
    return "Chapter not found.";
  }

  const prompt = `
Generate a JEE/NEET level Chemistry question.

Chapter: ${chapter.title}
Concepts: ${chapter.concepts.join(", ")}

Return:
1 question
4 options
correct answer
difficulty explanation
`;

  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are a top exam paper setter for NEET, JEE Main and Advanced.",
      },
      { role: "user", content: prompt },
    ],
  });

  return res.choices[0].message.content;
}