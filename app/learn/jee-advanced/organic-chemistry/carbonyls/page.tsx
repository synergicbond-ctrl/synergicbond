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
import { carbonylBlocks, carbonylChapterMap, type CarbonylBlock } from "./carbonyls-notes";

export const metadata = {
  title: "Aldehydes, Ketones and Carboxylic Acids | JEE Advanced Organic Chemistry",
  description:
    "Nucleophilic addition to the carbonyl, cyanohydrins/acetals/Grignard addition, aldol condensation, the Cannizzaro and haloform reactions, carboxylic acid acidity ranked by substituent effects, HVZ alpha-halogenation, and the Tollens/Fehling/iodoform distinguishing tests.",
};

const LEXICON: TermLexicon = [
  { match: ["enolate", "carboxylate", "alkoxide", "tetrahedral intermediate"], kind: "bond" },
  { match: ["resonance", "nucleophilic addition", "hydride transfer"], kind: "orbital" },
  { match: ["Warning / limitation", "Common trap", "JEE trap"], kind: "trap" },
  { match: ["Key idea", "JEE-to-university bridge"], kind: "rule" },
];

function slugForMajor(text: string) {
  const section = text.match(/^Section (\d+)/i);
  if (section) return `section-${section[1]}`;
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 72);
}

function BlockView({ block }: { block: CarbonylBlock }) {
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

export default function CarbonylsPage() {
  return (
    <main className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-[1400px]">
        <header className="pb-14 pt-5 sm:pt-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <h1 className="font-display mt-5 max-w-[22ch] text-[44px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--foreground)] sm:text-[64px] lg:text-[72px]">
            Aldehydes, Ketones and Carboxylic Acids
          </h1>
          <p className="mt-6 max-w-[var(--measure)] text-[18px] leading-[1.7] text-[var(--text-body)] sm:text-[20px]">
            The carbonyl is the electrophile General Organic Chemistry introduced in the
            abstract — here it becomes real reaction chemistry: nucleophilic addition,
            aldol condensation, Cannizzaro and haloform disproportionation, and a carboxylic
            acid acidity table that closes the loop on every resonance and inductive
            argument built across this whole organic sequence.
          </p>
          <Callout label="Central idea" tone="rule">
            Nearly every named reaction here is the same first step — a nucleophile adding
            to the electrophilic carbonyl carbon — followed by a different fate for the
            tetrahedral intermediate. Learn that one step cold and the rest is bookkeeping.
          </Callout>
        </header>

        <ChapterIndex items={carbonylChapterMap} />

        <div className="grid gap-12 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <ChapterRail items={carbonylChapterMap} />
          <div className="min-w-0 pb-24">
            {carbonylBlocks.map((block, index) => (
              <BlockView key={`${block.kind}-${(block.text ?? "").slice(0, 64)}-${index}`} block={block} />
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
