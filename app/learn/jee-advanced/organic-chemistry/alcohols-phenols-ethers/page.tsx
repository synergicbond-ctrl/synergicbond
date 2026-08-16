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
    <main className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-[1400px]">
        <header className="pb-14 pt-5 sm:pt-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <h1 className="font-display mt-5 max-w-[22ch] text-[44px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--foreground)] sm:text-[64px] lg:text-[72px]">
            Alcohols, Phenols and Ethers
          </h1>
          <p className="mt-6 max-w-[var(--measure)] text-[18px] leading-[1.7] text-[var(--text-body)] sm:text-[20px]">
            Alcohols as both products and substrates of substitution and elimination,
            phenol&apos;s resonance-derived acidity applied to real substituted-phenol
            rankings and its unusually mild electrophilic substitution chemistry, and the
            Williamson synthesis with the disconnection logic that makes it reliable.
          </p>
          <Callout label="Central idea" tone="rule">
            Almost every reaction and every distinguishing test in this chapter is the same
            carbocation-stability and resonance reasoning from earlier chapters, applied to
            an oxygen-containing functional group instead of a bare hydrocarbon.
          </Callout>
        </header>

        <ChapterIndex items={alcChapterMap} />

        <div className="grid gap-12 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <ChapterRail items={alcChapterMap} />
          <div className="min-w-0 pb-24">
            {alcBlocks.map((block, index) => (
              <BlockView key={`${block.kind}-${(block.text ?? "").slice(0, 64)}-${index}`} block={block} />
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
