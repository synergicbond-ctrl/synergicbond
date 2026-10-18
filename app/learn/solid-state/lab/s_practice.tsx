"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Btn, Chapter, Rich, Tabs } from "./_ui";
import { ALL, SECTION_INFO, SETS, SET_INFO, SET_ORDER, type Question, type Sec, type SetId } from "./_practice";

const SECS: Sec[] = ["sc", "multi", "num", "mm"];
const bySec = (set: SetId, sec: Sec): Question[] => SETS[set].filter((q) => q.sec === sec);
const PAGE = 10;

/** "A→PS, B→PQ" into { A: "PS", B: "PQ" } */
function parseMap(s: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const part of s.split(",")) {
    const [k, v] = part.split("→").map((x) => x.trim());
    if (k && v) out[k] = v.split("").sort().join("");
  }
  return out;
}

/** Typed-number questions: the numerical type, plus single-correct entries written without options. */
const typed = (q: Question) => q.sec === "num" || (q.sec !== "mm" && !q.opts);

function isRight(q: Question, given: string): boolean {
  if (typed(q)) {
    const a = parseFloat(given), b = parseFloat(q.ans);
    return !Number.isNaN(a) && Math.abs(a - b) <= Math.max(0.011, 0.005 * Math.abs(b));
  }
  if (q.sec === "mm") {
    const want = parseMap(q.ans);
    const got = parseMap(given);
    return Object.keys(want).length > 0 && Object.keys(want).every((k) => got[k] === want[k]);
  }
  return given.split("").sort().join("") === q.ans.split("").sort().join("");
}


