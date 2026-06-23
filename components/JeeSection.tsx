export default function JeeSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">

      <h2 className="mb-12 text-5xl font-bold">

        ⚡ JEE

      </h2>

      <div className="grid gap-8 md:grid-cols-2">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <h3 className="mb-6 text-3xl font-bold">

            JEE Main

          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>📄 Previous Year Papers</li>

            <li>📝 Chapter Notes</li>

            <li>📋 NCERT Assignments</li>

            <li>⚡ Formula Sheets</li>

            <li>🎯 Mock Tests</li>

          </ul>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <h3 className="mb-6 text-3xl font-bold">

            JEE Advanced

          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>📄 Advanced PYQs</li>

            <li>🧠 Challenge Problems</li>

            <li>🚀 Rank Booster</li>

            <li>📘 Theory Notes</li>

            <li>🎯 Mock Tests</li>

          </ul>

        </div>

      </div>

    </section>
  );
}