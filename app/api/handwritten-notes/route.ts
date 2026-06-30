export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Sign in to use handwritten notes conversion." }, { status: 401 });

    const { imageBase64, language = "english", examType = "JEE Main" } = await request.json();
    if (!imageBase64) return NextResponse.json({ error: "Image required" }, { status: 400 });

    const langInstruction =
      language === "hindi" ? "Convert and format in Hindi (Devanagari)."
      : language === "hinglish" ? "Convert and format in Hinglish (Hindi in Roman script + English chemistry terms)."
      : "Convert and format in English.";

    const base64Data = imageBase64.startsWith("data:") ? imageBase64.split(",")[1] : imageBase64;

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{
        role: "user",
        parts: [
          { inlineData: { mimeType: "image/jpeg", data: base64Data } },
          { text: `You are converting handwritten chemistry notes into beautiful digital notes. ${langInstruction}
Exam context: ${examType}

Transcribe and enhance the handwritten content into well-structured digital notes:

## 📝 Topic: [identify the topic]

## 🔑 Key Points
[bullet points from the notes]

## ⚗️ Formulas & Equations
[all formulas in LaTeX $...$]

## 🧠 Concepts Explained
[expand and clarify the handwritten concepts with proper explanations]

## ✅ Summary
[3-5 key takeaways]

## 🎯 Exam Tips
[relevant ${examType} tips for this topic]

Rules:
- Preserve ALL information from the handwritten notes
- Enhance and expand where useful
- Use LaTeX for ALL chemical formulas and equations
- Fix any errors in the handwritten content` }
        ]
      }]
    });

    return NextResponse.json({ notes: response.text ?? "Could not convert notes." });
  } catch (err: unknown) {
    console.error("Handwritten notes error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to convert handwritten notes" },
      { status: 500 }
    );
  }
}
