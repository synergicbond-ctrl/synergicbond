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
  concept: "border-cyan-400/30 bg-cyan-400/[0.08] shadow-[inset_4px_0_0_rgba(34,211,238,0.75)]",
  jee: "border-violet-400/30 bg-violet-400/[0.08] shadow-[inset_4px_0_0_rgba(167,139,250,0.75)]",
  warning: "border-amber-400/35 bg-amber-400/[0.08] shadow-[inset_4px_0_0_rgba(251,191,36,0.78)]",
  green: "border-emerald-400/30 bg-emerald-400/[0.08] shadow-[inset_4px_0_0_rgba(52,211,153,0.75)]",
};

const sectionThemes = [
  {
    heading: "from-cyan-200 via-sky-300 to-violet-300",
    line: "from-cyan-300 via-violet-400 to-amber-300",
    border: "border-cyan-400/20",
    glow: "bg-cyan-400/[0.045]",
    bullet: "bg-cyan-300",
    eyebrow: "text-violet-300",
  },
  {
    heading: "from-emerald-200 via-cyan-300 to-blue-300",
    line: "from-emerald-300 via-cyan-400 to-blue-400",
    border: "border-emerald-400/20",
    glow: "bg-emerald-400/[0.04]",
    bullet: "bg-emerald-300",
    eyebrow: "text-emerald-300",
  },
  {
    heading: "from-amber-200 via-orange-300 to-rose-300",
    line: "from-amber-300 via-orange-400 to-rose-400",
    border: "border-amber-400/20",
    glow: "bg-amber-400/[0.04]",
    bullet: "bg-amber-300",
    eyebrow: "text-amber-300",
  },
  {
    heading: "from-fuchsia-200 via-violet-300 to-cyan-300",
    line: "from-fuchsia-300 via-violet-400 to-cyan-400",
    border: "border-fuchsia-400/20",
    glow: "bg-fuchsia-400/[0.04]",
    bullet: "bg-fuchsia-300",
    eyebrow: "text-fuchsia-300",
  },
  {
    heading: "from-rose-200 via-pink-300 to-amber-300",
    line: "from-rose-300 via-pink-400 to-amber-400",
    border: "border-rose-400/20",
    glow: "bg-rose-400/[0.04]",
    bullet: "bg-rose-300",
    eyebrow: "text-rose-300",
  },
];

const headerTones = ["text-cyan-200", "text-violet-200", "text-amber-200", "text-emerald-200", "text-rose-200"];
const cellTones = ["text-cyan-100", "text-violet-100", "text-amber-100", "text-emerald-100", "text-rose-100"];
const panelThemes = [
  "border-cyan-400/25 bg-cyan-400/[0.055]",
  "border-violet-400/25 bg-violet-400/[0.055]",
  "border-amber-400/25 bg-amber-400/[0.055]",
  "border-emerald-400/25 bg-emerald-400/[0.055]",
  "border-rose-400/25 bg-rose-400/[0.055]",
];

function Formula({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-violet-300/25 bg-gradient-to-r from-cyan-400/[0.08] via-violet-400/[0.07] to-amber-400/[0.07] px-5 py-4 text-center font-['STIX_Two_Math','Cambria_Math',serif] text-base font-semibold tracking-wide text-cyan-50 shadow-[0_0_28px_rgba(99,102,241,0.08)] sm:text-lg">
      {children}
    </div>
  );
}

