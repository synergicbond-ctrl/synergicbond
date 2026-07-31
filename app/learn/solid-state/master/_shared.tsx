import type { ReactNode } from "react";
import Link from "next/link";
import katex from "katex";
import { MasterFigure } from "./_figures";

export type Tone = "info" | "trap" | "result" | "ncert";
export type Block =
  | { type: "p"; text: string }
  | { type: "formula"; latex: string; display?: string }
  | { type: "derivation"; title: string; lines: string[]; result: string }
  | { type: "bullets"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "ascii"; title?: string; text: string }
  | { type: "callout"; label: string; text: string; tone?: Tone };
export type Section = { title: string; blocks: Block[] };
export type Example = { title: string; question: string; steps: string[]; answer: string };
export type CoreModule = {
  part: number;
  slug: string;
  title: string;
  sourcePages: string;
  intro: string;
  sections: Section[];
  traps: string[];
  examples: Example[];
};
export type Enrichment = {
  id: string;
  title: string;
  visual: string;
  intro: string;
  paragraphs: string[];
  formulae: string[];
  example: { question: string; steps: string[]; answer: string };
};
export type MasterPartData = {
  part: number;
  title: string;
  subtitle: string;
  sourcePages: string;
  overview: string;
  modules: CoreModule[];
  sourceSections: Section[];
  enrichments: Enrichment[];
  figures: string[];
  examples: Example[];
  ncertExamples: Example[];
  pageAudit: { page: number; topic: string }[];
};

export const SOLID_STATE_PARTS = [
  {
    number: 1,
    title: "Classification of Solids and Unit Cells",
    shortTitle: "Solids and Unit Cells",
    summary: "Crystalline and amorphous solids, anisotropy, crystal lattices, lattice points, unit cells and particle contribution in centred cells.",
  },
  {
    number: 2,
    title: "Crystal Systems, Symmetry and Cubic Geometry",
    shortTitle: "Crystal Systems and Cubic Geometry",
    summary: "Seven crystal systems, fourteen Bravais lattices, symmetry of the cube, contact relations, neighbour distances and density.",
  },
  {
    number: 3,
    title: "Stoichiometry, Coordination and Two-Dimensional Packing",
    shortTitle: "Stoichiometry and 2D Packing",
    summary: "Formula determination from site occupancy, coordination shells, packing efficiency and one- and two-dimensional arrangements.",
  },
  {
    number: 4,
    title: "Three-Dimensional Packing and Close-Packed Structures",
    shortTitle: "3D Packing and Close Packing",
    summary: "AAA, ABAB and ABCABC stacking, body-centred packing, close-packed planes and tetrahedral and octahedral voids.",
  },
  {
    number: 5,
    title: "Voids, Diamond, HCP and FCC–CCP Geometry",
    shortTitle: "Voids, Diamond and HCP",
    summary: "Void locations and counts, diamond structure, ideal HCP geometry, body-centred tetragonal cells and the FCC–CCP relation.",
  },
  {
    number: 6,
    title: "Radius-Ratio Rules and Coordination Polyhedra",
    shortTitle: "Radius Ratio and Polyhedra",
    summary: "Limiting radius ratios, coordination numbers, geometrical derivations and common coordination polyhedra.",
  },
  {
    number: 7,
    title: "Important Ionic and Covalent Crystal Structures",
    shortTitle: "Important Crystal Structures",
    summary: "Rock salt, caesium chloride, zinc blende, wurtzite, fluorite, antifluorite, corundum and diamond structures.",
  },
  {
    number: 8,
    title: "Crystal Defects and Non-Stoichiometry",
    shortTitle: "Crystal Defects",
    summary: "Schottky and Frenkel defects, interstitial and vacancy defects, F-centres, impurity defects and non-stoichiometric solids.",
  },
  {
    number: 9,
    title: "Electrical Properties, Semiconductors and Superconductivity",
    shortTitle: "Electrical Properties",
    summary: "Band theory, metallic conduction, intrinsic and extrinsic semiconductors, p–n junctions and the fundamentals of superconductivity.",
  },
  {
    number: 10,
    title: "Magnetic Properties of Solids",
    shortTitle: "Magnetic Properties",
    summary: "Magnetic susceptibility, magnetic moment, Curie law, experimental methods and cooperative magnetic ordering.",
  },
] as const;

