import { S_BLOCK_FOUNDATIONS } from "./content/foundations";
import { S_BLOCK_ANOMALIES } from "./content/anomalies";
import { S_BLOCK_REACTIONS } from "./content/reactions";
import { S_BLOCK_COMPOUNDS } from "./content/compounds";
import { S_BLOCK_APPLICATIONS } from "./content/applications";

// Original, source-audited S-block master notes for JEE Advanced.
// The modules are separated only for maintainability; lessons are assembled
// into one numbered Markdown stream for the existing lesson engine.
export const S_BLOCK_MASTER_MARKDOWN = [
  S_BLOCK_FOUNDATIONS,
  S_BLOCK_ANOMALIES,
  S_BLOCK_REACTIONS,
  S_BLOCK_COMPOUNDS,
  S_BLOCK_APPLICATIONS,
].join("\n\n");
