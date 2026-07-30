import katex from "katex";
import "katex/dist/katex.min.css";
import "katex/contrib/mhchem";
import { polymerSections, type Block, type Tone } from "./polymer-content";
import { PolymerChainVisual, PolymerVisualGallery } from "./polymer-visuals";

export const runtime = "nodejs";

export const metadata = {
  title: "Polymers | JEE Advanced Chemistry | Synergic Bond",
  description:
    "Comprehensive polymer chemistry notes: classification, mechanisms, molecular mass, named polymers, elastomers, fibres, thermoplastics, thermosets and biodegradable polymers.",
};

const sfProStack =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, system-ui, sans-serif';

const toneClasses: Record<Tone, string> = {
  cyan: "border-cyan-400/35 bg-cyan-400/[0.07] text-cyan-100",
  amber: "border-amber-400/35 bg-amber-400/[0.07] text-amber-100",
  violet: "border-violet-400/35 bg-violet-400/[0.07] text-violet-100",
  rose: "border-rose-400/35 bg-rose-400/[0.07] text-rose-100",
};

function Latex({ value, block = false }: { value: string; block?: boolean }) {
  const html = katex.renderToString(value, {
    displayMode: block,
    throwOnError: false,
    strict: false,
    trust: true,
  });

  return (
    <span
      className={block ? "block overflow-x-auto py-1 text-center" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[\[[\s\S]*?\]\])/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("[[") && part.endsWith("]]")) {
          return <Latex key={index} value={part.slice(2, -2)} />;
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  if (block.kind === "p") {
    return (
      <p className="text-[15px] leading-7 text-slate-200 md:text-base md:leading-8">
        <RichText text={block.text} />
      </p>
    );
  }

  if (block.kind === "bullets") {
    return (
      <ul className="grid gap-3 text-[15px] leading-7 text-slate-200 md:text-base">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.85)]" />
            <span><RichText text={item} /></span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.kind === "formula") {
    return (
      <div className="overflow-hidden rounded-2xl border border-violet-400/25 bg-[#0a1020] p-4 shadow-[inset_0_0_40px_rgba(139,92,246,0.05)] md:p-5">
        <div className="text-lg text-violet-100 md:text-xl">
          <Latex value={block.latex} block />
        </div>
        {block.note ? <p className="mt-2 text-center text-sm leading-6 text-slate-400"><RichText text={block.note} /></p> : null}
      </div>
    );
  }

  if (block.kind === "callout") {
    return (
      <aside className={`rounded-2xl border p-4 md:p-5 ${toneClasses[block.tone]}`}>
        <h4 className="text-sm font-black uppercase tracking-[0.16em]">{block.title}</h4>
        <p className="mt-2 text-[15px] leading-7 text-slate-100 md:text-base"><RichText text={block.body} /></p>
      </aside>
    );
  }

  if (block.kind === "table") {
    return (
      <div className="overflow-x-auto rounded-2xl border border-slate-700/80 bg-[#080d18]">
        <table className="min-w-full border-collapse text-left text-sm md:text-[15px]">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-400/15 via-violet-400/15 to-rose-400/15">
              {block.headers.map((header) => (
                <th key={header} className="border-b border-slate-700 px-4 py-3 font-extrabold text-cyan-100">
                  <RichText text={header} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={`${rowIndex}-${row[0]}`} className="border-b border-slate-800 last:border-0 odd:bg-white/[0.015]">
                {row.map((cell, cellIndex) => (
                  <td key={`${rowIndex}-${cellIndex}`} className={`px-4 py-3 align-top leading-6 ${cellIndex === 0 ? "font-bold text-violet-100" : "text-slate-300"}`}>
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

  if (block.kind === "example") {
    return (
      <article className="rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.055] p-4 md:p-5">
        <h4 className="font-black text-emerald-200">{block.title}</h4>
        <p className="mt-3 text-[15px] leading-7 text-slate-200 md:text-base"><span className="font-bold text-white">Question. </span><RichText text={block.question} /></p>
        <div className="mt-3 border-t border-emerald-300/15 pt-3 text-[15px] leading-7 text-slate-200 md:text-base"><span className="font-bold text-emerald-100">Solution. </span><RichText text={block.answer} /></div>
      </article>
    );
  }

  return (
    <div className="grid gap-3">
      {block.questions.map((item, index) => (
        <details key={item.q} className="group rounded-xl border border-slate-700 bg-[#090f1c] px-4 py-3 open:border-cyan-400/35 open:bg-cyan-400/[0.04]">
          <summary className="cursor-pointer list-none font-bold text-slate-100 marker:hidden">
            <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-violet-400/15 text-sm text-violet-200">{index + 1}</span>
            <RichText text={item.q} />
          </summary>
          <p className="mt-3 border-t border-slate-700/70 pt-3 pl-10 text-[15px] leading-7 text-slate-300"><RichText text={item.a} /></p>
        </details>
      ))}
    </div>
  );
}

export default function PolymersPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-cyan-300 selection:text-slate-950" style={{ fontFamily: sfProStack }}>
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(167,139,250,0.09),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(251,113,133,0.06),transparent_28%)]" />

      <header className="relative z-10 border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                JEE Advanced · JEE Main · NEET · Boards
              </div>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.24em] text-violet-300">Organic & Materials Chemistry</p>
              <h1 className="mt-3 bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-6xl">
                Polymers
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                A complete structure–property chapter covering polymerisation mechanisms, molecular mass, stereochemistry, elastomers, fibres, plastics, thermosets, named polymers and biodegradable materials.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2">26 numbered sections</span>
                <span className="rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2">Comparison tables</span>
                <span className="rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2">Solved examples</span>
                <span className="rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2">Exam traps</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-slate-700/80 bg-slate-950/70 p-2 shadow-2xl shadow-violet-950/30">
              <PolymerChainVisual />
            </div>
          </div>
        </div>
      </header>

      <PolymerVisualGallery />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 py-8 md:px-8 lg:grid-cols-[230px_minmax(0,1fr)]">
        <aside className="h-fit lg:sticky lg:top-5">
          <nav className="rounded-2xl border border-slate-800 bg-[#070c16]/95 p-3 backdrop-blur">
            <p className="px-2 py-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500">Sections</p>
            <div className="grid max-h-[74vh] grid-cols-4 gap-2 overflow-y-auto pr-1 sm:grid-cols-8 lg:grid-cols-4">
              {polymerSections.map((section) => (
                <a key={section.id} href={`#section-${section.id}`} className="flex h-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-sm font-black text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-100">
                  {Number(section.id)}
                </a>
              ))}
            </div>
          </nav>
        </aside>

        <article className="min-w-0 space-y-8">
          {polymerSections.map((section) => (
            <section id={`section-${section.id}`} key={section.id} className="scroll-mt-6 rounded-[28px] border border-slate-800/90 bg-[#060b15]/95 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.22)] md:p-8 print:break-before-page">
              <div className="mb-6 flex items-start gap-4 border-b border-slate-800 pb-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 via-violet-400/20 to-rose-400/20 text-lg font-black text-cyan-100 ring-1 ring-white/10">
                  {Number(section.id)}
                </div>
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">{section.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-400 md:text-base">{section.subtitle}</p>
                </div>
              </div>
              <div className="grid gap-5">
                {section.blocks.map((block, index) => <BlockRenderer key={`${section.id}-${index}`} block={block} />)}
              </div>
            </section>
          ))}
        </article>
      </div>

      <footer className="relative z-10 border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        Synergic Bond · Polymers · Original educational synthesis
      </footer>
    </main>
  );
}
