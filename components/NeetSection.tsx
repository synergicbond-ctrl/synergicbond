import { Microscope, Dna, Activity, Sparkles } from "lucide-react";

export default function NeetSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-12 mt-20 overflow-hidden rounded-[40px] border border-[#65d69a]/60 bg-[var(--surface)]" style={{ boxShadow: "inset 0 1px 0 #65d69a26, 0 24px 70px -50px #65d69a" }}>
      {/* Ambient Biological / Molecular Motif Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-10 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[var(--surface-2)] blur-[120px]" />
        <div className="absolute left-10 bottom-0 h-80 w-80 rounded-full bg-[var(--surface-2)] blur-[120px]" />
        
        {/* Subtle DNA / Molecular Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b9811a_1px,transparent_1px)] [background-size:24px_24px] opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="text-center max-w-3xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#65d69a]/60 bg-[#65d69a]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.4em] text-[#65d69a] shadow-sm mb-4">
          <Sparkles className="h-3.5 w-3.5 text-[#65d69a]" />
          MEDICAL CLARITY
        </div>

        <h2 className="text-4xl sm:text-5xl font-black tracking-tight drop-shadow-sm">
            <span className="bg-[linear-gradient(90deg,#65d69a_0%,#37c8f4_50%,#b889ff_100%)] bg-clip-text text-transparent">
            NEET CHEMISTRY
          </span>
        </h2>

        <p className="text-white/75 mt-3 text-base sm:text-lg font-medium tracking-wide">
          NCERT-based Chemistry preparation for NEET
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12 relative z-10">
        <div className="group relative overflow-hidden rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--background)]/80 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--border-strong)] hover:bg-[#064E3B]/30 hover:shadow-[0_15px_35px_rgba(16,185,129,0.2)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius)] bg-[var(--surface-2)] border border-[var(--border-strong)] mb-5 text-[var(--text-muted)] group-hover:scale-110 transition-transform">
            <Activity className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold !text-[#65d69a] group-hover:!text-[#65d69a] transition-colors">Physical Chemistry</h3>
          <p className="text-white/65 mt-2.5 text-sm leading-relaxed font-medium">
            Thermodynamics • Equilibrium • Electrochemistry
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--background)]/80 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--border-strong)] hover:bg-[#083344]/30 hover:shadow-[0_15px_35px_rgba(6,182,212,0.2)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius)] bg-[var(--surface-2)] border border-[var(--border-strong)] mb-5 text-[var(--text-muted)] group-hover:scale-110 transition-transform">
            <Dna className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold !text-[#37c8f4] group-hover:!text-[#37c8f4] transition-colors">Organic Chemistry</h3>
          <p className="text-white/65 mt-2.5 text-sm leading-relaxed font-medium">
            Reactions • Biomolecules • Polymers
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--background)]/80 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--border-strong)] hover:bg-[#0f766e]/30 hover:shadow-[0_15px_35px_rgba(20,184,166,0.2)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius)] bg-[var(--surface-2)] border border-[var(--border-strong)] mb-5 text-[var(--text-muted)] group-hover:scale-110 transition-transform">
            <Microscope className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold !text-[#b889ff] group-hover:!text-[#b889ff] transition-colors">Inorganic Chemistry</h3>
          <p className="text-white/65 mt-2.5 text-sm leading-relaxed font-medium">
            Coordination • Periodic Table • Bonding
          </p>
        </div>
      </div>
    </section>
  );
}
