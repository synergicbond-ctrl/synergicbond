export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { generateText } from "@/lib/gemini";

// User-facing fallback — never expose model names, API errors, or payloads.
const UNAVAILABLE = "Explanation temporarily unavailable. Please try again in a few moments.";

// Sanitize the reaction name before sending to the model
function clean(s: string) {
  return String(s).replace(/[<>{}]/g, "").slice(0, 120).trim();
}

export async function POST(request: Request) {
  try {
    const { reaction, language = "english" } = await request.json();
    const name = clean(reaction);
    if (!name) return NextResponse.json({ error: "Reaction name required" }, { status: 400 });

    const langLine =
      language === "hindi" ? "Respond in Hindi (Devanagari); keep chemical names/formulae in standard notation."
      : language === "hinglish" ? "Respond in Hinglish (Hindi in Roman script + English chemistry terms)."
      : "Respond in English.";

    const prompt = `You are a NEET/JEE/Olympiad organic chemistry expert. Produce a complete, structured, exam-focused mini-lesson for the "${name}". ${langLine}

Output clean GitHub-flavored markdown using EXACTLY these sections and headings, in this order, with no preamble and no closing remarks. Omit ONLY the Stereochemistry section if it is genuinely not applicable to this reaction.

## ⚗️ ${name}

**📘 Definition:** one concise, exam-oriented line.

**🏷️ Type:** comma-separated tags (e.g. Condensation, Nucleophilic addition, Pericyclic, Oxidation, Rearrangement).

**🔬 General Reaction:** the generic scheme (reactants → product) using $...$ LaTeX for formulae.

**🧪 Standard Example:** one classic textbook example with reagents/conditions over the arrow, in $...$ LaTeX.

**⚙️ Key Reagents / Conditions:**
- bullet list of the essential reagents, catalysts and conditions

**🧠 Mechanism (3–8 steps):**
1. concise, arrow-based step
2. ...

**💡 Why It Happens:** 1–2 lines of student-friendly intuition (the driving force).

**🎁 Important Products:**
- bullet list of the commonly tested products

**🔄 Stereochemistry:** only if applicable (syn/anti addition, retention/inversion, endo preference, racemic, etc.).

**🎯 Exam Tip (NEET/JEE):** the trap or one-liner examiners love.

**🧩 Memory Trick:** a short mnemonic.

**⚠️ Common Mistakes:**
- bullet list of frequent student errors

**🔗 Related Reactions:** comma-separated list of 3–5 similar reactions.

Rules: chemically correct mechanisms only; standard textbook examples; accurate conditions; no hallucinated reagents; concise JEE/NEET-level language; all formulae in $...$ LaTeX.`;

    const text = await generateText(prompt);
    if (!text.trim()) return NextResponse.json({ error: UNAVAILABLE }, { status: 503 });
    return NextResponse.json({ explanation: text });
  } catch (err) {
    // Log technical details internally only; return a clean message to the client.
    console.error("Reaction explain error:", err);
    return NextResponse.json({ error: UNAVAILABLE }, { status: 503 });
  }
}
