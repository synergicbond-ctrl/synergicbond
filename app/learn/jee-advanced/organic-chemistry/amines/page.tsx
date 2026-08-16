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
import { amineBlocks, amineChapterMap, type AmineBlock } from "./amines-notes";

export const metadata = {
  title: "Amines and Diazonium Chemistry | JEE Advanced Organic Chemistry",
  description:
    "Amine preparation including the Gabriel synthesis and Hofmann degradation, the Hinsberg test, aniline's protonation-dependent directing behaviour, diazonium salt formation, and the full Sandmeyer/Gattermann/Balz-Schiemann/coupling reaction family.",
};

const LEXICON: TermLexicon = [
  { match: ["diazonium", "nitrene", "sulfonamide", "azo"], kind: "bond" },
  { match: ["resonance", "protonation", "nucleophile", "electrophile"], kind: "orbital" },
  { match: ["Warning / limitation", "Common trap", "JEE trap"], kind: "trap" },
  { match: ["Key idea", "JEE-to-university bridge"], kind: "rule" },
];

function slugForMajor(text: string) {
  const section = text.match(/^Section (\d+)/i);
  if (section) return `section-${section[1]}`;
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 72);
}

function BlockView({ block }: { block: AmineBlock }) {
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

export default function AminesPage() {
  return (
    <main className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-[1400px]">
        <header className="pb-14 pt-5 sm:pt-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <h1 className="font-display mt-5 max-w-[22ch] text-[44px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--foreground)] sm:text-[64px] lg:text-[72px]">
            Amines and Diazonium Chemistry
          </h1>
          <p className="mt-6 max-w-[var(--measure)] text-[18px] leading-[1.7] text-[var(--text-body)] sm:text-[20px]">
            The Gabriel synthesis and Hofmann degradation as controlled alternatives to
            unselective direct alkylation, the Hinsberg test as an applied acidity argument,
            and the diazonium salt — the single most versatile synthetic handle in organic
            chemistry, turning a temporary amino group into almost any other substituent.
          </p>
          <Callout label="Central idea" tone="rule">
            The amino group is unique in this sequence: strongly directing when installed,
            and cleanly removable or convertible via diazonium chemistry once it has served
            its purpose. No other functional group offers both properties together.
          </Callout>
        </header>

        <ChapterIndex items={amineChapterMap} />

        <div className="grid gap-12 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <ChapterRail items={amineChapterMap} />
          <div className="min-w-0 pb-24">
            {amineBlocks.map((block, index) => (
              <BlockView key={`${block.kind}-${(block.text ?? "").slice(0, 64)}-${index}`} block={block} />
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
