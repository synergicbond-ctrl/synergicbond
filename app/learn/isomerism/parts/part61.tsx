import Link from "next/link";

type Tautomer = "fourKeto" | "fourHydroxy" | "twoHydroxy" | "twoKeto" | "thiol" | "thione";

const labels: Record<Tautomer, string> = {
  fourKeto: "4-pyridone (a)",
  fourHydroxy: "4-hydroxypyridine (b)",
  twoHydroxy: "2-hydroxypyridine (a)",
  twoKeto: "2-pyridone (b)",
  thiol: "pyridine-2-thiol (a)",
  thione: "pyridine-2-thione (b)",
};

function PyridineTautomer({ kind }: { kind: Tautomer }) {
  const isFour = kind === "fourKeto" || kind === "fourHydroxy";
  const keto = kind === "fourKeto" || kind === "twoKeto" || kind === "thione";
  const sulfur = kind === "thiol" || kind === "thione";
  const x = isFour ? 100 : 145;
  const y = isFour ? 22 : 56;
  const atom = sulfur ? "S" : "O";
  const bondStart = isFour ? "100 42" : "126 67";
  const bondEnd = isFour ? "100 24" : "145 56";
  return <figure className="rounded-2xl border border-white/10 bg-slate-950/50 p-3">
    <svg fill="currentColor" viewBox="0 0 200 145" className="h-auto w-full text-slate-100" role="img" aria-label={labels[kind]}>
      <path d="M70 104 47 64 70 24 116 24 140 64 116 104Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M51 61 69 30M75 101 110 101M121 29 136 57" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <text x="61" y="109" fontSize="17" fill="#a5f3fc">N</text>
      {keto ? <><path d={`M${bondStart} L${bondEnd}`} stroke="#fef3c7" strokeWidth="2.5" /><path d={isFour ? "M106 42 106 24" : "M130 72 149 61"} stroke="#fef3c7" strokeWidth="1.5" /></> : <path d={`M${bondStart} L${bondEnd}`} stroke="currentColor" strokeWidth="2" />}
      <text x={x - 7} y={y} fontSize="18" fill="#fef3c7">{atom}{keto ? "" : "H"}</text>
      {!keto && <text x="48" y="122" fontSize="13" fill="#c4b5fd">N–H</text>}
      {keto && <text x="48" y="122" fontSize="13" fill="#c4b5fd">lactam/lactim bond shift</text>}
    </svg>
    <figcaption className="text-center text-sm font-bold text-slate-200">{labels[kind]}</figcaption>
  </figure>;
}

function Pair({ left, right, conclusion, note }: { left: Tautomer; right: Tautomer; conclusion: string; note: string }) {
  return <article className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[.045] p-4">
    <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]"><PyridineTautomer kind={left} /><span className="text-center text-3xl text-cyan-200">⇌</span><PyridineTautomer kind={right} /></div>
    <p className="mt-3 text-center text-sm font-black text-amber-100">Relative amount in the source: {conclusion}</p>
    <p className="mt-2 text-sm leading-6 text-slate-300">{note}</p>
  </article>;
}

export default function IsomerismPart61() {
  return <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12"><article className="mx-auto max-w-6xl">
    <Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link>
    <header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.7),rgba(139,92,246,.1))] p-6 sm:p-9"><p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Isomerism source · page 20 · Part 61</p><h1 className="mt-3 text-3xl font-black sm:text-5xl">Pyridine tautomers and ionotropy</h1><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">This page compares three named heterocyclic tautomeric pairs. The inequalities below preserve the source’s stated relative predominance and conditions.</p></header>
    <section className="mt-8 grid gap-5 lg:grid-cols-3">
      <Pair left="fourKeto" right="fourHydroxy" conclusion="(a) &lt; (b) in vapour; (a) &gt; (b) in ethanol" note="The solvent changes the preferred 4-pyridone/4-hydroxypyridine form; retain the stated phase when answering." />
      <Pair left="twoHydroxy" right="twoKeto" conclusion="(a) &gt; (b)" note="The source places 2-hydroxypyridine (a) ahead of 2-pyridone (b)." />
      <Pair left="thiol" right="thione" conclusion="(a) &gt; (b)" note="The source places pyridine-2-thiol (a) ahead of pyridine-2-thione (b)." />
    </section>
    <section className="mt-8 rounded-2xl border border-amber-300/25 bg-amber-300/[.07] p-5"><h2 className="text-xl font-black text-amber-100">Types of tautomerism listed on this page</h2><dl className="mt-4 grid gap-4 md:grid-cols-2"><div><dt className="font-black text-amber-50">a. Cationotropy</dt><dd className="mt-1 text-sm leading-6 text-slate-300">Tautomerism involving migration of a cation, commonly H⁺, together with the corresponding bond reorganisation.</dd></div><div><dt className="font-black text-amber-50">b. Anionotropy</dt><dd className="mt-1 text-sm leading-6 text-slate-300">Tautomerism involving migration of an anion together with the corresponding bond reorganisation.</dd></div></dl></section>
    <aside className="mt-6 rounded-2xl border border-violet-300/20 bg-violet-300/[.06] p-5 text-sm leading-7 text-violet-50"><b>Examination point:</b> named keto/hydroxy and thiol/thione forms cannot be ranked from a generic “keto wins” rule. Use the particular heterocycle and the stated medium.</aside>
    <nav className="mt-8 flex justify-between border-t border-white/10 pt-6"><Link href="/learn/isomerism/60" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">← 60</Link><Link href="/learn/isomerism" className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">Chapter overview</Link></nav>
  </article></main>;
}
