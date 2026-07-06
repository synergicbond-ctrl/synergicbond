import { createClient } from "@/lib/supabase/server";
import { masterSyllabus } from "@/lib/masterSyllabus/all";
import { getUserEntitlements } from "@/lib/access/entitlements";
import { getRole, isPrivileged } from "@/lib/auth/roles";
import { COMING_SOON_PROGRAM_KEYS } from "@/lib/subscription";
import GuestDashboardPreview from "@/components/dashboard/GuestDashboardPreview";
import MyProgramsGrid from "@/components/dashboard/MyProgramsGrid";
import Link from "next/link";
import { 
  Sparkles, BookOpen, FileText, ClipboardList, Search, Award, PenTool, 
  HelpCircle, Activity, Users, User, Flame, Clock, Target, ArrowRight, 
  BookOpenCheck, CheckCircle2, GraduationCap
} from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Guest view fallback
  if (!user) {
    return <GuestDashboardPreview />;
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  const { data: exams } = await supabase
    .from("exam_results")
    .select("*")
    .eq("user_id", user.id);

  const { data: sessions } = await supabase
    .from("study_sessions")
    .select("*")
    .eq("user_id", user.id);

  const { data: saved } = await supabase
    .from("saved_chapters")
    .select("*")
    .eq("user_id", user.id);

  const { data: mistakes } = await supabase
    .from("mistakes")
    .select("*")
    .eq("user_id", user.id);

  const studentName = profile?.full_name || user.email?.split("@")[0] || "Student";
  const classStandard = profile?.class_standard ? `Class ${profile.class_standard}` : "Class 11/12 Target";
  const examTarget = profile?.board_program || "JEE / NEET / Boards";

  // Entitlements & Programs resolve
  const [entitlements, role] = await Promise.all([
    getUserEntitlements(),
    getRole(supabase, user.id),
  ]);
  const privileged = isPrivileged({ id: user.id, role });
  
  // Resolve active programs
  const activeProgramKeys = Array.from(entitlements.keys);
  const activeProgramsDisplay = activeProgramKeys.length > 0 
    ? activeProgramKeys.map((k: string) => k.toUpperCase().replace(/-/g, " ")).join(", ")
    : "Free Chemistry Tier";

  const subscriptionLabel = privileged
    ? `${role === "owner" ? "Owner" : "Admin"} All-Access`
    : entitlements.isPro
      ? "Pro All-Access"
      : activeProgramKeys.length > 0
        ? `${activeProgramKeys.length} Active Program(s)`
        : "Free Tier";

  // Metrics calculation
  const averageAccuracy = exams?.length
    ? Math.round(exams.reduce((sum, exam) => sum + (exam.score / exam.total) * 100, 0) / exams.length)
    : 0;

  const totalStudyHours = sessions?.length
    ? Math.round(sessions.reduce((sum, s) => sum + s.minutes, 0) / 60)
    : 0;

  const chaptersCompleted = saved?.length || 0;
  const streakDays = sessions?.length || 0;

  const revisionChapters = [...new Set((mistakes || []).map(m => m.chapter_id))];

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-4 py-8 md:p-8 selection:bg-cyan-500/30">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* ── HEADER CARD: Welcome & Target Info ────────────────────────── */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111827] p-6 md:p-8 backdrop-blur-xl shadow-[0_0_60px_-20px_rgba(34,211,238,0.12)]">
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />
          </div>
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold border border-cyan-500/20">
                <Sparkles className="h-3 w-3 animate-pulse" /> Chemistry OS v2.0
              </span>
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                Welcome back, {studentName}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60">
                <span className="font-semibold text-white/80">{classStandard}</span>
                <span className="text-white/30">&bull;</span>
                <span className="font-semibold text-white/80">{examTarget}</span>
                <span className="text-white/30">&bull;</span>
                <span className="text-cyan-400 font-bold">{subscriptionLabel}</span>
              </div>
              <p className="text-xs text-white/40 mt-1">
                Active Programs: <span className="text-white/60 font-semibold">{activeProgramsDisplay}</span>
              </p>
            </div>
            
            {/* Quick Metrics Bar — horizontal scroll on mobile */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar bg-black/30 border border-white/[0.06] p-3 rounded-2xl md:w-auto w-full">
              <div className="text-center px-4 shrink-0">
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Streak</p>
                <p className="text-lg font-black text-orange-400 mt-1 flex items-center justify-center gap-1">
                  <Flame className="h-4 w-4 fill-orange-400/20" /> {streakDays}d
                </p>
              </div>
              <div className="h-8 w-px bg-white/10 shrink-0" />
              <div className="text-center px-4 shrink-0">
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Hours</p>
                <p className="text-lg font-black text-cyan-400 mt-1 flex items-center justify-center gap-1">
                  <Clock className="h-4 w-4" /> {totalStudyHours}h
                </p>
              </div>
              <div className="h-8 w-px bg-white/10 shrink-0" />
              <div className="text-center px-4 shrink-0">
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Accuracy</p>
                <p className="text-lg font-black text-emerald-400 mt-1 flex items-center justify-center gap-1">
                  <Target className="h-4 w-4" /> {averageAccuracy}%
                </p>
              </div>
              <div className="h-8 w-px bg-white/10 shrink-0" />
              <div className="text-center px-4 shrink-0">
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Completed</p>
                <p className="text-lg font-black text-indigo-400 mt-1 flex items-center justify-center gap-1">
                  <CheckCircle2 className="h-4 w-4" /> {chaptersCompleted}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRIMARY CTA: Start Today's Session ─────────────────────────── */}
        <Link
          href="/daily-challenge"
          className="group flex items-center justify-between w-full rounded-2xl bg-gradient-to-r from-cyan-500/20 via-sky-500/15 to-violet-500/10 border border-cyan-500/30 hover:border-cyan-400/60 hover:from-cyan-500/25 hover:via-sky-500/20 hover:to-violet-500/15 px-6 py-4 transition-all duration-200 shadow-[0_0_30px_-10px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_-8px_rgba(34,211,238,0.35)]"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-500/30">
              <Flame className="h-5 w-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm font-black text-white">Start Today&apos;s Session</p>
              <p className="text-xs text-white/50">Daily challenge · Build your streak · Track progress</p>
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-cyan-400 group-hover:translate-x-1 transition shrink-0" />
        </Link>

        {/* ── FEATURE CARD: Prominent Notes Center ──────────────────────── */}
        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#111827] to-[#0f1d3a] p-6 backdrop-blur-xl hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-200 cursor-pointer">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-white flex items-center gap-2">
                  <BookOpenCheck className="h-7 w-7 text-cyan-400" /> Premium Chemistry Notes Center
                </h2>
                <p className="text-sm text-white/60">
                  Meticulously structured, single-source-of-truth notes designed to guarantee conceptual clarity.
                </p>
              </div>
              <Link href="/notes" className="shrink-0 hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded-xl border border-cyan-500/20 transition">
                Open Notes Explorer <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              <div className="p-4 bg-black/40 border border-white/[0.06] hover:border-cyan-400/30 rounded-2xl transition space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" /> Short Notes (Revision)
                </div>
                <p className="text-xs text-white/50 leading-relaxed">
                  Compact 2–5 page summaries covering key equations, trends, and quick-recall concepts.
                </p>
              </div>
              <div className="p-4 bg-black/40 border border-white/[0.06] hover:border-cyan-400/30 rounded-2xl transition space-y-2">
                <div className="flex items-center gap-2 text-violet-300 font-bold text-sm">
                  <span className="h-2 w-2 rounded-full bg-violet-400" /> Detailed Theory Notes
                </div>
                <p className="text-xs text-white/50 leading-relaxed">
                  Full chapter syllabus depth with worked examples, detailed derivations, exception logs, and NCERT tie-ins.
                </p>
              </div>
              <div className="p-4 bg-black/40 border border-white/[0.06] hover:border-cyan-400/30 rounded-2xl transition space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Formula Sheets
                </div>
                <p className="text-xs text-white/50 leading-relaxed">
                  Pure mathematical equations, constants, and reaction parameter lists. Zero extra theory bloat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PURCHASED PROGRAMS: Chapter-wise & Full Syllabus Dashboards ── */}
        <section>
          <MyProgramsGrid activeKeys={activeProgramKeys} isPro={entitlements.isPro || privileged} />
        </section>

        {/* ── CORE grid layout: 12 key sections ──────────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* 1. Continue Learning — Tier 1 Primary */}
          <div className="rounded-3xl border border-white/[0.12] bg-[#111827] p-5 space-y-4 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 hover:border-orange-400/20 transition-all duration-200 shadow-[0_0_20px_-8px_rgba(251,146,60,0.08)]">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-400" /> Continue Learning
            </h3>
            {revisionChapters.length > 0 ? (
              <div className="space-y-3">
                <p className="text-xs text-white/50">Chapters with recent mistakes needing review:</p>
                <div className="space-y-2">
                  {revisionChapters.slice(0, 3).map((ch) => (
                    <Link key={ch} href={`/programs/jee-main/chapter/${ch}`} className="flex items-center justify-between p-3 bg-black/30 border border-white/[0.06] hover:border-orange-400/30 rounded-xl text-xs transition">
                      <span className="font-semibold truncate max-w-[180px]">{ch.replace(/-/g, " ")}</span>
                      <span className="text-orange-400 font-bold shrink-0">Review →</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-6 text-center rounded-xl bg-black/20 border border-white/[0.06] space-y-3">
                <CheckCircle2 className="h-7 w-7 text-emerald-400 mx-auto" />
                <div>
                  <p className="text-xs font-bold text-white">All caught up!</p>
                  <p className="text-[11px] text-white/40 mt-0.5">No revision items pending. Keep the streak going.</p>
                </div>
                <Link href="/daily-challenge" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/10 hover:bg-orange-500/15 border border-orange-500/20 text-orange-300 text-[11px] font-bold transition">
                  Practice Today
                </Link>
              </div>
            )}
          </div>

          {/* 2. My Programs — Tier 1 Primary */}
          <div className="rounded-3xl border border-white/[0.12] bg-[#111827] p-5 space-y-4 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 hover:border-indigo-400/20 transition-all duration-200 shadow-[0_0_20px_-8px_rgba(99,102,241,0.08)]">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-indigo-400" /> My Active Programs
            </h3>
            <div className="space-y-2">
              {activeProgramKeys.length > 0 ? (
                activeProgramKeys.map((programKey) => (
                  <Link key={programKey} href={`/programs/${programKey}`} className="flex items-center justify-between p-3 bg-black/30 border border-white/[0.06] hover:border-indigo-400/30 rounded-xl text-xs font-black uppercase transition">
                    <span>{programKey.replace(/-/g, " ")}</span>
                    <span className="text-indigo-400 font-bold shrink-0">Open Hub →</span>
                  </Link>
                ))
              ) : (
                <div className="py-6 text-center rounded-xl bg-black/20 border border-white/[0.06] space-y-3">
                  <GraduationCap className="h-7 w-7 text-indigo-400/50 mx-auto" />
                  <div>
                    <p className="text-xs font-bold text-white">No active programs yet</p>
                    <p className="text-[11px] text-white/40 mt-0.5">Unlock a program to get full chapter access.</p>
                  </div>
                  <Link href="/pricing" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-[11px] font-black transition">
                    View Programs &amp; Pricing
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* 3. Chapter-wise Learning */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#111827] p-5 space-y-4 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 hover:border-cyan-400/15 transition-all duration-200">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-cyan-400" /> Chapter-wise Learning
            </h3>
            <p className="text-xs text-white/50">
              Deep dive into single chapters, view progress logs, clear prerequisites, and verify formulas.
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/programs" className="flex items-center justify-between p-3 bg-black/30 border border-white/[0.06] hover:border-cyan-500/30 rounded-xl text-xs transition">
                <span>Select Chapter &amp; Target</span>
                <ArrowRight className="h-4 w-4 text-white/40" />
              </Link>
            </div>
          </div>

          {/* 4. Full Syllabus Dashboard */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#111827] p-5 space-y-4 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 hover:border-pink-400/15 transition-all duration-200">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-pink-400" /> Full Syllabus Dashboards
            </h3>
            <p className="text-xs text-white/50">
              Access the complete curriculum for board programs and competitive entrance exams.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/dashboard/cbse/class-12/full-syllabus" className="p-2.5 text-center bg-black/30 border border-white/[0.06] hover:border-cyan-500/20 rounded-xl text-[11px] font-bold transition hover:text-cyan-300">
                CBSE Class 12
              </Link>
              <Link href="/dashboard/icse/class-12/full-syllabus" className="p-2.5 text-center bg-black/30 border border-white/[0.06] hover:border-cyan-500/20 rounded-xl text-[11px] font-bold transition hover:text-cyan-300">
                ISC Class 12
              </Link>
              <Link href="/dashboard/cbse/class-11/full-syllabus" className="p-2.5 text-center bg-black/30 border border-white/[0.06] hover:border-cyan-500/20 rounded-xl text-[11px] font-bold transition hover:text-cyan-300">
                CBSE Class 11
              </Link>
              <Link href="/dashboard/icse/class-11/full-syllabus" className="p-2.5 text-center bg-black/30 border border-white/[0.06] hover:border-cyan-500/20 rounded-xl text-[11px] font-bold transition hover:text-cyan-300">
                ISC Class 11
              </Link>
            </div>
          </div>

          {/* 5. Notes Center Portal — Tier 1 Primary */}
          <div className="rounded-3xl border border-white/[0.12] bg-[#111827] p-5 space-y-4 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 hover:border-cyan-400/20 transition-all duration-200 shadow-[0_0_20px_-8px_rgba(34,211,238,0.08)]">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <FileText className="h-5 w-5 text-cyan-400" /> Notes Center
            </h3>
            <p className="text-xs text-white/50">
              Browse, search, and bookmark chapter summaries, handwritten formulas, and derivations.
            </p>
            <Link href="/notes" className="flex items-center justify-between p-3 bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/15 hover:border-cyan-400/40 rounded-xl text-xs font-bold text-cyan-300 transition">
              <span>Explore Chemistry Notes</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 6. Practice Center */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#111827] p-5 space-y-4 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 hover:border-emerald-400/15 transition-all duration-200">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <PenTool className="h-5 w-5 text-emerald-400" /> Practice Center
            </h3>
            <p className="text-xs text-white/50">
              Solve chapter question banks, take the daily challenge, or work on board subjective papers.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/daily-challenge" className="p-2.5 text-center bg-black/30 border border-white/[0.06] hover:border-emerald-500/30 rounded-xl text-[11px] font-bold transition text-emerald-300">
                Daily Challenge
              </Link>
              <Link href="/dashboard/cbse/class-12/practice" className="p-2.5 text-center bg-black/30 border border-white/[0.06] hover:border-emerald-500/30 rounded-xl text-[11px] font-bold transition text-emerald-300">
                Board Practice
              </Link>
            </div>
          </div>

          {/* 7. Test Center */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#111827] p-5 space-y-4 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 hover:border-purple-400/15 transition-all duration-200">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-purple-400" /> Test Center
            </h3>
            <p className="text-xs text-white/50">
              Simulate real examination conditions with time bounds, negative marking, and instant feedback.
            </p>
            <Link href="/exam" className="flex items-center justify-between p-3 bg-black/30 border border-white/[0.06] hover:border-purple-400/30 rounded-xl text-xs transition">
              <span>Launch Mock Test Engine</span>
              <ArrowRight className="h-4 w-4 text-white/40" />
            </Link>
          </div>

          {/* 8. PYQ Center */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#111827] p-5 space-y-4 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 hover:border-yellow-400/15 transition-all duration-200">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Search className="h-5 w-5 text-yellow-400" /> PYQ Center
            </h3>
            <p className="text-xs text-white/50">
              Search and filter official previous year questions from JEE Main, JEE Advanced, and NEET.
            </p>
            <Link href="/pyq" className="flex items-center justify-between p-3 bg-black/30 border border-white/[0.06] hover:border-yellow-400/30 rounded-xl text-xs transition">
              <span>Search Previous Years (PYQs)</span>
              <ArrowRight className="h-4 w-4 text-white/40" />
            </Link>
          </div>

          {/* 9. AI Tutor */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#111827] p-5 space-y-4 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 hover:border-cyan-400/15 transition-all duration-200">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-400" /> AI Coach &amp; Doubts
            </h3>
            <p className="text-xs text-white/50">
              Ask chemical questions, resolve numerical queries, or seek study roadmap guidance.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/tutor" className="p-2.5 text-center bg-black/30 border border-white/[0.06] hover:border-cyan-500/30 rounded-xl text-[11px] font-bold transition text-cyan-300">
                Ask AI Tutor
              </Link>
              <Link href="/coach" className="p-2.5 text-center bg-black/30 border border-white/[0.06] hover:border-cyan-500/30 rounded-xl text-[11px] font-bold transition text-cyan-300">
                Study Coach
              </Link>
            </div>
          </div>

          {/* 10. Performance Analytics */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#111827] p-5 space-y-4 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 hover:border-rose-400/15 transition-all duration-200">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Activity className="h-5 w-5 text-rose-400" /> Performance Analytics
            </h3>
            <p className="text-xs text-white/50">
              Track your conceptual accuracy trends, study hours distribution, and mock test reports.
            </p>
            <Link href="/analytics" className="flex items-center justify-between p-3 bg-black/30 border border-white/[0.06] hover:border-rose-400/30 rounded-xl text-xs transition">
              <span>View Analytics Report</span>
              <ArrowRight className="h-4 w-4 text-white/40" />
            </Link>
          </div>

          {/* 11. Mentorship */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#111827] p-5 space-y-4 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 hover:border-violet-400/15 transition-all duration-200">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-violet-400" /> Mentorship Desk
            </h3>
            <p className="text-xs text-white/50">
              Schedule direct doubt-clearing sessions or connect with expert educators.
            </p>
            <Link href="/dashboard/cbse/class-12/mentorship" className="flex items-center justify-between p-3 bg-black/30 border border-white/[0.06] hover:border-violet-400/30 rounded-xl text-xs transition">
              <span>Access Live Mentors</span>
              <ArrowRight className="h-4 w-4 text-white/40" />
            </Link>
          </div>

          {/* 12. Profile settings */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#111827] p-5 space-y-4 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 transition-all duration-200">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <User className="h-5 w-5 text-white/70" /> Profile Settings
            </h3>
            <p className="text-xs text-white/50">
              Update personal details, target class, target exam, or view active subscription invoices.
            </p>
            <Link href="/dashboard/profile" className="flex items-center justify-between p-3 bg-black/30 border border-white/[0.06] hover:border-white/20 rounded-xl text-xs transition">
              <span>Manage Profile &amp; Targets</span>
              <ArrowRight className="h-4 w-4 text-white/40" />
            </Link>
          </div>

        </section>

      </div>
    </main>
  );
}
