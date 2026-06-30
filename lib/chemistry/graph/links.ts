import { highYieldReactions } from "@/lib/chemistry/reactions/data";
import { pyqReactionLinks } from "@/lib/chemistry/reactions/pyqLinks";
import { exceptionNCERTLinks, orderNCERTLinks, reagentNCERTLinks } from "@/lib/chemistry/ncert";
import { pyqDatabase } from "@/lib/pyqDatabase";
import type {
  DerivedOrderEntity,
  GraphCompletionAudit,
  KnowledgeGraphEdge,
  KnowledgeGraphLink,
} from "./schema";

function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function uniqueLinks(links: KnowledgeGraphLink[]): KnowledgeGraphLink[] {
  const seen = new Set<string>();
  return links.filter((link) => {
    const key = [link.edge, link.fromType, link.fromId, link.toType, link.toId].join("|");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const pyqIds = new Set(Object.values(pyqDatabase).flatMap((questions) => questions.map((question) => question.id)));
const reactionIds = new Set(highYieldReactions.map((reaction) => reaction.id));

const reagentAliasEntries = reagentNCERTLinks
  .flatMap((reagent) => [
    { token: normalize(reagent.label), id: reagent.entityId },
    { token: normalize(reagent.label.split("(")[0] ?? reagent.label), id: reagent.entityId },
  ])
  .filter((entry) => entry.token.length > 1);

function reagentIdFor(label: string): string {
  const token = normalize(label);
  const matched = reagentAliasEntries.find((entry) => token.includes(entry.token) || entry.token.includes(token));
  return matched?.id ?? `derived-reagent-${slugify(label)}`;
}

function exceptionIdFor(label: string): string {
  const matched = exceptionNCERTLinks.find((exception) => normalize(label).includes(normalize(exception.label)));
  return matched?.entityId ?? `derived-exception-${slugify(label)}`;
}

export const pyqOrderEntities: DerivedOrderEntity[] = [
  { orderId: "derived-order-goc-1-acidity", pyqId: "goc-1", label: "Carboxylic acid acidity order", source: "lib/pyqDatabase.ts" },
  { orderId: "derived-order-goc-2-carbocation-stability", pyqId: "goc-2", label: "Carbocation stability order", source: "lib/pyqDatabase.ts" },
  { orderId: "derived-order-ha-1-sn1-reactivity", pyqId: "ha-1", label: "SN1 substrate reactivity order", source: "lib/pyqDatabase.ts" },
  { orderId: "derived-order-ape-2-acidity", pyqId: "ape-2", label: "Phenol and ethanol acidity order", source: "lib/pyqDatabase.ts" },
  { orderId: "derived-order-am-1-basicity", pyqId: "am-1", label: "Aqueous amine basicity order", source: "lib/pyqDatabase.ts" },
  { orderId: "derived-order-cb-1-bond-order", pyqId: "cb-1", label: "Superoxide bond order", source: "lib/pyqDatabase.ts" },
  { orderId: "derived-order-cc-2-magnetic-moment", pyqId: "cc-2", label: "Coordination compound magnetic moment order", source: "lib/pyqDatabase.ts" },
  { orderId: "derived-order-sol-1-osmotic-pressure", pyqId: "sol-1", label: "Osmotic pressure particle-count order", source: "lib/pyqDatabase.ts" },
];

const orderIdByPYQ = new Map(pyqOrderEntities.map((order) => [order.pyqId, order.orderId]));

export const reactionReagentLinks: KnowledgeGraphLink[] = uniqueLinks(
  highYieldReactions.flatMap((reaction) =>
    reaction.reagents.map((reagent) => ({
      edge: "reaction-reagent",
      fromType: "reaction",
      fromId: reaction.id,
      toType: "derived-reagent",
      toId: reagentIdFor(reagent),
      evidence: reagent,
      source: "lib/chemistry/reactions/data.ts",
    }))
  )
);

export const reactionExceptionLinks: KnowledgeGraphLink[] = uniqueLinks(
  highYieldReactions.flatMap((reaction) =>
    reaction.exceptions.map((exception) => ({
      edge: "reaction-exception",
      fromType: "reaction",
      fromId: reaction.id,
      toType: "derived-exception",
      toId: exceptionIdFor(exception),
      evidence: exception,
      source: "lib/chemistry/reactions/data.ts",
    }))
  )
);

export const orderPYQLinks: KnowledgeGraphLink[] = uniqueLinks(
  pyqOrderEntities.map((order) => ({
    edge: "order-pyq",
    fromType: "derived-order",
    fromId: order.orderId,
    toType: "pyq",
    toId: order.pyqId,
    evidence: order.label,
    source: order.source,
  }))
);

const pyqDrivenReactionOrderLinks = pyqReactionLinks.flatMap((link) => {
  const orderId = orderIdByPYQ.get(link.pyqId);
  if (!orderId) return [];
  return link.reactionIds.map((reactionId) => ({
    edge: "reaction-order" as const,
    fromType: "reaction" as const,
    fromId: reactionId,
    toType: "derived-order" as const,
    toId: orderId,
    evidence: `Shared PYQ ${link.pyqId}: ${link.reason}`,
    source: "lib/chemistry/reactions/pyqLinks.ts",
  }));
});

export const reactionOrderLinks: KnowledgeGraphLink[] = uniqueLinks([
  ...pyqDrivenReactionOrderLinks,
  {
    edge: "reaction-order",
    fromType: "reaction",
    fromId: "carboxylic-acid-bicarbonate-test",
    toType: "derived-order",
    toId: "derived-order-goc-1-acidity",
    evidence: "Carboxylic acid acidity determines the bicarbonate effervescence test.",
    source: "lib/chemistry/reactions/data.ts + lib/pyqDatabase.ts",
  },
]);

export const exceptionPYQLinks: KnowledgeGraphLink[] = uniqueLinks(
  pyqReactionLinks.flatMap((link) =>
    link.reactionIds.flatMap((reactionId) =>
      reactionExceptionLinks
        .filter((exceptionLink) => exceptionLink.fromId === reactionId)
        .map((exceptionLink) => ({
          edge: "exception-pyq",
          fromType: "derived-exception",
          fromId: exceptionLink.toId,
          toType: "pyq",
          toId: link.pyqId,
          evidence: `Reaction ${reactionId} exception is relevant to PYQ ${link.pyqId}.`,
          source: "lib/chemistry/reactions/data.ts + lib/chemistry/reactions/pyqLinks.ts",
        }))
    )
  )
);

export const knowledgeGraphLinks: KnowledgeGraphLink[] = [
  ...reactionReagentLinks,
  ...reactionExceptionLinks,
  ...reactionOrderLinks,
  ...exceptionPYQLinks,
  ...orderPYQLinks,
];

function percent(numerator: number, denominator: number): number {
  if (denominator === 0) return 0;
  return Number(((numerator / denominator) * 100).toFixed(2));
}

function reactionCoverage(edge: KnowledgeGraphEdge): number {
  const linked = new Set(knowledgeGraphLinks.filter((link) => link.edge === edge).map((link) => link.fromId));
  return percent(linked.size, highYieldReactions.length);
}

export function getKnowledgeGraphCompletionAudit(): GraphCompletionAudit {
  const reagentEntityIds = new Set([
    ...reagentNCERTLinks.map((link) => link.entityId),
    ...reactionReagentLinks.map((link) => link.toId),
  ]);
  const exceptionEntityIds = new Set([
    ...exceptionNCERTLinks.map((link) => link.entityId),
    ...reactionExceptionLinks.map((link) => link.toId),
  ]);
  const orderEntityIds = new Set([
    ...orderNCERTLinks.map((link) => link.entityId),
    ...pyqOrderEntities.map((order) => order.orderId),
  ]);

  const orphanRecords = knowledgeGraphLinks.flatMap((link) => {
    const checks: string[] = [];
    if (link.fromType === "reaction" && !reactionIds.has(link.fromId)) checks.push(`${link.edge}:${link.fromId}`);
    if (link.toType === "reaction" && !reactionIds.has(link.toId)) checks.push(`${link.edge}:${link.toId}`);
    if (link.fromType === "pyq" && !pyqIds.has(link.fromId)) checks.push(`${link.edge}:${link.fromId}`);
    if (link.toType === "pyq" && !pyqIds.has(link.toId)) checks.push(`${link.edge}:${link.toId}`);
    if (link.fromType === "derived-reagent" && !reagentEntityIds.has(link.fromId)) checks.push(`${link.edge}:${link.fromId}`);
    if (link.toType === "derived-reagent" && !reagentEntityIds.has(link.toId)) checks.push(`${link.edge}:${link.toId}`);
    if (link.fromType === "derived-exception" && !exceptionEntityIds.has(link.fromId)) checks.push(`${link.edge}:${link.fromId}`);
    if (link.toType === "derived-exception" && !exceptionEntityIds.has(link.toId)) checks.push(`${link.edge}:${link.toId}`);
    if (link.fromType === "derived-order" && !orderEntityIds.has(link.fromId)) checks.push(`${link.edge}:${link.fromId}`);
    if (link.toType === "derived-order" && !orderEntityIds.has(link.toId)) checks.push(`${link.edge}:${link.toId}`);
    return checks;
  });

  const edgeCounts = {
    "reaction-reagent": reactionReagentLinks.length,
    "reaction-exception": reactionExceptionLinks.length,
    "reaction-order": reactionOrderLinks.length,
    "exception-pyq": exceptionPYQLinks.length,
    "order-pyq": orderPYQLinks.length,
  } satisfies Record<KnowledgeGraphEdge, number>;

  return {
    edgeCounts,
    coverage: {
      "reaction-reagent": reactionCoverage("reaction-reagent"),
      "reaction-exception": reactionCoverage("reaction-exception"),
      "reaction-order": reactionCoverage("reaction-order"),
      "exception-pyq": percent(new Set(exceptionPYQLinks.map((link) => link.fromId)).size, exceptionEntityIds.size),
      "order-pyq": percent(new Set(orderPYQLinks.map((link) => link.fromId)).size, orderEntityIds.size),
    },
    orphanRecords,
    entityCounts: {
      reactions: highYieldReactions.length,
      reagents: reagentEntityIds.size,
      exceptions: exceptionEntityIds.size,
      orders: orderEntityIds.size,
      pyqs: pyqIds.size,
    },
  };
}
