import {
  BulletList,
  Callout,
  ChapterIndex,
  ChapterRail,
  DataTable,
  Eyebrow,
  Formula,
  NumberedList,
  Prose,
  SectionHeading,
  SubHeading,
  type TermLexicon,
} from "@/components/design";
import {
  bondParamBlocks,
  bondParamChapterMap,
  type BondParamBlock,
} from "./bond-parameters-notes";

export const metadata = {
  title: "Bond Parameters | Chemical Bonding | JEE Advanced",
  description:
    "Verified JEE Main & JEE Advanced notes on bond parameters: bond order (Lewis and MO), bond length and its governing factors, axial/equatorial bonds in trigonal-bipyramidal species, Bent's rule, verified comparison tables, and corrected high-yield JEE traps.",
};

const BOND_PARAM_LEXICON: TermLexicon = [
  { match: ["bond order", "resonance"], kind: "bond" },
  { match: ["Bent's rule", "s-character", "hybridisation", "hybridization"], kind: "orbital" },
  { match: ["common trap", "do not", "warning"], kind: "trap" },
  { match: ["VSEPR", "axial", "equatorial"], kind: "rule" },
];

/** Anchors must keep matching `bondParamChapterMap` order (`#section-N`). */
function slugForMajor(text: string) {
  const section = text.match(/^Section (\d+)/i);
  if (section) return `section-${section[1]}`;
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

function NoteBlockView({ block }: { block: BondParamBlock }) {
  switch (block.kind) {
    case "major":
    case "section": {
      const text = block.text ?? "";
      const match = text.match(/^Section (\d+)\s*-\s*(.*)$/i);
      return (
        <SectionHeading
          id={slugForMajor(text)}
          eyebrow={match ? `Section ${match[1]}` : undefined}
        >
          {match ? match[2] : text}
        </SectionHeading>
      );
    }

    case "subheading":
      return <SubHeading>{block.text}</SubHeading>;

    case "callout": {
      // Authored as "Label: body" — split so the label drives the tone.
      const raw = block.text ?? "";
      const match = raw.match(/^([^:]+):\s*(.*)$/);
      return (
        <Callout
          label={match?.[1] ?? "Key idea"}
          text={match?.[2] ?? raw}
          lexicon={BOND_PARAM_LEXICON}
        />
      );
    }

    case "bullets":
      return <BulletList items={block.items ?? []} lexicon={BOND_PARAM_LEXICON} />;

    case "numbered":
      return <NumberedList items={block.items ?? []} lexicon={BOND_PARAM_LEXICON} />;

    case "table":
      return (
        <DataTable
          headers={block.headers ?? []}
          rows={block.rows ?? []}
          lexicon={BOND_PARAM_LEXICON}
        />
      );

    case "formula":
      return <Formula expression={block.text ?? ""} label={block.formulaLabel} />;

    default:
      return <Prose text={block.text ?? ""} lexicon={BOND_PARAM_LEXICON} />;
  }
}

/** The three parameters this chapter governs, presented as a hairline lattice. */
function ThreeParameters() {
  const cells = [
    { label: "Bond order", body: "How many electron pairs are shared — Lewis count or ½(Nb − Na) from MO theory." },
    { label: "Bond length", body: "The equilibrium internuclear distance — set by size, order, hybridisation and resonance." },
    { label: "Bond angle", body: "The angle at a shared central atom — set by VSEPR repulsion and lone-pair count." },
  ];

  return (
    <div
      className="mt-10 grid gap-px sm:grid-cols-3"
      style={{
        background: "var(--border)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden",
      }}
    >
      {cells.map((c) => (
        <div key={c.label} className="px-5 py-6" style={{ background: "var(--background)" }}>
          <Eyebrow>{c.label}</Eyebrow>
          <p className="mt-2 text-[15px] leading-[1.6] text-[var(--text-body)]">{c.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function BondParametersPage() {
  return (
    <main className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-[1400px]">
        <header
          className="pb-14 pt-5 sm:pt-10"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <Eyebrow>JEE Main &amp; JEE Advanced · Chemical Bonding</Eyebrow>

          <h1 className="font-display mt-5 max-w-[20ch] text-[44px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--foreground)] sm:text-[64px] lg:text-[72px]">
            Bond Parameters
          </h1>

          <p className="mt-6 max-w-[var(--measure)] text-[18px] leading-[1.7] text-[var(--text-body)] sm:text-[20px]">
            A verified chapter on bond order, bond length and bond angle: the Lewis and
            molecular-orbital definitions of bond order, every governing factor behind bond
            length including Bent&apos;s rule, why axial bonds in trigonal-bipyramidal species
            are longer than equatorial bonds, and a corrected set of comparison tables that
            replace single-factor shortcuts with the reasoning that actually holds up.
          </p>

          <Callout label="Central idea" tone="rule">
            Bond order, bond length and bond angle are not three independent facts to
            memorise — they are three views of the same electron distribution. Higher bond
            order concentrates more electron density between two nuclei, which shortens the
            bond; the same electron domains that set a bond&apos;s character also compete for
            angular space around the central atom. Learn the electron picture once, and all
            three parameters follow from it.
          </Callout>

          <ThreeParameters />
        </header>

        <ChapterIndex items={bondParamChapterMap} />

        <div className="grid gap-12 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <ChapterRail items={bondParamChapterMap} />
          <div className="min-w-0 pb-24">
            {bondParamBlocks.map((block, index) => (
              <NoteBlockView
                key={`${block.kind}-${(block.text ?? "").slice(0, 64)}-${index}`}
                block={block}
              />
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
