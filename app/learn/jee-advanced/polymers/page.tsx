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

const navLabels: Record<string, string> = {
  "01": "Polymer Science Overview",
  "02": "Classification of Polymers",
  "03": "Chain Architecture",
  "04": "Homopolymers & Copolymers",
  "05": "Chain Growth vs Step Growth",
  "06": "Free-Radical Polymerisation",
  "07": "Ionic & Coordination Routes",
  "08": "Tacticity & Geometrical Order",
  "09": "Molecular Mass & Dispersity",
  "10": "Functionality in Step Growth",
  "11": "Forces & Thermal Classes",
  "12": "Glass Transition & Crystallinity",
  "13": "The Polyethene Family",
  "14": "Major Vinyl Polymers",
  "15": "Synthetic Rubbers",
  "16": "Natural Rubber & Vulcanisation",
  "17": "Nylons & Polyamides",
  "18": "Polyesters & Polyurethanes",
  "19": "Thermosetting Resins",
  "20": "Biodegradable Polymers",
  "21": "Conducting & Functional Polymers",
  "22": "Additives, Processing & Recycling",
  "23": "Polymer Identification Matrix",
  "24": "Solved Examination Problems",
  "25": "Exceptions & Misconceptions",
  "26": "Practice & Answer Key",
};

const navigationTracks = [
  {
    label: "Foundations",
    caption: "Build the language of macromolecules",
    ids: ["01", "02", "03", "04"],
    eyebrow: "text-cyan-300",
    node: "border-cyan-400/35 bg-cyan-400/10 text-cyan-100",
    hover: "hover:border-cyan-400/35 hover:bg-cyan-400/[0.07]",
  },
  {
    label: "Polymerisation Engine",
    caption: "Understand how chains are actually built",
    ids: ["05", "06", "07", "08", "09", "10"],
    eyebrow: "text-violet-300",
    node: "border-violet-400/35 bg-violet-400/10 text-violet-100",
    hover: "hover:border-violet-400/35 hover:bg-violet-400/[0.07]",
  },
  {
    label: "Structure → Properties",
    caption: "Connect chain motion with material behaviour",
    ids: ["11", "12"],
    eyebrow: "text-amber-300",
    node: "border-amber-400/35 bg-amber-400/10 text-amber-100",
    hover: "hover:border-amber-400/35 hover:bg-amber-400/[0.07]",
  },
  {
    label: "Plastics & Rubbers",
    caption: "Decode the high-yield commercial families",
    ids: ["13", "14", "15", "16"],
    eyebrow: "text-rose-300",
    node: "border-rose-400/35 bg-rose-400/10 text-rose-100",
    hover: "hover:border-rose-400/35 hover:bg-rose-400/[0.07]",
  },
  {
    label: "Fibres, Resins & Smart Materials",
    caption: "Move from nylons to functional polymers",
    ids: ["17", "18", "19", "20", "21"],
    eyebrow: "text-emerald-300",
    node: "border-emerald-400/35 bg-emerald-400/10 text-emerald-100",
    hover: "hover:border-emerald-400/35 hover:bg-emerald-400/[0.07]",
  },
  {
    label: "Application & Exam Mastery",
    caption: "Consolidate, identify and practise",
    ids: ["22", "23", "24", "25", "26"],
    eyebrow: "text-fuchsia-300",
    node: "border-fuchsia-400/35 bg-fuchsia-400/10 text-fuchsia-100",
    hover: "hover:border-fuchsia-400/35 hover:bg-fuchsia-400/[0.07]",
  },
] as const;

