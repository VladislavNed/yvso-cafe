# React-Gruppenprojekt: Freies App-Projekt mit festen Anforderungen

In diesem Projekt entwickelt ihr in einer Gruppe von **3–4 Personen** eine eigene React-Anwendung über **4 Tage**.

Das Thema eurer App dürft ihr selbst wählen. Ihr könnt zum Beispiel eine To-Do-App, eine Lernplattform, ein Dashboard, eine Rezept-App, eine Event-App, eine Finanzübersicht, eine Fitness-App, eine Buchverwaltung, eine Projektmanagement-App oder etwas komplett anderes bauen.

Wichtig ist:

Ihr entscheidet selbst über das Thema, aber eure App muss bestimmte technische und funktionale Anforderungen erfüllen.

---

# Ziel des Projekts

Ihr sollt zeigen, dass ihr den React-Grundkurs sicher anwenden könnt.

Dazu gehören:

- React-Komponenten
- Props
- State
- Hooks
- Context
- Routing mit TanStack Router
- Server State mit TanStack Query
- Formulare mit TanStack Form
- Validierung mit Zod
- CRUD-Funktionen
- Teamarbeit mit Git und GitHub
- saubere Komponentenstruktur
- einfache UX-Zustände
- Fehlerbehandlung
- Präsentation eurer Arbeit

---

# Projektidee

Ihr entwickelt gemeinsam eine eigene kleine Web-App.

Das Thema ist frei wählbar.

Beispiele für mögliche Projekte:

```txt
Task Manager
Recipe Book
Event Planner
Fitness Tracker
Budget Planner
Movie Watchlist
Book Library
Habit Tracker
Learning Dashboard
Travel Planner
Inventory Manager
Bug Tracker
Mini CRM
Job Application Tracker
Course Planner
Pet Care Tracker
Meal Planner
Shopping List App
```

Ihr dürft auch eine eigene Idee verwenden.

---

# Wichtig

Euer Projekt darf nicht nur eine einfache statische Webseite sein.

Es muss eine echte kleine App sein, in der Nutzer Daten anzeigen, erstellen, bearbeiten, löschen, filtern und über mehrere Seiten navigieren können.

Da ihr als Gruppe arbeitet, muss das Projekt groß genug sein, damit alle Personen aktiv beitragen können.

---

# Gruppengröße

Die Gruppen bestehen aus:

```txt
3–4 Personen
```

Jede Person muss sichtbar zum Projekt beitragen.

Das bedeutet:

- jede Person arbeitet an eigenen Aufgaben
- jede Person erstellt eigene Commits
- jede Person beteiligt sich an Planung und Umsetzung
- jede Person kann ihren Teil in der Präsentation erklären

---

# Technischer Stack

Ihr sollt verwenden:

```txt
React
Vite
TanStack Router
TanStack Query
TanStack Form
Zod
Context API
React Hooks
CSS, CSS Modules, Tailwind CSS oder eine andere Styling-Lösung
```

Optional:

```txt
TypeScript
Mock API
JSON Server
localStorage
Theme Toggle
Toast Notifications
Pagination
Optimistic Updates
```

TypeScript ist empfohlen, wenn ihr euch damit sicher fühlt.

---

# Datenquelle

Eure App soll mit Daten arbeiten.

Ihr könnt eine der folgenden Varianten verwenden.

## Variante 1: Mock API mit JSON Server

Empfohlen für Gruppenprojekte.

Ihr erstellt eine lokale API mit `json-server`.

Beispiel:

```txt
db.json
```

Diese API verwendet ihr dann mit TanStack Query.

## Variante 2: Eigene Mock-Funktionen

Ihr simuliert API-Funktionen mit Promises.

Beispiel:

```ts
getItems();
getItemById(id);
createItem(data);
updateItem(id, data);
deleteItem(id);
```

Auch diese Funktionen sollen mit TanStack Query verwendet werden.

## Variante 3: Externe freie API

Ihr könnt eine externe API verwenden, wenn sie zu eurem Projekt passt.

Wichtig:

Wenn die externe API kein Erstellen, Bearbeiten und Löschen erlaubt, müsst ihr diese Teile lokal, mit Mock-Daten oder mit JSON Server ergänzen.

---

# Teamorganisation

Bevor ihr mit dem Coden beginnt, legt ihr gemeinsam fest:

