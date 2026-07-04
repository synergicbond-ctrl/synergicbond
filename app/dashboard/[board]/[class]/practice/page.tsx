import Link from "next/link";
import { notFound } from "next/navigation";
import { BOARDS, CLASSES, getBoard, getClass } from "@/lib/boardDashboard";
import { getCbseChapters, classNumber } from "@/lib/cbse/syllabus";
import PracticeClient from "@/components/board/PracticeClient";

// /dashboard/[board]/[class]/practice — board Practice Problems. Objective types
// serve real verified questions with non-repetition; subjective types are
// AI-generated + AI-graded. Static shell; per-user served-set is fetched client-side.

export function generateStaticParams() {
  return BOARDS.flatMap((b) => CLASSES.map((c) => ({ board: b.slug, class: c.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
  const b = getBoard(board); const c = getClass(cls);
  return b && c ? { title: `${b.name} ${c.name} — Practice Problems` } : {};
}

export default async function PracticePage({
  params, searchParams,
}: {
  params: Promise<{ board: string; class: string }>;
  searchParams: Promise<{ chapter?: string }>;
}) {
  const { board, class: cls } = await params;
  const { chapter } = await searchParams;
  const b = getBoard(board); const c = getClass(cls);
  if (!b || !c) notFound();

  const base = `/dashboard/${b.slug}/${c.slug}`;
  const chapters = getCbseChapters(classNumber(c.slug));

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-amber-950/20 to-[#0B1220] px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-4 text-sm text-white/45">
            <Link href={base} className="hover:text-white">{b.name} {c.name}</Link>
            <span className="mx-1.5">/</span>
            <Link href={`${base}/full-syllabus`} className="hover:text-white">Full Syllabus</Link>
            <span className="mx-1.5">/</span><span className="text-white/80">Practice</span>
          </nav>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Practice Problems</h1>
          <p className="mt-2 max-w-2xl text-white/55">
            All eight board question types. Objective questions come from the verified bank and never repeat until you reset; 2/3/5-mark, case-based, competency and HOTS are AI-generated and AI-graded.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-6 py-8">
        <PracticeClient base={base} cls={c.slug} chapters={chapters} initialChapterId={chapter} />
      </div>
    </main>
  );
}
