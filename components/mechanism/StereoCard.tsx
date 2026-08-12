import type { Mechanism } from "@/lib/mechanismSchema";

export default function StereoCard({ s }: { s: Mechanism["stereochemistry"] }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-4">
      <div className="mb-1.5 flex items-center gap-2 text-sm font-black text-cyan-300">🔄 Stereochemistry</div>
      {s.applicable ? (
        <>
          <p className="text-[13px] text-white/75">{s.summary}</p>
          {s.outcomes.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {s.outcomes.map((o) => (
                <li key={o} className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-2.5 py-0.5 text-[11px] text-cyan-200">{o}</li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <p className="text-[13px] text-white/55">No stereochemical consequences. {s.summary}</p>
      )}
    </div>
  );
}