```txt
Was bauen wir?
Welche Daten verwalten wir?
Welche Seiten brauchen wir?
Welche Features sind Pflicht?
Wer übernimmt welchen Bereich?
Wie arbeiten wir mit Git?
```

---

# Empfohlene Rollen

Ihr könnt euch zum Beispiel so aufteilen.

## Person 1: Routing, Layout und Navigation

Verantwortlich für:

- Projektsetup
- TanStack Router
- Seitenstruktur
- App Layout
- Navigation
- Not-Found-Seite
- Grunddesign

## Person 2: Daten, TanStack Query und API

Verantwortlich für:

- Datenmodell
- Mock API oder Service-Funktionen
- TanStack Query Setup
- Queries
- Mutations
- Loading States
- Error States

## Person 3: Formulare, TanStack Form und Zod

Verantwortlich für:

- Create-Formular
- Edit-Formular
- wiederverwendbare Form-Komponente
- Zod-Schema
- Validierung
- Fehlermeldungen

## Person 4: Dashboard, Filter, UX und Context

Verantwortlich für:

- Dashboard
- Suche
- Filter
- Sortierung
- Context Feature
- Empty States
- Responsive Design
- Polishing

Bei Gruppen mit 3 Personen können Dashboard, Filter, UX und Context auf die anderen Rollen verteilt werden.

---

# Git-Workflow

Ihr arbeitet gemeinsam über Git und GitHub.

Pflicht:

- ein gemeinsames Repository
- sinnvolle Branches
- regelmäßige Commits
- Pull Requests oder klare Merge-Absprachen
- keine Arbeit nur auf `main`
- jede Person muss eigene Commits haben

Empfohlen:

```txt
main
develop
feature/router-layout
feature/query-api
feature/forms-zod
feature/dashboard-filters
feature/context-ux
```

Commit Messages sollten verständlich sein.

Beispiele:

```txt
feat: add router layout
feat: add item overview page
feat: implement create form validation
fix: handle empty item list
refactor: extract item card component
```

---

# Mindestanforderungen an eure App

Eure App muss alle folgenden Anforderungen erfüllen.

---

# 1. Routing

Eure App muss mehrere Seiten haben.

Mindestens erforderlich:

```txt
/
├── Dashboard oder Startseite
/items
├── Übersichtsseite
/items/$itemId
├── Detailseite
/items/new
├── Formular zum Erstellen
/items/$itemId/edit
├── Formular zum Bearbeiten
/about
├── Projektinfo
```

Die Namen dürfen zu eurem Projekt passen.

Beispiele:

Bei einer Rezept-App:

```txt
/
/recipes
/recipes/$recipeId
/recipes/new
/recipes/$recipeId/edit
/about
```

Bei einer Fitness-App:

```txt
/
/workouts
/workouts/$workoutId
/workouts/new
/workouts/$workoutId/edit
/about
```

Bei einer Job-Tracker-App:

```txt
/
/applications
/applications/$applicationId
/applications/new
/applications/$applicationId/edit
/about
```

---

# 2. Layout und Navigation

Eure App braucht ein klares Grundlayout.

Pflicht:

- Header oder Sidebar
- Navigation
- Main-Bereich
- aktive Navigation sichtbar machen
- sinnvolle Seitenstruktur
- responsive Grundstruktur

Die Navigation soll mindestens enthalten:

```txt
Dashboard
Overview
Create
About
```

Die Namen dürfen an euer Projekt angepasst werden.

---

# 3. Datenmodell

Eure App braucht mindestens ein zentrales Datenmodell.

Dieses Modell muss mindestens folgende Eigenschaften haben:

```txt
id
title oder name
description
category oder type
status
createdAt
updatedAt
```

Zusätzlich soll euer Modell mindestens **4 weitere projektspezifische Felder** enthalten.

Beispiele:

## Task Manager

```txt
priority
dueDate
assignee
estimatedTime
```

## Recipe Book

```txt
ingredients
cookingTime
difficulty
servings
```

## Fitness Tracker

```txt
duration
exerciseType
calories
intensity
```

## Job Application Tracker

```txt
company
position
applicationDate
contactPerson
```

---

# 4. Übersichtsliste

Eure App braucht eine Übersichtsseite.

Auf dieser Seite sollen alle Einträge angezeigt werden.

Pflicht:

