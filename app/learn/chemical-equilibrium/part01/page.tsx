import Part from "../_components/Part01";
import { isFeatureEnabled } from "@/lib/featureFlags";
import { LoopPilotSection } from "../_components/LoopPilotSection";

// loop_pilot_v1 (OFF by default): the flag is a build-time constant, so the
// disabled build renders this page's exact pre-pilot DOM and dead-code
// eliminates the pilot branch; the enabled build server-renders the pilot
// section below the lesson (no client-side pop-in).
export default function Page() {
  if (!isFeatureEnabled("loop_pilot_v1")) return <Part />;
  return (
    <>
      <Part />
      <LoopPilotSection />
    </>
  );
}
