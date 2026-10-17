"use client";

import { useEffect, useState } from "react";

const D = 76; // sphere diameter in SVG units
const R = D / 2;
const W = 560;
const H = 360;

type Layer = "A" | "B" | "C";
const COLOR: Record<Layer, string> = { A: "#4aa8e8", B: "#f2b84b", C: "#5fd39a" };
// Offsets of the three hollow families relative to a layer-A sphere.
const OFFSET: Record<Layer, [number, number]> = {
  A: [0, 0],
  B: [D / 2, (D * Math.sqrt(3)) / 6],
  C: [0, (D * Math.sqrt(3)) / 3],
};

function layerPoints(kind: Layer) {
  const pts: [number, number][] = [];
  const rowH = (D * Math.sqrt(3)) / 2;
  for (let j = -1; j < 8; j++) {
    for (let i = -2; i < 12; i++) {
      const x = i * D + j * (D / 2) + OFFSET[kind][0] - D * 0.4;
      const y = j * rowH + OFFSET[kind][1] - 6;
      if (Math.hypot(x - W / 2, y - H / 2) < 176) pts.push([x, y]);
    }
  }
  return pts;
}

export function CloseStack() {
  const [mode, setMode] = useState<"ccp" | "hcp">("ccp");
  const [step, setStep] = useState(3);
  const [voids, setVoids] = useState(false);
  const [auto, setAuto] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setStep((s) => (s >= 3 ? 1 : s + 1));
      setTick((t) => t + 1);
    }, 1900);
    return () => window.clearInterval(id);
  }, [auto]);

  const third: Layer = mode === "ccp" ? "C" : "A";
  const sequence: Layer[] = ["A", "B", third];
  const shown = sequence.slice(0, step);
  const pointsA = layerPoints("A");
  const pointsB = layerPoints("B");
  const pointsC = layerPoints("C");

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
      <div>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={`Top view of ${mode === "ccp" ? "A, B, C" : "A, B, A"} close-packed layers`}
          className="w-full rounded-xl border border-[var(--border)]"
          style={{ background: "radial-gradient(ellipse at 50% 40%, #1b3a36 0%, #0c1a19 75%)" }}
        >
          <style>{`
            @keyframes ssDrop { from { opacity: 0; transform: translateY(-26px) scale(1.08); } to { opacity: 1; transform: none; } }
            .ss-drop { animation: ssDrop .8s cubic-bezier(.2,.8,.2,1) both; }
            @media (prefers-reduced-motion: reduce) { .ss-drop { animation: none; } }
          `}</style>
          {shown.map((layer, li) => {
            const pts = layer === "A" ? pointsA : layer === "B" ? pointsB : pointsC;
            const isTop = li === shown.length - 1;
            const radius = (R - 1) * [1, 0.7, 0.46][li] * (voids ? 0.9 : 1);
            return (
              <g key={`${layer}-${li}-${isTop ? tick : 0}-${mode}`} className={li > 0 && isTop ? "ss-drop" : undefined} opacity={li === shown.length - 1 ? 1 : 0.9}>
                {pts.map(([x, y]) => (
                  <circle
                    key={`${x.toFixed(1)}-${y.toFixed(1)}`}
                    cx={x}
                    cy={y}
                    r={radius}
                    fill={COLOR[layer]}
                    fillOpacity={0.92}
                    stroke={li === 2 && mode === "hcp" ? "#ffffff" : "#071311"}
                    strokeWidth={li === 2 && mode === "hcp" ? 2 : 1.2}
                  />
                ))}
              </g>
            );
          })}
          {voids &&
            step >= 2 &&
            pointsC.map(([x, y]) => (
              <g key={`o-${x.toFixed(1)}-${y.toFixed(1)}`}>
                <polygon
                  points={`${x},${y - 11} ${x + 10},${y} ${x},${y + 11} ${x - 10},${y}`}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={1.8}
                  opacity={step === 3 && mode === "ccp" ? 0.25 : 1}
                />
              </g>
            ))}
          {voids &&
            step >= 2 &&
            pointsB.map(([x, y]) => <circle key={`t-${x.toFixed(1)}-${y.toFixed(1)}`} cx={x} cy={y} r={4} fill="#e2606e" stroke="#071311" strokeWidth={1} />)}
          {voids && step >= 2 && pointsA.map(([x, y]) => <circle key={`ta-${x.toFixed(1)}-${y.toFixed(1)}`} cx={x} cy={y} r={4} fill="#e2606e" stroke="#071311" strokeWidth={1} />)}
        </svg>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => {
                setAuto(false);
                setStep(n);
                setTick((t) => t + 1);
              }}
              className={`rounded-md border px-3 py-1.5 font-semibold ${step === n ? "border-[var(--accent)] bg-[var(--accent)] text-black" : "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]"}`}
            >
              Layer {n} · {sequence[n - 1]}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setAuto((a) => !a)}
            className="rounded-md border border-[var(--border)] px-3 py-1.5 font-semibold text-[var(--foreground)] hover:border-[var(--accent)]"
          >
            {auto ? "Pause" : "Play build"}
          </button>
          <label className="ml-auto flex items-center gap-2 text-[var(--text-muted)]">
            <input type="checkbox" checked={voids} onChange={(e) => setVoids(e.target.checked)} className="accent-[var(--accent)]" />
            Show voids
          </label>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex gap-2" role="tablist" aria-label="Stacking sequence">
          {(
            [
              ["ccp", "ABC ABC… (CCP = FCC)"],
              ["hcp", "ABA BAB… (HCP)"],
            ] as const
          ).map(([k, t]) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={mode === k}
              onClick={() => {
                setMode(k);
                setTick((x) => x + 1);
              }}
              className={`flex-1 rounded-md border px-3 py-2 text-sm font-semibold ${mode === k ? "border-[var(--accent)] bg-[var(--accent)] text-black" : "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]"}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-6 text-[var(--foreground)]">
          {step === 1 && "Layer A: each sphere touches six others in the plane. This triangular arrangement is the densest possible in two dimensions."}
          {step === 2 && "Layer B: spheres settle into every other hollow of A (the amber positions). Only half the hollows can be used, because neighbouring hollows are too close together."}
          {step === 3 &&
            (mode === "ccp"
              ? "Layer C: the third layer sits over the hollows that B left open, so it lies directly above neither A nor B. The pattern ABCABC… repeats and generates the face-centred cubic lattice."
              : "Layer 3 sits directly above A, giving ABAB…. The hexagonal close-packed lattice has a hexagonal unit cell with six atoms.")}
        </div>

        <dl className="grid grid-cols-2 gap-2 text-sm">
          {[
            ["Coordination no.", "12 (6 + 3 + 3)"],
            ["Packing efficiency", "74.05 %"],
            ["Tetrahedral voids", "2 per sphere"],
            ["Octahedral voids", "1 per sphere"],
          ].map(([t, v]) => (
            <div key={t} className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2">
              <dt className="text-[11px] uppercase tracking-wide text-[var(--text-muted)]">{t}</dt>
              <dd className="font-mono font-bold text-[var(--foreground)]">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="text-xs leading-5 text-[var(--text-muted)]">
          Top view. White diamonds mark octahedral voids (the hollows left uncovered between layers A and B); red dots mark tetrahedral voids, which sit directly below each B sphere and directly above each A sphere.
          In ABC stacking layer C sits directly above the octahedral voids between layers 1 and 2 (they stay empty and are only hidden in this view); in ABA stacking layer 3 sits over A instead.
        </p>
      </div>
    </div>
  );
}