- Liste, Grid oder Tabelle
- Card-Komponente oder Tabellenansicht
- Link zur Detailseite
- sinnvolle Darstellung der wichtigsten Informationen
- Empty State, wenn keine Daten vorhanden sind

Beispiel:

```txt
No items found.
Create your first item.
```

---

# 5. Detailseite

Jeder Eintrag muss eine eigene Detailseite haben.

Pflicht:

- dynamische Route mit ID
- Daten anhand der ID laden
- Details anzeigen
- Button oder Link zum Bearbeiten
- Button zum Löschen
- Zurück-Link zur Übersicht
- Not-Found-Zustand bei ungültiger ID

Beispiel:

```txt
Item not found.
Back to overview
```

---

# 6. Create-Funktion

Nutzer müssen neue Einträge erstellen können.

Pflicht:

- eigene Create-Seite
- Formular mit TanStack Form
- mindestens 6 Formularfelder
- Validierung mit Zod
- Fehlermeldungen im Formular
- Speichern über Mutation
- danach Weiterleitung zur Detailseite oder Übersicht

---

# 7. Edit-Funktion

Nutzer müssen bestehende Einträge bearbeiten können.

Pflicht:

- eigene Edit-Seite
- bestehende Daten werden geladen
- Formular ist vorausgefüllt
- Formular verwendet ebenfalls TanStack Form
- Validierung mit Zod
- Speichern der Änderungen über Mutation
- danach Weiterleitung zur Detailseite oder Übersicht

---

# 8. Delete-Funktion

Nutzer müssen Einträge löschen können.

Pflicht:

- Delete Button auf der Detailseite oder Übersicht
- Sicherheitsabfrage vor dem Löschen
- Löschen über Mutation
- danach Query invalidieren oder Liste aktualisieren
- danach Weiterleitung, falls nötig

Beispiel:

```ts
const shouldDelete = window.confirm("Do you really want to delete this item?");
```

---

# 9. TanStack Query

Eure App muss TanStack Query verwenden.

Pflicht:

- Daten mit `useQuery` laden
- Create/Edit/Delete mit `useMutation`
- Query invalidieren oder aktualisieren nach Änderungen
- Loading State anzeigen
- Error State anzeigen
- Empty State anzeigen

Beispiele für States:

```txt
Loading items...
Something went wrong.
No items found.
```

---

# 10. TanStack Form

Eure App muss TanStack Form verwenden.

Pflicht:

- Formular für Create
- Formular für Edit
- kontrollierte Formularfelder
- Validierung
- Fehlermeldungen
- sinnvolle Submit-Logik
- wiederverwendbare Form-Komponente oder wiederverwendbare Form-Logik

Mindestens diese Feldtypen sollten vorkommen:

```txt
text input
textarea
select
number input oder date input
checkbox, radio oder weiteres select
```

---

# 11. Zod-Validierung

Eure Formulare müssen mit Zod validiert werden.

Pflicht:

- mindestens ein Zod-Schema für das Hauptmodell
- Validierung für Create
- Validierung für Edit
- sinnvolle Fehlermeldungen
- mindestens eine String-Validierung
- mindestens eine Number- oder Date-Validierung
- mindestens eine Enum-Validierung

Beispiel:

```ts
const itemSchema = z.object({
  title: z.string().min(3, "Title must contain at least 3 characters"),
  description: z
    .string()
    .min(10, "Description must contain at least 10 characters"),
  status: z.enum(["planned", "active", "completed"]),
});
```

---

# 12. Context API

Eure App muss Context sinnvoll verwenden.

Der Context soll nicht einfach nur eingebaut werden, damit er existiert.

Mögliche sinnvolle Verwendungen:

```txt
Theme Context
User Settings Context
Favorites Context
App Preferences Context
Auth Simulation Context
Filter Preferences Context
```

Beispiele:

## Theme Context

- Light Mode
- Dark Mode
- Auswahl wird gespeichert

## Favorites Context

- Nutzer kann Einträge als Favorit markieren
- Favoriten sind global verfügbar

## Auth Simulation Context

- Nutzer kann sich simuliert einloggen
- bestimmte Seiten oder Aktionen sind nur eingeloggt sichtbar

---

# 13. Suche, Filter und Sortierung

Eure Übersichtsseite muss interaktiv sein.

Pflicht:

