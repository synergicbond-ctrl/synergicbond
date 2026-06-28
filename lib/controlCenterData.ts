import { createClient } from "@/lib/supabase/server";
import type {
  ControlCenterProgress,
  ExamReadiness,
  NextAction,
  WeakTopicInsight,
} from "@/lib/controlCenterTypes";

// Real progress payload for the homepage Control Center.
// Returns null for guests (not logged in) so the UI can fall back to the demo numbers.
// Client-safe types/constants live in controlCenterTypes.ts.

const TOTAL_CHAPTERS = 33; // keep in sync with the dashboard

function titleCase(slug: string): string {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function pct(n: number): number {
  return Math.max(0, Math.min(100, Math.round(n)));
}

export async function fetchControlCenterProgress(): Promise<ControlCenterProgress | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const [
    { data: profile },
    { data: xp },
    { data: exams },
    { data: sessions },
    { data: saved },
    { data: mistakes },
  ] = await Promise.all([
    supabase.from("profiles").select("full_name").eq("id", user.id).maybeSingle(),
    supabase
      .from("user_xp")
      .select("xp, xp_level, streak, last_active")
      .eq("user_id", user.id)
      .maybeSingle(),
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

  const name =
    profile?.full_name || user.email?.split("@")[0] || "Student";

  // ---- Learn Progress: chapters touched (saved + studied) ----
  const studiedChapters = new Set(
    (sessions || []).map((s) => s.chapter_id).filter(Boolean)
  );
  for (const s of saved || []) {
    if (s.chapter_id) studiedChapters.add(s.chapter_id);
  }
  const learnPct = pct((studiedChapters.size / TOTAL_CHAPTERS) * 100);

  const lastSession = [...(sessions || [])].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )[0];
  const learnLast = lastSession?.chapter_id
    ? titleCase(lastSession.chapter_id)
    : studiedChapters.size
    ? `${studiedChapters.size} chapters in progress`
    : "Start your first chapter";

  // ---- Practice Progress: average exam accuracy ----
  const accuracyOf = (rows: typeof exams) =>
    rows && rows.length
      ? rows.reduce((sum, e) => sum + (e.score / e.total) * 100, 0) / rows.length
      : 0;
  const practicePct = pct(accuracyOf(exams));

  const lastExam = [...(exams || [])].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )[0];
  const practiceLast = lastExam
    ? `${lastExam.exam_name} — ${lastExam.score}/${lastExam.total}`
    : "No tests taken yet";

  // ---- AI Lab / Momentum: XP progress toward next level ----
  const xpVal = xp?.xp ?? 0;
  const level = xp?.xp_level ?? 1;
  const streak = xp?.streak ?? 0;
  const aiLabPct = pct(xpVal % 100); // progress within the current level
  const aiLabLast =
    xpVal > 0
      ? `Level ${level} · ${streak}-day streak · ${xpVal} XP`
      : "Earn XP by learning & solving";

  // ---- Exam Intelligence: per-exam readiness + shared weak topics ----
  const mistakeFreq: Record<string, number> = {};
  for (const m of mistakes || []) {
    if (m.chapter_id)
      mistakeFreq[m.chapter_id] = (mistakeFreq[m.chapter_id] || 0) + 1;
  }
  // pre-sorted, fully-computed weak-topic insights (SSOT — UI does no mapping)
  const topWeak: WeakTopicInsight[] = Object.entries(mistakeFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([slug, count]) => {
      const impact: WeakTopicInsight["impact"] =
        count >= 3 ? "high" : count === 2 ? "medium" : "low";
      const recommendation =
        impact === "high"
          ? "Revise + 15 MCQs"
          : impact === "medium"
          ? "10 MCQs today"
          : "Quick review";
      return { name: titleCase(slug), impact, recommendation };
    });

  const overallAccuracy = accuracyOf(exams);
  const examKeys = ["neet", "jee", "olympiad", "gate"];
  const examMap: Record<string, ExamReadiness> = {};
  for (const key of examKeys) {
    const specific = (exams || []).filter((e) =>
      e.exam_name?.toLowerCase().includes(key)
    );
    const readiness = specific.length
      ? pct(accuracyOf(specific))
      : pct(overallAccuracy);
    examMap[key] = { readiness, weak: topWeak };
  }

  // ---- Next Action Engine: rank what the student should do right now ----
  const nextActions: NextAction[] = [];
  const examsTaken = exams?.length ?? 0;

  // 1. Revise the most-missed topic (highest impact)
  if (topWeak.length) {
    nextActions.push({
      label: `Revise ${topWeak[0].name}`,
      reason: "Your most-missed topic — high impact",
      href: "/vault",
      icon: "revise",
      tone: "#F87171",
    });
  }

  // 2. Practice — driven by accuracy / whether any test exists
  if (examsTaken === 0) {
    nextActions.push({
      label: "Take your first quiz",
      reason: "Find your weak spots in 10 questions",
      href: "/quiz",
      icon: "quiz",
      tone: "#00BBF9",
    });
  } else if (overallAccuracy < 60) {
    nextActions.push({
      label: "Take a focused 10-MCQ quiz",
      reason: `Accuracy is ${pct(overallAccuracy)}% — let's lift it`,
      href: "/quiz",
      icon: "quiz",
      tone: "#00BBF9",
    });
  }

  // 3. Continue learning where progress is thin
  if (learnPct < 80 && lastSession?.chapter_id) {
    nextActions.push({
      label: `Continue: ${titleCase(lastSession.chapter_id)}`,
      reason: "Pick up where you left off",
      href: "/vault",
      icon: "learn",
      tone: "#00F5D4",
    });
  } else if (learnPct < 30) {
    nextActions.push({
      label: "Start a core chapter",
      reason: "Build your foundation in the Knowledge Vault",
      href: "/vault",
      icon: "learn",
      tone: "#00F5D4",
    });
  }

  // 4. Streak / inactivity nudge
  const today = new Date().toISOString().split("T")[0];
  const activeToday = (xp?.last_active ?? "") === today;
  if (!activeToday) {
    nextActions.push({
      label: streak > 0 ? `Keep your ${streak}-day streak alive` : "Start a daily streak",
      reason: "A 5-minute daily challenge counts",
      href: "/quiz",
      icon: "streak",
      tone: "#FBBF24",
    });
  }

  // 5. Always offer a mock as a fallback
  nextActions.push({
    label: "Start a 15-min mock",
    reason: "Simulate real exam pressure",
    href: "/exam",
    icon: "mock",
    tone: "#9B5DE5",
  });

  return {
    name,
    learn: { pct: learnPct, last: learnLast },
    practice: { pct: practicePct, last: practiceLast },
    aiLab: { pct: aiLabPct, last: aiLabLast },
    exams: examMap,
    nextActions: nextActions.slice(0, 4),
  };
}
