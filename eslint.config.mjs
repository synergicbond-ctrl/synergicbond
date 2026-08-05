import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // The existing application intentionally uses `any` at integration
  // boundaries. Keep it visible without making the repository's lint gate
  // fail on 165 pre-existing occurrences.
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // public/ holds static assets served verbatim, never first-party source.
    // It contains vendored third-party bundles (e.g. the minified RDKit WASM
    // glue) whose style violations are not ours to fix and which otherwise
    // fail the lint step.
    "public/**",
    // Exclude temporary Claude Code worktrees used during development.
    ".claude/worktrees/**",
  ]),
]);

export default eslintConfig;
