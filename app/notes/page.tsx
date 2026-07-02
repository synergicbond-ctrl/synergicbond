import NotesExplorer from "@/components/notes/NotesExplorer";

export const metadata = {
  title: "Chapter Notes — SYNERGIC BOND",
  description:
    "Verified, exam-useful chemistry notes for JEE & NEET — syllabus, detailed & short notes, NCERT highlights, solved examples, derivations, common mistakes, and formula / PYQ / learn-module cross-links.",
};

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 md:py-12">
        <NotesExplorer />
      </div>
    </main>
  );
}