function renderMath(latex: string, displayMode = false) {
  const normalized = latex.replace(/\\{2,}/g, "\\");
  try {
    return {
      __html: katex.renderToString(normalized, {
        displayMode,
        throwOnError: false,
        strict: "ignore",
        trust: false,
      }),
    };
  } catch {
    return { __html: `<code>${latex.replaceAll("<", "&lt;")}</code>` };
  }
}

export function Math({
  latex,
  block = false,
  className = "",
}: {
  latex: string;
  block?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`${block ? "block overflow-x-auto py-1 text-center" : "inline-block align-middle"} ${className}`}
      dangerouslySetInnerHTML={renderMath(latex, block)}
    />
  );
}

function chemicalTokenToLatex(token: string) {
  let out = token.replaceAll("·", "\\cdot ").replaceAll("⋅", "\\cdot ");
  const sub: Record<string, string> = {
    "₀": "0",
    "₁": "1",
    "₂": "2",
    "₃": "3",
    "₄": "4",
    "₅": "5",
    "₆": "6",
    "₇": "7",
    "₈": "8",
    "₉": "9",
  };
  const sup: Record<string, string> = {
    "⁰": "0",
    "¹": "1",
    "²": "2",
    "³": "3",
    "⁴": "4",
    "⁵": "5",
    "⁶": "6",
    "⁷": "7",
    "⁸": "8",
    "⁹": "9",
    "⁺": "+",
    "⁻": "-",
  };
  out = out.replace(/[₀-₉]+/g, (match) => `_{${[...match].map((x) => sub[x]).join("")}}`);
  out = out.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+/g, (match) => `^{${[...match].map((x) => sup[x]).join("")}}`);
  out = out.replace(/([A-Z][a-z]?)(\d+)/g, "$1_{$2}").replace(/\)(\d+)/g, ")_{$1}");
  return `\\mathrm{${out}}`;
}

function cleanVisibleText(text: string) {
  return text
    .replace(/Source-style/gi, "Application")
    .replace(/Source-derived/gi, "Worked")
    .replace(/KOHINOOR moves from/gi, "The discussion develops from")
    .replace(/KOHINOOR derives/gi, "The relation follows from")
    .replace(/KOHINOOR emphasizes/gi, "A central result is")
    .replace(/KOHINOOR lists/gi, "The standard classification includes")
    .replace(/KOHINOOR treats/gi, "This section examines")
    .replace(/KOHINOOR introduces/gi, "This section introduces")
    .replace(/Total listed in KOHINOOR/gi, "Total symmetry elements")
    .replace(/\bKOHINOOR\b/gi, "the chapter")
    .replace(/\bthe source notes\b/gi, "the chapter")
    .replace(/\bthe source\b/gi, "the chapter")
    .replace(/\bsource module\b/gi, "section")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function AutoChemText({ text }: { text: string }) {
  const cleaned = cleanVisibleText(text);
  const pieces = cleaned
    .split(/([A-Z][A-Za-z()·⋅-]*(?:\d|[₀-₉⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻])[A-Za-z0-9()₀-₉⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻·⋅-]*)/g)
    .filter(Boolean);
  return (
    <>
      {pieces.map((piece, index) =>
        /^[A-Z].*(?:\d|[₀-₉⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻])/.test(piece) ? (
          <Math key={index} latex={chemicalTokenToLatex(piece)} />
        ) : (
          <span key={index}>{piece}</span>
        ),
      )}
    </>
  );
}

export function RichText({ text }: { text: string }) {
  const chunks = cleanVisibleText(text)
    .split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g)
    .filter(Boolean);
  return (
    <>
      {chunks.map((chunk, index) => {
        if (chunk.startsWith("$$") && chunk.endsWith("$$")) {
          return <Math key={index} latex={chunk.slice(2, -2)} block />;
        }
        if (chunk.startsWith("$") && chunk.endsWith("$")) {
          return <Math key={index} latex={chunk.slice(1, -1)} />;
        }
        return <AutoChemText key={index} text={chunk} />;
      })}
    </>
  );
}

