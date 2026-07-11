import Link from "next/link";
import type { ReactNode } from "react";

export function LearningObjectives({ items }: { items: string[] }) {
  return <section aria-labelledby="objectives" className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] p-5"><p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Learning objectives</p><h2 id="objectives" className="mt-1 text-lg font-bold text-white">By the end, you can</h2><ul className="mt-3 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">{items.map((item) => <li key={item} className="flex gap-2"><span aria-hidden="true" className="text-cyan-300">◆</span>{item}</li>)}</ul></section>;
}

export function ConceptCard({ title, children }: { title: string; children: ReactNode }) {
  return <section className="rounded-2xl border border-white/10 bg-slate-950/45 p-5 shadow-lg shadow-black/10"><h2 className="text-lg font-black text-white">{title}</h2><div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-200 sm:text-base">{children}</div></section>;
}

export function ImportantNote({ title = "Important note", children }: { title?: string; children: ReactNode }) {
  return <aside className="rounded-xl border-l-4 border-amber-300 bg-amber-300/[0.08] px-4 py-3 text-sm leading-relaxed text-amber-50"><p className="font-bold text-amber-200">{title}</p><div className="mt-1">{children}</div></aside>;
}

export function PracticeQuestion({ prompt, answer }: { prompt: ReactNode; answer?: ReactNode }) {
  return <section className="rounded-2xl border border-violet-300/20 bg-violet-300/[0.06] p-5"><p className="text-xs font-black uppercase tracking-[0.18em] text-violet-200">Check your understanding</p><div className="mt-2 text-sm leading-relaxed text-white sm:text-base">{prompt}</div>{answer ? <div className="mt-3 border-t border-white/10 pt-3 text-sm text-violet-100"><span className="font-bold">Answer: </span>{answer}</div> : null}</section>;
}

export function SummaryStrip({ items }: { items: string[] }) {
  return <section aria-label="Quick recap" className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">{items.map((item, index) => <div key={item} className="bg-[#0b1525] p-4"><p className="text-xs font-bold text-cyan-200">0{index + 1}</p><p className="mt-1 text-sm leading-relaxed text-slate-200">{item}</p></div>)}</section>;
}

export function PartNavigator({ previous, next }: { previous?: { href: string; label: string }; next?: { href: string; label: string } }) {
  return <nav aria-label="Continue through Atomic Structure" className="flex items-stretch justify-between gap-3 border-t border-white/10 pt-6">{previous ? <Link href={previous.href} className="rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">← {previous.label}</Link> : <span />}{next ? <Link href={next.href} className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-right text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">{next.label} →</Link> : null}</nav>;
}
