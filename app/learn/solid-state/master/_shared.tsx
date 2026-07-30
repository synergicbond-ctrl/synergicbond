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
export type CoreModule = { part: number; slug: string; title: string; sourcePages: string; intro: string; sections: Section[]; traps: string[]; examples: Example[] };
export type Enrichment = { id: string; title: string; visual: string; intro: string; paragraphs: string[]; formulae: string[]; example: { question: string; steps: string[]; answer: string } };
export type MasterPartData = {
  part: number; title: string; subtitle: string; sourcePages: string; overview: string;
  modules: CoreModule[]; sourceSections: Section[]; enrichments: Enrichment[];
  figures: string[]; examples: Example[]; ncertExamples: Example[]; pageAudit: { page: number; topic: string }[];
};

const PARTS = [
  "Foundations, classification and unit cells",
  "Crystal systems, symmetry and cubic geometry",
  "Stoichiometry, coordination and lower-dimensional packing",
  "Three-dimensional packing and close-packed layers",
  "Voids, diamond, HCP geometry and FCC–CCP relation",
  "Radius-ratio derivations and coordination polyhedra",
  "Important ionic and covalent crystal structures",
  "Defects, non-stoichiometry and NCERT defect chemistry",
  "Electrical properties, semiconductors and superconductivity",
  "Magnetic properties of solids",
] as const;

function renderMath(latex: string, displayMode = false) {
  const normalized = latex.replace(/\\{2,}/g, "\\");
  try {
    return { __html: katex.renderToString(normalized, { displayMode, throwOnError: false, strict: "ignore", trust: false }) };
  } catch {
    return { __html: `<code>${latex.replaceAll("<", "&lt;")}</code>` };
  }
}

export function Math({ latex, block = false, className = "" }: { latex: string; block?: boolean; className?: string }) {
  return <span className={`${block ? "block overflow-x-auto py-1 text-center" : "inline-block align-middle"} ${className}`} dangerouslySetInnerHTML={renderMath(latex, block)} />;
}

function chemicalTokenToLatex(token: string) {
  let out = token.replaceAll("·", "\\cdot ").replaceAll("⋅", "\\cdot ");
  const sub: Record<string,string> = {"₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9"};
  const sup: Record<string,string> = {"⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","⁺":"+","⁻":"-"};
  out = out.replace(/[₀-₉]+/g, m => `_{${[...m].map(x=>sub[x]).join("")}}`);
  out = out.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+/g, m => `^{${[...m].map(x=>sup[x]).join("")}}`);
  out = out.replace(/([A-Z][a-z]?)(\d+)/g, "$1_{$2}").replace(/\)(\d+)/g, ")_{$1}");
  return `\\mathrm{${out}}`;
}

function AutoChemText({ text }: { text: string }) {
  const pieces = text.split(/([A-Z][A-Za-z()·⋅-]*(?:\d|[₀-₉⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻])[A-Za-z0-9()₀-₉⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻·⋅-]*)/g).filter(Boolean);
  return <>{pieces.map((piece,i)=>/^[A-Z].*(?:\d|[₀-₉⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻])/.test(piece)?<Math key={i} latex={chemicalTokenToLatex(piece)}/>:<span key={i}>{piece}</span>)}</>;
}

export function RichText({ text }: { text: string }) {
  const chunks = text.split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g).filter(Boolean);
  return <>{chunks.map((chunk, i) => {
    if (chunk.startsWith("$$") && chunk.endsWith("$$")) return <Math key={i} latex={chunk.slice(2,-2)} block />;
    if (chunk.startsWith("$") && chunk.endsWith("$")) return <Math key={i} latex={chunk.slice(1,-1)} />;
    return <AutoChemText key={i} text={chunk}/>;
  })}</>;
}

