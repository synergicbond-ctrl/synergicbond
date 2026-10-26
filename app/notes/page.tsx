import NotesExplorer from "@/components/notes/NotesExplorer";
import { NOTES_CHAPTERS } from "@/lib/notesEngine";
import { isFreeChapter } from "@/lib/freeChapters";
import { createClient } from "@/lib/supabase/server";
import { isProActive } from "@/lib/subscription";
import Link from "next/link";

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
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 md:pt-12">
        <Link
          href="/learn/jee-advanced/organic-course"
          className="block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--accent)]"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">JEE Advanced · Organic Chemistry</p>
          <h2 className="mt-1 text-xl font-bold">Organic Chemistry: complete 23-chapter course</h2>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            IUPAC to biomolecules and practical organic: theory, drawn structures, mechanism animations and
            about 8,000 solved practice problems. Available with a JEE Advanced plan.
          </p>
          <span className="mt-3 inline-block text-sm font-semibold">Open the course →</span>
        </Link>
      </div>
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