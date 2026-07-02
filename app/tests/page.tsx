import TestEngine from "@/components/tests/TestEngine";

export const metadata = {
  title: "Practice Tests — SYNERGIC BOND",
  description:
    "Chapter, topic, revision and previous-paper tests built from real JEE & NEET previous-year questions. Mock and custom tests coming soon.",
};

export default function TestsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 md:py-12">
        <TestEngine />
      </div>
    </main>
  );
}
