import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { IsomerismPartView, isomerismParts, legacyPartToMergedPart } from "../parts";

export function generateStaticParams() {
  return isomerismParts.map((part) => ({ part: String(part.number) }));
}

function PartPager({ number }: { number: number }) {
  const first = isomerismParts[0]?.number;
  const last = isomerismParts.at(-1)?.number;

  return (
    <nav aria-label="Isomerism lesson navigation" className="bg-[#08111f] px-4 pb-10 text-white sm:px-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 border-t border-white/10 pt-6">
        {number !== first ? <Link href={`/learn/isomerism/${number - 1}`} className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">← Part {number - 1}</Link> : <span />}
        <Link href="/learn/isomerism" className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">All 40 parts</Link>
        {number !== last ? <Link href={`/learn/isomerism/${number + 1}`} className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">Part {number + 1} →</Link> : <span />}
      </div>
    </nav>
  );
}

export default async function IsomerismPartRoute({ params }: { params: Promise<{ part: string }> }) {
  const { part } = await params;
  const number = Number(part);

  if (!Number.isInteger(number)) notFound();

  if (number > 40 && number <= 169) {
    const merged = legacyPartToMergedPart[number];
    if (merged) redirect(`/learn/isomerism/${merged}`);
  }

  if (!isomerismParts.some((item) => item.number === number)) notFound();

  return (
    <>
      <IsomerismPartView number={number} />
      <PartPager number={number} />
    </>
  );
}
