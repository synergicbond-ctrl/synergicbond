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

function Callout({ label, tone, children, exams, icon }: {
  label: string;
  tone: string;
  children: React.ReactNode;
  exams?: NotesExam[];
  icon?: string;
}) {
  return (
    <div className={`rounded-xl border p-4 bg-[#0F2340]/90 shadow-md transition-all hover:border-opacity-80 ${tone}`}>
      <div className="mb-2.5 flex items-center gap-2 text-[15px] sm:text-[16px] font-bold tracking-wide">
        {icon && <span className="text-base leading-none">{icon}</span>}
        <span>{label}</span>
        <ExamTags exams={exams} />
      </div>
      {children}
    </div>
  );
}

function Block({ block }: { block: NoteBlock }) {
  switch (block.kind) {
    case "detailed":
      return (
        <div className="rounded-xl border border-[#4FD8B8]/25 bg-[#0F2340] p-4.5 shadow-sm">
          {block.heading && (
            <div className="mb-3 flex items-center gap-2 border-b border-[#4FD8B8]/15 pb-2 text-[16px] sm:text-[18px] font-bold text-[#4FD8B8]">
              <span>🟢</span>
              <span>{block.heading}</span>
              <ExamTags exams={block.exams} />
            </div>
          )}
          {block.paras?.map((p, i) => (
            <p key={i} className="mb-2.5 text-[14px] leading-[1.5] text-[#E8E8E8] last:mb-0">
              {p}
            </p>
          ))}
          {block.points && (
            <ul className="mt-2 space-y-2">
              {block.points.map((pt, i) => (
                <li key={i} className="flex gap-2.5 text-[14px] leading-[1.5] text-[#E8E8E8]">
                  <span className="mt-0.5 shrink-0 text-base font-bold text-[#4FD8B8]">📌</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case "visual": {
      const Visual = VISUAL_REGISTRY[block.visual];
      return (
        <figure className="rounded-xl border border-[#4FD8B8]/30 bg-[#0F2340] p-4 sm:p-5 shadow-lg">
          <figcaption className="mb-3 flex items-center justify-between border-b border-[#4FD8B8]/15 pb-2 text-[14px] font-bold tracking-wide text-[#4FD8B8]">
            <span className="flex items-center gap-2">
              <span>◈</span>
              <span>Visual Note · {block.title}</span>
            </span>
            <ExamTags exams={block.exams} />
          </figcaption>
          <div className="my-2 rounded-lg bg-[#0A1828]/80 p-2 border border-white/[0.05]">
            {Visual ? <Visual /> : <p className="p-4 text-sm text-[#888888]">Diagram “{block.visual}” is currently being drawn — core notes above cover the concept.</p>}
          </div>
          {block.caption && <p className="mt-3 text-[12px] leading-[1.4] text-[#888888]">{block.caption}</p>}
        </figure>
      );
    }

    case "focus":
      return (
        <Callout label={block.title ?? "Key Exam Focus"} tone="border-[#4FD8B8]/40 text-[#4FD8B8]" exams={block.exams} icon="🟢">
          <ul className="space-y-2">
            {block.points.map((p, i) => (
              <li key={i} className="flex gap-2.5 text-[14px] leading-[1.5] text-[#E8E8E8]">
                <span className="mt-0.5 shrink-0 text-[#4FD8B8] font-bold">📌</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Callout>
      );

    case "trap":
      return (
        <Callout label="JEE / NEET Trap" tone="border-[#FF6B6B]/45 text-[#FF6B6B]" exams={block.exams} icon="🔴">
          <div className="space-y-3">
            {block.items.map((t, i) => (
              <div key={i} className="rounded-lg border border-[#FF6B6B]/20 bg-[#FF6B6B]/[0.06] p-3 text-[14px] leading-[1.5]">
                <p className="font-bold text-[#FF6B6B]">⚠️ Trap Assumption: {t.trap}</p>
                <p className="mt-1 font-medium text-[#E8E8E8]">✓ Chemical Reality: {t.reality}</p>
              </div>
            ))}
          </div>
        </Callout>
      );

    case "mistake":
      return (
        <Callout label="Common Student Mistakes" tone="border-[#FF9500]/45 text-[#FF9500]" exams={block.exams} icon="⚠️">
          <div className="space-y-3">
            {block.items.map((m, i) => (
              <div key={i} className="rounded-lg border border-[#FF9500]/20 bg-[#FF9500]/[0.06] p-3 text-[14px] leading-[1.5]">
                <p className="font-bold text-[#FF9500]">❌ Wrong Habit: {m.wrong}</p>
                <p className="mt-1 font-medium text-[#90EE90]">✓ Correction: {m.right}</p>
              </div>
            ))}
          </div>
        </Callout>
      );

    case "exception":
      return (
        <Callout label="Critical Exceptions" tone="border-[#c4b5fd]/45 text-[#c4b5fd]" exams={block.exams} icon="⚡">
          <div className="space-y-3">
            {block.items.map((e, i) => (
              <div key={i} className="rounded-lg border border-[#c4b5fd]/20 bg-[#c4b5fd]/[0.06] p-3 text-[14px] leading-[1.5]">
                <p className="font-bold text-[#c4b5fd]">{e.statement}</p>
                {e.why && <p className="mt-1 text-[#E8E8E8]/85">💡 Why: {e.why}</p>}
              </div>
            ))}
          </div>
        </Callout>
      );

    case "trick":
      return (
        <Callout label="Memory Trick & Anchor" tone="border-[#52B788]/45 text-[#52B788]" exams={block.exams} icon="💡">
          <div className="space-y-3">
            {block.items.map((t, i) => (
              <div key={i} className="rounded-lg border border-[#52B788]/20 bg-[#52B788]/[0.06] p-3 text-[14px] leading-[1.5]">
                <p className="font-bold text-[#52B788] text-[15px]">🧠 Mnemonic: {t.trick}</p>
                <p className="mt-1 text-[#E8E8E8]">🎯 What it unlocks: {t.recall}</p>
              </div>
            ))}
          </div>
        </Callout>
      );

    case "scientist":
      return (
        <div className="rounded-xl border border-[#B89FFF]/40 bg-[#0F2340] p-4.5 shadow-md">
          <div className="mb-2.5 flex flex-wrap items-center justify-between border-b border-[#B89FFF]/20 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="text-lg">🟣</span>
              <span className="text-[16px] sm:text-[18px] font-bold text-[#B89FFF]">Scientist Story · {block.scientist}</span>
            </div>
            {block.year && (
              <span className="rounded-md border border-[#B89FFF]/30 bg-[#B89FFF]/15 px-2 py-0.5 font-mono text-xs font-bold text-[#B89FFF]">
                {block.year}
              </span>
            )}
          </div>
          <p className="text-[14px] leading-[1.5] text-[#E8E8E8]">{block.contribution}</p>
          {block.whyItMattered && (
            <div className="mt-3 rounded-lg border border-[#B89FFF]/25 bg-[#B89FFF]/[0.07] p-3 text-[14px] text-[#E8E8E8]">
              <span className="font-bold text-[#B89FFF]">💡 Why it changed chemistry: </span>
              {block.whyItMattered}
            </div>
          )}
          {block.funFact && (
            <div className="mt-2.5 flex items-start gap-2 rounded-lg bg-[#0A1828]/60 p-2.5 text-xs text-[#E8E8E8]/85 border border-white/5">
              <span className="shrink-0 text-[#B89FFF]">🧑</span>
              <span><strong className="text-[#B89FFF]">Historical Anecdote: </strong>{block.funFact}</span>
            </div>
          )}
          {block.source && <p className="mt-2 text-[12px] text-[#888888] italic">Source: {block.source}</p>}
        </div>
      );

    case "dyk":
      return (
        <div className="rounded-xl border border-[#FFD93D]/40 bg-[#0F2340] p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-2 text-[16px] font-bold text-[#FFD93D]">
            <span>🟠</span>
            <span>Did You Know?</span>
            <ExamTags exams={block.exams} />
          </div>
          <p className="text-[14px] leading-[1.5] text-[#E8E8E8]">{block.fact}</p>
          {block.connection && (
            <p className="mt-2 text-[13px] font-medium text-[#FFD93D]/90 border-t border-[#FFD93D]/15 pt-2">
              🔗 Connection: {block.connection}
            </p>
          )}
        </div>
      );

    case "decoder":
      return (
        <div className="rounded-xl border border-[#4FD8B8]/40 bg-[#0F2340] p-4.5 shadow-lg">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#4FD8B8]/20 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="text-lg">🟢</span>
              <span className="text-[16px] sm:text-[18px] font-bold text-white">Formula Decoder · {block.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-md border border-[#4FD8B8]/40 bg-[#4FD8B8]/20 px-2.5 py-1 font-mono text-xs font-bold text-[#4FD8B8]">
                Label: {block.labelCode}
              </span>
              <ExamTags exams={block.exams} />
            </div>
          </div>
          {block.formula && (
            <div className="mb-3.5 overflow-x-auto rounded-xl border border-[#4FD8B8]/30 bg-[#0A1828] p-3 text-center font-mono text-[16px] sm:text-[18px] font-bold text-[#4FD8B8] shadow-inner">
              {block.formula}
            </div>
          )}
          <div className="space-y-2.5 text-[14px] leading-[1.5] text-[#E8E8E8]">
            <p>
              <strong className="text-[#4FD8B8]">What it means: </strong>
              {block.meaning}
            </p>
            {block.example && (
              <div className="rounded-lg border border-white/10 bg-[#0A1828]/70 p-3 font-mono text-[13px] text-[#90EE90]">
                <span className="font-bold text-white">Example Calculation: </span>
                {block.example}
              </div>
            )}
            {block.insights && block.insights.length > 0 && (
              <ul className="mt-2 space-y-1.5 border-t border-white/10 pt-2.5">
                {block.insights.map((ins, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#E8E8E8]/90">
                    <span className="mt-0.5 text-[#4FD8B8]">▸</span>
                    <span>{ins}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      );

    case "errorAnalysis":
      return (
        <div className="rounded-xl border border-[#FF9500]/45 bg-[#0F2340] p-4.5 shadow-lg">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#FF9500]/20 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="text-lg">⚠️</span>
              <span className="text-[16px] sm:text-[18px] font-bold text-[#FF9500]">
                {block.title ?? "Exam Vulnerability & Error Analysis"}
              </span>
            </div>
            {block.examImpact && (
              <span className="rounded border border-[#FF6B6B]/40 bg-[#FF6B6B]/20 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#FF6B6B]">
                {block.examImpact}
              </span>
            )}
          </div>
          <div className="space-y-3">
            <div className="rounded-lg border border-[#FF6B6B]/30 bg-[#FF6B6B]/[0.08] p-3">
              <p className="text-[14px] font-bold text-[#FF6B6B]">❌ The Common Trap / Error Habit</p>
              <p className="mt-1 text-[14px] leading-[1.5] text-[#E8E8E8]">{block.error}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#0A1828]/70 p-3">
              <p className="text-[14px] font-bold text-[#FFD93D]">🔍 Root Cause (Why students make this mistake)</p>
              <p className="mt-1 text-[14px] leading-[1.5] text-[#E8E8E8]/90">{block.whyItHappens}</p>
            </div>
            <div className="rounded-lg border border-[#52B788]/30 bg-[#52B788]/[0.08] p-3">
              <p className="text-[14px] font-bold text-[#52B788]">✓ Correct Approach & Verification</p>
              <p className="mt-1 text-[14px] leading-[1.5] text-[#E8E8E8]">{block.correctApproach}</p>
            </div>
            {block.verificationStep && (
              <div className="flex items-center gap-2 rounded-lg bg-[#0A1828] p-2.5 text-[13px] text-[#4FD8B8] border border-[#4FD8B8]/20">
                <span>💡</span>
                <span><strong className="font-bold">Exam Self-Check: </strong>{block.verificationStep}</span>
              </div>
            )}
          </div>
        </div>
      );

    case "illustration": {
      const tricky = block.tricky;
      const edge = tricky ? "border-[#FF6B6B]/40" : "border-[#4FD8B8]/30";
      const headBg = tricky ? "bg-[#FF6B6B]/15 border-[#FF6B6B]/25" : "bg-[#4FD8B8]/15 border-[#4FD8B8]/20";
      const headText = tricky ? "text-[#FF6B6B]" : "text-[#4FD8B8]";
      return (
        <div className={`overflow-hidden rounded-xl border ${edge} bg-[#0F2340] shadow-md`}>
          <div className={`flex flex-wrap items-center gap-2 border-b px-4 py-3 ${headBg}`}>
            <span className="text-base leading-none">{tricky ? "🧩" : "✎"}</span>
            <span className={`text-[12px] font-extrabold uppercase tracking-[0.15em] ${headText}`}>
              {tricky ? "Tricky / Conceptual Example" : "Solved Example"}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.08] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white/75">
              {block.level}
            </span>
            {block.concept && (
              <span className="rounded-full border border-[#4FD8B8]/30 bg-[#4FD8B8]/15 px-2.5 py-0.5 text-[10px] font-bold text-[#4FD8B8]">
                ◦ {block.concept}
              </span>
            )}
            <ExamTags exams={block.exams} />
          </div>
          <div className="p-4 sm:p-5">
            <div className="flex gap-2.5">
              <span className="mt-0.5 shrink-0 text-xs font-black text-[#4FD8B8]">Q</span>
              <p className="text-[15px] sm:text-[16px] font-bold leading-relaxed text-white">{block.question}</p>
            </div>

            {block.thinking && (
              <div className="mt-3 rounded-lg border border-[#A8E8D8]/20 bg-[#0A1828]/70 p-3 text-[14px] leading-relaxed text-[#E8E8E8]">
                <span className="font-bold text-[#A8E8D8]">🎯 Approach & Strategy · </span>
                {block.thinking}
              </div>
            )}

            {block.steps && block.steps.length > 0 && (
              <ol className="mt-4 space-y-0">
                {block.steps.map((s, i) => (
                  <li key={i} className="relative flex gap-3.5 pb-4 last:pb-0">
                    {i < block.steps!.length - 1 && (
                      <span className="absolute left-[13px] top-7 h-full w-px bg-[#4FD8B8]/30" aria-hidden />
                    )}
                    <span className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#4FD8B8]/50 bg-[#0A1828] text-xs font-black text-[#4FD8B8]">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1 pt-0.5">
                      {s.label && <p className="text-[14px] font-bold text-white">{s.label}</p>}
                      <p className="text-[14px] leading-[1.5] text-[#E8E8E8]/90">{s.work}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}

            {!block.steps && block.solution && (
              <div className="mt-3 rounded-lg border border-white/10 bg-[#0A1828] p-3 text-[14px] leading-relaxed text-[#E8E8E8]">
                <span className="font-bold text-[#4FD8B8]">Solution · </span>
                {block.solution}
              </div>
            )}

            {block.answer && (
              <div className="mt-4 flex flex-wrap items-center gap-2.5 rounded-xl border border-[#90EE90]/40 bg-[#90EE90]/10 px-4 py-3 shadow-inner">
                <span className="text-[11px] font-black uppercase tracking-[0.15em] text-[#90EE90]">Final Answer</span>
                <span className="font-mono text-[16px] sm:text-[18px] font-extrabold text-[#90EE90]">{block.answer}</span>
              </div>
            )}

            {block.insight && (
              <div className="mt-3 rounded-lg border border-[#B89FFF]/30 bg-[#B89FFF]/10 p-3 text-[14px] leading-relaxed text-[#E8E8E8]">
                <span className="font-bold text-[#B89FFF]">💡 Key Insight · </span>
                {block.insight}
              </div>
            )}

            <div className="mt-3 space-y-2">
              {block.fastMethod && (
                <div className="rounded-lg border border-[#52B788]/25 bg-[#52B788]/10 p-3 text-[14px] text-[#E8E8E8]">
                  <span className="font-bold text-[#52B788]">⚡ Fast Method · </span>
                  {block.fastMethod}
                </div>
              )}
              {block.alternateMethod && (
                <div className="rounded-lg border border-[#c4b5fd]/25 bg-[#c4b5fd]/10 p-3 text-[14px] text-[#E8E8E8]">
                  <span className="font-bold text-[#c4b5fd]">🔄 Alternate Method · </span>
                  {block.alternateMethod}
                </div>
              )}
              {block.commonMistakes && block.commonMistakes.length > 0 && (
                <div className="rounded-lg border border-[#FF9500]/25 bg-[#FF9500]/10 p-3 text-[14px] text-[#E8E8E8]">
                  <span className="font-bold text-[#FF9500]">⚠️ Watch out · </span>
                  {block.commonMistakes.join(" ")}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    case "misc":
      return (
        <div className="rounded-xl border border-white/10 bg-[#0F2340] p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">Quick Application</span>
            <span className="rounded-full border border-white/15 bg-white/[0.06] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white/70">
              {block.level}
            </span>
            <ExamTags exams={block.exams} />
          </div>
          <p className="text-[14px] font-semibold leading-relaxed text-white">{block.question}</p>
          <div className="mt-2.5 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-white/10 pt-2.5 text-[14px] leading-relaxed">
            <span className="rounded-md bg-[#52B788]/20 px-2 py-1 font-mono text-[14px] font-bold text-[#90EE90]">
              {block.answer}
            </span>
            <span className="text-[#E8E8E8]">{block.explanation}</span>
          </div>
        </div>
      );

    case "revision":
      return (
        <Callout label={block.title ?? "One-Screen Revision Notes"} tone="border-[#4FD8B8]/35 bg-[#0A1828] text-white" exams={block.exams} icon="📌">
          <ul className="space-y-2">
            {block.points.map((p, i) => (
              <li key={i} className="flex gap-2.5 text-[14px] leading-[1.5] text-[#E8E8E8]">
                <span className="mt-0.5 shrink-0 text-[#4FD8B8] font-bold">▸</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Callout>
      );
  }
}

function Topic({ topic, index, defaultOpen }: { topic: NoteTopic; index: number; defaultOpen: boolean }) {
  const examples = topic.subtopics.reduce(
    (n, st) => n + st.blocks.filter((b) => b.kind === "illustration" || b.kind === "misc" || b.kind === "decoder").length,
    0,
  );
  const diagrams = topic.subtopics.reduce((n, st) => n + st.blocks.filter((b) => b.kind === "visual").length, 0);
  const trapsAndErrors = topic.subtopics.reduce(
    (n, st) => n + st.blocks.filter((b) => b.kind === "trap" || b.kind === "mistake" || b.kind === "errorAnalysis").length,
    0,
  );

  return (
    <details open={defaultOpen} className="group rounded-2xl border border-white/10 bg-[#0F2340]/40 open:border-[#4FD8B8]/40 transition-all">
      <summary className="flex cursor-pointer list-none items-center gap-3.5 p-4 sm:p-5 [&::-webkit-details-marker]:hidden">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#4FD8B8]/30 bg-[#0A1828] text-sm font-black text-[#4FD8B8]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[18px] sm:text-[22px] font-bold text-white leading-[1.3] group-open:text-[#4FD8B8] transition-colors">
            {topic.title}
          </span>
          {topic.intro && <span className="mt-1 block text-xs sm:text-sm text-[#E8E8E8]/70 leading-normal">{topic.intro}</span>}
          <span className="mt-2 flex flex-wrap gap-2">
            {examples > 0 && (
              <span className="rounded-full border border-[#52B788]/30 bg-[#52B788]/15 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-[#90EE90]">
                ✎ {examples} Worked Example{examples > 1 ? "s" : ""} & Decoder{examples > 1 ? "s" : ""}
              </span>
            )}
            {diagrams > 0 && (
              <span className="rounded-full border border-[#4FD8B8]/30 bg-[#4FD8B8]/15 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-[#4FD8B8]">
                ◈ {diagrams} Diagram{diagrams > 1 ? "s" : ""}
              </span>
            )}
            {trapsAndErrors > 0 && (
              <span className="rounded-full border border-[#FF6B6B]/30 bg-[#FF6B6B]/15 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-[#FF6B6B]">
                ⚠️ {trapsAndErrors} Exam Trap{trapsAndErrors > 1 ? "s" : ""} & Error Analysis
              </span>
            )}
          </span>
        </span>
        <span className="shrink-0 text-xl text-[#4FD8B8] transition-transform duration-200 group-open:rotate-90">›</span>
      </summary>
      <div className="space-y-6 border-t border-white/10 p-4 sm:p-6 bg-[#0A1828]/50">
        {topic.subtopics.map((st) => (
          <section key={st.id} className="space-y-3.5">
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#A8E8D8] border-l-2 border-[#4FD8B8] pl-2.5 py-0.5">
              <span>{st.title}</span>
            </h4>
            <div className="space-y-4">
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
  const examples = (stats.byKind.get("illustration") ?? 0) + (stats.byKind.get("misc") ?? 0) + (stats.byKind.get("decoder") ?? 0);
  const diagrams = stats.byKind.get("visual") ?? 0;
  const traps = (stats.byKind.get("trap") ?? 0) + (stats.byKind.get("mistake") ?? 0) + (stats.byKind.get("errorAnalysis") ?? 0);

  return (
    <div className="space-y-4 text-[#E8E8E8]">
      {/* Derived summary header — exact design system colors */}
      <div className="flex flex-wrap items-center gap-2.5 rounded-xl border border-white/10 bg-[#0F2340] px-4 py-3 text-xs sm:text-sm shadow-md">
        <span className="rounded-full border border-[#4FD8B8]/40 bg-[#4FD8B8]/20 px-3 py-1 font-extrabold text-white">
          {exam} Edition
        </span>
        <span className="font-bold text-white">{stats.topics} Topics</span>
        <span className="text-white/25">•</span>
        <span className="font-semibold text-[#90EE90]">{examples} Worked Examples & Decoders</span>
        <span className="text-white/25">•</span>
        <span className="font-semibold text-[#4FD8B8]">{diagrams} Visual Notes</span>
        {traps > 0 && (
          <>
            <span className="text-white/25">•</span>
            <span className="font-semibold text-[#FF6B6B]">{traps} Exam Traps / Error Analysis</span>
          </>
        )}
      </div>

      {scoped.topics.map((t, i) => <Topic key={t.id} topic={t} index={i} defaultOpen={i === 0} />)}

      {/* Chapter revision sheet */}
      <div className="rounded-2xl border border-[#4FD8B8]/35 bg-[#0F2340] p-5 sm:p-6 shadow-xl">
        <div className="mb-4 flex items-center gap-2.5 border-b border-[#4FD8B8]/20 pb-3">
          <span className="text-xl">📌</span>
          <h4 className="text-base sm:text-lg font-extrabold tracking-wide text-white">
            One-Screen Revision Sheet · {notes.title}
          </h4>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {scoped.chapterRevision.map((p, i) => (
            <li key={i} className="flex gap-2.5 rounded-lg border border-white/5 bg-[#0A1828]/60 p-3 text-[14px] leading-[1.5] text-[#E8E8E8]">
              <span className="mt-0.5 shrink-0 text-[#4FD8B8] font-bold">▸</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
