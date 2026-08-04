// LoopPilotSection — SERVER component shell for the Learn→Retrieve→Revise
// pilot on one lesson (Phase 5; server/client split added in Phase 7).
//
// Everything static — the scoped style block and the placeholder notice —
// renders on the server so its code never reaches the browser. Only
// LoopPilotRunner (the answering flow) is a client component.
//
// Content is PLACEHOLDER ONLY (visibly marked). Faculty-authored items
// replace the fixtures import under founder decision F6; nothing else in
// this file changes when they land.

import { RetrievalStyles } from "@/components/retrieval/styles";
import { RetrievalCard } from "@/components/retrieval/RetrievalCard";
import { PLACEHOLDER_ITEMS } from "@/components/retrieval/fixtures";
import type { RetrievalContext } from "@/lib/retrieval/submission";
import { LoopPilotRunner } from "./LoopPilotRunner";

const CONTEXT: RetrievalContext = {
  contextId: "ceq-part01",
  exam: "jee",
  chapterId: "chemical-equilibrium",
};

export function LoopPilotSection() {
  return (
    <section
      aria-label="Retrieval pilot (placeholder content)"
      className="mx-auto w-full max-w-5xl px-4 pb-12 sm:px-6 lg:px-8"
    >
      <RetrievalStyles />
      <RetrievalCard tag="Pilot preview · placeholder content" edgeColor="#E4B04A">
        <p className="sbrPrompt">
          These checks are engineering placeholders demonstrating the retrieval
          flow. Faculty-authored questions replace them before any student
          cohort sees this lesson (decision F6).
        </p>
      </RetrievalCard>
      <LoopPilotRunner items={PLACEHOLDER_ITEMS} context={CONTEXT} />
    </section>
  );
}
