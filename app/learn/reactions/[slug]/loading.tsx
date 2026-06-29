// Route-segment skeleton — shown instantly while the page chunk loads (no spinner).
export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#0B0F19]/90 backdrop-blur">
        <div className="mx-auto flex h-12 max-w-3xl items-center justify-between px-4">
          <div className="h-5 w-14 rounded bg-white/5" />
          <div className="h-6 w-6 rounded-full bg-white/5" />
          <div className="h-5 w-14 rounded bg-white/5" />
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-5 sm:px-6">
        <div className="animate-pulse rounded-3xl border border-purple-400/20 bg-purple-500/[0.06] p-6">
          <div className="h-4 w-28 rounded-full bg-white/10" />
          <div className="mt-3 h-8 w-2/3 rounded bg-white/10" />
          <div className="mt-4 flex gap-2">
            <div className="h-9 w-20 rounded-xl bg-white/10" />
            <div className="h-9 w-24 rounded-xl bg-white/10" />
            <div className="h-9 w-20 rounded-xl bg-white/10" />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="h-16 animate-pulse rounded-xl bg-[#111827]" />
          ))}
        </div>
        <div className="mt-6 space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-32 animate-pulse rounded-2xl bg-[#111827]" />
          ))}
        </div>
      </div>
    </main>
  );
}
