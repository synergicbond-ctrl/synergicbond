"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, BookOpen, Layers, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// MyProgramsGrid Component
//
// Enforces Dashboard Behavior rules:
//   1. If student purchased Class 11 only -> Show Class 11 Chemistry only.
//   2. If student purchased Class 12 only -> Show Class 12 Chemistry only.
//   3. If student purchased Class 11 + 12 -> Show Class 11 Chemistry & Class 12 Chemistry.
//   4. Each purchased program card MUST show:
//      • Chapter-wise Learning
//      • Full Syllabus Dashboard
// ─────────────────────────────────────────────────────────────────────────────

export interface MyProgramsGridProps {
  activeKeys: string[];
  isPro?: boolean;
}

interface ProgramCardInfo {
  key: string;
  name: string;
  badge: string;
  chapterWiseUrl: string;
  fullSyllabusUrl: string;
  color: string;
}

const PROGRAM_DIRECTORY: Record<string, ProgramCardInfo> = {
  "cbse:class-11": {
    key: "cbse:class-11",
    name: "CBSE Class 11 Chemistry",
    badge: "Board · Class 11",
    chapterWiseUrl: "/dashboard/cbse/class-11",
    fullSyllabusUrl: "/dashboard/cbse/class-11/full-syllabus",
    color: "amber",
  },
  "cbse:class-12": {
    key: "cbse:class-12",
    name: "CBSE Class 12 Chemistry",
    badge: "Board · Class 12",
    chapterWiseUrl: "/dashboard/cbse/class-12",
    fullSyllabusUrl: "/dashboard/cbse/class-12/full-syllabus",
    color: "amber",
  },
  "icse:class-11": {
    key: "icse:class-11",
    name: "ISC Class 11 Chemistry",
    badge: "ISC · Class 11",
    chapterWiseUrl: "/dashboard/icse/class-11",
    fullSyllabusUrl: "/dashboard/icse/class-11/full-syllabus",
    color: "emerald",
  },
  "isc:class-11": {
    key: "isc:class-11",
    name: "ISC Class 11 Chemistry",
    badge: "ISC · Class 11",
    chapterWiseUrl: "/dashboard/icse/class-11",
    fullSyllabusUrl: "/dashboard/icse/class-11/full-syllabus",
    color: "emerald",
  },
  "icse:class-12": {
    key: "icse:class-12",
    name: "ISC Class 12 Chemistry",
    badge: "ISC · Class 12",
    chapterWiseUrl: "/dashboard/icse/class-12",
    fullSyllabusUrl: "/dashboard/icse/class-12/full-syllabus",
    color: "emerald",
  },
  "isc:class-12": {
    key: "isc:class-12",
    name: "ISC Class 12 Chemistry",
    badge: "ISC · Class 12",
    chapterWiseUrl: "/dashboard/icse/class-12",
    fullSyllabusUrl: "/dashboard/icse/class-12/full-syllabus",
    color: "emerald",
  },
  "jee-main": {
    key: "jee-main",
    name: "JEE Main Chemistry",
    badge: "Entrance · NTA",
    chapterWiseUrl: "/programs/jee-main/learn",
    fullSyllabusUrl: "/programs/jee-main/full-syllabus",
    color: "cyan",
  },
  "jee-advanced": {
    key: "jee-advanced",
    name: "JEE Advanced Chemistry",
    badge: "Entrance · IIT",
    chapterWiseUrl: "/programs/jee-advanced/learn",
    fullSyllabusUrl: "/programs/jee-advanced/full-syllabus",
    color: "sky",
  },
  "neet": {
    key: "neet",
    name: "NEET Chemistry",
    badge: "Medical · NTA",
    chapterWiseUrl: "/programs/neet/learn",
    fullSyllabusUrl: "/programs/neet/full-syllabus",
    color: "rose",
  },
  "olympiad": {
    key: "olympiad",
    name: "Olympiad Chemistry",
    badge: "International · NSEC",
    chapterWiseUrl: "/programs/olympiad",
    fullSyllabusUrl: "/programs/olympiad/full-syllabus",
    color: "violet",
  },
};

