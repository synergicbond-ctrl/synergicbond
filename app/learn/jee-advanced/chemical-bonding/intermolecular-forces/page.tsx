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
  imfBlocks,
  imfChapterMap,
  type IMFBlock,
} from "./intermolecular-forces-notes";

export const metadata = {
  title: "Intermolecular Forces (van der Waals Forces) | Chemical Bonding | JEE Advanced",
  description:
    "Complete JEE Advanced notes on intermolecular forces: ion-ion, ion-dipole, ion-induced dipole, Keesom (dipole-dipole), Debye (dipole-induced dipole) and London dispersion forces, the Lennard-Jones potential, and extensive worked boiling-point, polarisability and symmetry comparisons.",
};

const IMF_LEXICON: TermLexicon = [
  { match: ["Keesom", "dipole-dipole", "dipole moment"], kind: "bond" },
  { match: ["Debye", "London", "dispersion", "polarisability", "polarizability"], kind: "orbital" },
  { match: ["common trap", "do not", "Warning"], kind: "trap" },
  { match: ["symmetry", "packing", "lattice"], kind: "rule" },
];

/** Anchors must keep matching `imfChapterMap` order (`#section-N`). */
function slugForMajor(text: string) {
  const section = text.match(/^Section (\d+)/i);
  if (section) return `section-${section[1]}`;
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

function NoteBlockView({ block }: { block: IMFBlock }) {
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
      const raw = block.text ?? "";
      const match = raw.match(/^([^:]+):\s*(.*)$/);
      return (
        <Callout
          label={match?.[1] ?? "Key idea"}
          text={match?.[2] ?? raw}
          lexicon={IMF_LEXICON}
        />
      );
    }

    case "bullets":
      return <BulletList items={block.items ?? []} lexicon={IMF_LEXICON} />;

    case "numbered":
      return <NumberedList items={block.items ?? []} lexicon={IMF_LEXICON} />;

    case "table":
      return (
        <DataTable
          headers={block.headers ?? []}
          rows={block.rows ?? []}
          lexicon={IMF_LEXICON}
        />
      );

    case "formula":
      return <Formula expression={block.text ?? ""} label={block.formulaLabel} />;

    default:
      return <Prose text={block.text ?? ""} lexicon={IMF_LEXICON} />;
  }
}

/** The seven named interactions, ranked by range, as a hairline lattice. */
function SixInteractions() {
  const cells = [
    { label: "Long-range", body: "Ion-ion, ion-dipole, ion-induced dipole — force falls off as r⁻² to r⁻⁵." },
    { label: "Short-range", body: "Keesom, Debye, London — force falls off as r⁻⁷, energy as r⁻⁶." },
    { label: "Universal", body: "London dispersion is the only one present in every molecule, polar or not." },
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

export default function IntermolecularForcesPage() {
  return (
    <main className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-[1400px]">
        <header
          className="pb-14 pt-5 sm:pt-10"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <Eyebrow>JEE Advanced · Chemical Bonding</Eyebrow>

          <h1 className="font-display mt-5 max-w-[20ch] text-[44px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--foreground)] sm:text-[64px] lg:text-[72px]">
            Intermolecular Forces
          </h1>

          <p className="mt-6 max-w-[var(--measure)] text-[18px] leading-[1.7] text-[var(--text-body)] sm:text-[20px]">
            A complete chapter on the forces that hold separate molecules together: ion-ion,
            ion-dipole and ion-induced dipole at long range; Keesom, Debye and London
            dispersion at short range; the Lennard-Jones potential; and an extensive set of
            worked boiling-point, polarisability and crystal-packing comparisons that turn
            the theory into exam-ready reasoning.
          </p>

          <Callout label="Central idea" tone="rule">
            Every intermolecular interaction is an electrostatic attraction between charge
            distributions, real or induced. What changes from one named force to the next is
            only how that charge distribution is created — a permanent ion, a permanent
            dipole, or a dipole induced by a neighbour&apos;s field or by a random
            fluctuation. Learn that one idea, and the r⁻² through r⁻⁷ force laws all follow
            from how many of those charge distributions have to align before they attract.
          </Callout>

          <SixInteractions />
        </header>

        <ChapterIndex items={imfChapterMap} />

        <div className="grid gap-12 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <ChapterRail items={imfChapterMap} />
          <div className="min-w-0 pb-24">
            {imfBlocks.map((block, index) => (
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
