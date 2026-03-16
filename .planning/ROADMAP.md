# Roadmap: Valmorel Essensumfrage

## Overview

Zwei Phasen: Zuerst die vollstaendige Teilnehmer-Experience (Formular, Speicherung, Bestaetigung, Design) — damit ist der Kern-Use-Case lieferbar. Dann Admin-Ansicht und Deployment, damit Organisatoren die Auswertung abrufen und die App verteilen koennen.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Teilnehmerformular** - Vollstaendige Teilnehmer-Experience: Formular, Speicherung in JSONBin.io, Bestaetigung und RUB-Design (completed 2026-03-15)
- [x] **Phase 2: Admin & Deployment** - Admin-Auswertungstabelle, PDF-Export und Single-File-Deployment auf GitHub Pages (completed 2026-03-16)

## Phase Details

### Phase 1: Teilnehmerformular
**Goal**: Teilnehmer koennen auf dem Handy in unter 30 Sekunden ihre Essenswahl abgeben und eine Bestaetigung sehen
**Depends on**: Nothing (first phase)
**Requirements**: FORM-01, FORM-02, FORM-03, FORM-04, FORM-05, FORM-06, STOR-01, STOR-02, STOR-03, CONF-01, CONF-02, CONF-03, DSGN-01, DSGN-02, DSGN-03, DSGN-04, DSGN-05
**Success Criteria** (what must be TRUE):
  1. Teilnehmer kann Vor- und Nachname eingeben, eine Gruppe (1–8) waehlen und eine Essensoption per Radio-Button auswaehlen — der Absenden-Button bleibt deaktiviert bis alle Felder ausgefuellt sind
  2. Nach dem Absenden erscheint "Danke, [Vorname]! Deine Wahl wurde gespeichert." mit der gewaehlten Option und Gruppe, kein Zurueck-Button ist sichtbar
  3. Bei einem Netzwerkfehler sieht der Teilnehmer eine benutzerfreundliche Fehlermeldung auf Deutsch
  4. Die App sieht auf einem 320px-Smartphone korrekt aus: RUB-Logo oben, Orange-Akzente, lesbare Schrift, keine horizontale Scrollbar
**Plans**: 2 plans

Plans:
- [x] 01-01-PLAN.md — Statische HTML-Struktur mit RUB-Design und Base64-Assets (Fonts, Logo, altipiano.png)
- [x] 01-02-PLAN.md — JavaScript-Logik: Validierung, JSONBin.io-Speicherung, Bestaetigungsscreen, sessionStorage-Flag

### Phase 2: Admin & Deployment
**Goal**: Organisatoren koennen alle Antworten einsehen, als PDF exportieren, und die App ist per GitHub Pages erreichbar
**Depends on**: Phase 1
**Requirements**: ADMN-01, ADMN-02, ADMN-03, ADMN-04, ADMN-05, DEPL-01, DEPL-02, DEPL-03
**Success Criteria** (what must be TRUE):
  1. Unter ?admin=true laedt die Seite alle Antworten aus JSONBin.io und zeigt sie in einer sortierbaren Tabelle (Nachname | Vorname | Gruppe | Wahl | Zeitstempel)
  2. Ein Klick auf "PDF herunterladen" generiert ein PDF mit Titel, Datum, Teilnehmerliste und Auswertung (Anzahl pro Option)
  3. Die gesamte App ist eine einzige HTML-Datei — kein separates CSS, JS oder Bild-File noetig
  4. Ein Entwickler kann anhand der README in unter 5 Minuten den JSONBin.io-Key eintragen, pushen und die GitHub-Pages-URL mit WhatsApp teilen
**Plans**: 3 plans

Plans:
- [x] 02-01-PLAN.md — Admin-Ansicht: JSONBin-Datenladen, Tabelle (Nachname | Vorname | Gruppe | Wahl | Zeitstempel), Sortierung nach Nachname und Gruppe
- [ ] 02-02-PLAN.md — PDF-Export: jsPDF + AutoTable via CDN, Teilnehmerliste und Auswertung (Anzahl pro Option)
- [ ] 02-03-PLAN.md — Single-File-Finalisierung und README: Pruefung, Deployment-Anleitung, GitHub-Pages-URL

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Teilnehmerformular | 2/2 | Complete   | 2026-03-15 |
| 2. Admin & Deployment | 3/3 | Complete   | 2026-03-16 |
