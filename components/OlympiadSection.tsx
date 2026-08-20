import { Trophy, Award, Crown, Sparkles } from "lucide-react";

export default function OlympiadSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-12 mt-20 overflow-hidden rounded-lg border border-[#f0bd36]/60 bg-[var(--surface)]">
      {/* Championship Gold & Royal Violet Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b1a_1px,transparent_1px)] [background-size:28px_28px] opacity-50" />
      </div>

      <div className="text-center max-w-3xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#f0bd36]/60 bg-[#f0bd36]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.4em] text-[#f0bd36] shadow-sm mb-4">
          <Crown className="h-3.5 w-3.5 text-[#f0bd36]" />
          CHAMPIONSHIP PRESTIGE
        </div>

        <h2 className="text-4xl sm:text-5xl font-black tracking-tight drop-shadow-sm">
            <span className="bg-[linear-gradient(90deg,#f0bd36_0%,#ff8b6b_45%,#b889ff_100%)] bg-clip-text text-transparent">
            Olympiad CHEMISTRY
          </span>
        </h2>

        <p className="text-white/75 mt-3 text-base sm:text-lg font-medium tracking-wide">
          International chemistry competition preparation system
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12 relative z-10">
        <div className="group relative overflow-hidden rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--border-strong)] hover:border-[var(--border-strong)]">
          <div className="flex items-center justify-between mb-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-[var(--radius)] bg-[var(--surface-2)] border border-[var(--border-strong)] text-[var(--text-muted)] group-hover:scale-110 transition-transform">
              <Trophy className="h-6 w-6" />
            </span>
            <span className="rounded-full bg-[var(--surface-2)] border border-[var(--border-strong)] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[var(--text-muted)]">
              National
            </span>
          </div>
          <h3 className="text-2xl font-black !text-[#f0bd36] group-hover:!text-[#f0bd36] transition-colors">INChO</h3>
          <p className="text-white/70 mt-2.5 text-sm leading-relaxed font-medium">
            Indian National Chemistry Olympiad
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--border-strong)] hover:border-[var(--border-strong)]">
          <div className="flex items-center justify-between mb-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-[var(--radius)] bg-[var(--surface-2)] border border-[var(--border-strong)] text-[var(--text-muted)] group-hover:scale-110 transition-transform">
              <Crown className="h-6 w-6" />
            </span>
            <span className="rounded-full bg-[var(--surface-2)] border border-[var(--border-strong)] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[var(--text-muted)]">
              Global Finals
            </span>
          </div>
          <h3 className="text-2xl font-black !text-[#b889ff] group-hover:!text-[#b889ff] transition-colors">IChO</h3>
          <p className="text-white/70 mt-2.5 text-sm leading-relaxed font-medium">
            International Chemistry Olympiad
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--border-strong)] hover:border-[var(--border-strong)]">
          <div className="flex items-center justify-between mb-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-[var(--radius)] bg-[var(--surface-2)] border border-[var(--border-strong)] text-[var(--text-muted)] group-hover:scale-110 transition-transform">
              <Award className="h-6 w-6" />
            </span>
            <span className="rounded-full bg-[var(--surface-2)] border border-[var(--border-strong)] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[var(--text-muted)]">
              USA Honors
            </span>
          </div>
          <h3 className="text-2xl font-black !text-[#ff8b6b] group-hover:!text-[#ff8b6b] transition-colors">USNCO</h3>
          <p className="text-white/70 mt-2.5 text-sm leading-relaxed font-medium">
            US National Chemistry Olympiad
          </p>
        </div>
      </div>
    </section>
  );
}
