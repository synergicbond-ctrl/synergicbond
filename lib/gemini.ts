import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || "";

const genAI = new GoogleGenerativeAI(apiKey);

export const geminiFlash = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export const geminiPro = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

export async function generateText(prompt: string, useProModel = false): Promise<string> {
  const model = useProModel ? geminiPro : geminiFlash;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

export async function generateJSON(prompt: string): Promise<string> {
  const model = geminiFlash;
  const result = await model.generateContent(
    prompt + "\n\nIMPORTANT: Respond with valid JSON only. No markdown, no code blocks, no extra text."
  );
  return result.response.text();
}
