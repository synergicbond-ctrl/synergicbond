import { MoleculeDiagram, StructureGallery } from "./MoleculeDiagram";
import { MODiagram } from "./MODiagram";
import { OxidationStateMap, TrendChart, ProcessFlow, ComparisonGraphic } from "./Charts";
import { VIZ } from "./theme";

/**
 * The visual registry.
 *
 * Lessons are authored as one Markdown string, so components are invoked from
 * the prose with a fenced block:
 *
 *   ```viz
 *   { "type": "MODiagram", "caption": "...", ... }
 *   ```
 *
 * `renderViz` turns that JSON into the right component. Adding a new visual
 * type means adding one entry here — the prose does not need to know anything
 * about React.
 *
 * `ReactionNetwork`, `HydrolysisMap` and `ProcessFlow` share one implementation
 * (a labelled directed graph); they are aliased rather than duplicated so the
 * three read identically on the page.
 */
const REGISTRY = {
  MoleculeDiagram,
  StructureGallery,
  MODiagram,
  OxidationStateMap,
  TrendChart,
  ProcessFlow,
  ReactionNetwork: ProcessFlow,
  HydrolysisMap: ProcessFlow,
  ComparisonGraphic,
} as const;

export type VizType = keyof typeof REGISTRY;

function VizError({ message }: { message: string }) {
  // Visible in dev, harmless in prod: a wrong spec must never blank the lesson.
  return (
    <div
      className="my-5 rounded-xl px-4 py-3 text-[13px]"
      style={{ background: VIZ.badSoft, border: `1px solid ${VIZ.bad}`, color: VIZ.bad }}
    >
      Visual could not be rendered — {message}
    </div>
  );
}

export function renderViz(source: string) {
  let spec: Record<string, unknown>;
  try {
    spec = JSON.parse(source);
  } catch {
    return <VizError message="the block is not valid JSON." />;
  }
  const type = spec.type as VizType | undefined;
  if (!type || !(type in REGISTRY)) {
    return <VizError message={`unknown visual type "${String(type)}".`} />;
  }
  if (typeof spec.caption !== "string" || !spec.caption.trim()) {
    return <VizError message={`"${type}" is missing a caption (required for accessibility).`} />;
  }
  const Component = REGISTRY[type] as (p: Record<string, unknown>) => React.ReactNode;
  const props: Record<string, unknown> = { ...spec };
  delete props.type;
  try {
    return <>{Component(props)}</>;
  } catch (err) {
    return <VizError message={`"${type}" threw: ${(err as Error).message}`} />;
  }
}
