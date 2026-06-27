type ExceptionSectionProps = {
  exceptions: string[];
};

export default function ExceptionSection({
  exceptions,
}: ExceptionSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-2xl font-bold text-red-400">
        Important Exceptions
      </h2>

      {exceptions.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-700 p-6 text-gray-500">
          No exceptions available.
        </div>
      ) : (
        <div className="space-y-3">
          {exceptions.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-red-700 bg-red-950/30 p-4"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}