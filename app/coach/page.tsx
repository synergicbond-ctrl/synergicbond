import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function CoachPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/signin");
  }

  const { data: exams } = await supabase
    .from("exam_results")
    .select("*")
    .eq("user_id", user.id);

  const { data: mistakes } = await supabase
    .from("mistakes")
    .select("*")
    .eq("user_id", user.id);

  const { data: sessions } = await supabase
    .from("study_sessions")
    .select("*")
    .eq("user_id", user.id);

  const avgScore =
    exams?.length
      ? Math.round(
          exams.reduce((s, e) => s + (e.score / e.total) * 100, 0) /
            exams.length
        )
      : 0;

  const studyHours =
    sessions?.length
      ? Math.round(
          sessions.reduce((s, x) => s + (x.minutes || 0), 0) / 60
        )
      : 0;

  const weakTopics =
    mistakes?.map((m) => m.chapter_id) || [];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-black">
        AI Coach
      </h1>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-white/10 p-6">
          <p className="text-white/50">Average Accuracy</p>
          <p className="mt-3 text-4xl font-bold">
            {avgScore}%
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 p-6">
          <p className="text-white/50">Study Hours</p>
          <p className="mt-3 text-4xl font-bold">
            {studyHours}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 p-6">
          <p className="text-white/50">Mistakes Logged</p>
          <p className="mt-3 text-4xl font-bold">
            {mistakes?.length || 0}
          </p>
        </div>

      </div>

      <div className="mt-10 rounded-2xl border border-white/10 p-6">
        <h2 className="text-2xl font-bold">
          Today's Focus
        </h2>

        <ul className="mt-4 space-y-2 text-white/70">
          {weakTopics.length ? (
            weakTopics.slice(0, 5).map((topic, idx) => (
              <li key={idx}>
                • Revise {topic}
              </li>
            ))
          ) : (
            <li>• Complete a quiz to generate recommendations</li>
          )}
        </ul>
      </div>
    </main>
  );
}
