export interface ChapterMetadata {
  revisionPriority: 1 | 2 | 3 | 4 | 5;

  searchKeywords: string[];

  ncertChapters: string[];

  formulaCount: number;

  namedReactions: string[];

  weightage: {
    neet: number;
    jeeMain: number;
    jeeAdvanced: number;
  };
}

export const metadata: Record<string, ChapterMetadata> = {};