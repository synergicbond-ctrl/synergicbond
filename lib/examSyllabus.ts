import { masterSyllabus } from "./masterSyllabus";

export const examSyllabus = {
  neet: {
    title: "🟢 NEET Chemistry",
    chapters: masterSyllabus.filter((c) =>
      c.exams.includes("neet")
    ),
  },

  jeeMain: {
    title: "🟡 JEE Main Chemistry",
    chapters: masterSyllabus.filter((c) =>
      c.exams.includes("jeeMain")
    ),
  },

  jeeAdvanced: {
    title: "🔴 JEE Advanced Chemistry",
    chapters: masterSyllabus.filter((c) =>
      c.exams.includes("jeeAdvanced")
    ),
  },
};