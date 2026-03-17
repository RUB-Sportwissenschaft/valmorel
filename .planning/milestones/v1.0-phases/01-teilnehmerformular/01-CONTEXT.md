# Phase 1: Teilnehmerformular - Context

**Gathered:** 2026-03-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Teilnehmer geben Vorname, Nachname und Gruppe (1–8) ein, wählen eine von drei Essensoptionen (Radio/Kachel), und senden ab. Nach erfolgreichem Speichern in JSONBin.io erscheint ein Bestätigungsscreen. Das sessionStorage-Flag verhindert erneutes Absenden. Admin-Ansicht und Deployment gehören zu Phase 2.

</domain>

<decisions>
## Implementation Decisions

### Schriftarten
- RUB-Schriften werden als Base64 eingebettet: RubFlama (Regular) und RUB Scala (Regular)
- RubFlama für alle Überschriften (H1, H2) und Buttons
- RUB Scala für Body-Text
- Fallback: `font-family: 'RubFlama', system-ui, sans-serif`
- Nur Regular-Schnitt je Font — kein Bold (kein Fett-Schnitt einbetten)

### Gruppenauswahl-Darstellung
- Gruppe 1–8 als Radio-Buttons, optisch als gestylte Kacheln (kein natives Radio-Input sichtbar)
- 2-Spalten-Layout (4×2) für die 8 Kacheln — platzsparend auf 320px
- Aktiv-Zustand: Orange Hintergrund/Rahmen (#EC633A), inaktiv: grauer Rahmen
- Label der Sektion: „Gruppe" (kurz)

### Essensoptionen-Look
- Drei Optionen als große Kacheln, vertikal gestapelt (1 Spalte) — volle Breite auf Mobile
- Kachel-Inhalt: Emoji + Name + kurze Beschreibung (z.B. „🧀 Raclette — mit Käse und Beilagen")
- Aktiv-Zustand: Orange Rahmen/Hintergrund wie bei Gruppen-Kacheln
- Bestätigungsscreen zeigt die gewählte Kachel nochmals (gleicher visueller Look, readonly)

### Fehler- und Validierungsanzeige
- Validierungsfehler erscheinen inline unter dem jeweiligen Feld (roter Text)
- Validierung wird nur beim Klick auf „Absenden" ausgelöst (nicht on blur / on input)
- Netzwerkfehler (JSONBin.io): Fehlermeldung inline unter dem Absenden-Button
- Ladezustand: Button wechselt von „Absenden" zu „Speichern…" und ist deaktiviert während des API-Aufrufs

### Claude's Discretion
- Exakte Beschreibungstexte der Essensoptionen (Nutzer kann beim Code-Review anpassen)
- Genaue Abstände, Padding, Border-Radius der Kacheln
- Genauer Fehlertext für Pflichtfeld-Fehler (z.B. „Bitte Vorname eingeben")
- Genauer Fehlertext für Netzwerkfehler (z.B. „Speichern fehlgeschlagen. Bitte erneut versuchen.")

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- Keine relevanten Assets: Das vorhandene `src/`-Verzeichnis ist ein anderes Projekt (RUB Skiausfahrt-Quiz, React/Vite) — wird nicht wiederverwendet
- Valmorel-App wird als neues Single-HTML-File von Grund auf gebaut

### Established Patterns
- Kein bestehendes Pattern — freie Hand bei Implementierung
- Constraint: Kein Framework, kein Build-Step, plain HTML/CSS/JS, nur CDN-Abhängigkeiten (jsPDF, AutoTable für Phase 2)

### Integration Points
- JSONBin.io API: Fetch-Aufruf von plain JS aus
- sessionStorage: Flag nach erfolgreichem Absenden setzen (CONF-03)
- Assets: RUB-Logo (`logo-wortmarke_sportwissenschaft_tartan-orange.png`) und `altipiano.png` aus `C:/Users/kilia/Dropbox/Claude/schulsporttag/static/logos/` als Base64 einbetten
- Fonts: TTF-Dateien aus `C:/Users/kilia/Dropbox/Claude/schulsporttag/static/Schriftarten/` als Base64 einbetten

</code_context>

<specifics>
## Specific Ideas

- Design-Ziel: „Warm und simpel" — kein Schnickschnack, keine Animationen (DSGN-05)
- RUB Corporate Design: Header-Hintergrund RUB-Blau (#003560), RUB-Logo oben zentriert (DSGN-01)
- Primärfarbe für Buttons und Kachel-Highlight: RUB Orange #EC633A (DSGN-02)
- Footer: `altipiano.png` klein und zentriert (DSGN-06)
- App funktioniert auf Smartphones ab 320px Breite — keine horizontale Scrollbar (DSGN-04)
- Kein Zurück-Button im Bestätigungsscreen; erneuter Aufruf nach Abstimmung zeigt sessionStorage-gesperrten Zustand

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 01-teilnehmerformular*
*Context gathered: 2026-03-16*
