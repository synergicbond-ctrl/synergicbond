import RecallDecksExperience from "@/components/revision/RecallDecksExperience";

export const metadata = {
  title: "Recall Decks — SYNERGIC BOND",
  description: "Formula, reagent, fact, reaction and inorganic NCERT recall decks with saved progress and missed-card practice.",
};

export default function MemoryPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 md:py-12">
        <RecallDecksExperience />
      </div>
    </main>
  );
}
