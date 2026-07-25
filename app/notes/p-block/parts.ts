import "server-only";
import { P_BLOCK_MASTER_MARKDOWN } from "./content";

export interface PBlockPartDef { slug: string; number: number; title: string; fromSection: number; toSection: number; }

export const P_BLOCK_PARTS: PBlockPartDef[] = [
  { slug: "part1", number: 1, title: "P-block map, trends & first-element anomaly", fromSection: 1, toSection: 1 },
  { slug: "part2", number: 2, title: "Group 13 — Boron family", fromSection: 2, toSection: 2 },
  { slug: "part3", number: 3, title: "Group 14 — Carbon, silicon & silicates", fromSection: 3, toSection: 3 },
  { slug: "part4", number: 4, title: "Group 15 — Nitrogen, ammonia & oxides", fromSection: 4, toSection: 4 },
  { slug: "part5", number: 5, title: "Group 15 — Phosphorus oxoacids", fromSection: 5, toSection: 5 },
  { slug: "part6", number: 6, title: "Group 16 — Oxygen, ozone & sulphur", fromSection: 6, toSection: 6 },
  { slug: "part7", number: 7, title: "Group 16 — Sulphur oxoacids & redox", fromSection: 7, toSection: 7 },
  { slug: "part8", number: 8, title: "Group 17 — Halogens & interhalogens", fromSection: 8, toSection: 8 },
  { slug: "part9", number: 9, title: "Group 18 — Noble gases & xenon", fromSection: 9, toSection: 9 },
  { slug: "part10", number: 10, title: "JEE Advanced synthesis & revision", fromSection: 10, toSection: 10 },
  { slug: "part11", number: 11, title: "Group 13 — Compounds and applications", fromSection: 11, toSection: 11 },
  { slug: "part12", number: 12, title: "Group 14 — Allotropes and silicon materials", fromSection: 12, toSection: 12 },
  { slug: "part13", number: 13, title: "Silicates, zeolites and silicones", fromSection: 13, toSection: 13 },
  { slug: "part14", number: 14, title: "Group 15 — Nitrogen, ammonia and nitric acid", fromSection: 14, toSection: 14 },
  { slug: "part15", number: 15, title: "Group 15 — Oxides, allotropes and chlorides", fromSection: 15, toSection: 15 },
  { slug: "part16", number: 16, title: "Group 16 — Oxygen, ozone and sulphur", fromSection: 16, toSection: 16 },
  { slug: "part17", number: 17, title: "Group 16 — SO₂, H₂SO₄ and contact process", fromSection: 17, toSection: 17 },
  { slug: "part18", number: 18, title: "Group 17 — Chlorine, HCl and oxyacids", fromSection: 18, toSection: 18 },
  { slug: "part19", number: 19, title: "Interhalogens — Shapes and hydrolysis", fromSection: 19, toSection: 19 },
  { slug: "part20", number: 20, title: "Group 18 — Xenon compounds", fromSection: 20, toSection: 20 },
];

function sections() {
  const lines = P_BLOCK_MASTER_MARKDOWN.split("\n");
  const preamble: string[] = []; const result: { num: number; text: string }[] = [];
  let current: { num: number; lines: string[] } | undefined;
  for (const line of lines) {
    const match = /^# (\d+)\./.exec(line);
    if (match) { if (current) result.push({ num: current.num, text: current.lines.join("\n") }); current = { num: Number(match[1]), lines: [line] }; }
    else if (current) current.lines.push(line); else preamble.push(line);
  }
  if (current) result.push({ num: current.num, text: current.lines.join("\n") });
  return { preamble: preamble.join("\n"), result };
}

export function pBlockPartMarkdown(part: PBlockPartDef) {
  const split = sections();
  const body = split.result.filter((item) => item.num >= part.fromSection && item.num <= part.toSection).map((item) => item.text).join("\n");
  return part.number === 1 ? `${split.preamble}\n${body}` : body;
}
export function pBlockPartBySlug(slug: string) { return P_BLOCK_PARTS.find((part) => part.slug === slug); }