function TableBlock({ table }: { table: DataTable }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-violet-300/20 bg-[#070b12]">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-[15px]">
          {table.caption ? (
            <caption className="border-b border-violet-300/20 bg-violet-400/[0.10] px-5 py-4 text-left text-base font-bold text-violet-100">
              {table.caption}
            </caption>
          ) : null}
          <thead className="bg-gradient-to-r from-cyan-400/[0.14] via-violet-400/[0.12] to-amber-400/[0.08] text-cyan-100">
            <tr>
              {table.headers.map((header) => (
                <th
                  key={header}
                  className={`whitespace-nowrap px-5 py-4 font-extrabold ${headerTones[table.headers.indexOf(header) % headerTones.length]}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {table.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="align-top odd:bg-white/[0.02]">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="min-w-40 px-5 py-4 leading-7 text-slate-300">
                    <span className={cellIndex === 0 ? `font-semibold ${cellTones[rowIndex % cellTones.length]}` : ""}>
                      {cell}
                    </span>
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
  const theme = sectionThemes[index % sectionThemes.length];

  return (
    <section className={`relative border-b py-9 last:border-b-0 sm:py-11 ${theme.border}`}>
      <div className={`pointer-events-none absolute inset-y-5 -left-4 w-1 rounded-full ${theme.glow}`} />
      <div className="mb-7">
        <div>
          {section.eyebrow ? (
            <p className={`mb-2 text-xs font-extrabold uppercase tracking-[0.18em] ${theme.eyebrow}`}>
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className={`bg-gradient-to-r bg-clip-text text-2xl font-extrabold leading-tight tracking-tight text-transparent sm:text-3xl ${theme.heading}`}>
            {index + 1}. {section.title}
          </h2>
          <div className={`mt-4 h-[3px] w-28 rounded-full bg-gradient-to-r ${theme.line}`} />
        </div>
      </div>

      {section.paragraphs?.length ? (
        <div className="space-y-4 text-[17px] leading-8 text-slate-300">
          {section.paragraphs.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {section.bullets?.length ? (
        <ul className="mt-5 grid gap-3 text-[17px] leading-8 text-slate-300">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className={`mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full ${theme.bullet}`} />
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
            <div key={step} className={`relative rounded-xl border px-4 py-3 text-[15px] leading-7 text-slate-100 ${panelThemes[stepIndex % panelThemes.length]}`}>
              <span className={`mr-2 font-black ${cellTones[stepIndex % cellTones.length]}`}>{stepIndex + 1}</span>
              {step}
            </div>
          ))}
        </div>
      ) : null}

      {section.table ? <div className="mt-5"><TableBlock table={section.table} /></div> : null}

      {section.structures?.length ? (
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {section.structures.map((structure, structureIndex) => (
            <div key={structure.name} className={`rounded-2xl border p-5 ${panelThemes[structureIndex % panelThemes.length]}`}>
              <p className={`text-sm font-extrabold ${cellTones[structureIndex % cellTones.length]}`}>{structure.name}</p>
              <p className="my-4 overflow-x-auto text-center font-['STIX_Two_Math','Cambria_Math',serif] text-xl font-bold text-white">
                {structure.formula}
              </p>
              <p className="text-[15px] leading-7 text-slate-300">{structure.note}</p>
            </div>
          ))}
        </div>
      ) : null}

      {section.boxes?.length ? (
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {section.boxes.map((box) => (
            <aside key={box.title} className={`rounded-xl border p-4 ${boxTone[box.tone ?? "concept"]}`}>
              <h3 className="text-base font-extrabold text-amber-300">{box.title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-slate-300">{box.body}</p>
            </aside>
          ))}
        </div>
      ) : null}

      {section.image ? (
        <figure className="mt-6 overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#050910]">
          <img
            src={section.image.src}
            alt={section.image.alt}
            className="aspect-video w-full object-cover"
            loading="lazy"
          />
          <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-slate-400">
            {section.image.caption}
          </figcaption>
        </figure>
      ) : null}
    </section>
  );
}

export default function EnvironmentalChemistryPart({ data }: { data: PartData }) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.06),transparent_25%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.07),transparent_28%),radial-gradient(circle_at_bottom_center,rgba(244,63,94,0.045),transparent_32%),#03060b] px-4 py-8 font-['Inter','SF_Pro_Text','Segoe_UI',Arial,sans-serif] text-slate-200 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-7xl">
        <header className="relative overflow-hidden border-b border-slate-800/90 pb-9 pt-3 sm:pb-11">
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-violet-400/[0.08] blur-3xl" />
          <p className="relative text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-300 sm:text-sm">
            JEE Advanced · Environmental Chemistry · {data.part}
          </p>
          <h1 className="relative mt-3 max-w-6xl bg-gradient-to-r from-cyan-200 via-blue-300 via-violet-300 to-orange-200 bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            {data.title}
          </h1>
          <p className="relative mt-5 max-w-4xl text-[17px] leading-8 text-slate-300">{data.subtitle}</p>
          <div className="relative mt-5 h-[3px] w-28 rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-amber-300" />
          <div className="relative mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {data.goals.map((goal, goalIndex) => (
              <div key={goal} className={`rounded-xl border px-4 py-3 text-[15px] leading-7 text-slate-100 ${panelThemes[goalIndex % panelThemes.length]}`}>
                {goal}
              </div>
            ))}
          </div>
          <p className="relative mt-5 border-t border-white/10 pt-4 text-xs leading-5 text-slate-400">
            {data.sourceNote}
          </p>
          {data.heroImage ? (
            <figure className="relative mt-7 overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#050910]">
              <img
                src={data.heroImage.src}
                alt={data.heroImage.alt}
                className="aspect-video w-full object-cover"
              />
              <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-slate-400">
                {data.heroImage.caption}
              </figcaption>
            </figure>
          ) : null}
        </header>

        <div className="mt-2">
          {data.sections.map((section, index) => (
            <Section key={`${section.title}-${index}`} section={section} index={index} />
          ))}
        </div>

        {data.examples?.length ? (
          <section className="mt-10 border-t border-slate-800/90 pt-10">
            <h2 className="bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-3xl font-extrabold text-transparent">Worked Examples</h2>
            <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-amber-300" />
            <div className="mt-5 grid gap-4">
              {data.examples.map((example, index) => (
                <article key={example.title} className={`rounded-2xl border p-5 sm:p-6 ${panelThemes[index % panelThemes.length]}`}>
                  <p className={`text-xs font-black uppercase tracking-[0.16em] ${cellTones[index % cellTones.length]}`}>Example {index + 1}</p>
                  <h3 className="mt-2 text-xl font-extrabold text-cyan-100">{example.title}</h3>
                  <p className="mt-3 text-[16px] leading-8 text-slate-300"><strong className="text-amber-300">Problem:</strong> {example.problem}</p>
                  <ol className="mt-4 space-y-2 text-[16px] leading-7 text-slate-300">
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
          <section className="mt-10 border-t border-slate-800/90 pt-10">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-300">Try first, then check</p>
                <h2 className="mt-1 bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-3xl font-extrabold text-transparent">Practice Questions and PYQs</h2>
              </div>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                {data.questions.length} questions
              </span>
            </div>
            <div className="mt-5 grid gap-4">
              {data.questions.map((item, questionIndex) => (
                <article key={item.number} className={`rounded-2xl border p-5 sm:p-6 ${panelThemes[questionIndex % panelThemes.length]}`}>
                  <div className="flex gap-3">
                    <span className={`grid h-8 min-w-8 place-items-center rounded-lg border px-2 text-xs font-black ${panelThemes[questionIndex % panelThemes.length]} ${cellTones[questionIndex % cellTones.length]}`}>
                      {item.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      {item.tag ? <p className="mb-1 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-300">{item.tag}</p> : null}
                      <p className="text-[17px] font-semibold leading-8 text-slate-100">{item.question}</p>
                      {item.options?.length ? (
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          {item.options.map((option, optionIndex) => (
                            <div key={option} className="rounded-lg border border-slate-800 bg-[#090e17] px-4 py-3 text-[15px] leading-7 text-slate-300">
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

        <section className="mt-10 border-t border-slate-800/90 py-10">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-rose-300">Part {data.part} quick review</p>
          <h2 className="mt-1 bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-3xl font-extrabold text-transparent">Before You Move On</h2>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {data.recap.map((item, recapIndex) => (
              <li key={item} className={`rounded-xl border px-4 py-3 text-[15px] leading-7 text-slate-200 ${panelThemes[recapIndex % panelThemes.length]}`}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
