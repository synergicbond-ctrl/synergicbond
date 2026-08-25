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
import { alcBlocks, alcChapterMap, type AlcBlock } from "./alcohols-phenols-ethers-notes";

export const metadata = {
  title: "Alcohols, Phenols and Ethers | JEE Advanced Organic Chemistry",
  description:
    "Preparation and reactions of alcohols, the Lucas test and oxidation-based distinguishing tests, phenol's resonance-based acidity applied to real substituted-phenol rankings, Kolbe and Reimer-Tiemann reactions, the Williamson synthesis, and acid-catalysed ether cleavage regiochemistry.",
};

const LEXICON: TermLexicon = [
  { match: ["carbocation", "phenoxide", "alkoxide", "dichlorocarbene"], kind: "bond" },
  { match: ["resonance", "backside attack", "SN1", "SN2"], kind: "orbital" },
  { match: ["Warning / limitation", "Common trap", "JEE trap"], kind: "trap" },
  { match: ["Key idea", "JEE-to-university bridge"], kind: "rule" },
];

function slugForMajor(text: string) {
  const section = text.match(/^Section (\d+)/i);
  if (section) return `section-${section[1]}`;
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 72);
}

function BlockView({ block }: { block: AlcBlock }) {
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

export default function AlcoholsPhenolsEthersPage() {
  return (
    <CanonicalChapterPage
      mode="longform"
      discipline="JEE Advanced · Organic Chemistry"
      chapterTitle="Alcohols, Phenols and Ethers"
      chapterSlug="alcohols-phenols-ethers"
      description="Alcohols as both products and substrates of substitution and elimination, phenol&apos;s resonance-derived acidity applied to real substituted-phenol rankings and its unusually mild electrophilic substitution chemistry, and the Williamson synthesis with the disconnection logic that makes it reliable."
      free={false}
    >
      <article className="space-y-8">
        <Callout label="Central idea" tone="rule">
            Almost every reaction and every distinguishing test in this chapter is the same
            carbocation-stability and resonance reasoning from earlier chapters, applied to
            an oxygen-containing functional group instead of a bare hydrocarbon.
          </Callout>

        <ChapterIndex items={alcChapterMap} />

        <div className="space-y-6">
          {alcBlocks.map((block, index) => (
              <BlockView key={`${block.kind}-${(block.text ?? "").slice(0, 64)}-${index}`} block={block} />
            ))}
        </div>
      </article>
    </CanonicalChapterPage>
  );
}
