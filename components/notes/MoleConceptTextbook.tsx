import katex from "katex";
import Link from "next/link";
import {
  molePracticeQuestions,
  moleSections,
  type MoleFormulaCard,
  type MoleSolvedExample,
} from "@/lib/notes/moleConceptFull";

function Latex({ value, block = false }: { value: string; block?: boolean }) {
  const html = katex.renderToString(value, {
    displayMode: block,
    throwOnError: false,
    strict: "ignore",
  });

  return (
    <span
      className={block ? "block overflow-x-auto py-1 text-cyan-100" : "text-cyan-100"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`min-w-0 max-w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111827] shadow-[0_18px_60px_rgba(0,0,0,0.22)] ${className}`}>
      {children}
    </div>
  );
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-200">
      {label}
    </span>
  );
}

function FormulaCard({ card }: { card: MoleFormulaCard }) {
  return (
    <Card className="min-w-0 p-4">
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-sm font-black text-white">{card.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-white/55">{card.use}</p>
        </div>
        <div className="max-w-full overflow-x-auto rounded-xl border border-cyan-400/15 bg-[#081421] px-3 py-3">
          <Latex value={card.formula} block />
        </div>
        {card.caution && (
          <p className="rounded-xl border border-amber-300/15 bg-amber-400/[0.06] px-3 py-2 text-xs leading-relaxed text-amber-100/80">
            {card.caution}
          </p>
        )}
      </div>
    </Card>
  );
}

