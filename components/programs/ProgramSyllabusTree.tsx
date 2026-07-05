import type { ProgramSyllabus, SyllabusBranch } from "@/lib/programSyllabus";
import { BRANCH_LABELS } from "@/lib/programSyllabus";

// ─────────────────────────────────────────────────────────────────────────────
// Program Syllabus Tree — ONE isolation-safe renderer for every program.
// Shows ONLY this program's name, units and topics: no exam tags, no other
// program names, ever. Server component, zero client JS (native <details>),
// mobile-first. Counts derived; pending programs show their honest note.
// ─────────────────────────────────────────────────────────────────────────────

const BRANCH_ORDER: SyllabusBranch[] = ["physical", "inorganic", "organic", "general", "practical"];

const BRANCH_TONE: Record<SyllabusBranch, string> = {
  physical: "text-cyan-300",
  inorganic: "text-blue-300",
  organic: "text-purple-300",
  general: "text-white/60",
  practical: "text-emerald-300",
};

export default function ProgramSyllabusTree({ syllabus }: { syllabus: ProgramSyllabus }) {
  const byBranch = BRANCH_ORDER
    .map((b) => ({ branch: b, units: syllabus.units.filter((u) => u.branch === b) }))
    .filter((g) => g.units.length > 0);

  return (
    <section className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
      <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-xl font-black text-white">{syllabus.name} — Official Syllabus</h2>
        {syllabus.units.length > 0 && (
          <span className="text-xs text-white/45">{syllabus.units.length} units</span>
        )}
      </div>
      <p className="mb-1 text-xs text-white/40">Source: {syllabus.source}</p>
      {syllabus.paperPattern && <p className="mb-3 text-xs text-white/50">{syllabus.paperPattern}</p>}

      {syllabus.units.length === 0 ? (
        <p className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/55">
          {syllabus.pendingNote ?? "Official unit list pending."}
        </p>
      ) : (
        <div className="space-y-4">
          {byBranch.map(({ branch, units }) => (
            <div key={branch}>
              <h3 className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${BRANCH_TONE[branch]}`}>
                {BRANCH_LABELS[branch]} <span className="text-white/35">· {units.length}</span>
              </h3>
              <div className="space-y-1.5">
                {units.map((u) => (
                  <details key={u.id} className="group rounded-xl border border-white/[0.07] bg-white/[0.02]">
                    <summary className="flex cursor-pointer list-none items-center gap-3 px-3.5 py-2.5 [&::-webkit-details-marker]:hidden">
                      {u.code && <span className="shrink-0 text-[10px] font-bold uppercase text-white/35">{u.code}</span>}
                      <span className="min-w-0 flex-1 text-sm font-bold text-white">{u.title}</span>
                      {u.topics.length > 0 && <span className="shrink-0 text-white/35 transition group-open:rotate-90">›</span>}
                    </summary>
                    {u.topics.length > 0 && (
                      <ul className="space-y-1 border-t border-white/[0.05] px-4 py-2.5">
                        {u.topics.map((t, i) => (
                          <li key={i} className="flex gap-2 text-xs leading-relaxed text-white/60">
                            <span className="mt-0.5 shrink-0 text-white/30">•</span>{t}
                          </li>
                        ))}
                      </ul>
                    )}
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Question formats — this program's own, honestly sourced */}
      <div className="mt-4 border-t border-white/[0.06] pt-3">
        <div className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-white/40">Question formats</div>
        <div className="flex flex-wrap gap-1.5">
          {syllabus.questionTypes.map((q) => (
            <span key={q.key} className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-semibold text-white/60">
              {q.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
