import { highYieldReactions } from "@/lib/chemistry/reactions/data";
import { pyqReactionLinks } from "@/lib/chemistry/reactions/pyqLinks";
import { formulaCards } from "@/lib/chemistry/formulas/data";
import {
  exceptionNCERTLinks,
  ncertEntityLinks,
  orderNCERTLinks,
  pyqNCERTLinks,
  reactionNCERTLinks,
  reagentNCERTLinks,
} from "@/lib/chemistry/ncert";
import { pyqDatabase } from "@/lib/pyqDatabase";
import type { NCERTEntityLink } from "@/lib/chemistry/ncert";
import type { NCERTReference } from "@/lib/chemistry/reactions";
import type {
  DerivedOrderEntity,
  FormulaGraph,
  GraphEntityType,
  GraphNode,
  GraphValidationAudit,
  KnowledgeGraphSearchResult,
  GraphCompletionAudit,
  KnowledgeGraphEdge,
  KnowledgeGraphLink,
  NCERTGraph,
  PYQGraph,
  ReactionGraph,
} from "./schema";

function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function ncertReferenceId(ref: NCERTReference): string {
  return `ncert-${ref.class}-${slugify(ref.chapter)}-${slugify(ref.topic)}`;
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
const formulaIds = new Set(formulaCards.map((formula) => formula.id));
const reactionById = new Map(highYieldReactions.map((reaction) => [reaction.id, reaction]));
const formulaById = new Map(formulaCards.map((formula) => [formula.id, formula]));
const allPYQRecords = Object.entries(pyqDatabase).flatMap(([chapterId, questions]) =>
  questions.map((question) => ({ ...question, chapterId }))
);
const pyqById = new Map(allPYQRecords.map((question) => [question.id, question]));
const ncertReferenceById = new Map<string, NCERTReference>();
for (const formula of formulaCards) {
  ncertReferenceById.set(ncertReferenceId(formula.ncertReference), formula.ncertReference);
}

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

export const formulaPYQLinks: KnowledgeGraphLink[] = uniqueLinks(
  formulaCards.flatMap((formula) =>
    formula.relatedPYQ.map((pyqId) => ({
      edge: "formula-pyq" as const,
      fromType: "formula" as const,
      fromId: formula.id,
      toType: "pyq" as const,
      toId: pyqId,
      evidence: `${formula.name} is linked to PYQ ${pyqId}.`,
      source: "lib/chemistry/formulas/data.ts",
    }))
  )
);

export const formulaNCERTLinks: KnowledgeGraphLink[] = uniqueLinks(
  formulaCards.map((formula) => ({
    edge: "formula-ncert" as const,
    fromType: "formula" as const,
    fromId: formula.id,
    toType: "ncert-reference" as const,
    toId: ncertReferenceId(formula.ncertReference),
    evidence: `${formula.name}: ${formula.ncertReference.chapter} / ${formula.ncertReference.topic}`,
    source: "lib/chemistry/formulas/data.ts",
  }))
);

export const knowledgeGraphLinks: KnowledgeGraphLink[] = [
  ...reactionReagentLinks,
  ...reactionExceptionLinks,
  ...reactionOrderLinks,
  ...exceptionPYQLinks,
  ...orderPYQLinks,
  ...formulaPYQLinks,
  ...formulaNCERTLinks,
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
  const ncertReferenceIds = new Set(formulaNCERTLinks.map((link) => link.toId));

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
    if (link.fromType === "formula" && !formulaIds.has(link.fromId)) checks.push(`${link.edge}:${link.fromId}`);
    if (link.toType === "formula" && !formulaIds.has(link.toId)) checks.push(`${link.edge}:${link.toId}`);
    if (link.fromType === "ncert-reference" && !ncertReferenceIds.has(link.fromId)) checks.push(`${link.edge}:${link.fromId}`);
    if (link.toType === "ncert-reference" && !ncertReferenceIds.has(link.toId)) checks.push(`${link.edge}:${link.toId}`);
    return checks;
  });

  const edgeCounts = {
    "reaction-reagent": reactionReagentLinks.length,
    "reaction-exception": reactionExceptionLinks.length,
    "reaction-order": reactionOrderLinks.length,
    "exception-pyq": exceptionPYQLinks.length,
    "order-pyq": orderPYQLinks.length,
    "formula-pyq": formulaPYQLinks.length,
    "formula-ncert": formulaNCERTLinks.length,
  } satisfies Record<KnowledgeGraphEdge, number>;

  return {
    edgeCounts,
    coverage: {
      "reaction-reagent": reactionCoverage("reaction-reagent"),
      "reaction-exception": reactionCoverage("reaction-exception"),
      "reaction-order": reactionCoverage("reaction-order"),
      "exception-pyq": percent(new Set(exceptionPYQLinks.map((link) => link.fromId)).size, exceptionEntityIds.size),
      "order-pyq": percent(new Set(orderPYQLinks.map((link) => link.fromId)).size, orderEntityIds.size),
      "formula-pyq": percent(new Set(formulaPYQLinks.map((link) => link.fromId)).size, formulaCards.length),
      "formula-ncert": percent(new Set(formulaNCERTLinks.map((link) => link.fromId)).size, formulaCards.length),
    },
    orphanRecords,
    entityCounts: {
      reactions: highYieldReactions.length,
      reagents: reagentEntityIds.size,
      exceptions: exceptionEntityIds.size,
      orders: orderEntityIds.size,
      pyqs: pyqIds.size,
      formulas: formulaCards.length,
    },
  };
}

