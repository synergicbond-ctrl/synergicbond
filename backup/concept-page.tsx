import { chemistryDatabase } from "@/lib/chemistryDatabase";

export default async function ConceptPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const concept =
    chemistryDatabase[id.toLowerCase()] || {
      title: id.toUpperCase(),

      overview: "Content coming soon.",

      neet: [],

      jee: [],

      gate: [],

      incho: [],
    };

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-5xl font-bold mb-6">
        {concept.title}
      </h1>

      <p className="text-white/70 mb-10">
        {concept.overview}
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {/* NEET */}

        <section className="border border-green-500 rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            🟢 NEET
          </h2>

          <ul className="space-y-2">

            {concept.neet.map((item: string) => (

              <li key={item}>• {item}</li>

            ))}

          </ul>

        </section>

        {/* JEE */}

        <section className="border border-yellow-500 rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            🟡 JEE
          </h2>

          <ul className="space-y-2">

            {concept.jee.map((item: string) => (

              <li key={item}>• {item}</li>

            ))}

          </ul>

        </section>

        {/* GATE */}

        <section className="border border-orange-500 rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            🟠 GATE
          </h2>

          <ul className="space-y-2">

            {concept.gate.map((item: string) => (

              <li key={item}>• {item}</li>

            ))}

          </ul>

        </section>

        {/* InChO */}

        <section className="border border-red-500 rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            🔴 InChO
          </h2>

          <ul className="space-y-2">

            {concept.incho.map((item: string) => (

              <li key={item}>• {item}</li>

            ))}

          </ul>

        </section>

      </div>

    </main>
  );
}