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
      mode="longform"
      discipline="Inorganic Chemistry"
      chapterTitle="Hydrogen & Hydrogen Peroxide (H₂O₂)"
      chapterSlug="hydrogen"
      description="Element, Water Chemistry, Heavy Water, Redox Reactions"
    >
      <div className="prose dark:prose-invert max-w-4xl mx-auto px-4 py-8">
        {/* Hydrogen content will be rendered here */}
      </div>
    </CanonicalChapterPage>
  );
}
