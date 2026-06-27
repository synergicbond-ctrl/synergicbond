import { GoogleGenAI } from "@google/genai";

function getAI() {
  return new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || "" });
}

export async function generateText(prompt: string, _usePro = false): Promise<string> {
  const response = await getAI().models.generateContent({ model: "gemini-2.0-flash", contents: prompt });
  return response.text ?? "";
}

export async function generateJSON(prompt: string): Promise<string> {
  const fullPrompt = prompt + "\n\nIMPORTANT: Respond with valid JSON only. No markdown, no code blocks, no extra text.";
  const response = await getAI().models.generateContent({ model: "gemini-2.0-flash", contents: fullPrompt });
  return response.text ?? "";
}
