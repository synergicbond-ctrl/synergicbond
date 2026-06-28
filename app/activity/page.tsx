import ActivityLog from "@/components/dashboard/ActivityLog";

export const metadata = {
  title: "My Activity — SYNERGIC BOND",
  description: "Your chemistry study activity, analytics and national rank engine.",
};

export default function ActivityPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-2">Your Activity</p>
          <h1 className="text-4xl font-black">Study Dashboard</h1>
          <p className="mt-2 text-white/50 text-sm">
            An immutable log of everything you read, search, solve and submit — plus your national rank.
          </p>
        </div>
        <ActivityLog />
      </div>
    </main>
  );
}
