type ExamName = "neet" | "jeeMain" | "jeeAdvanced";
type Difficulty = "easy" | "medium" | "hard";

type GenerateExamRequest = {
  action?: "generate";
  exam?: ExamName;
  chapter?: string;
  concept?: string;
  count?: number;
};

type ScoreExamRequest = {
  action: "score";
  questions: McqQuestion[];
  selectedAnswers: Record<string, string>;
  timeSpentSeconds?: Record<string, number>;
};

type ExamRequest = GenerateExamRequest | ScoreExamRequest;

type SyllabusGraphModule = {
  syllabusGraph?: unknown;
  default?: unknown;
};

type GraphConcept = {
  id: string;
  title: string;
  chapterTitle: string;
  dependencies: string[];
  weakTopicTags: string[];
  difficulty: Difficulty;
};

type McqQuestion = {
  id: string;
  chapter: string;
  concept: string;
  difficulty: Difficulty;
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  weakTopicTags: string[];
};

type ScoreAnalysis = {
  score: number;
  total: number;
  accuracy: number;
  correct: number;
  wrong: number;
  unanswered: number;
  weakTopics: string[];
  averageSpeedSeconds: number | null;
  questionResults: Array<{
    questionId: string;
    selectedAnswer: string | null;
    correctAnswer: string;
    isCorrect: boolean;
    timeSpentSeconds: number | null;
  }>;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function toText(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function toStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item): item is string => typeof item === "string");
}

function toDifficulty(value: unknown): Difficulty {
  if (value === "easy" || value === "medium" || value === "hard") {
    return value;
  }

  if (typeof value === "number") {
    if (value <= 2) return "easy";
    if (value >= 4) return "hard";
  }

  return "medium";
}

async function loadSyllabusGraph(): Promise<unknown> {
  const modulePath = ["@", "lib", "syllabusGraph"].join("/");
  const graphModule = (await import(modulePath)) as SyllabusGraphModule;
  return graphModule.syllabusGraph ?? graphModule.default;
}

function extractGraphConcepts(graph: unknown): GraphConcept[] {
  const nodes = Array.isArray(graph)
    ? graph
    : isRecord(graph) && Array.isArray(graph.nodes)
      ? graph.nodes
      : isRecord(graph) && Array.isArray(graph.chapters)
        ? graph.chapters
        : [];

  return nodes.flatMap((node, nodeIndex): GraphConcept[] => {
    if (!isRecord(node)) {
      return [];
    }

    const chapterTitle =
      toText(node.title) ?? toText(node.name) ?? toText(node.chapter) ?? `Chapter ${nodeIndex + 1}`;
    const chapterId = toText(node.id) ?? chapterTitle.toLowerCase().replaceAll(" ", "-");
    const rawConcepts = Array.isArray(node.concepts) ? node.concepts : [];

    if (rawConcepts.length === 0) {
      return [
        {
          id: chapterId,
          title: chapterTitle,
          chapterTitle,
          dependencies: toStringArray(node.dependencies),
          weakTopicTags: toStringArray(node.pyqTags),
          difficulty: toDifficulty(node.difficulty),
        },
      ];
    }

    return rawConcepts.map((rawConcept, conceptIndex): GraphConcept => {
      if (isRecord(rawConcept)) {
        const title = toText(rawConcept.title) ?? toText(rawConcept.name) ?? `Concept ${conceptIndex + 1}`;
        return {
          id: toText(rawConcept.id) ?? `${chapterId}-${conceptIndex + 1}`,
          title,
          chapterTitle,
          dependencies: toStringArray(rawConcept.dependencies),
          weakTopicTags: toStringArray(rawConcept.tags),
          difficulty: toDifficulty(rawConcept.difficulty ?? node.difficulty),
        };
      }

      const title = toText(rawConcept) ?? `Concept ${conceptIndex + 1}`;
      return {
        id: `${chapterId}-${conceptIndex + 1}`,
        title,
        chapterTitle,
        dependencies: toStringArray(node.dependencies),
        weakTopicTags: [...toStringArray(node.pyqTags), title],
        difficulty: toDifficulty(node.difficulty),
      };
    });
  });
}

