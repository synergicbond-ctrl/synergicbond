import { createClient } from "@/lib/supabase/server";

// Real progress payload for the homepage Control Center.
// Returns null for guests (not logged in) so the UI can fall back to the demo numbers.

const TOTAL_CHAPTERS = 33; // keep in sync with the dashboard

export interface CoreProgress {
  pct: number;
  last: string;
}

export interface ExamReadiness {
  readiness: number;
  weak: string[];
}

export interface ControlCenterProgress {
  name: string;
  learn: CoreProgress;
  practice: CoreProgress;
  aiLab: CoreProgress;
  /** keyed by exam id: "neet" | "jee" | "olympiad" | "gate" */
  exams: Record<string, ExamReadiness>;
}

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
      .select("xp, xp_level, streak")
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
  const topWeak = Object.entries(mistakeFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([slug]) => titleCase(slug));

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

  return {
    name,
    learn: { pct: learnPct, last: learnLast },
    practice: { pct: practicePct, last: practiceLast },
    aiLab: { pct: aiLabPct, last: aiLabLast },
    exams: examMap,
  };
}
