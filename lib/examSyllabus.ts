import { masterSyllabus } from "./masterSyllabus/all";

function examMatches(exams: string[], examKey: string) {
  const normalized = exams.map((exam) => exam.toLowerCase().replace(/[\s_-]/g, ""));
  return normalized.includes(examKey.toLowerCase());
}

export const examSyllabus = {
  neet: {
    title: "🟢 NEET Chemistry",
    chapters: masterSyllabus.filter((c) =>
      examMatches(c.exams, "neet")
    ),
  },

  jeeMain: {
    title: "🟡 JEE Main Chemistry",
    chapters: masterSyllabus.filter((c) =>
      examMatches(c.exams, "jeeMain")
    ),
  },

  jeeAdvanced: {
    title: "🔴 JEE Advanced Chemistry",
    chapters: masterSyllabus.filter((c) =>
      examMatches(c.exams, "jeeAdvanced")
    ),
  },
};
