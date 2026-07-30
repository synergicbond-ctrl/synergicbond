import { F_BLOCK_PART_1 } from "./content/part1";
import { F_BLOCK_PART_2 } from "./content/part2";
import { F_BLOCK_PART_3 } from "./content/part3";
import { F_BLOCK_PART_4 } from "./content/part4";

export interface FBlockPartDef {
  number: number;
  slug: string;
  title: string;
  focus: string;
  printPages: string;
  markdown: string;
}

export const F_BLOCK_PARTS: FBlockPartDef[] = [
  {
    number: 1,
    slug: "part1",
    title: "Position, Electronic Configuration and NCERT Foundations",
    focus: "Periodic placement, members, 4f/5f filling, configurations, occurrence and the orbital logic behind inner-transition chemistry.",
    printPages: "Pages 1–4",
    markdown: F_BLOCK_PART_1,
  },
  {
    number: 2,
    slug: "part2",
    title: "Lanthanoids: States, Colour, Magnetism and Contraction",
    focus: "The +3 state, important +2/+4 exceptions, lanthanoid contraction, colour, magnetism, reactivity and compounds.",
    printPages: "Pages 5–8",
    markdown: F_BLOCK_PART_2,
  },
  {
    number: 3,
    slug: "part3",
    title: "Actinoids: Oxidation States, Bonding and Radioactivity",
    focus: "5f participation, variable oxidation states, actinyl ions, actinoid contraction, covalency, hydrolysis and nuclear relevance.",
    printPages: "Pages 9–12",
    markdown: F_BLOCK_PART_3,
  },
  {
    number: 4,
    slug: "part4",
    title: "Separation, Applications and JEE Advanced Master Revision",
    focus: "Ion exchange, solvent extraction, redox-assisted separation, applications, NCERT comparison tables, traps and worked problems.",
    printPages: "Pages 13–15",
    markdown: F_BLOCK_PART_4,
  },
];

export function fBlockPartBySlug(slug: string): FBlockPartDef | undefined {
  return F_BLOCK_PARTS.find((part) => part.slug === slug);
}
