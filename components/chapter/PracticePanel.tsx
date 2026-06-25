type PracticePanelProps = {
  onStartPractice: () => void;
};

export default function PracticePanel({
  onStartPractice,
}: PracticePanelProps) {
  return (
    <section className="mb-8 rounded-2xl border border-cyan-700 bg-cyan-950/20 p-6">
      <h2 className="text-2xl font-bold">
        Practice This Chapter
      </h2>

      <p className="mt-2 text-gray-400">
        Generate AI-powered practice questions based on this chapter.
      </p>

      <button
        onClick={onStartPractice}
        className="mt-6 rounded-lg bg-cyan-600 px-6 py-3 font-semibold hover:bg-cyan-500"
      >
        Start Practice
      </button>
    </section>
  );
}