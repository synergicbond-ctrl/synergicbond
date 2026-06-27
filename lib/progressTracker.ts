export interface BookmarkedItem {
  id: string;
  type: "chapter" | "concept" | "formula" | "reaction" | "pyq";
  title: string;
  link: string;
}

export interface WrongQuestionRecord {
  questionId: string;
  chapterId: string;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
  attemptedAt: string;
}

export interface UserProgressStore {
  userId: string;
  completionPercentage: Record<string, number>;
  bookmarks: BookmarkedItem[];
  wrongQuestions: WrongQuestionRecord[];
  lastActive: string;
}

export function fetchUserProgress(userId: string): UserProgressStore {
  return {
    userId,
    completionPercentage: {
      "mole-concept": 100,
      "atomic-structure": 80,
      "coordination-compounds": 45,
    },
    bookmarks: [
      { id: "b-1", type: "reaction", title: "Reimer-Tiemann Reaction", link: "/chapter/organic#r-reimer-tiemann" },
      { id: "b-2", type: "formula", title: "Bohr's Electron Energy", link: "/chapter/physical#f-bohr-energy" }
    ],
    wrongQuestions: [
      {
        questionId: "wq-992",
        chapterId: "ionic-equilibrium",
        userAnswer: "B",
        correctAnswer: "A",
        explanation: "Buffer capacity is maximum when pH = pKa.",
        attemptedAt: "2026-06-24T14:32:00Z"
      }
    ],
    lastActive: "2026-06-25T19:40:00Z"
  };
}

export function addBookmark(store: UserProgressStore, item: BookmarkedItem): UserProgressStore {
  return {
    ...store,
    bookmarks: [...store.bookmarks.filter(b => b.id !== item.id), item]
  };
}
