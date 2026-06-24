export default function NeetSection() {
  return (
    <section className="max-w-6xl mx-auto px-6">

      <h2 className="text-3xl font-bold">
        NEET CHEMISTRY
      </h2>

      <p className="text-white/60 mt-2">
        NCERT-based Chemistry preparation for NEET
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="p-6 border border-white/10 rounded-xl">
          <h3 className="text-xl font-semibold">Physical Chemistry</h3>
          <p className="text-white/60 mt-2">
            Thermodynamics • Equilibrium • Electrochemistry
          </p>
        </div>

        <div className="p-6 border border-white/10 rounded-xl">
          <h3 className="text-xl font-semibold">Organic Chemistry</h3>
          <p className="text-white/60 mt-2">
            Reactions • Biomolecules • Polymers
          </p>
        </div>

        <div className="p-6 border border-white/10 rounded-xl">
          <h3 className="text-xl font-semibold">Inorganic Chemistry</h3>
          <p className="text-white/60 mt-2">
            Coordination • Periodic Table • Bonding
          </p>
        </div>

      </div>

    </section>
  );
}