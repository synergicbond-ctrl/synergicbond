"use client";

import type { ReactNode } from "react";

export type DataTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type NoteBox = {
  title: string;
  body: string;
  tone?: "concept" | "jee" | "warning" | "green";
};

export type StructureCard = {
  name: string;
  formula: string;
  note: string;
};

export type FigureData = {
  src: string;
  alt: string;
  caption: string;
};

export type SectionData = {
  title: string;
  eyebrow?: string;
  paragraphs?: string[];
  bullets?: string[];
  equations?: string[];
  flow?: string[];
  table?: DataTable;
  structures?: StructureCard[];
  boxes?: NoteBox[];
  image?: FigureData;
};

export type WorkedExample = {
  title: string;
  problem: string;
  steps: string[];
  answer: string;
};

export type PracticeQuestion = {
  number: number | string;
  question: string;
  options?: string[];
  answer: string;
  solution: string;
  tag?: string;
};

export type PartData = {
  part: number;
  title: string;
  subtitle: string;
  goals: string[];
  sourceNote: string;
  heroImage?: FigureData;
  sections: SectionData[];
  examples?: WorkedExample[];
  questions?: PracticeQuestion[];
  recap: string[];
};

const boxTone = {
  concept: "border-cyan-400/25 bg-cyan-400/[0.07]",
  jee: "border-violet-400/25 bg-violet-400/[0.07]",
  warning: "border-amber-400/30 bg-amber-400/[0.075]",
  green: "border-emerald-400/25 bg-emerald-400/[0.07]",
};

