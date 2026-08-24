"use client";

import type { ReactNode } from "react";
import { AppShell } from "@/components/AppShell";

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
  concept: "border-[var(--chem-bond)] bg-[var(--surface)] border-l-4",
  jee: "border-[var(--chem-orbital)] bg-[var(--surface)] border-l-4",
  warning: "border-[var(--chem-energy)] bg-[var(--surface)] border-l-4",
  green: "border-[var(--chem-rule)] bg-[var(--surface)] border-l-4",
};

const sectionThemes = [
  {
    heading: "text-[var(--chem-bond)]",
    line: "bg-[var(--chem-bond)]",
    border: "border-[var(--chem-bond)]",
    glow: "",
    bullet: "bg-[var(--chem-bond)]",
    eyebrow: "text-[var(--chem-bond)]",
  },
  {
    heading: "text-[var(--chem-rule)]",
    line: "bg-[var(--chem-rule)]",
    border: "border-[var(--chem-rule)]",
    glow: "",
    bullet: "bg-[var(--chem-rule)]",
    eyebrow: "text-[var(--chem-rule)]",
  },
  {
    heading: "text-[var(--chem-energy)]",
    line: "bg-[var(--chem-energy)]",
    border: "border-[var(--chem-energy)]",
    glow: "",
    bullet: "bg-[var(--chem-energy)]",
    eyebrow: "text-[var(--chem-energy)]",
  },
  {
    heading: "text-[var(--chem-orbital)]",
    line: "bg-[var(--chem-orbital)]",
    border: "border-[var(--chem-orbital)]",
    glow: "",
    bullet: "bg-[var(--chem-orbital)]",
    eyebrow: "text-[var(--chem-orbital)]",
  },
  {
    heading: "text-[var(--chem-trap)]",
    line: "bg-[var(--chem-trap)]",
    border: "border-[var(--chem-trap)]",
    glow: "",
    bullet: "bg-[var(--chem-trap)]",
    eyebrow: "text-[var(--chem-trap)]",
  },
];

const headerTones = ["text-[var(--chem-bond)]", "text-[var(--chem-orbital)]", "text-[var(--chem-energy)]", "text-[var(--chem-rule)]", "text-[var(--chem-trap)]"];
const cellTones = ["text-[var(--chem-bond)]", "text-[var(--chem-orbital)]", "text-[var(--chem-energy)]", "text-[var(--chem-rule)]", "text-[var(--chem-trap)]"];
const panelThemes = [
  "border-[var(--chem-bond)] bg-[var(--surface)]",
  "border-[var(--chem-orbital)] bg-[var(--surface)]",
  "border-[var(--chem-energy)] bg-[var(--surface)]",
  "border-[var(--chem-rule)] bg-[var(--surface)]",
  "border-[var(--chem-trap)] bg-[var(--surface)]",
];

function Formula({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-center font-mono text-base font-semibold tracking-wide text-[var(--foreground)] sm:text-lg">
      {children}
    </div>
  );
}

