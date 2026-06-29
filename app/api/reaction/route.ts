export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateJSON } from "@/lib/gemini";
import { reactionSlug } from "@/lib/reactionSlug";
import { getSeed } from "@/lib/reactionSeeds";
import { getCached, putCached } from "@/lib/mechanismCache";
import { MechanismSchema, SCHEMA_VERSION } from "@/lib/mechanismSchema";

const UNAVAILABLE = "Explanation temporarily unavailable. Please try again in a few moments.";

function clean(s: unknown) {
  return String(s ?? "").replace(/[<>{}]/g, "").slice(0, 120).trim();
}
function stripFences(s: string) {
  return s.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body?.reaction);
    if (!name) return NextResponse.json({ error: "Reaction name required" }, { status: 400 });
    const slug = clean(body?.slug) || reactionSlug(name);
    const language = clean(body?.language) || "english";

    // 1) Hand-authored seed — always accurate, instant.
    const seed = getSeed(slug);
    if (seed) return NextResponse.json({ mechanism: seed, source: "seed" });

    // 2) Persisted cache — never regenerate the same reaction.
    const cached = await getCached(slug, language);
    if (cached) return NextResponse.json({ mechanism: cached, source: "cache" });

    // 3) Generate structured JSON, validate against the SSOT, then persist.
    const langLine =
      language === "hindi" ? "Write all human-readable text in Hindi (Devanagari); keep formulae/SMILES standard."
      : language === "hinglish" ? "Write human-readable text in Hinglish (Roman Hindi + English terms)."
      : "Write in English.";

    const prompt = `You are an expert organic chemistry author. Return ONE JSON object (no markdown) for the reaction "${name}". ${langLine}

Verified chemistry only (NCERT / Clayden / March). No invented reagents/intermediates. Every text field MUST be ONE short line (no paragraphs).

Shape:
{
  "dashboard": { "reactionType": str, "difficulty": "Easy|Moderate|Hard|Olympiad", "examFrequency": "Low|Medium|High|Very High", "reagents": [str], "products": [str], "chapter": str, "mechanismType": str, "rds": str, "stereochemistry": str, "conditions": str, "timeToLearn": str },
  "flowMap": [ { "label": str, "kind": "reactant|reagent|intermediate|transition|product" } ],
  "steps": [ { "n": int, "title": str, "beforeSmiles": str, "afterSmiles": str, "electronMove": str, "intermediate": str, "reason": str, "trap": str, "hook": str } ],
  "quickView": { "reaction": str, "keyIntermediate": str, "rds": str, "keyReagent": str, "trap": str, "mnemonic": str },
  "stereochemistry": { "applicable": bool, "summary": str, "outcomes": [str] },
  "examples": [ { "tier": "Basic|JEE Main|JEE Advanced|Olympiad|PYQ", "prompt": str, "answer": str } ],
  "relatedReactions": [str]
}

Rules: 3–7 mechanism steps; beforeSmiles/afterSmiles must be VALID SMILES of the actual species (omit a SMILES field only if truly not representable); 6–10 examples across tiers; 3–6 related reactions. Output ONLY the JSON.`;

    const raw = stripFences(await generateJSON(prompt));
    let candidate: unknown;
    try {
      candidate = JSON.parse(raw);
    } catch {
      return NextResponse.json({ error: UNAVAILABLE }, { status: 503 });
    }

    // Inject server-owned identity fields, then strictly validate.
    if (candidate && typeof candidate === "object") {
      const c = candidate as Record<string, unknown>;
      c.schemaVersion = SCHEMA_VERSION;
      c.slug = slug;
      c.name = name;
      c.category = "named-reaction";
    }
    const parsed = MechanismSchema.safeParse(candidate);
    if (!parsed.success) {
      console.error("mechanism schema drift:", parsed.error.issues?.slice(0, 3));
      return NextResponse.json({ error: UNAVAILABLE }, { status: 503 });
    }

    await putCached(slug, language, parsed.data);
    return NextResponse.json({ mechanism: parsed.data, source: "generated" });
  } catch (err) {
    console.error("Reaction route error:", err);
    return NextResponse.json({ error: UNAVAILABLE }, { status: 503 });
  }
}