export default function MyProgramsGrid({ activeKeys, isPro }: MyProgramsGridProps) {
  // Deduplicate and resolve valid program cards
  const validCards: ProgramCardInfo[] = [];
  const seen = new Set<string>();

  for (const key of activeKeys) {
    const normKey = key === "isc:class-11" ? "icse:class-11" : key === "isc:class-12" ? "icse:class-12" : key;
    if (seen.has(normKey)) continue;
    if (PROGRAM_DIRECTORY[normKey]) {
      seen.add(normKey);
      validCards.push(PROGRAM_DIRECTORY[normKey]);
    }
  }

  // If no specific keys were matched but user is Pro, default to top tier programs
  if (validCards.length === 0 && isPro) {
    const fallbackKeys = ["cbse:class-11", "cbse:class-12", "jee-main", "jee-advanced", "neet", "olympiad"];
    for (const fk of fallbackKeys) {
      if (!seen.has(fk) && PROGRAM_DIRECTORY[fk]) {
        seen.add(fk);
        validCards.push(PROGRAM_DIRECTORY[fk]);
      }
    }
  }

  return (
    <div className="rounded-lg border border-white/10 bg-[var(--surface)] p-6 space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-black text-white flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-[var(--accent)]" /> My Active Programs
          </h3>
          <p className="text-xs text-white/50 mt-1">
            Your enrolled curriculum tracks. Select <strong className="text-white">Chapter-wise Learning</strong> for deep topic study or <strong className="text-[var(--accent)]">Full Syllabus Dashboard</strong> for whole-course tools.
          </p>
        </div>
        {isPro && (
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--surface-2)] text-[var(--text-muted)] text-xs font-bold border border-[var(--border)]">
            <Sparkles className="h-3.5 w-3.5" /> All-Access Pro Enabled
          </span>
        )}
      </div>

      {validCards.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {validCards.map((card) => (
            <div 
              key={card.key} 
              className="p-5 rounded-lg bg-[var(--surface)] border border-white/[0.08] hover:border-[var(--accent)]/40 transition flex flex-col justify-between space-y-4 group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-black text-white group-hover:text-[var(--accent)] transition">
                    {card.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-bold uppercase tracking-wider text-white/70">
                    {card.badge}
                  </span>
                </div>
                <p className="text-xs text-white/45 mt-2">
                  Isolated curriculum workspace with 0 cross-program leakage.
                </p>
              </div>

              {/* Two Required Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                <Link
                  href={card.chapterWiseUrl}
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-[var(--surface-2)] hover:bg-white/[0.08] border border-[var(--border)] text-xs font-bold text-white transition text-center"
                >
                  <BookOpen className="h-3.5 w-3.5 text-[var(--accent)] shrink-0" />
                  <span>Chapter-wise</span>
                </Link>
                <Link
                  href={card.fullSyllabusUrl}
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-[var(--accent)]/15 hover:bg-[var(--accent)]/25 border border-[var(--accent)]/30 text-xs font-black text-[var(--accent)] transition text-center"
                >
                  <Layers className="h-3.5 w-3.5 text-[var(--accent)] shrink-0" />
                  <span>Full Syllabus</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center rounded-lg bg-[var(--surface)] border border-dashed border-[var(--border)] space-y-3">
          <p className="text-sm text-white/60 font-semibold">No active program enrollments found.</p>
          <p className="text-xs text-white/40 max-w-md mx-auto">
            Enroll in CBSE, ISC, JEE Main, JEE Advanced, NEET, or Olympiad Chemistry to unlock chapter-wise learning and full-syllabus dashboards.
          </p>
          <div className="pt-2">
            <Link href="/pricing" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-[var(--background)] text-xs font-black rounded-lg hover:opacity-90 transition">
              Explore Programs &amp; Pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
