import { ALL_PYQ_QUESTIONS, type PYQQuestion } from "@/lib/pyq";

export type RecallDeckKey = "formula" | "reagent" | "fact" | "reaction" | "inorganic";

export interface RecallCard {
  id: string;
  deck: RecallDeckKey;
  front: string;
  back: string;
  note?: string;
  chapter: string;
  tags: string[];
  important: boolean;
}

export const RECALL_DECKS: Array<{ key: RecallDeckKey; title: string; icon: string; description: string }> = [
  { key: "formula", title: "Formula Recall", icon: "Σ", description: "Expressions, variables and application cues." },
  { key: "reagent", title: "Reagent Recall", icon: "⚗", description: "What a reagent does and where it is used." },
  { key: "fact", title: "Facts & Orders", icon: "↕", description: "Exceptions, trends and high-yield ordering facts." },
  { key: "reaction", title: "Reaction Recall", icon: "→", description: "Named reactions, reagents and key outcomes." },
  { key: "inorganic", title: "Inorganic NCERT", icon: "🧪", description: "Direct inorganic facts and question-answer recall." },
];

const INORGANIC_CHAPTERS = new Set([
  "Periodic Table",
  "s-Block Elements",
  "p-Block Elements",
  "d and f Block Elements",
  "Coordination Compounds",
  "Hydrogen",
  "Metallurgy",
  "Qualitative Analysis",
]);

function compact(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function safeId(value: string): string {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0).toString(36);
}

function contextAnswer(question: PYQQuestion): string {
  const details = [
    question.reactions.length ? `Reaction: ${question.reactions.join(", ")}` : "",
    question.reagents.length ? `Reagent(s): ${question.reagents.join(", ")}` : "",
    question.concepts.length ? `Concept: ${question.concepts.join(", ")}` : "",
  ].filter(Boolean);
  return details.length ? details.join(" · ") : compact(question.explanation || question.answer);
}

function buildCards(): RecallCard[] {
  const cards = new Map<string, RecallCard>();

  const add = (card: Omit<RecallCard, "id">) => {
    const front = compact(card.front);
    const back = compact(card.back);
    if (!front || !back) return;
    const identity = `${card.deck}|${front.toLowerCase()}`;
    if (cards.has(identity)) return;
    cards.set(identity, { ...card, front, back, id: `recall:${card.deck}:${safeId(identity)}` });
  };

  for (const question of ALL_PYQ_QUESTIONS) {
    const important = Boolean(question.trending || question.frequency >= 2 || question.ncertDirect);
    const baseTags = uniqueStrings([question.subtopic, ...question.concepts]).slice(0, 5);

    for (const formula of question.formulas) {
      add({
        deck: "formula",
        front: `Recall the formula used for: ${question.subtopic}`,
        back: formula,
        note: compact(question.explanation),
        chapter: question.chapter,
        tags: baseTags,
        important,
      });
    }

    for (const reagent of question.reagents) {
      add({
        deck: "reagent",
        front: `What is the role of ${reagent} here?`,
        back: contextAnswer(question),
        note: compact(question.explanation),
        chapter: question.chapter,
        tags: uniqueStrings([reagent, question.subtopic, ...question.reactions]).slice(0, 5),
        important,
      });
    }

    for (const exception of question.exceptions) {
      add({
        deck: "fact",
        front: exception,
        back: compact(question.explanation || `This is a tested exception from ${question.chapter}: ${question.subtopic}.`),
        note: `${question.exam} ${question.year}`,
        chapter: question.chapter,
        tags: baseTags,
        important: true,
      });
    }

    for (const reaction of question.reactions) {
      add({
        deck: "reaction",
        front: `Recall the reagents, condition or key result of ${reaction}.`,
        back: contextAnswer(question),
        note: compact(question.explanation),
        chapter: question.chapter,
        tags: uniqueStrings([reaction, ...question.reagents, question.subtopic]).slice(0, 5),
        important,
      });
    }

    if (question.ncertDirect && INORGANIC_CHAPTERS.has(question.chapter)) {
      add({
        deck: "inorganic",
        front: question.question,
        back: question.options?.[question.answer] ? `${question.answer}. ${question.options[question.answer]}` : question.answer,
        note: compact(question.explanation),
        chapter: question.chapter,
        tags: uniqueStrings([question.subtopic, ...question.concepts, ...question.ncertLines]).slice(0, 6),
        important: true,
      });
    }
  }

  return [...cards.values()];
}

function uniqueStrings(values: string[]): string[] {
  return [...new Set(values.map(compact).filter(Boolean))];
}

export const ALL_RECALL_CARDS: RecallCard[] = buildCards();

export function cardsForDeck(deck: RecallDeckKey): RecallCard[] {
  return ALL_RECALL_CARDS.filter((card) => card.deck === deck);
}
