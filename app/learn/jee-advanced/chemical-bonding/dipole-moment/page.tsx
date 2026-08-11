import {
  BulletList,
  Callout,
  ChapterIndex,
  ChapterRail,
  DataTable,
  Eyebrow,
  Figure,
  Formula,
  NumberedList,
  Prose,
  SectionHeading,
  SubHeading,
  type TermLexicon,
} from "@/components/design";
import {
  dipoleMomentBlocks,
  dipoleChapterMap,
  type DipoleBlock,
} from "./dipole-moment-notes";
import { DIPOLE_STRUCTURES } from "./dipole-structures";

export const metadata = {
  title: "Dipole Moment | Chemical Bonding | JEE Advanced",
  description:
    "Complete textbook-style JEE Advanced dipole moment notes: definition, vector addition, percentage ionic character, the Pauling and Hannay–Smyth equations, the eight contributions to molecular polarity, geometry prediction, and 30+ worked structural examples.",
};

// This chapter's vocabulary. Each group keeps the distinction the page has
// always drawn, now expressed through the shared semantic scale rather than
// per-page hex values.
const DIPOLE_LEXICON: TermLexicon = [
  { match: ["dipole moment"], kind: "energy" },
  { match: ["resonance", "induced dipole"], kind: "orbital" },
  { match: ["electronegativity", "vector sum"], kind: "bond" },
  { match: ["lone pair", "lone-pair", "group moment"], kind: "rule" },
];

/** Anchors must keep matching `dipoleChapterMap` order (`#section-N`). */
function slugForMajor(text: string) {
  const section = text.match(/^Section (\d+)/i);
  if (section) return `section-${section[1]}`;
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

function NoteBlockView({ block }: { block: DipoleBlock }) {
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
          lexicon={DIPOLE_LEXICON}
        />
      );
    }

    case "bullets":
      return <BulletList items={block.items ?? []} lexicon={DIPOLE_LEXICON} />;

    case "numbered":
      return <NumberedList items={block.items ?? []} lexicon={DIPOLE_LEXICON} />;

    case "table":
      return (
        <DataTable
          headers={block.headers ?? []}
          rows={block.rows ?? []}
          lexicon={DIPOLE_LEXICON}
        />
      );

    case "formula":
      return <Formula expression={block.text ?? ""} label={block.formulaLabel} />;

    case "structure": {
      const entry = DIPOLE_STRUCTURES[block.structureId ?? ""];
      if (!entry) return null;
      return <Figure svg={entry.svg} caption={entry.caption} />;
    }

    default:
      return <Prose text={block.text ?? ""} lexicon={DIPOLE_LEXICON} />;
  }
}

/** The four governing equations, presented as a lattice of hairline cells. */
function KeyEquations() {
  const equations = [
    { expression: "\\mu = q \\times d", label: "Definition" },
    {
      expression: "\\mu_R = \\sqrt{\\mu_1^2+\\mu_2^2+2\\mu_1\\mu_2\\cos\\theta}",
      label: "Vector addition",
    },
    {
      expression: "\\%\\text{ionic}=\\frac{\\mu_{obs}}{\\mu_{ionic}}\\times100",
      label: "Ionic character",
    },
    { expression: "16\\Delta\\chi+3.5(\\Delta\\chi)^2", label: "Hannay–Smyth" },
  ];

  return (
    <div
      className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-4"
      style={{
        background: "var(--border)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden",
      }}
    >
      {equations.map((eq) => (
        <div key={eq.label} style={{ background: "var(--background)" }}>
          <Formula expression={eq.expression} label={eq.label} bare />
        </div>
      ))}
    </div>
  );
}

export default function DipoleMomentPage() {
  return (
    <main className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-[1400px]">
        <header
          className="pb-14 pt-5 sm:pt-10"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <Eyebrow>JEE Advanced · Chemical Bonding</Eyebrow>

          <h1 className="font-display mt-5 max-w-[16ch] text-[44px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--foreground)] sm:text-[64px] lg:text-[76px]">
            Dipole Moment
          </h1>

          <p className="mt-6 max-w-[var(--measure)] text-[18px] leading-[1.7] text-[var(--text-body)] sm:text-[20px]">
            A complete textbook chapter on molecular polarity: vector addition,
            percentage ionic character, the eight contributions to a molecule&apos;s
            net dipole, geometry prediction, and every classic structural
            comparison worked through with a drawn structure.
          </p>

          <Callout label="Central idea" tone="rule">
            Dipole moment is never a single readout of &ldquo;which atom is more
            electronegative.&rdquo; It is the vector resultant of bond polarity,
            geometry, lone-pair orientation, group additivity, dative/resonance
            charge separation and induced polarization — any one of which can
            dominate, reinforce, or cancel the others.
          </Callout>

          <KeyEquations />
        </header>

        <ChapterIndex items={dipoleChapterMap} />

        <div className="grid gap-12 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <ChapterRail items={dipoleChapterMap} />
          <div className="min-w-0 pb-24">
            {dipoleMomentBlocks.map((block, index) => (
              <NoteBlockView
                key={`${block.kind}-${(block.text ?? block.structureId ?? "").slice(0, 64)}-${index}`}
                block={block}
              />
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
