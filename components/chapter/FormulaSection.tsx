type Formula = {
  name: string;
  equation: string;
  description?: string;
};

type FormulaSectionProps = {
  formulas: Formula[];
};

export default function FormulaSection({
  formulas,
}: FormulaSectionProps) {
  return (
    <section className="mb-8">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">
          Formula Sheet
        </h2>

        <p className="text-gray-400">
          Important formulas for quick revision.
        </p>
      </div>

      {formulas.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-700 p-6 text-gray-500">
          No formulas available for this chapter.
        </div>
      ) : (
        <div className="space-y-4">
          {formulas.map((formula) => (
            <div
              key={formula.name}
              className="rounded-xl border border-gray-800 bg-gray-900 p-5"
            >
              <h3 className="text-lg font-semibold">
                {formula.name}
              </h3>

              <div className="mt-2 rounded-lg bg-black p-3 font-mono text-cyan-400">
                {formula.equation}
              </div>

              {formula.description && (
                <p className="mt-3 text-sm text-gray-400">
                  {formula.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}