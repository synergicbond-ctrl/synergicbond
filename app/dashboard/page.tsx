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
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* ── HEADER CARD: Welcome & Target Info ────────────────────────── */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111827] p-6 md:p-8 backdrop-blur-xl">
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
            
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-black/30 border border-white/[0.06] p-4 rounded-2xl md:w-auto w-full">
              <div className="text-center px-2">
                <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Streak</p>
                <p className="text-lg font-black text-orange-400 mt-1 flex items-center justify-center gap-1">
                  <Flame className="h-4.5 w-4.5 fill-orange-400/20" /> {streakDays}d
                </p>
              </div>
              <div className="text-center px-2">
                <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Hours</p>
                <p className="text-lg font-black text-cyan-400 mt-1 flex items-center justify-center gap-1">
                  <Clock className="h-4.5 w-4.5" /> {totalStudyHours}h
                </p>
              </div>
              <div className="text-center px-2">
                <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Accuracy</p>
                <p className="text-lg font-black text-emerald-400 mt-1 flex items-center justify-center gap-1">
                  <Target className="h-4.5 w-4.5" /> {averageAccuracy}%
                </p>
              </div>
              <div className="text-center px-2">
                <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Completed</p>
                <p className="text-lg font-black text-indigo-400 mt-1 flex items-center justify-center gap-1">
                  <CheckCircle2 className="h-4.5 w-4.5" /> {chaptersCompleted}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURE CARD: Prominent Notes Center (PHASE 1 Requirement) ──────── */}
        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#111827] to-[#0f1d3a] p-6 backdrop-blur-xl">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-white flex items-center gap-2">
                  <BookOpenCheck className="h-7 w-7 text-cyan-400" /> Premium Chemistry Notes Center
                </h2>
                <p className="text-sm text-white/60">
                  Access meticulously structured, single-source-of-truth notes designed to guarantee conceptual clarity.
                </p>
              </div>
              <Link href="/notes" className="shrink-0 hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded-xl border border-cyan-500/20 transition">
                Open Notes Explorer <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            
            {/* Notes Types Split Grid (PHASE 2 Separators preview) */}
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
        <section className="mt-8">
          <MyProgramsGrid activeKeys={activeProgramKeys} isPro={entitlements.isPro || privileged} />
        </section>

        {/* ── CORE grid layout: 12 key sections ──────────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Continue Learning */}
          <div className="rounded-3xl border border-white/10 bg-[#111827] p-5 space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-400" /> Continue Learning
            </h3>
            {revisionChapters.length > 0 ? (
              <div className="space-y-3">
                <p className="text-xs text-white/50">Chapters with recent mistakes needing review:</p>
                <div className="space-y-2">
                  {revisionChapters.slice(0, 3).map((ch) => (
                    <Link key={ch} href={`/programs/jee-main/chapter/${ch}`} className="flex items-center justify-between p-3 bg-black/30 border border-white/[0.06] hover:border-cyan-500/30 rounded-xl text-xs transition">
                      <span className="font-semibold truncate max-w-[180px]">{ch.replace(/-/g, " ")}</span>
                      <span className="text-cyan-400 font-bold">Review &rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-4 text-center rounded-xl bg-black/20 border border-dashed border-white/10">
                <p className="text-xs text-white/40 font-bold">Concept coverage solid. No revision items pending!</p>
              </div>
            )}
          </div>

          {/* 2. My Programs */}
          <div className="rounded-3xl border border-white/10 bg-[#111827] p-5 space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-indigo-400" /> My Active Programs
            </h3>
            <div className="space-y-2">
              {activeProgramKeys.length > 0 ? (
                activeProgramKeys.map((programKey) => (
                  <Link key={programKey} href={`/programs/${programKey}`} className="flex items-center justify-between p-3 bg-black/30 border border-white/[0.06] hover:border-cyan-500/30 rounded-xl text-xs font-black uppercase transition">
                    <span>{programKey.replace(/-/g, " ")}</span>
                    <span className="text-cyan-400">Open Hub &rarr;</span>
                  </Link>
                ))
              ) : (
                <div className="p-4 text-center rounded-xl bg-black/20 border border-dashed border-white/10 space-y-2">
                  <p className="text-xs text-white/40">No active program subscriptions</p>
                  <Link href="/pricing" className="inline-block px-3 py-1.5 bg-cyan-500 text-black text-xs font-bold rounded-lg hover:bg-cyan-400 transition">
                    View Programs & Pricing
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* 3. Chapter-wise Learning */}
          <div className="rounded-3xl border border-white/10 bg-[#111827] p-5 space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-cyan-400" /> Chapter-wise Learning
            </h3>
            <p className="text-xs text-white/50">
              Deep dive into single chapters, view progress logs, clear prerequisites, and verify formulas.
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/programs" className="flex items-center justify-between p-3 bg-black/30 border border-white/[0.06] hover:border-cyan-500/30 rounded-xl text-xs transition">
                <span>Select Chapter & Target</span>
                <ArrowRight className="h-4 w-4 text-white/40" />
              </Link>
            </div>
          </div>

          {/* 4. Full Syllabus Dashboard */}
          <div className="rounded-3xl border border-white/10 bg-[#111827] p-5 space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-pink-400" /> Full Syllabus Dashboards
            </h3>
            <p className="text-xs text-white/50">
              Access the complete unit curriculum lists for board programs and competitive entrance exams.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/dashboard/cbse/class-12/full-syllabus" className="p-2.5 text-center bg-black/30 border border-white/[0.06] hover:border-cyan-500/20 rounded-xl text-[11px] font-bold transition">
                CBSE Class 12
              </Link>
              <Link href="/dashboard/icse/class-12/full-syllabus" className="p-2.5 text-center bg-black/30 border border-white/[0.06] hover:border-cyan-500/20 rounded-xl text-[11px] font-bold transition">
                ISC Class 12
              </Link>
            </div>
          </div>

          {/* 5. Notes Center Portal */}
          <div className="rounded-3xl border border-white/10 bg-[#111827] p-5 space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <FileText className="h-5 w-5 text-cyan-400" /> Notes Center
            </h3>
            <p className="text-xs text-white/50">
              Browse, search, and bookmark chapter summaries, handwritten formulas, and derivations.
            </p>
            <Link href="/notes" className="flex items-center justify-between p-3 bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 rounded-xl text-xs font-bold text-cyan-300 transition">
              <span>Explore Chemistry Notes</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 6. Practice Center */}
          <div className="rounded-3xl border border-white/10 bg-[#111827] p-5 space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <PenTool className="h-5 w-5 text-emerald-400" /> Practice Center
            </h3>
            <p className="text-xs text-white/50">
              Solve chapter question banks, take the daily challenge, or work on board subjective papers.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/daily-challenge" className="p-2.5 text-center bg-black/30 border border-white/[0.06] hover:border-emerald-500/20 rounded-xl text-[11px] font-bold transition text-emerald-300">
                Daily Challenge
              </Link>
              <Link href="/dashboard/cbse/class-12/practice" className="p-2.5 text-center bg-black/30 border border-white/[0.06] hover:border-emerald-500/20 rounded-xl text-[11px] font-bold transition text-emerald-300">
                Board Practice
              </Link>
            </div>
          </div>

          {/* 7. Test Center */}
          <div className="rounded-3xl border border-white/10 bg-[#111827] p-5 space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-purple-400" /> Test Center
            </h3>
            <p className="text-xs text-white/50">
              Simulate real examination conditions with time bounds, negative marking, and instant feedback.
            </p>
            <Link href="/exam" className="flex items-center justify-between p-3 bg-black/30 border border-white/[0.06] hover:border-cyan-500/30 rounded-xl text-xs transition">
              <span>Launch Mock Test Engine</span>
              <ArrowRight className="h-4 w-4 text-white/40" />
            </Link>
          </div>

          {/* 8. PYQ Center */}
          <div className="rounded-3xl border border-white/10 bg-[#111827] p-5 space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Search className="h-5 w-5 text-yellow-400" /> PYQ Center
            </h3>
            <p className="text-xs text-white/50">
              Search and filter official previous year questions from JEE Main, JEE Advanced, and NEET.
            </p>
            <Link href="/pyq" className="flex items-center justify-between p-3 bg-black/30 border border-white/[0.06] hover:border-cyan-500/30 rounded-xl text-xs transition">
              <span>Search Previous Years (PYQs)</span>
              <ArrowRight className="h-4 w-4 text-white/40" />
            </Link>
          </div>

          {/* 9. AI Tutor */}
          <div className="rounded-3xl border border-white/10 bg-[#111827] p-5 space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-400" /> AI Coach &amp; Doubts
            </h3>
            <p className="text-xs text-white/50">
              Ask chemical questions, resolve numerical queries, or seek study roadmap guidance.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/tutor" className="p-2.5 text-center bg-black/30 border border-white/[0.06] hover:border-cyan-500/20 rounded-xl text-[11px] font-bold transition text-cyan-300">
                Ask AI Tutor
              </Link>
              <Link href="/coach" className="p-2.5 text-center bg-black/30 border border-white/[0.06] hover:border-cyan-500/20 rounded-xl text-[11px] font-bold transition text-cyan-300">
                Study Coach
              </Link>
            </div>
          </div>

          {/* 10. Performance Analytics */}
          <div className="rounded-3xl border border-white/10 bg-[#111827] p-5 space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Activity className="h-5 w-5 text-rose-400" /> Performance Analytics
            </h3>
            <p className="text-xs text-white/50">
              Track your conceptual accuracy trends, study hours distribution, and mock test reports.
            </p>
            <Link href="/analytics" className="flex items-center justify-between p-3 bg-black/30 border border-white/[0.06] hover:border-cyan-500/30 rounded-xl text-xs transition">
              <span>View Analytics Report</span>
              <ArrowRight className="h-4 w-4 text-white/40" />
            </Link>
          </div>

          {/* 11. Mentorship */}
          <div className="rounded-3xl border border-white/10 bg-[#111827] p-5 space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-violet-400" /> Mentorship Desk
            </h3>
            <p className="text-xs text-white/50">
              Schedule direct doubt-clearing sessions or connect with expert educators.
            </p>
            <Link href="/dashboard/cbse/class-12/mentorship" className="flex items-center justify-between p-3 bg-black/30 border border-white/[0.06] hover:border-cyan-500/30 rounded-xl text-xs transition">
              <span>Access Live Mentors</span>
              <ArrowRight className="h-4 w-4 text-white/40" />
            </Link>
          </div>

          {/* 12. Profile settings */}
          <div className="rounded-3xl border border-white/10 bg-[#111827] p-5 space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <User className="h-5 w-5 text-white/70" /> Profile Settings
            </h3>
            <p className="text-xs text-white/50">
              Update personal details, target class, target exam, or view active subscription invoices.
            </p>
            <Link href="/dashboard/profile" className="flex items-center justify-between p-3 bg-black/30 border border-white/[0.06] hover:border-cyan-500/30 rounded-xl text-xs transition">
              <span>Manage Profile & Targets</span>
              <ArrowRight className="h-4 w-4 text-white/40" />
            </Link>
          </div>

        </section>

      </div>
    </main>
  );
}
