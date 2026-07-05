import Link from "next/link";
import { masterSyllabus } from "@/lib/masterSyllabus/all";

// ─────────────────────────────────────────────────────────────────────────────
// Shared, SSOT-driven syllabus renderer (Syllabus Display Integration).
//
// Filters lib/masterSyllabus by exam tag(s) and renders the detailed official
// syllabus: chapter → branch → exam tags → difficulty/hours → syllabus points
// (the chapter's concepts, whose text comes from the official exam PDFs) →
// linked platform resources. Server component; expand/collapse uses native
// <details> so it ships zero client JS and stays fast on mobile.
//
// Counts are always derived — never hardcoded.
// ─────────────────────────────────────────────────────────────────────────────

// Minimal consumption shape of the master-syllabus literals (physical/organic
// are untyped literals; inorganic is typed — this covers both).
interface SyllabusChapter {
  id: string;
  title: string;
  category: string;
  difficulty: number;
  estimatedHours: number;
  exams: string[];
  concepts: { id: string; title: string; description?: string }[];
}

const CHAPTERS = masterSyllabus as unknown as SyllabusChapter[];

const BRANCH_META: Record<string, { label: string; icon: string; tone: string }> = {
  physical: { label: "Physical Chemistry", icon: "⚗️", tone: "text-cyan-300 border-cyan-400/30 bg-cyan-500/10" },
  organic: { label: "Organic Chemistry", icon: "🧬", tone: "text-purple-300 border-purple-400/30 bg-purple-500/10" },
  inorganic: { label: "Inorganic Chemistry", icon: "🧪", tone: "text-blue-300 border-blue-400/30 bg-blue-500/10" },
};

const RESOURCE_LINKS = [
  { label: "📖 Notes", href: "/notes" },
  { label: "🧮 Formula Cards", href: "/formula-cards" },
  { label: "🎯 PYQs", href: "/pyq" },
  { label: "🧪 Tests", href: "/tests" },
  { label: "📸 Snap & Solve", href: "/snap-solve" },
] as const;

export function examChapters(exams: string[]): SyllabusChapter[] {
  return CHAPTERS.filter((c) => c.exams.some((e) => exams.includes(e)));
}

function ChapterSyllabusCard({ chapter }: { chapter: SyllabusChapter }) {
  return (
    <details className="group rounded-xl border border-white/[0.08] bg-white/[0.03] open:bg-white/[0.05]">
      <summary className="flex cursor-pointer list-none items-center gap-3 px-3.5 py-3 [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-bold text-white">{chapter.title}</span>
          {/* Program isolation: never print other programs' exam tags here. */}
          <span className="mt-0.5 block text-[11px] text-white/45">
            D{chapter.difficulty} · ~{chapter.estimatedHours}h · {chapter.concepts.length} syllabus points
          </span>
        </span>
        <span className="shrink-0 text-white/40 transition group-open:rotate-90">›</span>
      </summary>
      <div className="border-t border-white/[0.06] px-3.5 py-3">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-white/35">Official syllabus</p>
        <ul className="space-y-2">
          {chapter.concepts.map((c) => (
            <li key={c.id} className="text-[13px] leading-relaxed">
              <span className="font-semibold text-white/90">{c.title}</span>
              {c.description && <span className="text-white/55"> — {c.description}</span>}
            </li>
          ))}
        </ul>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Link
            href={`/chapter/${chapter.id}`}
            className="rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-bold text-cyan-300 transition hover:bg-cyan-500/20"
          >
            Open chapter →
          </Link>
          {RESOURCE_LINKS.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/60 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              {r.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}

export default function ExamSyllabus({
  exams,
  heading,
  blurb,
}: {
  /** Exam tag(s) to include, e.g. ["NEET"] or ["JEE MAIN", "JEE ADVANCED"]. */
  exams: string[];
  heading?: string;
  blurb?: string;
}) {
  const chapters = examChapters(exams);
  const totalHours = chapters.reduce((s, c) => s + c.estimatedHours, 0);
  const branches = (["physical", "organic", "inorganic"] as const)
    .map((b) => ({ ...BRANCH_META[b], chapters: chapters.filter((c) => c.category === b) }))
    .filter((b) => b.chapters.length > 0);

  return (
    <section>
      {heading && <h2 className="text-2xl font-bold mb-1">{heading}</h2>}
      <p className="text-sm text-zinc-500 mb-5">
        {blurb ? `${blurb} · ` : ""}
        {chapters.length} chapters · ~{totalHours} study hours · from the official syllabus
      </p>
      <div className="grid gap-5 md:grid-cols-3">
        {branches.map((b) => (
          <div key={b.label}>
            <div className="mb-2.5 flex items-center gap-2">
              <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${b.tone}`}>
                {b.icon} {b.label}
              </span>
              <span className="text-[11px] text-white/35">{b.chapters.length}</span>
            </div>
            <div className="space-y-2">
              {b.chapters.map((c) => (
                <ChapterSyllabusCard key={c.id} chapter={c} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