function Card({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return <section id={id} className="rounded-3xl border border-white/10 bg-[#10202f]/92 p-5 shadow-[0_16px_46px_rgba(0,0,0,.22)] md:p-7">
    <h2 className="text-xl font-black tracking-tight text-white md:text-2xl">{title}</h2>
    <div className="mt-4 space-y-4 text-sm leading-7 text-[#c8d5e1] md:text-[15px]">{children}</div>
  </section>;
}

function toneClasses(tone: Tone = "info") {
  if (tone === "trap") return "border-rose-400/25 bg-rose-400/[0.06] text-rose-100";
  if (tone === "result") return "border-emerald-400/25 bg-emerald-400/[0.06] text-emerald-100";
  if (tone === "ncert") return "border-amber-400/25 bg-amber-400/[0.07] text-amber-100";
  return "border-cyan-400/25 bg-cyan-400/[0.06] text-cyan-100";
}

function BlockView({ block }: { block: Block }) {
  if (block.type === "p") return <p><RichText text={block.text}/></p>;
  if (block.type === "bullets") return <ul className="list-disc space-y-2 pl-5 marker:text-cyan-300">{block.items.map((x)=><li key={x}><RichText text={x}/></li>)}</ul>;
  if (block.type === "callout") return <div className={`rounded-2xl border p-4 ${toneClasses(block.tone)}`}><div className="text-xs font-black uppercase tracking-[0.18em] opacity-80">{block.label}</div><p className="mt-2"><RichText text={block.text}/></p></div>;
  if (block.type === "ascii") return <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-[#07121d] p-4 font-mono text-xs leading-6 text-cyan-100">{block.title && <span className="mb-2 block font-sans text-xs font-black uppercase tracking-[.16em] text-zinc-500">{block.title}</span>}{block.text}</pre>;
  if (block.type === "formula") return <div className="rounded-2xl border border-cyan-300/20 bg-[#07121d] px-4 py-3"><Math latex={block.latex} block/>{block.display && <p className="mt-1 text-center text-xs text-zinc-400">{block.display}</p>}</div>;
  if (block.type === "derivation") return <div className="rounded-2xl border border-violet-300/20 bg-[#0a1321] p-4"><div className="text-xs font-black uppercase tracking-[0.18em] text-violet-200">{block.title}</div><div className="mt-3 space-y-2">{block.lines.map((x)=><Math key={x} latex={x} block/>)}<div className="mt-3 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.05] p-2"><Math latex={block.result} block/></div></div></div>;
  return <div className="overflow-x-auto rounded-2xl border border-white/10"><table className="w-full min-w-[680px] border-collapse text-left text-sm"><thead className="bg-white/[0.06] text-white"><tr>{block.headers.map(h=><th key={h} className="border-b border-white/10 px-4 py-3 font-bold"><RichText text={h}/></th>)}</tr></thead><tbody>{block.rows.map((row,i)=><tr key={i} className="odd:bg-white/[0.02]">{row.map((cell,j)=><td key={j} className="border-b border-white/[0.06] px-4 py-3 align-top"><RichText text={cell}/></td>)}</tr>)}</tbody></table></div>;
}

function ExampleCard({ example, index, label = "Worked example" }: { example: Example; index: number; label?: string }) {
  return <article className="rounded-2xl border border-white/10 bg-[#081521] p-4 md:p-5"><div className="flex gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-sm font-black text-cyan-200">{index}</span><div className="min-w-0"><div className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">{label}</div><h3 className="mt-1 font-black text-white">{example.title}</h3><p className="mt-3 text-zinc-300"><RichText text={example.question}/></p><ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-400">{example.steps.map(s=><li key={s}><RichText text={s}/></li>)}</ol><div className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.05] p-3 font-semibold text-emerald-100"><RichText text={example.answer}/></div></div></div></article>;
}

function LegacyFormula({ value }: { value: string }) {
  const replacements: [RegExp,string][] = [
    [/₀/g,"_0"],[/₁/g,"_1"],[/₂/g,"_2"],[/₃/g,"_3"],[/₄/g,"_4"],[/₅/g,"_5"],[/₆/g,"_6"],[/₇/g,"_7"],[/₈/g,"_8"],[/₉/g,"_9"],
    [/⁰/g,"^0"],[/¹/g,"^1"],[/²/g,"^2"],[/³/g,"^3"],[/⁴/g,"^4"],[/⁵/g,"^5"],[/⁶/g,"^6"],[/⁷/g,"^7"],[/⁸/g,"^8"],[/⁹/g,"^9"],[/⁺/g,"^+"],[/⁻/g,"^-"],
    [/√\(([^)]+)\)/g,"\\sqrt{$1}"],[/√([A-Za-z0-9]+)/g,"\\sqrt{$1}"],[/π/g,"\\pi"],[/λ/g,"\\lambda"],[/θ/g,"\\theta"],[/μ/g,"\\mu"],[/ρ/g,"\\rho"],[/σ/g,"\\sigma"],[/χ/g,"\\chi"],[/→/g,"\\rightarrow"],[/↔/g,"\\leftrightarrow"],[/∝/g,"\\propto"],[/∈/g,"\\in"],[/ℤ/g,"\\mathbb{Z}"],[/⟨/g,"\\langle "],[/⟩/g," \\rangle"],
  ];
  let latex=value; for (const [a,b] of replacements) latex=latex.replace(a,b);
  latex=latex.replaceAll("×","\\times ").replaceAll("≤","\\le ").replaceAll("≥","\\ge ").replaceAll("≈","\\approx ").replaceAll("∞","\\infty ");
  return <Math latex={latex} block/>;
}

