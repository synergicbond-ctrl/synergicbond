import Link from "next/link";
import { environmentalChemistryParts } from "./index";

export const metadata = {
  title: "Environmental Chemistry - JEE Advanced | Synergic Bond",
  description:
    "Environmental Chemistry notes for JEE Advanced covering air, water and soil pollution, smog, acid rain, ozone depletion, waste management and green chemistry.",
};

const partThemes = [
  "border-cyan-400/25 bg-cyan-400/[0.055] hover:border-cyan-300/60 hover:shadow-[0_14px_36px_rgba(34,211,238,0.10)]",
  "border-violet-400/25 bg-violet-400/[0.055] hover:border-violet-300/60 hover:shadow-[0_14px_36px_rgba(139,92,246,0.10)]",
  "border-amber-400/25 bg-amber-400/[0.055] hover:border-amber-300/60 hover:shadow-[0_14px_36px_rgba(245,158,11,0.10)]",
  "border-emerald-400/25 bg-emerald-400/[0.055] hover:border-emerald-300/60 hover:shadow-[0_14px_36px_rgba(16,185,129,0.10)]",
  "border-rose-400/25 bg-rose-400/[0.055] hover:border-rose-300/60 hover:shadow-[0_14px_36px_rgba(244,63,94,0.10)]",
];

const labelThemes = ["text-cyan-200", "text-violet-200", "text-amber-200", "text-emerald-200", "text-rose-200"];
const lineThemes = [
  "from-cyan-400 via-blue-400 to-violet-400",
  "from-violet-400 via-fuchsia-400 to-rose-400",
  "from-amber-400 via-orange-400 to-rose-400",
  "from-emerald-400 via-cyan-400 to-blue-400",
  "from-rose-400 via-pink-400 to-amber-400",
];

export default function EnvironmentalChemistryPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.07),transparent_25%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_28%),radial-gradient(circle_at_bottom_center,rgba(244,63,94,0.05),transparent_30%),#03060b] px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <header className="relative overflow-hidden border-b border-violet-400/20 pb-9">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-fuchsia-400/[0.08] blur-3xl" />
          <p className="relative text-xs font-bold uppercase tracking-[0.24em] text-cyan-300 sm:text-sm">
            JEE Advanced · Environmental Chemistry
          </p>
          <h1 className="relative mt-3 max-w-5xl bg-gradient-to-r from-cyan-200 via-blue-300 via-violet-300 to-orange-200 bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            Environmental Chemistry
          </h1>
          <div className="relative mt-5 h-[4px] w-36 rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 via-rose-400 to-amber-300" />
        </header>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {environmentalChemistryParts.map((part, index) => (
            <Link
              key={part.id}
              href={part.href}
              className={`group relative overflow-hidden rounded-2xl border p-5 transition duration-200 hover:-translate-y-1 ${partThemes[index % partThemes.length]}`}
            >
              <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${lineThemes[index % lineThemes.length]}`} />
              <span className={`text-sm font-extrabold tracking-[0.16em] ${labelThemes[index % labelThemes.length]}`}>
                PART {String(part.id).padStart(2, "0")}
              </span>
              <span className="mt-3 block text-lg font-bold leading-7 text-slate-100 transition group-hover:text-white">
                {part.title}
              </span>
              <span className={`mt-5 block h-px w-full bg-gradient-to-r to-transparent ${lineThemes[index % lineThemes.length]}`} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
