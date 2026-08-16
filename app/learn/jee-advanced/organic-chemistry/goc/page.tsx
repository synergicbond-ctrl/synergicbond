import {
  BulletList,
  Callout,
  ChapterIndex,
  ChapterRail,
  DataTable,
  Formula,
  NumberedList,
  Prose,
  SectionHeading,
  SubHeading,
  type TermLexicon,
} from "@/components/design";
import { gocBlocks, gocChapterMap, type GocBlock } from "./goc-notes";

export const metadata = {
  title: "General Organic Chemistry (GOC) | JEE Advanced Organic Chemistry",
  description:
    "The foundation every other organic chapter builds on: bond fission, carbocations/carbanions/radicals/carbenes, inductive/resonance/hyperconjugation/electromeric effects, Huckel's rule, and acid-base strength in organic systems — with JEE Advanced-pattern reasoning problems.",
};

const LEXICON: TermLexicon = [
  { match: ["carbocation", "carbanion", "free radical", "carbene", "nitrene"], kind: "bond" },
  { match: ["resonance", "hyperconjugation", "aromatic", "Huckel"], kind: "orbital" },
  { match: ["Warning / limitation", "Common trap", "JEE trap"], kind: "trap" },
  { match: ["Key idea", "JEE-to-university bridge"], kind: "rule" },
];

function slugForMajor(text: string) {
  const section = text.match(/^Section (\d+)/i);
  if (section) return `section-${section[1]}`;
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 72);
}

function BlockView({ block }: { block: GocBlock }) {
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
    case "numbered":
      return <NumberedList items={block.items ?? []} lexicon={LEXICON} />;
    case "table":
      return <DataTable headers={block.headers ?? []} rows={block.rows ?? []} lexicon={LEXICON} />;
    case "formula":
      return <Formula expression={block.text ?? ""} label={block.formulaLabel} />;
    default:
      return <Prose text={block.text ?? ""} lexicon={LEXICON} />;
  }
}

export default function GeneralOrganicChemistryPage() {
  return (
    <main className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-[1400px]">
        <header className="pb-14 pt-5 sm:pt-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <h1 className="font-display mt-5 max-w-[22ch] text-[44px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--foreground)] sm:text-[64px] lg:text-[72px]">
            General Organic Chemistry
          </h1>
          <p className="mt-6 max-w-[var(--measure)] text-[18px] leading-[1.7] text-[var(--text-body)] sm:text-[20px]">
            Every organic chapter that follows — hydrocarbons, haloalkanes, alcohols,
            carbonyls, amines — is written on top of five ideas built here: how a bond
            breaks, what the resulting intermediate looks like, and which of four electronic
            effects (inductive, resonance, hyperconjugation, electromeric) explains its
            stability, reactivity, and the acid or base strength of the molecule it sits in.
          </p>
          <Callout label="Central idea" tone="rule">
            Every &quot;why is X more stable/acidic/basic than Y&quot; question in organic
            chemistry reduces to one of four electronic effects applied correctly. Learn to
            identify which effect (or combination) is in play before reaching for a
            memorised order.
          </Callout>
        </header>

        <ChapterIndex items={gocChapterMap} />

        <div className="grid gap-12 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <ChapterRail items={gocChapterMap} />
          <div className="min-w-0 pb-24">
            {gocBlocks.map((block, index) => (
              <BlockView key={`${block.kind}-${(block.text ?? "").slice(0, 64)}-${index}`} block={block} />
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
