import Link from "next/link";
import type { ReactNode } from "react";

/**
 * UNIFIED APPLICATION SHELL
 *
 * One canonical visual architecture for all chapters and lessons.
 * Replaces: canonical.tsx, premium.tsx, SbcCourseChrome.tsx
 *
 * Required props allow chapters to configure their headers while maintaining
 * visual consistency across the entire platform.
 */

export interface ContentSection {
  id: string;
  label: string;
}

export interface AppShellConfig {
  // Chapter metadata
  discipline: string;
  chapterTitle: string;
  chapterSlug: string;
  description?: string;
  free?: boolean;

  // Navigation
  tabs?: Array<{ label: string; href: string; active?: boolean }>;

  // Lesson-specific
  lessonNumber?: string;
  lessonTitle?: string;

  // Navigation links
  prevRef?: { href: string; label: string };
  nextRef?: { href: string; label: string };
  hubRef?: { href: string; label: string };

  // Layout control
  fullWidth?: boolean;
  sidebarSections?: ContentSection[]; // For sticky TOC sidebar
  maxContentWidth?: string; // Default: 1480px

  children: ReactNode;
}

/**
 * Global AppShell — the single rendering system for all chapters.
 *
 * Visual specifications:
 * - Background: var(--background) (near-black)
 * - Text: var(--foreground) (ivory)
 * - Accents: var(--accent) (Synergic Bond gold)
 * - Borders: var(--border) (restrained)
 * - No neon glow, no giant gradients, no chapter-specific colors
 */
export function AppShell({
  discipline,
  chapterTitle,
  chapterSlug,
  description,
  free,
  tabs,
  lessonNumber,
  lessonTitle,
  prevRef,
  nextRef,
  hubRef,
  fullWidth,
  children,
}: AppShellConfig) {
  const isLesson = !!lessonNumber;
  const contentMaxWidth = fullWidth ? "100%" : "1480px";

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <AppShellStyles />

      {/* CHAPTER HEADER */}
      <header className="border-b border-[var(--border)] bg-[var(--surface)] px-6 py-8 sm:px-8">
        <div className="mx-auto max-w-[1560px]">
          {/* Breadcrumb / Discipline */}
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[var(--text-muted)]">
            {discipline}
          </div>

          {/* Chapter Title */}
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                {chapterTitle}
              </h1>
              {description && (
                <p className="mt-3 text-base leading-relaxed text-[var(--text-body)]">
                  {description}
                </p>
              )}
            </div>
            {free !== undefined && (
              <div className="flex shrink-0 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2">
                <span className="text-xs font-black uppercase tracking-widest text-[var(--text-muted)]">
                  {free ? "FREE" : "PREMIUM"}
                </span>
              </div>
            )}
          </div>

          {/* Chapter Navigation Tabs */}
          {tabs && tabs.length > 0 && (
            <nav className="flex flex-wrap gap-2">
              {tabs.map((tab, idx) => (
                <Link
                  key={idx}
                  href={tab.href}
                  className={`rounded-lg border px-4 py-2 text-sm font-bold transition ${
                    tab.active
                      ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                      : "border-[var(--border)] text-[var(--text-body)] hover:border-[var(--accent)]/50"
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* LESSON STRIP (if lesson) */}
      {isLesson && (
        <div className="border-b border-[var(--border)] bg-[var(--surface)]/50 px-6 py-3 sm:px-8">
          <div className="mx-auto flex max-w-[1560px] items-center justify-between gap-4">
            {hubRef && (
              <Link href={hubRef.href} className="text-sm font-bold text-[var(--accent)] hover:underline">
                ← {hubRef.label}
              </Link>
            )}
            {lessonNumber && (
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                {lessonNumber}
              </span>
            )}
          </div>
        </div>
      )}

      {/* CONTENT AREA */}
      <main
        className="mx-auto px-6 py-8 sm:px-8"
        style={{ maxWidth: contentMaxWidth }}
      >
        {/* Lesson Title (if present) */}
        {isLesson && lessonTitle && (
          <div className="mb-8 border-b border-[var(--border)] pb-8">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              {lessonTitle}
            </h2>
          </div>
        )}

        {/* Content */}
        <div className="space-y-8">
          {children}
        </div>
      </main>

      {/* PREVIOUS/NEXT NAVIGATION */}
      {(prevRef || nextRef) && (
        <div className="border-t border-[var(--border)] bg-[var(--surface)]/50 px-6 py-8 sm:px-8">
          <div className="mx-auto flex max-w-[1560px] items-center justify-between gap-4">
            {prevRef ? (
              <Link
                href={prevRef.href}
                className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-3 font-bold transition hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
              >
                ← {prevRef.label}
              </Link>
            ) : (
              <div />
            )}
            {nextRef ? (
              <Link
                href={nextRef.href}
                className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-3 font-bold transition hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
              >
                {nextRef.label} →
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * CSS for AppShell
 * Serves as the global styling layer for all chapters.
 */
function AppShellStyles() {
  return (
    <style>{`
      :root {
        --app-shell-transition: all 200ms ease-out;
      }

      /* Semantic token defaults (fallback) */
      :root {
        --background: #0a0e16;
        --surface: #0f1420;
        --surface-2: #141b28;
        --foreground: #e8ecf0;
        --text-body: #b8c2d1;
        --text-muted: #7a8699;
        --border: #1f2937;
        --accent: #d4af37;
        --font-display: "Georgia", serif;
        --font-sans: "Inter", system-ui, sans-serif;
        --font-mono: "Menlo", monospace;
      }

      /* Typography */
      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-display);
        font-weight: 900;
        letter-spacing: -0.01em;
        color: var(--foreground);
      }

      body {
        background: var(--background);
        color: var(--foreground);
        font-family: var(--font-sans);
      }

      /* Tables remain responsive */
      table {
        width: 100%;
        border-collapse: collapse;
      }

      td, th {
        padding: 12px;
        border: 1px solid var(--border);
        text-align: left;
      }

      th {
        background: var(--surface-2);
        font-weight: 900;
      }

      /* Code blocks */
      code {
        font-family: var(--font-mono);
        background: var(--surface-2);
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.9em;
      }

      pre {
        background: var(--surface-2);
        padding: 16px;
        border-radius: 8px;
        border: 1px solid var(--border);
        overflow-x: auto;
      }

      pre code {
        background: none;
        padding: 0;
      }

      /* Links */
      a {
        color: var(--accent);
        text-decoration: underline;
        text-decoration-color: var(--accent);
        text-underline-offset: 4px;
      }

      a:hover {
        opacity: 0.8;
      }

      /* Chemistry content (inherited from lesson components) */
      .chemistry-formula, .chemistry-reaction {
        font-family: var(--font-mono);
        white-space: nowrap;
      }
    `}</style>
  );
}
