import { ncertEntityLinks } from "./data";
import type { NCERTCoverageAudit, NCERTEntityLink, NCERTEntityType } from "./schema";

export {
  exceptionNCERTLinks,
  ncertEntityLinks,
  orderNCERTLinks,
  pyqNCERTLinks,
  reactionNCERTLinks,
  reagentNCERTLinks,
} from "./data";
export { ncertSearchIndex, searchNCERTLinks } from "./searchIndex";
export type { NCERTCoverageAudit, NCERTEntityLink, NCERTEntityType, NCERTSearchEntry } from "./schema";

export function getNCERTLinksForEntity(entityType: NCERTEntityType, entityId: string): NCERTEntityLink[] {
  return ncertEntityLinks.filter((link) => link.entityType === entityType && link.entityId === entityId);
}

export function getNCERTCoverageAudit(): NCERTCoverageAudit {
  const uniqueKeys = new Set<string>();
  let duplicateReferences = 0;
  const missingChapters = new Set<string>();
  const countsByType = {
    reaction: 0,
    reagent: 0,
    exception: 0,
    order: 0,
    pyq: 0,
  } satisfies Record<NCERTEntityType, number>;

  for (const link of ncertEntityLinks) {
    countsByType[link.entityType] += 1;
    if (!link.ncertReference?.chapter) {
      missingChapters.add(`${link.entityType}:${link.entityId}`);
      continue;
    }

    const key = [
      link.entityType,
      link.entityId,
      link.ncertReference.class,
      link.ncertReference.chapter,
      link.ncertReference.topic,
    ].join("|");

    if (uniqueKeys.has(key)) duplicateReferences += 1;
    uniqueKeys.add(key);
  }

  return {
    linkedEntities: ncertEntityLinks.length,
    duplicateReferences,
    coveragePercent: Number((((ncertEntityLinks.length - missingChapters.size) / ncertEntityLinks.length) * 100).toFixed(2)),
    missingChapters: Array.from(missingChapters),
    countsByType,
  };
}
