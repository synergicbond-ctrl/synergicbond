import {
  BulletList,
  Callout,
  ChapterIndex,
  DataTable,
  Formula,
  Prose,
  SectionHeading,
  SubHeading,
  type TermLexicon,
} from "@/components/design";
import { CanonicalChapterPage } from "@/components/notes/canonical";
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
    <CanonicalChapterPage
      mode="longform"
      discipline="JEE Advanced · Organic Chemistry"
      chapterTitle="Chemistry in Everyday Life"
      chapterSlug="chemistry-in-everyday-life"
      description="Drug action as enzyme inhibition and receptor binding, aspirin&apos;s synthesis and mechanism traced directly back to earlier organic chemistry, food preservation as applied free-radical chemistry, and why soap fails in hard water while synthetic detergents don&apos;t."
      free={false}
    >
      <article className="space-y-8">
        <Callout label="Central idea" tone="rule">
            Almost nothing here is a genuinely new mechanism — drug action, food chemistry,
            and cleansing agents are all applications of enzyme/receptor binding, resonance,
            free-radical chemistry, and solubility arguments already built earlier.
          </Callout>

        <ChapterIndex items={cielChapterMap} />

        <div className="space-y-6">
          {cielBlocks.map((block, index) => (
              <BlockView key={`${block.kind}-${(block.text ?? "").slice(0, 64)}-${index}`} block={block} />
            ))}
        </div>
      </article>
    </CanonicalChapterPage>
  );
}
