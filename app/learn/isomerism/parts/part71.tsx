import Link from "next/link";

const cases = [
  ["Ethene", "CH₂=CH₂", "No", "Both ends contain identical H/H pairs."],
  ["Pent-1-ene", "CH₂=CH–CH₂CH₂CH₃", "No", "The terminal double-bond carbon is CH₂."],
  ["Pent-2-ene", "CH₃CH=CHCH₂CH₃", "Yes", "Each carbon has H and a different carbon substituent."],
  ["Methylenecyclohexane", "cyclohexane=C H₂", "No", "The external double-bond carbon has two H atoms."],
  ["Ethylidenecyclohexane", "cyclohexane=C(H)CH₃", "Yes", "The external carbon has H/CH₃ and the ring paths are non-equivalent."],
];

export default function IsomerismPart71() {
  return <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12"><article className="mx-auto max-w-5xl"><Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link><header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[#08111f] p-6 sm:p-9"><p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Isomerism source · page 61 · Part 71</p><h1 className="mt-3 text-3xl font-black sm:text-5xl">Which alkenes can show geometrical isomerism?</h1></header><section className="mt-7 grid gap-4 md:grid-cols-2">{cases.map(([name, formula, result, reason]) => <article key={name} className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><h2 className="font-black text-cyan-100">{name}</h2><svg fill="currentColor" viewBox="0 0 360 90" className="mt-3 w-full" role="img" aria-label={`${name} alkene`}><path d="M130 48H210M130 42H210M130 54H210M130 48L75 18M130 48L75 78M210 48L265 18M210 48L265 78" stroke="currentColor" strokeWidth="3" fill="none"/><text x="180" y="88" textAnchor="middle" fontSize="16">{formula}</text></svg><p className={`mt-2 font-bold ${result === "Yes" ? "text-emerald-300" : "text-rose-300"}`}>{result}: geometrical isomerism</p><p className="mt-1 text-sm text-slate-300">{reason}</p></article>)}</section><aside className="mt-6 rounded-2xl border border-amber-300/25 bg-amber-300/[.07] p-5 text-sm leading-7 text-amber-50"><b>Source rule:</b> a ≠ b and c ≠ d around C=C. Restricted rotation alone is insufficient.</aside></article></main>;
}
