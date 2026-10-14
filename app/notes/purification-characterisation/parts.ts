import "server-only";
import { POC_MASTER_MARKDOWN } from "./content";

export interface PocPartDef {
  slug: string;
  number: number;
  title: string;
  /** Master-markdown section number. */
  section: number;
}

export const POC_PARTS: PocPartDef[] = [
  { slug: "part1", number: 1, title: "Tetravalence of carbon and the shapes of organic molecules", section: 1 },
  { slug: "part2", number: 2, title: "Allotropes of carbon", section: 2 },
  { slug: "part3", number: 3, title: "Purity and the criteria of purity", section: 3 },
  { slug: "part4", number: 4, title: "Sublimation and crystallisation", section: 4 },
  { slug: "part5", number: 5, title: "Distillation — simple and fractional", section: 5 },
  { slug: "part6", number: 6, title: "Distillation — reduced pressure and steam distillation", section: 6 },
  { slug: "part7", number: 7, title: "Differential extraction and chemical methods of separation", section: 7 },
  { slug: "part8", number: 8, title: "Chromatography", section: 8 },
  { slug: "part9", number: 9, title: "Detection of carbon, hydrogen and nitrogen", section: 9 },
  { slug: "part10", number: 10, title: "Detection of sulphur, halogens and phosphorus", section: 10 },
  { slug: "part11", number: 11, title: "Estimation of carbon, hydrogen and nitrogen", section: 11 },
  { slug: "part12", number: 12, title: "Estimation of halogens, sulphur, phosphorus and oxygen", section: 12 },
  { slug: "part13", number: 13, title: "Empirical and molecular formulae", section: 13 },
  { slug: "part14", number: 14, title: "JEE traps and quick-revision tables", section: 14 },
  { slug: "part15", number: 15, title: "Worked numericals and practice", section: 15 },
];

function sections() {
  const lines = POC_MASTER_MARKDOWN.split("\n");
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

export function pocPartMarkdown(part: PocPartDef) {
  const found = sections().find((item) => item.num === part.section);
  return found ? found.text : "";
}

export function pocPartBySlug(slug: string) {
  return POC_PARTS.find((part) => part.slug === slug);
}
