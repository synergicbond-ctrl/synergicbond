"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { EXAM_BLUEPRINTS } from "@/lib/examBlueprints";

// ─────────────────────────────────────────────────────────────────────────────
// Smart Timers — Pomodoro · Deep Work · Exam Simulation · Custom.
// Pure client feature (no data claims): exam-simulation presets derive their
// question counts from the real EXAM_BLUEPRINTS and label the pace target as a
// pace target, not an official section time. State survives tab switches via
// an absolute end-timestamp; no fake persistence beyond the device.
// ─────────────────────────────────────────────────────────────────────────────

interface Preset { key: string; label: string; minutes: number; note: string }

const POMODORO: Preset[] = [
  { key: "pomo-25", label: "Focus 25", minutes: 25, note: "Classic pomodoro — then a 5 min break." },
  { key: "pomo-5", label: "Break 5", minutes: 5, note: "Short recovery break." },
  { key: "pomo-15", label: "Long break 15", minutes: 15, note: "After 4 pomodoros." },
];
const DEEP: Preset[] = [
  { key: "deep-50", label: "Deep 50", minutes: 50, note: "One deep-work block." },
  { key: "deep-90", label: "Deep 90", minutes: 90, note: "Full ultradian cycle." },
];
const EXAM: Preset[] = Object.values(EXAM_BLUEPRINTS).map((b) => ({
  key: `exam-${b.exam}`,
  label: `${b.exam} · ${b.totalQuestions} Q`,
  minutes: b.totalQuestions, // 1 min/question pace target
  note: `${b.totalQuestions}-question chemistry section at a 1 min/Q pace target (${b.markingLabel}).`,
}));

const TABS = [
  { key: "pomodoro", label: "Pomodoro", presets: POMODORO },
  { key: "deep", label: "Deep Work", presets: DEEP },
  { key: "exam", label: "Exam Simulation", presets: EXAM },
  { key: "custom", label: "Custom", presets: [] as Preset[] },
] as const;

function fmt(totalSec: number): string {
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return h > 0
    ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
    : `${m}:${String(s).padStart(2, "0")}`;
}

export default function SmartTimers() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("pomodoro");
  const [customMin, setCustomMin] = useState(30);
  const [label, setLabel] = useState<string>("");
  const [endsAt, setEndsAt] = useState<number | null>(null);
  const [paused, setPaused] = useState<number | null>(null); // remaining ms when paused
  const [now, setNow] = useState(() => Date.now());
  const doneRef = useRef(false);

  useEffect(() => {
    if (endsAt === null || paused !== null) return;
    const t = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(t);
  }, [endsAt, paused]);

  const remainingMs = paused ?? (endsAt !== null ? Math.max(0, endsAt - now) : 0);
  const running = endsAt !== null;
  const finished = running && paused === null && remainingMs === 0;

  useEffect(() => {
    if (finished && !doneRef.current) {
      doneRef.current = true;
      try {
        // Gentle completion beep via WebAudio — no assets needed.
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.frequency.value = 880; gain.gain.value = 0.06;
        osc.start(); osc.stop(ctx.currentTime + 0.4);
      } catch { /* audio blocked — the UI still shows Time's up */ }
    }
  }, [finished]);

  const start = useCallback((minutes: number, name: string) => {
    doneRef.current = false;
    setLabel(name);
    setPaused(null);
    setEndsAt(Date.now() + minutes * 60_000);
    setNow(Date.now());
  }, []);
  const pause = useCallback(() => { if (endsAt !== null && paused === null) setPaused(Math.max(0, endsAt - Date.now())); }, [endsAt, paused]);
  const resume = useCallback(() => {
    if (paused !== null) { setEndsAt(Date.now() + paused); setPaused(null); setNow(Date.now()); }
  }, [paused]);
  const stop = useCallback(() => { setEndsAt(null); setPaused(null); setLabel(""); }, []);

  const activeTab = TABS.find((t) => t.key === tab)!;

  return (
    <div className="space-y-5">
      {/* Active timer */}
      {running && (
        <div className={`rounded-2xl border p-6 text-center ${finished ? "border-emerald-400/40 bg-emerald-500/[0.07]" : "border-cyan-400/30 bg-cyan-500/[0.05]"}`}>
          <div className="text-xs font-bold uppercase tracking-wider text-white/50">{label}</div>
          <div className={`mt-1 font-mono text-6xl font-black ${finished ? "text-emerald-300" : "text-white"}`}>
            {finished ? "Done" : fmt(Math.ceil(remainingMs / 1000))}
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {!finished && (paused === null
              ? <button onClick={pause} className="rounded-lg border border-white/15 bg-white/[0.05] px-4 py-2 text-sm font-bold text-white/80">Pause</button>
              : <button onClick={resume} className="rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-300">Resume</button>)}
            <button onClick={stop} className="rounded-lg border border-white/15 bg-white/[0.05] px-4 py-2 text-sm font-bold text-white/60">{finished ? "Clear" : "Stop"}</button>
          </div>
          {finished && <p className="mt-3 text-sm text-emerald-200/80">Time&apos;s up — take your break or review your answers.</p>}
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {TABS.map((t) => (
          <button key={t.key} onClick={() => setTab(t.key)}
            className={`shrink-0 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
              tab === t.key ? "border-cyan-400/50 bg-cyan-500/15 text-white" : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white/85"
            }`}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === "custom" ? (
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <label className="flex items-center gap-2 text-sm text-white/70">Minutes
            <input type="number" min={1} max={300} value={customMin}
              onChange={(e) => setCustomMin(Math.min(300, Math.max(1, Number(e.target.value) || 1)))}
              className="w-20 rounded-lg border border-white/10 bg-[#0B1220] px-2 py-1.5 text-white/90" />
          </label>
          <button onClick={() => start(customMin, `Custom ${customMin} min`)}
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-2 text-sm font-black text-black">Start</button>
        </div>
      ) : (
        <div className="grid gap-2 sm:grid-cols-3">
          {activeTab.presets.map((p) => (
            <button key={p.key} onClick={() => start(p.minutes, p.label)}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-left transition hover:-translate-y-0.5 hover:border-cyan-400/40">
              <div className="font-black text-white">{p.label}</div>
              <div className="text-2xl font-black text-cyan-300">{p.minutes} min</div>
              <p className="mt-1 text-xs text-white/50">{p.note}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