function matchesFilter(value: string, filter?: string): boolean {
  return !filter || value.toLowerCase().includes(filter.trim().toLowerCase());
}

function buildOptions(concept: GraphConcept, allConcepts: GraphConcept[]): string[] {
  const distractors = allConcepts
    .filter((item) => item.id !== concept.id)
    .map((item) => item.title)
    .filter((title, index, source) => source.indexOf(title) === index)
    .slice(0, 3);

  const fallbackDistractors = concept.dependencies
    .filter((dependency) => dependency !== concept.title)
    .slice(0, 3 - distractors.length);

  return [concept.title, ...distractors, ...fallbackDistractors].slice(0, 4);
}

function generateQuestions(request: GenerateExamRequest, concepts: GraphConcept[]): McqQuestion[] {
  const count = Math.min(Math.max(request.count ?? 10, 1), 30);
  const filtered = concepts.filter(
    (concept) =>
      matchesFilter(concept.chapterTitle, request.chapter) &&
      matchesFilter(concept.title, request.concept)
  );
  const source = filtered.length > 0 ? filtered : concepts;

  return source.slice(0, count).map((concept, index) => ({
    id: `${concept.id}-${index + 1}`,
    chapter: concept.chapterTitle,
    concept: concept.title,
    difficulty: concept.difficulty,
    prompt: `Which option best represents the key idea tested from ${concept.title}?`,
    options: buildOptions(concept, concepts),
    correctAnswer: concept.title,
    explanation: `${concept.title} is the target concept from ${concept.chapterTitle}. Revise its dependencies before attempting harder MCQs.`,
    weakTopicTags: concept.weakTopicTags.length > 0 ? concept.weakTopicTags : [concept.title],
  }));
}

function scoreQuestions(request: ScoreExamRequest): ScoreAnalysis {
  const questionResults = request.questions.map((question) => {
    const selectedAnswer = request.selectedAnswers[question.id] ?? null;
    const isCorrect = selectedAnswer === question.correctAnswer;
    return {
      questionId: question.id,
      selectedAnswer,
      correctAnswer: question.correctAnswer,
      isCorrect,
      timeSpentSeconds: request.timeSpentSeconds?.[question.id] ?? null,
    };
  });

  const correct = questionResults.filter((result) => result.isCorrect).length;
  const unanswered = questionResults.filter((result) => result.selectedAnswer === null).length;
  const wrong = questionResults.length - correct - unanswered;
  const timedResults = questionResults.filter(
    (result): result is typeof result & { timeSpentSeconds: number } =>
      typeof result.timeSpentSeconds === "number"
  );
  const weakTopics = request.questions
    .filter((question) => request.selectedAnswers[question.id] !== question.correctAnswer)
    .flatMap((question) => question.weakTopicTags)
    .filter((tag, index, source) => source.indexOf(tag) === index);

  return {
    score: correct,
    total: request.questions.length,
    accuracy: request.questions.length === 0 ? 0 : Math.round((correct / request.questions.length) * 100),
    correct,
    wrong,
    unanswered,
    weakTopics,
    averageSpeedSeconds:
      timedResults.length === 0
        ? null
        : Math.round(
            timedResults.reduce((sum, result) => sum + result.timeSpentSeconds, 0) /
              timedResults.length
          ),
    questionResults,
  };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ExamRequest;

    if (body.action === "score") {
      return Response.json(scoreQuestions(body));
    }

    const graph = await loadSyllabusGraph();
    const concepts = extractGraphConcepts(graph);

    if (concepts.length === 0) {
      return Response.json(
        { error: "syllabusGraph.ts did not provide usable chapters or concepts." },
        { status: 500 }
      );
    }

    return Response.json({
      testId: crypto.randomUUID(),
      exam: body.exam ?? "jeeMain",
      questions: generateQuestions(body, concepts),
    });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to generate or score the exam right now.",
      },
      { status: 500 }
    );
  }
}
