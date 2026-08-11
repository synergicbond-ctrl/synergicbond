import { Trophy, Award, Crown, Sparkles } from "lucide-react";

export default function OlympiadSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-12 mt-20 overflow-hidden rounded-[40px] border border-[var(--border-strong)] bg-[var(--surface)]">
      {/* Championship Gold & Royal Violet Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--surface-2)] blur-[130px]" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-[var(--surface-2)] blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b1a_1px,transparent_1px)] [background-size:28px_28px] opacity-50" />
      </div>

      <div className="text-center max-w-3xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-2)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.4em] text-[var(--text-muted)] shadow-sm mb-4">
          <Crown className="h-3.5 w-3.5 text-[var(--text-muted)]" />
          CHAMPIONSHIP PRESTIGE
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-sm">
          <span className="bg-[var(--surface)] -400  bg-clip-text text-transparent">
            Olympiad CHEMISTRY
          </span>
        </h2>

        <p className="text-white/75 mt-3 text-base sm:text-lg font-medium tracking-wide">
          International chemistry competition preparation system
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12 relative z-10">
        <div className="group relative overflow-hidden rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--border-strong)] hover:shadow-[0_20px_40px_rgba(245,158,11,0.25)]">
          <div className="flex items-center justify-between mb-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-[var(--radius)] bg-[var(--surface-2)] border border-[var(--border-strong)] text-[var(--text-muted)] group-hover:scale-110 transition-transform">
              <Trophy className="h-6 w-6" />
            </span>
            <span className="rounded-full bg-[var(--surface-2)] border border-[var(--border-strong)] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[var(--text-muted)]">
              National
            </span>
          </div>
          <h3 className="text-2xl font-black text-white group-hover:text-[var(--text-muted)] transition-colors">INChO</h3>
          <p className="text-white/70 mt-2.5 text-sm leading-relaxed font-medium">
            Indian National Chemistry Olympiad
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--border-strong)] hover:shadow-[0_20px_40px_rgba(168,85,247,0.25)]">
          <div className="flex items-center justify-between mb-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-[var(--radius)] bg-[var(--surface-2)] border border-[var(--border-strong)] text-[var(--text-muted)] group-hover:scale-110 transition-transform">
              <Crown className="h-6 w-6" />
            </span>
            <span className="rounded-full bg-[var(--surface-2)] border border-[var(--border-strong)] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[var(--text-muted)]">
              Global Finals
            </span>
          </div>
          <h3 className="text-2xl font-black text-white group-hover:text-[var(--text-muted)] transition-colors">IChO</h3>
          <p className="text-white/70 mt-2.5 text-sm leading-relaxed font-medium">
            International Chemistry Olympiad
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--border-strong)] hover:shadow-[0_20px_40px_rgba(234,179,8,0.25)]">
          <div className="flex items-center justify-between mb-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-[var(--radius)] bg-[var(--surface-2)] border border-[var(--border-strong)] text-[var(--text-muted)] group-hover:scale-110 transition-transform">
              <Award className="h-6 w-6" />
            </span>
            <span className="rounded-full bg-[var(--surface-2)] border border-[var(--border-strong)] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[var(--text-muted)]">
              USA Honors
            </span>
          </div>
          <h3 className="text-2xl font-black text-white group-hover:text-[var(--text-muted)] transition-colors">USNCO</h3>
          <p className="text-white/70 mt-2.5 text-sm leading-relaxed font-medium">
            US National Chemistry Olympiad
          </p>
        </div>
      </div>
    </section>
  );
}