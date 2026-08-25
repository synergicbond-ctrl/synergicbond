import {
  BulletList,
  Callout,
  ChapterIndex,
  DataTable,
  Figure,
  Formula,
  NumberedList,
  Prose,
  SectionHeading,
  SubHeading,
  type TermLexicon,
} from "@/components/design";
import { CanonicalChapterPage } from "@/components/notes/canonical";
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
    case "figure":
      return <Figure svg={block.svg ?? ""} caption={block.caption} />;
    default:
      return <Prose text={block.text ?? ""} lexicon={LEXICON} />;
  }
}

export default function GeneralOrganicChemistryPage() {
  return (
    <CanonicalChapterPage
      mode="longform"
      discipline="JEE Advanced · Organic Chemistry"
      chapterTitle="General Organic Chemistry"
      chapterSlug="goc"
      description="Every organic chapter that follows — hydrocarbons, haloalkanes, alcohols, carbonyls, amines — is written on top of five ideas built here: how a bond breaks, what the resulting intermediate looks like, and which of four electronic effects (inductive, resonance, hyperconjugation, electromeric) explains its stability, reactivity, and the acid or base strength of the molecule it sits in."
      free={false}
    >
      <article className="space-y-8">
        <Callout label="Central idea" tone="rule">
          Every &quot;why is X more stable/acidic/basic than Y&quot; question in organic
          chemistry reduces to one of four electronic effects applied correctly. Learn to
          identify which effect (or combination) is in play before reaching for a
          memorised order.
        </Callout>

        <ChapterIndex items={gocChapterMap} />

        <div className="space-y-6">
          {gocBlocks.map((block, index) => (
            <BlockView key={`${block.kind}-${(block.text ?? "").slice(0, 64)}-${index}`} block={block} />
          ))}
        </div>
      </article>
    </CanonicalChapterPage>
  );
}
