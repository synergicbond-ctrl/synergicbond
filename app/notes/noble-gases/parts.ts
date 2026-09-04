import "server-only";
import { NOBLE_GASES_MASTER_MARKDOWN } from "./content";

export interface NobleGasesPartDef {
  slug: string;
  number: number;
  title: string;
  section: number;
}

export const NOBLE_GASES_PARTS: NobleGasesPartDef[] = [
  { slug: "part1", number: 1, title: "p-Block foundation and the place of Group 18", section: 1 },
  { slug: "part2", number: 2, title: "Group 18 identity and electronic configuration", section: 2 },
  { slug: "part3", number: 3, title: "Atomic and physical properties — data and complete orders", section: 3 },
  { slug: "part4", number: 4, title: "Chemical behaviour — why the noble gases are unreactive, and how xenon breaks the rule", section: 4 },
  { slug: "part5", number: 5, title: "Compounds of xenon", section: 5 },
  { slug: "part6", number: 6, title: "Compounds of the other noble gases", section: 6 },
  { slug: "part7", number: 7, title: "Uses of the noble gases", section: 7 },
  { slug: "part8", number: 8, title: "Consolidated group-trend table (\"the orders\")", section: 8 },
  { slug: "part9", number: 9, title: "JEE-Advanced traps and derived tools", section: 9 },
  { slug: "part10", number: 10, title: "Ultra-fast final revision", section: 10 },
  { slug: "part11", number: 11, title: "Chapter review questions (with worked answers)", section: 11 },
  { slug: "part12", number: 12, title: "Chapter coverage checklist", section: 12 },
  { slug: "part13", number: 13, title: "NCERT Class XII, Unit 7 — complete reaction & preparation ledger", section: 13 },
  { slug: "part14", number: 14, title: "Extended reaction set for problem-solving (question-bank layer)", section: 14 },
];

function sections() {
  const lines = NOBLE_GASES_MASTER_MARKDOWN.split("\n");
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

export function nobleGasesPartMarkdown(part: NobleGasesPartDef) {
  const found = sections().find((item) => item.num === part.section);
  return found ? found.text : "";
}

export function nobleGasesPartBySlug(slug: string) {
  return NOBLE_GASES_PARTS.find((part) => part.slug === slug);
}