- Suche nach Titel oder Name
- mindestens zwei Filter
- mindestens eine Sortierung

Beispiele für Filter:

```txt
Status
Category
Priority
Difficulty
Date
Type
Favorite
```

Beispiele für Sortierung:

```txt
Title A-Z
Newest first
Oldest first
Status
Priority
Date
```

---

# 14. Dashboard

Eure Startseite soll ein Dashboard sein.

Das Dashboard soll berechnete Werte aus euren Daten anzeigen.

Pflicht:

- Gesamtanzahl der Einträge
- Anzahl nach Status oder Kategorie
- neueste Einträge
- mindestens zwei weitere sinnvolle Statistiken

Beispiele:

## Task Manager

```txt
Total Tasks
Open Tasks
Completed Tasks
High Priority Tasks
Upcoming Deadlines
Overdue Tasks
```

## Recipe Book

```txt
Total Recipes
Recipes by Difficulty
Average Cooking Time
Newest Recipes
Favorite Recipes
```

## Job Tracker

```txt
Total Applications
Open Applications
Interviews
Rejected
Applications this week
Applications by company
```

---

# 15. UX-Zustände

Eure App soll saubere Zustände anzeigen.

Pflicht:

- Loading State
- Error State
- Empty State
- Not Found State
- Formularfehler
- Bestätigung oder Feedback nach Aktionen
- Disabled State während Submit oder Loading

Feedback kann einfach sein.

Beispiele:

```txt
Item created successfully.
Item updated successfully.
Item deleted.
```

Optional könnt ihr Toast Notifications verwenden.

---

# 16. Codequalität

Achtet auf saubere Struktur.

Pflicht:

- Komponenten sinnvoll aufteilen
- keine riesigen Komponenten
- wiederverwendbare Form-Komponente oder wiederverwendbare Form-Logik
- Helper-Funktionen auslagern
- Typen oder Interfaces sinnvoll definieren, falls TypeScript verwendet wird
- sprechende Dateinamen
- keine ungenutzten Imports
- keine unnötigen `console.log()`
- konsistente Formatierung
- klare Teamstruktur im Code

---

# Empfohlene Projektstruktur

Ihr könnt diese Struktur an euer Thema anpassen:

```txt
src/
├── components/
│   ├── Layout/
│   │   ├── AppLayout.tsx
│   │   └── Navbar.tsx
│   ├── UI/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   └── Textarea.tsx
│   └── Items/
│       ├── ItemCard.tsx
│       ├── ItemList.tsx
│       ├── ItemForm.tsx
│       ├── ItemFilters.tsx
│       └── ItemDetails.tsx
├── context/
│   └── AppContext.tsx
├── hooks/
│   └── useItems.ts
├── routes/
│   └── ...
├── schemas/
│   └── itemSchema.ts
├── services/
│   └── itemService.ts
├── types/
│   └── item.ts
├── utils/
│   └── itemHelpers.ts
└── main.tsx
```

Die Namen sollen zu eurem Projekt passen.

Bei einer Rezept-App wäre `Items` zum Beispiel `Recipes`.

Bei einer Job-App wäre `Items` zum Beispiel `Applications`.

---

# Ablaufplan

Das Projekt läuft über **4 Tage**.

---

# Tag 1: Planung, Setup, Routing und Datenanzeige

## Ziel für Tag 1

Am Ende von Tag 1 soll eure Grund-App stehen.

Ihr solltet dann:

- ein Thema gewählt haben
- Aufgaben im Team verteilt haben
- ein Datenmodell definiert haben
- Routing eingerichtet haben
- Layout und Navigation gebaut haben
- Demo-Daten oder API-Daten anzeigen können
- Detailseiten öffnen können

---

## Aufgaben Tag 1

### 1. Projektidee festlegen

Entscheidet euch gemeinsam für ein Thema.

Beantwortet kurz:

```txt
Was bauen wir?
Wer würde diese App verwenden?
Welche Daten werden verwaltet?
Welche Statuswerte gibt es?
Welche Kategorien gibt es?
Welche Features sind realistisch in 4 Tagen?
```

---

### 2. Teamrollen festlegen

Legt fest, wer welche Bereiche übernimmt.

Beispiel:

```txt
Person 1: Routing, Layout, Navigation
Person 2: API, TanStack Query, Datenservice
Person 3: Forms, Zod, Create/Edit
Person 4: Dashboard, Filter, Context, UX
```

