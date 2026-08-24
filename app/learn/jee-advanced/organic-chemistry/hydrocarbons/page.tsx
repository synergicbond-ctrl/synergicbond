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
import { AppShell } from "@/components/AppShell";
import { hydrocarbonBlocks, hydrocarbonChapterMap, type HydrocarbonBlock } from "./hydrocarbons-notes";

export const metadata = {
  title: "Hydrocarbons: Alkanes, Alkenes, Alkynes and Aromatics | JEE Advanced Organic Chemistry",
  description:
    "Free-radical halogenation, E1/E2 elimination, Markovnikov and anti-Markovnikov addition, ozonolysis, alkyne acidity, and the electrophilic aromatic substitution mechanism with all five named EAS reactions and directing-effect problems.",
};

const LEXICON: TermLexicon = [
  { match: ["carbocation", "carbanion", "free radical", "arenium ion"], kind: "bond" },
  { match: ["Markovnikov", "aromaticity", "syn addition", "anti-periplanar"], kind: "orbital" },
  { match: ["Warning / limitation", "Common trap", "JEE trap"], kind: "trap" },
  { match: ["Key idea", "JEE-to-university bridge"], kind: "rule" },
];

function slugForMajor(text: string) {
  const section = text.match(/^Section (\d+)/i);
  if (section) return `section-${section[1]}`;
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 72);
}

function BlockView({ block }: { block: HydrocarbonBlock }) {
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

export default function HydrocarbonsPage() {
  return (
    <AppShell
      discipline="JEE Advanced · Organic Chemistry"
      chapterTitle="Hydrocarbons"
      chapterSlug="hydrocarbons"
      description="Alkanes, alkenes, alkynes and aromatics — where the reactive intermediates and electronic effects built in General Organic Chemistry turn into real reactions: free-radical halogenation, elimination, electrophilic addition, oxidative cleavage, and the five named electrophilic aromatic substitutions with their directing-effect logic."
      free={false}
    >
      <article className="mx-auto max-w-3xl">
        <Callout label="Central idea" tone="rule">
            Every regiochemical outcome here — Markovnikov addition, Zaitsev elimination,
            ortho/para vs meta substitution — is the same underlying question asked
            repeatedly: which intermediate (carbocation, radical, or arenium ion) is more
            stable, and does the mechanism actually pass through that intermediate.
          </Callout>

        <ChapterIndex items={hydrocarbonChapterMap} />

        <div className="py-8">
          {hydrocarbonBlocks.map((block, index) => (
              <BlockView key={`${block.kind}-${(block.text ?? "").slice(0, 64)}-${index}`} block={block} />
            ))}
        </div>
      </article>
    </AppShell>
  );
}
