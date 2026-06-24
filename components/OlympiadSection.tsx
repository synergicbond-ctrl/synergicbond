export default function OlympiadSection() {
  return (
    <section className="max-w-6xl mx-auto px-6">

      <h2 className="text-3xl font-bold">
        Olympiad CHEMISTRY
      </h2>

      <p className="text-white/60 mt-2">
        International chemistry competition preparation system
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="p-6 border border-white/10 rounded-xl">
          <h3 className="text-xl font-semibold">INChO</h3>
          <p className="text-white/60 mt-2">
            Indian National Chemistry Olympiad
          </p>
        </div>

        <div className="p-6 border border-white/10 rounded-xl">
          <h3 className="text-xl font-semibold">IChO</h3>
          <p className="text-white/60 mt-2">
            International Chemistry Olympiad
          </p>
        </div>

        <div className="p-6 border border-white/10 rounded-xl">
          <h3 className="text-xl font-semibold">USNCO</h3>
          <p className="text-white/60 mt-2">
            US National Chemistry Olympiad
          </p>
        </div>

      </div>

    </section>
  );
}