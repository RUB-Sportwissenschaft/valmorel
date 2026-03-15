# Valmorel Essensumfrage

## What This Is

Eine statische One-Page-Web-App für eine einmalige Essensumfrage. Teilnehmer tragen ihren Namen ein, wählen zwischen drei Essensoptionen und bestätigen mit einem Klick. Alle Antworten werden in JSONBin.io gespeichert. Für Organisatoren gibt es eine passwortlose Admin-Ansicht mit Tabelle und PDF-Export.

## Core Value

Jeder Teilnehmer kann in unter 30 Sekunden seine Essenswahl abgeben — auch auf dem Handy, ohne Account, ohne Installation.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Teilnehmer gibt Vor- und Nachname ein (beide Pflichtfelder)
- [ ] Teilnehmer wählt genau eine Option: 🧀 Raclette, 🥦 Raclette vegetarisch, 🌱 Vegan (Radio-Buttons)
- [ ] Absenden speichert Antwort in JSONBin.io
- [ ] Nach Absenden: Bestätigungsscreen "Danke, [Vorname]! Deine Wahl wurde gespeichert."
- [ ] Admin-Ansicht erreichbar unter ?admin=true (kein Passwort)
- [ ] Admin zeigt Tabelle: Nachname | Vorname | Wahl
- [ ] Admin: "PDF herunterladen"-Button via jsPDF + AutoTable (CDN)
- [ ] PDF enthält Titel, Teilnehmerliste und kurze Auswertung (Anzahl pro Option)
- [ ] Single HTML-File: alles inline (CSS + JS)
- [ ] Deployment via GitHub Pages
- [ ] README mit Setup-Anleitung (JSONBin.io Key, GitHub Pages, WhatsApp-Teilen)

### Out of Scope

- Passwortschutz Admin — bewusst offen für Einfachheit
- Backend / Server — JSONBin.io ersetzt das vollständig
- Mehrfachauswahl — genau eine Wahl pro Person ist das Design
- Mehrsprachigkeit — UI komplett auf Deutsch
- Datenbearbeitung / -löschung in der App — nur Lesen im Admin

## Context

- Kontext: RUB (Ruhr-Universität Bochum) Sportwissenschaft — Veranstaltungsorganisation
- Corporate Design: Primärfarbe RUB Tartan-Orange `#EC633A`, Schriftart RubFlama (Headings), RUB Scala (Body). Fonts als TTF in `C:/Users/kilia/Dropbox/Claude/schulsporttag/static/Schriftarten/` vorhanden — als Base64 einbetten für Single-File-Deployment.
- Logos: `C:/Users/kilia/Dropbox/Claude/schulsporttag/static/logos/`
- JSONBin.io: kostenloser Dienst, kein Backend nötig. API-Key wird vom Nutzer eingetragen.
- Deployment-Ziel: GitHub Pages, Single HTML-File

## Constraints

- **Tech**: Single HTML-File, kein Build-Step, kein Framework — plain HTML/CSS/JS
- **Dependencies**: Nur CDN (jsPDF, AutoTable) — kein npm
- **Fonts**: RubFlama und RUB Scala als Base64 einbetten (keine separaten Dateien)
- **Storage**: JSONBin.io (kostenlos, max. 10k req/Tag) — ausreichend für einmalige Umfrage
- **Deployment**: GitHub Pages — nur statische Dateien möglich

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| JSONBin.io statt lokalem Storage | Antworten geräteübergreifend sichtbar, kein Backend nötig | — Pending |
| Single HTML-File | Kein Build-Step, einfaches Deployment, per WhatsApp teilbar | — Pending |
| Admin via ?admin=true (kein Passwort) | Einfachheit für einmaligen Use-Case | — Pending |
| RUB Corporate Design | Konsistenz mit bestehendem RUB Sportwissenschaft-Projekt | — Pending |
| Fonts als Base64 einbetten | Single-File-Requirement, keine externen Abhängigkeiten | — Pending |

---
*Last updated: 2026-03-15 after initialization*
