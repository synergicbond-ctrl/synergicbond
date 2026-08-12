"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, ChevronDown, GraduationCap, Sparkles } from "lucide-react";
import { getNextProgramOptionIndex } from "@/lib/portal/programSwitcherKeyboard";

// ─────────────────────────────────────────────────────────────────────────────
// Active Program switcher (Portal Reorganisation pass).
//
//   • One entitled program → compact label, no dropdown.
//   • Multiple → accessible popover listing ONLY server-verified entitled
//     programs (keyboard navigable, Esc closes, active option marked).
//   • Free user → "Free workspace" + Explore Programs.
//
// Switching POSTs to /api/portal/active-program (server re-validates
// entitlement, sets the httpOnly preference cookie) then refreshes the
// portal so every server component re-resolves. Client state here can never
// grant access — it only mirrors what the server returned.
// ─────────────────────────────────────────────────────────────────────────────

export interface SwitcherProgram {
  key: string;
  name: string;
  href: string;
}

export default function ProgramSwitcher({
  entitledPrograms,
  activeProgram,
  isAllAccess,
  onProgramChange,
}: {
  entitledPrograms: SwitcherProgram[];
  activeProgram: SwitcherProgram | null;
  isAllAccess: boolean;
  /** Safe fixture seam; production callers omit this and use the guarded API. */
  onProgramChange?: (programKey: string) => void | Promise<void>;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [busyKey, setBusyKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Esc closes and returns focus to the trigger; clicks outside just close.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
        window.requestAnimationFrame(() => triggerRef.current?.focus());
      }
    }
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) close();
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open, close]);

  // Focus the active option when the menu opens (keyboard flow).
  useEffect(() => {
    if (open) {
      const el = listRef.current?.querySelector<HTMLButtonElement>("[data-active='true']")
        ?? listRef.current?.querySelector<HTMLButtonElement>("button");
      el?.focus();
    }
  }, [open]);

  async function switchTo(key: string) {
    if (busyKey || key === activeProgram?.key) { close(); return; }
    setBusyKey(key);
    setError(null);
    try {
      if (onProgramChange) {
        await onProgramChange(key);
        close();
        return;
      }
      const res = await fetch("/api/portal/active-program", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ programKey: key }),
      });
      if (!res.ok) throw new Error("switch rejected");
      close();
      window.dispatchEvent(new Event("sb-program-switched"));
      router.refresh();
    } catch {
      setError("Couldn't switch — please try again.");
    } finally {
      setBusyKey(null);
    }
  }

  function handleListKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (busyKey) return;
    const options = Array.from(
      listRef.current?.querySelectorAll<HTMLButtonElement>("[role='option']") ?? [],
    );
    const currentIndex = options.findIndex((option) => option === document.activeElement);
    const nextIndex = getNextProgramOptionIndex(event.key, currentIndex, options.length);
    if (nextIndex === null) return;
    event.preventDefault();
    options[nextIndex]?.focus();
  }

  // ── Free workspace (no entitled programs) ──────────────────────────────────
  if (!activeProgram) {
    return (
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 text-[11px] font-bold text-white/70">
          <GraduationCap className="h-3.5 w-3.5 text-cyan-400" /> Free workspace
        </span>
        <Link
          href="/programs"
          className="hidden sm:inline-flex rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-2.5 py-1.5 text-[11px] font-bold text-black transition hover:-translate-y-0.5"
        >
          Explore Programs
        </Link>
      </div>
    );
  }

  // ── Exactly one entitled program → compact label, no forced dropdown ──────
  if (entitledPrograms.length <= 1) {
    return (
      <span
        className="inline-flex max-w-[220px] items-center gap-1.5 truncate rounded-xl border border-cyan-400/25 bg-cyan-950/30 px-2.5 py-1.5 text-[11px] font-bold text-cyan-200"
        title={`Program: ${activeProgram.name}`}
      >
        <GraduationCap className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
        <span className="truncate">{activeProgram.name}</span>
      </span>
    );
  }

  // ── Multiple entitled programs → accessible dropdown ──────────────────────
  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Active program: ${activeProgram.name}. Change program`}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex max-w-[240px] items-center gap-1.5 rounded-xl border border-cyan-400/25 bg-cyan-950/30 px-2.5 py-1.5 text-[11px] font-bold text-cyan-200 transition hover:border-cyan-400/50"
      >
        <GraduationCap className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
        <span className="truncate">{activeProgram.name}</span>
        <ChevronDown className={`h-3 w-3 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          ref={listRef}
          role="listbox"
          aria-label="Switch active program"
          onKeyDown={handleListKeyDown}
          className="absolute right-0 z-50 mt-2 w-72 rounded-xl border border-white/[0.08] bg-[#111827] p-1.5 shadow-2xl shadow-black/50"
        >
          <p className="px-3 pb-1 pt-2 text-[10px] font-bold uppercase tracking-wider text-white/35">
            {isAllAccess ? "All-access programs" : "Your programs"}
          </p>
          {entitledPrograms.map((p) => {
            const isActive = p.key === activeProgram.key;
            return (
              <button
                key={p.key}
                type="button"
                role="option"
                aria-selected={isActive}
                data-active={isActive ? "true" : undefined}
                disabled={busyKey !== null}
                onClick={() => switchTo(p.key)}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 ${
                  isActive ? "bg-cyan-500/15 text-cyan-300" : "text-gray-300 hover:bg-white/5 hover:text-white"
                } ${busyKey === p.key ? "opacity-60" : ""}`}
              >
                <span className="truncate">{p.name}</span>
                {isActive && <Check className="h-3.5 w-3.5 shrink-0 text-cyan-400" aria-hidden />}
              </button>
            );
          })}
          {isAllAccess && (
            <p className="flex items-center gap-1 border-t border-white/[0.06] px-3 pb-1.5 pt-2 text-[10px] text-white/40">
              <Sparkles className="h-3 w-3 text-amber-300" /> All-access — every program included.
            </p>
          )}
          {error && <p className="px-3 pb-2 text-[10px] text-rose-400">{error}</p>}
        </div>
      )}
    </div>
  );
}