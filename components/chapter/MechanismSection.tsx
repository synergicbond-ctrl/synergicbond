type Mechanism = {
  name: string;
  steps: string[];
};

type MechanismSectionProps = {
  mechanisms: Mechanism[];
};

export default function MechanismSection({
  mechanisms,
}: MechanismSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-2xl font-bold">
        Reaction Mechanisms
      </h2>

      {mechanisms.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-700 p-6 text-gray-500">
          No mechanisms available.
        </div>
      ) : (
        <div className="space-y-6">
          {mechanisms.map((mechanism) => (
            <div
              key={mechanism.name}
              className="rounded-xl border border-gray-800 bg-gray-900 p-5"
            >
              <h3 className="mb-3 text-lg font-semibold">
                {mechanism.name}
              </h3>

              <ol className="list-decimal space-y-2 pl-5 text-gray-300">
                {mechanism.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}