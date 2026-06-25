type PYQSectionProps = {
  pyqs: string[];
};

export default function PYQSection({
  pyqs,
}: PYQSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-2xl font-bold">
        Previous Year Questions
      </h2>

      {pyqs.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-700 p-6 text-gray-500">
          No PYQs available.
        </div>
      ) : (
        <div className="space-y-4">
          {pyqs.map((question, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-800 bg-gray-900 p-5"
            >
              <strong>Question {index + 1}</strong>

              <p className="mt-2">
                {question}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}