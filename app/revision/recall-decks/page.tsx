import RecallDecksExperience from "@/components/revision/RecallDecksExperience";

export const metadata = {
  title: "Recall Decks — Revision — SYNERGIC BOND",
  description: "Active-recall chemistry decks with filters, rapid mode, keyboard navigation, saved progress and retry-missed sessions.",
};

export default function RecallDecksPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 md:py-12">
        <RecallDecksExperience />
      </div>
    </main>
  );
}
