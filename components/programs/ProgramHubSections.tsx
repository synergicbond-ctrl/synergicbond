"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen, FileText, Sigma, Library, Table2, Brain, GitBranch, FlaskConical,
  Repeat, Target, Camera, ClipboardList, ListChecks, SlidersHorizontal, History,
  AlertTriangle, Activity, TrendingUp, Gauge, Sparkles, Bot, Calendar, Lock,
  type LucideIcon,
} from "lucide-react";
import type { HubSection, HubCard, CardStatus } from "@/lib/programHubData";

// Program Hub Scaffold — tabbed 7-section shell. Tab state is the only reason
// this is a client component; all data comes from lib/programHubData (SSOT).

const ICONS: Record<string, LucideIcon> = {
  book: BookOpen, notes: FileText, sigma: Sigma, vault: Library, table: Table2,
  brain: Brain, reaction: GitBranch, flask: FlaskConical, repeat: Repeat,
  target: Target, camera: Camera, clipboard: ClipboardList, quiz: ListChecks,
  sliders: SlidersHorizontal, history: History, alert: AlertTriangle,
  activity: Activity, predict: TrendingUp, gauge: Gauge, sparkles: Sparkles,
  bot: Bot, calendar: Calendar,
};

function DynIcon({ iconKey, className }: { iconKey: string; className?: string }) {
  const Cmp = ICONS[iconKey] ?? BookOpen;
  return <Cmp className={className} />;
}

function StatusBadge({ status }: { status: CardStatus }) {
  if (status === "available") return null;
  const map = {
    "coming-soon": { label: "Coming soon", cls: "border-white/15 bg-white/[0.06] text-white/50" },
    premium: { label: "Premium", cls: "border-amber-400/40 bg-amber-400/10 text-amber-300" },
  } as const;
  const m = map[status];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${m.cls}`}>
      {status === "premium" && <Lock className="h-2.5 w-2.5" />}
      {m.label}
    </span>
  );
}

function Card({ card, accentText, accentCard }: { card: HubCard; accentText: string; accentCard: string }) {
  const isLink = Boolean(card.href) && card.status !== "coming-soon";

  const inner = (
    <>
      <div className="flex items-start justify-between gap-2">
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${card.status === "coming-soon" ? "border-white/10 bg-white/[0.03]" : "border-white/15 bg-white/[0.05]"}`}>
          <DynIcon iconKey={card.iconKey} className={`h-5 w-5 ${card.status === "coming-soon" ? "text-white/35" : accentText}`} />
        </span>
        <StatusBadge status={card.status} />
      </div>
      <div className={`mt-3 font-bold ${card.status === "coming-soon" ? "text-white/60" : "text-white"}`}>{card.title}</div>
      <div className="mt-1 flex-1 text-sm text-zinc-400">{card.description}</div>
      {isLink ? (
        <div className={`mt-3 text-sm font-semibold ${accentText}`}>
          {card.status === "premium" ? "Unlock" : "Open"}{" "}
          <span className="inline-block transition group-hover:translate-x-1">→</span>
        </div>
      ) : (
        <div className="mt-3 text-sm font-semibold text-white/30">In progress</div>
      )}
    </>
  );

  const cls = `flex min-h-[9.5rem] flex-col rounded-2xl border bg-white/[0.02] p-4 ${
    isLink ? `group transition hover:-translate-y-0.5 hover:bg-white/[0.04] ${accentCard}` : "border-white/[0.06] opacity-80"
  }`;

  return isLink && card.href ? (
    <Link href={card.href} className={cls}>{inner}</Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export default function ProgramHubSections({
  sections,
  accentText,
  accentCard,
}: {
  sections: HubSection[];
  accentText: string;
  accentCard: string;
}) {
  const [active, setActive] = useState(sections[0]?.key ?? "learn");
  const current = sections.find((s) => s.key === active) ?? sections[0];

  return (
    <section>
      {/* Section tabs — horizontally scrollable on mobile */}
      <div className="-mx-6 mb-6 overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-2 border-b border-white/[0.08] pb-px">
          {sections.map((s) => {
            const on = s.key === active;
            const available = s.cards.some((c) => c.status !== "coming-soon");
            return (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap border-b-2 px-3 py-2.5 text-sm font-semibold transition ${
                  on ? `border-current ${accentText}` : "border-transparent text-white/50 hover:text-white/80"
                }`}
              >
                <DynIcon iconKey={s.iconKey} className="h-4 w-4" />
                {s.label}
                {!available && <span className="ml-1 h-1.5 w-1.5 rounded-full bg-white/25" title="Coming soon" />}
              </button>
            );
          })}
        </div>
      </div>

      {current && (() => {
        // Unfinished modules never show as dead cards in the main workflow —
        // filtered here so the grid never has an empty gap where one was.
        const visibleCards = current.cards.filter((c) => c.status !== "coming-soon");
        return (
          <>
            <p className="mb-5 text-sm text-zinc-500">{current.blurb}</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {visibleCards.map((card) => (
                <Card key={card.title} card={card} accentText={accentText} accentCard={accentCard} />
              ))}
            </div>
          </>
        );
      })()}
    </section>
  );
}