function Formula({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-cyan-300/15 bg-[#06101d] px-4 py-3 text-center font-['STIX_Two_Math','Cambria_Math',serif] text-[15px] font-semibold tracking-wide text-cyan-100 sm:text-base">
      {children}
    </div>
  );
}

function TableBlock({ table }: { table: DataTable }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm">
          {table.caption ? (
            <caption className="border-b border-white/10 bg-violet-400/[0.08] px-4 py-3 text-left font-bold text-violet-100">
              {table.caption}
            </caption>
          ) : null}
          <thead className="bg-white/[0.08] text-cyan-100">
            <tr>
              {table.headers.map((header) => (
                <th key={header} className="whitespace-nowrap px-4 py-3 font-bold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {table.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="align-top odd:bg-white/[0.025]">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="min-w-40 px-4 py-3 leading-6 text-slate-300">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

function Section({ section, index }: { section: SectionData; index: number }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/5 sm:p-7">
      <div className="mb-5 flex items-start gap-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-cyan-300/20 bg-cyan-400/10 text-xs font-black text-cyan-200">
          {index + 1}
        </span>
        <div>
          {section.eyebrow ? (
            <p className="mb-1 text-[11px] font-black uppercase tracking-[0.2em] text-violet-300">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="text-xl font-black tracking-tight text-white sm:text-2xl">{section.title}</h2>
        </div>
      </div>

      {section.paragraphs?.length ? (
        <div className="space-y-3 text-[15px] leading-7 text-slate-300">
          {section.paragraphs.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {section.bullets?.length ? (
        <ul className="mt-4 grid gap-2 text-[15px] leading-7 text-slate-300">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.equations?.length ? (
        <div className="mt-5 grid gap-2">
          {section.equations.map((equation) => (
            <Formula key={equation}>{equation}</Formula>
          ))}
        </div>
      ) : null}

      {section.flow?.length ? (
        <div className="mt-5 grid gap-2 md:grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
          {section.flow.map((step, stepIndex) => (
            <div key={step} className="relative rounded-xl border border-emerald-300/20 bg-emerald-400/[0.055] px-4 py-3 text-sm leading-6 text-emerald-100">
              <span className="mr-2 font-black text-emerald-300">{stepIndex + 1}</span>
              {step}
            </div>
          ))}
        </div>
      ) : null}

      {section.table ? <div className="mt-5"><TableBlock table={section.table} /></div> : null}

      {section.structures?.length ? (
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {section.structures.map((structure) => (
            <div key={structure.name} className="rounded-2xl border border-violet-300/20 bg-violet-400/[0.055] p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-violet-200">{structure.name}</p>
              <p className="my-4 overflow-x-auto text-center font-['STIX_Two_Math','Cambria_Math',serif] text-lg font-bold text-white">
                {structure.formula}
              </p>
              <p className="text-sm leading-6 text-slate-300">{structure.note}</p>
            </div>
          ))}
        </div>
      ) : null}

      {section.boxes?.length ? (
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {section.boxes.map((box) => (
            <aside key={box.title} className={`rounded-xl border p-4 ${boxTone[box.tone ?? "concept"]}`}>
              <h3 className="font-black text-white">{box.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{box.body}</p>
            </aside>
          ))}
        </div>
      ) : null}

      {section.image ? (
        <figure className="mt-5 overflow-hidden rounded-2xl border border-cyan-300/15 bg-[#06101d]">
          <img
            src={section.image.src}
            alt={section.image.alt}
            className="aspect-video w-full object-cover"
            loading="lazy"
          />
          <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-5 text-slate-400">
            {section.image.caption}
          </figcaption>
        </figure>
      ) : null}
    </section>
  );
}

export default function EnvironmentalChemistryPart({ data }: { data: PartData }) {
  return (
    <main className="min-h-screen bg-[#06101d] px-4 py-8 text-slate-200 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-6xl">
        <header className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 via-[#0b1728] to-violet-500/10 p-6 sm:p-9">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
          <p className="relative text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            JEE Advanced · Environmental Chemistry · {data.part}
          </p>
          <h1 className="relative mt-3 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl">
            {data.title}
          </h1>
          <p className="relative mt-4 max-w-3xl text-base leading-7 text-slate-300">{data.subtitle}</p>
          <div className="relative mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {data.goals.map((goal) => (
              <div key={goal} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-slate-200">
                {goal}
              </div>
            ))}
          </div>
          {data.heroImage ? (
            <figure className="relative mt-6 overflow-hidden rounded-2xl border border-cyan-300/15 bg-[#06101d]">
              <img
                src={data.heroImage.src}
                alt={data.heroImage.alt}
                className="aspect-video w-full object-cover"
              />
              <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-5 text-slate-400">
                {data.heroImage.caption}
              </figcaption>
            </figure>
          ) : null}
        </header>

        <div className="mt-7 space-y-6">
          {data.sections.map((section, index) => (
            <Section key={`${section.title}-${index}`} section={section} index={index} />
          ))}
        </div>

        {data.examples?.length ? (
          <section className="mt-7 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.055] p-5 sm:p-7">
            <h2 className="text-2xl font-black text-white">Worked Examples</h2>
            <div className="mt-5 grid gap-4">
              {data.examples.map((example, index) => (
                <article key={example.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">Example {index + 1}</p>
                  <h3 className="mt-2 text-lg font-black text-white">{example.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300"><strong className="text-slate-100">Problem:</strong> {example.problem}</p>
                  <ol className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                    {example.steps.map((step, stepIndex) => (
                      <li key={step} className="flex gap-3">
                        <span className="font-black text-emerald-300">{stepIndex + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-400/[0.07] px-4 py-3 text-sm font-bold leading-6 text-emerald-100">
                    Answer: {example.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {data.questions?.length ? (
          <section className="mt-7 rounded-2xl border border-violet-400/20 bg-violet-400/[0.045] p-5 sm:p-7">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-300">Answer, then reveal</p>
                <h2 className="mt-1 text-2xl font-black text-white">Practice and PYQ Workshop</h2>
              </div>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                {data.questions.length} questions
              </span>
            </div>
            <div className="mt-5 grid gap-4">
              {data.questions.map((item) => (
                <article key={item.number} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="flex gap-3">
                    <span className="grid h-8 min-w-8 place-items-center rounded-lg bg-violet-400/15 px-2 text-xs font-black text-violet-200">
                      {item.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      {item.tag ? <p className="mb-1 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-300">{item.tag}</p> : null}
                      <p className="font-semibold leading-7 text-slate-100">{item.question}</p>
                      {item.options?.length ? (
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          {item.options.map((option, optionIndex) => (
                            <div key={option} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm leading-6 text-slate-300">
                              <span className="mr-2 font-black text-violet-300">{String.fromCharCode(65 + optionIndex)}.</span>
                              {option}
                            </div>
                          ))}
                        </div>
                      ) : null}
                      <details className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-400/[0.055] p-4">
                        <summary className="cursor-pointer text-sm font-black text-emerald-200">Show answer and solution</summary>
                        <p className="mt-3 border-t border-white/10 pt-3 text-sm font-bold text-white">Answer: {item.answer}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{item.solution}</p>
                      </details>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-7 rounded-2xl border border-rose-400/20 bg-rose-400/[0.055] p-5 sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-rose-300">Part {data.part} recall sheet</p>
          <h2 className="mt-1 text-2xl font-black text-white">Before You Move On</h2>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {data.recap.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-slate-300">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
