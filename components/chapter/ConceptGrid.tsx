type ConceptGridProps = {
  concepts: string[];
};

export default function ConceptGrid({
  concepts,
}: ConceptGridProps) {
  return (
    <section className="mb-8">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">
          Concepts
        </h2>

        <p className="text-gray-400">
          Master every important concept before attempting questions.
        </p>
      </div>

      {concepts.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-700 p-6 text-gray-500">
          No concepts available yet.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <div
              key={concept}
              className="rounded-xl border border-gray-800 bg-gray-900 p-4 transition hover:border-cyan-500"
            >
              <h3 className="font-semibold">
                {concept}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Study this concept thoroughly before moving to advanced problems.
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}