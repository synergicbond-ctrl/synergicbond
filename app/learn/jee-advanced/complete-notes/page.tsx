import type { Metadata } from "next";
import { CanonicalChapterPage } from "@/components/notes/canonical";
import { NotesCardGrid } from "./_cards";

export const metadata: Metadata = {
  title: "JEE Advanced Complete Chapter Notes | Synergic Bond",
  description:
    "Complete JEE Advanced chemistry notes: Chemical Bonding, Chemical Kinetics, Solid State, Coordination Compounds, Isomerism, Alkanes, Alkenes, Alkynes, Aromatic Substitution, Elimination Reactions and Chemistry in Everyday Life, with step-wise mechanisms and interactive figures.",
};

const B = "/learn/jee-advanced/complete-notes";

const H = `${B}/hydrocarbons`;

const CHAPTERS = [
  { href: `${B}/chemical-bonding`, title: "Chemical Bonding", blurb: "29 chapters: Lewis theory, lattice energy, Fajans' rules, VBT and hybridisation, VSEPR, back bonding, MOT, dipole moment, hydrogen bonding and the inert-pair effect, with interactive animations." },
  { href: `${B}/chemical-kinetics`, title: "Chemical Kinetics", blurb: "25 chapters and 78 practice questions: rate laws, integrated rate equations, complex reactions, collision and transition-state theory, mechanisms, enzyme and chain kinetics." },
  { href: "/learn/solid-state/textbook", title: "Solid State", blurb: "The interactive textbook: 23 parts, the Master notes and the 3D Crystal Lab, from lattices and unit cells to packing, voids, defects, electrical and magnetic properties." },
  { href: `${B}/coordination-compounds`, title: "Coordination Compounds", blurb: "11 chapters: Werner's theory, nomenclature, isomerism, VBT and CFT, magnetism and colour, stability constants and organometallics." },
  { href: `${B}/isomerism`, title: "Isomerism", blurb: "4 parts: structural, geometrical, conformational and optical isomerism, with drawn structures, interactive animations under each topic, 118 questions with animated step-by-step solutions and hundreds of counting questions with every isomer drawn." },
  { href: `${H}/alkanes`, title: "Alkanes", blurb: "6 chapters: free radicals, preparation, physical properties and every chemical reaction of alkanes, with step-wise mechanisms." },
  { href: `${H}/alkenes-alkynes#part1`, title: "Alkenes", blurb: "24 sections: preparation, electrophilic and radical addition, hydroboration, oxymercuration, oxidation, ozonolysis, dienes, Diels–Alder and polymerisation." },
  { href: `${H}/alkenes-alkynes#part2`, title: "Alkynes", blurb: "18 sections: acidity and acetylides, reduction, additions, Kucherov hydration, hydroboration, oxidative cleavage, ozonolysis and reactions of acetylene." },
  { href: `${H}/aromatic-substitution`, title: "Aromatic Substitution (EAS and NAS)", blurb: "12 chapters: aromaticity, the arenium-ion mechanism, nitration, sulphonation, halogenation, Friedel–Crafts, directing effects and nucleophilic aromatic substitution." },
  { href: `${B}/chemistry-in-everyday-life`, title: "Chemistry in Everyday Life", blurb: "5 chapters: drugs and their classification, drug-target interaction, therapeutic classes of drugs, chemicals in food and cleansing agents, with drawn structures, a master revision table and worked questions." },
  { href: `${B}/elimination-reactions`, title: "Elimination Reactions", blurb: "24 chapters: E1, E2, E1cB and Ei with step-wise mechanisms, stereochemistry, Saytzeff vs Hofmann products, fragmentations and solved problems." },
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