function CoreModuleView({ module }: { module: CoreModule }) {
  return <section className="space-y-5 border-t border-white/10 pt-10"><header className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-400/[0.05] p-6"><div className="flex flex-wrap gap-2 text-xs"><span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 font-black uppercase tracking-[0.16em] text-cyan-200">Source module {String(module.part).padStart(2,"0")}</span><span className="px-2 py-1 text-zinc-400">{module.sourcePages}</span></div><h2 className="mt-4 text-2xl font-black text-white md:text-3xl">{module.title}</h2><p className="mt-3 leading-7 text-zinc-300">{module.intro}</p></header>{module.sections.map(section=><Card key={section.title} title={section.title}>{section.blocks.map((b,i)=><BlockView key={i} block={b}/>)}</Card>)}<Card title="JEE Advanced traps and edge cases"><ul className="list-disc space-y-2 pl-5 marker:text-rose-300">{module.traps.map(x=><li key={x}><RichText text={x}/></li>)}</ul></Card><Card title="Source-derived solved examples"><div className="space-y-4">{module.examples.map((x,i)=><ExampleCard key={x.title} example={x} index={i+1}/>)}</div></Card></section>;
}

function EnrichmentView({ item }: { item: Enrichment }) {
  return <section className="space-y-5 border-t border-white/10 pt-10"><header className="rounded-3xl border border-violet-400/20 bg-violet-400/[0.055] p-6"><div className="text-xs font-black uppercase tracking-[0.18em] text-violet-200">Advanced extension</div><h2 className="mt-3 text-2xl font-black text-white md:text-3xl">{item.title.replace(/^Advanced Extension \d+ — /,"")}</h2><p className="mt-3 leading-7 text-zinc-300">{item.intro}</p></header><MasterFigure kind={item.visual}/><Card title="Deep theory">{item.paragraphs.map(p=><p key={p}><RichText text={p}/></p>)}</Card><Card title="Equations and structural statements">{item.formulae.map(f=><div key={f} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2"><LegacyFormula value={f}/></div>)}</Card><Card title="Advanced worked example"><ExampleCard example={{ title:"Advanced application", ...item.example }} index={1}/></Card></section>;
}

export function MasterPart({ data }: { data: MasterPartData }) {
  const prev=data.part>1?`/learn/solid-state/master/part${String(data.part-1).padStart(2,"0")}`:null;
  const next=data.part<10?`/learn/solid-state/master/part${String(data.part+1).padStart(2,"0")}`:null;
  const totalExamples=data.modules.reduce((n,m)=>n+m.examples.length,0)+data.examples.length+data.ncertExamples.length+data.enrichments.length;
  return <main className="min-h-screen bg-[radial-gradient(circle_at_10%_0%,rgba(0,245,212,.10),transparent_28%),radial-gradient(circle_at_90%_5%,rgba(139,92,246,.12),transparent_28%),linear-gradient(#08111d,#070b12)] text-white"><div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-14"><header className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#0b1a28]/95 p-7 md:p-11"><p className="text-xs font-black uppercase tracking-[0.26em] text-cyan-300">Solid State Master · Part {String(data.part).padStart(2,"0")} of 10</p><h1 className="mt-4 text-4xl font-black tracking-[-.035em] md:text-6xl">{data.title}</h1><p className="mt-4 max-w-4xl text-lg leading-8 text-zinc-300">{data.subtitle}</p><div className="mt-7 grid gap-3 sm:grid-cols-3"><div className="rounded-2xl border border-white/10 bg-black/25 p-4"><div className="text-xl font-black text-cyan-200">{data.sourcePages}</div><div className="text-xs uppercase tracking-[.14em] text-zinc-500">source coverage</div></div><div className="rounded-2xl border border-white/10 bg-black/25 p-4"><div className="text-xl font-black text-cyan-200">{data.figures.length}</div><div className="text-xs uppercase tracking-[.14em] text-zinc-500">geometry figures</div></div><div className="rounded-2xl border border-white/10 bg-black/25 p-4"><div className="text-xl font-black text-cyan-200">{totalExamples}</div><div className="text-xs uppercase tracking-[.14em] text-zinc-500">worked examples</div></div></div></header>
  <nav className="sticky top-2 z-30 mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-[#07101a]/92 p-2 backdrop-blur-xl"><div className="flex min-w-max gap-2"><Link href="/learn/solid-state/master" className="rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-zinc-300">All 10 parts</Link>{PARTS.map((t,i)=><Link key={t} href={`/learn/solid-state/master/part${String(i+1).padStart(2,"0")}`} className={`rounded-full border px-3 py-2 text-xs font-bold ${i+1===data.part?"border-cyan-300/40 bg-cyan-300/10 text-cyan-100":"border-white/10 text-zinc-400"}`}>{i+1}</Link>)}</div></nav>
  <div className="mt-7 space-y-7"><Card title="Part overview"><p>{data.overview}</p><div className="rounded-2xl border border-amber-300/20 bg-amber-300/[.055] p-4 text-amber-100"><strong>Mathematical typesetting:</strong> every displayed equation, derivation, charge, index and numerical relation in this edition is rendered with KaTeX.</div></Card><Card title="Source-page audit"><div className="grid gap-2 md:grid-cols-2">{data.pageAudit.map(x=><div key={x.page} className="rounded-xl border border-white/10 bg-black/20 p-3"><div className="text-xs font-black uppercase tracking-[.14em] text-cyan-300">KOHINOOR page {x.page}</div><p className="mt-1 text-xs leading-5 text-zinc-400">{x.topic}</p></div>)}</div></Card><Card title="Recreated figure gallery"><div className="grid gap-5">{data.figures.map(x=><MasterFigure key={x} kind={x}/>)}</div></Card>{data.sourceSections.map(s=><Card key={s.title} title={s.title}>{s.blocks.map((b,i)=><BlockView key={i} block={b}/>)}</Card>)}<Card title="Additional JEE Advanced examples"><div className="space-y-4">{data.examples.map((e,i)=><ExampleCard key={e.title} example={e} index={i+1}/>)}</div></Card><Card title="NCERT-based examples and checks"><div className="space-y-4">{data.ncertExamples.map((e,i)=><ExampleCard key={e.title} example={e} index={i+1} label="NCERT-based"/>)}</div></Card></div>
  <div className="mt-12 space-y-14">{data.modules.map(m=><CoreModuleView key={m.part} module={m}/>)}{data.enrichments.map(e=><EnrichmentView key={e.id} item={e}/>)}</div>
  <footer className="mt-16 flex items-center justify-between gap-4 border-t border-white/10 pt-8">{prev?<Link href={prev} className="rounded-xl border border-white/10 px-4 py-3 text-sm font-bold text-zinc-200">← Previous part</Link>:<span/>}{next?<Link href={next} className="rounded-xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">Next part →</Link>:<Link href="/learn/solid-state/master" className="rounded-xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">Return to index</Link>}</footer></div></main>;
}
