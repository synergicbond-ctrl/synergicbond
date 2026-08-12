import TestEngine from "@/components/tests/TestEngine";

export const metadata = {
  title: "Chemistry Tests — SYNERGIC BOND",
  description: "Quick, chapter, PYQ and custom chemistry tests with timers, question palette, saved attempts and detailed review.",
};

export default function TestsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12">
        <TestEngine />
      </div>
    </main>
  );
}