function graphNodeKey(type: GraphEntityType, id: string): string {
  return `${type}:${id}`;
}

function linkNodeKeys(link: KnowledgeGraphLink): string[] {
  return [graphNodeKey(link.fromType, link.fromId), graphNodeKey(link.toType, link.toId)];
}

function linksForNode(type: GraphEntityType, id: string): KnowledgeGraphLink[] {
  return knowledgeGraphLinks.filter(
    (link) => (link.fromType === type && link.fromId === id) || (link.toType === type && link.toId === id)
  );
}

function ncertForGraphNode(type: GraphEntityType, id: string): NCERTEntityLink | undefined {
  if (type === "reaction") return reactionNCERTLinks.find((link) => link.entityId === id);
  if (type === "pyq") return pyqNCERTLinks.find((link) => link.entityId === id);
  if (type === "derived-reagent") return reagentNCERTLinks.find((link) => link.entityId === id);
  if (type === "derived-exception") return exceptionNCERTLinks.find((link) => link.entityId === id);
  if (type === "derived-order") return orderNCERTLinks.find((link) => link.entityId === id);
  return ncertEntityLinks.find((link) => link.entityType === type && link.entityId === id);
}

function ncertReferenceForGraphNode(type: GraphEntityType, id: string): NCERTReference | undefined {
  if (type === "formula") return formulaById.get(id)?.ncertReference;
  if (type === "ncert-reference") return ncertReferenceById.get(id);
  return ncertForGraphNode(type, id)?.ncertReference;
}

function labelForGraphNode(type: GraphEntityType, id: string): string {
  if (type === "reaction") return reactionById.get(id)?.name ?? id;
  if (type === "pyq") return pyqById.get(id)?.topic ?? id;
  if (type === "formula") return formulaById.get(id)?.name ?? id;
  if (type === "ncert-reference") {
    const ref = ncertReferenceById.get(id);
    return ref ? `${ref.chapter}: ${ref.topic}` : id;
  }
  if (type === "derived-order") return pyqOrderEntities.find((order) => order.orderId === id)?.label ?? id;

  const ncertLink = ncertForGraphNode(type, id);
  if (ncertLink) return ncertLink.label;

  if (type === "derived-reagent") {
    return reactionReagentLinks.find((link) => link.toId === id)?.evidence ?? id;
  }

  if (type === "derived-exception") {
    return reactionExceptionLinks.find((link) => link.toId === id)?.evidence ?? id;
  }

  return id;
}

