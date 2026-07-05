# Program Separation Handoff

## Root Cause
Current Program Hub design is generic sections over one shared chemistry engine.
Program pages still depend on masterSyllabus / examTags / examChapters logic.
This makes NEET, JEE Main, JEE Advanced, CBSE, ICSE, State Boards, GATE, and International feel like different doors into the same content.
True program separation is an architectural change, not a cosmetic UI change.

## Why not start now
This is an 11-module refactor:
- create every lib/programSyllabus/* source
- rewire every program page off masterSyllabus
- rewrite hub data into program-specific sections
- lint/typecheck/build
- grep-verify no program page touches masterSyllabus

Do not start it on low budget because a half-finished refactor can break the build.

## Program Separation Matrix

| Program | Syllabus source | Chapters | PYQ source | Test source | Analytics | Revision |
|---|---|---|---|---|---|---|
| JEE Main | lib/programSyllabus/jee-main.ts | NCERT-plus 11+12 | lib/pyq exam=JEE Main | JEE Main tests | rank/percentile + accuracy | spaced + speed |
| JEE Advanced | lib/programSyllabus/jee-advanced.ts | deeper multi-concept | exam=JEE Advanced | JEE Adv tests | concept-depth index | mechanism/exception |
| NEET | lib/programSyllabus/neet.ts | NCERT anchored | exam=NEET | NEET tests | NCERT mastery | NCERT rapid |
| CBSE 11 | lib/programSyllabus/cbse-class11.ts | CBSE Class 11 | coming soon Board PYQ | board mocks | board readiness | board revision |
| CBSE 12 | lib/programSyllabus/cbse-class12.ts | CBSE Class 12 | coming soon Board PYQ | board mocks | board readiness | board revision |
| ICSE 11 | lib/programSyllabus/icse-class11.ts | ISC Class 11 | coming soon ISC PYQ | ISC mocks | writing/practical | ISC revision |
| ICSE 12 | lib/programSyllabus/icse-class12.ts | ISC Class 12 | coming soon ISC PYQ | ISC mocks | writing/practical | ISC revision |
| State 11 | lib/programSyllabus/state-board-class11.ts | NCERT-aligned state core | coming soon | board mocks | board readiness | board revision |
| State 12 | lib/programSyllabus/state-board-class12.ts | NCERT-aligned state core | coming soon | board mocks | board readiness | board revision |
| GATE | lib/programSyllabus/gate.ts | GATE CY graduate syllabus | coming soon GATE PYQ | GATE mocks | graduate analytics | GATE revision |
| International | lib/programSyllabus/international.ts | mapping in progress | coming soon | coming soon | coming soon | coming soon |

## Program-specific sections
Replace one generic 7-section set with program-specific section sets.

JEE Main:
- Chapters
- PYQs
- Mock Tests
- Rank Analytics
- Revision

JEE Advanced:
- Advanced Theory
- Multi-Concept Problems
- Advanced PYQs
- Advanced Mock Tests
- Concept Depth Analytics
- Revision

NEET:
- NCERT Mastery
- PYQs
- Mock Tests
- Assertion-Reason
- Statement Questions
- NCERT Rapid Revision

CBSE:
- Chapter Learning
- Full Syllabus Dashboard
- NCERT Hub
- Board PYQs
- Answer Evaluation
- Project Hub
- Practical Hub
- Mentorship

ICSE:
- ISC Notes
- ISC PYQs
- Practicals
- Projects
- Mock Exams
- Answer Writing

State Boards:
- Board Curriculum
- Practical Records
- Board PYQs
- Board Mocks
- Answer Writing

GATE:
- Physical Chemistry
- Inorganic Chemistry
- Organic Chemistry
- GATE PYQs
- GATE Tests
- Graduate Analytics

International:
- Mapping in progress only
- No copied Indian syllabus

## Exact file plan
1. New:
   lib/programSyllabus/types.ts
   lib/programSyllabus/jee-main.ts
   lib/programSyllabus/jee-advanced.ts
   lib/programSyllabus/neet.ts
   lib/programSyllabus/cbse-class11.ts
   lib/programSyllabus/cbse-class12.ts
   lib/programSyllabus/icse-class11.ts
   lib/programSyllabus/icse-class12.ts
   lib/programSyllabus/state-board-class11.ts
   lib/programSyllabus/state-board-class12.ts
   lib/programSyllabus/gate.ts
   lib/programSyllabus/international.ts
   lib/programSyllabus/index.ts

2. Rewrite:
   lib/programHubData.ts
   app/programs/[slug]/learn/page.tsx
   app/programs/[slug]/practice/page.tsx
   app/programs/[slug]/tests/page.tsx

3. Remove from program pages:
   masterSyllabus
   examTags
   examChapters
   ExamSyllabus

4. Use only:
   getProgramSyllabus(slug)

## Verification commands
Run before implementation:
git status --short
git branch --show-current
git log --oneline -5

Run after implementation:
grep -R "masterSyllabus" app/programs lib/programSyllabus
npm run lint
npm run typecheck
npm run build

Expected:
- grep returns nothing
- lint PASS
- typecheck PASS
- build PASS

## Important constraints
- Do not fake official PYQ sources for Board/ISC/State/GATE.
- If PYQ banks do not exist, show honest coming-soon.
- Do not copy Indian syllabus into International.
- International must show mapping in progress.
- State Boards must say NCERT-aligned common core unless a specific state syllabus is added.
- Do not touch payments.
- Do not touch Supabase.
- Do not touch auth.
- Do not build notes content.
- Do not start Memory/Analytics/Digital Twin.
- Fix only program separation.
