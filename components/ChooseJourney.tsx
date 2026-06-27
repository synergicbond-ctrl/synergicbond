import Link from "next/link";
import {
  Microscope,
  Atom,
  Trophy,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const journeys = [
  {
    title: "NEET",
    subtitle: "NCERT • PYQs • Revision",
    icon: Microscope,
    href: "/revision",
    accent: "text-emerald-300",
    glow: "from-emerald-500/20 to-transparent",
  },
  {
    title: "JEE",
    subtitle: "Advanced • Mechanisms • Problems",
    icon: Atom,
    href: "/dashboard",
    accent: "text-cyan-300",
    glow: "from-cyan-500/20 to-transparent",
  },
  {
    title: "Olympiad",
    subtitle: "INChO • IChO • Theory",
    icon: Trophy,
    href: "/olympiads",
    accent: "text-amber-300",
    glow: "from-amber-500/20 to-transparent",
  },
  {
    title: "GATE",
    subtitle: "Engineering Chemistry",
    icon: GraduationCap,
    href: "/dashboard",
    accent: "text-violet-300",
    glow: "from-violet-500/20 to-transparent",
  },
];

export default function ChooseJourney() {
  return (
    <section className="mx-auto mt-36 max-w-7xl px-6">

      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
          CHOOSE YOUR JOURNEY
        </p>

        <h2 className="mt-5 text-5xl font-black">
          One Platform.
          <br />
          Four Learning Paths.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
          Whether you're preparing for NEET, JEE, Olympiads or GATE,
          SYNERGIC BOND adapts to your learning journey.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {journeys.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-0 transition duration-500 group-hover:opacity-100`} />

              <div className="relative">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/40">
                  <Icon className={`h-8 w-8 ${item.accent}`} />
                </div>

                <h3 className="mt-8 text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-white/60">
                  {item.subtitle}
                </p>

                <div className="mt-10 flex items-center gap-2 font-medium text-cyan-300">
                  Continue
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>

              </div>
            </Link>
          );
        })}
      </div>

    </section>
  );
}