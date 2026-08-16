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
  atomicStructureBlocks,
  atomicStructureChapterMap,
  type AtomicStructureBlock,
} from "./atomic-structure-notes";

export const metadata = {
  title: "Inorganic Chemistry I — Atomic Structure | B.Sc. Year 1 | University Chemistry",
  description:
    "B.Sc. Chemistry Year 1, Semester I, Paper C-1: Atomic Structure at undergraduate depth — the Schrodinger equation and its solutions, quantum numbers, orbital shapes and nodes, radial distribution functions, and Aufbau exceptions with the exchange-energy reasoning behind them.",
};

const LEXICON: TermLexicon = [
  { match: ["Schrodinger equation", "wavefunction", "quantum number"], kind: "bond" },
  { match: ["orbital", "node", "radial", "angular"], kind: "orbital" },
  { match: ["Warning / limitation", "common trap"], kind: "trap" },
  { match: ["Aufbau", "Pauli", "Hund"], kind: "rule" },
];

function slugForMajor(text: string) {
  const section = text.match(/^Section (\d+)/i);
  if (section) return `section-${section[1]}`;
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 72);
}

function BlockView({ block }: { block: AtomicStructureBlock }) {
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

export default function InorganicChemistry1Page() {
  return (
    <main className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-[1400px]">
        <header className="pb-14 pt-5 sm:pt-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <Link href="/university-chemistry/bsc-1" className="block text-sm font-medium" style={{ color: "var(--accent)" }}>
            ← B.Sc. Year 1
          </Link>
          <div className="mt-6">
            <Eyebrow>B.Sc. Chemistry Year 1 · Semester I · Paper C-1 · Inorganic Chemistry I</Eyebrow>
          </div>
          <h1 className="font-display mt-5 max-w-[20ch] text-[44px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--foreground)] sm:text-[64px] lg:text-[72px]">
            Atomic Structure
          </h1>
          <p className="mt-6 max-w-[var(--measure)] text-[18px] leading-[1.7] text-[var(--text-body)] sm:text-[20px]">
            Unit 1 of Paper C-1. Where the JEE Advanced treatment of atomic structure states
            quantum numbers and orbital shapes as rules to apply, this unit works from the
            Schrodinger equation itself: what forces n, l and ml to exist and take only
            integer values, what psi and psi-squared actually mean, and why the Aufbau
            exceptions at Cr and Cu are a predictable consequence of exchange energy rather
            than a list to memorise.
          </p>
          <Callout label="Central idea" tone="rule">
            Every result in this unit — quantised angular momentum, the shapes of orbitals,
            the existence of nodes, even the Bohr radius itself — falls out of one equation
            (H-hat psi = E psi) applied under the physical requirement that psi stay finite,
            single-valued and continuous. Nothing here is assumed; it is derived.
          </Callout>
        </header>

        <ChapterIndex items={atomicStructureChapterMap} />

        <div className="grid gap-12 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <ChapterRail items={atomicStructureChapterMap} />
          <div className="min-w-0 pb-24">
            {atomicStructureBlocks.map((block, index) => (
              <BlockView key={`${block.kind}-${(block.text ?? "").slice(0, 64)}-${index}`} block={block} />
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
