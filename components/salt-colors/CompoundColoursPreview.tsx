"use client";

import { groupByColour, COMPOUND_COLOURS } from "@/lib/saltColourCompounds";
import { PREVIEW_LIMITS, slicePreview } from "@/lib/monetization/preview";
import { useUnlocked } from "@/components/monetization/useUnlocked";
import UnlockBanner from "@/components/monetization/UnlockBanner";

// Client island for the (otherwise server-rendered) /salt-colors page:
// Preview Mode slices the compound list for free users; Pro sees everything.
// Grouping and counts always come from the real SSOT catalogue.
export default function CompoundColoursPreview() {
  const unlocked = useUnlocked();
  const { visible, locked } = slicePreview(COMPOUND_COLOURS, PREVIEW_LIMITS.colours, unlocked);
  const visibleNames = new Set(visible.map((c) => c.name));

  const groups = groupByColour()
    .map((g) => ({ ...g, items: g.items.filter((it) => visibleNames.has(it.name)) }))
    .filter((g) => g.items.length > 0);

  return (
    <section className="mb-6">
      <h2 className="text-base font-black text-cyan-300 mb-0.5">🎨 Colour of Compounds</h2>
      <p className="text-xs text-white/45 mb-3">{COMPOUND_COLOURS.length} compounds grouped by colour.</p>
      <div className="space-y-4">
        {groups.map((g) => (
          <div key={g.family}>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-4 w-4 rounded-full border border-white/25" style={{ background: g.hex }} />
              <h3 className="text-sm font-black uppercase tracking-wider text-white/80">{g.family}</h3>
              <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] text-white/40">{g.items.length}</span>
              <span className="h-px flex-1 bg-white/[0.06]" />
            </div>
            <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((it) => (
                <div key={it.name} className="flex items-center gap-2.5 rounded-lg bg-[#111827] border border-white/[0.06] px-3 py-2">
                  <span className="h-3 w-3 shrink-0 rounded-full border border-white/20" style={{ background: g.hex }} />
                  <p className="min-w-0 text-[13px] text-white/85"><span className="font-semibold text-white">{it.name}</span>{!/^(white|yellow|black|green|blue|pink|orange|grey|red)$/i.test(it.color) && <span className="text-white/45"> — {it.color}</span>}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {locked > 0 && (
        <UnlockBanner available={PREVIEW_LIMITS.colours} total={COMPOUND_COLOURS.length} itemLabel="compound colours" />
      )}
    </section>
  );
}
