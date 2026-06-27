type ProgressCardProps = {
  completedConcepts: number;
  totalConcepts: number;
};

export default function ProgressCard({
  completedConcepts,
  totalConcepts,
}: ProgressCardProps) {
  const progress =
    totalConcepts === 0
      ? 0
      : Math.round((completedConcepts / totalConcepts) * 100);

  return (
    <section className="rounded-2xl border border-green-700 bg-green-950/20 p-6">
      <h2 className="text-2xl font-bold">
        Study Progress
      </h2>

      <div className="mt-6 h-4 overflow-hidden rounded-full bg-gray-800">
        <div
          className="h-full rounded-full bg-green-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-lg">
        {completedConcepts} / {totalConcepts} Concepts Completed
      </p>

      <p className="text-green-400">
        {progress}% Complete
      </p>
    </section>
  );
}