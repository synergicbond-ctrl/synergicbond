import OpenAI from "openai";
import { requireEnv } from "./runtime-safe/env";

let client: OpenAI | null = null;

export function getOpenAI() {
  if (!client) {
    client = new OpenAI({
      apiKey: requireEnv("OPENAI_API_KEY"),
    });
  }

  return client;
}
