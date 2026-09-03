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
  { slug: "part1", number: 1, title: "p-Block foundation and the place of Group 14", section: 1 },
  { slug: "part2", number: 2, title: "Group 14 identity and electronic configuration", section: 2 },
  { slug: "part3", number: 3, title: "Atomic and physical properties — data and complete orders", section: 3 },
  { slug: "part4", number: 4, title: "Oxidation states, bonding and the inert-pair effect", section: 4 },
  { slug: "part5", number: 5, title: "Anomalous behaviour of carbon; the C → Si → rest gradation", section: 5 },
  { slug: "part6", number: 6, title: "Elemental chemical reactivity — conditions included", section: 6 },
  { slug: "part7", number: 7, title: "Allotropes of carbon", section: 7 },
  { slug: "part8", number: 8, title: "Carbides", section: 8 },
  { slug: "part9", number: 9, title: "Oxides of carbon — carbon monoxide and carbonyls", section: 9 },
  { slug: "part10", number: 10, title: "Carbon dioxide, carbonic acid and carbonates", section: 10 },
  { slug: "part11", number: 11, title: "Carbon disulphide and sulphides of carbon", section: 11 },
  { slug: "part12", number: 12, title: "Silicon — preparation, purification and reactivity", section: 12 },
  { slug: "part13", number: 13, title: "Silicon dioxide (silica)", section: 13 },
  { slug: "part14", number: 14, title: "Silicates — the full seven-class structural system", section: 14 },
  { slug: "part15", number: 15, title: "Glass and cement", section: 15 },
  { slug: "part16", number: 16, title: "Silicones", section: 16 },
  { slug: "part17", number: 17, title: "Hydrides of Group 14", section: 17 },
  { slug: "part18", number: 18, title: "Halides of Group 14", section: 18 },
  { slug: "part19", number: 19, title: "Complexes and internal pπ–dπ bonding", section: 19 },
  { slug: "part20", number: 20, title: "Tin chemistry — reaction map", section: 20 },
  { slug: "part21", number: 21, title: "Lead chemistry — mixed oxides and Pb(IV)", section: 21 },
  { slug: "part22", number: 22, title: "Uses of Group 14 elements and their compounds", section: 22 },
  { slug: "part23", number: 23, title: "p-Block overview and Group 14 connections", section: 23 },
  { slug: "part24", number: 24, title: "One-page reaction networks", section: 24 },
  { slug: "part25", number: 25, title: "JEE Advanced traps and derived tools", section: 25 },
  { slug: "part26", number: 26, title: "Ultra-fast final revision", section: 26 },
  { slug: "part27", number: 27, title: "Chapter review questions (with worked answers)", section: 27 },
  { slug: "part28", number: 28, title: "Chapter coverage checklist", section: 28 },
  { slug: "part29", number: 29, title: "JEE question bank — all patterns with answer key", section: "qbank" },
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