Bei 3 Personen verteilt ihr die Aufgaben entsprechend.

---

### 3. Datenmodell definieren

Definiert euer Hauptmodell.

Es muss mindestens enthalten:

```txt
id
title oder name
description
category oder type
status
createdAt
updatedAt
mindestens 4 weitere eigene Felder
```

---

### 4. GitHub Repository erstellen

Erstellt ein gemeinsames Repository.

Pflicht:

- Repository erstellt
- alle Teammitglieder haben Zugriff
- Branch-Strategie ist geklärt
- erste Issues oder Aufgaben sind angelegt
- erste Commits sind vorhanden

---

### 5. Projekt einrichten

Richtet euer Projekt ein mit:

```txt
React
Vite
TanStack Router
TanStack Query
TanStack Form
Zod
```

---

### 6. Routing einrichten

Erstellt mindestens diese Seiten:

```txt
/
/items
/items/$itemId
/items/new
/items/$itemId/edit
/about
```

Die Namen sollen zu eurem Projekt passen.

---

### 7. Layout bauen

Baut:

- Header oder Sidebar
- Navigation
- Main-Bereich
- aktive Navigation

---

### 8. Erste Daten anzeigen

Zeigt eure ersten Daten auf der Übersichtsseite an.

Baut:

- Card-Komponente oder Tabellenansicht
- Detail-Link
- Detailseite
- Not-Found-Zustand für ungültige IDs

---

# Ergebnis nach Tag 1

```txt
Thema ist gewählt.
Teamrollen sind geklärt.
Repository ist eingerichtet.
Datenmodell ist definiert.
Routing funktioniert.
Layout funktioniert.
Übersicht zeigt Daten.
Detailseite funktioniert.
Not-Found bei ungültiger ID funktioniert.
```

---

# Tag 2: TanStack Query, Dashboard, Suche und Filter

## Ziel für Tag 2

Am Ende von Tag 2 sollen eure Daten sauber über TanStack Query geladen werden. Außerdem soll die App interaktive Listen und ein Dashboard haben.

---

## Aufgaben Tag 2

### 1. Datenservice bauen

Erstellt eine Service-Datei.

Beispiel:

```txt
src/services/itemService.ts
```

Darin liegen Funktionen wie:

```ts
getItems();
getItemById(id);
createItem(data);
updateItem(id, data);
deleteItem(id);
```

---

### 2. TanStack Query verwenden

Verwendet `useQuery`, um eure Daten zu laden.

Pflicht:

- Loading State
- Error State
- Query Key
- Datenanzeige aus Query-Daten

---

### 3. Mutations vorbereiten

Bereitet die Mutations für Tag 3 vor.

Mindestens:

```txt
createItem
updateItem
deleteItem
```

---

### 4. Dashboard bauen

Auf `/` soll ein Dashboard entstehen.

Zeigt berechnete Werte aus euren Daten.

Pflicht:

- Gesamtanzahl
- Anzahl nach Status oder Kategorie
- neueste Einträge
- mindestens zwei weitere sinnvolle Statistiken

---

### 5. Suche einbauen

Auf der Übersichtsseite soll eine Suche vorhanden sein.

Beispiel:

```txt
Search by title...
```

---

### 6. Filter einbauen

Baut mindestens zwei Filter ein.

Beispiele:

```txt
Status
Category
Priority
Difficulty
Type
Favorite
```

---

### 7. Sortierung einbauen

Baut mindestens eine Sortierung ein.

Beispiele:

```txt
Newest first
Oldest first
Title A-Z
Priority
Date
```

---

# Ergebnis nach Tag 2

```txt
Daten werden mit TanStack Query geladen.
Loading State funktioniert.
Error State funktioniert.
Mutations sind vorbereitet.
Dashboard zeigt berechnete Daten.
Suche funktioniert.
Mindestens zwei Filter funktionieren.
Sortierung funktioniert.
```

---

# Tag 3: TanStack Form, Zod, Create, Edit, Delete

## Ziel für Tag 3

Am Ende von Tag 3 soll eure App vollständige CRUD-Funktionen haben.

CRUD bedeutet:

```txt
Create
Read
Update
Delete
```

---

## Aufgaben Tag 3

### 1. Zod-Schema bauen

Erstellt ein Zod-Schema für euer Hauptmodell oder euer Formularmodell.

