export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(request: Request) {
  try {
    const { imageBase64, language = "english" } = await request.json();
    if (!imageBase64) return NextResponse.json({ error: "Image required" }, { status: 400 });

    const langInstruction =
      language === "hindi" ? "Respond in Hindi (Devanagari)."
      : language === "hinglish" ? "Respond in Hinglish (Hindi in Roman script + English terms)."
      : "Respond in English.";

    const base64Data = imageBase64.startsWith("data:") ? imageBase64.split(",")[1] : imageBase64;

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [{
        role: "user",
        parts: [
          { inlineData: { mimeType: "image/jpeg", data: base64Data } },
          { text: `You are an expert JEE/NEET Chemistry & Physics solver. ${langInstruction}

Analyze this handwritten/printed problem and solve it completely.

Structure your response EXACTLY like this:

## 📋 Problem Identified
[State the problem clearly]

## 🔍 Concept Required
[Which chapter/topic this belongs to + key concept]

## ✏️ Step-by-Step Solution

**Step 1:** [explanation]
**Step 2:** [explanation]
...

## ✅ Final Answer
[Bold the final answer with units]

## 🎯 Exam Tip
[JEE/NEET trick for this type of question]

Use LaTeX for ALL formulas ($...$ inline, $$...$$ display). Be accurate and exam-focused.` }
        ]
      }]
    });

    return NextResponse.json({ solution: response.text ?? "Could not solve." });
  } catch (err: any) {
    console.error("Snap solve error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