function Solution({ steps, ans }: { steps: string[]; ans: string }) {
  const [open, setOpen] = useState(false);
  const [k, setK] = useState(0);
  const [auto, setAuto] = useState(false);
  const kRef = useRef(0);
  useEffect(() => {
    kRef.current = k;
  });
  useEffect(() => {
    if (!auto) return;
    const id = window.setInterval(() => {
      if (kRef.current >= steps.length) {
        setAuto(false);
        return;
      }
      setK(kRef.current + 1);
    }, 1900);
    return () => window.clearInterval(id);
  }, [auto, steps.length]);
  if (!open) {
    return (
      <Btn onClick={() => { setOpen(true); setK(1); setAuto(true); }}>▶ Watch the solution</Btn>
    );
  }
  return (
    <div className="mt-3 w-full rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/[0.04] p-4">
      <div className="mb-3 h-1 overflow-hidden rounded bg-white/10">
        <div className="h-full rounded bg-[var(--accent)] transition-all duration-700" style={{ width: `${(Math.min(k, steps.length) / steps.length) * 100}%` }} />
      </div>
      <ol className="space-y-3">
        {steps.slice(0, k).map((t, i) => (
          <li key={i} className="ss-rise flex gap-3 text-[15px] leading-7 text-[var(--foreground)]">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/60 text-xs font-black text-[var(--accent)]">{i + 1}</span>
            <span className="min-w-0 overflow-x-auto"><Rich text={t} /></span>
          </li>
        ))}
      </ol>
      {k >= steps.length && (
        <div className="ss-rise mt-3 inline-block rounded-lg border border-emerald-400/50 bg-emerald-400/10 px-4 py-1.5 text-sm font-bold text-emerald-200">Answer: <span className="font-mono">{ans}</span></div>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        <Btn onClick={() => { setAuto(false); setK(Math.max(1, k - 1)); }}>◀ Back</Btn>
        <Btn onClick={() => { setAuto(false); setK(Math.min(steps.length, k + 1)); }}>Next step ▶</Btn>
        <Btn onClick={() => { setAuto(true); if (k >= steps.length) setK(1); }}>↻ Replay</Btn>
        <Btn onClick={() => { setAuto(false); setK(steps.length); }}>Show all</Btn>
        <Btn onClick={() => { setOpen(false); setAuto(false); setK(0); }}>Hide</Btn>
      </div>
    </div>
  );
}

function Card({ q, given, checked, onGive, onCheck }: { q: Question; given: string; checked: boolean; onGive: (v: string) => void; onCheck: () => void }) {
  const ok = checked && isRight(q, given);
  const letters = "ABCDEFGH";
  const mmRows = q.list ? q.list.rows.map((r) => r[0].match(/^\(([A-D])\)/)?.[1]).filter(Boolean) as string[] : [];
  const mmGot = parseMap(given || "");
  const rawMM = given ? Object.fromEntries(given.split(",").map((x) => x.split("→").map((y) => y.trim()))) : {};
  return (
    <div className={`rounded-2xl border p-5 ${checked ? (ok ? "border-emerald-400/50 bg-emerald-400/[0.04]" : "border-rose-400/50 bg-rose-400/[0.04]") : "border-[var(--border)] bg-[var(--surface)]"}`}>
      <div className="flex items-baseline gap-3">
        <span className="rounded-full bg-[var(--accent)]/15 px-3 py-1 font-mono text-sm font-black text-[var(--accent)]">Q{q.n}</span>
        {q.tag && <span className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--text-muted)]">{q.tag}</span>}
        {q.text && (
          <div className="whitespace-pre-line text-[15px] leading-7 text-[var(--foreground)]">
            <Rich text={q.text} />
          </div>
        )}
      </div>
      {q.list && (
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[420px] text-sm">
            <thead className="text-left text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
              <tr><th className="py-1.5 pr-4">{q.list.heads[0]}</th><th className="py-1.5">{q.list.heads[1]}</th></tr>
            </thead>
            <tbody>
              {q.list.rows.map(([a, b], i) => (
                <tr key={i} className="border-t border-[var(--border)]">
                  <td className="py-1.5 pr-4 text-[var(--foreground)]">{a}</td>
                  <td className="py-1.5 text-[var(--text-muted)]">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {(q.sec === "sc" || q.sec === "multi") && q.opts && (
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {q.opts.map((o, i) => {
            const L = letters[i];
            const on = given.includes(L);
            const isAns = checked && q.ans.includes(L);
            return (
              <button
                key={L}
                type="button"
                onClick={() => !checked && onGive(q.sec === "sc" ? L : on ? given.replace(L, "") : given + L)}
                className={`flex items-start gap-3 rounded-lg border px-3 py-2 text-left text-sm transition ${isAns ? "border-emerald-400/70 bg-emerald-400/10" : on ? "border-[var(--accent)] bg-[var(--accent)]/10" : "border-[var(--border)] hover:border-[var(--accent)]/50"}`}
              >
                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded ${q.sec === "multi" ? "" : "rounded-full"} border text-[11px] font-black ${on ? "border-[var(--accent)] text-[var(--accent)]" : "border-[var(--border)] text-[var(--text-muted)]"}`}>{L}</span>
                <span className="min-w-0 text-[var(--foreground)]"><Rich text={o} /></span>
              </button>
            );
          })}
        </div>
      )}

      {typed(q) && (
        <div className="mt-3 flex items-center gap-3">
          <label className="text-sm text-[var(--text-muted)]" htmlFor={`in-${q.id}`}>Your answer</label>
          <input id={`in-${q.id}`} inputMode="decimal" value={given} onChange={(e) => !checked && onGive(e.target.value)} className="w-32 rounded-lg border border-[var(--border)] bg-transparent px-3 py-1.5 font-mono text-[var(--foreground)] outline-none focus:border-[var(--accent)]" />
        </div>
      )}

      {q.sec === "mm" && (
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {mmRows.map((r) => (
            <label key={r} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <span className="font-mono font-bold text-[var(--foreground)]">{r} →</span>
              <input
                aria-label={`Match for row ${r}`}
                value={rawMM[r] ?? ""}
                disabled={checked}
                placeholder="e.g. PQ"
                onChange={(e) => {
                  const next = { ...rawMM, [r]: e.target.value.toUpperCase().replace(/[^A-T]/g, "") };
                  onGive(mmRows.map((k) => `${k}→${next[k] ?? ""}`).join(", "));
                }}
                className="w-full rounded-lg border border-[var(--border)] bg-transparent px-2 py-1.5 font-mono uppercase text-[var(--foreground)] outline-none focus:border-[var(--accent)]"
              />
            </label>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {!checked ? (
          <Btn primary onClick={onCheck}>Check answer</Btn>
        ) : (
          <span className={`text-sm font-bold ${ok ? "text-emerald-300" : "text-rose-300"}`}>
            {ok ? "Correct." : "Not quite."} Answer: <span className="font-mono">{q.ans}</span>
          </span>
        )}
        {checked && q.note && <span className="text-xs leading-5 text-[var(--text-muted)]">{q.note}</span>}
        {!checked && q.sec === "mm" && mmRows.length > 0 && Object.keys(mmGot).length === 0 && <span className="text-xs text-[var(--text-muted)]">Type the Column II letters for each row (a row can have several).</span>}
      </div>
      <div className="mt-3"><Solution steps={q.sol} ans={q.ans} /></div>
    </div>
  );
}

function KeyBlock({ set }: { set: SetId }) {
  return (
    <div className="space-y-5">
      {SECS.filter((sec) => bySec(set, sec).length > 0).map((sec) => (
        <div key={sec}>
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{SECTION_INFO[sec].title} ({bySec(set, sec).length})</div>
          {sec === "mm" ? (
            <ul className="space-y-1 font-mono text-sm text-[var(--foreground)]">
              {bySec(set, sec).map((q) => (
                <li key={q.id}>Q{q.n}: {q.ans}</li>
              ))}
            </ul>
          ) : (
            <div className="grid grid-cols-5 gap-2 sm:grid-cols-8 md:grid-cols-10">
              {bySec(set, sec).map((q) => (
                <div key={q.id} className="rounded-lg border border-[var(--border)] px-2 py-1.5 text-center">
                  <div className="text-[10px] text-[var(--text-muted)]">Q{q.n}</div>
                  <div className="font-mono text-sm font-black text-[var(--foreground)]">{sec === "multi" ? q.ans.split("").join(",") : q.ans}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function AnswerKey() {
  return (
    <div className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5" id="answer-key">
      <div>
        <h3 className="text-2xl font-bold text-[var(--foreground)]">Answer key</h3>
        <p className="mt-1 text-sm text-[var(--text-muted)]">All {ALL.length} questions, set by set. Question numbers restart in each type.</p>
      </div>
      {SET_ORDER.filter((k) => SETS[k].length > 0).map((k) => (
        <details key={k} open={k === "core"} className="rounded-xl border border-[var(--border)] p-4">
          <summary className="cursor-pointer text-base font-bold text-[var(--foreground)]">{SET_INFO[k].title} <span className="font-mono text-sm font-normal text-[var(--text-muted)]">({SETS[k].length})</span></summary>
          <div className="mt-4"><KeyBlock set={k} /></div>
        </details>
      ))}
    </div>
  );
}

export function PracticeChapter() {
  const sets = SET_ORDER.filter((k) => SETS[k].length > 0);
  const [set, setSet] = useState<SetId>("core");
  const [sec, setSec] = useState<Sec>("sc");
  const [shown, setShown] = useState(PAGE);
  const [given, setGiven] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const secs = SECS.filter((k) => bySec(set, k).length > 0);
  const curSec: Sec = secs.includes(sec) ? sec : secs[0];
  const list = bySec(set, curSec);
  const score = useMemo(() => {
    let right = 0, done = 0;
    for (const q of ALL) if (checked[q.id]) { done++; if (isRight(q, given[q.id] ?? "")) right++; }
    return { right, done };
  }, [checked, given]);
  return (
    <Chapter id="practice" n="PRACTICE" title="Practice questions and answer key" lead={`Test yourself on the whole chapter with ${ALL.length} questions in ${sets.length} sets. Check each answer, watch the animated step-by-step solution, and find the complete answer key at the bottom.`}>
      <Tabs label="Question set" value={set} onChange={(v) => { setSet(v); setSec(SECS.find((k) => bySec(v, k).length > 0) ?? "sc"); setShown(PAGE); }} items={sets.map((k) => [k, `${SET_INFO[k].title} (${SETS[k].length})`] as const)} />
      <p className="text-sm leading-6 text-[var(--text-muted)]">{SET_INFO[set].blurb}</p>
      <div className="flex flex-wrap items-center gap-3">
        <Tabs label="Question type" value={curSec} onChange={(v) => { setSec(v); setShown(PAGE); }} items={secs.map((k) => [k, `${SECTION_INFO[k].title} (${bySec(set, k).length})`] as const)} />
        <div className="ml-auto flex items-center gap-3 text-sm text-[var(--text-muted)]">
          <span>Score <b className="font-mono text-[var(--foreground)]">{score.right}</b> / {score.done} attempted</span>
          <Btn onClick={() => { setGiven({}); setChecked({}); }}>Reset</Btn>
        </div>
      </div>
      <p className="text-sm text-[var(--text-muted)]">{set === "core" ? SECTION_INFO[curSec].blurb : SECTION_INFO[curSec].blurb.replace(/, except Questions 15 to 18, which ask you to type a number/, "")}</p>
      <div className="space-y-4">
        {list.slice(0, shown).map((q) => (
          <Card key={q.id} q={q} given={given[q.id] ?? ""} checked={!!checked[q.id]} onGive={(v) => setGiven((g) => ({ ...g, [q.id]: v }))} onCheck={() => setChecked((c) => ({ ...c, [q.id]: true }))} />
        ))}
      </div>
      {shown < list.length && (
        <div className="text-center">
          <Btn onClick={() => setShown((n) => n + PAGE)}>Show the next {Math.min(PAGE, list.length - shown)} questions</Btn>
        </div>
      )}
      <AnswerKey />
    </Chapter>
  );
}
