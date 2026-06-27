export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const OpenAI = (await import("openai")).default;
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

    const { imageBase64, promptText, language = "english" } = await request.json();

    if (!imageBase64) {
      return NextResponse.json(
        { error: "Chemical structure or mechanism image data is required." },
        { status: 400 }
      );
    }

    const langInstruction =
      language === "hindi"
        ? "Respond in Hindi (Devanagari script)."
        : language === "hinglish"
        ? "Respond in Hinglish (Hindi words in Roman script mixed with English technical terms)."
        : "Respond in English.";

    const systemInstruction = `You are an expert NEET/JEE Chemistry mechanism analysis engine.
Analyze the provided chemical structure or reaction mechanism image with full academic rigor.

${langInstruction}

Structure your response as:
1. 🔬 **Structure Identified:** Name and IUPAC if applicable
2. ⚡ **Reactive Centers:** Nucleophile/electrophile, functional groups
3. ➡️ **Mechanism Pathway:** Step-by-step arrow-pushing analysis
4. 🧪 **Intermediates & Products:** All species formed
5. 📚 **Syllabus Mapping:** Which NEET/JEE chapter/topic this belongs to
6. 🎯 **Exam Tip:** Common question pattern from this mechanism

Use LaTeX notation for formulas ($...$). Be concise but thorough.`;

    const userContent: any[] = [
      {
        type: "image_url",
        image_url: {
          url: imageBase64.startsWith("data:")
            ? imageBase64
            : `data:image/jpeg;base64,${imageBase64}`,
          detail: "high",
        },
      },
    ];

    if (promptText) {
      userContent.push({ type: "text", text: promptText });
    } else {
      userContent.push({
        type: "text",
        text: "Analyze this chemical structure or reaction mechanism in detail.",
      });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemInstruction },
        { role: "user", content: userContent },
      ],
      max_tokens: 1500,
    });

    const analysis = completion.choices[0]?.message?.content || "Analysis failed.";

    return NextResponse.json({ analysis });
  } catch (err: any) {
    console.error("Vision API error:", err);
    return NextResponse.json(
      { error: "Failed to process visual chemical diagram." },
      { status: 500 }
    );
  }
}
