import Link from "next/link";
import { notFound } from "next/navigation";
import { BOARDS, CLASSES, getBoard, getClass } from "@/lib/boardDashboard";
import { getCbseChapters, classNumber } from "@/lib/cbse/syllabus";
import CustomTestClient from "@/components/board/CustomTestClient";

// /dashboard/[board]/[class]/custom-test — Custom Test Paper Generator (Board
// Exam Engine). Objective section is real & non-repeating; optional AI
// subjective section. Static shell; per-user data is client-fetched.

export function generateStaticParams() {
  return BOARDS.flatMap((b) => CLASSES.map((c) => ({ board: b.slug, class: c.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
  const b = getBoard(board); const c = getClass(cls);
  return b && c ? { title: `${b.name} ${c.name} — Custom Test Generator` } : {};
}

export default async function CustomTestPage({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
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
            <span className="mx-1.5">/</span><span className="text-white/80">Custom Test</span>
          </nav>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Custom Test Paper Generator</h1>
          <p className="mt-2 max-w-2xl text-white/55">Pick chapters, count and difficulty. The objective section comes from the verified bank (never repeats until you reset); add an AI subjective section for board practice. Every answer feeds your analytics and predicted board score.</p>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-6 py-8">
        <CustomTestClient base={base} cls={c.slug} chapters={chapters} />
      </div>
    </main>
  );
}
