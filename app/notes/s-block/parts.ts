import "server-only";
import { S_BLOCK_MASTER_MARKDOWN } from "./content";

export interface SBlockPartDef { slug: string; number: number; title: string; fromSection: number; toSection: number; }

export const S_BLOCK_PARTS: SBlockPartDef[] = [
  // Foundations (1-3) → anomalies and diagonal relationships (4-6) →
  // properties and reactions (7-9) → compound classes (10-13) →
  // special topics and named compounds (14-16) → biology and revision (17-18).
  { slug: "part1", number: 1, title: "S-block position, configuration & overview", fromSection: 1, toSection: 1 },
  { slug: "part2", number: 2, title: "Radii, ionisation enthalpy & electronegativity", fromSection: 2, toSection: 2 },
  { slug: "part3", number: 3, title: "Hydration, lattice enthalpy & solubility principles", fromSection: 3, toSection: 3 },
  { slug: "part4", number: 4, title: "Anomalous behaviour of lithium", fromSection: 4, toSection: 4 },
  { slug: "part5", number: 5, title: "Anomalous behaviour of beryllium", fromSection: 5, toSection: 5 },
  { slug: "part6", number: 6, title: "Diagonal relationships: Li–Mg and Be–Al", fromSection: 6, toSection: 6 },
  { slug: "part7", number: 7, title: "Physical properties, flame colours & identification", fromSection: 7, toSection: 7 },
  { slug: "part8", number: 8, title: "Oxygen: oxides, peroxides & superoxides", fromSection: 8, toSection: 8 },
  { slug: "part9", number: 9, title: "Reactions with water, H₂, N₂, halogens, acids & bases", fromSection: 9, toSection: 9 },
  { slug: "part10", number: 10, title: "Hydrides: preparation, bonding & reactions", fromSection: 10, toSection: 10 },
  { slug: "part11", number: 11, title: "Halides: bonding, hydrolysis & thermal behaviour", fromSection: 11, toSection: 11 },
  { slug: "part12", number: 12, title: "Hydroxides: basicity, solubility & decomposition", fromSection: 12, toSection: 12 },
  { slug: "part13", number: 13, title: "Carbonates, bicarbonates, nitrates & sulphates", fromSection: 13, toSection: 13 },
  { slug: "part14", number: 14, title: "Liquid ammonia solutions & solvated electrons", fromSection: 14, toSection: 14 },
  { slug: "part15", number: 15, title: "Sodium compounds: NaCl, NaOH, Na₂CO₃, NaHCO₃", fromSection: 15, toSection: 15 },
  { slug: "part16", number: 16, title: "Calcium compounds: CaO, Ca(OH)₂, CaCO₃, CaSO₄", fromSection: 16, toSection: 16 },
  { slug: "part17", number: 17, title: "Biological importance of Na, K, Mg & Ca", fromSection: 17, toSection: 17 },
  { slug: "part18", number: 18, title: "JEE Advanced exception bank & revision", fromSection: 18, toSection: 18 },
];

function sections() {
  const lines = S_BLOCK_MASTER_MARKDOWN.split("\n");
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

export function sBlockPartMarkdown(part: SBlockPartDef) {
  const split = sections();
  const body = split.result.filter((item) => item.num >= part.fromSection && item.num <= part.toSection).map((item) => item.text).join("\n");
  return part.number === 1 ? `${split.preamble}\n${body}` : body;
}
export function sBlockPartBySlug(slug: string) { return S_BLOCK_PARTS.find((part) => part.slug === slug); }
