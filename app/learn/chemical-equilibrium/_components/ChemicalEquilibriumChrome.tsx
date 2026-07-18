"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CanonicalNotesStyles,
  ChapterTopTabs,
  ChapterLessonPager,
  type ChapterTab,
  type LessonRef,
} from "@/components/notes/canonical";
import { CE_GROUPS, CE_LESSONS, ceHref } from "./meta";

const TOTAL_PARTS = CE_LESSONS.length;

function getPart(pathname: string): number | null {
  const match = pathname.match(/\/part(\d{2})\/?$/);
  if (!match) return null;

  const value = Number(match[1]);
  return value >= 1 && value <= TOTAL_PARTS ? value : null;
}

function ceLessonRef(index: number): LessonRef | undefined {
  const lesson = CE_LESSONS[index];
  if (!lesson) return undefined;
  return { href: ceHref(lesson.part), number: `Part ${lesson.part}`, title: lesson.title };
}

function ceTabs(currentPart: number | null): ChapterTab[] {
  return [
    { label: "All 18 parts", href: "/learn/chemical-equilibrium", active: currentPart === null },
    ...CE_GROUPS.map((group, index) => ({
      label: group.label,
      href: `/learn/chemical-equilibrium#group-${index + 1}`,
      active: currentPart !== null && currentPart >= group.from && currentPart <= group.to,
    })),
  ];
}

export function ChemicalEquilibriumHeader() {
  const pathname = usePathname();
  const part = getPart(pathname);
  const lesson = part ? CE_LESSONS[part - 1] : undefined;

  return (
    <header className="sbnHeader">
      <CanonicalNotesStyles />
      <div className="sbnHeaderInner">
        <div className="sbnHeaderRow">
          <div>
            <div className="sbnKicker">JEE Physical Chemistry</div>
            <div className="sbnSubtitle">Chemical Equilibrium</div>
          </div>
          <div className="sbnHeaderTag">
            {lesson ? `Lesson ${lesson.part} of ${TOTAL_PARTS}` : "Top chapter navigation"}
          </div>
        </div>
        <ChapterTopTabs tabs={ceTabs(part)} ariaLabel="Chemical Equilibrium sections" />
      </div>
    </header>
  );
}

export function ChemicalEquilibriumFooter() {
  const pathname = usePathname();
  const part = getPart(pathname);

  return (
    <footer className="sbnPartChrome">
      {part ? (
        <ChapterLessonPager
          prev={ceLessonRef(part - 2)}
          next={ceLessonRef(part)}
          hubHref="/learn/chemical-equilibrium"
          hubLabel="All lessons"
        />
      ) : null}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
        <Link href="/programs/jee-advanced/learn" className="sbnTab">
          Return to JEE Advanced ↗
        </Link>
      </div>
    </footer>
  );
}
