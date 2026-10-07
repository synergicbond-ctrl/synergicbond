import "server-only";
import { HYDROLYSIS_MASTER_MARKDOWN } from "./content";

export interface HydrolysisPartDef {
  slug: string;
  number: number;
  title: string;
  /** Master-markdown section number. */
  section: number;
}

export const HYDROLYSIS_PARTS: HydrolysisPartDef[] = [
  { slug: "part1", number: 1, title: "Master mental model: predicting hydrolysis before memorising it", section: 1 },
  { slug: "part2", number: 2, title: "Lewis structures and the molecular-orbital view", section: 2 },
  { slug: "part3", number: 3, title: "Mechanism families: A/D/I, addition–elimination, push–pull, redox", section: 3 },
  { slug: "part4", number: 4, title: "Systematic hydrolysis chemistry: Groups 13–18, aqua ions and salts", section: 4 },
  { slug: "part5", number: 5, title: "Master tables: product bank, trend bank, oxyacid structure", section: 5 },
  { slug: "part6", number: 6, title: "Forty high-yield JEE traps", section: 6 },
  { slug: "part7", number: 7, title: "Worked prediction examples", section: 7 },
  { slug: "part8", number: 8, title: "Original JEE-style practice, with answers", section: 8 },
];

function sections() {
  const lines = HYDROLYSIS_MASTER_MARKDOWN.split("\n");
  const result: { num: number; text: string }[] = [];
  const preamble: string[] = [];
  let current: { num: number; lines: string[] } | undefined;
  for (const line of lines) {
    const match = /^# (\d+)\s/.exec(line);
    if (match) {
      if (current) result.push({ num: current.num, text: current.lines.join("\n") });
      current = { num: Number(match[1]), lines: [line] };
    } else if (current) {
      current.lines.push(line);
    } else {
      preamble.push(line);
    }
  }
  if (current) result.push({ num: current.num, text: current.lines.join("\n") });
  // fold the un-numbered "Notation and scope" preamble into section 1
  if (result.length && preamble.some((l) => l.trim().length > 0)) {
    result[0] = { num: result[0].num, text: preamble.join("\n") + "\n\n" + result[0].text };
  }
  return result;
}

export function hydrolysisPartMarkdown(part: HydrolysisPartDef) {
  const found = sections().find((item) => item.num === part.section);
  return found ? found.text : "";
}

export function hydrolysisPartBySlug(slug: string) {
  return HYDROLYSIS_PARTS.find((part) => part.slug === slug);
}
