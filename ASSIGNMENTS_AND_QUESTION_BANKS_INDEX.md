# Assignments, Test Papers & Question Banks — Index

Inventory of every assignment / question bank in this repo (git history starts 2026-09-03; files below were added 2026-09-03 or 2026-10-07).
Files are NOT physically moved: the live site serves them from the paths below
(`lib/assignments/registry.ts`, `app/learn/isomerism/resources/registry.ts`, `next.config.ts` file tracing),
so moving them would break downloads on synergicbond.com.

## A. Downloadable PDFs (added 2026-10-07)

### p-block family assignments — `content/assignments/<family>/`
| Family | File |
|---|---|
| Boron | `boron-family/Boron_Family_Question_Bank_with_Key.pdf`, `boron-family/Boron_Family_Solutions.pdf` |
| Carbon | `carbon-family/Carbon_Family_Question_Bank_with_Key.pdf`, `carbon-family/Carbon_Family_Solutions.pdf` |
| Nitrogen | `nitrogen-family/Nitrogen_Family_Assignment_with_Key.pdf` |
| Oxygen (Grp 16) | `oxygen-family/Oxygen_Family_Group16_Assignment_with_Key.pdf` |
| Halogen (Grp 17) | `halogen-family/Halogen_Family_Group17_Assignment_with_Key.pdf` |

### Isomerism — `content/isomerism-resources/pdf/`
- `Structural_Isomerism_Assignment.pdf`
- `Geometrical_Isomerism_40_Questions.pdf`, `Geometrical_Isomerism_Exercises.pdf`
- `Conformational_Isomerism_40_Questions.pdf`
- `Isomerism_Assignment_128_Questions.pdf`
- `OPTICAL_ISOMERISM_QUESTIONS.pdf`, `OPTICAL_ISOMERISM_SOLUTIONS.pdf`
- `ENANTIOMER_EXAMPLES.pdf`, `STEREOISOMER_RELATIONSHIP_EXAMPLES.pdf`

(Notes, not question sets: `Enantiomers_Diastereomers.pdf`, `STRUCTURAL_ISOMERISM_MASTER_FINAL.pdf`.)

## B. Question banks in app code (added 2026-09-03)
- `app/learn/jee-advanced/inorganic-chemistry/hydrogen/content/questionBank.ts` (+ `question-bank/` page)
- `app/learn/jee-advanced/inorganic-chemistry/s-block/content/questionBank.ts` (+ `question-bank/` page)
- `app/notes/boron-family/questionBank.ts`, `app/notes/carbon-family/questionBank.ts`
- `app/learn/periodic-table/PeriodicityQuestionBank.tsx`
- PYQ banks: `lib/pyq/questions/{neet,neetPhaseA,jeeMain,jeeMainPhaseA,jeeAdvanced}.ts`, `lib/pyq/neetChemistryPaper.ts`

## C. Loose source files
- `Hydrogen_Numerical_Questions.txt` (repo root; not referenced by code)
- `content/periodic-table/Periodicity_Question_Bank_Rewritten.md` (not referenced by code)

## Duplicate check
- No byte-identical duplicate files (SHA-1 compared across all PDF/DOCX/XLSX in repo).
- Possible content overlaps (need your call before deleting):
  - `Hydrogen_Numerical_Questions.txt` vs hydrogen `questionBank.ts`
  - `Periodicity_Question_Bank_Rewritten.md` vs `PeriodicityQuestionBank.tsx`
