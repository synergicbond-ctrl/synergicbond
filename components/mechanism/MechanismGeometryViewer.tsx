"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, GitBranch, HelpCircle, PauseCircle } from "lucide-react";
import {
  decideMechanism,
  getMechanismExamComparison,
  getMechanismPracticeQuestions,
  getRendererPrimitive,
  mechanismExamComparisons,
  mechanismGeometrySamples,
  validateMechanismGeometry,
  type MechanismDecisionInput,
  type MechanismExamComparison,
  type MechanismGeometry,
  type MechanismGeometryStep,
  type MechanismPracticeQuestion,
  type MoleculeFrameGeometry,
  type RendererPrimitive,
} from "@/lib/chemistry/mechanisms";

const reactionClasses = ["SN1", "SN2", "E2"] as const;
const sections = ["visual", "practice", "compare", "traps", "decision"] as const;

type MechanismSection = (typeof sections)[number];

const substrateOptions: { value: MechanismDecisionInput["substrate"]; label: string }[] = [
  { value: "methyl", label: "Methyl" },
  { value: "primary", label: "Primary" },
  { value: "secondary", label: "Secondary" },
  { value: "tertiary", label: "Tertiary" },
  { value: "allylic-benzylic", label: "Allylic / benzylic" },
];

const reagentOptions: { value: MechanismDecisionInput["reagent"]; label: string }[] = [
  { value: "weak-nucleophile", label: "Weak nucleophile" },
  { value: "strong-nucleophile", label: "Strong nucleophile" },
  { value: "strong-base", label: "Strong base" },
  { value: "bulky-base", label: "Bulky base" },
];

const solventOptions: { value: MechanismDecisionInput["solvent"]; label: string }[] = [
  { value: "polar-protic", label: "Polar protic" },
  { value: "polar-aprotic", label: "Polar aprotic" },
  { value: "alcoholic", label: "Alcoholic / basic" },
  { value: "unspecified", label: "Unspecified" },
];

function atomColor(element: string): string {
  if (element === "O") return "#38bdf8";
  if (element === "Br" || element === "Cl") return "#f59e0b";
  if (element === "H") return "#e2e8f0";
  return "#a78bfa";
}

function lonePairOffset(hint: string | undefined) {
  if (hint === "left") return { dx: -16, dy: 0 };
  if (hint === "right" || hint === "backside") return { dx: 16, dy: 0 };
  if (hint === "top") return { dx: 0, dy: -16 };
  if (hint === "bottom" || hint === "frontside") return { dx: 0, dy: 16 };
  return { dx: 14, dy: -14 };
}

function bondStroke(state: MoleculeFrameGeometry["bonds"][number]["state"]) {
  if (state === "forming") return "stroke-cyan-300";
  if (state === "breaking") return "stroke-amber-300";
  if (state === "partial") return "stroke-fuchsia-300";
  return "stroke-slate-300";
}

