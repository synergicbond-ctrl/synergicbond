import { physical } from "./masterSyllabus/physical";
import { organic } from "./masterSyllabus/organic";
import { inorganic } from "./masterSyllabus/inorganic";
import { highYieldReactions } from "./chemistry/reactions/data";
import {
  getPYQReactionLinkAudit,
  getPYQsForReaction,
  getReactionsForPYQ,
  pyqReactionLinks,
} from "./chemistry/reactions/pyqLinks";
import { pyqDatabase } from "./pyqDatabase";

const masterSyllabus = [...physical, ...organic, ...inorganic];

export function findRelatedChapter(question: string) {
  const q = question.toLowerCase();

  return masterSyllabus.filter((chapter) =>
    chapter.pyqTags.some((tag) => q.includes(tag.toLowerCase()))
  );
}

export function suggestConcepts(question: string) {
  const chapters = findRelatedChapter(question);

  return chapters.flatMap((c) => c.concepts as unknown[]);
}

export function getRelatedReactionsForPYQ(pyqId: string) {
  return getReactionsForPYQ(pyqId);
}

export function getPYQReactionAnalytics() {
  const audit = getPYQReactionLinkAudit();
  return {
    ...audit,
    reactionCoveragePercent: Number(((audit.linkedReactionCount / highYieldReactions.length) * 100).toFixed(2)),
  };
}

export function getChapterReactionIntelligence(chapterId: string) {
  const questions = pyqDatabase[chapterId] ?? [];
  const links = pyqReactionLinks.filter((link) => link.chapterId === chapterId);
  const linkedReactionIds = new Set(links.flatMap((link) => link.reactionIds));

  return {
    chapterId,
    totalPYQs: questions.length,
    linkedPYQs: links.length,
    unlinkedPYQs: questions.length - links.length,
    linkedReactions: highYieldReactions.filter((reaction) => linkedReactionIds.has(reaction.id)),
    links,
  };
}

export function getReactionPYQIntelligence(reactionId: string) {
  const reaction = highYieldReactions.find((item) => item.id === reactionId) ?? null;
  return {
    reaction,
    pyqs: getPYQsForReaction(reactionId),
  };
}
