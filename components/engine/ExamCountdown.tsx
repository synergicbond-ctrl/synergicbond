"use client";

import { useEffect, useMemo, useState } from "react";

// Exam Countdown — device-local target date per program (same localStorage
// pattern as Memory/Revision V1 and the board Mentorship Center).

const DAY = 86_400_000;

export default function ExamCountdown({ storageKey, examName }: { storageKey: string; examName: string }) {
  const [date, setDate] = useState("");
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t0 = setTimeout(() => setDate(window.localStorage.getItem(storageKey) ?? ""), 0);
    const t = setInterval(() => setNow(Date.now()), 60_000);
    return () => { clearTimeout(t0); clearInterval(t); };
  }, [storageKey]);

  const save = (v: string) => { setDate(v); window.localStorage.setItem(storageKey, v); };

  const days = useMemo(() => {
    if (!date) return null;
    return Math.ceil((new Date(date + "T09:00:00").getTime() - now) / DAY);
  }, [date, now]);

  return (
    <div className="rounded-2xl border border-amber-500/25 bg-amber-500/[0.05] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-amber-300">Exam Countdown</div>
          {days === null ? (
            <div className="mt-1 text-sm text-white/55">Set your {examName} date to start the countdown.</div>
          ) : days < 0 ? (
            <div className="mt-1 text-lg font-black text-white/70">Exam date passed — set your next target.</div>
          ) : (
            <div className="mt-1"><span className="text-4xl font-black text-white">{days}</span> <span className="text-white/60">days to {examName}</span></div>
          )}
        </div>
        <label className="text-sm text-white/70">
          <span className="mr-2">Exam date</span>
          <input type="date" value={date} onChange={(e) => save(e.target.value)}
            className="rounded-lg border border-white/15 bg-[#0B1220] px-3 py-1.5 text-white/90" />
        </label>
      </div>
    </div>
  );
}
