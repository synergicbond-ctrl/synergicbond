"use client";

import { useState } from "react";
import Link from "next/link";
import { physical } from "@/lib/masterSyllabus/physical";
import { organic } from "@/lib/masterSyllabus/organic";
import { inorganic } from "@/lib/masterSyllabus/inorganic";
import { NOTES_CHAPTERS } from "@/lib/notesEngine";
import { getChapterGraph } from "@/lib/knowledge/graph";

// ─────────────────────────────────────────────────────────────────────────────
// Week 10–11 — AI Lab hub (foundation)
//
// A single entry point for the AI toolset. It does NOT add any new AI backend:
//   • Snap & Solve / AI Tutor / Doubt Solver — links to the EXISTING live
//     features (their APIs and prompts are untouched).
//   • Study Planner — deterministic, generated from the master-syllabus
//     chapter data only (difficulty + estimated hours). No AI call.
//   • Revision Generator — deterministic, generated from the Notes Engine's
//     existing revision notes + knowledge-graph links. No AI call.
//   • AI Notes — honest "Coming soon" placeholder.
// ─────────────────────────────────────────────────────────────────────────────

// Minimal consumption shape of the master-syllabus chapter literals
// (exams there are display strings like "NEET" / "JEE MAIN").
interface PlannerChapter {
  id: string;
  title: string;
  category: string;
  difficulty: number;
  estimatedHours: number;
  exams: string[];
}

const ALL_CHAPTERS = [...physical, ...organic, ...inorganic] as unknown as PlannerChapter[];

const PLANNER_EXAMS = ["NEET", "JEE MAIN", "JEE ADVANCED"] as const;
const PLANNER_HOURS = [6, 10, 14, 20] as const;

interface PlanWeek {
  week: number;
  chapters: PlannerChapter[];
  hours: number;
}

/** Deterministic plan: foundation-first (difficulty asc), packed into weeks. */
function buildPlan(exam: string, hoursPerWeek: number): PlanWeek[] {
  const chapters = ALL_CHAPTERS
    .filter((c) => c.exams.includes(exam))
    .sort((a, b) => a.difficulty - b.difficulty || a.estimatedHours - b.estimatedHours);

  const weeks: PlanWeek[] = [];
  let current: PlanWeek = { week: 1, chapters: [], hours: 0 };
  for (const c of chapters) {
    if (current.chapters.length > 0 && current.hours + c.estimatedHours > hoursPerWeek) {
      weeks.push(current);
      current = { week: current.week + 1, chapters: [], hours: 0 };
    }
    current.chapters.push(c);
    current.hours += c.estimatedHours;
  }
  if (current.chapters.length > 0) weeks.push(current);
  return weeks;
}

// ── Shared UI bits ────────────────────────────────────────────────────────────

