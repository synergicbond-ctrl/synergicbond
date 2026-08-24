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
import { coordBlocks, coordChapterMap, type CoordBlock } from "./coordination-compounds-notes";

export const metadata = {
  title: "Coordination Compounds | JEE Advanced Inorganic Chemistry",
  description:
    "Werner's theory, IUPAC nomenclature, structural and stereo isomerism (including cisplatin's cis/trans activity contrast), valence bond theory hybridisation and magnetism, crystal field theory splitting in octahedral/tetrahedral/square planar fields, CFSE, colour, the spectrochemical series, and the chelate effect.",
};

const LEXICON: TermLexicon = [
  { match: ["coordination sphere", "ligand", "chelate", "donor atom"], kind: "bond" },
  { match: ["t2g", "eg", "crystal field", "d-d transition", "hybridisation"], kind: "orbital" },
  { match: ["Warning / limitation", "Common trap", "JEE trap"], kind: "trap" },
  { match: ["Key idea", "JEE-to-university bridge"], kind: "rule" },
];

function slugForMajor(text: string) {
  const section = text.match(/^Section (\d+)/i);
  if (section) return `section-${section[1]}`;
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 72);
}

function BlockView({ block }: { block: CoordBlock }) {
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

export default function CoordinationCompoundsPage() {
  return (
    <AppShell
      discipline="JEE Advanced · Inorganic Chemistry"
      chapterTitle="Coordination Compounds"
      chapterSlug="coordination-compounds"
      description="From Werner&apos;s original separation of primary and secondary valence through crystal field theory&apos;s explanation of colour and magnetism — the d-orbital splitting that decides whether a complex is paramagnetic or diamagnetic, coloured or colourless, and why cisplatin works as a drug while its trans isomer does not."
      free={false}
    >
      <article className="mx-auto max-w-3xl">
        <Callout label="Central idea" tone="rule">
            Almost every physical property in this chapter — magnetism, colour, stability —
            traces back to one question: how does the ligand field split the five d orbitals,
            and how do the available d electrons fill that split pattern.
          </Callout>

        <ChapterIndex items={coordChapterMap} />

        <div className="py-8">
          {coordBlocks.map((block, index) => (
              <BlockView key={`${block.kind}-${(block.text ?? "").slice(0, 64)}-${index}`} block={block} />
            ))}
        </div>
      </article>
    </AppShell>
  );
}
