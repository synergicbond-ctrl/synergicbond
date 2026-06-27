import Link from "next/link";
import { Microscope, Atom, Trophy, GraduationCap, ArrowRight } from "lucide-react";

const exams = [
  {
    title: "NEET",
    subtitle: "NCERT Mastery",
    description: "Complete preparation with NCERT, PYQs, revision and AI guidance.",
    href: "/revision",
    icon: Microscope,
    pill: "LVL 11-12",
    badge: "NCERT MODE",
    accent: "#00F5D4",
    shadow: "rgba(0,245,212,0.18)",
    border: "rgba(0,245,212,0.35)",
    glow: "group-hover:shadow-[0_0_40px_rgba(0,245,212,0.2)]",
    borderHover: "group-hover:border-[rgba(0,245,212,0.5)]",
    iconBg: "bg-cyan-950/50",
    iconColor: "text-[#00F5D4]",
    pillColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  {
    title: "JEE",
    subtitle: "Advanced Chemistry",
    description: "Mechanisms, numerical problems, advanced concepts and practice.",
    href: "/dashboard",
    icon: Atom,
    pill: "ADV MODE",
    badge: "RANK BOOSTER ACTIVE",
    accent: "#9B5DE5",
    shadow: "rgba(155,93,229,0.18)",
    border: "rgba(155,93,229,0.35)",
    glow: "group-hover:shadow-[0_0_40px_rgba(155,93,229,0.2)]",
    borderHover: "group-hover:border-[rgba(155,93,229,0.5)]",
    iconBg: "bg-purple-950/50",
    iconColor: "text-[#9B5DE5]",
    pillColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  },
  {
    title: "Olympiad",
    subtitle: "International Level",
    description: "INChO, IChO and advanced chemistry beyond competitive exams.",
    href: "/olympiads",
    icon: Trophy,
    pill: "ELITE TIER",
    badge: "INTERNATIONAL MODE",
    accent: "#FFD700",
    shadow: "rgba(255,215,0,0.15)",
    border: "rgba(255,215,0,0.35)",
    glow: "group-hover:shadow-[0_0_40px_rgba(255,215,0,0.18)]",
    borderHover: "group-hover:border-[rgba(255,215,0,0.5)]",
    iconBg: "bg-amber-950/50",
    iconColor: "text-[#FFD700]",
    pillColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  },
  {
    title: "GATE",
    subtitle: "Engineering Chemistry",
    description: "Higher studies, engineering chemistry and formula revision.",
    href: "/dashboard",
    icon: GraduationCap,
    pill: "PG LEVEL",
    badge: "ENGINEERING CORE",
    accent: "#10B981",
    shadow: "rgba(16,185,129,0.15)",
    border: "rgba(16,185,129,0.35)",
    glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.18)]",
    borderHover: "group-hover:border-[rgba(16,185,129,0.5)]",
    iconBg: "bg-emerald-950/50",
    iconColor: "text-emerald-400",
    pillColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
];

export default function ExamGrid() {
  return (
    <section className="w-full mt-16">

      <div className="mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-3">
          — SELECT YOUR TRACK —
        </p>
        <h2 className="text-4xl font-black tracking-tight text-white">
          Choose Your Journey
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/50 text-sm leading-relaxed">
          Every scholar follows a different path. Select your destination and let SYNERGIC BOND guide you there.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {exams.map((exam) => {
          const Icon = exam.icon;
          return (
            <Link
              key={exam.title}
              href={exam.href}
              className={`group relative rounded-2xl border bg-[#111827] p-6 transition-all duration-300 hover:-translate-y-2 ${exam.borderHover} ${exam.glow}`}
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              {/* Status badge top right */}
              <div className={`absolute top-4 right-4 text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full border ${exam.pillColor}`}>
                {exam.badge}
              </div>

              {/* Icon */}
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${exam.iconBg} mb-5`}>
                <Icon className={`h-6 w-6 ${exam.iconColor}`} />
              </div>

              {/* Level pill */}
              <span className={`inline-flex text-[10px] font-bold tracking-widest px-2.5 py-0.5 rounded-full border mb-3 ${exam.pillColor}`}>
                ⚡ {exam.pill}
              </span>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-1.5">
                {exam.subtitle}
              </p>
              <h3 className="text-2xl font-black text-white mb-3">
                {exam.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50 mb-6">
                {exam.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-200" style={{ color: exam.accent }}>
                Enter Track
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              {/* Subtle bottom glow line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[1px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, transparent, ${exam.accent}, transparent)` }}
              />
            </Link>
          );
        })}
      </div>

    </section>
  );
}
