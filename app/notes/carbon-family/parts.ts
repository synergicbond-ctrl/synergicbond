import "server-only";
import { CARBON_FAMILY_MASTER_MARKDOWN } from "./content";
import { CARBON_FAMILY_QUESTION_BANK_MARKDOWN } from "./questionBank";

export interface CarbonFamilyPartDef {
  slug: string;
  number: number;
  title: string;
  /** Master-markdown section number, or "qbank" for the question-bank lesson. */
  section: number | "qbank";
}

export const CARBON_FAMILY_PARTS: CarbonFamilyPartDef[] = [
  { slug: "part1", number: 1, title: "Identity, occurrence and periodic trend map", section: 1 },
  { slug: "part2", number: 2, title: "Oxidation states and the inert-pair effect", section: 2 },
  { slug: "part3", number: 3, title: "Anomalous behaviour of carbon; diagonal relationship", section: 3 },
  { slug: "part4", number: 4, title: "Allotropes of carbon", section: 4 },
  { slug: "part5", number: 5, title: "Chemical reactivity of the elements", section: 5 },
  { slug: "part6", number: 6, title: "Carbides", section: 6 },
  { slug: "part7", number: 7, title: "Oxides of carbon — carbon monoxide and carbonyls", section: 7 },
  { slug: "part8", number: 8, title: "Carbon dioxide, carbonates, C₃O₂ and CS₂", section: 8 },
  { slug: "part9", number: 9, title: "Silicon — extraction, purification and reactivity", section: 9 },
  { slug: "part10", number: 10, title: "Silicon dioxide (silica)", section: 10 },
  { slug: "part11", number: 11, title: "Silicates — the full seven-class system", section: 11 },
  { slug: "part12", number: 12, title: "Glass", section: 12 },
  { slug: "part13", number: 13, title: "Silicones", section: 13 },
  { slug: "part14", number: 14, title: "Hydrides of Group 14", section: 14 },
  { slug: "part15", number: 15, title: "Halides of Group 14", section: 15 },
  { slug: "part16", number: 16, title: "Complexes and internal pπ–dπ bonding", section: 16 },
  { slug: "part17", number: 17, title: "Tin chemistry — reaction map", section: 17 },
  { slug: "part18", number: 18, title: "Lead chemistry — mixed oxides and Pb(IV)", section: 18 },
  { slug: "part19", number: 19, title: "One-page reaction networks", section: 19 },
  { slug: "part20", number: 20, title: "JEE Advanced traps and derived tools", section: 20 },
  { slug: "part21", number: 21, title: "Ultra-fast final revision", section: 21 },
  { slug: "part22", number: 22, title: "Low-frequency but source-testable facts", section: 22 },
  { slug: "part23", number: 23, title: "Source coverage checklist", section: 23 },
  { slug: "part24", number: 24, title: "JEE question bank — all patterns with answer key", section: "qbank" },
];

function sections() {
  const lines = CARBON_FAMILY_MASTER_MARKDOWN.split("\n");
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

export function carbonFamilyPartMarkdown(part: CarbonFamilyPartDef) {
  if (part.section === "qbank") return CARBON_FAMILY_QUESTION_BANK_MARKDOWN;
  const found = sections().find((item) => item.num === part.section);
  return found ? found.text : "";
}

export function carbonFamilyPartBySlug(slug: string) {
  return CARBON_FAMILY_PARTS.find((part) => part.slug === slug);
}
