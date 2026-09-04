import "server-only";
import { OXYGEN_FAMILY_MASTER_MARKDOWN } from "./content";

export interface OxygenFamilyPartDef {
  slug: string;
  number: number;
  title: string;
  section: number;
}

export const OXYGEN_FAMILY_PARTS: OxygenFamilyPartDef[] = [
  { slug: "part1", number: 1, title: "p-Block foundation and the place of Group 16", section: 1 },
  { slug: "part2", number: 2, title: "Group 16 identity and electronic configuration", section: 2 },
  { slug: "part3", number: 3, title: "Atomic and physical properties — data and complete orders", section: 3 },
  { slug: "part4", number: 4, title: "Oxidation states, bonding and the inert-pair effect", section: 4 },
  { slug: "part5", number: 5, title: "Anomalous behaviour of oxygen; the O → S → rest gradation", section: 5 },
  { slug: "part6", number: 6, title: "Elemental chemical reactivity — conditions included", section: 6 },
  { slug: "part7", number: 7, title: "Allotropy — oxygen and sulphur in full", section: 7 },
  { slug: "part8", number: 8, title: "Dioxygen, O₂", section: 8 },
  { slug: "part9", number: 9, title: "Ozone, O₃", section: 9 },
  { slug: "part10", number: 10, title: "Hydrides of Group 16 — H₂E", section: 10 },
  { slug: "part11", number: 11, title: "Oxides — the full classification", section: 11 },
  { slug: "part12", number: 12, title: "Hydrogen peroxide, H₂O₂", section: 12 },
  { slug: "part13", number: 13, title: "Sulphur dioxide, SO₂", section: 13 },
  { slug: "part14", number: 14, title: "Oxoacids of sulphur", section: 14 },
  { slug: "part15", number: 15, title: "Sulphuric acid, H₂SO₄ — \"the king of chemicals\"", section: 15 },
  { slug: "part16", number: 16, title: "Halides and oxohalides of Group 16", section: 16 },
  { slug: "part17", number: 17, title: "Selenium, tellurium and polonium — comparative chemistry", section: 17 },
  { slug: "part18", number: 18, title: "Uses of Group 16 elements and their compounds", section: 18 },
  { slug: "part19", number: 19, title: "One-page reaction networks", section: 19 },
  { slug: "part20", number: 20, title: "JEE-Advanced traps and derived tools", section: 20 },
  { slug: "part21", number: 21, title: "Ultra-fast final revision", section: 21 },
  { slug: "part22", number: 22, title: "Chapter review questions (with worked answers)", section: 22 },
  { slug: "part23", number: 23, title: "Chapter coverage checklist", section: 23 },
  { slug: "part24", number: 24, title: "NCERT Class XII, Unit 7 — complete reaction & preparation ledger", section: 24 },
  { slug: "part25", number: 25, title: "Extended reaction set for problem-solving (question-bank layer)", section: 25 },
];

function sections() {
  const lines = OXYGEN_FAMILY_MASTER_MARKDOWN.split("\n");
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

export function oxygenFamilyPartMarkdown(part: OxygenFamilyPartDef) {
  const found = sections().find((item) => item.num === part.section);
  return found ? found.text : "";
}

export function oxygenFamilyPartBySlug(slug: string) {
  return OXYGEN_FAMILY_PARTS.find((part) => part.slug === slug);
}
