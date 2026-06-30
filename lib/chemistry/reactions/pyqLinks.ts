import { pyqDatabase, type PYQQuestion } from "@/lib/pyqDatabase";
import { highYieldReactions } from "./data";
import type { HighYieldReaction, PYQReactionLink } from "./schema";

export const pyqReactionLinks: PYQReactionLink[] = [
  {
    pyqId: "goc-2",
    chapterId: "goc",
    reactionIds: ["alkene-hx-markovnikov-addition", "haloalkane-sn1-hydrolysis"],
    reason: "Carbocation stability controls Markovnikov addition and SN1 reaction rate.",
  },
  {
    pyqId: "ha-1",
    chapterId: "haloalkanes-haloarenes",
    reactionIds: ["haloalkane-sn1-hydrolysis", "haloalkane-sn2-hydrolysis"],
    reason: "Question compares SN1/SN2 substrate behavior.",
  },
  {
    pyqId: "ha-2",
    chapterId: "haloalkanes-haloarenes",
    reactionIds: ["haloalkane-sn2-hydrolysis"],
    reason: "Aqueous KOH substitution of primary alkyl bromide is SN2 hydrolysis.",
  },
  {
    pyqId: "ak-1",
    chapterId: "aldehydes-ketones",
    reactionIds: ["aldehyde-tollens-test"],
    reason: "Question tests Tollens' reagent selectivity for aldehydes.",
  },
  {
    pyqId: "ak-2",
    chapterId: "aldehydes-ketones",
    reactionIds: ["cannizzaro-reaction"],
    reason: "Question directly asks Cannizzaro eligibility.",
  },
  {
    pyqId: "ape-1",
    chapterId: "alcohols-phenols-ethers",
    reactionIds: ["alcohol-lucas-test"],
    reason: "Question directly asks Lucas reagent.",
  },
  {
    pyqId: "ape-2",
    chapterId: "alcohols-phenols-ethers",
    reactionIds: ["alcohol-sodium-reaction"],
    reason: "Phenol acidity explains faster phenoxide formation in acid-base reactions.",
  },
  {
    pyqId: "am-2",
    chapterId: "amines",
    reactionIds: ["carbylamine-reaction"],
    reason: "Question directly asks the amine class detected by carbylamine reaction.",
  },
];

const allPYQs = Object.entries(pyqDatabase).flatMap(([chapterId, questions]) =>
  questions.map((question) => ({ chapterId, question }))
);

const reactionIds = new Set(highYieldReactions.map((reaction) => reaction.id));
const pyqIds = new Set(allPYQs.map(({ question }) => question.id));

export function getReactionIdsForPYQ(pyqId: string): string[] {
  return pyqReactionLinks.find((link) => link.pyqId === pyqId)?.reactionIds ?? [];
}

export function getReactionsForPYQ(pyqId: string): HighYieldReaction[] {
  const ids = new Set(getReactionIdsForPYQ(pyqId));
  return highYieldReactions.filter((reaction) => ids.has(reaction.id));
}

export function getPYQLinksForReaction(reactionId: string): PYQReactionLink[] {
  return pyqReactionLinks.filter((link) => link.reactionIds.includes(reactionId));
}

export function getPYQsForReaction(reactionId: string): (PYQQuestion & { chapterId: string })[] {
  const linkedIds = new Set(getPYQLinksForReaction(reactionId).map((link) => link.pyqId));
  return allPYQs
    .filter(({ question }) => linkedIds.has(question.id))
    .map(({ chapterId, question }) => ({ ...question, chapterId, reactionIds: getReactionIdsForPYQ(question.id) }));
}

export function getLinkedPYQQuestions(): (PYQQuestion & { chapterId: string; reactionIds: string[] })[] {
  return allPYQs
    .map(({ chapterId, question }) => ({
      ...question,
      chapterId,
      reactionIds: getReactionIdsForPYQ(question.id),
    }))
    .filter((question) => question.reactionIds.length > 0);
}

export function getUnlinkedPYQQuestions(): (PYQQuestion & { chapterId: string })[] {
  return allPYQs
    .filter(({ question }) => getReactionIdsForPYQ(question.id).length === 0)
    .map(({ chapterId, question }) => ({ ...question, chapterId }));
}

export function getPYQReactionLinkAudit() {
  const linkedPYQs = getLinkedPYQQuestions();
  const unlinkedPYQs = getUnlinkedPYQQuestions();
  const linkedReactionIds = new Set(pyqReactionLinks.flatMap((link) => link.reactionIds));
  const orphanPYQIds = pyqReactionLinks.filter((link) => !pyqIds.has(link.pyqId)).map((link) => link.pyqId);
  const orphanReactionIds = pyqReactionLinks
    .flatMap((link) => link.reactionIds)
    .filter((id) => !reactionIds.has(id));

  return {
    totalPYQs: allPYQs.length,
    linkedPYQs: linkedPYQs.length,
    unlinkedPYQs: unlinkedPYQs.length,
    coveragePercent: Number(((linkedPYQs.length / allPYQs.length) * 100).toFixed(2)),
    linkedReactionCount: linkedReactionIds.size,
    unlinkedReactionCount: highYieldReactions.length - linkedReactionIds.size,
    orphanPYQIds,
    orphanReactionIds,
  };
}
