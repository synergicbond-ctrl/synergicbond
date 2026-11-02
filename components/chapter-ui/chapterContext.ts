"use client";

import { createContext, useContext } from "react";

/** Which chapter's progress store the page is using. Empty outside the shared shell. */
export const ChapterContext = createContext<string>("");
export const useChapterId = () => useContext(ChapterContext);
