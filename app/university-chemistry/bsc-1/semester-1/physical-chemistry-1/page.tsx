import Link from "next/link";
import {
  BulletList,
  Callout,
  ChapterIndex,
  ChapterRail,
  DataTable,
  Eyebrow,
  Formula,
  Prose,
  SectionHeading,
  SubHeading,
  type TermLexicon,
} from "@/components/design";
import {
  mathConceptsBlocks,
  mathConceptsChapterMap,
  type MathConceptsBlock,
} from "./mathematical-concepts-notes";

export const metadata = {
  title: "Physical Chemistry I — Mathematical Concepts | B.Sc. Year 1 | University Chemistry",
  description:
    "B.Sc. Chemistry Year 1, Semester I, Paper C-2: the calculus, partial derivatives, series expansions and probability tools physical chemistry is built on, applied directly to rate laws, state functions and reversible work.",
};

const LEXICON: TermLexicon = [
  { match: ["derivative", "partial derivative", "differentiate", "integral"], kind: "bond" },
  { match: ["state function", "path function", "exact differential"], kind: "orbital" },
  { match: ["Warning / limitation"], kind: "trap" },
  { match: ["Key idea", "JEE-to-university bridge"], kind: "rule" },
];

function slugForMajor(text: string) {
  const section = text.match(/^Section (\d+)/i);
  if (section) return `section-${section[1]}`;
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 72);
}

function BlockView({ block }: { block: MathConceptsBlock }) {
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

export default function PhysicalChemistry1Page() {
  return (
    <main className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-[1400px]">
        <header className="pb-14 pt-5 sm:pt-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <Link href="/university-chemistry/bsc-1" className="block text-sm font-medium" style={{ color: "var(--accent)" }}>
            ← B.Sc. Year 1
          </Link>
          <div className="mt-6">
            <Eyebrow>B.Sc. Chemistry Year 1 · Semester I · Paper C-2 · Physical Chemistry I</Eyebrow>
          </div>
          <h1 className="font-display mt-5 max-w-[20ch] text-[44px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--foreground)] sm:text-[64px] lg:text-[72px]">
            Mathematical Concepts for Chemistry
          </h1>
          <p className="mt-6 max-w-[var(--measure)] text-[18px] leading-[1.7] text-[var(--text-body)] sm:text-[20px]">
            Unit 1 of Paper C-2. Not the kinetic theory of gases — that ground is already
            covered in depth on the JEE Advanced Gaseous State chapter. This unit builds the
            calculus, partial derivatives, series expansions and probability tools that the
            rest of physical chemistry is written in: why a state function has an exact
            differential, where the integrated rate laws actually come from, and why entropy
            is a counting problem before it is anything else.
          </p>
          <Callout label="Central idea" tone="rule">
            Every physical chemistry result that follows this unit — the integrated rate laws,
            the exactness of state functions, the virial equation, the Boltzmann entropy
            formula — is a direct application of one of the seven tools built here. None of it
            is new mathematics; all of it is these tools pointed at a chemical system.
          </Callout>
        </header>

        <ChapterIndex items={mathConceptsChapterMap} />

        <div className="grid gap-12 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <ChapterRail items={mathConceptsChapterMap} />
          <div className="min-w-0 pb-24">
            {mathConceptsBlocks.map((block, index) => (
              <BlockView key={`${block.kind}-${(block.text ?? "").slice(0, 64)}-${index}`} block={block} />
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
