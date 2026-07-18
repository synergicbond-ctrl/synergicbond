import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Canonical JEE Advanced Notes Design System.
//
// The single shared UI language for every authored chapter — extracted from
// the Periodic Table master notes (app/learn/periodic-table/
// PeriodicTableMasterNotesV2.tsx), the visual source of truth. Chapters keep
// their own real content structure (tab count, topic groups, lesson counts);
// only the shell, tabs, lesson cards and pager come from here.
//
// Server-component safe: no hooks, no state — pure Links + CSS. Presentation
// only; never import content or access-control code here.
// ─────────────────────────────────────────────────────────────────────────────

export const NT = {
  bg: "#0a1622",
  bgGrid: "#0d1c2b",
  surface: "#122232",
  surface2: "#182b3e",
  border: "#24405c",
  borderSoft: "#1c3049",
  text: "#eef3f8",
  textDim: "#c3d1dd",
  textFaint: "#91a9bc",
  gold: "#e8b84b",
  cyan: "#5fd4ea",
  serif: "Georgia, 'Iowan Old Style', 'Times New Roman', serif",
  mono: "'SFMono-Regular',Consolas,'Liberation Mono',monospace",
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
} as const;

export interface ChapterTab {
  label: string;
  href: string;
  active?: boolean;
}

export interface LessonRef {
  href: string;
  number: string;
  title: string;
  /** Optional real metadata line (source pages, topic tag…). Never fabricated. */
  meta?: string;
}

export interface LessonGroup {
  label: string;
  lessons: LessonRef[];
}