function TableBlock({ table }: { table: DataTable }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-[15px]">
          {table.caption ? (
            <caption className="border-b border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-left text-base font-bold text-[var(--foreground)]">
              {table.caption}
            </caption>
          ) : null}
          <thead className="bg-[var(--surface)] text-[var(--foreground)]">
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
          <tbody className="divide-y divide-[var(--border)]">
            {table.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="align-top">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="min-w-40 px-5 py-4 leading-7 text-[var(--text-body)]">
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
      <div className="mb-7">
        <div>
          {section.eyebrow ? (
            <p className={`mb-2 text-xs font-extrabold uppercase tracking-[0.18em] ${theme.eyebrow}`}>
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className={`text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl ${theme.heading}`}>
            {index + 1}. {section.title}
          </h2>
          <div className={`mt-4 h-[2px] w-28 ${theme.line}`} />
        </div>
      </div>

      {section.paragraphs?.length ? (
        <div className="space-y-4 text-[17px] leading-8 text-[var(--text-body)]">
          {section.paragraphs.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {section.bullets?.length ? (
        <ul className="mt-5 grid gap-3 text-[17px] leading-8 text-[var(--text-body)]">
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
            <div key={structure.name} className={`rounded-lg border p-5 ${panelThemes[structureIndex % panelThemes.length]}`}>
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
        <figure className="mt-6 overflow-hidden rounded-lg border border-cyan-300/20 bg-[#050910]">
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
  const prevPart = data.part > 1 ? data.part - 1 : undefined;
  const nextPart = data.part < 15 ? data.part + 1 : undefined;

  return (
    <AppShell
      discipline="JEE Advanced · Environmental Chemistry"
      chapterTitle="Environmental Chemistry"
      chapterSlug="environmental-chemistry"
      description={data.subtitle}
      free={false}
      lessonNumber={`Part ${String(data.part).padStart(2, "0")} of 15`}
      lessonTitle={data.title}
      hubRef={{ href: "/learn/jee-advanced/environmental-chemistry", label: "All parts" }}
      prevRef={prevPart ? { href: `/learn/jee-advanced/environmental-chemistry/parts/part${String(prevPart).padStart(2, "0")}`, label: `Part ${String(prevPart).padStart(2, "0")}` } : undefined}
      nextRef={nextPart ? { href: `/learn/jee-advanced/environmental-chemistry/parts/part${String(nextPart).padStart(2, "0")}`, label: `Part ${String(nextPart).padStart(2, "0")}` } : undefined}
    >
      <article className="mx-auto max-w-3xl">
        <div className="mb-8">
          <div className="grid gap-2 sm:grid-cols-2">
            {data.goals.map((goal, goalIndex) => (
              <div key={goal} className={`rounded-xl border px-4 py-3 text-[15px] leading-7 text-slate-100 ${panelThemes[goalIndex % panelThemes.length]}`}>
                {goal}
              </div>
            ))}
          </div>
          {data.heroImage ? (
            <figure className="relative mt-7 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
              <img
                src={data.heroImage.src}
                alt={data.heroImage.alt}
                className="aspect-video w-full object-cover"
              />
              <figcaption className="border-t border-[var(--border)] px-5 py-4 text-sm leading-6 text-[var(--text-muted)]">
                {data.heroImage.caption}
              </figcaption>
            </figure>
          ) : null}
        </div>

        <div className="mt-2">
          {data.sections.map((section, index) => (
            <Section key={`${section.title}-${index}`} section={section} index={index} />
          ))}
        </div>

        {data.examples?.length ? (
          <section className="mt-10 border-t border-[var(--border)] pt-10">
            <h2 className="text-3xl font-extrabold text-[var(--foreground)]">Worked Examples</h2>
            <div className="mt-4 h-[2px] w-24 bg-[var(--accent)]" />
            <div className="mt-5 grid gap-4">
              {data.examples.map((example, index) => (
                <article key={example.title} className={`rounded-lg border p-5 sm:p-6 ${panelThemes[index % panelThemes.length]}`}>
                  <p className={`text-xs font-black uppercase tracking-[0.16em] ${cellTones[index % cellTones.length]}`}>Example {index + 1}</p>
                  <h3 className="mt-2 text-xl font-extrabold text-[var(--foreground)]">{example.title}</h3>
                  <p className="mt-3 text-[16px] leading-8 text-[var(--text-body)]"><strong className="text-[var(--accent)]">Problem:</strong> {example.problem}</p>
                  <ol className="mt-4 space-y-2 text-[16px] leading-7 text-[var(--text-body)]">
                    {example.steps.map((step, stepIndex) => (
                      <li key={step} className="flex gap-3">
                        <span className="font-black text-[var(--chem-rule)]">{stepIndex + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-4 rounded-lg border border-[var(--chem-rule)] bg-[var(--surface)] px-4 py-3 text-sm font-bold leading-6 text-[var(--chem-rule)]">
                    Answer: {example.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {data.questions?.length ? (
          <section className="mt-10 border-t border-[var(--border)] pt-10">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--chem-orbital)]">Try first, then check</p>
                <h2 className="mt-1 text-3xl font-extrabold text-[var(--foreground)]">Practice Questions and PYQs</h2>
              </div>
              <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--text-muted)]">
                {data.questions.length} questions
              </span>
            </div>
            <div className="mt-5 grid gap-4">
              {data.questions.map((item, questionIndex) => (
                <article key={item.number} className={`rounded-lg border p-5 sm:p-6 ${panelThemes[questionIndex % panelThemes.length]}`}>
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

        <section className="mt-10 border-t border-[var(--border)] py-10">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--chem-trap)]">Part {data.part} quick review</p>
          <h2 className="mt-1 text-3xl font-extrabold text-[var(--foreground)]">Before You Move On</h2>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {data.recap.map((item, recapIndex) => (
              <li key={item} className={`rounded-lg border px-4 py-3 text-[15px] leading-7 text-[var(--foreground)] ${panelThemes[recapIndex % panelThemes.length]}`}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </AppShell>
  );
}