function TextbookCard({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="rounded-2xl border border-white/10 bg-[#0d1b29]/95 px-5 py-6 shadow-[0_12px_32px_rgba(0,0,0,.18)] md:px-8 md:py-8"
    >
      <h3 className="border-b border-white/10 pb-3 text-xl font-extrabold tracking-tight text-white md:text-2xl">
        {cleanVisibleText(title)}
      </h3>
      <div className="mt-5 space-y-5 text-[15px] leading-7 text-[#ced9e3] md:text-base md:leading-8">
        {children}
      </div>
    </section>
  );
}

function toneClasses(tone: Tone = "info") {
  if (tone === "trap") return "border-rose-400/25 bg-rose-400/[0.06] text-rose-100";
  if (tone === "result") return "border-emerald-400/25 bg-emerald-400/[0.06] text-emerald-100";
  if (tone === "ncert") return "border-amber-400/25 bg-amber-400/[0.07] text-amber-100";
  return "border-cyan-400/25 bg-cyan-400/[0.06] text-cyan-100";
}

function BlockView({ block }: { block: Block }) {
  if (block.type === "p") {
    return (
      <p className="text-justify [text-wrap:pretty]">
        <RichText text={block.text} />
      </p>
    );
  }
  if (block.type === "bullets") {
    return (
      <ul className="list-disc space-y-2.5 pl-6 marker:text-cyan-300">
        {block.items.map((item) => (
          <li key={item} className="pl-1">
            <RichText text={item} />
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "callout") {
    return (
      <aside className={`border-l-4 px-4 py-3 ${toneClasses(block.tone)}`}>
        <div className="text-xs font-extrabold uppercase tracking-[0.14em] opacity-85">
          {cleanVisibleText(block.label)}
        </div>
        <p className="mt-2 leading-7">
          <RichText text={block.text} />
        </p>
      </aside>
    );
  }
  if (block.type === "ascii") {
    return (
      <figure className="overflow-x-auto border border-white/10 bg-[#07121d] px-4 py-5">
        {block.title && (
          <figcaption className="mb-3 text-sm font-bold text-cyan-100">
            {cleanVisibleText(block.title)}
          </figcaption>
        )}
        <pre className="font-mono text-xs leading-6 text-cyan-100">{block.text}</pre>
      </figure>
    );
  }
  if (block.type === "formula") {
    return (
      <div className="border-y border-cyan-300/15 bg-[#07121d] px-4 py-4">
        <Math latex={block.latex} block />
        {block.display && (
          <p className="mt-2 text-center text-sm text-zinc-400">
            <RichText text={block.display} />
          </p>
        )}
      </div>
    );
  }
  if (block.type === "derivation") {
    return (
      <div className="border border-violet-300/20 bg-[#0a1321] px-4 py-5 md:px-6">
        <div className="text-sm font-extrabold text-violet-100">{cleanVisibleText(block.title)}</div>
        <div className="mt-4 space-y-2.5">
          {block.lines.map((line) => (
            <Math key={line} latex={line} block />
          ))}
          <div className="mt-4 border-t border-emerald-300/20 pt-3">
            <Math latex={block.result} block />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto border border-white/10">
      <table className="w-full min-w-[680px] border-collapse text-left text-sm md:text-[15px]">
        <thead className="bg-[#132638] text-white">
          <tr>
            {block.headers.map((header) => (
              <th key={header} className="border-b border-white/10 px-4 py-3.5 font-bold">
                <RichText text={header} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-white/[0.025]">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border-b border-white/[0.07] px-4 py-3.5 align-top leading-7">
                  <RichText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ExampleCard({
  example,
  index,
  label = "Worked example",
}: {
  example: Example;
  index: number;
  label?: string;
}) {
  return (
    <article className="border border-white/10 bg-[#081521] px-5 py-5 md:px-6">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-sm font-extrabold text-cyan-100">
          {index}
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-cyan-300/75">
            {label}
          </div>
          <h4 className="mt-1 text-lg font-extrabold text-white">{cleanVisibleText(example.title)}</h4>
          <p className="mt-4 leading-7 text-zinc-200">
            <RichText text={example.question} />
          </p>
          <ol className="mt-4 list-decimal space-y-2.5 pl-6 leading-7 text-zinc-400">
            {example.steps.map((step) => (
              <li key={step} className="pl-1">
                <RichText text={step} />
              </li>
            ))}
          </ol>
          <div className="mt-5 border-l-4 border-emerald-300/50 bg-emerald-300/[0.06] px-4 py-3 font-semibold text-emerald-100">
            <RichText text={example.answer} />
          </div>
        </div>
      </div>
    </article>
  );
}

function LegacyFormula({ value }: { value: string }) {
  const replacements: [RegExp, string][] = [
    [/₀/g, "_0"],
    [/₁/g, "_1"],
    [/₂/g, "_2"],
    [/₃/g, "_3"],
    [/₄/g, "_4"],
    [/₅/g, "_5"],
    [/₆/g, "_6"],
    [/₇/g, "_7"],
    [/₈/g, "_8"],
    [/₉/g, "_9"],
    [/⁰/g, "^0"],
    [/¹/g, "^1"],
    [/²/g, "^2"],
    [/³/g, "^3"],
    [/⁴/g, "^4"],
    [/⁵/g, "^5"],
    [/⁶/g, "^6"],
    [/⁷/g, "^7"],
    [/⁸/g, "^8"],
    [/⁹/g, "^9"],
    [/⁺/g, "^+"],
    [/⁻/g, "^-"],
    [/√\(([^)]+)\)/g, "\\sqrt{$1}"],
    [/√([A-Za-z0-9]+)/g, "\\sqrt{$1}"],
    [/π/g, "\\pi"],
    [/λ/g, "\\lambda"],
    [/θ/g, "\\theta"],
    [/μ/g, "\\mu"],
    [/ρ/g, "\\rho"],
    [/σ/g, "\\sigma"],
    [/χ/g, "\\chi"],
    [/→/g, "\\rightarrow"],
    [/↔/g, "\\leftrightarrow"],
    [/∝/g, "\\propto"],
    [/∈/g, "\\in"],
    [/ℤ/g, "\\mathbb{Z}"],
    [/⟨/g, "\\langle "],
    [/⟩/g, " \\rangle"],
  ];
  let latex = value;
  for (const [pattern, replacement] of replacements) {
    latex = latex.replace(pattern, replacement);
  }
  latex = latex
    .replaceAll("×", "\\times ")
    .replaceAll("≤", "\\le ")
    .replaceAll("≥", "\\ge ")
    .replaceAll("≈", "\\approx ")
    .replaceAll("∞", "\\infty ");
  return <Math latex={latex} block />;
}

function CoreModuleView({ module }: { module: CoreModule }) {
  const intro = cleanVisibleText(module.intro);
  return (
    <section className="space-y-6 border-t border-white/10 pt-10 first:border-t-0 first:pt-0">
      <header className="border-l-4 border-cyan-300/60 pl-5 md:pl-7">
        <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
          {cleanVisibleText(module.title)}
        </h2>
        {intro && <p className="mt-3 max-w-4xl text-base leading-8 text-zinc-300">{intro}</p>}
      </header>

      {module.sections.map((section) => (
        <TextbookCard key={section.title} title={section.title}>
          {section.blocks.map((block, index) => (
            <BlockView key={index} block={block} />
          ))}
        </TextbookCard>
      ))}

      {module.traps.length > 0 && (
        <TextbookCard title="JEE Advanced traps and edge cases">
          <ul className="list-disc space-y-2.5 pl-6 marker:text-rose-300">
            {module.traps.map((trap) => (
              <li key={trap} className="pl-1">
                <RichText text={trap} />
              </li>
            ))}
          </ul>
        </TextbookCard>
      )}

      {module.examples.length > 0 && (
        <TextbookCard title="Worked examples">
          <div className="space-y-4">
            {module.examples.map((example, index) => (
              <ExampleCard key={example.title} example={example} index={index + 1} />
            ))}
          </div>
        </TextbookCard>
      )}
    </section>
  );
}

function EnrichmentView({ item }: { item: Enrichment }) {
  return (
    <section className="space-y-6 border-t border-white/10 pt-10">
      <header className="border-l-4 border-violet-300/60 pl-5 md:pl-7">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-violet-200">Advanced treatment</p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-white md:text-3xl">
          {cleanVisibleText(item.title.replace(/^Advanced Extension \d+ — /, ""))}
        </h2>
        <p className="mt-3 max-w-4xl text-base leading-8 text-zinc-300">
          <RichText text={item.intro} />
        </p>
      </header>
      <MasterFigure kind={item.visual} />
      <TextbookCard title="Theory">
        {item.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-justify">
            <RichText text={paragraph} />
          </p>
        ))}
      </TextbookCard>
      <TextbookCard title="Equations and structural relations">
        {item.formulae.map((formula) => (
          <div key={formula} className="border-y border-white/10 bg-black/20 px-3 py-3">
            <LegacyFormula value={formula} />
          </div>
        ))}
      </TextbookCard>
      <TextbookCard title="Advanced worked example">
        <ExampleCard example={{ title: "Advanced application", ...item.example }} index={1} />
      </TextbookCard>
    </section>
  );
}

function PartNavigation({ activePart }: { activePart: number }) {
  return (
    <nav className="sticky top-2 z-30 mt-5 overflow-x-auto border border-white/10 bg-[#07101a]/95 p-2 shadow-2xl backdrop-blur-xl">
      <div className="flex min-w-max gap-2">
        <Link
          href="/learn/solid-state/master"
          className="flex w-32 shrink-0 items-center justify-center border border-white/10 px-4 py-3 text-sm font-bold text-zinc-200 transition hover:border-cyan-300/30 hover:text-white"
        >
          Contents
        </Link>
        {SOLID_STATE_PARTS.map((part) => {
          const active = part.number === activePart;
          return (
            <Link
              key={part.number}
              href={`/learn/solid-state/master/part${String(part.number).padStart(2, "0")}`}
              aria-current={active ? "page" : undefined}
              className={`w-56 shrink-0 border px-4 py-3 transition ${
                active
                  ? "border-cyan-300/50 bg-cyan-300/10 text-white"
                  : "border-white/10 bg-white/[0.015] text-zinc-400 hover:border-cyan-300/25 hover:text-zinc-100"
              }`}
            >
              <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-cyan-300/80">
                Part {String(part.number).padStart(2, "0")}
              </div>
              <div className="mt-1 text-sm font-bold leading-5">{part.shortTitle}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function MasterPart({ data }: { data: MasterPartData }) {
  const previous =
    data.part > 1 ? `/learn/solid-state/master/part${String(data.part - 1).padStart(2, "0")}` : null;
  const next =
    data.part < 10 ? `/learn/solid-state/master/part${String(data.part + 1).padStart(2, "0")}` : null;
  const partMeta = SOLID_STATE_PARTS[data.part - 1];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_10%_0%,rgba(0,245,212,.08),transparent_30%),radial-gradient(circle_at_90%_5%,rgba(139,92,246,.08),transparent_30%),linear-gradient(#08111d,#070b12)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <header className="border border-cyan-400/20 bg-[#0b1a28]/95 px-6 py-8 md:px-10 md:py-11">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
            <span>JEE Advanced</span>
            <span className="text-zinc-600">•</span>
            <span>Solid State</span>
            <span className="text-zinc-600">•</span>
            <span>Part {String(data.part).padStart(2, "0")} of 10</span>
          </div>
          <h1 className="mt-5 max-w-5xl text-4xl font-black tracking-[-0.035em] text-white md:text-6xl">
            {partMeta?.title ?? data.title}
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-300">
            {partMeta?.summary ?? cleanVisibleText(data.subtitle)}
          </p>
        </header>

        <PartNavigation activePart={data.part} />

        <article className="mx-auto mt-10 max-w-5xl space-y-12">
          {data.modules.map((module) => (
            <CoreModuleView key={module.part} module={module} />
          ))}

          {data.sourceSections.length > 0 && (
            <section className="space-y-6 border-t border-white/10 pt-10">
              <header className="border-l-4 border-cyan-300/60 pl-5 md:pl-7">
                <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                  Consolidated tables, relations and results
                </h2>
              </header>
              {data.sourceSections.map((section) => (
                <TextbookCard key={section.title} title={section.title}>
                  {section.blocks.map((block, index) => (
                    <BlockView key={index} block={block} />
                  ))}
                </TextbookCard>
              ))}
            </section>
          )}

          {data.figures.length > 0 && (
            <section className="space-y-6 border-t border-white/10 pt-10">
              <header className="border-l-4 border-cyan-300/60 pl-5 md:pl-7">
                <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                  Crystal geometry and structural diagrams
                </h2>
              </header>
              <div className="grid gap-6">{data.figures.map((figure) => <MasterFigure key={figure} kind={figure} />)}</div>
            </section>
          )}

          {data.enrichments.map((item) => (
            <EnrichmentView key={item.id} item={item} />
          ))}

          {data.examples.length > 0 && (
            <section className="space-y-6 border-t border-white/10 pt-10">
              <header className="border-l-4 border-emerald-300/60 pl-5 md:pl-7">
                <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                  Additional JEE Advanced examples
                </h2>
              </header>
              <div className="space-y-4">
                {data.examples.map((example, index) => (
                  <ExampleCard key={example.title} example={example} index={index + 1} />
                ))}
              </div>
            </section>
          )}

          {data.ncertExamples.length > 0 && (
            <section className="space-y-6 border-t border-white/10 pt-10">
              <header className="border-l-4 border-amber-300/60 pl-5 md:pl-7">
                <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                  NCERT-based examples and checks
                </h2>
              </header>
              <div className="space-y-4">
                {data.ncertExamples.map((example, index) => (
                  <ExampleCard
                    key={example.title}
                    example={example}
                    index={index + 1}
                    label="NCERT-based"
                  />
                ))}
              </div>
            </section>
          )}
        </article>

        <footer className="mx-auto mt-16 flex max-w-5xl items-stretch justify-between gap-4 border-t border-white/10 pt-8">
          {previous ? (
            <Link
              href={previous}
              className="max-w-[48%] border border-white/10 px-4 py-3 text-sm font-bold text-zinc-200 transition hover:border-cyan-300/30"
            >
              ← Previous part
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={next}
              className="max-w-[48%] border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-right text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/15"
            >
              Next part →
            </Link>
          ) : (
            <Link
              href="/learn/solid-state/master"
              className="max-w-[48%] border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-right text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/15"
            >
              Return to contents
            </Link>
          )}
        </footer>
      </div>
    </main>
  );
}

