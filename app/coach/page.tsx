export default function CoachPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold">
        AI Coach
      </h1>

      <div className="mt-8 rounded-2xl border border-white/10 p-6">
        <h2 className="text-2xl font-semibold">
          Personalized Study Plan
        </h2>

        <ul className="mt-4 space-y-2 text-white/70">
          <li>• Complete 20 MCQs</li>
          <li>• Revise Chemical Bonding</li>
          <li>• Study for 45 minutes</li>
        </ul>
      </div>
    </main>
  );
}
