# Valmorel — CLAUDE.md

## Kontext

RUB Sportwissenschaft — Tools für eine Skiausfahrt nach Valmorel mit ~80 Studierenden.
Betreuer: Kilian. Alles läuft auf GitHub Pages. JSONBin als serverless Backend.

---

## Projektstruktur

```
Valmorel/
  huettenabend/        Hüttenabend Single-File-App
  pruefung/            Prüfungsorganisation (eigenes Repo: RUB-Sportwissenschaft/pruefung)
  CLAUDE.md
  README.md
  .gitignore
```

**Einstufungstest** lebt in eigenem Repo: https://github.com/RUB-Sportwissenschaft/einstufung

---

## Hüttenabend (`huettenabend/index.html`)

**Zweck:** Essensumfrage für den Hüttenabend
**Live:** https://rub-sportwissenschaft.github.io/valmorel/huettenabend/
**Datei:** `huettenabend/index.html` (~463 KB)
**Format:** Single-File — CSS, JS, RUB-Fonts (RubFlama, RUB Scala) als Base64 inline
**Backend:** JSONBin v3, BIN-ID: `69b74a15b7ec241ddc700fd7`

---

## Prüfungsanmeldung (`pruefung/`)

**Zweck:** Anmeldung Seminarabschluss / Prüfung Schneesport Exkursion 2026
**Live:** https://rub-sportwissenschaft.github.io/pruefung/
**Admin:** https://rub-sportwissenschaft.github.io/pruefung/?admin=true
**Repo:** https://github.com/RUB-Sportwissenschaft/pruefung
**Lokal:** `C:\Users\kilia\OneDrive\Desktop\Valmorel\pruefung\`
**Format:** Single-File `index.html` — Fonts + Logos als externe Dateien
**Struktur:**
```
pruefung/
  index.html
  img/sportwiss.png
  img/tu-dortmund.png
  fonts/RubFlama-Regular.ttf
  fonts/RubFlama-Bold.ttf
```
**Backend:** JSONBin v3, BIN-ID: `69bd6303b7ec241ddc88081a`
**Status:** App fertig und live
**Formular-Felder:** Name, Uni, Studienrichtung (3 Optionen), Gruppe, Abschluss
**Abschluss-Logik:**
- 3 Optionen: Studienleistung, (Modul)Prüfung, Lizenzen
- Studienleistung und (Modul)Prüfung schließen sich gegenseitig aus
- Lizenzen ist mit beiden kombinierbar
- (Modul)Prüfung-Label passt sich dynamisch an Uni-Auswahl an (RUB: M4 Praxis, TU: Natursport)

---

## Konventionen
- Windows/Git-Bash: Emojis in HTML als HTML-Entities (`&#x26F7;`), Umlaute direkt als UTF-8
- In JS-Strings: Unicode-Escapes (`\u00fc` etc.) sind valide und korrekt
- Node.js für Skripte (kein Python — nicht installiert)
- Direkt auf `master` committen — kein PR-Workflow
