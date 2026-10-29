# Preisgrenzen – Die LoopLab-Mission

Interaktiver, mobilfähiger FOS-Lernkurs für **kurzfristige und langfristige Preisuntergrenzen**. Das Repository enthält eine vollständige statische Lernoberfläche und eine Serverfunktion mit **Netlify Functions + Netlify Blobs**. **Supabase, SQL-Editor, E-Mail-Login und eine allgemeine `AUTH`-Umgebungsvariable werden nicht benötigt.**

## 1. Was ist enthalten?

- 10 thematische Lernkapitel und ein Abschlusstest, **112 Aufgaben**, davon **20 Bonus-Aufgaben**; 92 reguläre Aufgaben (23 × AFB I, 46 × AFB II, 23 × AFB III).
- Weitere Inhalte: Rechenbeispiele, Definitionen, Glossar, zehnstufige Kompetenz-Checkliste, aufgabenspezifische Rechenwege und Musterlösungen.
- Aufgabentypen: Zahlenantwort, Single- und Multiple-Choice, Richtig/Falsch, Zuordnen, Drag-and-Drop (mit mobilem Auswahl-Fallback), Reihenfolge und Freitext-Selbstkontrolle.
- Kostenlabor mit Reglern für Stück- und Gesamtkosten, Preisampel, Fixkostendegression, Gemeinkosten-Kostenspaltung und Zuschlagskalkulation.
- XP, Level, Münzen, Auszeichnungen, Shop mit freischaltbaren Avataren, Haustieren und Outfits und eine Galerie.
- **Gastmodus**: ohne Konto, Fortschritt nur auf diesem Browser gespeichert.
- **Mit Anmeldung**: nickname-/passwortbasiertes Benutzerkonto innerhalb einer Klasse; geräteübergreifender Fortschritt in Blobs.
- Lehrkraft: klassenbezogene Übersicht, Einsicht in die Schülerantworten, Passwort zurücksetzen, Lernstand eines Schülers oder einer ganzen Klasse löschen, Schülerkonto entfernen.
- Lernjournal als zusammenhängende **PDF-Druckansicht** mit Aufgaben, eigenen Antworten, Status und Musterlösungen (im Browser **„Als PDF speichern“** wählen).
- Sechs komprimierte Bilddateien aus den mitgelieferten Materialien, auch die ursprünglichen Kostenbilder und die Preisgrenzen-Abbildungen.

## 2. Deployment mit GitHub und Netlify

**Wichtig:** Die ZIP-Datei muss **entpackt** werden. Legen Sie die darin enthaltenen Dateien und Ordner im **Stammverzeichnis des GitHub-Repositories** ab. Das Hochladen der ZIP-Datei als *eine einzelne Datei* ins Repository genügt nicht.

1. Erstellen Sie auf GitHub ein neues Repository, z. B. `fos-preisgrenzen`.
2. Entpacken Sie dieses Paket und übernehmen Sie `public/`, `netlify/`, `netlify.toml`, `package.json` und `.nvmrc` samt weiteren Dateien ins Repository (beispielsweise über GitHub Desktop).
3. Öffnen Sie Netlify und wählen Sie **Add new project → Import an existing project**. Verbinden Sie GitHub und wählen Sie das Repository.
4. Die Einstellungen aus `netlify.toml` werden übernommen: **Publish directory `public`**, **Functions directory `netlify/functions`**. **Ein Build-Befehl ist nicht erforderlich**; die Funktionsabhängigkeit wird anhand der `package.json` installiert.
5. Stellen Sie **Node.js 22** sicher (`.nvmrc` ist enthalten; falls Netlify Ihre Node-Version anders setzt: `NODE_VERSION=22`).
6. Legen Sie in den **Environment variables** des Netlify-Projekts eine Variable mit dem exakten Namen `TEACHER_INVITE_CODE` an. Als Wert vergeben Sie einen **langen, zufälligen, geheimen Code** mit mindestens 10 Zeichen (empfohlen: 20 oder mehr). Der Code gehört **nicht in `netlify.toml`, GitHub oder den öffentlichen Quelltext**.
7. Starten Sie das erste Deployment bzw. lösen Sie nach Änderung einer Umgebungsvariable ein **neues Deployment** aus.
8. Öffnen Sie die veröffentlichte URL und prüfen Sie `https://IHR-PROJEKT.netlify.app/api/health`. Die erwartete Antwort enthält `"ready":true` und `"storage":"Netlify Blobs"`.
9. Wählen Sie im Lernkurs **Anmelden → Konto erstellen → Rolle „Lehrkraft“**, tragen Sie Ihren frei gewählten **Nicknamen**, Ihre **Klasse**, ein **Passwort** und den **Lehrercode** ein. Dadurch wird das erste Lehrerkonto erzeugt. Es gibt **kein vordefiniertes Admin-Passwort**.
10. Die Schülerinnen und Schüler wählen **Rolle „Schüler/in“**, geben **dieselbe Klassenbezeichnung** ein und erstellen ihren Nicknamen und ihr Passwort selbst.

