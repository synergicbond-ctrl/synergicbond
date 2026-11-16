import type { Metadata } from "next";
import { CanonicalChapterPage } from "@/components/notes/canonical";
import { NotesCardGrid } from "../_cards";

export const metadata: Metadata = {
  title: "Hydrocarbons — JEE Advanced Complete Notes | Synergic Bond",
  description:
    "Complete JEE Advanced hydrocarbon notes in three parts: alkanes, alkenes and alkynes side by side, and aromatic substitution (EAS and NAS).",
};

const B = "/learn/jee-advanced/complete-notes/hydrocarbons";

const PARTS = [
  { href: `${B}/alkanes`, title: "Alkanes", blurb: "Preparation, physical properties, free-radical halogenation, cracking, combustion and every named reaction, with step-wise mechanisms." },
  { href: `${B}/alkenes-alkynes`, title: "Alkenes and Alkynes", blurb: "Side by side: preparation, electrophilic and radical addition, oxidation, ozonolysis, dienes and alkyne acidity." },
  { href: `${B}/aromatic-substitution`, title: "Aromatic Substitution (EAS and NAS)", blurb: "Aromaticity, the arenium-ion mechanism, nitration, sulphonation, halogenation, Friedel–Crafts, directing effects and nucleophilic aromatic substitution." },
];

export default function HydrocarbonsCompleteNotes() {
  return (
    <CanonicalChapterPage
      mode="longform"
      discipline="JEE Advanced · Organic Chemistry"
      chapterTitle="Hydrocarbons"
      chapterSlug="hydrocarbons"
      description="Complete notes in three parts. Each part opens as one full chapter with every mechanism drawn step by step."
      free={false}
    >
      <NotesCardGrid cards={PARTS} />
    </CanonicalChapterPage>
  );
}
