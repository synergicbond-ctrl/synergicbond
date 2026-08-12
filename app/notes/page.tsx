import NotesExplorer from "@/components/notes/NotesExplorer";
import { NOTES_CHAPTERS } from "@/lib/notesEngine";
import { isFreeChapter } from "@/lib/freeChapters";
import { createClient } from "@/lib/supabase/server";
import { isProActive } from "@/lib/subscription";

export const metadata = {
  title: "Chapter Notes — SYNERGIC BOND",
  description:
    "Verified, exam-useful chemistry notes for JEE & NEET — syllabus, detailed & short notes, NCERT highlights, solved examples, derivations, common mistakes, and formula / PYQ / learn-module cross-links.",
};

export const dynamic = "force-dynamic";

export default async function NotesPage() {
  // Authorize before serializing props into the client Notes Explorer. The
  // explorer receives only free note bodies for guests/free accounts; premium
  // bodies never enter their HTML, RSC payload, or JavaScript bundle.
  let hasPremiumAccess = false;
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) hasPremiumAccess = await isProActive(supabase, user.id);
  } catch {
    // An unavailable auth service must fail closed for premium note payloads.
  }

  const freeChapters = NOTES_CHAPTERS.filter((chapter) => isFreeChapter(chapter.id));
  const chapters = hasPremiumAccess ? NOTES_CHAPTERS : freeChapters;
  const restrictedChapterIds = hasPremiumAccess
    ? []
    : NOTES_CHAPTERS.filter((chapter) => !isFreeChapter(chapter.id)).map((chapter) => chapter.id);

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 md:py-12">
        <NotesExplorer
          chapters={chapters}
          restrictedChapterIds={restrictedChapterIds}
          freeNoteCount={freeChapters.length}
          totalNoteCount={NOTES_CHAPTERS.length}
        />
      </div>
    </main>
  );
}