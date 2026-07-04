import Link from "next/link";
import { notFound } from "next/navigation";
import { BOARDS, CLASSES, getBoard, getClass } from "@/lib/boardDashboard";
import { getCbseChapters, classNumber } from "@/lib/cbse/syllabus";
import MentorshipClient from "@/components/board/MentorshipClient";

// /dashboard/[board]/[class]/mentorship — Mentorship Center. Exam countdown,
// auto-derived weekly plan, revision planner, mentor notes and progress report.

export function generateStaticParams() {
  return BOARDS.flatMap((b) => CLASSES.map((c) => ({ board: b.slug, class: c.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
  const b = getBoard(board); const c = getClass(cls);
  return b && c ? { title: `${b.name} ${c.name} — Mentorship Center` } : {};
}

export default async function MentorshipPage({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
  const b = getBoard(board); const c = getClass(cls);
  if (!b || !c) notFound();

  const base = `/dashboard/${b.slug}/${c.slug}`;
  const chapterTitles = getCbseChapters(classNumber(c.slug)).map((ch) => ch.title);

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-amber-950/20 to-[#0B1220] px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-4 text-sm text-white/45">
            <Link href={base} className="hover:text-white">{b.name} {c.name}</Link>
            <span className="mx-1.5">/</span><span className="text-white/80">Mentorship</span>
          </nav>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Mentorship Center</h1>
          <p className="mt-2 max-w-2xl text-white/55">Your exam countdown, weekly plan, revision planner, progress report and mentor notes — one place to stay on track.</p>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-6 py-8">
        <MentorshipClient base={base} cls={c.slug} chapters={chapterTitles} />
      </div>
    </main>
  );
}