Eine Lehrkraft sieht nur Konten, deren Klassenbezeichnung ihrer eigenen Klasse entspricht. Groß-/Kleinschreibung und zusätzliche Leerzeichen werden bei der Klasse normalisiert. Wenn Sie mehrere Klassen unterrichten, legen Sie pro Klasse ein Lehrerkonto an (der Code kann dafür verwendet werden; bewahren Sie ihn sicher auf).

### Bei der Anmeldung

Nickname, Klassenbezeichnung und Passwort müssen bei jeder Anmeldung angegeben werden. Keine E-Mail-Adresse erforderlich. Das Passwort wird auf dem Server mit individuellem Salt und `scrypt` gehasht; Klartextpasswörter werden nicht gespeichert. Die Sitzung wird über ein zufälliges, `HttpOnly`-Cookie geführt. Sitzungen werden nach Passwortzurücksetzung ungültig.

### Gastfortschritt später übernehmen

Nach der Anmeldung können Sie unter **Konto → Gastfortschritt in dieses Konto übernehmen** bereits lokal bearbeitete Antworten importieren. Die objektiv bewertbaren Antworten werden dabei erneut auf dem Server geprüft. Freitextantworten behalten ihren Selbstkontroll-Status.

## 3. Lokale Entwicklung und Tests

Voraussetzung für die volle Netlify-Umgebung: **Node.js 22**.

```bash
npm install
npx netlify dev
```

Im Projektverzeichnis führt `npx netlify dev` die statische Seite und die Serverfunktionen zusammen aus. Für einen reinen UI-Test ohne Anmeldung kann alternativ `public/` über einen beliebigen lokalen HTTP-Server ausgeliefert werden, allerdings sind dann `/api/*` und die Blobs-Speicherung nicht verfügbar.

Tests:

```bash
npm test
```

Die Tests prüfen u. a. sämtliche Musterantworten der objektiv bewertbaren Fragen, die AFB-Verteilung, Rechenformate, alle Oberflächenvarianten und den Authentifizierungs-/Klassenprozess mit einer **simulierten** Blobs-Speicherung. **Ein echter End-to-End-Test auf einem Netlify-Produktivprojekt wurde hier nicht durchgeführt.**

## 4. Ordnerstruktur

```text
public/
  index.html          Haupteinstieg
  style.css           Responsive Design
  app.js              Lernoberfläche, Diagramme, Shop, Druckansicht
  course-data.js      Inhalte, Fragen und Musterlösungen
  logic.js            Einheitliche Antwortenprüfung, XP-Berechnung
  assets/             Mitgelieferte Grafiken (komprimiert)
netlify/functions/
  api.mjs             Authentifizierung, Blobs, Lehrbereich, XP-Validierung
netlify.toml          Netlify-Konfiguration
package.json          Abhängigkeit @netlify/blobs
.nvmrc                Node-Version 22
tests/                 Automatisierte Logik- und API-Tests
build_content.py      Generator der Kursinhalte (optional)
```

### Kursinhalte bearbeiten

