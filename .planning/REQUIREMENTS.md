# Requirements: Valmorel Essensumfrage

**Defined:** 2026-03-15
**Core Value:** Jeder Teilnehmer kann in unter 30 Sekunden seine Essenswahl abgeben — auch auf dem Handy, ohne Account, ohne Installation.

## v1 Requirements

### Formular

- [x] **FORM-01**: Teilnehmer kann Vorname eingeben (Pflichtfeld, min. 2 Zeichen)
- [x] **FORM-02**: Teilnehmer kann Nachname eingeben (Pflichtfeld, min. 2 Zeichen)
- [x] **FORM-03**: Teilnehmer wählt Gruppe (1–8, Pflichtfeld — Dropdown oder Radio-Buttons)
- [x] **FORM-04**: Teilnehmer wählt genau eine Essensoption via Radio-Button: 🧀 Raclette | 🥦 Raclette vegetarisch | 🌱 Vegan
- [x] **FORM-05**: Absenden-Button ist deaktiviert bis alle Pflichtfelder ausgefüllt und eine Option gewählt ist
- [x] **FORM-06**: Formular-Validierung zeigt klare Fehlermeldungen auf Deutsch

### Speicherung

- [x] **STOR-01**: Beim Absenden wird die Antwort (Vorname, Nachname, Gruppe, Wahl, Zeitstempel) via JSONBin.io API gespeichert
- [x] **STOR-02**: JSONBin.io API-Key und Bin-ID sind als Konstanten im HTML-File konfigurierbar
- [x] **STOR-03**: Fehler beim Speichern zeigt eine benutzerfreundliche Fehlermeldung

### Bestätigung

- [x] **CONF-01**: Nach erfolgreichem Absenden erscheint Bestätigungsscreen: "Danke, [Vorname]! Deine Wahl wurde gespeichert."
- [x] **CONF-02**: Bestätigungsscreen zeigt die gewählte Option und Gruppe noch einmal an
- [x] **CONF-03**: Kein Zurück-Button — einmalige Abstimmung pro Gerät (sessionStorage-Flag)

### Admin-Ansicht

- [x] **ADMN-01**: Admin-Ansicht erreichbar unter ?admin=true (kein Passwort)
- [x] **ADMN-02**: Admin lädt alle Antworten aus JSONBin.io und zeigt Tabelle: Nachname | Vorname | Gruppe | Wahl | Zeitstempel
- [x] **ADMN-03**: Tabelle sortierbar nach Nachname (alphabetisch) und nach Gruppe
- [x] **ADMN-04**: "PDF herunterladen"-Button lädt jsPDF + AutoTable via CDN und generiert PDF
- [x] **ADMN-05**: PDF enthält: Titel "Essensumfrage Valmorel", Datum, Teilnehmerliste als Tabelle (mit Gruppe), Auswertung (Anzahl pro Option, optional auch pro Gruppe)

### Design & UX

- [x] **DSGN-01**: Logo `logo-wortmarke_sportwissenschaft_tartan-orange.png` als Base64 eingebettet, oben zentriert, auf RUB-Blau (#003560) Hintergrund-Header
- [x] **DSGN-02**: Primärfarbe RUB Orange #EC633A für Buttons und Akzente
- [x] **DSGN-03**: System-Fonts (font-family: system-ui, -apple-system, sans-serif)
- [x] **DSGN-04**: Mobile-first, responsive — funktioniert auf Smartphones (min. 320px Breite)
- [x] **DSGN-05**: Warm und simpel — kein Schnickschnack, keine Animationen
- [x] **DSGN-06**: `altipiano.png` als Base64 eingebettet, klein unten (Footer-Bereich), zentriert

### Deployment & Setup

- [x] **DEPL-01**: Gesamte App als Single HTML-File (alles inline: CSS + JS + Base64-Assets)
- [x] **DEPL-02**: README.md mit Schritt-für-Schritt-Anleitung: JSONBin.io Key eintragen → GitHub pushen → Pages aktivieren → WhatsApp-Link teilen
- [x] **DEPL-03**: Am Ende der HTML-Generierung nach GitHub-Username fragen für die fertige GitHub-Pages-URL

## v2 Requirements

- **V2-01**: Export als CSV zusätzlich zu PDF
- **V2-02**: Admin: Antworten löschen oder bearbeiten
- **V2-03**: Passwortschutz für Admin-Bereich
- **V2-04**: Auswertung gruppiert nach Gruppen-Nummer

## Out of Scope

| Feature | Reason |
|---------|--------|
| Backend / Server | JSONBin.io ersetzt das vollständig für diesen Use-Case |
| Mehrfachauswahl | Genau eine Wahl pro Person ist das Design |
| Mehrsprachigkeit | UI komplett auf Deutsch |
| Bearbeitung/Löschung in App | Nur Lesen im Admin, kein Write-Back |
| Echtzeit-Updates Admin | Manuelles Reload reicht für einmalige Umfrage |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FORM-01 | Phase 1 — Teilnehmerformular | Complete |
| FORM-02 | Phase 1 — Teilnehmerformular | Complete |
| FORM-03 | Phase 1 — Teilnehmerformular | Complete |
| FORM-04 | Phase 1 — Teilnehmerformular | Complete |
| FORM-05 | Phase 1 — Teilnehmerformular | Complete |
| FORM-06 | Phase 1 — Teilnehmerformular | Complete |
| STOR-01 | Phase 1 — Teilnehmerformular | Complete |
| STOR-02 | Phase 1 — Teilnehmerformular | Complete |
| STOR-03 | Phase 1 — Teilnehmerformular | Complete |
| CONF-01 | Phase 1 — Teilnehmerformular | Complete |
| CONF-02 | Phase 1 — Teilnehmerformular | Complete |
| CONF-03 | Phase 1 — Teilnehmerformular | Complete |
| DSGN-01 | Phase 1 — Teilnehmerformular | Complete |
| DSGN-02 | Phase 1 — Teilnehmerformular | Complete |
| DSGN-03 | Phase 1 — Teilnehmerformular | Complete |
| DSGN-04 | Phase 1 — Teilnehmerformular | Complete |
| DSGN-05 | Phase 1 — Teilnehmerformular | Complete |
| DSGN-06 | Phase 1 — Teilnehmerformular | Complete |
| ADMN-01 | Phase 2 — Admin & Deployment | Complete |
| ADMN-02 | Phase 2 — Admin & Deployment | Complete |
| ADMN-03 | Phase 2 — Admin & Deployment | Complete |
| ADMN-04 | Phase 2 — Admin & Deployment | Complete |
| ADMN-05 | Phase 2 — Admin & Deployment | Complete |
| DEPL-01 | Phase 2 — Admin & Deployment | Complete |
| DEPL-02 | Phase 2 — Admin & Deployment | Complete |
| DEPL-03 | Phase 2 — Admin & Deployment | Complete |

**Coverage:**
- v1 requirements: 26 total
- Mapped to phases: 26
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-15*
*Last updated: 2026-03-15 — Roadmap created, traceability expanded to individual rows*
