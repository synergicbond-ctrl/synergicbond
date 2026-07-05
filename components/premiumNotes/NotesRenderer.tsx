import type {
  PremiumChapterNotes, NoteBlock, NoteTopic, NotesExam,
} from "@/lib/premiumNotes/schema";
import { filterNotesForExam, notesStats } from "@/lib/premiumNotes/schema";
import { VISUAL_REGISTRY } from "./visuals";

// ─────────────────────────────────────────────────────────────────────────────
// Premium Notes renderer — ONE reusable server component for every authored
// chapter. Topic → Subtopic → ten typed blocks, filtered to the active
// program's exam. Zero client JS: topics collapse via native <details>, so the
// chapter engine page stays fast on mobile. Visual blocks resolve through the
// SVG registry; unknown keys render an honest missing state.
//
// Card language (design system): focus=cyan · trap=amber · mistake=rose ·
// exception=violet · trick=emerald · illustration=structured glass ·
// revision=glass sheet. Semantic colors are content signals, not decoration.
// ─────────────────────────────────────────────────────────────────────────────

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="ml-2 shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-1.5 py-0.5 align-middle text-[9px] font-bold uppercase tracking-wide text-white/45">{children}</span>;
}

function ExamTags({ exams }: { exams?: NotesExam[] }) {
  if (!exams) return null;
  return <>{exams.map((e) => <Tag key={e}>{e}</Tag>)}</>;
}

function Callout({ label, tone, children, exams }: {
  label: string;
  tone: string;
  children: React.ReactNode;
  exams?: NotesExam[];
}) {
  return (
    <div className={`rounded-xl border p-3.5 ${tone}`}>
      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] opacity-90">
        {label}<ExamTags exams={exams} />
      </div>
      {children}
    </div>
  );
}

function Block({ block }: { block: NoteBlock }) {
  switch (block.kind) {
    case "detailed":
      return (
        <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
          {block.heading && <h5 className="mb-2 font-bold text-white/90">{block.heading}<ExamTags exams={block.exams} /></h5>}
          {block.paras?.map((p, i) => <p key={i} className="mb-2 text-sm leading-relaxed text-white/70 last:mb-0">{p}</p>)}
          {block.points && (
            <ul className="mt-1 space-y-1.5">
              {block.points.map((pt, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-white/75"><span className="mt-0.5 shrink-0 text-cyan-400">•</span>{pt}</li>
              ))}
            </ul>
          )}
        </div>
      );

    case "visual": {
      const Visual = VISUAL_REGISTRY[block.visual];
      return (
        <figure className="rounded-xl border border-cyan-400/15 bg-cyan-500/[0.03] p-4">
          <figcaption className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-300">Visual · {block.title}<ExamTags exams={block.exams} /></figcaption>
          {Visual ? <Visual /> : <p className="text-sm text-white/45">Diagram “{block.visual}” is being drawn — text notes above cover the content.</p>}
          {block.caption && <p className="mt-2 text-xs text-white/50">{block.caption}</p>}
        </figure>
      );
    }

    case "focus":
      return (
        <Callout label={block.title ?? "Focus Points"} tone="border-cyan-400/25 bg-cyan-500/[0.05] text-cyan-200" exams={block.exams}>
          <ul className="space-y-1.5">
            {block.points.map((p, i) => <li key={i} className="flex gap-2 text-sm leading-relaxed text-white/80"><span className="mt-0.5 shrink-0 text-cyan-300">◎</span>{p}</li>)}
          </ul>
        </Callout>
      );

    case "trap":
      return (
        <Callout label="Exam Traps" tone="border-amber-400/25 bg-amber-500/[0.05] text-amber-200" exams={block.exams}>
          <div className="space-y-2.5">
            {block.items.map((t, i) => (
              <div key={i} className="text-sm leading-relaxed">
                <p className="font-semibold text-amber-200/95">⚠ {t.trap}</p>
                <p className="mt-0.5 text-white/70">{t.reality}</p>
              </div>
            ))}
          </div>
        </Callout>
      );

    case "mistake":
      return (
        <Callout label="Common Mistakes" tone="border-rose-400/25 bg-rose-500/[0.05] text-rose-200" exams={block.exams}>
          <div className="space-y-2.5">
            {block.items.map((m, i) => (
              <div key={i} className="text-sm leading-relaxed">
                <p className="font-semibold text-rose-200/95">✗ {m.wrong}</p>
                <p className="mt-0.5 text-emerald-200/90">✓ {m.right}</p>
              </div>
            ))}
          </div>
        </Callout>
      );

    case "exception":
      return (
        <Callout label="Exceptions" tone="border-violet-400/25 bg-violet-500/[0.05] text-violet-200" exams={block.exams}>
          <div className="space-y-2.5">
            {block.items.map((e, i) => (
              <div key={i} className="text-sm leading-relaxed">
                <p className="font-semibold text-violet-200/95">{e.statement}</p>
                {e.why && <p className="mt-0.5 text-white/65">{e.why}</p>}
              </div>
            ))}
          </div>
        </Callout>
      );

    case "trick":
      return (
        <Callout label="Memory Tricks" tone="border-emerald-400/25 bg-emerald-500/[0.05] text-emerald-200" exams={block.exams}>
          <div className="space-y-2">
            {block.items.map((t, i) => (
              <div key={i} className="text-sm leading-relaxed">
                <p className="font-bold text-emerald-200/95">🧠 {t.trick}</p>
                <p className="mt-0.5 text-white/70">{t.recall}</p>
              </div>
            ))}
          </div>
        </Callout>
      );

    case "illustration":
      return (
        <div className="rounded-xl border border-white/[0.09] bg-white/[0.03] p-4">
          <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
            Solved Illustration · {block.level}<ExamTags exams={block.exams} />
          </div>
          <p className="text-sm font-semibold leading-relaxed text-white">{block.question}</p>
          <div className="mt-3 space-y-2">
            <div className="rounded-lg border border-cyan-400/15 bg-cyan-500/[0.04] p-2.5 text-sm leading-relaxed text-white/75"><span className="font-bold text-cyan-300">Thinking · </span>{block.thinking}</div>
            <div className="rounded-lg border border-white/[0.07] bg-[#0B1220] p-2.5 text-sm leading-relaxed text-white/80"><span className="font-bold text-white/60">Solution · </span>{block.solution}</div>
            {block.fastMethod && <div className="rounded-lg border border-emerald-400/15 bg-emerald-500/[0.04] p-2.5 text-sm leading-relaxed text-white/75"><span className="font-bold text-emerald-300">Fast method · </span>{block.fastMethod}</div>}
            {block.alternateMethod && <div className="rounded-lg border border-indigo-400/15 bg-indigo-500/[0.04] p-2.5 text-sm leading-relaxed text-white/75"><span className="font-bold text-indigo-300">Alternate · </span>{block.alternateMethod}</div>}
            {block.commonMistakes && block.commonMistakes.length > 0 && (
              <div className="rounded-lg border border-rose-400/15 bg-rose-500/[0.04] p-2.5 text-sm leading-relaxed text-white/75">
                <span className="font-bold text-rose-300">Watch out · </span>{block.commonMistakes.join(" ")}
              </div>
            )}
          </div>
        </div>
      );

    case "misc":
      return (
        <details className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5">
          <summary className="cursor-pointer list-none text-sm leading-relaxed">
            <span className="mr-2 rounded-full border border-white/10 bg-white/[0.05] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white/50">{block.level}</span>
            <span className="font-semibold text-white/90">{block.question}</span>
            <ExamTags exams={block.exams} />
          </summary>
          <div className="mt-2.5 border-t border-white/[0.06] pt-2.5 text-sm leading-relaxed">
            <p className="font-bold text-emerald-300">{block.answer}</p>
            <p className="mt-1 text-white/70">{block.explanation}</p>
          </div>
        </details>
      );

    case "revision":
      return (
        <Callout label={block.title ?? "Revision Notes"} tone="border-white/[0.12] bg-gradient-to-b from-white/[0.05] to-transparent text-white" exams={block.exams}>
          <ul className="space-y-1.5">
            {block.points.map((p, i) => <li key={i} className="flex gap-2 text-sm leading-relaxed text-white/80"><span className="mt-0.5 shrink-0 text-white/40">▸</span>{p}</li>)}
          </ul>
        </Callout>
      );
  }
}

