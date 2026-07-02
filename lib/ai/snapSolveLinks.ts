import type { SnapSolveResponse } from "@/lib/snapSolveTypes";
import { masterFormulas } from "@/lib/masterSyllabus/formulas";
import { NOTES_CHAPTERS } from "@/lib/notesEngine";
import { NAME_REACTIONS, HIGH_YIELD } from "@/lib/nameReactions";
import { reactionSlug } from "@/lib/reactionSlug";
import { REAGENTS } from "@/lib/chemistry";
import { IMPORTANT_ORDERS } from "@/lib/importantOrders";
import { ALL_PYQ_QUESTIONS } from "@/lib/pyq";

// ─────────────────────────────────────────────────────────────────────────────
// Week 8 — Snap & Solve deep-linking (derivation layer)
//
// ARCHITECTURE NOTE (respects the locked Snap & Solve contract):
//   • The SnapSolve response schema is NOT modified and NOT duplicated here.
//   • The API still owns ALL inference (OCR, classification, confidence,
//     fallback, solution). This module does NOT re-infer any of that.
//   • This is a pure, deterministic RESOLUTION layer: it maps the API's own
//     semantic outputs (classification, recommendedPractice, parsedProblem,
//     solution text) onto EXISTING SSOT catalogues and routes.
//   • Every link points to a real catalogue entry / real route — no fake links,
//     no fake PYQs. When nothing resolves, the arrays are empty and the UI shows
//     an honest empty state.
// ─────────────────────────────────────────────────────────────────────────────

export interface SnapLink {
  label: string;
  href: string;
  note?: string;
}

export interface SnapSolveLinks {
  classification: SnapSolveResponse["classification"];
  detectedChapter: string | null;
  detectedTopic: string | null;
  formulas: SnapLink[];
  notes: SnapLink[];
  pyqs: SnapLink[];
  mechanisms: SnapLink[];
  reagents: SnapLink[];
  orders: SnapLink[];
  practice: string[];
}

// Chapter index — aligns notes / formula-vault / PYQ catalogues under one key.
// `formulaKey` matches a key in masterFormulas; `pyqChapter` matches the PYQ
// schema's chapter enum; `notesTitle` matches a NOTES_CHAPTERS title.
interface ChapterEntry {
  title: string;
  aliases: string[];
  formulaKey?: keyof typeof masterFormulas | string;
  pyqChapter?: string;
  notesTitle?: string;
  extraLearn?: SnapLink[];
}

const CHAPTER_INDEX: ChapterEntry[] = [
  {
    title: "Mole Concept",
    aliases: ["mole concept", "mole", "stoichiometr", "molarity", "molality", "mole fraction", "empirical", "limiting reagent", "avogadro", "concentration", "some basic concept"],
    formulaKey: "mole-concept",
    pyqChapter: "Some Basic Concepts",
    notesTitle: "Mole Concept",
  },
  {
    title: "Periodic Table",
    aliases: ["periodicity", "periodic table", "ionisation energy", "ionization energy", "electronegativ", "atomic radius", "electron gain enthalpy", "classification of element", "periodic trend"],
    pyqChapter: "Periodic Table",
    notesTitle: "Periodic Table",
    extraLearn: [{ label: "Trends Explorer", href: "/periodic-trends", note: "Radius · IE · Δₑ₉H · EN" }],
  },
  {
    title: "General Organic Chemistry",
    aliases: ["general organic", "inductive effect", "resonance", "mesomeric", "hyperconjugation", "carbocation", "carbanion", "aromatic", "electrophile", "nucleophile", "free radical"],
    pyqChapter: "General Organic Chemistry",
    notesTitle: "General Organic Chemistry",
  },
  {
    title: "Atomic Structure",
    aliases: ["atomic structure", "bohr", "de broglie", "quantum number", "orbital", "rydberg", "heisenberg", "photoelectric"],
    formulaKey: "atomic-structure",
    pyqChapter: "Atomic Structure",
  },
  {
    title: "Equilibrium",
    aliases: ["equilibrium", "buffer", "henderson", "le chatelier", "solubility product", "ionic product", "degree of dissociation"],
    formulaKey: "chemical-equilibrium",
    pyqChapter: "Equilibrium",
  },
  {
    title: "Thermodynamics",
    aliases: ["thermodynamic", "enthalpy", "entropy", "gibbs", "internal energy", "hess"],
    formulaKey: "thermodynamics",
    pyqChapter: "Thermodynamics",
  },
  {
    title: "Electrochemistry",
    aliases: ["electrochem", "nernst", "faraday", "cell potential", "electrolysis", "electrode potential", "conductivity"],
    formulaKey: "electrochemistry",
    pyqChapter: "Electrochemistry",
  },
  {
    title: "Chemical Kinetics",
    aliases: ["kinetic", "rate constant", "half life", "half-life", "order of reaction", "arrhenius", "rate law"],
    formulaKey: "chemical-kinetics",
    pyqChapter: "Chemical Kinetics",
  },
  {
    title: "Solutions",
    aliases: ["colligative", "raoult", "osmotic", "elevation of boiling", "depression of freezing", "van't hoff", "molal"],
    formulaKey: "solutions",
    pyqChapter: "Solutions",
  },
];

