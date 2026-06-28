// ---------------------------------------------------------------------------
// Memory Core — ephemeral, process-local student learning intelligence.
//
// IMPORTANT CAVEATS (read before relying on this):
//  • Storage is an in-memory Map. On serverless (Vercel) it is PER WARM
//    INSTANCE and wiped on cold start — it is NOT durable cross-session
//    persistence and is NOT shared across concurrent instances. Swap
//    `memoryStore` for a real store (Vercel KV / Redis / DB) when you need
//    true persistence.
//  • There is no student-answer signal in the pipeline, so "correct" is a
//    PROXY: a session counts as correct only when the solve was high
//    confidence and did not fall back. This tracks topic exposure + solve
//    quality, not verified mastery.
//  • This module is internal and intentionally decoupled from
//    SnapSolveResponseSchema. It NEVER changes the response contract.
// ---------------------------------------------------------------------------

import type { SnapSolveResponse } from "@/lib/snapSolveTypes";

export interface TopicStat {
  attempts: number;
  correct: number; // proxy — see caveat above
  weakAreas: string[];
  masteryScore: number; // 0–1
}

export interface UserMemory {
  userId: string;
  topicStats: Record<string, TopicStat>;
  lastMistakes: Array<{ topic: string; concept: string; timestamp: number }>;
  learningVelocity: number; // latest change in mastery (improvement rate)
}

export interface Adaptation {
  isWeak: boolean;
  isStrong: boolean;
  mastery: number;
  /** How many reasoning events to stream (more for weak, fewer for strong). */
  reasoningDepth: number;
  /** Per-event delay in ms (slower for weak, faster for strong). */
  paceMs: number;
  /** Whether to stream a condensed (strong) vs full (weak/neutral) step set. */
  concise: boolean;
  /** Optional high-priority hint surfaced for weak topics (reasoning event). */
  hint?: string;
}

const LOW_CONFIDENCE = 0.75;
const MAX_MISTAKES = 25;
const MAX_WEAK_AREAS = 8;

// Ephemeral, process-local store (see caveats above).
const memoryStore = new Map<string, UserMemory>();

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

function emptyTopic(): TopicStat {
  return { attempts: 0, correct: 0, weakAreas: [], masteryScore: 0.5 };
}

export function getMemory(userId: string): UserMemory {
  let mem = memoryStore.get(userId);
  if (!mem) {
    mem = { userId, topicStats: {}, lastMistakes: [], learningVelocity: 0 };
    memoryStore.set(userId, mem);
  }
  return mem;
}

/**
 * Fold one completed solve into the user's memory. Pure side-effect on the
 * in-memory store; safe to call from any route path. Returns the updated memory.
 */
export function recordSession(userId: string, payload: SnapSolveResponse): UserMemory {
  const mem = getMemory(userId);
  const topic = payload.classification;
  const stat = mem.topicStats[topic] ?? emptyTopic();

  // Proxy correctness: high-confidence, non-fallback solve.
  const success = !payload.fallbackTriggered && payload.ocrConfidence >= LOW_CONFIDENCE;

  stat.attempts += 1;
  if (success) stat.correct += 1;

  const prev = stat.masteryScore;
  const accuracy = stat.correct / stat.attempts;
  const signal = success ? payload.ocrConfidence : 0;
  stat.masteryScore = clamp01(0.6 * accuracy + 0.4 * signal);

  if (!success) {
    const concept = payload.recommendedPractice[0] || payload.parsedProblem.slice(0, 80) || topic;
    if (!stat.weakAreas.includes(concept)) {
      stat.weakAreas = [concept, ...stat.weakAreas].slice(0, MAX_WEAK_AREAS);
    }
    mem.lastMistakes = [{ topic, concept, timestamp: Date.now() }, ...mem.lastMistakes].slice(0, MAX_MISTAKES);
  }

  // Improvement rate (rounded to keep it readable).
  mem.learningVelocity = Math.round((stat.masteryScore - prev) * 100) / 100;
  mem.topicStats[topic] = stat;

  return mem;
}

/**
 * Derive how the live stream should adapt for a given user + topic. Pure read;
 * safe to call before solving (topic may be a best-effort pre-classification).
 */
export function getAdaptation(userId: string, topic: string): Adaptation {
  const mem = getMemory(userId);
  const stat = mem.topicStats[topic];
  const mastery = stat?.masteryScore ?? 0.5;
  const attempts = stat?.attempts ?? 0;

  const hasRecentMistake = mem.lastMistakes.some((m) => m.topic === topic);
  const isWeak = mastery < 0.5 || hasRecentMistake;
  const isStrong = mastery >= 0.8 && attempts >= 2;

  return {
    isWeak,
    isStrong,
    mastery,
    reasoningDepth: isWeak ? 6 : isStrong ? 2 : 4,
    paceMs: isWeak ? 700 : isStrong ? 280 : 450,
    concise: isStrong,
    hint: isWeak
      ? "Heads up — this topic has tripped you up before, so let's go slowly and rebuild it."
      : undefined,
  };
}
