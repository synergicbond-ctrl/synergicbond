import { createClient } from "@/lib/supabase/server";
import { masterSyllabus } from "@/lib/masterSyllabus/all";
import { getUserEntitlements } from "@/lib/access/entitlements";
import { getRole, isPrivileged } from "@/lib/auth/roles";
import { COMING_SOON_PROGRAM_KEYS } from "@/lib/subscription";
import GuestDashboardPreview from "@/components/dashboard/GuestDashboardPreview";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MyPrograms, resolveOwnedPrograms } from "@/components/dashboard/MyPrograms";
import { ProfileCard } from "@/components/dashboard/ProfileCard";
import { SummaryCards } from "@/components/dashboard/SummaryCards";
import { RecentTests } from "@/components/dashboard/RecentTests";
import { WeakTopics } from "@/components/dashboard/WeakTopics";
import { QuickActions } from "@/components/dashboard/QuickActions";
import ActivityLog from "@/components/dashboard/ActivityLog";
import { CoachWidget } from "@/components/dashboard/CoachWidget";
import { RevisionQueue } from "@/components/dashboard/RevisionQueue";
import { OnboardingChecklist } from "@/components/dashboard/OnboardingChecklist";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Guests see a rich demo preview instead of a login wall
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

  const studentName =
    profile?.full_name ||
    user.email?.split("@")[0] ||
    "Student";

  // Real entitlements + role (profiles.role) — drives the My Programs section
  // and the profile summary. Owner/admin see every program as preview.
  const [entitlements, role] = await Promise.all([
    getUserEntitlements(),
    getRole(supabase, user.id),
  ]);
  const privileged = isPrivileged({ id: user.id, role });
  const ownedPrograms = resolveOwnedPrograms(entitlements.keys, {
    isOwner: privileged,
    comingSoonKeys: COMING_SOON_PROGRAM_KEYS,
  });
  const subscriptionLabel = privileged
    ? `${role === "owner" ? "Owner" : "Admin"} all-access`
    : entitlements.isPro
      ? "Pro All-Access"
      : ownedPrograms.length > 0
        ? `${ownedPrograms.length} program${ownedPrograms.length > 1 ? "s" : ""} active`
        : "Free Tier";

  const averageAccuracy =
    exams?.length
      ? Math.round(
          exams.reduce(
            (sum, exam) =>
              sum + (exam.score / exam.total) * 100,
            0
          ) / exams.length
        )
      : 0;

  const totalStudyHours =
    sessions?.length
      ? Math.round(
          sessions.reduce(
            (sum, s) => sum + s.minutes,
            0
          ) / 60
        )
      : 0;

  const summaryData = {
    chaptersCompleted: saved?.length || 0,
    totalChapters: masterSyllabus.length,
    dailyStreak: sessions?.length || 0,
    averageAccuracy,
    totalStudyHours,
  };

  const recentTests =
    exams?.map((exam) => ({
      id: String(exam.id),
      title: exam.exam_name,
      date: new Date(
        exam.created_at
      ).toLocaleDateString(),
      score: Math.round(
        (exam.score / exam.total) * 100
      ),
      passed:
        exam.score / exam.total >= 0.5,
    })) || [];


  const coachRecommendations = [
    averageAccuracy < 70
      ? "Improve quiz accuracy"
      : "Maintain current accuracy",
    "Complete 20 MCQs today",
    "Study at least 60 minutes",
    mistakes?.length
      ? `Revise ${mistakes[0].chapter_id}`
      : "No major weak topic detected",
  ];

  const revisionChapters =
    [...new Set((mistakes || []).map(m => m.chapter_id))];

  // Aggregate mistakes per chapter to compute per-chapter accuracy
  const mistakeFrequency: Record<string, number> = {};
  for (const m of mistakes || []) {
    mistakeFrequency[m.chapter_id] = (mistakeFrequency[m.chapter_id] || 0) + 1;
  }

  const weakTopics = Object.entries(mistakeFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([chapterId, mistakeCount], index) => {
      // Find actual quiz results for this chapter to compute real accuracy
      const chapterExams = exams?.filter(
        (e) => e.exam_name?.toLowerCase().includes(chapterId.replace(/-/g, " "))
      ) || [];
      const realAccuracy = chapterExams.length
        ? Math.round(
            chapterExams.reduce((sum, e) => sum + (e.score / e.total) * 100, 0) /
              chapterExams.length
          )
        : Math.max(10, Math.round(100 - (mistakeCount / (mistakeCount + 3)) * 80));

      return {
        id: String(index),
        name: chapterId.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase()),
        accuracy: realAccuracy,
        mistakeCount,
      };
    });

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8 md:p-8">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader
          studentName={studentName}
        />

        {/* ── 1 · MY PROGRAMS + PROFILE — the organizing spine ─────────────── */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3 items-start">
          <div className="lg:col-span-2">
            <MyPrograms programs={ownedPrograms} isOwner={privileged} />
          </div>
          <div>
            <h2 className="text-lg font-black mb-4">Profile</h2>
            <ProfileCard
              name={studentName}
              email={profile?.email || user.email || null}
              phone={profile?.phone ?? null}
              classStandard={profile?.class_standard ?? null}
              boardProgram={profile?.board_program ?? null}
              subscriptionLabel={subscriptionLabel}
            />
          </div>
        </div>

        {/* ── 2 · CONTINUE LEARNING ─────────────────────────────────────────── */}
        <section className="mt-10">
          <h2 className="text-lg font-black mb-4">Continue Learning</h2>

          {/* WEEK 15 — onboarding for new students, driven by real activity only.
              Hidden once the student has both studied and tested. */}
          {!((sessions?.length ?? 0) > 0 && (exams?.length ?? 0) > 0) && (
            <div className="mb-6">
              <OnboardingChecklist
                state={{
                  hasStudied: (sessions?.length ?? 0) > 0,
                  hasTested: (exams?.length ?? 0) > 0,
                  hasSaved: (saved?.length ?? 0) > 0,
                }}
              />
            </div>
          )}

          <div className="grid gap-6 lg:grid-cols-2">
            <RevisionQueue chapters={revisionChapters} />
            <CoachWidget recommendations={coachRecommendations} />
          </div>
        </section>

        {/* ── 3 · PROGRESS & PERFORMANCE ────────────────────────────────────── */}
        <section className="mt-10">
          <h2 className="text-lg font-black mb-4">Progress &amp; Performance</h2>
          <SummaryCards data={summaryData} />
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <RecentTests tests={recentTests} />
            <WeakTopics topics={weakTopics} />
          </div>
          <div className="mt-6">
            <ActivityLog />
          </div>
        </section>

        {/* ── 4 · QUICK TOOLS ───────────────────────────────────────────────── */}
        <section className="mt-10">
          <h2 className="text-lg font-black mb-4">Quick Tools</h2>
          <QuickActions />
        </section>
      </div>
    </main>
  );
}
