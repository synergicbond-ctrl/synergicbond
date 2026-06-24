import Link from "next/link";

const categories = [
  {
    title: "⚛️ Physical Chemistry",
    topics: [
      "atomic-structure",
      "mole-concept",
      "thermodynamics",
      "equilibrium",
      "electrochemistry",
      "chemical-kinetics",
    ],
  },

  {
    title: "🧪 Organic Chemistry",
    topics: [
      "goc",
      "sn1",
      "sn2",
      "isomerism",
      "hydrocarbons",
    ],
  },

  {
    title: "🧬 Inorganic Chemistry",
    topics: [
      "chemical-bonding",
      "periodic-table",
      "coordination-chemistry",
      "d-and-f-block",
    ],
  },
];

export default function RevisionPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-4">

          📝 Smart Revision Engine

        </h1>

        <p className="text-white/60 mb-14">

          Revise topics quickly before exams.

        </p>

        <div className="space-y-12">

          {categories.map((category) => (

            <section key={category.title}>

              <h2 className="text-3xl font-bold mb-6">

                {category.title}

              </h2>

              <div className="grid md:grid-cols-3 gap-5">

                {category.topics.map((topic) => (

                  <Link
                    key={topic}
                    href={`/concept/${topic}`}
                    className="border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:scale-105 transition duration-300"
                  >

                    <h3 className="text-xl font-semibold mb-2">

                      {topic
                        .replaceAll("-", " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}

                    </h3>

                    <p className="text-sm text-white/50">

                      Open revision notes

                    </p>

                  </Link>

                ))}

              </div>

            </section>

          ))}

        </div>

      </div>

    </main>
  );
}