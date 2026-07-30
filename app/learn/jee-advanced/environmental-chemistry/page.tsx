import Link from "next/link";
import { environmentalChemistryParts } from "./index";

export const metadata = {
  title: "Environmental Chemistry - JEE Advanced | Synergic Bond",
  description:
    "Environmental Chemistry notes for JEE Advanced covering air, water and soil pollution, smog, acid rain, ozone depletion, waste management and green chemistry.",
};

export default function EnvironmentalChemistryPage() {
  return (
    <main className="min-h-screen bg-[#03060b] px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <header className="border-b border-slate-800/90 pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300 sm:text-sm">
            JEE Advanced · Environmental Chemistry
          </p>
          <h1 className="mt-3 max-w-5xl bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            Environmental Chemistry
          </h1>
          <div className="mt-5 h-[3px] w-28 rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-amber-300" />
        </header>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {environmentalChemistryParts.map((part) => (
            <Link
              key={part.id}
              href={part.href}
              className="group rounded-2xl border border-slate-800 bg-[#070b12] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-[#09111c]"
            >
              <span className="text-sm font-extrabold tracking-[0.16em] text-cyan-300">
                PART {String(part.id).padStart(2, "0")}
              </span>
              <span className="mt-3 block text-lg font-bold leading-7 text-slate-100 transition group-hover:text-white">
                {part.title}
              </span>
              <span className="mt-4 block h-px w-full bg-gradient-to-r from-cyan-400/60 via-violet-400/35 to-transparent" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
