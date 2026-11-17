import type { Metadata } from "next";
import { CanonicalChapterPage } from "@/components/notes/canonical";
import { NotesCardGrid } from "../_cards";

export const metadata: Metadata = {
  title: "Hydrocarbons — JEE Advanced Complete Notes | Synergic Bond",
  description:
    "Complete JEE Advanced hydrocarbon notes in four parts: alkanes, alkenes, alkynes and aromatic substitution (EAS and NAS).",
};

const B = "/learn/jee-advanced/complete-notes/hydrocarbons";

const PARTS = [
  { href: `${B}/alkanes`, title: "Alkanes", blurb: "Preparation, physical properties, free-radical halogenation, cracking, combustion and every named reaction, with step-wise mechanisms." },
  { href: `${B}/alkenes-alkynes#part1`, title: "Alkenes", blurb: "Preparation, electrophilic and radical addition, hydroboration, oxymercuration, oxidation, ozonolysis, dienes, Diels–Alder and polymerisation." },
  { href: `${B}/alkenes-alkynes#part2`, title: "Alkynes", blurb: "Acidity and acetylides, reduction, additions, Kucherov hydration, hydroboration, oxidative cleavage, ozonolysis and reactions of acetylene." },
  { href: `${B}/aromatic-substitution`, title: "Aromatic Substitution (EAS and NAS)", blurb: "Aromaticity, the arenium-ion mechanism, nitration, sulphonation, halogenation, Friedel–Crafts, directing effects and nucleophilic aromatic substitution." },
];

export default function HydrocarbonsCompleteNotes() {
  return (
    <CanonicalChapterPage
      mode="longform"
      discipline="JEE Advanced · Organic Chemistry"
      chapterTitle="Hydrocarbons"
      chapterSlug="hydrocarbons"
      description="Complete notes in four parts. Each part opens as one full chapter with every mechanism drawn step by step."
      free={false}
    >
      <NotesCardGrid cards={PARTS} />
    </CanonicalChapterPage>
  );
}