const CANONICAL_CSS = `
.sbnShell { min-height: 100vh; background: ${NT.bg}; color: ${NT.text}; }
.sbnHeader {
  width: 100%;
  border-bottom: 1px solid ${NT.border};
  background: linear-gradient(180deg, ${NT.surface2}, ${NT.bg});
  padding: clamp(18px, 3vw, 34px) clamp(14px, 3vw, 42px);
}
.sbnHeaderInner { max-width: 1560px; margin: 0 auto; }
.sbnHeaderRow {
  display: flex; flex-wrap: wrap; align-items: baseline;
  justify-content: space-between; gap: 10px; margin-bottom: 18px;
}
.sbnKicker {
  color: ${NT.text}; font-family: ${NT.serif};
  font-size: clamp(1.35rem, 2.4vw, 2rem); font-weight: 900;
}
.sbnSubtitle {
  margin-top: 4px; color: ${NT.cyan}; font-family: ${NT.sans};
  font-size: clamp(.95rem, 1.4vw, 1.08rem); font-weight: 750;
}
.sbnHeaderTag {
  color: ${NT.gold}; font-family: ${NT.mono}; font-size: 12px;
  font-weight: 900; letter-spacing: .1em; text-transform: uppercase;
}
.sbnTabs { display: flex; flex-wrap: wrap; gap: 9px; align-items: center; }
.sbnTab {
  display: inline-block;
  border: 1px solid ${NT.border};
  border-left: 4px solid ${NT.cyan};
  border-radius: 13px;
  padding: 10px 13px;
  background: rgba(18,34,50,.9);
  color: ${NT.textDim};
  font-family: ${NT.sans};
  font-size: clamp(.82rem, 1.1vw, .96rem);
  font-weight: 700;
  line-height: 1.25;
  text-decoration: none;
  cursor: pointer;
}
.sbnTab:hover { color: ${NT.text}; border-color: ${NT.cyan}; }
.sbnTabActive {
  border-color: ${NT.gold};
  border-left-color: ${NT.gold};
  background: rgba(232,184,75,.15);
  color: ${NT.gold};
  font-weight: 900;
  box-shadow: 0 8px 24px rgba(232,184,75,.12);
}
.sbnTabActive:hover { color: ${NT.gold}; border-color: ${NT.gold}; }
.sbnMain { width: 100%; min-width: 0; max-width: 1500px; margin: 0 auto; padding: 28px 24px 92px; }
.sbnMainBleed { width: 100%; min-width: 0; }
/* Contain content-level horizontal overflow at the page edge (clip keeps
   position:sticky working, unlike hidden); equations/tables scroll inside. */
.sbnMain, .sbnMainBleed { overflow-x: clip; }
.sbnShell .katex-display { overflow-x: auto; overflow-y: hidden; max-width: 100%; }
.sbnShell table { max-width: 100%; }
.sbnPartChrome { width: 100%; min-width: 0; max-width: 1500px; margin: 0 auto; padding: 22px 24px; }
.sbnLessonGroup { margin: 34px 0 10px; }
.sbnLessonGroupLabel {
  color: ${NT.gold}; font-family: ${NT.serif}; font-size: 22px; font-weight: 700;
  border-bottom: 2px solid ${NT.border}; padding-bottom: 10px; margin-bottom: 16px;
  scroll-margin-top: 90px;
}
.sbnLessonGrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
.sbnLessonCard {
  display: flex; flex-direction: column; gap: 8px; min-width: 0;
  background: ${NT.surface};
  border: 1px solid ${NT.border};
  border-left: 4px solid ${NT.cyan};
  border-radius: 13px;
  padding: 16px 18px;
  text-decoration: none;
  transition: border-color .15s ease, background .15s ease;
}
.sbnLessonCard:hover { border-color: ${NT.cyan}; background: ${NT.surface2}; }
.sbnLessonCardCurrent {
  border-color: ${NT.gold}; border-left-color: ${NT.gold};
  background: rgba(232,184,75,.12);
  box-shadow: 0 8px 24px rgba(232,184,75,.12);
}
.sbnLessonCardCurrent:hover { border-color: ${NT.gold}; background: rgba(232,184,75,.16); }
.sbnLessonNumber {
  color: ${NT.cyan}; font-family: ${NT.mono}; font-size: 11.5px;
  font-weight: 900; letter-spacing: .14em; text-transform: uppercase;
}
.sbnLessonCardCurrent .sbnLessonNumber { color: ${NT.gold}; }
.sbnLessonTitle {
  color: ${NT.text}; font-family: ${NT.sans}; font-size: 15px;
  font-weight: 800; line-height: 1.4;
}
.sbnLessonMeta { color: ${NT.textFaint}; font-family: ${NT.sans}; font-size: 12px; font-weight: 600; }
.sbnPager {
  display: grid; grid-template-columns: 1fr auto 1fr; gap: 12px; align-items: stretch;
  border-top: 1px solid ${NT.border}; margin-top: 40px; padding-top: 22px;
}
.sbnPagerCard {
  display: flex; flex-direction: column; gap: 6px; min-width: 0; justify-content: center;
  border: 1px solid rgba(95,212,234,.5); border-radius: 12px;
  padding: 12px 15px;
  background: linear-gradient(135deg, ${NT.surface2}, ${NT.surface});
  text-decoration: none;
  box-shadow: 0 10px 28px rgba(0,0,0,.18);
}
.sbnPagerCard:hover { border-color: ${NT.cyan}; }
.sbnPagerNext { border-color: rgba(232,184,75,.5); text-align: right; }
.sbnPagerNext:hover { border-color: ${NT.gold}; }
.sbnPagerLabel {
  font-family: ${NT.mono}; font-size: 11px; font-weight: 900;
  letter-spacing: .12em; text-transform: uppercase; color: ${NT.cyan};
}
.sbnPagerNext .sbnPagerLabel { color: ${NT.gold}; }
.sbnPagerTitle { color: ${NT.text}; font-family: ${NT.sans}; font-size: 13.5px; font-weight: 800; line-height: 1.35; }
.sbnPagerHub {
  display: flex; align-items: center; justify-content: center;
  border: 1px solid ${NT.border}; border-radius: 12px;
  padding: 12px 15px;
  background: linear-gradient(135deg, ${NT.surface2}, ${NT.surface});
  color: ${NT.text}; font-family: ${NT.sans}; font-size: 13px; font-weight: 800;
  text-decoration: none; box-shadow: 0 10px 28px rgba(0,0,0,.18);
}
.sbnPagerHub:hover { border-color: ${NT.textFaint}; }
.sbnPagerSpacer { border: 1px dashed ${NT.borderSoft}; border-radius: 12px; opacity: .35; }
@media (max-width: 900px) {
  .sbnLessonGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sbnMain { padding: 20px 15px 78px; }
  .sbnTabs { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 6px; -webkit-overflow-scrolling: touch; scrollbar-width: thin; }
  .sbnTab { flex: 0 0 auto; white-space: nowrap; }
}
@media (max-width: 560px) {
  .sbnLessonGrid { grid-template-columns: 1fr; }
  .sbnMain { padding-inline: 13px; }
  .sbnPager { grid-template-columns: 1fr; }
  .sbnPagerNext { text-align: left; }
  .sbnPagerSpacer { display: none; }
}
`;

export function CanonicalNotesStyles() {
  return <style>{CANONICAL_CSS}</style>;
}

/**
 * Canonical chapter shell: dark navy page, gradient header with chapter
 * kicker + subtitle, gold section tag, and the rectangular rounded top tab
 * navigation (cyan inactive / gold active) from the Periodic Table reference.
 */