Pflicht:

- String-Validierung
- Number- oder Date-Validierung
- Enum-Validierung
- sinnvolle Fehlermeldungen

---

### 2. Create-Formular bauen

Auf der Create-Seite soll ein Formular mit TanStack Form entstehen.

Pflicht:

- mindestens 6 Formularfelder
- Validierung mit Zod
- Fehlermeldungen
- Submit-Logik
- Create-Mutation
- Weiterleitung nach erfolgreichem Speichern
- Disabled State während des Speicherns

---

### 3. Edit-Formular bauen

Auf der Edit-Seite soll ein bestehender Eintrag bearbeitet werden können.

Pflicht:

- Daten anhand der ID laden
- Formular mit vorhandenen Daten vorausfüllen
- Validierung mit Zod
- Update-Mutation
- Weiterleitung nach erfolgreichem Speichern
- Disabled State während des Speicherns

---

### 4. Wiederverwendbare Form-Komponente

Vermeidet doppelte Formularlogik.

Baut möglichst eine gemeinsame Form-Komponente.

Beispiel:

```txt
ItemForm
```

Diese Komponente wird verwendet für:

```txt
Create
Edit
```

---

### 5. Delete-Funktion bauen

Einträge sollen gelöscht werden können.

Pflicht:

- Delete Button
- Sicherheitsabfrage
- Delete-Mutation
- Query invalidieren oder Liste aktualisieren
- Weiterleitung, falls nötig

---

### 6. Feedback nach Aktionen

Zeigt Nutzern Feedback.

Beispiele:

```txt
Created successfully.
Updated successfully.
Deleted successfully.
```

---

# Ergebnis nach Tag 3

```txt
Zod-Schema ist vorhanden.
Neue Einträge können erstellt werden.
Bestehende Einträge können bearbeitet werden.
Einträge können gelöscht werden.
TanStack Form wird verwendet.
Validierung funktioniert.
Mutations funktionieren.
Queries werden nach Änderungen aktualisiert.
```

---

# Tag 4: Context, UX, Refactoring und Präsentation

## Ziel für Tag 4

Am Ende von Tag 4 soll eure App sauber, stabil und präsentierbar sein.

---

## Aufgaben Tag 4

### 1. Context sinnvoll verwenden

Baut einen sinnvollen Context ein.

Mögliche Ideen:

```txt
Theme Context
Favorites Context
User Settings Context
Auth Simulation Context
Filter Preferences Context
```

Wichtig:

Der Context soll einen echten Zweck erfüllen.

---

### 2. UX-Zustände verbessern

Prüft eure App auf:

- Loading States
- Error States
- Empty States
- Not Found States
- Formularfehler
- Erfolgsfeedback
- sinnvolle Button-Zustände
- lesbare Fehlermeldungen

---

### 3. Responsive Design verbessern

Eure App soll auf kleineren Bildschirmen grundsätzlich verwendbar sein.

Pflicht:

- Navigation bricht nicht komplett
- Cards oder Tabellen bleiben lesbar
- Formulare bleiben bedienbar
- Abstände sind sinnvoll

---

### 4. Refactoring

Räumt euren Code auf.

Prüft:

- Sind Komponenten zu groß?
- Gibt es doppelte Logik?
- Sind Props verständlich?
- Sind Helper-Funktionen ausgelagert?
- Sind Dateinamen konsistent?
- Gibt es ungenutzte Imports?
- Gibt es unnötige `console.log()`?
- Ist die Ordnerstruktur verständlich?
- Sind alle Team-Bereiche sauber integriert?

---

### 5. README schreiben

Euer Projekt braucht eine `README.md`.

Sie soll mindestens enthalten:

```txt
Projektname
Teammitglieder
kurze Beschreibung
verwendete Technologien
Features
Installationsanleitung
Startbefehl
kurze Projektstruktur
Aufgabenverteilung im Team
```

Beispiel:

```txt
npm install
npm run dev
```

---

### 6. Präsentation vorbereiten

Bereitet eine kurze Gruppenpräsentation vor.

Dauer:

```txt
8–10 Minuten pro Gruppe
```

Jede Person soll einen Teil erklären.

Erklärt:

- Was ist eure App?
- Warum habt ihr dieses Thema gewählt?
- Welche Features gibt es?
- Wie verwendet ihr TanStack Router?
- Wie verwendet ihr TanStack Query?
- Wie verwendet ihr TanStack Form?
- Wie verwendet ihr Zod?
- Wofür verwendet ihr Context?
- Wie habt ihr im Team gearbeitet?
- Was war technisch schwierig?
- Was würdet ihr als Nächstes verbessern?

---

# Ergebnis nach Tag 4

```txt
Context ist sinnvoll eingebaut.
UX-Zustände sind sauber.
Design ist grundsätzlich responsive.
Code ist aufgeräumt.
README ist vorhanden.
Teambeiträge sind sichtbar.
App kann als Gruppe präsentiert werden.
```

---

# Bonus-Aufgaben

Wenn ihr schneller fertig seid, könnt ihr zusätzliche Features bauen.

## 1. Favoriten

Nutzer können Einträge als Favorit markieren.

---

## 2. Theme Toggle

Nutzer können zwischen Light Mode und Dark Mode wechseln.

---

## 3. URL-basierte Filter

Filter werden in der URL gespeichert.

Beispiel:

```txt
/items?status=open&category=frontend
```

Das passt sehr gut zu TanStack Router Search Params.

---

## 4. Pagination

Wenn viele Einträge vorhanden sind, können sie auf mehrere Seiten verteilt werden.

---

## 5. Detail-Kommentare oder Notizen

Ein Eintrag kann eigene Notizen oder Kommentare haben.

---

## 6. JSON Export

Daten können als JSON exportiert werden.

---

## 7. Optimistic Updates

Bei Mutations könnt ihr optimistische Updates verwenden.

---

## 8. Bessere Team-Dokumentation

Dokumentiert im README genauer:

- wer was gebaut hat
- welche Probleme aufgetreten sind
- wie ihr sie gelöst habt
- welche Entscheidungen ihr getroffen habt

---

# Mindestabgabe

Wenn ihr nicht alles schafft, konzentriert euch auf diese Punkte:

```txt
Projekt hat ein eigenes Thema.
Repository ist eingerichtet.
Jede Person hat sichtbare Commits.
Routing funktioniert.
Übersichtsseite funktioniert.
Detailseite funktioniert.
TanStack Query wird verwendet.
Create-Formular funktioniert.
Edit-Formular funktioniert.
Zod-Validierung funktioniert.
Delete funktioniert.
Mindestens ein Filter funktioniert.
README ist vorhanden.
```

---

# Starke Abgabe

Eine starke Abgabe enthält zusätzlich:

```txt
saubere Teamarbeit
klare Aufgabenverteilung
saubere Komponentenstruktur
wiederverwendbare Form-Komponente
gute Zod-Validierung
sinnvolle Error/Loading/Empty States
Context mit echtem Nutzen
Dashboard mit berechneten Daten
mehrere Filter
Sortierung
responsive UI
gute README
saubere Gruppenpräsentation
```

---

# Bewertung

Das Projekt wird mit insgesamt **100 Punkten** bewertet.

| Bereich                                 |  Punkte |
| --------------------------------------- | ------: |
| Projektidee, Scope und Datenmodell      |       7 |
| Teamorganisation und Git-Workflow       |       8 |
| Routing mit TanStack Router             |       9 |
| Layout und Navigation                   |       6 |
| Datenanzeige, Übersicht und Detailseite |       9 |
| TanStack Query                          |      11 |
| TanStack Form und Zod-Validierung       |      13 |
| Create/Edit/Delete                      |      13 |
| Suche, Filter und Sortierung            |       7 |
| Dashboard                               |       5 |
| Context API                             |       4 |
| UX-Zustände und Responsive Design       |       4 |
| Codequalität und Refactoring            |       2 |
| README und Gruppenpräsentation          |       2 |
| **Gesamt**                              | **100** |

---

# Abgabe

Gebt euer Projekt als GitHub Repository ab.

Achtet darauf, dass euer Projekt gestartet werden kann.

Die README muss erklären, wie das Projekt installiert und gestartet wird.

Beispiel:

```txt
npm install
npm run dev
```

Vor der Abgabe prüfen:

```txt
Projekt startet ohne Fehler.
Navigation funktioniert.
Keine wichtigen Konsolenfehler.
README ist vorhanden.
Alle Pflichtfunktionen sind sichtbar.
Jede Person hat zum Projekt beigetragen.
```