function sourceForGraphNode(type: GraphEntityType, id: string): string {
  if (type === "formula") return "lib/chemistry/formulas/data.ts";
  if (type === "ncert-reference") return "lib/chemistry/formulas/data.ts";
  if (type === "derived-order") return pyqOrderEntities.find((order) => order.orderId === id)?.source ?? "knowledgeGraphLinks";
  return ncertForGraphNode(type, id)?.source ?? "knowledgeGraphLinks";
}

function buildGraphNode(type: GraphEntityType, id: string, degreeMap: Map<string, number>): GraphNode {
  const label = labelForGraphNode(type, id);
  const ncertReference = ncertReferenceForGraphNode(type, id);
  const linkedText = linksForNode(type, id).map((link) => `${link.evidence} ${link.source}`).join(" ");

  return {
    type,
    id,
    label,
    source: sourceForGraphNode(type, id),
    searchText: normalize(`${type} ${id} ${label} ${ncertReference?.chapter ?? ""} ${ncertReference?.topic ?? ""} ${linkedText}`),
    degree: degreeMap.get(graphNodeKey(type, id)) ?? 0,
    ncertReference,
  };
}

export function getKnowledgeGraphNodes(): GraphNode[] {
  const degreeMap = new Map<string, number>();
  const nodeKeys = new Map<string, { type: GraphEntityType; id: string }>();

  for (const reaction of highYieldReactions) {
    const key = graphNodeKey("reaction", reaction.id);
    nodeKeys.set(key, { type: "reaction", id: reaction.id });
    degreeMap.set(key, 0);
  }

  for (const order of pyqOrderEntities) {
    const key = graphNodeKey("derived-order", order.orderId);
    nodeKeys.set(key, { type: "derived-order", id: order.orderId });
    degreeMap.set(key, 0);
  }

  for (const formula of formulaCards) {
    const key = graphNodeKey("formula", formula.id);
    nodeKeys.set(key, { type: "formula", id: formula.id });
    degreeMap.set(key, 0);
  }

  for (const link of knowledgeGraphLinks) {
    for (const key of linkNodeKeys(link)) {
      const [type, ...idParts] = key.split(":");
      nodeKeys.set(key, { type: type as GraphEntityType, id: idParts.join(":") });
      degreeMap.set(key, (degreeMap.get(key) ?? 0) + 1);
    }
  }

  for (const link of pyqReactionLinks) {
    const pyqKey = graphNodeKey("pyq", link.pyqId);
    nodeKeys.set(pyqKey, { type: "pyq", id: link.pyqId });
    degreeMap.set(pyqKey, (degreeMap.get(pyqKey) ?? 0) + link.reactionIds.length);

    for (const reactionId of link.reactionIds) {
      const reactionKey = graphNodeKey("reaction", reactionId);
      nodeKeys.set(reactionKey, { type: "reaction", id: reactionId });
      degreeMap.set(reactionKey, (degreeMap.get(reactionKey) ?? 0) + 1);
    }
  }

  return Array.from(nodeKeys.values())
    .map((node) => buildGraphNode(node.type, node.id, degreeMap))
    .sort((a, b) => a.type.localeCompare(b.type) || a.label.localeCompare(b.label));
}

function entityExists(type: GraphEntityType, id: string): boolean {
  if (type === "reaction") return reactionIds.has(id);
  if (type === "pyq") return pyqIds.has(id);
  if (type === "formula") return formulaIds.has(id);
  if (type === "ncert-reference") return ncertReferenceById.has(id);
  if (type === "derived-order") return pyqOrderEntities.some((order) => order.orderId === id) || orderNCERTLinks.some((link) => link.entityId === id);
  if (type === "derived-reagent") return reactionReagentLinks.some((link) => link.toId === id) || reagentNCERTLinks.some((link) => link.entityId === id);
  if (type === "derived-exception") return reactionExceptionLinks.some((link) => link.toId === id) || exceptionNCERTLinks.some((link) => link.entityId === id);
  return ncertEntityLinks.some((link) => link.entityType === type && link.entityId === id);
}

