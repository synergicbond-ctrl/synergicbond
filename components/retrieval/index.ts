// components/retrieval — reusable retrieval library (Phase 3).
// Nothing in app/ imports this yet; activation happens behind loop_pilot_v1
// in the pilot phase.

export { RetrievalStyles } from "./styles";
export { RetrievalQuestion } from "./RetrievalQuestion";
export { RetrievalCard } from "./RetrievalCard";
export { ConfidenceSelector } from "./ConfidenceSelector";
export { RevealAnswer } from "./RevealAnswer";
export { MistakeReflection } from "./MistakeReflection";
export { SessionSummary, type SessionSummaryRow } from "./SessionSummary";
export {
  validateRetrievalItem,
  type RetrievalItem,
  type RetrievalOption,
  type RetrievalResult,
  type RetrievalMode,
} from "./types";
