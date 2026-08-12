import Link from "next/link";
import { BookOpen, GraduationCap, FileQuestion, ClipboardCheck, ArrowRight, Sparkles } from "lucide-react";
import {
  PROGRAM_CATALOG,
  programKeyToHref,
  programKeyToActions,
  type CatalogProgram,
} from "@/lib/programs";

// ─────────────────────────────────────────────────────────────────────────────
// "My Programs" — the top section of the student dashboard.
//
// Purely presentational server component: the page resolves real entitlements
// (lib/access/entitlements.ts) and passes the owned key set down. Every card
// deep-links into that program's OWN experience (hub / board dashboard) via the
// programKeyToHref/programKeyToActions SSOT — no program ever lands on a
// generic shared page. Chapter-wise learning & notes is the PRIMARY action.
// No mock data: students with no purchases get an honest empty state.
// ─────────────────────────────────────────────────────────────────────────────

export interface OwnedProgram extends CatalogProgram {
  /** Owner/admin previewing rather than a real purchase. */
  ownerPreview: boolean;
  /** State-Boards keys — visible but flagged, never sold. */
  comingSoon: boolean;
}

export function MyPrograms({ programs, isOwner }: { programs: OwnedProgram[]; isOwner: boolean }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-black flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-cyan-400" /> My Programs
        </h2>
        <Link
          href="/dashboard/subscription"
          className="text-xs font-bold text-cyan-300 hover:text-cyan-200 transition flex items-center gap-1"
        >
          Manage plans <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {programs.length === 0 ? (
        <div className="p-8 rounded-3xl border border-white/[0.06] bg-[#111827] text-center">
          <BookOpen className="h-10 w-10 text-white/30 mx-auto mb-3" />
          <h3 className="font-bold">No programs yet</h3>
          <p className="text-white/50 text-xs mt-1 leading-relaxed max-w-sm mx-auto">
            You are on the Free Tier — three flagship chapters stay fully unlocked. Add a program
            to open its complete chapter-wise notes, tests and PYQ experience.
          </p>
          <Link
            href="/pricing"
            className="inline-block mt-4 px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition"
          >
            Browse Programs
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {programs.map((p) => {
            const actions = programKeyToActions(p.key);
            return (
              <div
                key={p.key}
                className="rounded-2xl border border-white/[0.08] bg-[#111827] p-5 flex flex-col justify-between hover:border-cyan-500/30 transition"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-black text-white text-base leading-tight">{p.name}</h3>
                    {p.comingSoon ? (
                      <span className="flex-shrink-0 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-white/[0.06] text-white/60">
                        Coming Soon
                      </span>
                    ) : p.ownerPreview ? (
                      <span className="flex-shrink-0 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-cyan-500/15 text-cyan-300">
                        Owner
                      </span>
                    ) : (
                      <span className="flex-shrink-0 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-green-500/15 text-green-400">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-white/40 mt-1">
                    {p.category === "Boards" ? "Board program · dedicated class dashboard" : "Entrance program · full prep hub"}
                  </p>
                </div>

                {/* Chapter-wise notes is the flagship action; practice/tests secondary. */}
                <div className="mt-4 space-y-2">
                  <Link
                    href={actions.notes}
                    className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs transition"
                  >
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5" /> Chapter-wise Notes &amp; Learning
                    </span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <div className="grid grid-cols-3 gap-2">
                    <Link
                      href={actions.practice}
                      className="flex items-center justify-center gap-1 px-2 py-2 rounded-lg border border-white/10 hover:border-white/25 bg-white/[0.03] text-white/80 font-bold text-[10px] transition"
                    >
                      <FileQuestion className="h-3 w-3" /> Practice
                    </Link>
                    <Link
                      href={actions.tests}
                      className="flex items-center justify-center gap-1 px-2 py-2 rounded-lg border border-white/10 hover:border-white/25 bg-white/[0.03] text-white/80 font-bold text-[10px] transition"
                    >
                      <ClipboardCheck className="h-3 w-3" /> Tests
                    </Link>
                    <Link
                      href={programKeyToHref(p.key)}
                      className="flex items-center justify-center gap-1 px-2 py-2 rounded-lg border border-white/10 hover:border-white/25 bg-white/[0.03] text-white/80 font-bold text-[10px] transition"
                    >
                      <Sparkles className="h-3 w-3" /> Full Hub
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {isOwner && programs.length > 0 && (
        <p className="text-[11px] text-white/35 mt-3">
          Owner all-access: every program is unlocked for preview and QA — nothing here was purchased.
        </p>
      )}
    </section>
  );
}

/** Resolve the owned catalogue entries from a real entitlement key set. */
export function resolveOwnedPrograms(
  keys: ReadonlySet<string>,
  opts: { isOwner: boolean; comingSoonKeys: ReadonlySet<string> }
): OwnedProgram[] {
  return PROGRAM_CATALOG.filter(
    (p) => keys.has(p.key) || (p.aliasKeys ?? []).some((k) => keys.has(k))
  ).map((p) => ({
    ...p,
    ownerPreview: opts.isOwner,
    comingSoon: opts.comingSoonKeys.has(p.key),
  }));
}
