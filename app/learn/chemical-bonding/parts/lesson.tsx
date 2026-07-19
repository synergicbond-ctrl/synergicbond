import { ChemicalBondingDeepVisual } from "../_components/ChemicalBondingDeepVisuals";
import {
  BulletList,
  ChemBondPartShell,
  DiagramBox,
  FormulaLine,
  ImportantNote,
  LearningObjectives,
  ModernNote,
  SummaryStrip,
  TopicBlock,
  TrapCallout,
  chemBondPartMeta,
} from "./_shared";
import { topicsForPart } from "./topicData";

export default function ChemicalBondingLesson({ part }: { part: number }) {
  const meta = chemBondPartMeta.find((entry) => entry.part === part);
  const topics = topicsForPart(part);
  if (!meta || !topics.length) return null;

  const seenVisuals = new Set<string>();
  const objectives = topics.slice(0, 4).map((topic) => `Master Topic ${topic.number}: ${topic.title}.`);

  return (
    <ChemBondPartShell part={part} title={meta.title}>
      <LearningObjectives items={objectives} />

      {topics.map((topic) => {
        const showVisual = topic.visual && !seenVisuals.has(topic.visual);
        if (topic.visual) seenVisuals.add(topic.visual);
        return (
          <TopicBlock key={topic.number} number={topic.number} title={topic.title}>
            {topic.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            {topic.bullets?.length ? <BulletList items={topic.bullets} /> : null}
            {topic.formula ? <FormulaLine math={topic.formula} /> : null}
            {topic.modern ? <ModernNote>{topic.modern}</ModernNote> : null}
            {topic.exam ? <ImportantNote title="JEE Advanced focus">{topic.exam}</ImportantNote> : null}
            {topic.number === 4 ? (
              <TrapCallout trap={<>Confusing NO’s total electron count with its valence-electron count.</>} reality={<>Neutral NO has <strong>11 valence electrons</strong>: 5 from N + 6 from O. Fifteen is the total electron count including core 1s electrons.</>} />
            ) : null}
            {showVisual && topic.visual ? <DiagramBox title={topic.title}><ChemicalBondingDeepVisual kind={topic.visual} /></DiagramBox> : null}
          </TopicBlock>
        );
      })}

      <SummaryStrip items={[
        `Topics ${topics[0].number}–${topics[topics.length - 1].number} completed in authoritative sequence.`,
        "Historical JEE models are retained but explicitly separated from modern bonding interpretations where needed.",
        "Use energy, electron count, symmetry and orbital occupancy as the final checks before relying on a memorised rule.",
      ]} />
    </ChemBondPartShell>
  );
}
