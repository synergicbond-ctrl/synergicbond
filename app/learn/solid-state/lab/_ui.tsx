"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import katex from "katex";

/* ------------------------------------------------------------------ maths */

function renderTex(ex: string, block: boolean) {
  try {
    return katex.renderToString(ex, { displayMode: block, throwOnError: false, strict: "ignore", trust: false });
  } catch {
    return ex.replaceAll("<", "&lt;");
  }
}

export function Tex({ ex, block = false }: { ex: string; block?: boolean }) {
  const html = useMemo(() => renderTex(ex, block), [ex, block]);
  return block ? (
    <span className="my-1 block overflow-x-auto py-1 text-center" dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <span className="inline-block align-middle" dangerouslySetInnerHTML={{ __html: html }} />
  );
}

/** Text with inline `$math$` and `**bold**` spans. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\$[^$]+\$|\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("$") ? (
          <Tex key={i} ex={p.slice(1, -1)} />
        ) : p.startsWith("**") ? (
          <strong key={i} className="font-semibold text-[var(--foreground)]">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

/* ------------------------------------------------------------- derivation */

export type DerivStep = { say: string; tex?: string };

/** A textbook-style derivation that the reader walks through one line at a time. */
export function Derivation({ title, steps, result }: { title: string; steps: DerivStep[]; result?: string }) {
  const [shown, setShown] = useState(1);
  const done = shown >= steps.length;
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">Derivation</div>
        <div className="text-xs text-[var(--text-muted)]">
          step {Math.min(shown, steps.length)} of {steps.length}
        </div>
      </div>
      <h4 className="mt-1 text-lg font-bold text-[var(--foreground)]">{title}</h4>
      <ol className="mt-3 space-y-3">
        {steps.slice(0, shown).map((s, i) => (
          <li key={i} className="ss-rise flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/50 text-xs font-bold text-[var(--accent)]">{i + 1}</span>
            <div className="min-w-0 flex-1 text-[15px] leading-7 text-[var(--text-muted)]">
              <Rich text={s.say} />
              {s.tex && <Tex ex={s.tex} block />}
            </div>
          </li>
        ))}
      </ol>
      {done && result && (
        <div className="ss-rise mt-4 rounded-lg border border-emerald-300/40 bg-emerald-300/[0.07] px-4 py-3 text-center">
          <Tex ex={result} block />
        </div>
      )}
      <div className="mt-4 flex gap-2">
        {!done && (
          <button type="button" onClick={() => setShown((n) => n + 1)} className="rounded-md bg-[var(--accent)] px-4 py-1.5 text-sm font-bold text-black hover:brightness-110">
            Next step
          </button>
        )}
        {!done && (
          <button type="button" onClick={() => setShown(steps.length)} className="rounded-md border border-[var(--border)] px-4 py-1.5 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--accent)]">
            Show all
          </button>
        )}
        {shown > 1 && (
          <button type="button" onClick={() => setShown(1)} className="rounded-md border border-[var(--border)] px-4 py-1.5 text-sm font-semibold text-[var(--text-muted)] hover:border-[var(--accent)]">
            Restart
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- blocks */

export function Para({ children }: { children: ReactNode }) {
  return <p className="max-w-3xl text-[16px] leading-8 text-[var(--text-muted)]">{children}</p>;
}

export function P({ t }: { t: string }) {
  return (
    <Para>
      <Rich text={t} />
    </Para>
  );
}

export function KeyIdea({ title = "Key idea", children }: { title?: string; children: ReactNode }) {
  return (
    <div className="max-w-3xl rounded-xl border border-cyan-300/30 bg-cyan-300/[0.05] px-5 py-4">
      <div className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">{title}</div>
      <div className="mt-1.5 text-[15px] leading-7 text-[var(--text-muted)]">{typeof children === "string" ? <Rich text={children} /> : children}</div>
    </div>
  );
}

export function Traps({ items }: { items: string[] }) {
  return (
    <div className="rounded-xl border border-rose-300/35 bg-rose-300/[0.055] px-5 py-4">
      <div className="text-xs font-bold uppercase tracking-[0.14em] text-rose-200">JEE traps</div>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] leading-7 text-[var(--foreground)]">
        {items.map((t) => (
          <li key={t}>
            <Rich text={t} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Worked({ q, steps, answer }: { q: string; steps: string[]; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-amber-300/35 bg-amber-300/[0.055] px-5 py-4">
      <div className="text-xs font-bold uppercase tracking-[0.14em] text-amber-200">Worked problem</div>
      <p className="mt-1.5 text-[15px] font-semibold leading-7 text-[var(--foreground)]">
        <Rich text={q} />
      </p>
      {open ? (
        <div className="ss-rise mt-2 space-y-1.5 text-[15px] leading-7 text-[var(--text-muted)]">
          {steps.map((s, i) => (
            <div key={i}>
              <Rich text={s} />
            </div>
          ))}
          <div className="pt-1 text-[var(--foreground)]">
            <Rich text={`**Answer:** ${answer}`} />
          </div>
        </div>
      ) : null}
      <button type="button" onClick={() => setOpen((o) => !o)} className="mt-3 rounded-md border border-amber-300/50 px-3 py-1 text-sm font-semibold text-amber-100 hover:bg-amber-300/10">
        {open ? "Hide solution" : "Try it, then show solution"}
      </button>
    </div>
  );
}

export function Facts({ items, cols = 4 }: { items: [string, string][]; cols?: 2 | 3 | 4 }) {
  return (
    <dl className={`grid grid-cols-2 gap-2 ${cols === 4 ? "sm:grid-cols-4" : cols === 3 ? "sm:grid-cols-3" : ""}`}>
      {items.map(([t, v]) => (
        <div key={t} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5">
          <dt className="text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">{t}</dt>
          <dd className="mt-0.5 font-mono text-[15px] font-bold text-[var(--foreground)]">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

/* -------------------------------------------------------------- controls */

export function Tabs<T extends string>({ value, onChange, items, label }: { value: T; onChange: (v: T) => void; items: readonly (readonly [T, string])[]; label: string }) {
  return (
    <div className="flex flex-wrap gap-1.5" role="tablist" aria-label={label}>
      {items.map(([k, t]) => (
        <button
          key={k}
          type="button"
          role="tab"
          aria-selected={value === k}
          onClick={() => onChange(k)}
          className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition ${value === k ? "border-[var(--accent)] bg-[var(--accent)] text-black shadow-[0_0_0_3px_rgba(217,164,65,0.18)]" : "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]"}`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

export function Slider({ label, value, onChange, min, max, step = 1, unit = "", show }: { label: ReactNode; value: number; onChange: (v: number) => void; min: number; max: number; step?: number; unit?: string; show?: string }) {
  return (
    <label className="block text-sm text-[var(--text-muted)]">
      <span className="flex justify-between">
        <span>{label}</span>
        <span className="font-mono font-bold text-[var(--foreground)]">{show ?? `${value}${unit}`}</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-1.5 w-full accent-[var(--accent)]" />
    </label>
  );
}

export function Btn({ children, onClick, primary, disabled }: { children: ReactNode; onClick: () => void; primary?: boolean; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`rounded-md border px-3.5 py-1.5 text-sm font-semibold transition disabled:opacity-40 ${primary ? "border-[var(--accent)] bg-[var(--accent)] text-black hover:brightness-110" : "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]"}`}
    >
      {children}
    </button>
  );
}

/** Caption that cross-fades when its key changes: the narration for the current animation step. */
export function Narration({ k, children }: { k: string | number; children: ReactNode }) {
  return (
    <div key={k} className="ss-rise min-h-[5.5rem] rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-[15px] leading-7 text-[var(--foreground)]">
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ hooks */

/** Auto-advancing step index (stage 0 … last). */
export function useTour(count: number, ms = 2600) {
  const [step, setStep] = useState(count);
  const [playing, setPlaying] = useState(false);
  const stepRef = useRef(step);
  useEffect(() => {
    stepRef.current = step;
  });
  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      if (stepRef.current >= count) {
        setPlaying(false);
        return;
      }
      setStep(stepRef.current + 1);
    }, ms);
    return () => window.clearInterval(id);
  }, [playing, count, ms]);
  return {
    step,
    playing,
    set: (n: number) => {
      setPlaying(false);
      setStep(n);
    },
    play: () => {
      setStep(0);
      setPlaying(true);
    },
    stop: () => setPlaying(false),
  };
}

/** Smoothly animated number (for morphs driven from React state). */
export function useTween(target: number, speed = 6) {
  const [v, setV] = useState(target);
  const vRef = useRef(target);
  const tRef = useRef(target);
  useEffect(() => {
    tRef.current = target;
  });
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const goal = tRef.current;
      const next = reduce ? goal : vRef.current + (goal - vRef.current) * (1 - Math.exp(-speed * dt));
      if (Math.abs(next - vRef.current) > 1e-5 || next !== vRef.current) {
        vRef.current = Math.abs(goal - next) < 1e-4 ? goal : next;
        setV(vRef.current);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);
  return v;
}

export function useReduced() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

/** Several numbers eased together, for morphing a set of parameters. */
export function useTweenArr(target: number[], speed = 5) {
  const [v, setV] = useState(target);
  const cur = useRef(target);
  const goal = useRef(target);
  useEffect(() => {
    goal.current = target;
  });
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.06, (now - last) / 1000);
      last = now;
      const g = goal.current;
      let moving = false;
      const next = cur.current.map((x, i) => {
        const t = g[i] ?? x;
        const n = reduce ? t : x + (t - x) * (1 - Math.exp(-speed * dt));
        const snapped = Math.abs(t - n) < 1e-4 ? t : n;
        if (snapped !== x) moving = true;
        return snapped;
      });
      if (g.length !== cur.current.length) moving = true;
      if (moving) {
        cur.current = next.length === g.length ? next : g.slice();
        setV(cur.current);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);
  return v;
}

/** Seconds since mount, updated every frame (frozen for reduced-motion readers). */
export function useClock(active = true) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!active || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const t0 = performance.now();
    let last = 0;
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (now - last < 28) return;
      last = now;
      setT((now - t0) / 1000);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);
  return t;
}

/** Section scaffold: numbered heading, prose slot, then body. */
export function Chapter({ id, n, title, lead, children }: { id: string; n: string; title: string; lead: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-7">
      <header>
        <div className="text-sm font-bold tracking-[0.16em] text-[var(--accent)]">{n}</div>
        <h2 className="mt-1 text-3xl font-black leading-tight text-[var(--foreground)] sm:text-4xl">{title}</h2>
        <p className="mt-3 max-w-3xl text-[17px] leading-8 text-[var(--text-muted)]">{lead}</p>
      </header>
      {children}
    </section>
  );
}
