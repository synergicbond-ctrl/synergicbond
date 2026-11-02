import Link from "next/link";
import type { ReactNode } from "react";
import { Block, ConceptBlock } from "@/components/chapter-ui/blocks";
import { FccLayersNotes } from "./FccLayersNotes";
import { LabEmbed } from "./LabEmbed";
import { CHAPTER_LABS } from "./labs";
import { SOLID_STATE_PARTS } from "../parts";

const SOLID_STATE_PART_COUNT = SOLID_STATE_PARTS.length;

export type SolidStateBlock =
  | { type: "p"; text: string }
  | { type: "formula"; latex: string; display: string }
  | { type: "bullets"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "ascii"; title?: string; text: string }
  | { type: "callout"; label: string; text: string; tone?: "info" | "trap" | "result" };

export type SolidStateSection = {
  title: string;
  blocks: SolidStateBlock[];
};

export type SolidStateExample = {
  title: string;
  question: string;
  steps: string[];
  answer: string;
};

export type SolidStatePartData = {
  part: number;
  slug: string;
  title: string;
  sourcePages: string;
  intro: string;
  sections: SolidStateSection[];
  traps: string[];
  examples: SolidStateExample[];
};

/**
 * One solid-state part, rendered inside the shared AppShell (which owns the header, contents rail,
 * search and pager). Every field of the part is rendered: intro, source pages, sections and their
 * blocks, traps and worked examples.
 */
export function SolidStatePartPage({ data }: { data: SolidStatePartData }) {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <header className="space-y-2 text-sm text-[var(--text-muted)]">
        <p>
          <Link href="/learn/solid-state" className="font-semibold">← Solid State</Link>
          {" · "}Part {String(data.part).padStart(2, "0")} / {SOLID_STATE_PART_COUNT}
        </p>
        <p>Physical Chemistry · JEE Advanced</p>
        <p>
          Crystal structure, lattice geometry, packing, defects and properties — the complete {SOLID_STATE_PART_COUNT}-part JEE Advanced
          sequence.
        </p>
        <p>{SOLID_STATE_PART_COUNT} Topics</p>
        <p>Source pages: {data.sourcePages}</p>
      </header>

      {data.intro ? <ConceptBlock lead={data.intro} /> : null}

      {(CHAPTER_LABS[data.part] ?? []).map((lab) => (
        <LabEmbed key={lab.hash} hash={lab.hash} title={lab.title} caption={lab.caption} />
      ))}

      {data.sections.map((section) => (
        <section key={section.title} className="space-y-5">
          <h2 className="text-2xl font-black leading-tight">{section.title}</h2>
          <SectionBlocks blocks={section.blocks} title={section.title} />
        </section>
      ))}

      {/* Part 17 (Packing in Solids): how fcc is built from square or hexagonal layers, with the animation */}
      {data.part === 17 ? <FccLayersNotes /> : null}

      {data.traps.length > 0 ? (
        <Block kind="trap" title="JEE Advanced traps & edge cases">
          <ul className="space-y-2">
            {data.traps.map((trap) => (
              <li key={trap} className="leading-7 text-[var(--text-body)]">{trap}</li>
            ))}
          </ul>
        </Block>
      ) : null}

      {data.examples.length > 0 ? (
        <Block kind="example" title="Solved examples">
          <div className="space-y-5">
            {data.examples.map((example, exIndex) => (
              <article key={example.title} className="space-y-2">
                <p className="text-xs font-black uppercase tracking-widest text-[var(--c-example)]">Worked example {exIndex + 1}</p>
                <h3 className="text-base font-semibold">{example.title}</h3>
                <p className="leading-7 text-[var(--text-body)]">{example.question}</p>
                <ol className="list-decimal space-y-1 pl-5 text-[var(--text-muted)]">
                  {example.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <p className="border-t border-[var(--border)] pt-2 font-semibold">{example.answer}</p>
              </article>
            ))}
          </div>
        </Block>
      ) : null}
    </div>
  );
}

/** Consecutive paragraphs form one concept block; every other block keeps its own typed frame. */
function SectionBlocks({ blocks, title }: { blocks: SolidStateBlock[]; title: string }) {
  const out: ReactNode[] = [];
  let run: string[] = [];
  const flush = (key: string) => {
    if (run.length === 0) return;
    const [lead, ...rest] = run;
    out.push(
      <ConceptBlock key={key} lead={lead}>
        {rest.map((text) => (
          <p key={text} className="leading-7">{text}</p>
        ))}
      </ConceptBlock>,
    );
    run = [];
  };
  blocks.forEach((block, index) => {
    const key = `${title}-${index}`;
    if (block.type === "p") {
      run.push(block.text);
      return;
    }
    flush(`${key}-p`);
    out.push(<BlockView key={key} block={block} />);
  });
  flush(`${title}-end`);
  return <>{out}</>;
}

function BlockView({ block }: { block: SolidStateBlock }) {
  if (block.type === "formula") {
    return (
      <Block kind="formula">
        <div data-latex={block.latex} className="overflow-x-auto font-mono">{block.display}</div>
      </Block>
    );
  }
  if (block.type === "bullets") {
    return (
      <ul className="space-y-2 pl-5">
        {block.items.map((item) => (
          <li key={item} className="list-disc leading-7 text-[var(--text-body)]">{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "table") {
    return (
      <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
        <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
          <thead className="bg-[var(--surface-2)]">
            <tr>{block.headers.map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t border-[var(--border)]">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-2 align-top leading-6 text-[var(--text-body)]">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (block.type === "ascii") {
    return (
      <Block kind="visual" title={block.title ?? "Diagram"} as="figure">
        <pre className="overflow-x-auto font-mono text-[0.8125rem] leading-6">{block.text}</pre>
      </Block>
    );
  }
  if (block.type === "p") return null;
  // callout: the tone picks the typed block; the label stays as the block's title
  const kind = block.tone === "trap" ? "trap" : block.tone === "result" ? "jee" : "concept";
  return (
    <Block kind={kind} title={block.label}>
      <p className="leading-7">{block.text}</p>
    </Block>
  );
}
