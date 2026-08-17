import Link from "next/link";
import { saltAnalysisParts } from "./index";

export const metadata = {
  title: "Salt Analysis - JEE Advanced | Synergic Bond",
  description:
    "Comprehensive salt analysis notes with reactions, tests, separation schemes, solubility charts, JEE traps and visual explanations.",
};

const sfProFont =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

const cardThemes = [
  {
    border: "from-cyan-400/70 via-sky-400/45 to-blue-400/60",
    number: "from-cyan-300 to-blue-400",
    hover: "group-hover:text-cyan-200",
  },
  {
    border: "from-indigo-400/65 via-violet-400/50 to-fuchsia-400/60",
    number: "from-indigo-300 to-fuchsia-400",
    hover: "group-hover:text-violet-200",
  },
  {
    border: "from-fuchsia-400/65 via-pink-400/45 to-rose-400/60",
    number: "from-fuchsia-300 to-rose-400",
    hover: "group-hover:text-fuchsia-200",
  },
  {
    border: "from-rose-400/65 via-orange-400/45 to-amber-400/60",
    number: "from-rose-300 to-amber-400",
    hover: "group-hover:text-orange-200",
  },
  {
    border: "from-amber-400/65 via-lime-400/45 to-emerald-400/60",
    number: "from-amber-300 to-emerald-400",
    hover: "group-hover:text-amber-200",
  },
  {
    border: "from-lime-400/65 via-emerald-400/45 to-teal-400/60",
    number: "from-lime-300 to-teal-400",
    hover: "group-hover:text-emerald-200",
  },
  {
    border: "from-teal-400/65 via-cyan-400/45 to-sky-400/60",
    number: "from-teal-300 to-sky-400",
    hover: "group-hover:text-teal-200",
  },
  {
    border: "from-sky-400/65 via-indigo-400/45 to-violet-400/60",
    number: "from-sky-300 to-violet-400",
    hover: "group-hover:text-sky-200",
  },
  {
    border: "from-violet-400/65 via-rose-400/45 to-orange-400/60",
    number: "from-violet-300 to-orange-400",
    hover: "group-hover:text-rose-200",
  },
];

export default function SaltAnalysisPage() {
  return (
    <main
      className="min-h-screen bg-[#03070d] px-4 py-10 text-slate-100 sm:px-6"
      style={{
        fontFamily: sfProFont,
        backgroundImage:
          "radial-gradient(circle at 8% 0%, rgba(34,211,238,0.12), transparent 24%), radial-gradient(circle at 92% 4%, rgba(168,85,247,0.12), transparent 26%), radial-gradient(circle at 50% 100%, rgba(251,146,60,0.08), transparent 30%)",
      }}
    >
      <section className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.22em]">
            <span className="text-cyan-300">JEE Advanced</span>
            <span className="mx-2 text-slate-600">·</span>
            <span className="text-violet-300">Inorganic Chemistry</span>
          </p>
          <span className="rounded-full border border-amber-400/25 bg-amber-950/25 px-3 py-1 text-xs font-bold text-amber-300">
            High-yield chapter
          </span>
        </div>

        <h1 className="mt-5 max-w-5xl bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-6xl"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #67e8f9 0%, #7dd3fc 16%, #a5b4fc 32%, #c4b5fd 48%, #f0abfc 64%, #fda4af 80%, #fdba74 100%)",
          }}>
          Salt Analysis / Qualitative Analysis
        </h1>

        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
          A complete JEE Advanced chapter on{" "}
          <strong className="text-cyan-300">systematic separation</strong>,{" "}
          <strong className="text-violet-300">selective reactions</strong>,{" "}
          <strong className="text-amber-300">confirmatory tests</strong>,{" "}
          <strong className="text-emerald-300">ionic equilibria</strong> and{" "}
          <strong className="text-rose-300">analytical reasoning</strong>.
        </p>

        <div className="mt-6 rounded-lg bg-gradient-to-r from-cyan-400/55 via-violet-400/45 to-amber-400/55 p-px">
          <div className="rounded-[15px] bg-[#07101c]/95 px-5 py-4 text-sm leading-7 text-slate-300 sm:text-base">
            <strong className="text-cyan-300">Scope:</strong> preliminary
            examination, dry and wet tests, anion analysis, cation group
            separation, interfering radicals, solubility logic, complexes,
            exceptions, worked examples and final revision.
          </div>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {saltAnalysisParts.map((part, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <Link
                key={part.id}
                href={part.href}
                className={`group rounded-lg bg-gradient-to-br ${theme.border} p-px transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30`}
              >
                <span className="block h-full rounded-[15px] bg-[#060b13]/95 p-4 transition group-hover:bg-[#091322]">
                  <span
                    className={`inline-block bg-gradient-to-r ${theme.number} bg-clip-text text-xl font-black text-transparent`}
                  >
                    {String(part.id).padStart(2, "0")}
                  </span>
                  <span
                    className={`mt-2 block leading-6 text-slate-200 transition ${theme.hover}`}
                  >
                    {part.title}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
