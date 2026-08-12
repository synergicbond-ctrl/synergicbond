import Link from "next/link";
import { ACCENT_BADGE, type ChapterAccent } from "@/lib/notes/chapterAccent";

export interface ChapterHeroProps {
  eyebrow: string;
  category?: string;
  title: string;
  description: string;
  backHref?: string;
  backLabel?: string;
  accent?: ChapterAccent;
}

/**
 * Shared hub-page header for /notes/* chapters: eyebrow badge, title,
 * description, optional "back to parent hub" link. Keeps typography,
 * spacing and hierarchy identical across chapters; only `accent` varies.
 * The topic/part card grid below this stays chapter-specific page content.
 */
export default function ChapterHero({
  eyebrow,
  category,
  title,
  description,
  backHref,
  backLabel,
  accent = "cyan",
}: ChapterHeroProps) {
  const badgeClass = ACCENT_BADGE[accent];

  return (
    <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-8 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="flex items-center gap-3">
          <span className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest ${badgeClass}`}>
            {eyebrow}
          </span>
          {category && <span className="text-xs font-bold text-[var(--text-muted)]">{category}</span>}
        </div>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--text-body)]">{description}</p>
      </div>
      {backHref && (
        <div className="flex items-center gap-3">
          <Link
            href={backHref}
            className="rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-bold text-[var(--foreground)] shadow-lg transition hover:bg-[var(--surface-2)] hover:text-white"
          >
            {backLabel}
          </Link>
        </div>
      )}
    </div>
  );
}