import Link from "next/link";
import { notFound } from "next/navigation";
import { BOARDS, CLASSES, getBoard, getClass } from "@/lib/boardDashboard";
import { classNumber } from "@/lib/cbse/syllabus";
import { getExperiments, type Experiment } from "@/lib/cbse/practicals";

// /dashboard/[board]/[class]/practical — Practical / Lab Experiment Hub.
// Full experiment write-ups (aim · theory · apparatus · procedure · observation
// table · precautions · viva) from the standard CBSE practical syllabus. The
// "lab simulation" is an honest guided walkthrough of the observation table —
// no fake apparatus animation is claimed. Zero client JS (native <details>).

export function generateStaticParams() {
  return BOARDS.flatMap((b) => CLASSES.map((c) => ({ board: b.slug, class: c.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
  const b = getBoard(board); const c = getClass(cls);
  return b && c ? { title: `${b.name} ${c.name} — Practical & Lab Hub` } : {};
}

function ExperimentCard({ e }: { e: Experiment }) {
  return (
    <details className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 open:border-cyan-400/30">
      <summary className="flex cursor-pointer items-center justify-between gap-3 list-none">
        <div className="min-w-0">
          <div className="text-[10px] font-bold uppercase tracking-wide text-cyan-300/70">{e.category}</div>
          <div className="font-black text-white/90">{e.title}</div>
          <div className="mt-0.5 truncate text-xs text-white/45">{e.aim}</div>
        </div>
        <span className="shrink-0 text-cyan-400 transition group-open:rotate-90">›</span>
      </summary>

      <div className="mt-4 space-y-4 border-t border-white/[0.06] pt-4 text-sm">
        <div><h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">Aim</h4><p className="text-white/75">{e.aim}</p></div>
        <div><h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">Theory</h4><p className="text-white/75">{e.theory}</p></div>
        <div>
          <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">Apparatus & Chemicals</h4>
          <div className="flex flex-wrap gap-1.5">{e.apparatus.map((a) => <span key={a} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-xs text-white/65">{a}</span>)}</div>
        </div>
        <div>
          <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">Procedure</h4>
          <ol className="list-decimal space-y-1 pl-5 text-white/75">{e.procedure.map((p, i) => <li key={i}>{p}</li>)}</ol>
        </div>
        {e.observation && (
          <div>
            <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">Observation Table · Lab Walkthrough</h4>
            <p className="mb-2 text-xs text-white/45">{e.observation.caption}{e.observation.note ? ` — ${e.observation.note}` : ""}</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead><tr>{e.observation.headers.map((h) => <th key={h} className="border border-white/10 bg-white/[0.04] px-2 py-1.5 text-left font-bold text-white/70">{h}</th>)}</tr></thead>
                <tbody>
                  {e.observation.sampleRows.map((row, ri) => (
                    <tr key={ri}>{row.map((cell, ci) => <td key={ci} className="border border-white/10 px-2 py-1.5 text-white/60">{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        <div><h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">Result</h4><p className="text-white/75">{e.result}</p></div>
        <div>
          <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">Precautions</h4>
          <ul className="list-disc space-y-0.5 pl-5 text-white/75">{e.precautions.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </div>
        <div>
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-amber-300/70">Viva Questions</h4>
          <div className="space-y-2">
            {e.viva.map((v, i) => (
              <details key={i} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
                <summary className="cursor-pointer text-sm font-semibold text-white/85">{v.q}</summary>
                <p className="mt-1.5 text-sm text-white/60">{v.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </details>
  );
}

export default async function PracticalPage({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
  const b = getBoard(board); const c = getClass(cls);
  if (!b || !c) notFound();

  const base = `/dashboard/${b.slug}/${c.slug}`;
  const experiments = getExperiments(classNumber(c.slug));

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-amber-950/20 to-[#0B1220] px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-4 text-sm text-white/45">
            <Link href={base} className="hover:text-white">{b.name} {c.name}</Link>
            <span className="mx-1.5">/</span><span className="text-white/80">Practical & Lab Hub</span>
          </nav>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Practical & Lab Experiment Hub</h1>
          <p className="mt-2 max-w-2xl text-white/55">{experiments.length} standard {c.name} experiments — full write-ups with observation tables, precautions and viva. Tap any experiment to expand.</p>
        </div>
      </div>
      <div className="mx-auto max-w-4xl space-y-3 px-6 py-8">
        {experiments.map((e) => <ExperimentCard key={e.id} e={e} />)}
        <p className="pt-2 text-xs text-white/35">Experiment write-ups are standard CBSE practical-syllabus content. For a full lab manual, follow your school&apos;s prescribed record.</p>
      </div>
    </main>
  );
}
