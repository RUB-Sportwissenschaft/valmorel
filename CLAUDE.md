# Valmorel — CLAUDE.md

## Kontext

RUB Sportwissenschaft — Tools für eine Skiausfahrt nach Valmorel mit ~80 Studierenden.
Betreuer: Kilian. Alles läuft auf GitHub Pages, kein Backend.

---

## App 1: Einstufungstest (React/Vite)

**Zweck:** Ski-Einstufungstest für Studierende — 10 Fragen, Ergebnis Level 1–8 zur Gruppeneinteilung
**Live:** https://rub-sportwissenschaft.github.io/valmorel/
**Entry:** `index.html` → `src/main.jsx`

### Stack
- React 19, Vite 6, Tailwind v4 (`@tailwindcss/vite`), jsPDF (devDep)
- Kein Backend — Name als einziger Identifier

### Struktur
```
src/
  App.jsx
  main.jsx
  index.css
  components/    WelcomeScreen, QuestionScreen, ProgressBar, AnswerButton, ResultScreen, AnswerSummary
  data/          questions.js  ← Herzstück — Fragen noch als DRAFT
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
Fragen in `src/data/questions.js` sind noch **DRAFT** — müssen einzeln präzisiert werden (SJT/BARS-Format).

### Deployment
```bash
npm run build && npx gh-pages -d dist && git push
```

---

## App 3: Hüttenabend (`huettenabend/index.html`)

**Zweck:** Eigene Single-HTML-App für den Hüttenabend
**Datei:** `huettenabend/index.html` (~452 KB, 769 Zeilen)
**Format:** Single-File — CSS, JS, RUB-Fonts (RubFlama, RUB Scala) als Base64 inline

---

## Konventionen (alle Apps)
- Windows/Git-Bash: Emojis und deutsche Umlaute in JS-Strings als Unicode-Escapes
- Node.js für Base64-Asset-Konvertierung (kein Python)
- Direkt auf `master` committen — kein PR-Workflow
