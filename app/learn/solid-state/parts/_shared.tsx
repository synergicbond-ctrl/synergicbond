import type { ReactNode } from "react";

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

const toneClass = {
  info: "border-cyan-400/20 bg-cyan-400/[0.045] text-cyan-100",
  trap: "border-red-400/20 bg-red-400/[0.045] text-red-100",
  result: "border-emerald-400/20 bg-emerald-400/[0.045] text-emerald-100",
} as const;

function Block({ block }: { block: SolidStateBlock }) {
  if (block.type === "p") return <p>{block.text}</p>;

  if (block.type === "formula") {
    return (
      <div
        data-latex={block.latex}
        className="overflow-x-auto rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-center font-mono text-sm text-zinc-100"
      >
        {block.display}
      </div>
    );
  }

  if (block.type === "bullets") {
    return (
      <ul className="list-disc space-y-2 pl-5 marker:text-cyan-300">
        {block.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    );
  }

  if (block.type === "table") {
    return (
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full min-w-[660px] border-collapse text-left text-sm">
          <thead className="bg-white/[0.045] text-zinc-100">
            <tr>{block.headers.map((h) => <th key={h} className="px-3 py-3 font-semibold">{h}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-zinc-300">
            {block.rows.map((row, index) => (
              <tr key={`${index}-${row.join("-")}`}>
                {row.map((cell, i) => <td key={`${i}-${cell}`} className={`px-3 py-3 ${i === 0 ? "font-medium text-white" : ""}`}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === "ascii") {
    return (
      <div className="rounded-xl border border-violet-400/20 bg-violet-400/[0.035] p-4">
        {block.title ? <h3 className="mb-3 font-semibold text-violet-200">{block.title}</h3> : null}
        <pre className="overflow-x-auto whitespace-pre font-mono text-xs leading-6 text-zinc-200 md:text-sm">{block.text}</pre>
      </div>
    );
  }

  const tone = block.tone ?? "info";
  return (
    <div className={`rounded-xl border p-4 ${toneClass[tone]}`}>
      <div className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">{block.label}</div>
      <p className="mt-2 text-sm leading-7 text-zinc-200">{block.text}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
      <div className="mt-4 space-y-4 text-[15px] leading-7 text-zinc-300">{children}</div>
    </section>
  );
}

export function SolidStatePartPage({ data }: { data: SolidStatePartData }) {
  return (
    <article
      data-chapter="solid-state"
      data-part={String(data.part).padStart(2, "0")}
      className="mx-auto w-full max-w-5xl space-y-6 px-4 py-8 md:px-6"
    >
      <header className="rounded-3xl border border-cyan-400/20 bg-gradient-to-b from-cyan-400/10 via-violet-400/[0.025] to-transparent p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">JEE Advanced · Solid State · Part {data.part}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">{data.title}</h1>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-300">{data.intro}</p>
        <div className="mt-4 inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-400">
          Primary KOHINOOR mapping: {data.sourcePages}
        </div>
      </header>

      {data.sections.map((section) => (
        <Section key={section.title} title={section.title}>
          {section.blocks.map((block, index) => <Block key={`${section.title}-${index}`} block={block} />)}
        </Section>
      ))}

      <Section title="JEE Advanced Traps & Edge Cases">
        <ul className="list-disc space-y-2 pl-5 marker:text-red-300">
          {data.traps.map((trap) => <li key={trap}>{trap}</li>)}
        </ul>
      </Section>

      <Section title="Solved Examples">
        <div className="space-y-4">
          {data.examples.map((example) => (
            <article key={example.title} className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h3 className="font-semibold text-white">{example.title}</h3>
              <p className="mt-3 text-zinc-300">{example.question}</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-zinc-400">
                {example.steps.map((step) => <li key={step}>{step}</li>)}
              </ol>
              <div className="mt-4 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.045] px-3 py-2 text-sm font-semibold text-emerald-200">
                {example.answer}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </article>
  );
}
