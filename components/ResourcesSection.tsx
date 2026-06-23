export default function ResourcesSection() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-28">

      <div className="mb-16">

        <h2 className="mb-4 text-5xl font-bold">

          📚 Resource Vault

        </h2>

        <p className="text-lg text-gray-400">

          Everything a chemistry student needs in one place.

        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="mb-4 text-2xl font-bold">

            📄 Papers

          </h3>

          <p className="text-gray-400">

            JEE, NEET, NSEC, INChO, IChO

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="mb-4 text-2xl font-bold">

            📘 Books

          </h3>

          <p className="text-gray-400">

            Physical, Organic and Inorganic Chemistry

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="mb-4 text-2xl font-bold">

            📝 Notes

          </h3>

          <p className="text-gray-400">

            Chapter-wise revision notes

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="mb-4 text-2xl font-bold">

            📋 Assignments

          </h3>

          <p className="text-gray-400">

            NCERT, JEE, Olympiad levels

          </p>

        </div>

      </div>

    </section>
  );
}