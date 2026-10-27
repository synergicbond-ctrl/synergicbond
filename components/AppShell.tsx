import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ComfortPanel } from "@/components/chapter-ui/ComfortPanel";
import { Highlighter, HighlightsPanel } from "@/components/chapter-ui/Highlighter";
import { LessonDone } from "@/components/chapter-ui/LessonDone";
import { MobileDock } from "@/components/chapter-ui/MobileDock";
import { ModeSwitch } from "@/components/chapter-ui/ModeSwitch";
import { RailContent } from "@/components/chapter-ui/RailContent";
import { ReaderRoot } from "@/components/chapter-ui/ReaderRoot";
import { ReaderObserver } from "@/components/chapter-ui/ScrollSpy";
import { SearchButton, SearchPalette } from "@/components/chapter-ui/SearchPalette";
import { SettingsPopover } from "@/components/chapter-ui/SettingsPopover";
import { PageStrip, StickyStrip } from "@/components/chapter-ui/TopicStrip";
import styles from "@/components/chapter-ui/reader.module.css";
import type { ReaderData } from "@/components/chapter-ui/types";
import { CanonicalNotesStyles } from "@/components/notes/canonical";

/**
 * UNIFIED APPLICATION SHELL
 *
 * One canonical page architecture for every chapter and lesson. It owns the page chrome only:
 * top bar, contents rail, reading tools, search, highlights, phone dock and previous/next.
 * It never touches the lesson content passed as `children`.
 *
 * Every string the previous shell rendered (discipline, chapter title, description, FREE/PREMIUM,
 * tabs, lesson number, hub link, lesson title, previous/next labels) is still rendered.
 *
 * A chapter that has structured data (numbered topics) passes `reader` to get the chapter map, the
 * per-topic rail and chapter-wide search. Without it the rail and search use the page's own headings.
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
  sidebarSections?: ContentSection[]; // kept for compatibility; the rail is built from the page headings
  maxContentWidth?: string; // kept for compatibility

  /** optional chapter data: chapter map, topic rail, chapter-wide search */
  reader?: ReaderData;

  children: ReactNode;
}

const nn = (n: number) => String(n).padStart(2, "0");

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
  reader,
  children,
}: AppShellConfig) {
  const isLesson = !!lessonNumber;
  const chapterId = reader?.chapter.id ?? chapterSlug;
  const partIdx = reader?.part !== undefined ? reader.parts.findIndex((p) => p.part === reader.part) : -1;
  const part = reader && partIdx >= 0 ? reader.parts[partIdx] : undefined;
  const nextPart = reader && partIdx >= 0 && partIdx < reader.parts.length - 1 ? reader.parts[partIdx + 1] : undefined;
  const where = part ? `${part.groupLabel} · Part ${nn(part.part)}` : chapterTitle;

  const tabsRow =
    tabs && tabs.length > 0 ? (
      <nav className={styles.tabsRow} aria-label="Chapter sections">
        {tabs.map((tab, idx) => (
          <Link key={idx} href={tab.href} data-active={tab.active ? "1" : undefined}>
            {tab.label}
          </Link>
        ))}
      </nav>
    ) : null;

  return (
    <ReaderRoot chapterId={chapterId}>
      <AppShellStyles />
      <CanonicalNotesStyles />

      {reader && isLesson ? <StickyStrip chapterId={chapterId} segments={reader.segments} where={where} /> : null}
      {!reader && isLesson ? <PageStrip where={`${chapterTitle} · ${lessonNumber}`} /> : null}

      {/* TOP BAR: where you are, plus search and reading settings on every page */}
      <div className={styles.topbar}>
        <div className={styles.crumbs}>
          <span className={styles.disc}>{discipline}</span>
          <h1>{chapterTitle}</h1>
          {free !== undefined && <span className={styles.badge}>{free ? "FREE" : "PREMIUM"}</span>}
        </div>
        <div className={styles.topActions}>
          <SearchButton className={styles.search} label="Search" />
          <SettingsPopover chapterId={chapterId} />
        </div>
      </div>

      {isLesson ? (
        <div className={styles.shell} style={part ? ({ "--h": part.hue } as CSSProperties) : undefined}>
          <aside className={styles.rail} aria-label="Contents">
            <RailContent chapterId={chapterId} part={part} nextPart={nextPart} />
          </aside>

          <main className={styles.main} data-reader-content="" data-wide={fullWidth ? "1" : undefined}>
            <div className={styles.lessonBar}>
              {hubRef ? <Link href={hubRef.href}>← {hubRef.label}</Link> : <span />}
              <span>{lessonNumber}</span>
            </div>
            {lessonTitle && <h2 className={styles.lessonTitle}>{lessonTitle}</h2>}
            {tabsRow}
            {description && (
              <details className={styles.about}>
                <summary>About this chapter</summary>
                <p>{description}</p>
              </details>
            )}
            <ModeSwitch />
            <div className={styles.content}>{children}</div>
            <LessonDone chapterId={chapterId} />
            {(prevRef || nextRef) && (
              <nav className={styles.pager} aria-label="Previous and next lesson">
                {prevRef ? <Link href={prevRef.href}>← {prevRef.label}</Link> : <span />}
                {nextRef ? (
                  <Link href={nextRef.href} data-next="1">
                    {nextRef.label} →
                  </Link>
                ) : (
                  <span />
                )}
              </nav>
            )}
          </main>

          <aside className={styles.side} aria-label="Reading tools">
            <ComfortPanel />
            <HighlightsPanel chapterId={chapterId} />
          </aside>
        </div>
      ) : (
        <main className={styles.hubShell} data-reader-content="" style={fullWidth ? { maxWidth: "100%" } : undefined}>
          {description && <p className={styles.intro}>{description}</p>}
          {tabsRow}
          <div className={styles.content} style={{ marginTop: "1.5rem" }}>
            {children}
          </div>
          {(prevRef || nextRef) && (
            <nav className={styles.pager} aria-label="Previous and next">
              {prevRef ? <Link href={prevRef.href}>← {prevRef.label}</Link> : <span />}
              {nextRef ? (
                <Link href={nextRef.href} data-next="1">
                  {nextRef.label} →
                </Link>
              ) : (
                <span />
              )}
            </nav>
          )}
        </main>
      )}

      {isLesson ? (
        <MobileDock
          chapterId={chapterId}
          hubHref={hubRef?.href}
          part={part}
          nextPart={nextPart}
          next={nextRef}
        />
      ) : null}
      <SearchPalette items={reader?.searchItems} chapterTitle={chapterTitle} />
      <Highlighter chapterId={chapterId} />
      <ReaderObserver chapterId={chapterId} initialTopic={part?.topics[0]?.number ?? null} />
    </ReaderRoot>
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
