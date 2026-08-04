import Part from "../_components/Part01";
import { isFeatureEnabled } from "@/lib/featureFlags";

// loop_pilot_v1 — OFF by default.
//
// Flag off: this page renders the pre-pilot tree and the pilot's rendered
// output is entirely absent (verified against a pre-pilot build).
//
// It is NOT byte-free when disabled, and Phase 7 measured why: Turbopack
// groups this route's client modules into one chunk, so ~5.1 KB of never-
// executed pilot code rides inside a chunk the lesson downloads anyway.
// Neither a dynamic import nor a bundler-foldable env literal removes it —
// both were measured. Accepted for a flag-gated pilot; the cost disappears
// when the pilot is either promoted (flag retired) or reverted.
export default async function Page() {
  if (!isFeatureEnabled("loop_pilot_v1")) return <Part />;
  const { LoopPilotSection } = await import("../_components/LoopPilotSection");
  return (
    <>
      <Part />
      <LoopPilotSection />
    </>
  );
}
