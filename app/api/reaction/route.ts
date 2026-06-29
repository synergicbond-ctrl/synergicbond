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

    const prompt = `You are an expert organic chemistry content author, reaction-mechanism specialist and fact-checker. Create a COMPLETE, EXAM-READY, scientifically VERIFIED reaction note for "${name}". ${langLine}

ACCURACY RULES (strict):
- Write ONLY verified chemistry cross-checked against NCERT, Clayden, Morrison & Boyd, March, Carey & Sundberg and IUPAC recommendations.
- Do NOT assume, infer or invent reagents, intermediates, products, stereochemistry, RDS or kinetics.
- If literature disagrees, state the disagreement. If a detail is uncertain, write exactly: "Not conclusively established in standard literature." Never guess.
- Every mechanistic statement must be chemically correct. Omit any uncertain statement.

Output clean GitHub-flavored markdown (tables allowed) using EXACTLY these sections in order. Use $...$ LaTeX for all formulae/equations. No preamble, no closing remarks. Keep each section tight but complete.

## ⚗️ ${name}

### 1. Reaction Name
Official name, alternative names, named-reaction classification (if any).

### 2. Definition
Precise textbook-level definition.

### 3. Type of Reaction
All applicable categories (e.g. nucleophilic substitution, addition, elimination, rearrangement, condensation, oxidation, reduction, pericyclic, radical, electrophilic aromatic substitution).

### 4. General Reaction
Generic scheme in proper notation.

### 5. Standard Examples
3–5 verified examples — reactants, reagents, conditions, products.

### 6. Reaction Conditions
Catalyst, solvent, temperature, pressure, light/UV, atmosphere, acidic/basic. Then **Conditions required**, **Conditions to avoid**, **Why these conditions matter**.

### 7. Mechanism
Complete stepwise mechanism. For EACH step: the chemical event; curved-arrow description (which bond breaks/forms, electron source → destination); intermediate formed (name + type: carbocation/carbanion/radical/enolate/arenium ion/tetrahedral intermediate/ylide/etc.); brief stability discussion.

### 8. Curved-Arrow Summary
Concise arrow-pushing sequence (Step 1 → Step 2 → …), suitable for drawing.

### 9. Rate-Determining Step
Exact RDS and why it is slow; energy-profile reasoning; evidence if known. If none established, say so.

### 10. Order of Reaction
Molecularity, kinetic order, rate law (e.g. Rate = k[RX] or Rate = k[RX][Nu⁻]). If not experimentally established, write "Order of reaction is not universally defined." Do not invent kinetics.

### 11. Stereochemistry
Retention/inversion/racemization, syn/anti addition, cis/trans, E/Z, stereospecific vs stereoselective. If irrelevant, write "No stereochemical consequences."

### 12. Regioselectivity
Markovnikov/anti-Markovnikov, o/p/m orientation, kinetic vs thermodynamic — only if applicable.

### 13. Energy Profile
Transition states, activation energy, relative intermediate energies, highest-energy step.

### 14. Why The Reaction Occurs
Driving forces (aromatic/resonance/hyperconjugative stabilisation, ring-strain relief, entropy/enthalpy, stable intermediate/product).

### 15. Scope
Substrates that work well.

### 16. Limitations
Substrates that fail; side/competing reactions.

### 17. Important Variations
Notable modified versions.

### 18. Exam Q&A
At least 8 conceptual questions WITH answers.

### 19. Common Mistakes
At least 8 accurate student errors.

### 20. Memory Tricks
Only chemically correct mnemonics.

### 21. Comparison Table
A markdown table comparing with closely related reactions — columns: Reaction | Key Reagent | Intermediate | RDS | Product | Distinguishing Feature.

### 22. JEE / NEET High-Yield Points
The highest-yield exam facts.

### 23. References
The standard sources used (NCERT, Clayden, Morrison & Boyd, March, Carey & Sundberg), with chapter/topic where possible.`;

    const text = await generateText(prompt);
    if (!text.trim()) return NextResponse.json({ error: UNAVAILABLE }, { status: 503 });
    return NextResponse.json({ explanation: text });
  } catch (err) {
    // Log technical details internally only; return a clean message to the client.
    console.error("Reaction explain error:", err);
    return NextResponse.json({ error: UNAVAILABLE }, { status: 503 });
  }
}
