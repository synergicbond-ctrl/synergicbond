# NEET Chemistry PYQ Implementation Report

## Branch

- Branch: `feature/neet-chemistry-pyq-engine`
- Safety cleanup commit: `7848f33`
- Final implementation commit: this report is included in `feat: build verified NEET chemistry PYQ engine`; use `git log -1` after commit for the immutable hash.

## Files Created

- `components/pyq/NEETChemistryPYQEngine.tsx`
- `data/pyq/import-templates/neet-chemistry-question.template.json`
- `docs/NEET_PYQ_IMPLEMENTATION_REPORT.md`
- `lib/pyq/neetChemistry.ts`
- `lib/pyq/neetChemistryChapters.ts`
- `lib/pyq/neetChemistryDataset.ts`
- `scripts/audit-neet-chemistry-pyq.mjs`
- `scripts/import-verified-neet-pyq.ts`

## Files Modified

- `app/pyq/page.tsx`
- `lib/pyq/questions/neet.ts`
- `package.json`

`scripts/audit_report.json` remains modified as generated output from earlier audit tooling and was intentionally left unstaged.

## Existing Architecture Reused

- Reused the existing `/pyq` route and tabbed PYQ surface.
- Preserved the older global JEE/NEET intelligence tabs.
- Added a dedicated NEET Chemistry official-source engine as the default `/pyq` tab instead of creating a duplicate route.
- Reused the project’s dark premium UI language and existing dependencies; no packages were installed.

## Dataset Counts

- Verified official questions: `0`
- Pending questions: `0`
- Rejected questions: `0`
- Duplicate content hashes: `0`

No official-source verified NEET/AIPMT Chemistry dataset exists in production, so the verified dataset is intentionally empty.

## Unverified Production Data Disconnected

- The previously generated NEET Chemistry dataset remains removed from production imports.
- `lib/pyq/questions/neet.ts` now exports an empty NEET list with a safety comment.
- Student-facing official NEET Chemistry PYQ UI uses only the new verified dataset.

## Validation Rules

The validation layer rejects records when:

- program is not `neet` or `aipmt`;
- subject is not `chemistry`;
- exam year is missing or outside the supported archive range;
- chapter ID is missing or not in the central NEET Chemistry chapter map;
- chapter/domain/class metadata does not match the central map;
- question text is empty;
- MCQ-style questions have fewer than two options;
- correct answer is missing or not present in options;
- original explanation is missing;
- official authority, official document title, and official question number are missing;
- verification date or notes are missing;
- verification status is not `verified-official`;
- content hash does not match normalized content;
- duplicate normalized content hashes exist.

## Filters

The NEET Chemistry engine supports:

- exam year;
- Class 11/Class 12;
- Physical/Inorganic/Organic domain;
- chapter;
- topic;
- difficulty;
- question text search;
- reset filters;
- URL search parameters for shareable filter state.

## Question Attempt Behaviour

- Students must select an option and press `Submit Answer` before answer revelation.
- Correct and incorrect options are highlighted only after submission.
- Explanation and source details appear only after submission.
- Previous/next navigation and a question palette are implemented.
- Mark-for-review, bookmark, and local error-report states are implemented.
- Empty verified-dataset state is visible and does not show fake counts.

## Official Source Metadata

The model supports:

- authority;
- official document title;
- source URL or source file name;
- official paper code;
- official answer-key code;
- official page number;
- official question number;
- verifier;
- verification date;
- verification notes.

Internal filesystem paths are not displayed in the UI.

## Importer And Audit Usage

- Template: `data/pyq/import-templates/neet-chemistry-question.template.json`
- Dry-run importer: `npx tsx scripts/import-verified-neet-pyq.ts --input ./path/to/verified.json --dry-run`
- Write importer: `npx tsx scripts/import-verified-neet-pyq.ts --input ./path/to/verified.json`
- Audit: `npm run audit-neet-pyq`

The importer never scrapes websites, never infers provenance, rejects invalid records, rejects duplicates, and does not write production data if validation fails.

## Verification

- TypeScript: `npm run typecheck` passed.
- NEET PYQ audit: `npm run audit-neet-pyq` passed with no module-type warning after renaming the standalone audit to `.mjs`.
- Production build: `npm run build` passed with Next.js 16.2.9 and `/pyq` generated successfully.
- Legacy audit note: `npm run audit-pyq` remains an unrelated pre-existing script that still depends on `npx tsx scripts/pyq-audit.ts`. It was intentionally not modified during final verification.

Final NEET audit output:

```json
{
  "totalRecords": 0,
  "verifiedOfficial": 0,
  "pending": 0,
  "rejected": 0,
  "neet": 0,
  "aipmt": 0,
  "nonChemistry": 0,
  "nonNeetPrograms": 0,
  "duplicateContentHashes": 0,
  "validationIssues": 0
}
```

Final verified production count: `0`.

## Blockers Requiring Decision

- Legacy `npm run audit-pyq` still uses `npx tsx`; it is outside the NEET-only audit fix and remains unchanged.
- Untracked raw `data/pyq/neet/...` staging files remain outside the implementation commit unless explicitly approved for a separate archival decision.

## Compliance Confirmations

- No commercial PYQ book content was copied into production data.
- No fake official PYQ was created.
- No demo question is exposed as an official PYQ.
- NEET/AIPMT Chemistry is isolated from JEE, Boards, Olympiad, and generic questions in the official engine.
- Data was not placed in `/public` or other downloadable public assets.
- Redox and Electrochemistry remain separate chapters in the central chapter map.
- No packages were installed.
- No package-lock, environment file, auth, pricing, Redox page, Mole Concept page, or public PYQ data was modified by the NEET PYQ engine work.
- Branch-scope review found no Redox files, Mole Concept files, pricing/auth files, environment files, package-lock changes, raw staging data commits, public PYQ data, commercial-book-derived production database, or fake official questions.
- The verified production dataset remains empty.
- `scripts/audit_report.json` and `data/pyq/neet/` remain intentionally unstaged.
