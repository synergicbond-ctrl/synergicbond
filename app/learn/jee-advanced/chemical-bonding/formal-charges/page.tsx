import { formalChargeNotes } from "./formal-charge-notes";

export const metadata = {
  title: "Formal Charges | Chemical Bonding | JEE Advanced",
  description:
    "Complete JEE Advanced study notes on formal charge, Lewis structures, resonance, bond order, polarity and hypervalent bonding.",
};

export default function FormalChargesPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-6xl">
        <header className="mb-8 border-b border-cyan-400/20 pb-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            JEE Advanced · Chemical Bonding
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Formal Charges
          </h1>
          <p className="mt-3 max-w-3xl text-slate-300">
            Complete combined study notes covering formal-charge calculation,
            Lewis structures, resonance contributors, charge placement,
            fractional bond order, polarity, hypervalent bonding and worked
            examples.
          </p>
        </header>

        <section
          aria-label="Complete Formal Charges notes"
          className="overflow-x-auto rounded-2xl border border-slate-700/70 bg-slate-950/65 shadow-2xl shadow-cyan-950/20"
        >
          <div className="min-w-[760px] p-6 sm:p-8 lg:p-10">
            <pre className="whitespace-pre-wrap font-sans text-[15px] leading-7 text-slate-200">
              {formalChargeNotes}
            </pre>
          </div>
        </section>
      </article>
    </main>
  );
}
