import "server-only";
import { HALOGEN_FAMILY_MASTER_MARKDOWN } from "./content";

export interface HalogenFamilyPartDef {
  slug: string;
  number: number;
  title: string;
  section: number;
}

export const HALOGEN_FAMILY_PARTS: HalogenFamilyPartDef[] = [
  { slug: "part1", number: 1, title: "p-Block foundation and the place of Group 17", section: 1 },
  { slug: "part2", number: 2, title: "Group 17 identity and electronic configuration", section: 2 },
  { slug: "part3", number: 3, title: "Atomic and physical properties — data and complete orders", section: 3 },
  { slug: "part4", number: 4, title: "Oxidation states, oxidising power and the F₂ anomaly", section: 4 },
  { slug: "part5", number: 5, title: "Anomalous behaviour of fluorine; the F → Cl → rest gradation", section: 5 },
  { slug: "part6", number: 6, title: "Elemental chemical reactivity — conditions included", section: 6 },
  { slug: "part7", number: 7, title: "Preparation of the halogens", section: 7 },
  { slug: "part8", number: 8, title: "Chlorine — properties and uses", section: 8 },
  { slug: "part9", number: 9, title: "Bleaching powder, Ca(OCl)Cl", section: 9 },
  { slug: "part10", number: 10, title: "Oxoacids of the halogens", section: 10 },
  { slug: "part11", number: 11, title: "Hydrogen halides — HX", section: 11 },
  { slug: "part12", number: 12, title: "Interhalogen compounds", section: 12 },
  { slug: "part13", number: 13, title: "Pseudohalogens and pseudohalides", section: 13 },
  { slug: "part14", number: 14, title: "Uses of the halogens and their compounds", section: 14 },
  { slug: "part15", number: 15, title: "One-page reaction networks", section: 15 },
  { slug: "part16", number: 16, title: "JEE-Advanced traps and derived tools", section: 16 },
  { slug: "part17", number: 17, title: "Ultra-fast final revision", section: 17 },
  { slug: "part18", number: 18, title: "Chapter review questions (with worked answers)", section: 18 },
  { slug: "part19", number: 19, title: "Chapter coverage checklist", section: 19 },
  { slug: "part20", number: 20, title: "NCERT Class XII, Unit 7 — complete reaction & preparation ledger", section: 20 },
  { slug: "part21", number: 21, title: "Extended reaction set for problem-solving (question-bank layer)", section: 21 },
];

function sections() {
  const lines = HALOGEN_FAMILY_MASTER_MARKDOWN.split("\n");
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

export function halogenFamilyPartMarkdown(part: HalogenFamilyPartDef) {
  const found = sections().find((item) => item.num === part.section);
  return found ? found.text : "";
}

export function halogenFamilyPartBySlug(slug: string) {
  return HALOGEN_FAMILY_PARTS.find((part) => part.slug === slug);
}
