# CRITICAL CONTEXT — PLATFORM ARCHITECTURE DEFECT (Not Just Mole Concept)

**UPDATE — THIS IS NOW A PLATFORM ARCHITECTURE DEFECT, NOT ONLY A MOLE CONCEPT DEFECT.**

Production PDFs prove that even pages using newer styling still have **different structural architectures**:

- **Atomic Structure** has one chapter/lesson architecture
- **Mole Concept** has another
- **Thermodynamics** has another, including a completely different lesson hero system
- **Isomerism** has another, and at least one lesson has a severe blank-space/layout defect

## Root Requirement

**ONE GLOBAL APP SHELL + ONE CHAPTER SHELL + ONE LESSON SHELL + SHARED NAVIGATION + SHARED TYPOGRAPHY/SPACING/BORDER SYSTEM**

Chapter-specific chemistry content may remain unique inside that shell.

## What NOT to Do

❌ Do not solve this by merely recolouring existing legacy components  
❌ Do not create separate `ThermodynamicsShell`, `IsomerismShell`, `MoleConceptShell`, etc.  
❌ Do not fix Mole Concept and declare victory while Thermodynamics, Atomic Structure, and Isomerism still look like different products

## What TO Do

1. **Trace every active shell and renderer** across all 35 chapters
2. **Establish canonical shared components** for:
   - Global navbar (same across entire platform)
   - Chapter header (consistent discipline/title/description/free-premium treatment)
   - Chapter navigation (consistent tab/pill styling)
   - Lesson header (consistent lesson numbering/title/breadcrumb)
   - Lesson TOC (consistent sidebar or inline TOC if applicable)
   - Chemistry content area (flexible, but inside consistent frame)
   - Previous/next navigation (consistent pager)
3. **Migrate the entire platform systematically** to these canonical components
4. Different chapters can inject different content into chemistry areas; they must not redefine the surrounding website

## Target Architecture (Conceptual)

```
AppShell
├── GlobalNavbar (same navbar, same logo, same auth, same search)
├── ChapterShell
│   ├── ChapterHeader (discipline, title, description, free/premium badge)
│   ├── ChapterNavigation (tabs/pills for chapter sections)
│   ├── LessonShell
│   │   ├── LessonHeader (lesson number, title, breadcrumb)
│   │   ├── LessonTOC (optional sidebar)
│   │   ├── ChemistryContent (unique per chapter)
│   │   └── PreviousNextNavigation (consistent pager)
│   └── ChapterFooter (consistent footer)
└── GlobalFooter
```

## Investigation Starting Point

The existing instruction below about `/notes/mole-concept` is your **first diagnostic case**, not the complete scope.

After determining its root cause, **apply the same import/render-tree investigation across every live chapter and lesson**:

1. Map which shell file each chapter imports (canonical.tsx, premium.tsx, SbcCourseChrome.tsx, or bespoke)
2. Identify the renderer hierarchy (how components nest)
3. Identify where architecture diverges (different headers, different navs, different containers)
4. Document differences

Do not stop until the architecture itself is unified. Mole Concept is symptom #1; the disease is platform-wide.

---

# EXISTING DIAGNOSTIC INSTRUCTION (Below)

[The original 16-section instruction about Mole Concept follows here]
