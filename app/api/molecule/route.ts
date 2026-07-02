export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateJSON } from "@/lib/gemini";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Sign in to use the molecule explorer." }, { status: 401 });

    const { compound, language = "english" } = await request.json();
    if (!compound) return NextResponse.json({ error: "Compound name required" }, { status: 400 });

    const langInstruction =
      language === "hindi" ? "Write descriptions in Hindi."
      : language === "hinglish" ? "Write descriptions in Hinglish."
      : "Write in English.";

    const prompt = `You are an expert Chemistry professor. ${langInstruction}
Provide complete information about the compound: "${compound}"

Respond with ONLY this JSON (no markdown, no code blocks):
{
  "name": "IUPAC name",
  "commonName": "common name",
  "formula": "molecular formula",
  "molecularWeight": "molecular weight with units",
  "structure": "SMILES notation",
  "pubchemCID": "PubChem CID number if known, else null",
  "appearance": "physical appearance",
  "properties": {
    "meltingPoint": "value with units",
    "boilingPoint": "value with units",
    "density": "value with units",
    "solubility": "in water",
    "state": "solid/liquid/gas at room temperature"
  },
  "uses": ["use1", "use2", "use3"],
  "examRelevance": {
    "chapters": ["chapter1", "chapter2"],
    "examTypes": ["NEET", "JEE Main"],
    "importantFacts": ["fact1", "fact2", "fact3"],
    "commonQuestionTypes": ["question type 1", "question type 2"]
  },
  "funFact": "interesting fact about this compound",
  "hazards": "safety information if any"
}`;

    const raw = await generateJSON(prompt);
    const clean = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const data = JSON.parse(clean);

    return NextResponse.json(data);
  } catch (err: unknown) {
    console.error("Molecule error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to load molecule data" },
      { status: 500 }
    );
  }
}
