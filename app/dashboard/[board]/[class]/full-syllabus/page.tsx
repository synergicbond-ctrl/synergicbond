import Link from "next/link";
import { notFound } from "next/navigation";
import { BOARDS, CLASSES, getBoard, getClass } from "@/lib/boardDashboard";
import { CATEGORY_LABEL, type CbseCategory } from "@/lib/cbse/syllabus";
import { getBoardChapters } from "@/lib/boards";
import FullSyllabusDashboard from "@/components/dashboard/FullSyllabusDashboard";

// /dashboard/[board]/[class]/full-syllabus — Full Syllabus Dashboard.
// Whole-course tools across every chapter at once (Full Syllabus) kept distinct
// from per-chapter deep study (Chapter Wise). Every tool links to a REAL route
// scoped to this class. No fabricated content.

export function generateStaticParams() {
  return BOARDS.flatMap((b) => CLASSES.map((c) => ({ board: b.slug, class: c.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
  const b = getBoard(board); const c = getClass(cls);
  return b && c ? { title: `${b.name} ${c.name} — Full Syllabus Dashboard` } : {};
}

export default async function FullSyllabusPage({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
  const b = getBoard(board); const c = getClass(cls);
  if (!b || !c) notFound();

  const base = `/dashboard/${b.slug}/${c.slug}`;
  const chapters = getBoardChapters(b.slug, c.slug);

  return (
    <FullSyllabusDashboard
      programKey={`${b.slug}:${c.slug}`}
      programName={`${b.name} ${c.name} Chemistry`}
      programType="board"
      classLevel={c.name}
      chapters={chapters.map((ch) => ({
        id: ch.id,
        name: ch.title,
        unit: String(ch.unit),
        category: CATEGORY_LABEL[ch.category as CbseCategory] || ch.category,
      }))}
      backUrl={base}
      backLabel={`Back to ${b.name} ${c.name}`}
    />
  );
}
