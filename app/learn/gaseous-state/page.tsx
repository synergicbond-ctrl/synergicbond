import Link from "next/link";
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
    <main className="gasPage">
      <ChapterStyles />
      <div className="ambientGrid" />
      <section className="hubHero shell">
        <div className="hubHeroCopy">
          <span className="kicker">JEE Advanced · Physical Chemistry</span>
          <h1>Gaseous State</h1>
          <p className="heroLead">
            A complete reconstruction of the 169-page Kohinoor source: every non-blank theory point, derivation, graph family,
            special case and problem archetype has been rewritten into readable textbook form. Deeper reference material is
            inserted exactly where each concept is taught.
          </p>
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
        </div>
        <div className="hubOrbit" aria-hidden="true">
          <div className="orbit orbitOne"><span /></div>
          <div className="orbit orbitTwo"><span /></div>
          <div className="orbitCore">P · V · T · n</div>
        </div>
      </section>

      <section className="shell hubContent">
        <header className="hubHeading">
          <span>Chapter architecture</span>
          <h2>Study in source order, with depth added inside each topic</h2>
          <p>No detached OCR archive, no filler appendix and no separate “reference summary.”</p>
        </header>
        <div className="partGrid">
          {parts.map((part) => (
            <Link className="partCard" href={`/learn/gaseous-state/parts/${partSlug(part.number)}`} key={part.number}>
              <div className="partTopline">
                <span>{String(part.number).padStart(2, "0")}</span>
                <i>{part.kind}</i>
              </div>
              <h3>{part.title}</h3>
              <p>{part.subtitle}</p>
              <div className="partFoot">
                <span>Source {part.sourcePages}</span>
                <b>Open part →</b>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
