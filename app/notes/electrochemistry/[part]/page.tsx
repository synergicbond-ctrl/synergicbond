import Link from "next/link";
import { notFound } from "next/navigation";
import { electroParts } from "../parts";

export function generateStaticParams() { return electroParts.map((part) => ({ part: `part${part.number}` })); }
export default async function ElectrochemistryPart({ params }: { params: Promise<{ part: string }> }) {
  const { part: raw } = await params; const part = electroParts.find((item) => item.number === Number(raw.replace(/^part/, ""))); if (!part) notFound();
  const previous = electroParts.find((item) => item.number === part.number - 1); const next = electroParts.find((item) => item.number === part.number + 1);
  return <main className="min-h-screen bg-[#0B0F19] px-4 py-8 text-white sm:px-6"><article className="mx-auto max-w-4xl space-y-6"><Link href="/notes/electrochemistry" className="text-sm font-bold text-cyan-300">Electrochemistry index</Link><header className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/[.12] to-violet-400/[.08] p-6"><p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-200">Electrochemistry · Part {part.number}</p><h1 className="mt-2 text-3xl font-black">{part.title}</h1></header>{part.body}<nav className="flex justify-between gap-3 border-t border-white/10 pt-5">{previous ? <Link href={`/notes/electrochemistry/part${previous.number}`} className="text-cyan-300">← {previous.number}</Link> : <span />}{next ? <Link href={`/notes/electrochemistry/part${next.number}`} className="text-cyan-300">{next.number} →</Link> : <span />}</nav></article></main>;
}
