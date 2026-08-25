import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import { parts } from "./_content";
import { ChapterStyles, Formula } from "./_components";
import { partSlug } from "./_meta";

export const metadata = {
  title: "Gaseous State | JEE Advanced | Synergic Bond",
  description: "Complete JEE Advanced Gaseous State textbook chapter with integrated derivations, visual explanations and solved problems.",
};

export default function GaseousStateHub() {
  const theory = parts.filter((part) => part.kind === "theory").length;
  const problemParts = parts.filter((part) => part.kind !== "theory").length;
  return (
    <AppShell
      discipline="JEE Advanced · Physical Chemistry"
      chapterTitle="Gaseous State"
      chapterSlug="gaseous-state"
      description="A complete reconstruction of the 169-page source material: every non-blank theory point, derivation, graph family, special case and problem archetype has been rewritten into readable textbook form."
      free={false}
    >
      <div className="gasPage">
        <ChapterStyles />
        <div className="mx-auto max-w-3xl space-y-2">
          <div className="metricStrip">
            <span><b>{parts.length}</b> structured parts</span>
            <span><b>{theory}</b> integrated theory parts</span>
            <span><b>{problemParts}</b> problem and advanced parts</span>
            <span><b>50+</b> original solved examples</span>
          </div>
          <div className="heroFormula">
            <Formula tex="PV=nRT" block />
            <p>From hydrostatic pressure to molecular distributions, real-gas equations and critical phenomena.</p>
          </div>

          <section className="hubContent">
            <header className="hubHeading">
              <span>Chapter architecture</span>
              <h2>Study in source order, with depth added inside each topic</h2>
              <p>No detached OCR archive, no filler appendix and no separate “reference summary.”</p>
            </header>
            <ChapterLessonGrid
              lessons={parts.map((part) => ({
                href: `/learn/gaseous-state/parts/${partSlug(part.number)}`,
                number: `Lesson ${String(part.number).padStart(2, "0")}`,
                title: part.title,
                meta: part.subtitle,
              }))}
            />
          </section>
        </div>
      </div>
    </AppShell>
  );
}
