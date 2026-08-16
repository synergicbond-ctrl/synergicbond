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
import { cielBlocks, cielChapterMap, type CielBlock } from "./chemistry-in-everyday-life-notes";

export const metadata = {
  title: "Chemistry in Everyday Life | JEE Advanced Organic Chemistry",
  description:
    "Drug classification and the enzyme/receptor mechanisms behind it, antacids, antihistamines, analgesics, antimicrobials, antifertility drugs, food preservatives/sweeteners/antioxidants, and how soap and synthetic detergents actually clean.",
};

const LEXICON: TermLexicon = [
  { match: ["enzyme", "receptor", "active site", "micelle"], kind: "bond" },
  { match: ["agonist", "antagonist", "amphiphilic", "resonance"], kind: "orbital" },
  { match: ["Warning / limitation", "Common trap", "JEE trap"], kind: "trap" },
  { match: ["Key idea", "JEE-to-university bridge"], kind: "rule" },
];

function slugForMajor(text: string) {
  const section = text.match(/^Section (\d+)/i);
  if (section) return `section-${section[1]}`;
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 72);
}

function BlockView({ block }: { block: CielBlock }) {
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

export default function ChemistryInEverydayLifePage() {
  return (
    <main className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-[1400px]">
        <header className="pb-14 pt-5 sm:pt-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <h1 className="font-display mt-5 max-w-[22ch] text-[44px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--foreground)] sm:text-[64px] lg:text-[72px]">
            Chemistry in Everyday Life
          </h1>
          <p className="mt-6 max-w-[var(--measure)] text-[18px] leading-[1.7] text-[var(--text-body)] sm:text-[20px]">
            Drug action as enzyme inhibition and receptor binding, aspirin&apos;s synthesis
            and mechanism traced directly back to earlier organic chemistry, food
            preservation as applied free-radical chemistry, and why soap fails in hard
            water while synthetic detergents don&apos;t.
          </p>
          <Callout label="Central idea" tone="rule">
            Almost nothing here is a genuinely new mechanism — drug action, food chemistry,
            and cleansing agents are all applications of enzyme/receptor binding, resonance,
            free-radical chemistry, and solubility arguments already built earlier.
          </Callout>
        </header>

        <ChapterIndex items={cielChapterMap} />

        <div className="grid gap-12 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <ChapterRail items={cielChapterMap} />
          <div className="min-w-0 pb-24">
            {cielBlocks.map((block, index) => (
              <BlockView key={`${block.kind}-${(block.text ?? "").slice(0, 64)}-${index}`} block={block} />
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