function MoleConversionDiagram() {
  const nodes = [
    { title: "Mass", detail: "grams", formula: "n=\\frac{m}{M}" },
    { title: "Particles", detail: "atoms / molecules / ions", formula: "n=\\frac{N}{N_A}" },
    { title: "Gas volume", detail: "STP gas", formula: "n=\\frac{V}{V_m}" },
    { title: "Balanced equation", detail: "coefficient ratio", formula: "\\frac{n_A}{a}=\\frac{n_B}{b}" },
  ];

  return (
    <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
      <div className="grid gap-3">
        {nodes.slice(0, 3).map((node) => (
          <div key={node.title} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
            <p className="text-sm font-black text-white">{node.title}</p>
            <p className="mt-1 text-xs text-white/45">{node.detail}</p>
            <div className="mt-3 rounded-lg bg-[#07111D] px-3 py-2">
              <Latex value={node.formula} />
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/[0.08] text-center text-sm font-black text-cyan-100 md:h-32 md:w-32">
        MOLES
      </div>
      <div className="rounded-2xl border border-purple-300/20 bg-purple-400/[0.07] p-4">
        <p className="text-sm font-black text-white">{nodes[3].title}</p>
        <p className="mt-1 text-xs text-white/45">{nodes[3].detail}</p>
        <div className="mt-4 rounded-lg bg-[#100D1C] px-3 py-3">
          <Latex value={nodes[3].formula} block />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-white/60">
          Enter through mass, particles, or gas volume. Convert to moles. Then use the balanced equation to reach the required species.
        </p>
      </div>
    </div>
  );
}

function SolvedExampleCard({ example, index }: { example: MoleSolvedExample; index: number }) {
  const examStyle: Record<MoleSolvedExample["exam"], string> = {
    Board: "border-emerald-300/25 bg-emerald-400/[0.08] text-emerald-100",
    "JEE Main": "border-cyan-300/25 bg-cyan-400/[0.08] text-cyan-100",
    NEET: "border-purple-300/25 bg-purple-400/[0.08] text-purple-100",
  };

  return (
    <Card className="p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">Solved Example {index + 1}</p>
          <h3 className="mt-1 text-base font-black text-white">{example.title}</h3>
        </div>
        <span className={`rounded-full border px-2.5 py-1 text-[11px] font-bold ${examStyle[example.exam]}`}>
          {example.exam}
        </span>
      </div>
      <p className="mt-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 text-sm leading-relaxed text-white/82">
        {example.question}
      </p>
      <ol className="mt-4 space-y-2">
        {example.steps.map((step, stepIndex) => (
          <li key={step} className="flex gap-3 text-sm leading-relaxed text-white/65">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[11px] font-bold text-white/60">
              {stepIndex + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <div className="mt-4 grid gap-3 md:grid-cols-[1fr_1.2fr]">
        <p className="rounded-xl border border-emerald-300/15 bg-emerald-400/[0.07] px-3 py-2 text-sm font-bold text-emerald-100">
          Answer: {example.answer}
        </p>
        <p className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs leading-relaxed text-white/55">
          {example.insight}
        </p>
      </div>
    </Card>
  );
}

function PracticeGrid() {
  return (
    <div className="grid gap-4">
      {molePracticeQuestions.map((q, index) => (
        <Card key={q.question} className="p-4">
          <div className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/[0.08] text-xs font-black text-cyan-100">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold leading-relaxed text-white">{q.question}</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {q.options.map((option) => (
                  <div
                    key={option}
                    className={`rounded-xl border px-3 py-2 text-xs ${
                      option === q.answer
                        ? "border-emerald-300/25 bg-emerald-400/[0.08] text-emerald-100"
                        : "border-white/[0.08] bg-white/[0.03] text-white/60"
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/55">
                <span className="font-bold text-white/75">Solution:</span> {q.solution}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function MoleConceptTextbook() {
  const examples = moleSections.flatMap((section) => section.examples ?? []);

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="grid gap-6 border-b border-white/[0.08] pb-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <Link href="/notes" className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200/80 transition hover:text-cyan-100">
              Notes / Physical Chemistry
            </Link>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-normal text-white sm:text-5xl">
              Some Basic Concepts of Chemistry (Mole Concept)
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/62">
              A full-length JEE Main web textbook for mole conversions, molar mass, formula determination,
              stoichiometry, limiting reagent, yield, POAC, and concentration terms.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["JEE Main", "Boards", "NEET-style", "No fake PYQs", "Web notes"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/68">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <Card className="p-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">Chapter Dashboard</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                ["24", "Sections"],
                ["17", "Solved examples"],
                ["24", "Practice MCQs"],
                ["12", "Formula cards"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="mt-1 text-xs text-white/45">{label}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="mt-8 grid min-w-0 gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <Card className="min-w-0 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">Table of Contents</p>
              <nav className="mt-4 max-h-[70vh] min-w-0 space-y-1 overflow-y-auto pr-1">
                {moleSections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block min-w-0 break-words rounded-lg px-3 py-2 text-xs leading-relaxed text-white/58 transition hover:bg-white/[0.05] hover:text-cyan-100"
                  >
                    <span className="mr-2 font-mono text-white/32">{String(index + 1).padStart(2, "0")}</span>
                    {section.title}
                  </a>
                ))}
              </nav>
            </Card>
          </aside>

          <div className="min-w-0 space-y-8">
            <Card className="overflow-hidden p-5">
              <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                <div>
                  <SectionEyebrow label="Visual Engine" />
                  <h2 className="mt-3 text-2xl font-black tracking-normal text-white">The mole conversion map</h2>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Most chapter problems become calm once every given quantity is converted to moles first.
                    This is the central mental model for the whole chapter.
                  </p>
                </div>
                <MoleConversionDiagram />
              </div>
            </Card>

            {moleSections.map((section, sectionIndex) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <Card className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <SectionEyebrow label={`Section ${sectionIndex + 1}`} />
                      <h2 className="mt-3 text-2xl font-black tracking-normal text-white">{section.title}</h2>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold capitalize text-white/55">
                      {section.kind}
                    </span>
                  </div>
                  <p className="mt-4 max-w-4xl text-sm leading-7 text-white/65">{section.summary}</p>
                  <div className="mt-5 grid gap-3">
                    {section.keyIdeas.map((idea) => (
                      <div key={idea} className="flex gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 text-sm leading-7 text-white/68">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" />
                        <span>{idea}</span>
                      </div>
                    ))}
                  </div>

                  {section.formulas && (
                    <div className="mt-6 grid min-w-0 gap-3 md:grid-cols-2">
                      {section.formulas.map((formula) => (
                        <FormulaCard key={`${section.id}-${formula.title}`} card={formula} />
                      ))}
                    </div>
                  )}

                  {section.examples && (
                    <div className="mt-6 grid gap-4">
                      {section.examples.map((example, index) => (
                        <SolvedExampleCard key={`${section.id}-${example.title}`} example={example} index={index} />
                      ))}
                    </div>
                  )}

                  {section.id === "practice-mcqs" && (
                    <div className="mt-6">
                      <PracticeGrid />
                    </div>
                  )}

                  {section.id === "pyq-section" && (
                    <div className="mt-6 grid gap-3 md:grid-cols-3">
                      {["Mole calculation", "Empirical formula", "Limiting reagent"].map((tag) => (
                        <Link
                          key={tag}
                          href="/pyq"
                          className="rounded-2xl border border-cyan-300/15 bg-cyan-400/[0.06] p-4 transition hover:border-cyan-300/35 hover:bg-cyan-400/[0.1]"
                        >
                          <p className="text-sm font-black text-white">{tag}</p>
                          <p className="mt-2 text-xs leading-relaxed text-white/55">Open PYQ Intelligence and verify official-source questions before labelling them as PYQ.</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </Card>
              </section>
            ))}

            <Card className="p-5">
              <SectionEyebrow label="Solved Example Index" />
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {examples.slice(0, 9).map((example) => (
                  <div key={example.title} className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
                    <p className="text-xs font-bold text-cyan-100">{example.exam}</p>
                    <p className="mt-1 text-sm font-semibold leading-relaxed text-white/82">{example.title}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
