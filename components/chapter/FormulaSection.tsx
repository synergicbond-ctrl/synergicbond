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

        <p className="text-[var(--text-muted)]">
          Important formulas for quick revision.
        </p>
      </div>

      {formulas.length === 0 ? (
        <div className="rounded-lg border border-dashed border-[var(--border)] p-6 text-[var(--text-muted)]">
          No formulas available for this chapter.
        </div>
      ) : (
        <div className="space-y-4">
          {formulas.map((formula) => (
            <div
              key={formula.name}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <h3 className="text-lg font-semibold">
                {formula.name}
              </h3>

              <div className="mt-2 rounded-lg bg-[var(--surface-2)] p-3 font-mono text-[var(--foreground)]">
                {formula.equation}
              </div>

              {formula.description && (
                <p className="mt-3 text-sm text-[var(--text-muted)]">
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
