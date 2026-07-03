import { formulaCards } from "@/lib/chemistry/formulas";
import { REAGENTS } from "@/lib/chemistry/reagents";
import { EXCEPTIONS } from "@/lib/chemistry/exceptions";
import { IMPORTANT_ORDERS } from "@/lib/importantOrders";

// ─────────────────────────────────────────────────────────────────────────────
// Memory Engine V1 decks (Roadmap V2 · Week 5).
//
// Recall cards derived from EXISTING verified content — no new content, no
// fabrication. Each card is a {front → back} pair with `render: true` when the
// text carries chemistry notation the UI should pass through renderChemistry.
//
// Reaction Recall is intentionally NOT built: NAME_REACTIONS is 700 names with
// no answer side, so a real recall card can't be formed yet — it stays honest
// coming-soon in the hub rather than shipping empty cards.
// ─────────────────────────────────────────────────────────────────────────────

export type DeckKey = "formula" | "reagent" | "fact" | "order";

export interface RecallCard {
  id: string;
  deck: DeckKey;
  front: string;
  back: string;
  hint?: string;
  render: boolean;
}

export interface DeckMeta {
  key: DeckKey;
  label: string;
  icon: string;
  blurb: string;
}

export const DECKS: DeckMeta[] = [
  { key: "formula", label: "Formula Recall", icon: "🧮", blurb: "Recall expressions, variables and units." },
  { key: "reagent", label: "Reagent Recall", icon: "⚗️", blurb: "What each reagent does, and its selectivity." },
  { key: "fact", label: "Fact Recall", icon: "🧠", blurb: "NCERT anomalies and exceptions." },
  { key: "order", label: "Order Recall", icon: "📊", blurb: "Verified ranking sequences." },
];

const formulaCardsDeck: RecallCard[] = formulaCards.map((f) => ({
  id: `formula:${f.id}`,
  deck: "formula",
  front: `${f.name}${f.chapter ? ` — ${f.chapter}` : ""}`,
  back: `${f.formula}${f.variables.length ? `\n\nwhere: ${f.variables.join(", ")}` : ""}${f.units ? `\n\nUnits: ${f.units}` : ""}`,
  hint: f.topic || undefined,
  render: true,
}));

const reagentDeck: RecallCard[] = REAGENTS.map((r) => ({
  id: `reagent:${r.id}`,
  deck: "reagent",
  front: `${r.name}${r.formula ? ` (${r.formula})` : ""}`,
  back: `${r.role} — ${r.definition}${r.selectivity ? `\n\nSelectivity: ${r.selectivity}` : ""}`,
  hint: r.category || undefined,
  render: true,
}));

const factDeck: RecallCard[] = EXCEPTIONS.map((e) => ({
  id: `fact:${e.id}`,
  deck: "fact",
  front: e.title,
  back: `${e.observation}\n\nWhy: ${e.explanation}`,
  hint: e.chapter || undefined,
  render: true,
}));

const orderDeck: RecallCard[] = IMPORTANT_ORDERS.map((o) => ({
  id: `order:${o.id}`,
  deck: "order",
  front: o.property,
  back: `${o.order}${o.note ? `\n\n${o.note}` : ""}`,
  hint: o.group || undefined,
  render: true,
}));

const ALL: Record<DeckKey, RecallCard[]> = {
  formula: formulaCardsDeck,
  reagent: reagentDeck,
  fact: factDeck,
  order: orderDeck,
};

export function deckCards(deck: DeckKey): RecallCard[] {
  return ALL[deck] ?? [];
}

export function allCards(): RecallCard[] {
  return [...formulaCardsDeck, ...reagentDeck, ...factDeck, ...orderDeck];
}

export const DECK_COUNTS: Record<DeckKey, number> = {
  formula: formulaCardsDeck.length,
  reagent: reagentDeck.length,
  fact: factDeck.length,
  order: orderDeck.length,
};