const sectionsById = new Map(polymerSections.map((section) => [section.id, section]));

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
      <div className="overflow-hidden rounded-lg border border-violet-400/25 bg-[#0a1020] p-4 shadow-[inset_0_0_40px_rgba(139,92,246,0.05)] md:p-5">
        <div className="text-lg text-violet-100 md:text-xl">
          <Latex value={block.latex} block />
        </div>
        {block.note ? <p className="mt-2 text-center text-sm leading-6 text-slate-400"><RichText text={block.note} /></p> : null}
      </div>
    );
  }

  if (block.kind === "callout") {
    return (
      <aside className={`rounded-lg border p-4 md:p-5 ${toneClasses[block.tone]}`}>
        <h4 className="text-sm font-black uppercase tracking-[0.16em]">{block.title}</h4>
        <p className="mt-2 text-[15px] leading-7 text-slate-100 md:text-base"><RichText text={block.body} /></p>
      </aside>
    );
  }

  if (block.kind === "table") {
    return (
      <div className="overflow-x-auto rounded-lg border border-slate-700/80 bg-[#080d18]">
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
      <article className="rounded-lg border border-emerald-400/25 bg-emerald-400/[0.055] p-4 md:p-5">
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

      <div className="relative z-10 mx-auto grid max-w-[1480px] gap-8 px-4 py-8 md:px-8 lg:grid-cols-[340px_minmax(0,1fr)]">
        <aside className="h-fit lg:sticky lg:top-5">
          <nav className="overflow-hidden rounded-[28px] border border-slate-700/70 bg-[#070c16]/95 shadow-[0_24px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl">
            <div className="relative overflow-hidden border-b border-slate-800 px-5 py-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(34,211,238,0.12),transparent_36%),radial-gradient(circle_at_88%_15%,rgba(168,85,247,0.12),transparent_38%),radial-gradient(circle_at_70%_100%,rgba(244,63,94,0.08),transparent_42%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">Polymer Atlas</p>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-slate-400">26 TOPICS</span>
                </div>
                <h3 className="mt-3 text-xl font-black tracking-tight text-white">Your chapter learning trail</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-400">Follow six connected tracks—from molecular foundations to examination mastery.</p>
              </div>
            </div>

            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto p-4 lg:max-h-[74vh] lg:block lg:space-y-6 lg:overflow-y-auto lg:overflow-x-hidden">
              {navigationTracks.map((track, trackIndex) => (
                <section key={track.label} className="min-w-[292px] snap-start rounded-lg border border-slate-800/90 bg-slate-950/40 p-3 lg:min-w-0 lg:border-0 lg:bg-transparent lg:p-0">
                  <div className="flex items-start justify-between gap-3 px-1">
                    <div>
                      <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${track.eyebrow}`}>Track {String(trackIndex + 1).padStart(2, "0")}</p>
                      <h4 className="mt-1 text-sm font-black leading-5 text-white">{track.label}</h4>
                      <p className="mt-0.5 text-[11px] leading-4 text-slate-500">{track.caption}</p>
                    </div>
                    <span className="mt-1 text-[10px] font-bold text-slate-600">{track.ids.length}</span>
                  </div>

                  <div className="relative mt-3 space-y-1.5 pl-0.5 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-px before:bg-gradient-to-b before:content-[''] before:from-slate-500/55 before:via-slate-700/30 before:to-transparent">
                    {track.ids.map((id) => {
                      const section = sectionsById.get(id);
                      if (!section) return null;

                      return (
                        <a
                          key={id}
                          href={`#section-${id}`}
                          title={section.title}
                          className={`group relative grid grid-cols-[38px_minmax(0,1fr)_18px] items-center gap-3 rounded-xl border border-transparent px-1.5 py-2.5 transition duration-200 ${track.hover}`}
                        >
                          <span className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border text-[10px] font-black tracking-[0.08em] shadow-[0_0_0_5px_#070c16] ${track.node}`}>
                            {id}
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[13px] font-bold leading-[1.28rem] text-slate-200 transition group-hover:text-white">{navLabels[id] ?? section.title}</span>
                          </span>
                          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4 text-slate-700 transition group-hover:translate-x-0.5 group-hover:text-slate-300">
                            <path d="M7.5 4.5 13 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            <div className="hidden border-t border-slate-800 px-5 py-3 text-[11px] leading-5 text-slate-500 lg:block">
              Select a topic to move directly to that concept.
            </div>
          </nav>
        </aside>

        <article className="min-w-0 space-y-8">
          {polymerSections.map((section) => (
            <section id={`section-${section.id}`} key={section.id} className="scroll-mt-6 rounded-[28px] border border-slate-800/90 bg-[#060b15]/95 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.22)] md:p-8 print:break-before-page">
              <div className="mb-6 flex items-start gap-4 border-b border-slate-800 pb-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 via-violet-400/20 to-rose-400/20 text-lg font-black text-cyan-100 ring-1 ring-white/10">
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
