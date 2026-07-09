"use client";

interface ParticleRange {
  label: string;
  min: string;
  max: string;
  examples: string[];
  tyndall: boolean;
  color: string;
  bgColor: string;
}

export default function ParticleSizeSpectrum() {
  const ranges: ParticleRange[] = [
    {
      label: "True Solution",
      min: "<1",
      max: "1",
      examples: ["Salt water", "Sugar solution", "Vinegar"],
      tyndall: false,
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-950"
    },
    {
      label: "Colloid",
      min: "1",
      max: "1,000",
      examples: ["Milk", "Fog", "Smoke"],
      tyndall: true,
      color: "text-amber-700 dark:text-amber-300",
      bgColor: "bg-amber-50 dark:bg-amber-950"
    },
    {
      label: "Suspension",
      min: ">1,000",
      max: "—",
      examples: ["Sand in water", "Mud", "Talcum powder"],
      tyndall: true,
      color: "text-red-700 dark:text-red-300",
      bgColor: "bg-red-50 dark:bg-red-950"
    }
  ];

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
          Particle Size Spectrum
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Nanometers (nm) — range from 1×10<sup>−9</sup>m to visible matter
        </p>
      </div>

      {/* Scale ruler */}
      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
        <div className="flex items-end gap-1 h-16 mb-2 justify-between px-2">
          {[1, 10, 100, 1000, 10000].map((val, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1">
              <div className={`w-0.5 bg-slate-400 dark:bg-slate-600 ${idx % 2 === 0 ? "h-12" : "h-8"}`}></div>
              <span className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                {val < 1000 ? val : "1μ"}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 text-center font-mono">
          1 nm ———————→ 1 micron (1,000 nm) ———————→ 1 mm
        </p>
      </div>

      {/* Particle types */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {ranges.map((range, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl border-2 ${range.bgColor} ${range.color.replace("text-", "border-")}`}
          >
            <h3 className={`font-bold text-lg mb-1 ${range.color}`}>
              {range.label}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
              <span className="font-mono font-semibold">{range.min}–{range.max} nm ({range.min === "<1" ? "<10" : range.min === "1" ? "10" : ">10"}×10<sup>{range.min === "<1" ? "−9" : range.min === "1" ? "−6" : "−6"}</sup>m)</span>
            </p>

            <div className="space-y-2">
              <div>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  Examples:
                </p>
                <div className="space-y-1">
                  {range.examples.map((ex, eidx) => (
                    <p key={eidx} className="text-xs text-slate-700 dark:text-slate-300">
                      • {ex}
                    </p>
                  ))}
                </div>
              </div>

              <div className={`mt-3 p-2 rounded ${range.tyndall ? "bg-white dark:bg-slate-800" : "bg-slate-200 dark:bg-slate-700"}`}>
                <p className="text-xs font-semibold">
                  {range.tyndall ? "✓ Tyndall visible" : "✗ NO Tyndall effect"}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {range.tyndall ? "Light beam visible" : "Beam invisible"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 p-4 rounded-xl">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <span className="font-bold">💡 Tyndall Effect:</span> Scatter light when particles are suspended. Smaller particles = less scatter; larger = more visible beam.
        </p>
      </div>
    </div>
  );
}
