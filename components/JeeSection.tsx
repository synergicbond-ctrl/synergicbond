import Link from "next/link";
import {
  Atom,
  Orbit,
  FlaskConical,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const features = [
  "Advanced Theory",
  "Previous Year Questions",
  "Mechanism Practice",
  "AI Doubt Solver",
];

export default function JeeSection() {
  return (
    <section className="relative mx-auto mt-36 max-w-7xl px-6 py-12 overflow-hidden rounded-[40px] border border-[#37c8f4]/60 bg-[var(--surface)]" style={{ boxShadow: "inset 0 1px 0 #37c8f426, 0 24px 70px -50px #37c8f4" }}>
      {/* High-Tech Grid & Radial Glow Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-[var(--surface-2)] blur-[130px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[var(--surface-2)] blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="grid items-center gap-16 lg:grid-cols-2 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#37c8f4]/60 bg-[#37c8f4]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.4em] text-[#37c8f4] shadow-sm mb-6">
            <Sparkles className="h-3.5 w-3.5 text-[#37c8f4]" />
            JEE ADVANCED
          </div>

          <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#37c8f4] drop-shadow-sm">
            Master
            <br />
            <span className="text-[#f0bd36]">
              Advanced Chemistry
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/70">
            Built for aspirants targeting the highest ranks with conceptual
            clarity, advanced mechanisms, numerical chemistry and rigorous
            problem solving.
          </p>

          <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
            {features.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3.5 rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--surface-2)] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:bg-[var(--surface-2)] hover:"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--text-muted)] group-hover:scale-110 transition-transform">
                  <Atom className="h-4 w-4" />
                </span>
                <span className="text-sm font-bold text-white/90 group-hover:text-white">{item}</span>
              </div>
            ))}
          </div>

          <Link
            href="/dashboard"
            className="group mt-10 inline-flex items-center gap-2.5 rounded-[var(--radius)] bg-[#37c8f4] px-8 py-4 font-extrabold text-black shadow-[0_10px_30px_rgba(55,200,244,0.35)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
          >
            <span>Start JEE Preparation</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative rounded-[36px] border border-[var(--border-strong)] bg-[var(--surface)] -900/40 via-[#0F172A]/80 p-8 sm:p-12 shadow-2xl overflow-hidden">
          <div className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-[var(--surface-2)] blur-3xl" />
          
          <div className="grid gap-8 relative z-10">
            <div className="group flex items-start gap-5 rounded-[var(--radius)] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-white/[0.06]">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius)] bg-[var(--surface-2)] border border-[var(--border-strong)] shadow-inner group-hover:scale-110 transition-transform">
                <Orbit className="h-7 w-7 text-[var(--text-muted)]" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--text-muted)] transition-colors">
                  Mechanism Visualizer
                </h3>
                <p className="mt-1.5 text-sm text-white/65 leading-relaxed">
                  Interactive organic reaction pathways.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-5 rounded-[var(--radius)] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-white/[0.06]">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius)] bg-[var(--surface-2)] border border-[var(--border-strong)] shadow-inner group-hover:scale-110 transition-transform">
                <FlaskConical className="h-7 w-7 text-[var(--text-muted)]" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--text-muted)] transition-colors">
                  Unlimited Practice
                </h3>
                <p className="mt-1.5 text-sm text-white/65 leading-relaxed">
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
