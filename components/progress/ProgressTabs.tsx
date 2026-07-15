"use client";

import { useState } from "react";
import { Activity, Gauge, Target, Zap, BookMarked, type LucideIcon } from "lucide-react";

// Progress Dashboard — tabbed shell (Dashboard Simplification pass). Replaces
// six separate analytics nav destinations (Performance, Exam Predictor,
// Syllabus Mastery Map, NCERT Blind Spots, Readiness Report, Speed Analysis)
// with one page. All content is pre-rendered server-side from the SAME
// calculation functions those pages already used — this component only
// switches which pre-rendered panel is visible. No data or logic here.

const ICONS: Record<string, LucideIcon> = {
  overview: Activity,
  mastery: Target,
  readiness: Gauge,
  speed: Zap,
  ncert: BookMarked,
};

export interface ProgressTab {
  key: string;
  label: string;
  content: React.ReactNode;
}

export default function ProgressTabs({ tabs }: { tabs: ProgressTab[] }) {
  const [active, setActive] = useState(tabs[0]?.key ?? "overview");
  const current = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <section>
      <div className="-mx-6 mb-6 overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-2 border-b border-white/[0.08] pb-px">
          {tabs.map((t) => {
            const Icon = ICONS[t.key] ?? Activity;
            const on = t.key === active;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap border-b-2 px-3 py-2.5 text-sm font-semibold transition ${
                  on ? "border-current text-cyan-300" : "border-transparent text-white/50 hover:text-white/80"
                }`}
              >
                <Icon className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>
      </div>
      {current?.content}
    </section>
  );
}
