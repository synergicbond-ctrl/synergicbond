import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { CanonicalChapterPage } from "@/components/notes/canonical";
import { C, tint } from "@/components/notes/chemistryMarkdown";
import { HYDROGEN_SECTIONS } from "./content";
import HydrogenMarkdown from "./_markdown";
import HydrogenVisual from "./visuals";

export const metadata: Metadata = {
  title: "Hydrogen & Hydrogen Peroxide (H₂O₂) — JEE Advanced | Synergic Bond",
  description:
    "Comprehensive hydrogen chemistry covering H₂, D₂O, H₂O₂ redox reactions, water hardness, isotope effects. Verified H₂O₂ master reaction sheet with 8 high-yield traps and complete assignments.",
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
      <article className="mx-auto min-w-0 max-w-3xl space-y-10">
        {HYDROGEN_SECTIONS.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28 space-y-4">
            {/* Shared boron-family H2 treatment: solid cyan, restrained underline. */}
            <h2
              className="mt-2 inline-block pb-1 pt-4 font-sans text-[1.45rem] font-black leading-tight"
              style={{ color: C.cyan, borderBottom: `2px solid ${tint(C.cyan, 0.4)}` }}
            >
              {section.label}
            </h2>
            <div className="space-y-5">
              {section.blocks.map((block, index) =>
                block.kind === "md" ? (
                  <HydrogenMarkdown key={index} text={block.text} />
                ) : (
                  <HydrogenVisual key={index} id={block.id} />
                ),
              )}
            </div>
          </section>
        ))}
      </article>
    </CanonicalChapterPage>
  );
}
