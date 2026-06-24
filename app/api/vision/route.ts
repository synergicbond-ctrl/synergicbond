import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    answer:
      "Vision AI is currently disabled. Add an OpenAI API key later to enable image solving.",
  });
}