Die Kapitel, Übungsaufgaben, Antwortmöglichkeiten, Musterlösungen, AFB und Shop-Gegenstände sind in `public/course-data.js` lesbar abgelegt. Die Ursprungsversion wurde mit `build_content.py` erzeugt. Wenn Sie Aufgaben ändern, passen Sie besonders `answer`, `solution`, `type`, `module` und `afb` sorgfältig an und lassen Sie `npm test` laufen. Tests gegen `course-data.js` nutzen diese Datei unmittelbar; der Server prüft dieselbe Datei.

## 5. Sicherheit, Datenschutz und technische Grenzen

- **Datenschutz vor Veröffentlichung klären:** Bei schulischem Einsatz sind insbesondere DSGVO, Zuständigkeit der Schule, Informationen zur Datenspeicherung, Auftragsverarbeitung, Löschfristen und die Nutzung von Netlify als externer Dienst zu prüfen. Nickname und Klasse können personenbezogene Daten sein. Ein fachliches und rechtliches Impressum bzw. Datenschutzhinweise der verantwortlichen Einrichtung sind vor einer öffentlichen Bereitstellung zu ergänzen.
- **Lehrercode geheim halten.** Wer diesen Code kennt, kann weitere Lehrerkonten für selbst angegebene Klassen erstellen. Erteilen Sie ihn ausschließlich autorisierten Lehrkräften und rotieren Sie ihn bei Verdacht auf Weitergabe. Die eingebundene Rate-Limitierung ist nur ein Basisschutz.
- **Netlify Blobs statt relationaler Datenbank:** Die Daten werden pro Klassen-/Nickname-Kombination in einer Site-weiten Blobs-Sammlung gespeichert. Das Projekt nutzt atomare bedingte Einzel-Schreiboperationen, jedoch **keine Transaktionen über mehrere Datensätze**. Für große Nutzerzahlen und strengere Anforderungen an Audit, Rollen oder Datensicherheit ist eine echte Datenbank die bessere Wahl.
- **Deploy-Kontexte:** Site-weite Netlify Blobs werden grundsätzlich zwischen Deploys geteilt. Nutzen Sie Vorschau-Deploys nicht für ungetesteten schreibenden Code gegen echte Schülerdaten.
- **Backups:** Organisieren Sie regelmäßig eine Backuplösung für Ihre Netlify-Blobs-Daten, bevor Lehrkräfte Sammellöschungen durchführen. Das Lehrerdashboard bietet bewusst keine Wiederherstellung gelöschter Daten.
- **Bewertung:** Bei Freitext wird die Richtigkeit **von der lernenden Person selbst** eingeschätzt. Das Lehrerdashboard unterscheidet diesen Status von automatisch geprüften Antworten. XP ist eine pädagogische Motivationsmechanik, keine sichere Leistungsbescheinigung.
- **PDF:** Die Ausgabe nutzt den **Druckdialog des Browsers** („Als PDF speichern“). Damit wird kein externer PDF-Dienst benötigt; Safari, Android und Windows haben unterschiedliche Druckmenüs.
- **Grenzmodell:** Im Unterrichtskurs werden proportional variable Kosten und in einem bestimmten Bereich unveränderte Fixkosten angenommen. Außerhalb dieses Modells können andere Verläufe, Zusatzfixkosten und Opportunitätskosten relevant werden.
- **Dritte Grafiken:** Nutzen und Lizenzierung der von Ihnen bereitgestellten Abbildungen sind vor einer Veröffentlichung von Ihnen zu prüfen.

## 6. Fachliche Grundlage

Didaktische Basis: die beigefügte FOS-Präsentation und die hochgeladene Aufgabensammlung zu kurz- und langfristiger Preisuntergrenze. Der fiktive Industriebetrieb **LoopLab GmbH, Leipzig** führt als selbst erstellter Fall durch den Kurs. Die Zahlen sind bewusst von den Original-Abschlussprüfungen verschieden, die fachlichen Aufgabentypen daran orientiert.

---

**KI-Nachweis:** Die gewünschte KI-Kennzeichnung steht im aufklappbaren Fußbereich der Lernseite und sollte durch die bereitstellende Lehrkraft vor der Veröffentlichung geprüft bzw. redaktionell angepasst werden.