export function validateKnowledgeGraph(): GraphValidationAudit {
  const brokenLinks: string[] = [];
  const duplicateEdges: string[] = [];
  const seenEdges = new Set<string>();

  for (const link of knowledgeGraphLinks) {
    const edgeKey = [link.edge, link.fromType, link.fromId, link.toType, link.toId].join("|");
    if (seenEdges.has(edgeKey)) duplicateEdges.push(edgeKey);
    seenEdges.add(edgeKey);

    if (!entityExists(link.fromType, link.fromId)) brokenLinks.push(`${link.edge}:from:${link.fromType}:${link.fromId}`);
    if (!entityExists(link.toType, link.toId)) brokenLinks.push(`${link.edge}:to:${link.toType}:${link.toId}`);
  }

  for (const link of pyqReactionLinks) {
    if (!pyqIds.has(link.pyqId)) brokenLinks.push(`reaction-pyq:pyq:${link.pyqId}`);
    for (const reactionId of link.reactionIds) {
      const pyqEdgeKey = ["reaction-pyq", reactionId, link.pyqId].join("|");
      if (seenEdges.has(pyqEdgeKey)) duplicateEdges.push(pyqEdgeKey);
      seenEdges.add(pyqEdgeKey);

      if (!reactionIds.has(reactionId)) brokenLinks.push(`reaction-pyq:reaction:${reactionId}`);
    }
  }

  const nodes = getKnowledgeGraphNodes();
  const orphanNodes = nodes.filter((node) => node.degree === 0).map((node) => graphNodeKey(node.type, node.id));

  return {
    nodeCount: nodes.length,
    edgeCount: knowledgeGraphLinks.length + pyqReactionLinks.reduce((count, link) => count + link.reactionIds.length, 0),
    brokenLinks,
    duplicateEdges,
    orphanNodes,
  };
}

function graphNodesByType(type: GraphEntityType, ids: Iterable<string>): GraphNode[] {
  const idSet = new Set(ids);
  return getKnowledgeGraphNodes().filter((node) => node.type === type && idSet.has(node.id));
}

export function getReactionGraph(id: string): ReactionGraph {
  const graphLinks = linksForNode("reaction", id);
  const pyqIdsForReaction = pyqReactionLinks.filter((link) => link.reactionIds.includes(id)).map((link) => link.pyqId);
  const linkedPYQs = allPYQRecords.filter((question) => pyqIdsForReaction.includes(question.id));

  return {
    reaction: reactionById.get(id) ?? null,
    links: graphLinks,
    reagents: graphNodesByType(
      "derived-reagent",
      reactionReagentLinks.filter((link) => link.fromId === id).map((link) => link.toId)
    ),
    exceptions: graphNodesByType(
      "derived-exception",
      reactionExceptionLinks.filter((link) => link.fromId === id).map((link) => link.toId)
    ),
    orders: graphNodesByType(
      "derived-order",
      reactionOrderLinks.filter((link) => link.fromId === id).map((link) => link.toId)
    ),
    pyqs: linkedPYQs,
    ncertLinks: ncertEntityLinks.filter((link) => link.entityType === "reaction" && link.entityId === id),
  };
}

