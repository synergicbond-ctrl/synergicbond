import "server-only";
import { NITROGEN_FAMILY_MASTER_MARKDOWN } from "./content";

export interface NitrogenFamilyPartDef {
  slug: string;
  number: number;
  title: string;
  section: number;
}

export const NITROGEN_FAMILY_PARTS: NitrogenFamilyPartDef[] = [
  { slug: "part1", number: 1, title: "p-Block foundation and the place of Group 15", section: 1 },
  { slug: "part2", number: 2, title: "Group 15 identity and electronic configuration", section: 2 },
  { slug: "part3", number: 3, title: "Atomic and physical properties — data and complete orders", section: 3 },
  { slug: "part4", number: 4, title: "Oxidation states, bonding and the inert-pair effect", section: 4 },
  { slug: "part5", number: 5, title: "Anomalous behaviour of nitrogen; the N → P → rest gradation", section: 5 },
  { slug: "part6", number: 6, title: "Elemental chemical reactivity — conditions included", section: 6 },
  { slug: "part7", number: 7, title: "Allotropy — phosphorus in full, arsenic and antimony", section: 7 },
  { slug: "part8", number: 8, title: "Nitrides and phosphides", section: 8 },
  { slug: "part9", number: 9, title: "Dinitrogen — preparation, properties, uses", section: 9 },
  { slug: "part10", number: 10, title: "Ammonia, NH₃", section: 10 },
  { slug: "part11", number: 11, title: "Ammonium salts and the ammono chemistry", section: 11 },
  { slug: "part12", number: 12, title: "Hydrazine, hydroxylamine and hydrazoic acid", section: 12 },
  { slug: "part13", number: 13, title: "Oxides of nitrogen", section: 13 },
  { slug: "part14", number: 14, title: "Nitric acid, HNO₃", section: 14 },
  { slug: "part15", number: 15, title: "Phosphine, PH₃, and diphosphane", section: 15 },
  { slug: "part16", number: 16, title: "Oxides of phosphorus", section: 16 },
  { slug: "part17", number: 17, title: "Phosphorus halides", section: 17 },
  { slug: "part18", number: 18, title: "Oxoacids of phosphorus", section: 18 },
  { slug: "part19", number: 19, title: "Phosphates in biology and the environment (context)", section: 19 },
  { slug: "part20", number: 20, title: "Arsenic, antimony and bismuth — comparative chemistry", section: 20 },
  { slug: "part21", number: 21, title: "Uses of Group 15 elements and their compounds", section: 21 },
  { slug: "part22", number: 22, title: "One-page reaction networks", section: 22 },
  { slug: "part23", number: 23, title: "JEE-Advanced traps and derived tools", section: 23 },
  { slug: "part24", number: 24, title: "Ultra-fast final revision", section: 24 },
  { slug: "part25", number: 25, title: "Chapter review questions (with worked answers)", section: 25 },
  { slug: "part26", number: 26, title: "Chapter coverage checklist", section: 26 },
  { slug: "part27", number: 27, title: "NCERT Class XII, Unit 7 — complete reaction & preparation ledger", section: 27 },
  { slug: "part28", number: 28, title: "Extended reaction set for problem-solving (question-bank layer)", section: 28 },
];

function sections() {
  const lines = NITROGEN_FAMILY_MASTER_MARKDOWN.split("\n");
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

export function nitrogenFamilyPartMarkdown(part: NitrogenFamilyPartDef) {
  const found = sections().find((item) => item.num === part.section);
  return found ? found.text : "";
}

export function nitrogenFamilyPartBySlug(slug: string) {
  return NITROGEN_FAMILY_PARTS.find((part) => part.slug === slug);
}
