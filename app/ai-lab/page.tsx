import AILabHub from "@/components/ai-lab/AILabHub";
import { NOTES_CHAPTERS } from "@/lib/notesEngine";
import { isFreeChapter } from "@/lib/freeChapters";
import { getChapterGraph } from "@/lib/knowledge/graph";
import { createClient } from "@/lib/supabase/server";
import { isProActive } from "@/lib/subscription";

export const metadata = {
  title: "AI Lab — SYNERGIC BOND",
  description:
    "Snap & Solve, AI Tutor, Doubt Solver, Study Planner and Revision Generator — every AI-assisted chemistry tool in one place.",
};

export const dynamic = "force-dynamic";

export default async function AILabPage() {
  // The AI Lab's revision generator is client-interactive, but its source data
  // must be authorized on the server first. Never import the Notes Engine into
  // the client component: that would ship premium note bodies to free visitors.
  let hasPremiumAccess = false;
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) hasPremiumAccess = await isProActive(supabase, user.id);
  } catch {
    // Missing/unavailable auth must keep the client payload on the free subset.
  }

  const availableNotes = hasPremiumAccess
    ? NOTES_CHAPTERS
    : NOTES_CHAPTERS.filter((chapter) => isFreeChapter(chapter.id));
  const revisionChapters = availableNotes.map((chapter) => ({
    id: chapter.id,
    title: chapter.title,
    revisionNotes: chapter.revisionNotes,
    graphNodes: getChapterGraph(chapter.id)?.nodes ?? [],
  }));

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 md:py-12">
        <AILabHub revisionChapters={revisionChapters} />
      </div>
    </main>
  );
}
