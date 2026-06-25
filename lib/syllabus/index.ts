import { physicalChapters } from "./physical";
import { inorganicChapters } from "./inorganic";
import { organicChapters } from "./organic";

export * from "./types";
export * from "./physical";
export * from "./inorganic";
export * from "./organic";
export * from "./concepts";
export * from "./prerequisites";
export * from "./examMapping";
export * from "./metadata";

export const masterSyllabus = [
  ...physicalChapters,
  ...inorganicChapters,
  ...organicChapters,
];

export default masterSyllabus;