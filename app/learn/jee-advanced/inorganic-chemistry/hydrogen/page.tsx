import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { CanonicalChapterPage } from "@/components/notes/canonical";
import { HYDROGEN_SECTIONS } from "./content";
import HydrogenMarkdown from "./_markdown";
import HydrogenVisual from "./visuals";

export const metadata: Metadata = {
  title: "Hydrogen & Hydrogen Peroxide (H₂O₂) — JEE Advanced | Synergic Bond",
  description: "Comprehensive hydrogen chemistry covering H₂, D₂O, H₂O₂ redox reactions, water hardness, isotope effects. Verified H₂O₂ master reaction sheet with 8 high-yield traps and complete assignments.",
};

export default function HydrogenNotesPage() {
  return (
    <CanonicalChapterPage
      title="Hydrogen & Hydrogen Peroxide (H₂O₂)"
      subtitle="Element, Water Chemistry, Heavy Water, Redox Reactions"
      sections={HYDROGEN_SECTIONS}
      markdownComponent={HydrogenMarkdown}
      visualComponent={HydrogenVisual}
      mode="longform"
    />
  );
}
