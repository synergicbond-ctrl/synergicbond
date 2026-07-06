import { Trophy, Award, Crown, Sparkles } from "lucide-react";

export default function OlympiadSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-12 mt-20 overflow-hidden rounded-[40px] border border-amber-500/30 bg-gradient-to-br from-[#0B0F19] via-[#1E1B4B]/30 to-[#0B0F19] shadow-[0_0_80px_-15px_rgba(245,158,11,0.25)]">
      {/* Championship Gold & Royal Violet Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-500/15 blur-[130px]" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b1a_1px,transparent_1px)] [background-size:28px_28px] opacity-50" />
      </div>

      <div className="text-center max-w-3xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.4em] text-amber-300 shadow-sm mb-4">
          <Crown className="h-3.5 w-3.5 text-amber-400" />
          CHAMPIONSHIP PRESTIGE
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-sm">
          <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-purple-400 bg-clip-text text-transparent">
            Olympiad CHEMISTRY
          </span>
        </h2>

        <p className="text-white/75 mt-3 text-base sm:text-lg font-medium tracking-wide">
          International chemistry competition preparation system
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12 relative z-10">
        <div className="group relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-b from-[#111827]/90 to-[#0B0F19]/90 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/60 hover:shadow-[0_20px_40px_rgba(245,158,11,0.25)]">
          <div className="flex items-center justify-between mb-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 group-hover:scale-110 transition-transform">
              <Trophy className="h-6 w-6" />
            </span>
            <span className="rounded-full bg-amber-500/15 border border-amber-500/30 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
              National
            </span>
          </div>
          <h3 className="text-2xl font-black text-white group-hover:text-amber-300 transition-colors">INChO</h3>
          <p className="text-white/70 mt-2.5 text-sm leading-relaxed font-medium">
            Indian National Chemistry Olympiad
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-b from-[#111827]/90 to-[#0B0F19]/90 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-[0_20px_40px_rgba(168,85,247,0.25)]">
          <div className="flex items-center justify-between mb-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300 group-hover:scale-110 transition-transform">
              <Crown className="h-6 w-6" />
            </span>
            <span className="rounded-full bg-purple-500/15 border border-purple-500/30 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-purple-300">
              Global Finals
            </span>
          </div>
          <h3 className="text-2xl font-black text-white group-hover:text-purple-300 transition-colors">IChO</h3>
          <p className="text-white/70 mt-2.5 text-sm leading-relaxed font-medium">
            International Chemistry Olympiad
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-yellow-500/30 bg-gradient-to-b from-[#111827]/90 to-[#0B0F19]/90 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/60 hover:shadow-[0_20px_40px_rgba(234,179,8,0.25)]">
          <div className="flex items-center justify-between mb-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 group-hover:scale-110 transition-transform">
              <Award className="h-6 w-6" />
            </span>
            <span className="rounded-full bg-yellow-500/15 border border-yellow-500/30 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-yellow-300">
              USA Honors
            </span>
          </div>
          <h3 className="text-2xl font-black text-white group-hover:text-yellow-300 transition-colors">USNCO</h3>
          <p className="text-white/70 mt-2.5 text-sm leading-relaxed font-medium">
            US National Chemistry Olympiad
          </p>
        </div>
      </div>
    </section>
  );
}