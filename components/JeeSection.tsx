import Link from "next/link";
import {
  Atom,
  Orbit,
  FlaskConical,
  ArrowRight,
} from "lucide-react";

const features = [
  "Advanced Theory",
  "Previous Year Questions",
  "Mechanism Practice",
  "AI Doubt Solver",
];

export default function JeeSection() {
  return (
    <section className="mx-auto mt-36 max-w-7xl px-6">

      <div className="grid items-center gap-16 lg:grid-cols-2">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-amber-300">
            JEE ADVANCED
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            Master
            <br />
            Advanced Chemistry
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/60">
            Built for aspirants targeting the highest ranks with conceptual
            clarity, advanced mechanisms, numerical chemistry and rigorous
            problem solving.
          </p>

          <div className="mt-10 grid gap-4">

            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
              >
                <Atom className="h-5 w-5 text-cyan-300" />
                <span>{item}</span>
              </div>
            ))}

          </div>

          <Link
            href="/dashboard"
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 px-8 py-4 font-semibold text-black transition hover:-translate-y-1"
          >
            Start JEE Preparation
            <ArrowRight className="h-5 w-5" />
          </Link>

        </div>

        <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-black to-violet-500/10 p-12">

          <div className="grid gap-8">

            <div className="flex items-center gap-5">
              <Orbit className="h-10 w-10 text-cyan-300" />
              <div>
                <h3 className="text-2xl font-bold">
                  Mechanism Visualizer
                </h3>
                <p className="mt-2 text-white/60">
                  Interactive organic reaction pathways.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FlaskConical className="h-10 w-10 text-orange-300" />
              <div>
                <h3 className="text-2xl font-bold">
                  Unlimited Practice
                </h3>
                <p className="mt-2 text-white/60">
                  Chapter-wise adaptive question bank.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}