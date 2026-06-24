export default function JeeSection() {
  return (
    <section className="max-w-6xl mx-auto px-6">

      <h2 className="text-3xl font-bold">
        JEE CHEMISTRY
      </h2>

      <p className="text-white/60 mt-2">
        Structured Chemistry preparation for JEE Main & Advanced
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="p-6 border border-white/10 rounded-xl">
          <h3 className="text-xl font-semibold">Organic Chemistry</h3>
          <p className="text-white/60 mt-2">
            Mechanisms • Reactions • Named reactions
          </p>
        </div>

        <div className="p-6 border border-white/10 rounded-xl">
          <h3 className="text-xl font-semibold">Physical Chemistry</h3>
          <p className="text-white/60 mt-2">
            Thermodynamics • Equilibrium • Kinetics
          </p>
        </div>

        <div className="p-6 border border-white/10 rounded-xl">
          <h3 className="text-xl font-semibold">Inorganic Chemistry</h3>
          <p className="text-white/60 mt-2">
            Periodic Table • Bonding • Coordination compounds
          </p>
        </div>

      </div>

    </section>
  );
}