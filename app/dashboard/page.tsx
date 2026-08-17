import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getActiveProgramContext, portalDestinations } from "@/lib/portal/activeProgram";
import { getAllUserAnswers } from "@/lib/attempts/store";
import { buildAnalytics } from "@/lib/attempts/analytics";
import { getNotesChapter } from "@/lib/notesEngine";
import GuestDashboardPreview from "@/components/dashboard/GuestDashboardPreview";
import ReviseTodayCard from "@/components/dashboard/ReviseTodayCard";
import {
  ArrowRight, BookOpen, Bot, ClipboardList, GraduationCap,
  History, Activity, Target, CreditCard, Sparkles,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// /dashboard — Authenticated homepage (Portal Reorganisation pass).
//
// Answers ONE question: "What should I do next?" — via exactly five blocks:
//   1. Continue Learning   (primary card)
//   2. Revise Today        (real due-count from the SM-2 store — client card)
//   3. Practice Now        (real weak-topic recommendation or honest empty)
//   4. Current Program     (active program + access + syllabus/subscription)
//   5. Compact portal nav  (Learn · Practice · Tests · Revision · Progress · AI Tools)
//
// Every number rendered is read from a real store (study_sessions,
// attempt_answers, SM-2 card state). Where no data exists the card says so —
// no simulated XP, streaks, hours, accuracy or readiness anywhere.
// ─────────────────────────────────────────────────────────────────────────────

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Public/guest view — the signed-out experience is unchanged.
  if (!user) return <GuestDashboardPreview />;

  const [{ data: profile }, ctx] = await Promise.all([
    supabase.from("profiles").select("full_name").eq("id", user.id).maybeSingle(),
    getActiveProgramContext(),
  ]);
  const dest = portalDestinations(ctx);
  const studentName = profile?.full_name || user.email?.split("@")[0] || "Student";
  const active = ctx.activeProgram;

  // ── Continue Learning — last real study session, if any ───────────────────
  const { data: lastSessions } = await supabase
    .from("study_sessions")
    .select("chapter_id, started_at")
    .eq("user_id", user.id)
    .order("started_at", { ascending: false })
    .limit(5);
  const lastChapterId = lastSessions?.find((s) => s.chapter_id)?.chapter_id as string | undefined;
  const lastChapter = lastChapterId ? getNotesChapter(lastChapterId) : undefined;
  const continueHref = lastChapter ? `/notes/${lastChapter.id}` : dest.learn;

  // ── Practice Now — real weak-topic recommendation only ────────────────────
  let weakTopic: { topic: string; accuracy: number } | null = null;
  const { data: answers } = await getAllUserAnswers(1000);
  if (answers && answers.length > 0) {
    const report = buildAnalytics(answers);
    if (report.hasData && report.weakTopics.length > 0) {
      weakTopic = { topic: report.weakTopics[0].topic, accuracy: report.weakTopics[0].accuracy };
    }
  }

  const accessLabel =
    ctx.activeProgramAccessSource === "owner-admin" ? "Owner/Admin all-access"
    : ctx.activeProgramAccessSource === "all-access" ? "Pro all-access"
    : ctx.activeProgramAccessSource === "purchase" ? "Active subscription"
    : "Free workspace";

  const syllabusHref = active
    ? active.key.includes(":") ? `${active.href}/full-syllabus` : `${active.href}/syllabus`
    : null;

  const portalNav = [
    { href: dest.learn,    label: "Learn",    icon: BookOpen,      desc: "Notes · syllabus · tools" },
    { href: dest.practice, label: "Practice", icon: Target,        desc: "PYQs · topic practice" },
    { href: dest.tests,    label: "Tests",    icon: ClipboardList, desc: "Chapter · mock · history" },
    { href: dest.revision, label: "Revision", icon: History,       desc: "Queue · decks · mistakes" },
    { href: dest.progress, label: "Progress", icon: Activity,      desc: "Mastery · readiness · speed" },
    { href: dest.aiTools,  label: "AI Tools", icon: Bot,           desc: "Tutor · notes · planner" },
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-8 text-[var(--foreground)] md:p-8">
      <div className="mx-auto max-w-5xl space-y-5">

        <header className="flex flex-wrap items-end justify-between gap-2 border-b border-[var(--border)] pb-5">
          <div>
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.34em] text-[var(--text-muted)]">Student command centre</p>
            <h1 className="font-display text-3xl font-black tracking-tight sm:text-4xl">Welcome back, {studentName}</h1>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              {active ? <>Studying <span className="font-semibold text-[var(--accent)]">{active.name}</span></> : "Your free chemistry workspace"}
            </p>
          </div>
        </header>

        {/* 1 ── CONTINUE LEARNING */}
        <section className="rounded-lg border border-[var(--accent)]/30 bg-[var(--surface)] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent)]">Continue Learning</p>
              {lastChapter ? (
                <>
                  <h2 className="mt-1 truncate text-xl font-black sm:text-2xl">{lastChapter.title}</h2>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Your most recent study session{active ? ` · ${active.name}` : ""} — pick up where you left off.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="mt-1 text-xl font-black sm:text-2xl">Start your first chapter</h2>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    No study history yet — open Chapter Notes and begin{active ? ` your ${active.name} preparation` : ""}.
                  </p>
                </>
              )}
            </div>
            <Link
              href={continueHref}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-black text-[var(--background)] transition hover:opacity-90"
            >
              {lastChapter ? "Continue" : "Start learning"} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          {/* 2 ── REVISE TODAY — real SM-2 due count (device-local store) */}
          <ReviseTodayCard />

          {/* 3 ── PRACTICE NOW — real recommendation or honest empty state */}
          <section className="flex flex-col rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <h3 className="flex items-center gap-2 text-lg font-black">
              <Target className="h-5 w-5 text-[var(--accent)]" /> Practice Now
            </h3>
            {weakTopic ? (
              <>
                <p className="mt-2 flex-1 text-sm text-[var(--text-muted)]">
                  Your weakest topic so far is{" "}
                  <span className="font-bold text-[var(--foreground)]">{weakTopic.topic}</span>{" "}
                  ({weakTopic.accuracy}% accuracy) — targeted PYQ practice is the fastest fix.
                </p>
                <Link href={dest.practice} className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-2 text-xs font-bold text-[var(--accent)] transition hover:bg-[var(--accent)]/15">
                  Practise now <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </>
            ) : (
              <>
                <p className="mt-2 flex-1 text-sm text-[var(--text-muted)]">
                  Choose a topic to practise — recommendations appear here once you have answered enough questions.
                </p>
                <Link href={dest.practice} className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-2 text-xs font-bold text-[var(--accent)] transition hover:bg-[var(--accent)]/15">
                  Choose a topic <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </>
            )}
          </section>
        </div>

        {/* 4 ── CURRENT PROGRAM */}
        <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-2)]">
                <GraduationCap className="h-5 w-5 text-[var(--accent)]" />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)]">Current program</p>
                {active ? (
                  <p className="truncate font-black">
                    {active.name}
                    <span className="ml-2 rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/10 px-2 py-0.5 text-[10px] font-bold text-[var(--accent)]">{active.category}</span>
                  </p>
                ) : (
                  <p className="font-black">Free workspace</p>
                )}
                <p className="mt-0.5 flex items-center gap-1 text-xs text-[var(--text-muted)]">
                  <Sparkles className="h-3 w-3 text-[var(--accent)]" /> {accessLabel}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {syllabusHref && (
                <Link href={syllabusHref} className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-2 text-xs font-bold text-[var(--text-muted)] transition hover:border-[var(--accent)]/40">
                  View Syllabus
                </Link>
              )}
              {ctx.canSwitchPrograms && (
                <Link href="/dashboard/programs" className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-2 text-xs font-bold text-[var(--text-muted)] transition hover:border-[var(--accent)]/40">
                  Change Program
                </Link>
              )}
              {active ? (
                <Link href="/dashboard/subscription" className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-2 text-xs font-bold text-[var(--text-muted)] transition hover:border-[var(--accent)]/40">
                  <CreditCard className="h-3.5 w-3.5" /> Manage Subscription
                </Link>
              ) : (
                <Link href="/programs" className="rounded-lg bg-[var(--accent)] px-3.5 py-2 text-xs font-black text-[var(--background)] transition hover:opacity-90">
                  Explore Programs
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* 5 ── COMPACT PORTAL NAVIGATION */}
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {portalNav.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="group flex flex-col rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:-translate-y-0.5 hover:border-[var(--accent)]/30"
              >
                <Icon className="h-5 w-5 text-[var(--accent)]" />
                <p className="mt-2 text-sm font-bold">{item.label}</p>
                <p className="mt-0.5 text-[11px] leading-tight text-[var(--text-muted)]">{item.desc}</p>
              </Link>
            );
          })}
        </section>

      </div>
    </main>
  );
}
