# Class 10 Science Virtual Laboratory

Standalone, offline single-file lab (56 NCERT Class 10 experiments) served at `/class10-science-lab.html`.

- `src/engine.js` — canvas drawing library (glassware, liquids, flames, ray optics, circuits, field lines)
- `src/scenes-*.js` — one animated scene per experiment (deterministic function of time, control value and stage)
- `src/extra-*.js` — learning content (aim, theory, tables, viva, board questions, applications)
- `src/data.json` — experiment metadata (apparatus, steps, equation, quiz, safety)
- `src/ui.js`, `style.css`, `template.html` — app shell

Rebuild after editing: `node content/class10-lab/build.mjs`
