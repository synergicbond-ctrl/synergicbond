export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(request: Request) {
  try {
    const { imageBase64, promptText, language = "english" } = await request.json();

    if (!imageBase64) {
      return NextResponse.json({ error: "Image data is required." }, { status: 400 });
    }

    const langInstruction =
      language === "hindi" ? "Respond in Hindi (Devanagari script)."
      : language === "hinglish" ? "Respond in Hinglish (Hindi words in Roman script + English chemistry terms)."
      : "Respond in English.";

    const systemPrompt = `You are an expert NEET/JEE Chemistry mechanism analysis engine.
${langInstruction}

Structure your response as:
1. 🔬 **Structure Identified:** Name and IUPAC if applicable
2. ⚡ **Reactive Centers:** Nucleophile/electrophile, functional groups
3. ➡️ **Mechanism Pathway:** Step-by-step arrow-pushing analysis
4. 🧪 **Intermediates & Products:** All species formed
5. 📚 **Syllabus Mapping:** Which NEET/JEE chapter this belongs to
6. 🎯 **Exam Tip:** Common question pattern from this mechanism

Use LaTeX notation for formulas ($...$). Be concise but thorough.`;

    const userText = promptText || "Analyze this chemical structure or reaction mechanism in detail.";

    // Extract base64 data
    const base64Data = imageBase64.startsWith("data:")
      ? imageBase64.split(",")[1]
      : imageBase64;

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || "" });

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            { inlineData: { mimeType: "image/jpeg", data: base64Data } },
            { text: systemPrompt + "\n\n" + userText },
          ],
        },
      ],
    });

    const analysis = response.text ?? "Analysis failed.";
    return NextResponse.json({ analysis });
  } catch (err: any) {
    console.error("Vision API error:", err);
    return NextResponse.json({ error: "Failed to analyze image." }, { status: 500 });
  }
}
