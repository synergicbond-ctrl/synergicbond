"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// Mentorship Center — Exam Countdown, an auto-derived Weekly Plan, a Revision
// Planner, device-local Mentor Notes and a Progress Report link. The exam date
// and notes persist per-device in localStorage (matching the Memory/Revision V1
// pattern); the weekly plan is derived from the real class syllabus and the
// student's own target date — nothing is fabricated. Progress figures live on
// the analytics page (real attempt data), linked here.
// ─────────────────────────────────────────────────────────────────────────────

const DAY = 86_400_000;

interface Note { id: string; text: string; at: string; }

export default function MentorshipClient({
  base, cls, chapters,
}: { base: string; cls: "class-11" | "class-12"; chapters: string[] }) {
  const dateKey = `sb_cbse_exam_date_${base}`;
  const notesKey = `sb_mentor_notes_${base}`;

  const [examDate, setExamDate] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [draft, setDraft] = useState("");
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    // Deferred client-only read (matches the repo's localStorage-on-mount pattern).
    const t0 = setTimeout(() => {
      setExamDate(window.localStorage.getItem(dateKey) ?? "");
      try { setNotes(JSON.parse(window.localStorage.getItem(notesKey) ?? "[]")); } catch { setNotes([]); }
    }, 0);
    const t = setInterval(() => setNow(Date.now()), 60_000);
    return () => { clearTimeout(t0); clearInterval(t); };
  }, [dateKey, notesKey]);

  const saveDate = (v: string) => { setExamDate(v); window.localStorage.setItem(dateKey, v); };
  const persistNotes = (n: Note[]) => { setNotes(n); window.localStorage.setItem(notesKey, JSON.stringify(n)); };
  const addNote = () => {
    if (!draft.trim()) return;
    persistNotes([{ id: String(Date.now()), text: draft.trim(), at: new Date().toISOString() }, ...notes]);
    setDraft("");
  };
  const delNote = (id: string) => persistNotes(notes.filter((n) => n.id !== id));

  const countdown = useMemo(() => {
    if (!examDate) return null;
    const target = new Date(examDate + "T09:00:00").getTime();
    const days = Math.ceil((target - now) / DAY);
    return { days, past: days < 0 };
  }, [examDate, now]);

  // Weekly plan derived from the real syllabus + student's target date.
  const plan = useMemo(() => {
    if (!countdown || countdown.past) return null;
    const weeks = Math.max(1, Math.ceil(countdown.days / 7));
    const revisionWeeks = Math.min(2, Math.max(1, Math.floor(weeks * 0.25)));
    const learnWeeks = Math.max(1, weeks - revisionWeeks);
    const perWeek = Math.ceil(chapters.length / learnWeeks);
    const out: { week: number; label: string; items: string[] }[] = [];
    for (let w = 0; w < learnWeeks; w++) {
      const items = chapters.slice(w * perWeek, (w + 1) * perWeek);
      if (items.length === 0) break;
      out.push({ week: w + 1, label: `Learn`, items });
    }
    for (let r = 0; r < revisionWeeks; r++) out.push({ week: out.length + 1, label: "Revision + mock tests", items: [] });
    const currentWeek = Math.max(1, weeks - Math.max(0, Math.ceil(countdown.days / 7)) + 1);
    return { out, currentWeek, weeks };
  }, [countdown, chapters]);

  return (
    <div className="space-y-6">
      {/* Exam Countdown */}
      <section className="rounded-2xl border border-amber-500/25 bg-amber-500/[0.05] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-300">Exam Countdown</div>
            {countdown ? (
              countdown.past
                ? <div className="mt-1 text-lg font-black text-white/70">Exam date passed — set your next target.</div>
                : <div className="mt-1"><span className="text-4xl font-black text-white">{countdown.days}</span> <span className="text-white/60">days to your board exam</span></div>
            ) : <div className="mt-1 text-sm text-white/55">Set your board exam date to start the countdown and weekly plan.</div>}
          </div>
          <label className="text-sm text-white/70">
            <span className="mr-2">Board exam date</span>
            <input type="date" value={examDate} onChange={(e) => saveDate(e.target.value)}
              className="rounded-lg border border-white/15 bg-[#0B1220] px-3 py-1.5 text-white/90" />
          </label>
        </div>
      </section>

      {/* Weekly Plan */}
      <section>
        <h2 className="mb-1 text-lg font-black">Weekly Plan</h2>
        <p className="mb-3 text-sm text-white/50">Auto-built from the {chapters.length}-chapter {cls === "class-12" ? "Class 12" : "Class 11"} syllabus and your target date.</p>
        {!plan ? (
          <p className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/55">Set your exam date above to generate a week-by-week plan.</p>
        ) : (
          <div className="space-y-2">
            {plan.out.map((w) => {
              const active = w.week === plan.currentWeek;
              return (
                <div key={w.week} className={`rounded-xl border p-3 ${active ? "border-cyan-400/40 bg-cyan-500/[0.06]" : "border-white/[0.08] bg-white/[0.02]"}`}>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-black ${active ? "text-cyan-300" : "text-white/40"}`}>WEEK {w.week}{active ? " · NOW" : ""}</span>
                    <span className="text-xs text-white/45">{w.label}</span>
                  </div>
                  {w.items.length > 0 && (
                    <div className="mt-1.5 flex flex-wrap gap-1.5">{w.items.map((it) => <span key={it} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-xs text-white/70">{it}</span>)}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Revision Planner */}
      <section>
        <h2 className="mb-3 text-lg font-black">Revision Planner</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          <Link href="/memory?deck=daily" className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 hover:border-cyan-400/40"><span className="text-sm font-semibold text-white/90">Daily spaced-recall queue</span><span className="text-cyan-400">→</span></Link>
          <Link href="/revision" className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 hover:border-cyan-400/40"><span className="text-sm font-semibold text-white/90">Smart Revision Hub</span><span className="text-cyan-400">→</span></Link>
          <Link href={`${base}/practice`} className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 hover:border-cyan-400/40"><span className="text-sm font-semibold text-white/90">Practise weak chapters</span><span className="text-cyan-400">→</span></Link>
          <Link href="/mistakes" className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 hover:border-cyan-400/40"><span className="text-sm font-semibold text-white/90">Mistake Journal</span><span className="text-cyan-400">→</span></Link>
        </div>
      </section>

      {/* Progress Report */}
      <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <h2 className="text-lg font-black">Progress Report</h2>
        <p className="mt-1 text-sm text-white/55">Your accuracy, weak areas, predicted board score and attempt history — computed from your real attempts.</p>
        <Link href={`${base}/analytics`} className="mt-3 inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-2 text-sm font-black text-black">Open full report →</Link>
      </section>

      {/* Mentor Notes */}
      <section>
        <div className="mb-1 flex items-center justify-between">
          <h2 className="text-lg font-black">Mentor Notes</h2>
          <Link href="/support" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">Ask a mentor →</Link>
        </div>
        <p className="mb-3 text-sm text-white/50">Jot strategy notes, mentor advice and reminders. Saved on this device.</p>
        <div className="flex gap-2">
          <input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") addNote(); }}
            placeholder="e.g. Revise Coordination Compounds nomenclature before mock 2"
            className="flex-1 rounded-lg border border-white/10 bg-[#0B1220] px-3 py-2 text-sm text-white/90 outline-none focus:border-cyan-400/40" />
          <button onClick={addNote} className="rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-300">Add</button>
        </div>
        <div className="mt-3 space-y-2">
          {notes.length === 0 ? (
            <p className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-sm text-white/45">No notes yet.</p>
          ) : notes.map((n) => (
            <div key={n.id} className="flex items-start justify-between gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
              <div className="min-w-0">
                <p className="text-sm text-white/85">{n.text}</p>
                <p className="mt-0.5 text-[11px] text-white/35">{new Date(n.at).toLocaleDateString()}</p>
              </div>
              <button onClick={() => delNote(n.id)} className="shrink-0 text-xs text-white/40 hover:text-rose-300">Delete</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
