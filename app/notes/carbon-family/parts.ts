import "server-only";
import { CARBON_FAMILY_MASTER_MARKDOWN } from "./content";

export interface CarbonFamilyPartDef {
  slug: string;
  number: number;
  title: string;
  /** Master-markdown section number. */
  section: number;
}

export const CARBON_FAMILY_PARTS: CarbonFamilyPartDef[] = [
  { slug: "part1", number: 1, title: "Master identity and periodic trend map", section: 1 },
  { slug: "part2", number: 2, title: "Why carbon is anomalous", section: 2 },
  { slug: "part3", number: 3, title: "Structure and allotropy of the elements", section: 3 },
  { slug: "part4", number: 4, title: "Chemical reactivity of Group 14", section: 4 },
  { slug: "part5", number: 5, title: "Carbides", section: 5 },
  { slug: "part6", number: 6, title: "Oxygen and sulphur compounds of carbon", section: 6 },
  { slug: "part7", number: 7, title: "Silicon — extraction, purification and reactivity", section: 7 },
  { slug: "part8", number: 8, title: "Silica, silicates, zeolites and glass", section: 8 },
  { slug: "part9", number: 9, title: "Organosilicon compounds and silicones", section: 9 },
  { slug: "part10", number: 10, title: "Hydrides of silicon and Group 14", section: 10 },
  { slug: "part11", number: 11, title: "Complexes and halides", section: 11 },
  { slug: "part12", number: 12, title: "Tin chemistry — reaction map", section: 12 },
  { slug: "part13", number: 13, title: "Lead chemistry — mixed oxides and Pb(IV)", section: 13 },
  { slug: "part14", number: 14, title: "One-page reaction networks", section: 14 },
  { slug: "part15", number: 15, title: "JEE Advanced traps and derived tools", section: 15 },
  { slug: "part16", number: 16, title: "Ultra-fast final revision", section: 16 },
  { slug: "part17", number: 17, title: "Low-frequency but source-testable facts", section: 17 },
  { slug: "part18", number: 18, title: "Source coverage checklist", section: 18 },
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
  const found = sections().find((item) => item.num === part.section);
  return found ? found.text : "";
}

export function carbonFamilyPartBySlug(slug: string) {
  return CARBON_FAMILY_PARTS.find((part) => part.slug === slug);
}
