import {
  BulletList,
  Callout,
  ChapterIndex,
  DataTable,
  Formula,
  NumberedList,
  Prose,
  SectionHeading,
  SubHeading,
  type TermLexicon,
} from "@/components/design";
import { CanonicalChapterPage } from "@/components/notes/canonical";
import { haloBlocks, haloChapterMap, type HaloBlock } from "./haloalkanes-haloarenes-notes";

export const metadata = {
  title: "Haloalkanes and Haloarenes: SN1, SN2, Grignard | JEE Advanced Organic Chemistry",
  description:
    "SN1 and SN2 mechanisms with full stereochemistry, the substitution-vs-elimination competition, Grignard reagent chemistry, why haloarenes resist nucleophilic substitution, and the SNAr and benzyne mechanisms that let them react anyway.",
};

const LEXICON: TermLexicon = [
  { match: ["carbocation", "carbanion", "Meisenheimer complex", "benzyne"], kind: "bond" },
  { match: ["Walden inversion", "racemisation", "backside attack", "resonance"], kind: "orbital" },
  { match: ["Warning / limitation", "Common trap", "JEE trap"], kind: "trap" },
  { match: ["Key idea", "JEE-to-university bridge"], kind: "rule" },
];

function slugForMajor(text: string) {
  const section = text.match(/^Section (\d+)/i);
  if (section) return `section-${section[1]}`;
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 72);
}

function BlockView({ block }: { block: HaloBlock }) {
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

export default function HaloalkanesHaloarenesPage() {
  return (
    <CanonicalChapterPage
      mode="longform"
      discipline="JEE Advanced · Organic Chemistry"
      chapterTitle="Haloalkanes and Haloarenes"
      chapterSlug="haloalkanes-haloarenes"
      description="SN1 and SN2 substitution, their full competition with E1 and E2 elimination, Grignard reagent chemistry, and the structural reasons a haloarene resists every mechanism that works cleanly on a haloalkane — until an activating group or a strong enough base opens two entirely different pathways."
      free={false}
    >
      <article className="space-y-8">
        <Callout label="Central idea" tone="rule">
            SN1 versus SN2 is never a coin flip — it is decided every time by four factors
            working together: substrate class, nucleophile strength, solvent, and leaving
            group. Learn to read all four before naming a mechanism.
          </Callout>

        <ChapterIndex items={haloChapterMap} />

        <div className="space-y-6">
          {haloBlocks.map((block, index) => (
              <BlockView key={`${block.kind}-${(block.text ?? "").slice(0, 64)}-${index}`} block={block} />
            ))}
        </div>
      </article>
    </CanonicalChapterPage>
  );
}