function formatLabel(value: string): string {
  return value.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

function FrameSvg({ frame, primitive }: { frame: MoleculeFrameGeometry; primitive: RendererPrimitive }) {
  const atomById = new Map(frame.atoms.map((atom) => [atom.id, atom]));
  const viewBox = `${primitive.viewBox.minX} ${primitive.viewBox.minY} ${primitive.viewBox.width} ${primitive.viewBox.height}`;

  return (
    <div className="min-w-0 rounded-lg border border-white/[0.08] bg-black/25 p-3">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <p className="break-words text-sm font-black text-white">{frame.label}</p>
        <span className="rounded-md bg-white/[0.06] px-2 py-1 text-[10px] font-black uppercase text-white/50">
          {frame.role.replace("-", " ")}
        </span>
      </div>
      <svg viewBox={viewBox} className="h-56 w-full overflow-visible rounded-md bg-[#080b12]">
        {frame.bonds.map((bond) => {
          const from = atomById.get(bond.fromAtomId);
          const to = atomById.get(bond.toAtomId);
          if (!from || !to) return null;

          return (
            <line
              key={bond.id}
              x1={from.position.x}
              y1={from.position.y}
              x2={to.position.x}
              y2={to.position.y}
              className={bondStroke(bond.state)}
              strokeWidth={bond.order === "partial" ? 3 : 4}
              strokeDasharray={bond.order === "partial" || bond.state !== "normal" ? "8 7" : undefined}
              strokeLinecap="round"
            />
          );
        })}

        {frame.lonePairs.map((lonePair) => {
          const atom = atomById.get(lonePair.atomId);
          if (!atom) return null;
          const { dx, dy } = lonePairOffset(lonePair.positionHint);
          return (
            <g key={lonePair.id} aria-label={`lone pair on ${lonePair.atomId}`}>
              <circle cx={atom.position.x + dx - 3} cy={atom.position.y + dy} r="2.5" fill="#67e8f9" />
              <circle cx={atom.position.x + dx + 3} cy={atom.position.y + dy} r="2.5" fill="#67e8f9" />
            </g>
          );
        })}

        {frame.atoms.map((atom) => (
          <g key={atom.id}>
            <circle cx={atom.position.x} cy={atom.position.y} r="18" fill={atomColor(atom.element)} opacity="0.18" />
            <circle cx={atom.position.x} cy={atom.position.y} r="15" fill="#0f172a" stroke={atomColor(atom.element)} strokeWidth="2" />
            <text x={atom.position.x} y={atom.position.y + 4} textAnchor="middle" className="fill-white text-[11px] font-black">
              {atom.label ?? atom.element}
            </text>
            {atom.charge !== 0 && (
              <text x={atom.position.x + 15} y={atom.position.y - 14} textAnchor="middle" className="fill-cyan-200 text-[10px] font-black">
                {atom.charge > 0 ? "+" : "-"}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

function StepPanel({ step }: { step: MechanismGeometryStep }) {
  return (
    <article className="rounded-lg border border-white/[0.08] bg-[#111827] p-4">
      <h3 className="break-words text-base font-black text-white">{step.title}</h3>
      <p className="mt-1 break-words text-sm leading-relaxed text-white/60">{step.electronFlowSummary}</p>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        {step.frames.map((frame) => {
          const primitive = getRendererPrimitive(step, frame.id);
          return primitive ? <FrameSvg key={frame.id} frame={frame} primitive={primitive} /> : null;
        })}
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <div className="rounded-lg border border-cyan-400/15 bg-cyan-500/[0.06] p-3">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Verified Curved Arrows</p>
          <div className="mt-2 space-y-2">
            {step.curvedArrows.map((arrow) => (
              <div key={arrow.id} className="rounded-md bg-black/20 p-2">
                <p className="break-words text-sm font-semibold text-white">{arrow.description}</p>
                <p className="mt-1 break-words text-xs text-cyan-100/60">{arrow.evidence}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-purple-400/15 bg-purple-500/[0.06] p-3">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-200">Stereo / Orbital Notes</p>
          <div className="mt-2 space-y-2">
            {step.frames.flatMap((frame) => frame.stereochemistry).map((marker) => (
              <p key={marker.id} className="break-words rounded-md bg-black/20 p-2 text-sm text-white/75">
                <span className="font-black text-purple-200">{marker.type}: </span>{marker.description}
              </p>
            ))}
            {step.frames.flatMap((frame) => frame.orbitalOverlaps).map((overlap) => (
              <p key={overlap.id} className="break-words rounded-md bg-black/20 p-2 text-sm text-white/75">
                <span className="font-black text-purple-200">{overlap.kind}: </span>{overlap.description}
              </p>
            ))}
            {step.transitionState && (
              <p className="break-words rounded-md bg-black/20 p-2 text-sm text-white/75">
                <span className="font-black text-fuchsia-200">transition state: </span>{step.transitionState.geometryNote}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-lg border border-emerald-400/15 bg-emerald-500/[0.06] p-3">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">Verification Notes</p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-white/65">
          {step.verificationNotes.map((note) => (
            <li key={note} className="break-words">{note}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function sampleForReactionClass(reactionClass: MechanismGeometry["reactionClass"]) {
  return mechanismGeometrySamples.find((sample) => sample.reactionClass === reactionClass) ?? mechanismGeometrySamples[0];
}

function questionTypeLabel(question: MechanismPracticeQuestion): string {
  if (question.questionType === "assertion-reason") return "Assertion-Reason";
  if (question.questionType === "product-prediction") return "Product";
  return "MCQ";
}

function PracticeQuiz({ questions }: { questions: MechanismPracticeQuestion[] }) {
  const [selectedByQuestion, setSelectedByQuestion] = useState<Record<string, string>>({});

  return (
    <div className="rounded-lg border border-cyan-400/20 bg-cyan-500/[0.05] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">Practice Layer</p>
          <h3 className="mt-1 text-xl font-black text-white">Exam-useful mechanism checks</h3>
          <p className="mt-1 text-sm leading-relaxed text-white/60">
            Questions are limited to verified SN1/SN2/E2 data. Conceptual questions are marked separately.
          </p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-md bg-white/[0.06] px-2.5 py-1 text-xs font-black text-white/55">
          <HelpCircle className="h-3.5 w-3.5" />
          {questions.length} questions
        </span>
      </div>

      <div className="mt-4 grid gap-3 xl:grid-cols-2">
        {questions.map((question) => {
          const selected = selectedByQuestion[question.id];
          const answered = Boolean(selected);
          const correct = selected === question.correctOptionId;

          return (
            <article key={question.id} className="min-w-0 rounded-lg border border-white/[0.08] bg-black/25 p-3">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-white/[0.06] px-2 py-1 text-[10px] font-black uppercase text-white/50">
                  {formatLabel(question.skill)}
                </span>
                <span className="rounded-md bg-cyan-500/10 px-2 py-1 text-[10px] font-black uppercase text-cyan-200">
                  {questionTypeLabel(question)}
                </span>
                <span className={`rounded-md px-2 py-1 text-[10px] font-black uppercase ${
                  question.source === "geometry-derived"
                    ? "bg-emerald-500/10 text-emerald-200"
                    : "bg-amber-500/10 text-amber-200"
                }`}>
                  {question.source}
                </span>
              </div>
              <p className="mt-3 break-words text-sm font-black leading-relaxed text-white">{question.prompt}</p>

              <div className="mt-3 space-y-2">
                {question.options.map((option) => {
                  const isSelected = selected === option.id;
                  const isCorrectOption = option.id === question.correctOptionId;
                  const stateClass = !answered
                    ? "border-white/[0.08] bg-white/[0.03] text-white/75 hover:border-cyan-300/40"
                    : isCorrectOption
                      ? "border-emerald-300/50 bg-emerald-500/15 text-emerald-100"
                      : isSelected
                        ? "border-rose-300/50 bg-rose-500/15 text-rose-100"
                        : "border-white/[0.06] bg-white/[0.02] text-white/45";

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedByQuestion((current) => ({ ...current, [question.id]: option.id }))}
                      className={`flex min-h-10 w-full items-start gap-2 rounded-md border px-3 py-2 text-left text-sm font-semibold transition ${stateClass}`}
                    >
                      <span className="shrink-0 font-black">{option.id.toUpperCase()}.</span>
                      <span className="min-w-0 break-words">{option.label}</span>
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div className={`mt-3 rounded-md border p-3 ${
                  correct
                    ? "border-emerald-300/30 bg-emerald-500/10"
                    : "border-rose-300/30 bg-rose-500/10"
                }`}>
                  <p className={`text-xs font-black uppercase tracking-wide ${correct ? "text-emerald-200" : "text-rose-200"}`}>
                    {correct ? "Correct" : "Review"}
                  </p>
                  <p className="mt-1 break-words text-sm leading-relaxed text-white/75">{question.explanation}</p>
                  <p className="mt-2 break-words text-xs leading-relaxed text-white/45">{question.auditNote}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

function VisualSection({ sample, validation }: { sample: MechanismGeometry; validation: ReturnType<typeof validateMechanismGeometry> }) {
  return (
    <>
      <div className="grid gap-3 lg:grid-cols-[1fr_320px]">
        <div className="rounded-lg border border-white/[0.08] bg-black/20 p-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="break-words text-xl font-black text-white">{sample.name}</h3>
              <p className="mt-1 break-words text-sm text-white/55">{sample.scope}</p>
            </div>
            <span className="rounded-md bg-white/[0.06] px-2 py-1 text-[11px] font-black uppercase text-white/50">
              {sample.coordinateSystem}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {validation.valid ? (
              <span className="inline-flex items-center gap-1 rounded-md border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-1 text-xs font-black text-emerald-200">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Verified references
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-md border border-rose-400/25 bg-rose-500/10 px-2.5 py-1 text-xs font-black text-rose-200">
                <AlertTriangle className="h-3.5 w-3.5" />
                Invalid geometry references
              </span>
            )}
            <span className="inline-flex items-center gap-1 rounded-md border border-amber-400/25 bg-amber-500/10 px-2.5 py-1 text-xs font-black text-amber-200">
              <PauseCircle className="h-3.5 w-3.5" />
              Animation blocked
            </span>
          </div>
        </div>

        <aside className="rounded-lg border border-amber-400/20 bg-amber-500/[0.06] p-4">
          <div className="flex items-center gap-2 text-sm font-black text-amber-200">
            <GitBranch className="h-4 w-4" />
            Verified / Blocked
          </div>
          <div className="mt-3 space-y-3">
            <div>
              <p className="text-xs font-black uppercase tracking-wide text-emerald-200">Verified</p>
              <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-white/65">
                {sample.sourceNotes.map((note) => (
                  <li key={note} className="break-words">{note}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wide text-amber-200">Blocked</p>
              <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-white/65">
                {sample.blockedVisualClaims.map((claim) => (
                  <li key={claim} className="break-words">{claim}</li>
                ))}
                <li>Animation timeline is intentionally disabled.</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

      {!validation.valid && (
        <div className="mt-4 rounded-lg border border-rose-400/25 bg-rose-500/10 p-3 text-sm text-rose-100">
          {validation.errors.map((error) => (
            <p key={error} className="break-words">{error}</p>
          ))}
        </div>
      )}

      <div className="mt-5 space-y-4">
        {sample.steps.map((step) => (
          <StepPanel key={step.id} step={step} />
        ))}
      </div>
    </>
  );
}

function ComparisonCard({ comparison }: { comparison: MechanismExamComparison }) {
  const fields = [
    ["Substrate", comparison.substratePreference],
    ["Nucleophile / Base", comparison.nucleophileBaseStrength],
    ["Solvent", comparison.solvent],
    ["Rate Law", comparison.rateLaw],
    ["Stereochemistry", comparison.stereochemistry],
    ["Rearrangement", comparison.rearrangementPossibility],
    ["Product Logic", comparison.majorProductLogic],
    ["NEET/JEE", comparison.neetJeeImportance],
  ] as const;

  return (
    <article className="min-w-0 rounded-lg border border-white/[0.08] bg-black/25 p-4">
      <h3 className="text-xl font-black text-white">{comparison.reactionClass}</h3>
      <div className="mt-3 space-y-3">
        {fields.map(([label, value]) => (
          <div key={label} className="rounded-md bg-white/[0.04] p-3">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200">{label}</p>
            <p className="mt-1 break-words text-sm leading-relaxed text-white/70">{value}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function CompareSection() {
  return (
    <div className="rounded-lg border border-white/[0.08] bg-black/20 p-4">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">Compare</p>
        <h3 className="mt-1 text-xl font-black text-white">SN1 vs SN2 vs E2 exam grid</h3>
      </div>
      <div className="mt-4 grid gap-3 xl:grid-cols-3">
        {mechanismExamComparisons.map((comparison) => (
          <ComparisonCard key={comparison.reactionClass} comparison={comparison} />
        ))}
      </div>
    </div>
  );
}

function TrapsSection({ comparison }: { comparison: MechanismExamComparison | null }) {
  if (!comparison) return null;

  return (
    <div className="rounded-lg border border-amber-400/20 bg-amber-500/[0.05] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-200">Exam Traps</p>
          <h3 className="mt-1 text-xl font-black text-white">{comparison.reactionClass} traps and corrections</h3>
        </div>
        <span className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs font-black text-white/55">
          {comparison.traps.length} traps
        </span>
      </div>
      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        {comparison.traps.map((trap) => (
          <article key={trap.id} className="min-w-0 rounded-lg border border-white/[0.08] bg-black/25 p-3">
            <div className="flex flex-wrap gap-2">
              {trap.examRelevance.map((exam) => (
                <span key={exam} className="rounded-md bg-amber-400/10 px-2 py-1 text-[10px] font-black uppercase text-amber-100">
                  {exam}
                </span>
              ))}
            </div>
            <p className="mt-3 break-words text-sm font-black text-white">{trap.text}</p>
            <p className="mt-2 break-words text-sm leading-relaxed text-white/60">{trap.explanation}</p>
            <p className="mt-2 break-words rounded-md bg-emerald-500/10 p-2 text-sm leading-relaxed text-emerald-100">
              <span className="font-black">Correction: </span>{trap.correction}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function DecisionGuide() {
  const [input, setInput] = useState<MechanismDecisionInput>({
    substrate: "secondary",
    reagent: "strong-base",
    solvent: "alcoholic",
    heat: false,
  });
  const result = useMemo(() => decideMechanism(input), [input]);

  return (
    <div className="rounded-lg border border-emerald-400/20 bg-emerald-500/[0.05] p-4">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-200">Decision Guide</p>
        <h3 className="mt-1 text-xl font-black text-white">Deterministic SN1/SN2/E2 selector</h3>
        <p className="mt-1 text-sm leading-relaxed text-white/60">
          Uses fixed exam heuristics from substrate, reagent, solvent, and heat. No AI inference is used.
        </p>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <label className="block">
          <span className="text-xs font-black uppercase tracking-wide text-white/50">Substrate</span>
          <select
            value={input.substrate}
            onChange={(event) => setInput((current) => ({ ...current, substrate: event.target.value as MechanismDecisionInput["substrate"] }))}
            className="mt-1 min-h-10 w-full rounded-md border border-white/[0.1] bg-slate-950 px-3 py-2 text-sm font-semibold text-white"
          >
            {substrateOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-xs font-black uppercase tracking-wide text-white/50">Reagent</span>
          <select
            value={input.reagent}
            onChange={(event) => setInput((current) => ({ ...current, reagent: event.target.value as MechanismDecisionInput["reagent"] }))}
            className="mt-1 min-h-10 w-full rounded-md border border-white/[0.1] bg-slate-950 px-3 py-2 text-sm font-semibold text-white"
          >
            {reagentOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-xs font-black uppercase tracking-wide text-white/50">Solvent</span>
          <select
            value={input.solvent}
            onChange={(event) => setInput((current) => ({ ...current, solvent: event.target.value as MechanismDecisionInput["solvent"] }))}
            className="mt-1 min-h-10 w-full rounded-md border border-white/[0.1] bg-slate-950 px-3 py-2 text-sm font-semibold text-white"
          >
            {solventOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <label className="flex min-h-10 items-center gap-3 rounded-md border border-white/[0.1] bg-black/20 px-3 py-2">
          <input
            type="checkbox"
            checked={input.heat}
            onChange={(event) => setInput((current) => ({ ...current, heat: event.target.checked }))}
            className="h-4 w-4 accent-emerald-300"
          />
          <span className="text-sm font-black text-white/75">Heat specified</span>
        </label>
      </div>

      <div className="mt-4 rounded-lg border border-emerald-300/25 bg-emerald-500/10 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-emerald-300 px-2.5 py-1 text-sm font-black text-slate-950">
            {result.recommended}
          </span>
          <span className="rounded-md bg-white/[0.08] px-2.5 py-1 text-xs font-black uppercase text-white/55">
            {result.confidence} confidence
          </span>
        </div>
        <p className="mt-3 break-words text-sm leading-relaxed text-white/75">{result.reason}</p>
        {result.warnings.length > 0 && (
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-amber-100/80">
            {result.warnings.map((warning) => (
              <li key={warning} className="break-words">{warning}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function MechanismGeometryViewer() {
  const [selectedClass, setSelectedClass] = useState<MechanismGeometry["reactionClass"]>("SN2");
  const [activeSection, setActiveSection] = useState<MechanismSection>("visual");
  const sample = sampleForReactionClass(selectedClass);
  const validation = useMemo(() => validateMechanismGeometry(sample), [sample]);
  const practiceQuestions = useMemo(() => getMechanismPracticeQuestions(selectedClass), [selectedClass]);
  const comparison = useMemo(() => getMechanismExamComparison(selectedClass), [selectedClass]);

  return (
    <section className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-4 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">Mechanism Visualizer</p>
          <h2 className="mt-2 text-2xl font-black text-white">Exam-ready static mechanism lab</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/60">
            Verified SN1/SN2/E2 schematics, practice, comparison, traps, and deterministic decision rules. Animation remains blocked until safe geometry rules exist.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {reactionClasses.map((reactionClass) => (
            <button
              key={reactionClass}
              type="button"
              onClick={() => setSelectedClass(reactionClass)}
              className={`min-h-10 rounded-md border px-3 py-2 text-sm font-black transition ${
                selectedClass === reactionClass
                  ? "border-cyan-300 bg-cyan-300 text-slate-950"
                  : "border-white/[0.1] bg-black/20 text-white/70 hover:border-cyan-300/50"
              }`}
            >
              {reactionClass}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
        {sections.map((section) => (
          <button
            key={section}
            type="button"
            onClick={() => setActiveSection(section)}
            className={`min-h-10 shrink-0 rounded-md border px-3 py-2 text-sm font-black transition ${
              activeSection === section
                ? "border-emerald-300 bg-emerald-300 text-slate-950"
                : "border-white/[0.1] bg-black/20 text-white/70 hover:border-emerald-300/50"
            }`}
          >
            {formatLabel(section)}
          </button>
        ))}
      </div>

      <div className="mt-5">
        {activeSection === "visual" && <VisualSection sample={sample} validation={validation} />}
        {activeSection === "practice" && <PracticeQuiz questions={practiceQuestions} />}
        {activeSection === "compare" && <CompareSection />}
        {activeSection === "traps" && <TrapsSection comparison={comparison} />}
        {activeSection === "decision" && <DecisionGuide />}
      </div>
    </section>
  );
}
