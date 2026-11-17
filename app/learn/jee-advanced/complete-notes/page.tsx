import type { Metadata } from "next";
import { CanonicalChapterPage } from "@/components/notes/canonical";
import { NotesCardGrid } from "./_cards";

export const metadata: Metadata = {
  title: "JEE Advanced Complete Chapter Notes | Synergic Bond",
  description:
    "Complete JEE Advanced chemistry notes: Chemical Bonding, Chemical Kinetics, Coordination Compounds, Hydrocarbons and Elimination Reactions, with step-wise mechanisms and interactive figures.",
};

const B = "/learn/jee-advanced/complete-notes";

const CHAPTERS = [
  { href: `${B}/chemical-bonding`, title: "Chemical Bonding", blurb: "Lewis theory, lattice energy, Fajans' rules, VBT and hybridisation, VSEPR, back bonding, MOT, dipole moment, hydrogen bonding and the inert-pair effect, with interactive animations." },
  { href: `${B}/chemical-kinetics`, title: "Chemical Kinetics", blurb: "Rate laws, order and molecularity, integrated rate equations, half-life, Arrhenius theory, collision and transition-state theory, and complex reactions." },
  { href: `${B}/coordination-compounds`, title: "Coordination Compounds", blurb: "Werner's theory, nomenclature, isomerism, VBT and CFT, magnetism and colour, stability constants and organometallics." },
  { href: `${B}/hydrocarbons`, title: "Hydrocarbons", blurb: "Three parts: Alkanes, Alkenes and Alkynes side by side, and Aromatic Substitution (EAS and NAS)." },
  { href: `${B}/elimination-reactions`, title: "Elimination Reactions", blurb: "E1, E2, E1cB and Ei with step-wise mechanisms, stereochemistry, Saytzeff vs Hofmann products and rearrangements." },
];

export default function CompleteNotesHub() {
  return (
    <CanonicalChapterPage
      mode="longform"
      discipline="JEE Advanced · Chemistry"
      chapterTitle="Complete Chapter Notes"
      chapterSlug="jee-advanced-complete-notes"
      description="Each chapter opens as one complete set of notes, with every mechanism drawn step by step and the exact reagents and conditions on every arrow."
      free={false}
    >
      <NotesCardGrid cards={CHAPTERS} />
    </CanonicalChapterPage>
  );
}
