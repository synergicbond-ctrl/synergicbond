import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SummaryCards } from "@/components/dashboard/SummaryCards";
import { RecentTests } from "@/components/dashboard/RecentTests";
import { WeakTopics } from "@/components/dashboard/WeakTopics";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { CoachWidget } from "@/components/dashboard/CoachWidget";
import { RevisionQueue } from "@/components/dashboard/RevisionQueue";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/signin");
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
    totalChapters: 33,
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
    <main className="min-h-screen bg-black text-white p-8">
      <DashboardHeader
        studentName={studentName}
      />

      <div className="mt-8">
        <SummaryCards data={summaryData} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <RecentTests tests={recentTests} />
        <WeakTopics topics={weakTopics} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <CoachWidget
          recommendations={coachRecommendations}
        />

        <RevisionQueue
          chapters={revisionChapters}
        />
      </div>

      <div className="mt-8">
        <QuickActions />
      </div>
    </main>
  );
}