const MAX_PER_PANEL = 4;

/** Build a lowercase haystack from the API's OWN semantic outputs (never re-inferred). */
function buildHaystack(data: SnapSolveResponse): string {
  const parts: string[] = [
    data.parsedProblem,
    data.solution.coreAnswer,
    data.solution.exceptionFlag ?? "",
    ...data.recommendedPractice,
    ...data.solution.steps.map((s) => `${s.title} ${s.explanation}`),
  ];
  return parts.join(" • ").toLowerCase();
}

function includesAny(haystack: string, needles: string[]): string | null {
  for (const n of needles) {
    if (n.length >= 3 && haystack.includes(n)) return n;
  }
  return null;
}

/**
 * Derive the cross-links for a solved Snap & Solve response.
 * Pure & deterministic — safe to call inside useMemo keyed on data.id.
 */
export function deriveSnapSolveLinks(data: SnapSolveResponse): SnapSolveLinks {
  const haystack = buildHaystack(data);

  // ── Chapter / topic detection (resolution of API text, not re-inference) ──
  const matched = CHAPTER_INDEX.find((c) => includesAny(haystack, c.aliases));
  const detectedChapter = matched?.title ?? null;
  const detectedTopic =
    data.recommendedPractice[0] ??
    (matched ? includesAny(haystack, matched.aliases) : null) ??
    null;

  // ── Formula cards ──
  const formulas: SnapLink[] = [];
  if (matched?.formulaKey && masterFormulas[matched.formulaKey]) {
    for (const f of masterFormulas[matched.formulaKey].slice(0, MAX_PER_PANEL)) {
      formulas.push({ label: f.title, href: "/vault/formulas", note: matched.title });
    }
  }

  // ── Notes (Learn this topic) ──
  const notes: SnapLink[] = [];
  if (matched?.notesTitle) {
    const nc = NOTES_CHAPTERS.find((c) => c.title === matched.notesTitle);
    if (nc) notes.push({ label: `${nc.title} — full notes`, href: "/notes", note: nc.tagline });
  }
  if (matched?.extraLearn) notes.push(...matched.extraLearn);

  // ── Related PYQs (real counts only; never fabricated) ──
  const pyqs: SnapLink[] = [];
  if (matched?.pyqChapter) {
    const count = ALL_PYQ_QUESTIONS.filter((q) => q.chapter === matched.pyqChapter).length;
    if (count > 0) {
      pyqs.push({
        label: `${matched.pyqChapter} — previous-year questions`,
        href: "/pyq",
        note: `${count} question${count === 1 ? "" : "s"} in the PYQ bank`,
      });
    }
  }

  // ── Mechanisms (named reactions that literally appear in the solution) ──
  const mechHits = NAME_REACTIONS.filter((name) => name.length >= 6 && haystack.includes(name.toLowerCase()));
  mechHits.sort((a, b) => Number(HIGH_YIELD.has(b)) - Number(HIGH_YIELD.has(a)));
  const mechanisms: SnapLink[] = mechHits.slice(0, MAX_PER_PANEL).map((name) => ({
    label: name,
    href: `/learn/reactions/${reactionSlug(name)}`,
    note: HIGH_YIELD.has(name) ? "High-yield · AI mechanism" : "AI mechanism",
  }));

  // ── Reagents (catalogue names/formulae that appear in the solution) ──
  const reagents: SnapLink[] = [];
  for (const r of REAGENTS) {
    if (reagents.length >= MAX_PER_PANEL) break;
    const name = r.name.toLowerCase();
    const nameHit = name.length >= 3 && haystack.includes(name);
    const aliasHit = r.aliases.some((a) => a.length >= 3 && haystack.includes(a.toLowerCase()));
    if (nameHit || aliasHit) {
      reagents.push({ label: r.name, href: "/reagents", note: r.formula || undefined });
    }
  }

  // ── Important orders (property phrases that appear in the solution) ──
  const orders: SnapLink[] = [];
  const seenOrder = new Set<string>();
  for (const o of IMPORTANT_ORDERS) {
    if (orders.length >= 3) break;
    const propTokens = o.property.toLowerCase().split(/[^a-z]+/).filter((t) => t.length >= 5);
    if (propTokens.some((t) => haystack.includes(t)) && !seenOrder.has(o.property)) {
      seenOrder.add(o.property);
      orders.push({ label: o.property, href: "/important-orders", note: o.order });
    }
  }

  return {
    classification: data.classification,
    detectedChapter,
    detectedTopic,
    formulas,
    notes,
    pyqs,
    mechanisms,
    reagents,
    orders,
    practice: data.recommendedPractice,
  };
}
