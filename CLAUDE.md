# Valmorel — CLAUDE.md

## Kontext

RUB Sportwissenschaft — Tools f\u00fcr eine Skiausfahrt nach Valmorel mit ~80 Studierenden.
Betreuer: Kilian. Alles l\u00e4uft auf GitHub Pages, kein Backend.

---

## Projektstruktur

```
Valmorel/
  einstufungstest/     App 1: React/Vite Ski-Einstufungstest
  huettenabend/        App 2: H\u00fcttenabend Single-File-App
  CLAUDE.md
  README.md
  .gitignore
```

---

## App 1: Einstufungstest (`einstufungstest/`)

**Zweck:** Ski-Einstufungstest f\u00fcr Studierende — 10 Fragen, Ergebnis Level 1–8 zur Gruppeneinteilung
**Live:** https://rub-sportwissenschaft.github.io/valmorel/einstufung/
**Entry:** `einstufungstest/index.html` → `einstufungstest/src/main.jsx`

### Stack
- React 19, Vite 6, Tailwind v4 (`@tailwindcss/vite`), jsPDF (devDep)
- Kein Backend — Name als einziger Identifier

### Struktur
```
einstufungstest/
  index.html
  package.json
  vite.config.js
  src/
    App.jsx
    main.jsx
    index.css
    components/    WelcomeScreen, QuestionScreen, ProgressBar, AnswerButton, ResultScreen, AnswerSummary
    data/          questions.js  ← Herzst\u00fcck — Fragen noch als DRAFT
    hooks/
    logic/
    utils/
  dist/            Build-Output (→ GitHub Pages gh-pages branch)
```

### Fragen-Logik
- 5 feste Fragen (Grundprofil, Fragen 1–5)
- 2 adaptive Pool-Fragen nach Frage 5: `< 8 Pkt → low`, `8–14 → mid`, `≥ 14 → high`
- 3 gemeinsame Abschlussfragen
- Scoring: Summe 0–40 → Level 1–8

### Offener Arbeitsstand
Fragen in `einstufungstest/src/data/questions.js` sind noch **DRAFT** — m\u00fcssen einzeln pr\u00e4zisiert werden (SJT/BARS-Format).

### Deployment
```bash
cd einstufungstest && npm run build && npx gh-pages -d dist --dest einstufung && cd .. && git push
```

---

## App 2: H\u00fcttenabend (`huettenabend/index.html`)

**Zweck:** Eigene Single-HTML-App f\u00fcr den H\u00fcttenabend
**Datei:** `huettenabend/index.html` (~463 KB)
**Format:** Single-File — CSS, JS, RUB-Fonts (RubFlama, RUB Scala) als Base64 inline

---

## Konventionen (alle Apps)
- Windows/Git-Bash: Emojis und deutsche Umlaute in JS-Strings als Unicode-Escapes
- Node.js f\u00fcr Base64-Asset-Konvertierung (kein Python)
- Direkt auf `master` committen — kein PR-Workflow
