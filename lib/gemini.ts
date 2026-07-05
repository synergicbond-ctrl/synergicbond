import { GoogleGenAI } from "@google/genai";

// Current generally-available models, tried in order. Resilient to model-id
// drift / deprecation (e.g. the old gemini-1.5-flash returning "not found").
export const GEMINI_MODELS = ["gemini-2.0-flash", "gemini-2.5-flash", "gemini-flash-latest"];

function getAI() {
  return new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || "" });
}

// Run a prompt against the first model that succeeds. Throws only if every
// model fails — callers convert that into a user-friendly message, so the raw
// error is never surfaced to the UI.
async function run(contents: string): Promise<string> {
  let lastErr: unknown;
  for (const model of GEMINI_MODELS) {
    try {
      const response = await getAI().models.generateContent({ model, contents });
      const text = response.text ?? "";
      if (text.trim()) return text;
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr ?? new Error("All Gemini models failed");
}

export async function generateText(prompt: string): Promise<string> {
  return run(prompt);
}

export async function generateJSON(prompt: string): Promise<string> {
  return run(prompt + "\n\nIMPORTANT: Respond with valid JSON only. No markdown, no code blocks, no extra text.");
}

export async function generateMultimodal(
  contents: Array<string | { text: string } | { inlineData: { mimeType: string; data: string } }>
): Promise<string> {
  let lastErr: unknown;
  for (const model of GEMINI_MODELS) {
    try {
      const response = await getAI().models.generateContent({ model, contents });
      const text = response.text ?? "";
      if (text.trim()) return text;
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr ?? new Error("All Gemini models failed");
}
