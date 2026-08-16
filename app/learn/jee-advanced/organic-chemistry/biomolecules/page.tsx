import {
  BulletList,
  Callout,
  ChapterIndex,
  ChapterRail,
  DataTable,
  Formula,
  Prose,
  SectionHeading,
  SubHeading,
  type TermLexicon,
} from "@/components/design";
import { bioBlocks, bioChapterMap, type BioBlock } from "./biomolecules-notes";

export const metadata = {
  title: "Biomolecules: Carbohydrates, Proteins, Nucleic Acids | JEE Advanced Organic Chemistry",
  description:
    "Glucose cyclisation and mutarotation, carbohydrate reactions as applied carbonyl chemistry, the amino acid zwitterion and isoelectric point, the peptide bond and all four levels of protein structure, enzymes and vitamin-derived coenzymes, and DNA/RNA base-pairing with Chargaff's rule.",
};

const LEXICON: TermLexicon = [
  { match: ["zwitterion", "anomeric carbon", "peptide bond", "coenzyme"], kind: "bond" },
  { match: ["hydrogen bond", "resonance", "hemiacetal", "base pairing"], kind: "orbital" },
  { match: ["Warning / limitation", "Common trap", "JEE trap"], kind: "trap" },
  { match: ["Key idea", "JEE-to-university bridge"], kind: "rule" },
];

function slugForMajor(text: string) {
  const section = text.match(/^Section (\d+)/i);
  if (section) return `section-${section[1]}`;
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 72);
}

function BlockView({ block }: { block: BioBlock }) {
  switch (block.kind) {
    case "major":
    case "section": {
      const text = block.text ?? "";
      const match = text.match(/^Section (\d+)\s*-\s*(.*)$/i);
      return (
        <SectionHeading id={slugForMajor(text)} eyebrow={match ? `Section ${match[1]}` : undefined}>
          {match ? match[2] : text}
        </SectionHeading>
      );
    }
    case "subheading":
      return <SubHeading>{block.text}</SubHeading>;
    case "callout": {
      const raw = block.text ?? "";
      const match = raw.match(/^([^:]+):\s*(.*)$/);
      return <Callout label={match?.[1] ?? "Key idea"} text={match?.[2] ?? raw} lexicon={LEXICON} />;
    }
    case "bullets":
      return <BulletList items={block.items ?? []} lexicon={LEXICON} />;
    case "table":
      return <DataTable headers={block.headers ?? []} rows={block.rows ?? []} lexicon={LEXICON} />;
    case "formula":
      return <Formula expression={block.text ?? ""} label={block.formulaLabel} />;
    default:
      return <Prose text={block.text ?? ""} lexicon={LEXICON} />;
  }
}

export default function BiomoleculesPage() {
  return (
    <main className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-[1400px]">
        <header className="pb-14 pt-5 sm:pt-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <h1 className="font-display mt-5 max-w-[22ch] text-[44px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--foreground)] sm:text-[64px] lg:text-[72px]">
            Biomolecules
          </h1>
          <p className="mt-6 max-w-[var(--measure)] text-[18px] leading-[1.7] text-[var(--text-body)] sm:text-[20px]">
            Carbohydrate chemistry as applied carbonyl chemistry, the amino acid zwitterion
            that explains why proteins behave like ionic solids, the peptide bond&apos;s
            resonance-restricted rotation that makes secondary structure possible at all, and
            the hydrogen-bond counting that predicts DNA stability directly from base
            composition.
          </p>
          <Callout label="Central idea" tone="rule">
            Biomolecules are not a new branch of chemistry — every reaction and structural
            argument here is carbonyl, amine, carboxylic acid, and hydrogen-bonding chemistry
            already built earlier in this sequence, just applied to a biological molecule.
          </Callout>
        </header>

        <ChapterIndex items={bioChapterMap} />

        <div className="grid gap-12 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <ChapterRail items={bioChapterMap} />
          <div className="min-w-0 pb-24">
            {bioBlocks.map((block, index) => (
              <BlockView key={`${block.kind}-${(block.text ?? "").slice(0, 64)}-${index}`} block={block} />
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
