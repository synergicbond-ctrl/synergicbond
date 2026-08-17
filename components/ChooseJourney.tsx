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
    subtitle: "NCERT • PYQs • Revision • Hindi",
    label: "NCERT MASTERY",
    tools: ["AI Notes", "Quiz", "Mock Exam", "AI Tutor"],
    icon: Microscope,
    href: "/neet",
    accent: "text-[var(--accent)]",
    glow: "",
    border: "hover:border-[var(--border)]",
  },
  {
    title: "JEE",
    subtitle: "Main & Advanced • Mechanisms • Numericals",
    label: "ADVANCED CHEMISTRY",
    tools: ["AI Notes", "Assignments", "Mock Exam", "Vision AI"],
    icon: Atom,
    href: "/jee",
    accent: "text-[var(--accent)]",
    glow: "",
    border: "hover:border-[var(--border)]",
  },
  {
    title: "Olympiad",
    subtitle: "NSEC • INChO • IChO • USNCO",
    label: "INTERNATIONAL LEVEL",
    tools: ["University Notes", "Synthesis Problems", "Mock Papers", "Mechanism AI"],
    icon: Trophy,
    href: "/olympiad",
    accent: "text-[var(--accent)]",
    glow: "",
    border: "hover:border-[var(--border)]",
  },
  {
    title: "GATE",
    subtitle: "Higher Studies • Engineering Chemistry",
    label: "ENGINEERING CHEMISTRY",
    tools: ["Graduate Notes", "NAT Questions", "Mock Exam", "Formula Vault"],
    icon: GraduationCap,
    href: "/gate",
    accent: "text-[var(--accent)]",
    glow: "",
    border: "hover:border-[var(--border)]",
  },
];

export default function ChooseJourney() {
  return (
    <section className="mx-auto mt-36 max-w-7xl px-6">

      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--text-muted)]">
          CHOOSE YOUR JOURNEY
        </p>

        <h2 className="mt-5 text-5xl font-black">
          One Platform.
          <br />
          Four Learning Paths.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
          Whether you&apos;re preparing for NEET, JEE, Olympiads or GATE,
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
              className={`group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 ${item.border}`}
            >

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">{item.label}</p>

                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-white/10 bg-[var(--surface)]">
                  <Icon className={`h-7 w-7 ${item.accent}`} />
                </div>

                <h3 className="mt-6 text-3xl font-bold">{item.title}</h3>
                <p className="mt-2 text-white/50 text-sm">{item.subtitle}</p>

                <div className="mt-5 space-y-1">
                  {item.tools.map((tool) => (
                    <div key={tool} className="flex items-center gap-2 text-xs text-white/40">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.accent.replace("text-", "bg-")}`} />
                      {tool}
                    </div>
                  ))}
                </div>

                <div className={`mt-6 flex items-center gap-2 font-medium ${item.accent}`}>
                  Start Learning
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