function Badge({ tone, children }: { tone: "live" | "builtin" | "soon"; children: React.ReactNode }) {
  const cls =
    tone === "live"
      ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
      : tone === "builtin"
      ? "border-cyan-400/30 bg-cyan-500/10 text-cyan-300"
      : "border-white/15 bg-white/[0.06] text-white/55";
  return (
    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${cls}`}>
      {children}
    </span>
  );
}

function ToolCard({
  icon,
  title,
  desc,
  badge,
  href,
  onOpen,
}: {
  icon: string;
  title: string;
  desc: string;
  badge: "live" | "builtin" | "soon";
  href?: string;
  onOpen?: () => void;
}) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="text-2xl">{icon}</span>
        <Badge tone={badge}>{badge === "live" ? "Live" : badge === "builtin" ? "Built-in" : "Coming soon"}</Badge>
      </div>
      <h3 className="mt-3 text-sm font-bold text-white">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-white/50">{desc}</p>
    </>
  );
  const cls =
    "block w-full rounded-2xl border border-white/[0.08] bg-[#111827] p-4 text-left transition hover:border-cyan-400/40 hover:bg-white/[0.04]";
  if (href) {
    return <Link href={href} className={cls}>{body}</Link>;
  }
  if (onOpen) {
    return <button onClick={onOpen} className={cls}>{body}</button>;
  }
  return <div className={`${cls} cursor-default opacity-70 hover:border-white/[0.08] hover:bg-[#111827]`}>{body}</div>;
}

// ── Study Planner (deterministic, chapter data only) ──────────────────────────

function StudyPlanner() {
  const [exam, setExam] = useState<string>("NEET");
  const [hours, setHours] = useState<number>(10);
  const [plan, setPlan] = useState<PlanWeek[] | null>(null);

  return (
    <div className="space-y-4">
      <p className="text-xs text-white/50">
        Built from the master-syllabus chapter data only (difficulty & estimated hours) —
        foundation chapters first. Deterministic, no AI call. The AI-powered planner lives at{" "}
        <Link href="/study-plan" className="font-semibold text-cyan-300 hover:text-cyan-200">/study-plan</Link>.
      </p>
      <div className="flex flex-wrap gap-2">
        {PLANNER_EXAMS.map((e) => (
          <button
            key={e}
            onClick={() => { setExam(e); setPlan(null); }}
            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
              exam === e ? "border-cyan-400/50 bg-cyan-500/15 text-white" : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white/85"
            }`}
          >
            {e}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-white/50">Study hours / week:</span>
        {PLANNER_HOURS.map((h) => (
          <button
            key={h}
            onClick={() => { setHours(h); setPlan(null); }}
            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
              hours === h ? "border-cyan-400/50 bg-cyan-500/15 text-white" : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white/85"
            }`}
          >
            {h}h
          </button>
        ))}
      </div>
      <button
        onClick={() => setPlan(buildPlan(exam, hours))}
        className="rounded-xl border border-cyan-400/40 bg-cyan-500/15 px-4 py-2 text-sm font-bold text-cyan-200 transition hover:bg-cyan-500/25"
      >
        Generate plan
      </button>

      {plan && (
        <div className="space-y-3">
          {plan.map((w) => (
            <div key={w.week} className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
                Week {w.week} · ~{w.hours}h
              </p>
              <ul className="space-y-1.5">
                {w.chapters.map((c) => (
                  <li key={c.id} className="flex items-center justify-between gap-2 text-sm">
                    <span className="min-w-0 truncate font-medium text-white">{c.title}</span>
                    <span className="shrink-0 text-[11px] text-white/45">
                      {c.category} · D{c.difficulty} · {c.estimatedHours}h
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Revision Generator (Notes Engine SSOT + knowledge-graph links) ────────────

function RevisionGenerator() {
  const [chapterId, setChapterId] = useState<string | null>(null);
  const chapter = chapterId ? NOTES_CHAPTERS.find((c) => c.id === chapterId) : null;
  const graph = chapterId ? getChapterGraph(chapterId) : undefined;

  return (
    <div className="space-y-4">
      <p className="text-xs text-white/50">
        Generated from the existing verified chapter notes (revision points are hand-authored SSOT
        content, not AI output) with linked practice from the knowledge graph.
      </p>
      <div className="flex flex-wrap gap-2">
        {NOTES_CHAPTERS.map((c) => (
          <button
            key={c.id}
            onClick={() => setChapterId(c.id)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
              chapterId === c.id ? "border-cyan-400/50 bg-cyan-500/15 text-white" : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white/85"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      {chapter && (
        <div className="space-y-3">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
              🔁 {chapter.title} — rapid revision
            </p>
            <ul className="space-y-1.5">
              {chapter.revisionNotes.map((point, i) => (
                <li key={i} className="flex gap-2 text-sm text-white/80">
                  <span className="shrink-0 text-cyan-400">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          {graph && graph.nodes.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {graph.nodes.map((n) => (
                <Link
                  key={`${n.kind}-${n.refId}`}
                  href={n.href}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/70 transition hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  {n.label}{typeof n.count === "number" ? ` (${n.count})` : ""}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────

type BuiltinTool = "planner" | "revision" | null;

export default function AILabHub() {
  const [open, setOpen] = useState<BuiltinTool>(null);

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">AI Lab</p>
        <h1 className="text-3xl font-black md:text-4xl">Your Chemistry AI Toolset</h1>
        <p className="mt-2 text-sm text-white/55">
          One place for every AI-assisted tool — Snap & Solve, the tutor and doubt solver are live;
          the planner and revision generator run on verified syllabus data.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <ToolCard icon="📸" title="Snap & Solve" desc="Photograph a problem — get a verified step-by-step solution with linked notes, PYQs & practice." badge="live" href="/snap-solve" />
        <ToolCard icon="🤖" title="AI Tutor" desc="Chat with the chemistry tutor — step-by-step explanations for any concept." badge="live" href="/tutor" />
        <ToolCard icon="💬" title="Doubt Solver" desc="Type or snap a doubt and get an instant structured answer." badge="live" href="/doubt-solver" />
        <ToolCard icon="🗓️" title="Study Planner" desc="Week-by-week chapter plan built from real syllabus difficulty & hours — no fabricated pacing." badge="builtin" onOpen={() => setOpen(open === "planner" ? null : "planner")} />
        <ToolCard icon="🔁" title="Revision Generator" desc="One-tap rapid-revision sheets from the verified chapter notes, with linked tests & PYQs." badge="builtin" onOpen={() => setOpen(open === "revision" ? null : "revision")} />
        <ToolCard icon="📝" title="AI Notes" desc="Generate exam-focused notes for any topic, exam & difficulty. Verified human-authored notes stay at /notes." badge="live" href="/ai-lab/notes" />
      </div>

      {open === "planner" && (
        <section className="rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.04] p-4 md:p-5">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white/70">🗓️ Study Planner</h2>
          <StudyPlanner />
        </section>
      )}
      {open === "revision" && (
        <section className="rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.04] p-4 md:p-5">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white/70">🔁 Revision Generator</h2>
          <RevisionGenerator />
        </section>
      )}
    </div>
  );
}
