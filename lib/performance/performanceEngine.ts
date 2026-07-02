import { createClient } from "@/lib/supabase/server";
import type {
  ActivityItem,
  PerformanceData,
  ReadinessEntry,
  RevisionItem,
  StrongTopic,
  WeakTopic,
} from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Week 10–11 — Performance Engine (server-only)
//
// Reuses the SAME Supabase tables the Control Center / dashboard already read
// (exam_results, study_sessions, saved_chapters, mistakes) — no new tables, no
// new schemas. Every number is computed from real rows; when a signal has no
// data the field is empty/null and the UI shows an honest empty state.
// Returns null for guests so the page can fall back to platform-level stats.
//
// Calculation rules (kept simple and transparent):
//   • Exam readiness  = average of score/total over that exam's real results.
//   • Weak topics     = chapters ranked by recorded mistake count.
//   • Strong topics   = studied chapters with ZERO recorded mistakes,
//                       ranked by session count.
//   • Revision queue  = mistake chapters, most recent mistake first.
//   • Recent activity = merged exam_results + study_sessions, newest first.
// ─────────────────────────────────────────────────────────────────────────────

const TOTAL_CHAPTERS = 33; // keep in sync with the dashboard / control center

function titleCase(slug: string): string {
  return slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function pct(n: number): number {
  return Math.max(0, Math.min(100, Math.round(n)));
}

export async function fetchPerformanceData(): Promise<PerformanceData | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const [{ data: profile }, { data: exams }, { data: sessions }, { data: saved }, { data: mistakes }] =
    await Promise.all([
      supabase.from("profiles").select("full_name").eq("id", user.id).maybeSingle(),
      supabase
        .from("exam_results")
        .select("exam_name, score, total, created_at")
        .eq("user_id", user.id),
      supabase
        .from("study_sessions")
        .select("chapter_id, minutes, created_at")
        .eq("user_id", user.id),
      supabase.from("saved_chapters").select("chapter_id").eq("user_id", user.id),
      supabase
        .from("mistakes")
        .select("chapter_id, created_at")
        .eq("user_id", user.id),
    ]);

  const name = profile?.full_name || user.email?.split("@")[0] || "Student";

  // ── Exam Readiness — only from real, matching results (no fallback numbers) ──
  const accuracyOf = (rows: NonNullable<typeof exams>) =>
    rows.length
      ? rows.reduce((sum, e) => sum + (e.score / e.total) * 100, 0) / rows.length
      : null;

  const readiness: ReadinessEntry[] = [
    { key: "neet", label: "NEET" },
    { key: "jee", label: "JEE" },
  ].map(({ key, label }) => {
    const matching = (exams || []).filter((e) => e.exam_name?.toLowerCase().includes(key));
    const acc = accuracyOf(matching);
    return { exam: label, accuracy: acc === null ? null : pct(acc), testsTaken: matching.length };
  });
  const overall = accuracyOf(exams || []);
  readiness.push({
    exam: "Overall",
    accuracy: overall === null ? null : pct(overall),
    testsTaken: exams?.length ?? 0,
  });

  // ── Weak Topics — mistake frequency per chapter ──
  const mistakeFreq: Record<string, number> = {};
  const lastMistake: Record<string, string> = {};
  for (const m of mistakes || []) {
    if (!m.chapter_id) continue;
    mistakeFreq[m.chapter_id] = (mistakeFreq[m.chapter_id] || 0) + 1;
    if (!lastMistake[m.chapter_id] || m.created_at > lastMistake[m.chapter_id]) {
      lastMistake[m.chapter_id] = m.created_at;
    }
  }
  const weakTopics: WeakTopic[] = Object.entries(mistakeFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([slug, count]) => ({ chapter: titleCase(slug), mistakes: count }));

  // ── Strong Topics — studied chapters with zero recorded mistakes ──
  const sessionFreq: Record<string, number> = {};
  for (const s of sessions || []) {
    if (s.chapter_id) sessionFreq[s.chapter_id] = (sessionFreq[s.chapter_id] || 0) + 1;
  }
  const strongTopics: StrongTopic[] = Object.entries(sessionFreq)
    .filter(([slug]) => !mistakeFreq[slug])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([slug, count]) => ({ chapter: titleCase(slug), sessions: count }));

  // ── Revision Queue — mistake chapters, most recent first ──
  const revisionQueue: RevisionItem[] = Object.entries(lastMistake)
    .sort((a, b) => b[1].localeCompare(a[1]))
    .slice(0, 6)
    .map(([slug, at]) => ({ chapter: titleCase(slug), lastMistakeAt: at }));

  // ── Recent Activity — real tests + study sessions merged, newest first ──
  const activity: ActivityItem[] = [
    ...(exams || []).map((e): ActivityItem => ({
      kind: "test",
      label: e.exam_name,
      detail: `Scored ${e.score}/${e.total}`,
      at: e.created_at,
    })),
    ...(sessions || []).map((s): ActivityItem => ({
      kind: "study",
      label: s.chapter_id ? titleCase(s.chapter_id) : "Study session",
      detail: `${s.minutes} min studied`,
      at: s.created_at,
    })),
  ]
    .sort((a, b) => b.at.localeCompare(a.at))
    .slice(0, 8);

  // ── Progress Summary — chapters touched (studied + saved), tests, minutes ──
  const touched = new Set(Object.keys(sessionFreq));
  for (const s of saved || []) {
    if (s.chapter_id) touched.add(s.chapter_id);
  }
  const studyMinutes = (sessions || []).reduce((sum, s) => sum + (s.minutes || 0), 0);

  return {
    name,
    readiness,
    weakTopics,
    strongTopics,
    revisionQueue,
    recentActivity: activity,
    summary: {
      chaptersStudied: touched.size,
      totalChapters: TOTAL_CHAPTERS,
      testsCompleted: exams?.length ?? 0,
      studyMinutes,
      pyqsAttempted: null, // no table records PYQ attempts yet — never fabricated
    },
  };
}
