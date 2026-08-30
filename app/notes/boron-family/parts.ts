import "server-only";
import { BORON_FAMILY_MASTER_MARKDOWN } from "./content";
import { BORON_FAMILY_QUESTION_BANK_MARKDOWN } from "./questionBank";

export interface BoronFamilyPartDef {
  slug: string;
  number: number;
  title: string;
  /** Master-markdown section number, or "qbank" for the question-bank lesson. */
  section: number | "qbank";
}

export const BORON_FAMILY_PARTS: BoronFamilyPartDef[] = [
  { slug: "part1", number: 1, title: "p-Block foundation and periodic-table context", section: 1 },
  { slug: "part2", number: 2, title: "Group 13 identity, occurrence and electronic configuration", section: 2 },
  { slug: "part3", number: 3, title: "Atomic and physical properties — data and complete orders", section: 3 },
  { slug: "part4", number: 4, title: "Oxidation states, bonding and general characteristics of compounds", section: 4 },
  { slug: "part5", number: 5, title: "Elemental chemical reactivity: conditions included", section: 5 },
  { slug: "part6", number: 6, title: "Anomalous boron and the B–Si diagonal relationship", section: 6 },
  { slug: "part7", number: 7, title: "Elemental boron: preparation, purification and allotropy", section: 7 },
  { slug: "part8", number: 8, title: "Boron–oxygen compounds: B₂O₃, borates, borax and boric acid", section: 8 },
  { slug: "part9", number: 9, title: "Boron halides, tetrahaloborates and boron dihalides", section: 9 },
  { slug: "part10", number: 10, title: "Boranes, borohydrides, borazine, BN and B₄C", section: 10 },
  { slug: "part11", number: 11, title: "Aluminium and important aluminium compounds", section: 11 },
  { slug: "part12", number: 12, title: "Uses of boron, aluminium and their compounds", section: 12 },
  { slug: "part13", number: 13, title: "p-Block overview and Group 13 connections", section: 13 },
  { slug: "part14", number: 14, title: "JEE question bank — Q1–Q90, reactions & answer key", section: "qbank" },
];

function sections() {
  const lines = BORON_FAMILY_MASTER_MARKDOWN.split("\n");
  const result: { num: number; text: string }[] = [];
  let current: { num: number; lines: string[] } | undefined;
  for (const line of lines) {
    const match = /^# (\d+)\./.exec(line);
    if (match) {
      if (current) result.push({ num: current.num, text: current.lines.join("\n") });
      current = { num: Number(match[1]), lines: [line] };
    } else if (current) {
      current.lines.push(line);
    }
  }
  if (current) result.push({ num: current.num, text: current.lines.join("\n") });
  return result;
}

export function boronFamilyPartMarkdown(part: BoronFamilyPartDef) {
  if (part.section === "qbank") return BORON_FAMILY_QUESTION_BANK_MARKDOWN;
  const found = sections().find((item) => item.num === part.section);
  return found ? found.text : "";
}

export function boronFamilyPartBySlug(slug: string) {
  return BORON_FAMILY_PARTS.find((part) => part.slug === slug);
}
