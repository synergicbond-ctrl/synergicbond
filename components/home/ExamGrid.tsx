import Link from "next/link";
import {
  Microscope,
  Atom,
  Trophy,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const exams = [
  {
    title: "NEET",
    subtitle: "NCERT Mastery",
    description:
      "Complete preparation with NCERT, PYQs, revision and AI guidance.",
    href: "/revision",
    icon: Microscope,
    accent: "text-emerald-300",
    glow: "bg-emerald-500/10",
  },
  {
    title: "JEE",
    subtitle: "Advanced Chemistry",
    description:
      "Mechanisms, numerical problems, advanced concepts and practice.",
    href: "/dashboard",
    icon: Atom,
    accent: "text-cyan-300",
    glow: "bg-cyan-500/10",
  },
  {
    title: "Olympiad",
    subtitle: "International Level",
    description:
      "INChO, IChO and advanced chemistry beyond competitive exams.",
    href: "/olympiads",
    icon: Trophy,
    accent: "text-amber-300",
    glow: "bg-amber-500/10",
  },
  {
    title: "GATE",
    subtitle: "Engineering Chemistry",
    description:
      "Higher studies, engineering chemistry and formula revision.",
    href: "/dashboard",
    icon: GraduationCap,
    accent: "text-violet-300",
    glow: "bg-violet-500/10",
  },
];

export default function ExamGrid() {
  return (
    <section className="w-full">

      <div className="mb-10 text-center">

        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
          CHOOSE YOUR JOURNEY
        </p>

        <h2 className="mt-5 text-5xl font-black tracking-tight">
          Learn Your Way.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60">
          Every learner follows a different path. Choose your destination and
          let SYNERGIC BOND guide your journey.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {exams.map((exam) => {
          const Icon = exam.icon;

          return (
            <Link
              key={exam.title}
              href={exam.href}
              className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${exam.glow}`}
              >
                <Icon className={`h-8 w-8 ${exam.accent}`} />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
                {exam.subtitle}
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                {exam.title}
              </h3>

              <p className="mt-5 leading-7 text-white/60">
                {exam.description}
              </p>

              <div className="mt-10 flex items-center gap-2 font-medium text-cyan-300">

                Continue

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
}