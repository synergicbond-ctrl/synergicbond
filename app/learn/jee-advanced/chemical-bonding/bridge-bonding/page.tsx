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
  bridgeBondingBlocks,
  bridgeChapterMap,
  type BridgeBlock,
} from "./bridge-bonding-notes";
import { BRIDGE_STRUCTURES } from "./bridge-structures";

export const metadata = {
  title: "Bridge Bonding & Multicentre Bonding | Chemical Bonding | JEE Advanced",
  description:
    "Complete textbook-style JEE Advanced notes on bridge bonding: 2c–2e vs 3c–2e vs 3c–4e bonds, diborane, the full Group 13 trihalide trend from boron to thallium, beryllium chemistry, Grignard reagents, [LiCH3]4, solved numericals and worked structural examples.",
};

const BRIDGE_LEXICON: TermLexicon = [
  { match: ["3c–2e", "3c-2e", "2c–2e", "2c-2e", "bridge", "bridging", "bridged"], kind: "bond" },
  { match: ["3c–4e", "3c-4e", "lone pair", "donor bridge", "multicentre", "delocalised"], kind: "orbital" },
  { match: ["inert-pair effect", "electron deficient", "electron-deficient"], kind: "trap" },
  { match: ["Schlenk equilibrium", "octet"], kind: "rule" },
];

/** Anchors must keep matching `bridgeChapterMap` order (`#section-N`). */
function slugForMajor(text: string) {
  const section = text.match(/^Section (\d+)/i);
  if (section) return `section-${section[1]}`;
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

function NoteBlockView({ block }: { block: BridgeBlock }) {
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
          lexicon={BRIDGE_LEXICON}
        />
      );
    }

    case "bullets":
      return <BulletList items={block.items ?? []} lexicon={BRIDGE_LEXICON} />;

    case "numbered":
      return <NumberedList items={block.items ?? []} lexicon={BRIDGE_LEXICON} />;

    case "table":
      return (
        <DataTable
          headers={block.headers ?? []}
          rows={block.rows ?? []}
          lexicon={BRIDGE_LEXICON}
        />
      );

    case "formula":
      return <Formula expression={block.text ?? ""} label={block.formulaLabel} />;

    case "structure": {
      const entry = BRIDGE_STRUCTURES[block.structureId ?? ""];
      if (!entry) return null;
      return <Figure svg={entry.svg} caption={entry.caption} />;
    }

    default:
      return <Prose text={block.text ?? ""} lexicon={BRIDGE_LEXICON} />;
  }
}

/** The governing distinction of the whole chapter, presented as a hairline lattice. */
function KeyDistinction() {
  const cells = [
    { label: "2c–2e", body: "Ordinary covalent bond — one pair, two nuclei." },
    { label: "3c–2e", body: "Electron-deficient bridge — H or alkyl, no lone pair (gold in every figure)." },
    { label: "3c–4e", body: "Donor bridge — halide or lone-pair donor (teal in every figure)." },
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

export default function BridgeBondingPage() {
  return (
    <main className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-[1400px]">
        <header
          className="pb-14 pt-5 sm:pt-10"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <Eyebrow>JEE Advanced · Chemical Bonding</Eyebrow>

          <h1 className="font-display mt-5 max-w-[20ch] text-[44px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--foreground)] sm:text-[64px] lg:text-[72px]">
            Bridge Bonding &amp; Multicentre Bonding
          </h1>

          <p className="mt-6 max-w-[var(--measure)] text-[18px] leading-[1.7] text-[var(--text-body)] sm:text-[20px]">
            A complete textbook chapter on multicentre bonding: the 2c–2e / 3c–2e / 3c–4e
            distinction, diborane, the full Group 13 trihalide trend from boron to thallium
            (with the inert-pair effect and the classic “TlI₃” trap), beryllium chemistry,
            Grignard reagents, [LiCH₃]₄, and worked numericals throughout.
          </p>

          <Callout label="Central idea" tone="rule">
            Bridge bonding lets a cluster hold together with fewer electron pairs than a
            fully localized Lewis structure would demand. Whether a bridge is 3c–2e or
            3c–4e comes down to one question: does the bridging atom have a spare lone
            pair to donate? No lone pair (H, alkyl carbon) → electron-deficient 3c–2e.
            A lone pair (halide, amide) → donor 3c–4e. That single distinction explains
            almost everything else in this chapter.
          </Callout>

          <KeyDistinction />
        </header>

        <ChapterIndex items={bridgeChapterMap} />

        <div className="grid gap-12 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <ChapterRail items={bridgeChapterMap} />
          <div className="min-w-0 pb-24">
            {bridgeBondingBlocks.map((block, index) => (
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