export function ChapterShell({
  kicker,
  subtitle,
  headerTag = "Top chapter navigation",
  tabs,
  children,
  style,
  bleed,
}: {
  /** Big serif line, e.g. "JEE Physical Chemistry". */
  kicker: string;
  /** Cyan chapter line, e.g. "Thermodynamics". */
  subtitle: string;
  headerTag?: string;
  tabs?: ChapterTab[];
  children: ReactNode;
  style?: CSSProperties;
  /**
   * Full-bleed mode for part pages whose content components carry their own
   * page-width layout; chrome (strip/pager) then uses .sbnPartChrome.
   */
  bleed?: boolean;
}) {
  return (
    <div className="sbnShell" style={style}>
      <CanonicalNotesStyles />
      <header className="sbnHeader">
        <div className="sbnHeaderInner">
          <div className="sbnHeaderRow">
            <div>
              <div className="sbnKicker">{kicker}</div>
              <div className="sbnSubtitle">{subtitle}</div>
            </div>
            <div className="sbnHeaderTag">{headerTag}</div>
          </div>
          {tabs && tabs.length > 0 && <ChapterTopTabs tabs={tabs} />}
        </div>
      </header>
      <main className={bleed ? "sbnMainBleed" : "sbnMain"}>{children}</main>
    </div>
  );
}

export function ChapterTopTabs({ tabs, ariaLabel = "Chapter sections" }: { tabs: ChapterTab[]; ariaLabel?: string }) {
  return (
    <nav className="sbnTabs" aria-label={ariaLabel}>
      {tabs.map((tab) => (
        <Link
          key={`${tab.href}-${tab.label}`}
          href={tab.href}
          aria-current={tab.active ? "page" : undefined}
          className={`sbnTab${tab.active ? " sbnTabActive" : ""}`}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}

export function ChapterLessonCard({ lesson, current }: { lesson: LessonRef; current?: boolean }) {
  return (
    <Link
      href={lesson.href}
      aria-current={current ? "page" : undefined}
      className={`sbnLessonCard${current ? " sbnLessonCardCurrent" : ""}`}
    >
      <span className="sbnLessonNumber">{lesson.number}</span>
      <span className="sbnLessonTitle">{lesson.title}</span>
      {lesson.meta && <span className="sbnLessonMeta">{lesson.meta}</span>}
    </Link>
  );
}

export function ChapterLessonGrid({ lessons, currentHref }: { lessons: LessonRef[]; currentHref?: string }) {
  return (
    <div className="sbnLessonGrid">
      {lessons.map((lesson) => (
        <ChapterLessonCard key={lesson.href} lesson={lesson} current={lesson.href === currentHref} />
      ))}
    </div>
  );
}

/** Lesson grid organised by the chapter's REAL topic groups (anchor targets for top tabs). */
export function ChapterLessonGroups({ groups, currentHref, anchorPrefix = "group" }: {
  groups: LessonGroup[];
  currentHref?: string;
  anchorPrefix?: string;
}) {
  return (
    <>
      {groups.map((group, index) => (
        <section key={group.label} className="sbnLessonGroup" id={`${anchorPrefix}-${index + 1}`}>
          <h2 className="sbnLessonGroupLabel" style={{ scrollMarginTop: 90 }}>{group.label}</h2>
          <ChapterLessonGrid lessons={group.lessons} currentHref={currentHref} />
        </section>
      ))}
    </>
  );
}

/**
 * Canonical bottom pager: previous-lesson card (cyan) with its real title,
 * "All lessons" hub link in the centre, next-lesson card (gold) with its real
 * title. Never bare numbers.
 */
export function ChapterLessonPager({
  prev,
  next,
  hubHref,
  hubLabel = "All lessons",
}: {
  prev?: LessonRef;
  next?: LessonRef;
  hubHref: string;
  hubLabel?: string;
}) {
  return (
    <nav className="sbnPager" aria-label="Lesson navigation">
      {prev ? (
        <Link href={prev.href} className="sbnPagerCard">
          <span className="sbnPagerLabel">← Previous · {prev.number}</span>
          <span className="sbnPagerTitle">{prev.title}</span>
        </Link>
      ) : (
        <span className="sbnPagerSpacer" aria-hidden />
      )}
      <Link href={hubHref} className="sbnPagerHub">{hubLabel}</Link>
      {next ? (
        <Link href={next.href} className="sbnPagerCard sbnPagerNext">
          <span className="sbnPagerLabel">Next · {next.number} →</span>
          <span className="sbnPagerTitle">{next.title}</span>
        </Link>
      ) : (
        <span className="sbnPagerSpacer" aria-hidden />
      )}
    </nav>
  );
}

/**
 * Compact top strip for part pages: back-to-chapter link + current position
 * badge, in the canonical language. Sits above the part content, under the
 * chapter header.
 */
export function ChapterPartStrip({
  hubHref,
  hubLabel,
  positionLabel,
}: {
  hubHref: string;
  hubLabel: string;
  positionLabel: string;
}) {
  return (
    <div
      style={{
        display: "flex", flexWrap: "wrap", alignItems: "center",
        justifyContent: "space-between", gap: 10, margin: "0 0 18px",
      }}
    >
      <Link
        href={hubHref}
        className="sbnTab"
        style={{ borderLeftColor: NT.cyan }}
      >
        ← {hubLabel}
      </Link>
      <span className="sbnHeaderTag">{positionLabel}</span>
    </div>
  );
}
