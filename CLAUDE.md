# Valmorel — CLAUDE.md

## Kontext

RUB Sportwissenschaft — Tools f\u00fcr eine Skiausfahrt nach Valmorel mit ~80 Studierenden.
Betreuer: Kilian. Alles l\u00e4uft auf GitHub Pages, kein Backend.

---

## Projektstruktur

```
Valmorel/
  huettenabend/        H\u00fcttenabend Single-File-App
  CLAUDE.md
  README.md
  .gitignore
```

**Einstufungstest** lebt in eigenem Repo: https://github.com/RUB-Sportwissenschaft/einstufung

---

## H\u00fcttenabend (`huettenabend/index.html`)

**Zweck:** Eigene Single-HTML-App f\u00fcr den H\u00fcttenabend
**Live:** https://rub-sportwissenschaft.github.io/valmorel/huettenabend/
**Datei:** `huettenabend/index.html` (~463 KB)
**Format:** Single-File — CSS, JS, RUB-Fonts (RubFlama, RUB Scala) als Base64 inline

---

## Konventionen
- Windows/Git-Bash: Emojis und deutsche Umlaute in JS-Strings als Unicode-Escapes
- Node.js f\u00fcr Base64-Asset-Konvertierung (kein Python)
- Direkt auf `master` committen — kein PR-Workflow