export function getPYQGraph(id: string): PYQGraph {
  const graphLinks = linksForNode("pyq", id);
  const linkedReactionIds = new Set(pyqReactionLinks.filter((link) => link.pyqId === id).flatMap((link) => link.reactionIds));
  const linkedExceptionIds = graphLinks
    .filter((link) => link.edge === "exception-pyq" && link.toId === id)
    .map((link) => link.fromId);
  const linkedOrderIds = graphLinks
    .filter((link) => link.edge === "order-pyq" && link.toId === id)
    .map((link) => link.fromId);

  return {
    pyq: pyqById.get(id) ?? null,
    links: graphLinks,
    reactions: highYieldReactions.filter((reaction) => linkedReactionIds.has(reaction.id)),
    formulas: formulaCards.filter((formula) => formula.relatedPYQ.includes(id)),
    exceptions: graphNodesByType("derived-exception", linkedExceptionIds),
    orders: graphNodesByType("derived-order", linkedOrderIds),
    ncertLinks: ncertEntityLinks.filter((link) => link.entityType === "pyq" && link.entityId === id),
  };
}

export function getFormulaGraph(id: string): FormulaGraph {
  const formula = formulaById.get(id) ?? null;
  const graphLinks = linksForNode("formula", id);
  const pyqIdsForFormula = new Set(formula?.relatedPYQ ?? []);
  const ncertNodeId = formula ? ncertReferenceId(formula.ncertReference) : "";

  return {
    formula,
    links: graphLinks,
    pyqs: allPYQRecords.filter((question) => pyqIdsForFormula.has(question.id)),
    ncertNode: ncertNodeId ? graphNodesByType("ncert-reference", [ncertNodeId])[0] ?? null : null,
  };
}

function sameNCERTReference(a: NCERTReference, b: NCERTReference): boolean {
  return a.class === b.class && a.chapter === b.chapter && a.topic === b.topic;
}

function graphKeysForNCERTLink(link: NCERTEntityLink): string[] {
  const keys = [graphNodeKey(link.entityType, link.entityId)];
  if (link.entityType === "reagent") keys.push(graphNodeKey("derived-reagent", link.entityId));
  if (link.entityType === "exception") keys.push(graphNodeKey("derived-exception", link.entityId));
  if (link.entityType === "order") keys.push(graphNodeKey("derived-order", link.entityId));
  return keys;
}

export function getNCERTGraph(ref: NCERTReference): NCERTGraph {
  const matchedNCERTLinks = ncertEntityLinks.filter((link) => sameNCERTReference(link.ncertReference, ref));
  const matchedKeys = new Set(matchedNCERTLinks.flatMap(graphKeysForNCERTLink));
  matchedKeys.add(graphNodeKey("ncert-reference", ncertReferenceId(ref)));
  const graphLinks = knowledgeGraphLinks.filter((link) =>
    matchedKeys.has(graphNodeKey(link.fromType, link.fromId)) || matchedKeys.has(graphNodeKey(link.toType, link.toId))
  );
  const nodeKeys = new Set(graphLinks.flatMap(linkNodeKeys));
  const nodes = getKnowledgeGraphNodes().filter((node) => nodeKeys.has(graphNodeKey(node.type, node.id)));

  return {
    reference: ref,
    ncertLinks: matchedNCERTLinks,
    graphLinks,
    nodes,
  };
}

function scoreGraphNode(node: GraphNode, query: string): number {
  const q = normalize(query);
  if (!q) return 0;
  if (normalize(node.label) === q || node.id === q) return 100;
  if (normalize(node.label).startsWith(q)) return 70;
  if (node.searchText.includes(q)) return 35;
  return q.split(" ").filter((token) => token.length > 1 && node.searchText.includes(token)).length * 8;
}

export function searchKnowledgeGraph(query: string, options: { limit?: number } = {}): KnowledgeGraphSearchResult[] {
  const limit = options.limit ?? 20;

  return getKnowledgeGraphNodes()
    .map((node) => ({ node, score: scoreGraphNode(node, query) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.node.label.localeCompare(b.node.label))
    .slice(0, limit)
    .map(({ node, score }) => ({
      id: node.id,
      type: node.type,
      label: node.label,
      source: node.source,
      summary: `${node.degree} graph links${node.ncertReference ? ` - ${node.ncertReference.chapter}` : ""}`,
      score,
    }));
}