function Topic({ topic, index, defaultOpen }: { topic: NoteTopic; index: number; defaultOpen: boolean }) {
  return (
    <details open={defaultOpen} className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] open:border-cyan-400/25">
      <summary className="flex cursor-pointer list-none items-center gap-3 p-4 [&::-webkit-details-marker]:hidden">
        <span className="text-xs font-black text-cyan-300/70">{String(index + 1).padStart(2, "0")}</span>
        <span className="min-w-0 flex-1">
          <span className="block font-black text-white">{topic.title}</span>
          {topic.intro && <span className="mt-0.5 block text-xs text-white/45">{topic.intro}</span>}
        </span>
        <span className="shrink-0 text-cyan-400 transition group-open:rotate-90">›</span>
      </summary>
      <div className="space-y-6 border-t border-white/[0.06] p-4">
        {topic.subtopics.map((st) => (
          <section key={st.id}>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-white/50">{st.title}</h4>
            <div className="space-y-3">
              {st.blocks.map((b, i) => <Block key={i} block={b} />)}
            </div>
          </section>
        ))}
      </div>
    </details>
  );
}

export default function NotesRenderer({ notes, exam }: { notes: PremiumChapterNotes; exam: NotesExam }) {
  const scoped = filterNotesForExam(notes, exam);
  const stats = notesStats(scoped);

  return (
    <div className="space-y-3">
      {/* Derived header — never hardcoded counts */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-white/45">
        <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-2 py-0.5 font-bold text-cyan-300">{exam} edition</span>
        <span>{stats.topics} topics · {stats.subtopics} subtopics · {stats.blocks} note blocks</span>
      </div>

      {scoped.topics.map((t, i) => <Topic key={t.id} topic={t} index={i} defaultOpen={i === 0} />)}

      {/* Chapter revision sheet */}
      <div className="rounded-2xl border border-white/[0.12] bg-gradient-to-b from-white/[0.05] to-transparent p-4">
        <h4 className="mb-3 text-sm font-black uppercase tracking-wider text-white">One-Screen Revision Sheet</h4>
        <ul className="space-y-1.5">
          {scoped.chapterRevision.map((p, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-white/80"><span className="mt-0.5 shrink-0 text-cyan-400">▸</span>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
