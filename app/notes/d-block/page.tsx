import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import DBlockVisualSystem from "./DBlockVisualSystem";

export const metadata = {
  title: "D-Block Elements — JEE Advanced Theory",
  description:
    "A ten-part, visual-first D-block theory course covering configurations, trends, redox chemistry, chromium, manganese and important compounds.",
};

const parts = [
  [1, "Definition, classification and electronic configuration", "Position of the d-block, transition-element test, 3d/4d/5d configurations, anomalies and ion formation."],
  [2, "Atomic size, ionic size, lanthanoid contraction and density", "Cross-series size trends, 4d–5d similarity, Zr–Hf comparison, atomic volume and density."],
  [3, "Metallic bonding, atomisation, melting point and reactivity", "Metal–metal bonding, physical-property trends, exceptions, ionisation and complete reactivity logic."],
  [4, "Variable oxidation states and redox stability", "Oxidation-state patterns, stability, electrode potentials, disproportionation and comproportionation."],
  [5, "Complex formation and catalytic behaviour", "Metal–ligand bonding, coordination tendencies, homogeneous and heterogeneous catalysis."],
  [6, "Colour and magnetic properties", "d–d transitions, charge transfer, ligand effects, spin-only moments and magnetic ordering."],
  [7, "Alloys, interstitial compounds and non-stoichiometry", "Metal lattices, interstitial phases, defect chemistry, alloys and abundance patterns."],
  [8, "Chromium, chromate and dichromate chemistry", "Chromite processing, chromate–dichromate equilibrium, structures and oxidising reactions."],
  [9, "Manganese, manganate and permanganate chemistry", "Preparation routes, medium-dependent reduction, reaction maps and titration theory."],
  [10, "Compounds of silver, zinc, copper and iron", "Preparations, properties, colour changes, precipitates, qualitative tests and reaction networks."],
] as const;

export default function DBlockHubPage() {
  return (
    <AppShell
      discipline="JEE Advanced • Inorganic Chemistry"
      chapterTitle="D-Block Elements"
      chapterSlug="d-block"
      description="Ten substantial theory parts built around electronic structure, periodic trends, redox stability, visual reaction maps and the detailed chemistry of chromium, manganese, silver, zinc, copper and iron."
      free={false}
    >
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="flex flex-wrap gap-2 text-sm font-bold text-[var(--foreground)]">
          <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[var(--accent)]">10 theory parts</span>
          <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[var(--chem-orbital)]">KaTeX chemistry</span>
          <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[var(--chem-energy)]">Original scientific visuals</span>
        </div>

        <DBlockVisualSystem />

        <ChapterLessonGrid
          lessons={parts.map(([number, title, description]) => ({
            href: `/notes/d-block/part${number}`,
            number: `Lesson ${String(number).padStart(2, "0")}`,
            title,
            meta: description,
          }))}
        />
      </div>
    </AppShell>
  );
}
