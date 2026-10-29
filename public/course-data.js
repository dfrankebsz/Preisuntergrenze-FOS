export const course = {
  "modules": [
    {
      "id": "kosten",
      "title": "Kostenträger & Zurechenbarkeit",
      "emoji": "📦",
      "lead": "Was gehört zu einem Smartphone-Halter?",
      "body": "Die fiktive **LoopLab GmbH** aus Leipzig fertigt modulare Smartphone- und Laptop-Halter aus Holz und Aluminium. **Einzelkosten** lassen sich einem Kostenträger direkt zuordnen. **Gemeinkosten** lassen sich nicht direkt einem einzelnen Produkt zuordnen und werden häufig über Schlüssel verteilt.",
      "bullets": [
        "**Einzelkosten:** direkt einem Produkt oder Auftrag zurechenbar.",
        "**Gemeinkosten:** nur indirekt zurechenbar, z. B. Hallenmiete.",
        "**Kostenträger:** Produkt bzw. Auftrag, dessen Kosten ermittelt werden."
      ],
      "example": "Beispiel: Aluminium je FlexDock 10 € = Einzelkosten. Die Hallenmiete von 2.000 € pro Monat = Gemeinkosten.",
      "image": "kostenmatrix",
      "glossary": [
        "Einzelkosten",
        "Gemeinkosten",
        "Kostenträger"
      ]
    },
    {
      "id": "verhalten",
      "title": "Fixe und variable Kosten",
      "emoji": "🏭",
      "lead": "Welche Kosten bewegen sich mit der Produktion?",
      "body": "**Variable Kosten** ändern sich mit der Beschäftigung. **Fixe Kosten** bleiben in einem festgelegten Beschäftigungsbereich konstant. Im Kurs nehmen wir – außer wenn ausdrücklich anders angegeben – **proportionale variable Kosten** an; die variablen Stückkosten bleiben dann gleich.",
      "bullets": [
        "**Variable Einzelkosten:** z. B. Aluminium und Akkordlohn.",
        "**Variable Gemeinkosten:** z. B. verbrauchsabhängiger Maschinenstrom.",
        "**Fixe Einzelkosten:** z. B. feste produktbezogene Lizenz.",
        "**Fixe Gemeinkosten:** z. B. Hallenmiete, Verwaltung."
      ],
      "example": "Beispiel: 400 Stück · 22 €/Stück (variable Kosten) = 8.800 € variable Gesamtkosten; 6.400 € monatliche Fixkosten bleiben gleich.",
      "image": "kostenmatrix",
      "glossary": [
        "Fixkosten",
        "Variable Kosten",
        "Variable Einzelkosten",
        "Variable Gemeinkosten",
        "Fixe Einzelkosten",
        "Fixe Gemeinkosten"
      ]
    },
    {
      "id": "erfolg",
      "title": "Umsatz, Kosten & Betriebsergebnis",
      "emoji": "💶",
      "lead": "Wie entsteht das Betriebsergebnis?",
      "body": "Der **Umsatz** entsteht aus Verkaufspreis und Absatzmenge. Die **Gesamtkosten** sind die Summe aus variablen und fixen Gesamtkosten. Das **Betriebsergebnis** ergibt sich aus Umsatzerlösen abzüglich Gesamtkosten.",
      "bullets": [
        "**Umsatz = Verkaufspreis · Absatzmenge**",
        "**Gesamtkosten = variable Stückkosten · Menge + Fixkosten**",
        "**Betriebsergebnis = Umsatz − Gesamtkosten**"
      ],
      "example": "LoopLab: 400 FlexDock · 46 € = 18.400 € Umsatz. Kosten: 400 · 22 € + 6.400 € = 15.200 €. Betriebsergebnis = 3.200 € Gewinn.",
      "image": "kostenbaum",
      "glossary": [
        "Umsatz",
        "Gesamtkosten",
        "Betriebsergebnis",
        "Stückkosten"
      ]
    },
    {
      "id": "kurz",
      "title": "Kurzfristige Preisuntergrenze & Deckungsbeitrag",
      "emoji": "🎯",
      "lead": "Wo endet ein tragfähiger Verkaufspreis?",
      "body": "Die **kurzfristige Preisuntergrenze** entspricht den **variablen Stückkosten**. Der **Stückdeckungsbeitrag** ist die Differenz zwischen Verkaufspreis und variablen Stückkosten. Ein positiver Deckungsbeitrag trägt zur Fixkostendeckung bei; bei genau null ändert sich das Betriebsergebnis unter den Modellannahmen nicht.",
      "bullets": [
        "**db = p − kv**",
        "**kurzfristige PUG = kv**",
        "**p > kv:** positiver Deckungsbeitrag",
        "**p = kv:** Deckungsbeitrag 0",
        "**p < kv:** negativer Deckungsbeitrag"
      ],
      "example": "FlexDock: 46 € Verkaufspreis − 22 € variable Stückkosten = 24 € Stückdeckungsbeitrag. Bei 22 € ist die kurzfristige Preisuntergrenze erreicht.",
      "image": "balken-hell",
      "glossary": [
        "Kurzfristige Preisuntergrenze",
        "Stückdeckungsbeitrag",
        "Gesamtdeckungsbeitrag"
      ]
    },
    {
      "id": "lang",
      "title": "Langfristige Preisuntergrenze & Auslastung",
      "emoji": "📉",
      "lead": "Warum verändert die Menge den Mindestpreis?",
      "body": "Die **langfristige Preisuntergrenze** liegt bei den **gesamten Stückkosten/Selbstkosten**. Fixkosten verteilen sich auf die Anzahl der hergestellten und verkauften Stücke. Bei konstanten variablen Stückkosten sinken die fixen Stückkosten, wenn die Menge steigt (**Fixkostendegression**).",
      "bullets": [
        "**Fixe Stückkosten = Fixkosten ÷ Menge**",
        "**Selbstkosten je Stück = variable Stückkosten + fixe Stückkosten**",
        "**Langfristige PUG = Selbstkosten je Stück**",
        "Bei geringerem Beschäftigungsgrad steigt die langfristige PUG (im Modell)."
      ],
      "example": "FlexDock: 6.400 € Fixkosten ÷ 400 Stück = 16 €/Stück. Langfristige PUG = 22 € + 16 € = **38 €/Stück**.",
      "image": "auslastung",
      "glossary": [
        "Langfristige Preisuntergrenze",
        "Fixkostendegression",
        "Beschäftigungsgrad",
        "Selbstkosten"
      ]
    },
    {
      "id": "spaltung",
      "title": "Gemeinkosten in fix und variabel aufteilen",
      "emoji": "🧩",
      "lead": "Welche Gemeinkosten zählen zur kurzfristigen Grenze?",
      "body": "Für die kurzfristige Preisuntergrenze zählen **variable Einzelkosten** und **variable Gemeinkosten**. Häufig nimmt die Prüfung vereinfachend an, dass sämtliche Einzelkosten variabel sind. Ist nur ein fixer Anteil der Gemeinkosten angegeben, muss zuerst der variable Anteil berechnet werden.",
      "bullets": [
        "**Variable GK = gesamte GK · variabler Anteil**",
        "**Variabler Anteil = 100 % − fixer Anteil**",
        "**Kurzfristige PUG = (variable Einzelkosten + variable GK) ÷ Menge**",
        "**Langfristige PUG = (alle Einzelkosten + alle GK) ÷ Menge**"
      ],
      "example": "Beispiel: 12.000 € Einzelkosten, 8.000 € Gemeinkosten, davon 75 % fix, 500 Stück. Variable GK = 2.000 €; kurzfristige PUG = 28 €; langfristige PUG = 40 €.",
      "image": "kostenmatrix",
      "glossary": [
        "Kostenspaltung",
        "Fixkostenanteil",
        "Variable Gemeinkosten"
      ]
    },
    {
      "id": "zuschlag",
      "title": "Zuschlagskalkulation & Preisuntergrenzen",
      "emoji": "🧮",
      "lead": "Vom Fertigungsmaterial zu den Selbstkosten",
      "body": "Bei der **Zuschlagskalkulation** werden Gemeinkosten über Zuschlagssätze verteilt: Materialgemeinkosten auf Fertigungsmaterial, Fertigungsgemeinkosten auf Fertigungslöhne sowie Verwaltungs- und Vertriebsgemeinkosten meist auf die Herstellkosten. Anschließend lässt sich die langfristige PUG als Selbstkosten ermitteln.",
      "bullets": [
        "**MGK = Fertigungsmaterial · MGK-Zuschlag**",
        "**FGK = Fertigungslöhne · FGK-Zuschlag**",
        "**Herstellkosten = Materialkosten + Fertigungskosten**",
        "**VwGK/VtGK = Herstellkosten · Zuschlag**",
        "**Selbstkosten = Herstellkosten + VwGK + VtGK**"
      ],
      "example": "Beispiel: FM 60 €, FL 30 €, MGK 20 %, FGK 50 %, VwGK 10 %, VtGK 5 % → HK 117 €, VwGK 11,70 €, VtGK 5,85 €, Selbstkosten **134,55 €**.",
      "image": "kostenbaum",
      "glossary": [
        "Zuschlagskalkulation",
        "Materialgemeinkostenzuschlag",
        "Fertigungsgemeinkostenzuschlag",
        "Herstellkosten"
      ]
    },
    {
      "id": "preis",
      "title": "Drei Preiszonen & Entscheidungen",
      "emoji": "🚦",
      "lead": "Preis unter, zwischen oder über den Grenzen?",
      "body": "Die **Preisampel** vergleicht den Nettoverkaufspreis mit kurzfristiger und langfristiger Preisuntergrenze. Unterhalb der kurzfristigen PUG ist der Stückdeckungsbeitrag negativ. Zwischen beiden Grenzen besteht zwar ein positiver Deckungsbeitrag, aber keine volle Kostendeckung. Oberhalb der langfristigen PUG entsteht – bei der betrachteten Menge und Kostenstruktur – Stückgewinn.",
      "bullets": [
        "**p < kurzfristige PUG:** negativ",
        "**p = kurzfristige PUG:** db = 0",
        "**kurzfristige PUG < p < langfristige PUG:** positive Fixkostendeckung, Stückverlust",
        "**p = langfristige PUG:** Stückergebnis = 0",
        "**p > langfristige PUG:** Stückgewinn"
      ],
      "example": "Für FlexDock gelten kurzfristige PUG 22 € und langfristige PUG 38 €. Ein Angebot von 31 € erzielt db = 9 €, aber Stückverlust = 7 €.",
      "image": "balken",
      "glossary": [
        "Preisampel",
        "Stückergebnis",
        "Stückverlust"
      ]
    },
    {
      "id": "zusatz",
      "title": "Zusatzauftrag bei freien Kapazitäten",
      "emoji": "🛒",
      "lead": "Wann ist ein Preis unter Selbstkosten sinnvoll?",
      "body": "Ein **Zusatzauftrag** nutzt freie Kapazitäten. Entscheidend ist dessen **zusätzlicher Deckungsbeitrag**, wenn keine neuen Fixkosten entstehen und kein besserer Auftrag verdrängt wird. Diese Entscheidung ist eine Anwendung der kurzfristigen PUG, ersetzt jedoch keine langfristig kostendeckende Preispolitik.",
      "bullets": [
        "**Zusätzlicher DB = Auftragsmenge · (Angebotspreis − variable Stückkosten)**",
        "**Ergebnis mit Auftrag = bisheriges Ergebnis + zusätzlicher DB**",
        "Zusätzliche fixe Kosten müssen gegebenenfalls zusätzlich abgezogen werden."
      ],
      "example": "LoopLab erhält für 100 FlexDock 29 € statt regulär 46 €. Bei kv = 22 € ergibt sich ein zusätzlicher DB von 700 €, falls keine weiteren Kosten entstehen.",
      "image": "comic",
      "glossary": [
        "Zusatzauftrag",
        "Freie Kapazität",
        "Opportunitätskosten"
      ]
    },
    {
      "id": "elimination",
      "title": "Produktelimination & Fixkostendeckung",
      "emoji": "🌱",
      "lead": "Warum bleibt ein Verlustprodukt manchmal im Programm?",
      "body": "Bei der **Produktelimination** stellt sich die Frage, ob die Aufgabe eines Produkts das gesamte Betriebsergebnis verbessert. Ein Produkt kann laut Vollkostenrechnung **Stückverlust** ausweisen und trotzdem einen **positiven Deckungsbeitrag** erzielen. Bleiben die zugeordneten Fixkosten bei der Elimination bestehen, verschlechtert der Wegfall dieses Deckungsbeitrags das Ergebnis.",
      "bullets": [
        "**db = Preis − variable Stückkosten**",
        "**Gesamt-DB = db · Absatzmenge**",
        "**Betriebsergebnis = Gesamt-DB − verbleibende Fixkosten**",
        "Vor der Elimination prüfen: Welche Fixkosten entfallen tatsächlich?"
      ],
      "example": "Ein LoopLab-Zubehörteil hat p = 24 €, kv = 16 €, 1.000 Verkäufe und 9.000 € Fixkosten. Mit Produkt: −1.000 €. Ohne Produkt, wenn die Fixkosten bleiben: −9.000 €. Behalten verbessert um 8.000 €.",
      "image": "kostenmatrix",
      "glossary": [
        "Produktelimination",
        "Vollkostenrechnung",
        "Teilkostenrechnung"
      ]
    },
    {
      "id": "test",
      "title": "Abschlusstest – Preisuntergrenzen",
      "emoji": "🏆",
      "lead": "Testen Sie die wichtigsten Kompetenzen.",
      "body": "Der Abschlusstest greift die wesentlichen Kompetenzen auf. Antworten werden nach denselben Regeln wie in den Übungen geprüft; bei Begründungsaufgaben vergleichen Sie Ihre Formulierung selbst mit dem Lösungsbeispiel.",
      "bullets": [
        "Kosten einteilen und berechnen",
        "Preisuntergrenzen bestimmen",
        "Deckungsbeiträge interpretieren",
        "Kosten- und Preissituationen begründet beurteilen"
      ],
      "example": "Am Ende können Sie Ihre bearbeiteten Aufgaben und Antworten als PDF ausgeben.",
      "image": "balken-hell",
      "glossary": []
    }
  ],
  "questions": [
    {
      "id": "kosten-01",
      "module": "kosten",
      "type": "single",
      "afb": 1,
      "prompt": "Welche Kosten sind im Regelfall direkt einem FlexDock zurechenbar?",
      "answer": "Aluminium für ein FlexDock",
      "solution": "Aluminium für ein FlexDock ist mengenmäßig erfassbar und direkt zurechenbar.",
      "hint": "",
      "bonus": false,
      "options": [
        "Hallenmiete",
        "Aluminium für ein FlexDock",
        "Verwaltungsgehalt"
      ],
      "tolerance": 0.011
    },
    {
      "id": "kosten-02",
      "module": "kosten",
      "type": "truefalse",
      "afb": 1,
      "prompt": "Gemeinkosten lassen sich einem bestimmten Produkt ohne Verteilungsschlüssel direkt zurechnen.",
      "answer": false,
      "solution": "Falsch. Gemeinkosten werden mehreren Produkten gemeinsam verursacht; eine direkte Einzelzurechnung ist regelmäßig nicht möglich.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "kosten-03",
      "module": "kosten",
      "type": "match",
      "afb": 2,
      "prompt": "Ordnen Sie die Kosten der passenden Kostenart zu.",
      "answer": {
        "Aluminium für FlexDock": "Einzelkosten",
        "Hallenmiete": "Gemeinkosten",
        "Akkordlohn für FlexDock": "Einzelkosten",
        "Verwaltungsgehalt": "Gemeinkosten"
      },
      "solution": "Aluminium und Akkordlohn sind direkt zurechenbar; Hallenmiete und Verwaltung betreffen mehrere Produkte.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011,
      "pairs": {
        "Aluminium für FlexDock": "Einzelkosten",
        "Hallenmiete": "Gemeinkosten",
        "Akkordlohn für FlexDock": "Einzelkosten",
        "Verwaltungsgehalt": "Gemeinkosten"
      }
    },
    {
      "id": "kosten-04",
      "module": "kosten",
      "type": "number",
      "afb": 2,
      "prompt": "Ein Produkt verursacht 12 € Material- und 8 € Fertigungseinzelkosten. Ermitteln Sie die Einzelkosten je Stück.",
      "answer": 20,
      "solution": "Einzelstückkosten = 12 € (Materialeinzelkosten) + 8 € (Fertigungseinzelkosten) = **20 €/Stück**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "kosten-05",
      "module": "kosten",
      "type": "drag",
      "afb": 2,
      "prompt": "Ziehen oder tippen Sie die Kosten in die richtige Kategorie.",
      "answer": {
        "Auftragsspezifisches Bauteil": "Einzelkosten",
        "Büromiete": "Gemeinkosten",
        "Akkordlohn": "Einzelkosten",
        "Gemeinsamer Maschinenstrom": "Gemeinkosten"
      },
      "solution": "Direkt zurechenbare Kosten → Einzelkosten; sonst → Gemeinkosten.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011,
      "items": [
        "Auftragsspezifisches Bauteil",
        "Büromiete",
        "Akkordlohn",
        "Gemeinsamer Maschinenstrom"
      ],
      "groups": [
        "Einzelkosten",
        "Gemeinkosten"
      ]
    },
    {
      "id": "kosten-06",
      "module": "kosten",
      "type": "multi",
      "afb": 2,
      "prompt": "Welche Aussagen sind korrekt?",
      "answer": [
        "Einzelkosten können fix sein.",
        "Gemeinkosten können variabel sein."
      ],
      "solution": "Die Zurechenbarkeit und das Kostenverhalten sind zwei voneinander unabhängige Merkmale.",
      "hint": "",
      "bonus": false,
      "options": [
        "Einzelkosten können fix sein.",
        "Gemeinkosten sind immer fix.",
        "Gemeinkosten können variabel sein.",
        "Einzelkosten sind immer variabel."
      ],
      "tolerance": 0.011
    },
    {
      "id": "kosten-07",
      "module": "kosten",
      "type": "text",
      "afb": 3,
      "prompt": "Erläutern Sie, weshalb die monatliche Hallenmiete nicht automatisch einem einzelnen FlexDock zugerechnet werden kann.",
      "answer": null,
      "solution": "Die Halle dient mehreren Produkten; eine direkte Zuordnung wäre nicht eindeutig. Daher erfolgt die Verteilung als Gemeinkosten über einen geeigneten Schlüssel.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "kosten-08",
      "module": "kosten",
      "type": "text",
      "afb": 3,
      "prompt": "Beurteilen Sie, ob eine feste, nur für den „BikeClip“ gezahlte Produktlizenz als Einzelkosten erfasst werden kann.",
      "answer": null,
      "solution": "Ja. Die feste Lizenz ist einem bestimmten Produkt direkt zurechenbar und kann als **fixe Einzelkosten** klassifiziert werden.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "kosten-09",
      "module": "kosten",
      "type": "text",
      "afb": 3,
      "prompt": "Bonus: Warum sollte das Unternehmen Gemeinkosten bei einer Stückkalkulation nicht einfach weglassen?",
      "answer": null,
      "solution": "Dann würden die Selbstkosten zu niedrig ausgewiesen und die langfristige Preisuntergrenze fehlerhaft bestimmt.",
      "hint": "",
      "bonus": true,
      "tolerance": 0.011
    },
    {
      "id": "kosten-10",
      "module": "kosten",
      "type": "match",
      "afb": 2,
      "prompt": "Bonus: Ordnen Sie die Fachbegriffe zu.",
      "answer": {
        "Kostenträger": "Produkt oder Auftrag",
        "Zuschlagssatz": "Schlüssel zur Kostenverteilung",
        "Einzelkosten": "direkt zurechenbar"
      },
      "solution": "Die Zuordnung erleichtert die spätere Zuschlagskalkulation.",
      "hint": "",
      "bonus": true,
      "tolerance": 0.011,
      "pairs": {
        "Kostenträger": "Produkt oder Auftrag",
        "Zuschlagssatz": "Schlüssel zur Kostenverteilung",
        "Einzelkosten": "direkt zurechenbar"
      }
    },
    {
      "id": "verhalten-01",
      "module": "verhalten",
      "type": "single",
      "afb": 1,
      "prompt": "Welche Position ist typischerweise fix?",
      "answer": "Monatliche Hallenmiete",
      "solution": "Die Hallenmiete fällt in der Regel auch ohne Produktion an.",
      "hint": "",
      "bonus": false,
      "options": [
        "Verbrauchsabhängiger Maschinenstrom",
        "Monatliche Hallenmiete",
        "Rohmaterial je Stück"
      ],
      "tolerance": 0.011
    },
    {
      "id": "verhalten-02",
      "module": "verhalten",
      "type": "truefalse",
      "afb": 1,
      "prompt": "Bei proportionalem Verlauf bleiben die variablen Stückkosten konstant.",
      "answer": true,
      "solution": "Richtig. Proportionale variable Gesamtkosten steigen im gleichen Verhältnis wie die Stückzahl.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "verhalten-03",
      "module": "verhalten",
      "type": "drag",
      "afb": 2,
      "prompt": "Ordnen Sie die Kosten der Vierfeldermatrix zu.",
      "answer": {
        "Fertigungsmaterial": "variable Einzelkosten",
        "Pauschale Produktlizenz": "fixe Einzelkosten",
        "Verbrauchsabhängiger Hallenstrom": "variable Gemeinkosten",
        "Monatliche Büromiete": "fixe Gemeinkosten"
      },
      "solution": "Einzel/Gemein: Zurechenbarkeit. Fix/variabel: Abhängigkeit von der Menge.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011,
      "items": [
        "Fertigungsmaterial",
        "Pauschale Produktlizenz",
        "Verbrauchsabhängiger Hallenstrom",
        "Monatliche Büromiete"
      ],
      "groups": [
        "variable Einzelkosten",
        "fixe Einzelkosten",
        "variable Gemeinkosten",
        "fixe Gemeinkosten"
      ]
    },
    {
      "id": "verhalten-04",
      "module": "verhalten",
      "type": "number",
      "afb": 2,
      "prompt": "Bei 300 Stück betragen variable Gesamtkosten 6.600 €. Bestimmen Sie die variablen Stückkosten.",
      "answer": 22,
      "solution": "Variable Stückkosten = 6.600 € (variable Gesamtkosten) ÷ 300 Stück (Menge) = **22 €/Stück**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "verhalten-05",
      "module": "verhalten",
      "type": "number",
      "afb": 2,
      "prompt": "Die variablen Stückkosten betragen 22 €. Wie hoch sind die variablen Gesamtkosten bei 500 Stück?",
      "answer": 11000,
      "solution": "Variable Gesamtkosten = 22 €/Stück (variable Stückkosten) · 500 Stück (Menge) = **11.000 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "verhalten-06",
      "module": "verhalten",
      "type": "match",
      "afb": 2,
      "prompt": "Ordnen Sie Veränderungen bei proportionalem Kostenverlauf zu.",
      "answer": {
        "Produktionsmenge verdoppelt": "Variable Gesamtkosten verdoppeln sich",
        "Produktion stoppt": "Variable Gesamtkosten fallen auf 0 €",
        "Menge steigt innerhalb der Kapazität": "Fixkosten bleiben gleich"
      },
      "solution": "Dies gilt bei proportionalen variablen Kosten und konstanten Fixkosten im betrachteten Bereich.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011,
      "pairs": {
        "Produktionsmenge verdoppelt": "Variable Gesamtkosten verdoppeln sich",
        "Produktion stoppt": "Variable Gesamtkosten fallen auf 0 €",
        "Menge steigt innerhalb der Kapazität": "Fixkosten bleiben gleich"
      }
    },
    {
      "id": "verhalten-07",
      "module": "verhalten",
      "type": "text",
      "afb": 3,
      "prompt": "Begründen Sie, weshalb eine Spezialmaschine gleichzeitig fixe Einzelkosten verursachen kann.",
      "answer": null,
      "solution": "Ist die Maschine ausschließlich einem Produkt zugeordnet, sind ihre zeitabhängigen Abschreibungen diesem Produkt direkt zurechenbar (Einzelkosten) und beschäftigungsunabhängig (fix).",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "verhalten-08",
      "module": "verhalten",
      "type": "text",
      "afb": 3,
      "prompt": "Beurteilen Sie die Aussage: „Alle Gemeinkosten sind Fixkosten.“",
      "answer": null,
      "solution": "Falsch. Gemeinkosten können variabel (Maschinenstrom) oder fix (Hallenmiete) sein. Die Einteilung nach Zurechenbarkeit ist von der Einteilung nach Kostenverhalten unabhängig.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "verhalten-09",
      "module": "verhalten",
      "type": "number",
      "afb": 2,
      "prompt": "Bonus: Variable Stückkosten 24 €, Menge 750. Berechnen Sie die variablen Gesamtkosten.",
      "answer": 18000,
      "solution": "Variable Kosten = 24 €/Stück (variable Stückkosten) · 750 Stück (Produktionsmenge) = **18.000 €**.",
      "hint": "",
      "bonus": true,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "verhalten-10",
      "module": "verhalten",
      "type": "text",
      "afb": 3,
      "prompt": "Bonus: Nennen Sie eine Situation, in der Fixkosten nicht dauerhaft konstant bleiben.",
      "answer": null,
      "solution": "Beim Ausbau der Kapazität muss etwa eine zusätzliche Halle angemietet werden. Es können sprungfixe Kosten entstehen.",
      "hint": "",
      "bonus": true,
      "tolerance": 0.011
    },
    {
      "id": "erfolg-01",
      "module": "erfolg",
      "type": "single",
      "afb": 1,
      "prompt": "Welche Größe muss von den Umsatzerlösen abgezogen werden?",
      "answer": "Gesamtkosten",
      "solution": "Betriebsergebnis = Umsatzerlöse − Gesamtkosten.",
      "hint": "",
      "bonus": false,
      "options": [
        "Fixkosten je Stück",
        "Gesamtkosten",
        "Nur das Fertigungsmaterial"
      ],
      "tolerance": 0.011
    },
    {
      "id": "erfolg-02",
      "module": "erfolg",
      "type": "truefalse",
      "afb": 1,
      "prompt": "Sind Umsatzerlöse von 20.000 € größer als Gesamtkosten von 17.000 €, ergibt sich ein Gewinn von 3.000 €.",
      "answer": true,
      "solution": "20.000 € (Umsatz) − 17.000 € (Gesamtkosten) = **3.000 € Gewinn**.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "erfolg-03",
      "module": "erfolg",
      "type": "number",
      "afb": 2,
      "prompt": "400 FlexDock werden zu je 46 € verkauft. Berechnen Sie den Umsatz.",
      "answer": 18400,
      "solution": "Umsatz = 400 Stück (Absatzmenge) · 46 €/Stück (Verkaufspreis) = **18.400 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "erfolg-04",
      "module": "erfolg",
      "type": "number",
      "afb": 2,
      "prompt": "400 Stück, variable Stückkosten 22 €, Fixkosten 6.400 €. Berechnen Sie die Gesamtkosten.",
      "answer": 15200,
      "solution": "Gesamtkosten = 400 Stück (Produktionsmenge) · 22 €/Stück (variable Stückkosten) + 6.400 € (Fixkosten) = **15.200 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "erfolg-05",
      "module": "erfolg",
      "type": "number",
      "afb": 2,
      "prompt": "Umsatz 18.400 €, Gesamtkosten 15.200 €. Bestimmen Sie das Betriebsergebnis.",
      "answer": 3200,
      "solution": "Betriebsergebnis = 18.400 € (Umsatz) − 15.200 € (Gesamtkosten) = **3.200 € Gewinn**.",
      "hint": "",
      "bonus": false,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "erfolg-06",
      "module": "erfolg",
      "type": "order",
      "afb": 2,
      "prompt": "Ordnen Sie die Schritte einer Erfolgsrechnung.",
      "answer": [
        "Umsatz ermitteln",
        "Variable Gesamtkosten ermitteln",
        "Fixkosten berücksichtigen",
        "Betriebsergebnis berechnen"
      ],
      "solution": "Zuerst Erlöse, dann variable Kosten, dann fixe Kosten, abschließend Betriebsergebnis.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011,
      "items": [
        "Umsatz ermitteln",
        "Variable Gesamtkosten ermitteln",
        "Fixkosten berücksichtigen",
        "Betriebsergebnis berechnen"
      ]
    },
    {
      "id": "erfolg-07",
      "module": "erfolg",
      "type": "text",
      "afb": 3,
      "prompt": "Ein Unternehmen steigert die Absatzmenge, die Fixkosten bleiben gleich. Erläutern Sie unter welcher Bedingung das Betriebsergebnis steigt.",
      "answer": null,
      "solution": "Bei unverändertem Verkaufspreis und proportionalen variablen Kosten steigt das Ergebnis, wenn der Stückdeckungsbeitrag positiv ist.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "erfolg-08",
      "module": "erfolg",
      "type": "text",
      "afb": 3,
      "prompt": "Beurteilen Sie die Aussage: „Mehr Umsatz bedeutet immer mehr Gewinn.“",
      "answer": null,
      "solution": "Falsch. Das Ergebnis hängt auch von zusätzlichen variablen und möglicherweise neuen fixen Kosten ab. Bei negativem Stückdeckungsbeitrag kann mehr Absatz den Verlust erhöhen.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "erfolg-09",
      "module": "erfolg",
      "type": "number",
      "afb": 2,
      "prompt": "Bonus: 500 Stück zu 30 €, variable Kosten je Stück 19 €, Fixkosten 4.000 €. Berechnen Sie den Gewinn.",
      "answer": 1500,
      "solution": "Gewinn = 500 Stück (Absatzmenge) · 30 €/Stück (Verkaufspreis) − 500 Stück (Produktionsmenge) · 19 €/Stück (variable Stückkosten) − 4.000 € (Fixkosten) = **1.500 €**.",
      "hint": "",
      "bonus": true,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "erfolg-10",
      "module": "erfolg",
      "type": "text",
      "afb": 3,
      "prompt": "Bonus: Wie wirkt ein Anstieg der Fixkosten auf das Betriebsergebnis bei unveränderter Menge?",
      "answer": null,
      "solution": "Es sinkt in genau der Höhe der zusätzlichen Fixkosten, sofern Umsatz und variable Kosten konstant bleiben.",
      "hint": "",
      "bonus": true,
      "tolerance": 0.011
    },
    {
      "id": "kurz-01",
      "module": "kurz",
      "type": "single",
      "afb": 1,
      "prompt": "Was bildet die kurzfristige Preisuntergrenze?",
      "answer": "Variable Stückkosten",
      "solution": "Die kurzfristige Preisuntergrenze ist gleich den variablen Stückkosten.",
      "hint": "",
      "bonus": false,
      "options": [
        "Fixkosten",
        "Variable Stückkosten",
        "Gesamte Selbstkosten"
      ],
      "tolerance": 0.011
    },
    {
      "id": "kurz-02",
      "module": "kurz",
      "type": "truefalse",
      "afb": 1,
      "prompt": "Bei einem Verkaufspreis genau in Höhe der variablen Stückkosten ist der Stückdeckungsbeitrag null.",
      "answer": true,
      "solution": "db = p − kv = 0.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "kurz-03",
      "module": "kurz",
      "type": "number",
      "afb": 2,
      "prompt": "Ein FlexDock wird für 46 € verkauft und hat variable Stückkosten von 22 €. Berechnen Sie den Stückdeckungsbeitrag.",
      "answer": 24,
      "solution": "Stückdeckungsbeitrag = 46 € (Verkaufspreis) − 22 € (variable Stückkosten) = **24 €/Stück**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "kurz-04",
      "module": "kurz",
      "type": "number",
      "afb": 2,
      "prompt": "Variable Gesamtkosten 10.800 €, Menge 450 Stück. Wie hoch ist die kurzfristige Preisuntergrenze?",
      "answer": 24,
      "solution": "Kurzfristige PUG = 10.800 € (variable Gesamtkosten) ÷ 450 Stück (Menge) = **24 €/Stück**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "kurz-05",
      "module": "kurz",
      "type": "number",
      "afb": 2,
      "prompt": "Ein Produkt erzielt 11 € Stückdeckungsbeitrag bei 360 verkauften Stück. Ermitteln Sie den Gesamtdeckungsbeitrag.",
      "answer": 3960,
      "solution": "Gesamtdeckungsbeitrag = 11 €/Stück (db) · 360 Stück (Absatz) = **3.960 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "kurz-06",
      "module": "kurz",
      "type": "match",
      "afb": 2,
      "prompt": "Ordnen Sie das jeweilige Preisverhältnis der Wirkung zu.",
      "answer": {
        "p > kv": "positiver Stückdeckungsbeitrag",
        "p = kv": "Stückdeckungsbeitrag = 0",
        "p < kv": "negativer Stückdeckungsbeitrag"
      },
      "solution": "Die kurzfristige Preisuntergrenze ist der Grenzfall p = kv.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011,
      "pairs": {
        "p > kv": "positiver Stückdeckungsbeitrag",
        "p = kv": "Stückdeckungsbeitrag = 0",
        "p < kv": "negativer Stückdeckungsbeitrag"
      }
    },
    {
      "id": "kurz-07",
      "module": "kurz",
      "type": "text",
      "afb": 3,
      "prompt": "Eine Kundin bietet 20 € für ein Teil mit variablen Stückkosten von 22 €. Beurteilen Sie den Verkauf bei freien Kapazitäten.",
      "answer": null,
      "solution": "Der Stückdeckungsbeitrag beträgt 20 € − 22 € = −2 €. Jeder zusätzliche Verkauf verschlechtert das Ergebnis um 2 €; der Preis liegt unter der kurzfristigen Preisuntergrenze.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "kurz-08",
      "module": "kurz",
      "type": "text",
      "afb": 3,
      "prompt": "Warum bedeutet ein positiver Stückdeckungsbeitrag nicht zwangsläufig Gewinn?",
      "answer": null,
      "solution": "Der Stückdeckungsbeitrag dient zunächst zur Deckung der Fixkosten. Erst wenn der Gesamtdeckungsbeitrag die Fixkosten übersteigt, entsteht ein positiver Betriebserfolg.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "kurz-09",
      "module": "kurz",
      "type": "number",
      "afb": 2,
      "prompt": "Bonus: Bei kv = 18 € und p = 16 €: Wie hoch ist der Stückdeckungsbeitrag?",
      "answer": -2,
      "solution": "db = 16 € (Preis) − 18 € (variable Stückkosten) = **−2 €/Stück**.",
      "hint": "",
      "bonus": true,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "kurz-10",
      "module": "kurz",
      "type": "text",
      "afb": 3,
      "prompt": "Bonus: Unter welchen Voraussetzungen ist ein kurzfristiger Verkauf zwischen beiden Preisuntergrenzen sinnvoll?",
      "answer": null,
      "solution": "Freie Kapazitäten, keine zusätzlichen Fixkosten, keine Verdrängung günstigerer Aufträge; positiver Deckungsbeitrag.",
      "hint": "",
      "bonus": true,
      "tolerance": 0.011
    },
    {
      "id": "lang-01",
      "module": "lang",
      "type": "single",
      "afb": 1,
      "prompt": "Was bildet die langfristige Preisuntergrenze?",
      "answer": "Gesamte Stückkosten / Selbstkosten",
      "solution": "Langfristig müssen variable und fixe Kosten gedeckt sein.",
      "hint": "",
      "bonus": false,
      "options": [
        "Nur variable Stückkosten",
        "Gesamte Stückkosten / Selbstkosten",
        "Nur Fixkosten"
      ],
      "tolerance": 0.011
    },
    {
      "id": "lang-02",
      "module": "lang",
      "type": "truefalse",
      "afb": 1,
      "prompt": "Bei gleichbleibenden Fixkosten und konstanten variablen Stückkosten sinkt die langfristige PUG bei steigender Menge.",
      "answer": true,
      "solution": "Die Fixkosten verteilen sich auf mehr Stück (Fixkostendegression).",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "lang-03",
      "module": "lang",
      "type": "number",
      "afb": 2,
      "prompt": "Monatliche Fixkosten 6.400 €, Produktion 400 Stück. Berechnen Sie die fixen Stückkosten.",
      "answer": 16,
      "solution": "Fixe Stückkosten = 6.400 € (Fixkosten) ÷ 400 Stück (Menge) = **16 €/Stück**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "lang-04",
      "module": "lang",
      "type": "number",
      "afb": 2,
      "prompt": "Variable Stückkosten 22 €, fixe Stückkosten 16 €. Wie hoch ist die langfristige Preisuntergrenze?",
      "answer": 38,
      "solution": "Langfristige PUG = 22 € (variable Stückkosten) + 16 € (fixe Stückkosten) = **38 €/Stück**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "lang-05",
      "module": "lang",
      "type": "number",
      "afb": 2,
      "prompt": "Fixkosten 6.400 €, variable Stückkosten 22 €, Menge 800. Ermitteln Sie die langfristige PUG.",
      "answer": 30,
      "solution": "Langfristige PUG = 22 € (variable Stückkosten) + 6.400 € (Fixkosten) ÷ 800 Stück (Menge) = **30 €/Stück**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "lang-06",
      "module": "lang",
      "type": "order",
      "afb": 2,
      "prompt": "Ordnen Sie die Berechnung der langfristigen PUG.",
      "answer": [
        "Fixkosten pro Zeitraum ermitteln",
        "Fixkosten durch Stückzahl teilen",
        "Variable Stückkosten addieren",
        "Langfristige PUG benennen"
      ],
      "solution": "Die gesamte Stückkostenbasis besteht aus variablen und fixen Stückkosten.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011,
      "items": [
        "Fixkosten pro Zeitraum ermitteln",
        "Fixkosten durch Stückzahl teilen",
        "Variable Stückkosten addieren",
        "Langfristige PUG benennen"
      ]
    },
    {
      "id": "lang-07",
      "module": "lang",
      "type": "text",
      "afb": 3,
      "prompt": "Erläutern Sie, warum die kurzfristige PUG bei der Mengenerhöhung nicht sinkt, die langfristige hingegen schon.",
      "answer": null,
      "solution": "Bei konstanten variablen Stückkosten bleibt die kurzfristige PUG unverändert. Die fixe Stückkostenkomponente der langfristigen PUG sinkt durch Verteilung der Fixkosten auf mehr Stück.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "lang-08",
      "module": "lang",
      "type": "text",
      "afb": 3,
      "prompt": "Ein Betrieb verkauft bei 200 Stück unter seinen Selbstkosten, aber oberhalb der variablen Stückkosten. Beurteilen Sie die langfristige Preisstrategie.",
      "answer": null,
      "solution": "Der Verkauf bringt kurzfristig einen positiven Deckungsbeitrag, deckt die gesamten Kosten aber nicht. Dauerhaft muss die Preis- oder Kostenstruktur angepasst werden.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "lang-09",
      "module": "lang",
      "type": "number",
      "afb": 2,
      "prompt": "Bonus: 360.000 € Fixkosten pro Jahr, sechs Einheiten, kv = 50.000 €. Langfristige PUG?",
      "answer": 110000,
      "solution": "Langfristige PUG = 50.000 €/Einheit (variable Stückkosten) + 360.000 € (Jahresfixkosten) ÷ 6 Einheiten (Jahresmenge) = **110.000 €/Einheit**.",
      "hint": "",
      "bonus": true,
      "unit": "€/Einheit",
      "tolerance": 0.011
    },
    {
      "id": "lang-10",
      "module": "lang",
      "type": "text",
      "afb": 3,
      "prompt": "Bonus: Warum lässt sich die langfristige PUG nicht ohne Mengenangabe exakt berechnen, wenn nur Fixkosten vorliegen?",
      "answer": null,
      "solution": "Weil die fixen Stückkosten von der hergestellten bzw. abgesetzten Menge abhängen.",
      "hint": "",
      "bonus": true,
      "tolerance": 0.011
    },
    {
      "id": "spaltung-01",
      "module": "spaltung",
      "type": "single",
      "afb": 1,
      "prompt": "Sind 80 % der Gemeinkosten fix, welcher Anteil ist variabel?",
      "answer": "20 %",
      "solution": "100 % − 80 % (fix) = **20 % variabel**.",
      "hint": "",
      "bonus": false,
      "options": [
        "80 %",
        "20 %",
        "0 %"
      ],
      "tolerance": 0.011
    },
    {
      "id": "spaltung-02",
      "module": "spaltung",
      "type": "truefalse",
      "afb": 1,
      "prompt": "Bei der kurzfristigen PUG werden unter der Annahme vollständig variabler Einzelkosten auch variable Gemeinkosten berücksichtigt.",
      "answer": true,
      "solution": "Die variablen Stückkosten setzen sich aus variablen Einzelkosten und variablen Gemeinkosten zusammen.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "spaltung-03",
      "module": "spaltung",
      "type": "number",
      "afb": 2,
      "prompt": "Die Gemeinkosten betragen 8.000 €, davon 75 % fix. Wie hoch sind die variablen Gemeinkosten?",
      "answer": 2000,
      "solution": "Variable GK = 8.000 € (Gemeinkosten) · 25 % (variabler Anteil) = **2.000 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "spaltung-04",
      "module": "spaltung",
      "type": "number",
      "afb": 2,
      "prompt": "Einzelkosten 12.000 € (voll variabel), GK 8.000 € (75 % fix), 500 Stück. Kurzfristige PUG?",
      "answer": 28,
      "solution": "Variable GK = 8.000 € (gesamte GK) · 25 % (variabler Anteil) = 2.000 €. Kurzfristige PUG = [12.000 € (variable EK) + 2.000 € (variable GK)] ÷ 500 Stück (Menge) = **28 €/Stück**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "spaltung-05",
      "module": "spaltung",
      "type": "number",
      "afb": 2,
      "prompt": "Einzelkosten 12.000 €, Gemeinkosten 8.000 €, Menge 500. Langfristige PUG?",
      "answer": 40,
      "solution": "Langfristige PUG = [12.000 € (Einzelkosten) + 8.000 € (Gemeinkosten)] ÷ 500 Stück (Absatzmenge) = **40 €/Stück**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "spaltung-06",
      "module": "spaltung",
      "type": "match",
      "afb": 2,
      "prompt": "Ordnen Sie die Werte zu: GK = 10.000 €, davon 60 % fix.",
      "answer": {
        "Fixe GK": "6.000 €",
        "Variable GK": "4.000 €",
        "Alle GK": "10.000 €"
      },
      "solution": "Fixe GK = 10.000 € · 60 % = 6.000 €; variable GK = 10.000 € · 40 % = 4.000 €.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011,
      "pairs": {
        "Fixe GK": "6.000 €",
        "Variable GK": "4.000 €",
        "Alle GK": "10.000 €"
      }
    },
    {
      "id": "spaltung-07",
      "module": "spaltung",
      "type": "text",
      "afb": 3,
      "prompt": "Ein Unternehmen setzt alle Gemeinkosten bei der kurzfristigen PUG an. Beurteilen Sie den Fehler.",
      "answer": null,
      "solution": "Die kurzfristige PUG wäre zu hoch, wenn fixe Gemeinkosten einbezogen werden. Es sind nur die variablen Bestandteile relevant (sowie ggf. variable Einzelkosten).",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "spaltung-08",
      "module": "spaltung",
      "type": "text",
      "afb": 3,
      "prompt": "Erläutern Sie, warum bei fixen Einzelkosten die Formel „alle Einzelkosten + variable GK“ nicht allgemein korrekt ist.",
      "answer": null,
      "solution": "Fixe Einzelkosten dürfen für die kurzfristige PUG nicht berücksichtigt werden. Allgemein zählen nur die gesamten variablen Kosten, unabhängig von ihrer Einzel-/Gemeinkosteneigenschaft.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "spaltung-09",
      "module": "spaltung",
      "type": "number",
      "afb": 2,
      "prompt": "Bonus: Gesamt-GK 15.000 €, davon 40 % fix. Ermitteln Sie die variablen GK.",
      "answer": 9000,
      "solution": "Variable GK = 15.000 € (gesamte GK) · (100 % gesamt − 40 % fixer Anteil) = **9.000 €**.",
      "hint": "",
      "bonus": true,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "spaltung-10",
      "module": "spaltung",
      "type": "text",
      "afb": 3,
      "prompt": "Bonus: Wie beeinflusst eine Erhöhung des fixen GK-Anteils bei unveränderten gesamten GK die kurzfristige PUG?",
      "answer": null,
      "solution": "Der variable GK-Anteil sinkt, damit sinkt – bei unveränderter Menge und variablen Einzelkosten – die kurzfristige PUG.",
      "hint": "",
      "bonus": true,
      "tolerance": 0.011
    },
    {
      "id": "zuschlag-01",
      "module": "zuschlag",
      "type": "single",
      "afb": 1,
      "prompt": "Auf welche Bezugsgröße wird der Fertigungsgemeinkostenzuschlag in der einfachen Zuschlagskalkulation angewandt?",
      "answer": "Fertigungslöhne",
      "solution": "FGK = Fertigungslöhne · FGK-Zuschlagssatz.",
      "hint": "",
      "bonus": false,
      "options": [
        "Fertigungslöhne",
        "Selbstkosten",
        "Nettoumsatz"
      ],
      "tolerance": 0.011
    },
    {
      "id": "zuschlag-02",
      "module": "zuschlag",
      "type": "truefalse",
      "afb": 1,
      "prompt": "In der üblichen FOS-Zuschlagskalkulation werden Verwaltungs- und Vertriebsgemeinkosten auf die Herstellkosten bezogen.",
      "answer": true,
      "solution": "Das ist die verwendete Bezugsgröße im hier behandelten Kalkulationsschema.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "zuschlag-03",
      "module": "zuschlag",
      "type": "number",
      "afb": 2,
      "prompt": "Fertigungsmaterial 60 €, MGK-Zuschlag 20 %. Berechnen Sie die Materialgemeinkosten.",
      "answer": 12,
      "solution": "MGK = 60 € (Fertigungsmaterial) · 20 % (Zuschlag) = **12 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "zuschlag-04",
      "module": "zuschlag",
      "type": "number",
      "afb": 2,
      "prompt": "Fertigungslöhne 30 €, FGK-Zuschlag 50 %. Berechnen Sie die Fertigungsgemeinkosten.",
      "answer": 15,
      "solution": "FGK = 30 € (Fertigungslöhne) · 50 % (Zuschlag) = **15 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "zuschlag-05",
      "module": "zuschlag",
      "type": "number",
      "afb": 2,
      "prompt": "FM 60 €, MGK 12 €, FL 30 €, FGK 15 €. Berechnen Sie die Herstellkosten.",
      "answer": 117,
      "solution": "Herstellkosten = 60 € (FM) + 12 € (MGK) + 30 € (FL) + 15 € (FGK) = **117 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "zuschlag-06",
      "module": "zuschlag",
      "type": "number",
      "afb": 2,
      "prompt": "Herstellkosten 117 €, VwGK 10 %, VtGK 5 %. Ermitteln Sie die Selbstkosten.",
      "answer": 134.55,
      "solution": "VwGK = 117 € (Herstellkosten) · 10 % (VwGK-Zuschlag) = 11,70 €. VtGK = 117 € (Herstellkosten) · 5 % (VtGK-Zuschlag) = 5,85 €. Selbstkosten = 117 € (HK) + 11,70 € (VwGK) + 5,85 € (VtGK) = **134,55 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "zuschlag-07",
      "module": "zuschlag",
      "type": "text",
      "afb": 3,
      "prompt": "Ein Unternehmen addiert Gewinnaufschlag, Rabatt und Skonto zu den Selbstkosten, um die langfristige PUG zu berechnen. Beurteilen Sie das Vorgehen.",
      "answer": null,
      "solution": "Falsch. Die langfristige PUG entspricht den Selbstkosten. Gewinn, Kundenskonto und Kundenrabatt gehören zur Verkaufspreiskalkulation, nicht zu den Kosten der PUG.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "zuschlag-08",
      "module": "zuschlag",
      "type": "text",
      "afb": 3,
      "prompt": "Bei Selbstkosten von 134,55 € sind 80 % der Gemeinkosten fix. Beschreiben Sie den Weg zur kurzfristigen PUG.",
      "answer": null,
      "solution": "Zuerst Einzelkosten ermitteln, dann gesamte GK = Selbstkosten − Einzelkosten; davon 20 % variable GK bestimmen und zu den variablen Einzelkosten addieren.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "zuschlag-09",
      "module": "zuschlag",
      "type": "number",
      "afb": 2,
      "prompt": "Bonus: Selbstkosten 134,55 €, Einzelkosten 90 €, GK 44,55 €, davon 20 % variabel. Kurzfristige PUG?",
      "answer": 98.91,
      "solution": "Variable GK = 44,55 € (gesamte GK) · 20 % (variabler Anteil) = 8,91 €. Kurzfristige PUG = 90 € (variable EK) + 8,91 € (variable GK) = **98,91 €**.",
      "hint": "",
      "bonus": true,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "zuschlag-10",
      "module": "zuschlag",
      "type": "text",
      "afb": 3,
      "prompt": "Bonus: Weshalb muss man die Zuschlagsgrundlage bei jedem Gemeinkostenzuschlag beachten?",
      "answer": null,
      "solution": "Weil gleiche Prozentsätze auf unterschiedliche Basen verschiedene Kosten ergeben; falsche Bezugsgrundlagen verfälschen die Selbstkosten und Preisuntergrenzen.",
      "hint": "",
      "bonus": true,
      "tolerance": 0.011
    },
    {
      "id": "preis-01",
      "module": "preis",
      "type": "single",
      "afb": 1,
      "prompt": "p = 31 €, kurzfristige PUG = 22 €, langfristige PUG = 38 €. Welche Zone liegt vor?",
      "answer": "Zwischen beiden Preisuntergrenzen",
      "solution": "31 € liegt über 22 €, aber unter 38 €.",
      "hint": "",
      "bonus": false,
      "options": [
        "Unter kurzfristiger PUG",
        "Zwischen beiden Preisuntergrenzen",
        "Über langfristiger PUG"
      ],
      "tolerance": 0.011
    },
    {
      "id": "preis-02",
      "module": "preis",
      "type": "truefalse",
      "afb": 1,
      "prompt": "Bei p = langfristiger PUG entsteht im betrachteten Modell gerade kein Stückgewinn.",
      "answer": true,
      "solution": "Der Verkaufspreis deckt dann genau die gesamten Stückkosten.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "preis-03",
      "module": "preis",
      "type": "number",
      "afb": 2,
      "prompt": "p = 31 €, kv = 22 €. Wie hoch ist der Stückdeckungsbeitrag?",
      "answer": 9,
      "solution": "db = 31 € (Preis) − 22 € (variable Stückkosten) = **9 €/Stück**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "preis-04",
      "module": "preis",
      "type": "number",
      "afb": 2,
      "prompt": "p = 31 €, Selbstkosten 38 €. Wie hoch ist das Stückergebnis?",
      "answer": -7,
      "solution": "Stückergebnis = 31 € (Verkaufspreis) − 38 € (Selbstkosten) = **−7 €/Stück**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "preis-05",
      "module": "preis",
      "type": "match",
      "afb": 2,
      "prompt": "Ordnen Sie die Angebotspreise (PUG kurz 22 €, PUG lang 38 €) zu.",
      "answer": {
        "19 €": "negativer Deckungsbeitrag",
        "30 €": "positiver DB, Stückverlust",
        "41 €": "Stückgewinn"
      },
      "solution": "19 < 22; 22 < 30 < 38; 41 > 38.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011,
      "pairs": {
        "19 €": "negativer Deckungsbeitrag",
        "30 €": "positiver DB, Stückverlust",
        "41 €": "Stückgewinn"
      }
    },
    {
      "id": "preis-06",
      "module": "preis",
      "type": "multi",
      "afb": 2,
      "prompt": "Welche Gründe sprechen bei 30 € für eine befristete Preisentscheidung?",
      "answer": [
        "Positiver Stückdeckungsbeitrag",
        "Freie Kapazitäten"
      ],
      "solution": "Bei 30 € sind 8 € Stückdeckungsbeitrag vorhanden, aber keine vollständige Kostendeckung.",
      "hint": "",
      "bonus": false,
      "options": [
        "Positiver Stückdeckungsbeitrag",
        "Volle Deckung der Selbstkosten",
        "Freie Kapazitäten",
        "Fixkosten sind dadurch verschwunden"
      ],
      "tolerance": 0.011
    },
    {
      "id": "preis-07",
      "module": "preis",
      "type": "text",
      "afb": 3,
      "prompt": "Beurteilen Sie, ob LoopLab seinen regulären FlexDock-Preis dauerhaft von 46 € auf 30 € senken sollte.",
      "answer": null,
      "solution": "Bei Selbstkosten von 38 € wäre der Preis dauerhaft nicht kostendeckend; eine befristete Entscheidung könnte nur unter besonderen Bedingungen vertretbar sein.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "preis-08",
      "module": "preis",
      "type": "text",
      "afb": 3,
      "prompt": "Erklären Sie, warum eine Empfehlung allein aus dem Vergleich p > kv bei vollen Kapazitäten nicht ausreicht.",
      "answer": null,
      "solution": "Kapazitätsengpässe und entgangene Alternativaufträge verursachen Opportunitätskosten. Man muss die beste Verwendung der knappen Kapazität vergleichen.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "preis-09",
      "module": "preis",
      "type": "number",
      "afb": 2,
      "prompt": "Bonus: p = 25 €, kv = 22 €, Selbstkosten 38 €. Ermitteln Sie das Stückergebnis.",
      "answer": -13,
      "solution": "Stückergebnis = 25 € (Preis) − 38 € (Selbstkosten) = **−13 €/Stück**.",
      "hint": "",
      "bonus": true,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "preis-10",
      "module": "preis",
      "type": "text",
      "afb": 3,
      "prompt": "Bonus: Warum ist die kurzfristige PUG keine sinnvolle dauerhafte Preisstrategie?",
      "answer": null,
      "solution": "Sie deckt nur variable Kosten, nicht aber die dauerhaft anfallenden Fixkosten.",
      "hint": "",
      "bonus": true,
      "tolerance": 0.011
    },
    {
      "id": "zusatz-01",
      "module": "zusatz",
      "type": "single",
      "afb": 1,
      "prompt": "Welcher Wert ist für einen Zusatzauftrag bei freien Kapazitäten und unveränderten Fixkosten zentral?",
      "answer": "Zusätzlicher Deckungsbeitrag",
      "solution": "Der zusätzliche Deckungsbeitrag zeigt die Ergebniswirkung.",
      "hint": "",
      "bonus": false,
      "options": [
        "Gesamte historische Fixkosten",
        "Zusätzlicher Deckungsbeitrag",
        "Nur der Listenpreis"
      ],
      "tolerance": 0.011
    },
    {
      "id": "zusatz-02",
      "module": "zusatz",
      "type": "truefalse",
      "afb": 1,
      "prompt": "Ein Zusatzauftrag mit positivem Deckungsbeitrag verbessert bei freien Kapazitäten und unveränderten Fixkosten das Ergebnis.",
      "answer": true,
      "solution": "Der Auftrag trägt zusätzlich zur Fixkostendeckung oder zum Gewinn bei.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "zusatz-03",
      "module": "zusatz",
      "type": "number",
      "afb": 2,
      "prompt": "100 zusätzliche FlexDock, Angebotspreis 29 €, kv = 22 €. Gesamtdeckungsbeitrag des Zusatzauftrags?",
      "answer": 700,
      "solution": "Zusätzlicher DB = 100 Stück (Auftragsmenge) · [29 € (Preis) − 22 € (kv)] = **700 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "zusatz-04",
      "module": "zusatz",
      "type": "number",
      "afb": 2,
      "prompt": "Bisheriger Gewinn 3.200 €, zusätzlicher DB 700 €, keine Mehrfixkosten. Neuer Gewinn?",
      "answer": 3900,
      "solution": "Neuer Gewinn = 3.200 € (bisheriges Ergebnis) + 700 € (zusätzlicher DB) = **3.900 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "zusatz-05",
      "module": "zusatz",
      "type": "number",
      "afb": 2,
      "prompt": "Zusätzlicher DB 700 €, aber auftragsbedingte Fixkosten 250 €. Wie stark verbessert sich das Ergebnis?",
      "answer": 450,
      "solution": "Ergebnisänderung = 700 € (zusätzlicher DB) − 250 € (zusätzliche Fixkosten) = **450 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "zusatz-06",
      "module": "zusatz",
      "type": "match",
      "afb": 2,
      "prompt": "Ordnen Sie die Bedingung ihrer Bedeutung zu.",
      "answer": {
        "Freie Kapazität": "Kein besserer Auftrag verdrängt",
        "Keine Mehrfixkosten": "Nur variable Kosten entstehen zusätzlich",
        "p > kv": "Positiver Stückdeckungsbeitrag"
      },
      "solution": "Zusatzaufträge werden nach zusätzlichen Erlösen und Kosten beurteilt.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011,
      "pairs": {
        "Freie Kapazität": "Kein besserer Auftrag verdrängt",
        "Keine Mehrfixkosten": "Nur variable Kosten entstehen zusätzlich",
        "p > kv": "Positiver Stückdeckungsbeitrag"
      }
    },
    {
      "id": "zusatz-07",
      "module": "zusatz",
      "type": "text",
      "afb": 3,
      "prompt": "Ein Auftrag über 100 Stück für 20 € wird bei kv = 22 € angeboten. Beurteilen Sie die Annahme.",
      "answer": null,
      "solution": "db = −2 € je Stück, insgesamt −200 €. Der Auftrag würde das Ergebnis verschlechtern und sollte unter den Modellannahmen nicht angenommen werden.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "zusatz-08",
      "module": "zusatz",
      "type": "text",
      "afb": 3,
      "prompt": "Ein attraktiver Großauftrag verdrängt einen bisherigen Auftrag mit höherem Stückdeckungsbeitrag. Warum ist „p > kv“ allein keine ausreichende Entscheidung?",
      "answer": null,
      "solution": "Die verdrängte Alternative bringt entgangenen Deckungsbeitrag. Bei Kapazitätsengpass muss der zusätzliche Nutzen gegen Opportunitätskosten abgewogen werden.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "zusatz-09",
      "module": "zusatz",
      "type": "number",
      "afb": 2,
      "prompt": "Bonus: Angebot für 300 Stück zu 28 €, kv = 22 €. Zusätzlicher Gesamt-DB?",
      "answer": 1800,
      "solution": "Zusätzlicher Gesamt-DB = 300 Stück (Zusatzauftrag) · [28 € (Angebotspreis) − 22 € (variable Stückkosten)] = **1.800 €**.",
      "hint": "",
      "bonus": true,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "zusatz-10",
      "module": "zusatz",
      "type": "text",
      "afb": 3,
      "prompt": "Bonus: Erklären Sie den Unterschied zwischen Zusatzauftrag und allgemeiner Senkung des Listenpreises.",
      "answer": null,
      "solution": "Ein Zusatzauftrag ist eine begrenzte Einzelentscheidung mit freien Kapazitäten. Eine allgemeine Listenpreissenkung betrifft häufig sämtliche Verkäufe und verändert das gesamte Betriebsergebnis.",
      "hint": "",
      "bonus": true,
      "tolerance": 0.011
    },
    {
      "id": "elimination-01",
      "module": "elimination",
      "type": "single",
      "afb": 1,
      "prompt": "Bei der Produktelimination ist welche Information besonders wichtig?",
      "answer": "Ob Fixkosten entfallen",
      "solution": "Entscheidend ist, welche Kosten nach der Einstellung tatsächlich verbleiben.",
      "hint": "",
      "bonus": false,
      "options": [
        "Ob Fixkosten entfallen",
        "Nur der Materialname",
        "Die Farbe des Produkts"
      ],
      "tolerance": 0.011
    },
    {
      "id": "elimination-02",
      "module": "elimination",
      "type": "truefalse",
      "afb": 1,
      "prompt": "Ein Stückverlust nach Vollkostenrechnung beweist immer, dass ein Produkt gestrichen werden sollte.",
      "answer": false,
      "solution": "Falsch. Entscheidend sind der Deckungsbeitrag und die durch die Elimination vermeidbaren Kosten.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "elimination-03",
      "module": "elimination",
      "type": "number",
      "afb": 2,
      "prompt": "Ein Zubehörteil wird für 24 € verkauft, kv = 16 €. Berechnen Sie den Stückdeckungsbeitrag.",
      "answer": 8,
      "solution": "Stückdeckungsbeitrag = 24 € (Verkaufspreis) − 16 € (variable Stückkosten) = **8 €/Stück**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "elimination-04",
      "module": "elimination",
      "type": "number",
      "afb": 2,
      "prompt": "Stückdeckungsbeitrag 8 €, Absatz 1.000 Stück. Gesamtdeckungsbeitrag?",
      "answer": 8000,
      "solution": "Gesamt-DB = 8 €/Stück (db) · 1.000 Stück (Absatzmenge) = **8.000 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "elimination-05",
      "module": "elimination",
      "type": "number",
      "afb": 2,
      "prompt": "Gesamt-DB 8.000 €, Fixkosten 9.000 €. Betriebsergebnis mit Produkt?",
      "answer": -1000,
      "solution": "Betriebsergebnis = 8.000 € (Gesamt-DB) − 9.000 € (Fixkosten) = **−1.000 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "elimination-06",
      "module": "elimination",
      "type": "number",
      "afb": 2,
      "prompt": "Das Produkt wird gestrichen; Fixkosten von 9.000 € bleiben. Betriebsergebnis ohne Produkt?",
      "answer": -9000,
      "solution": "Betriebsergebnis ohne Produkt = 0 € (Deckungsbeitrag) − 9.000 € (Fixkosten) = **−9.000 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "elimination-07",
      "module": "elimination",
      "type": "text",
      "afb": 3,
      "prompt": "Positionieren Sie sich zur Elimination: Mit Produkt −1.000 €, ohne Produkt −9.000 €.",
      "answer": null,
      "solution": "Behalten, sofern keine bessere Alternative vorliegt. Der positive Gesamt-DB von 8.000 € reduziert den Verlust. Die Elimination würde das Ergebnis um 8.000 € verschlechtern.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "elimination-08",
      "module": "elimination",
      "type": "text",
      "afb": 3,
      "prompt": "Wie ändert sich die Entscheidung, wenn bei Elimination alle 9.000 € Fixkosten tatsächlich entfallen?",
      "answer": null,
      "solution": "Mit Produkt −1.000 €, ohne Produkt 0 €. Eine Elimination würde das Ergebnis um 1.000 € verbessern, sofern keine weiteren Effekte eintreten.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "elimination-09",
      "module": "elimination",
      "type": "number",
      "afb": 2,
      "prompt": "Bonus: Positiver DB 6 €/Stück, 2.000 Stück; fixe Kosten bleiben. Ergebnisverschlechterung bei Streichung?",
      "answer": 12000,
      "solution": "Entgangener DB = 6 €/Stück (Stückdeckungsbeitrag) · 2.000 Stück (Absatzmenge) = **12.000 €**.",
      "hint": "",
      "bonus": true,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "elimination-10",
      "module": "elimination",
      "type": "text",
      "afb": 3,
      "prompt": "Bonus: Warum kann die Vollkostenrechnung eine Produktentscheidung in die falsche Richtung lenken?",
      "answer": null,
      "solution": "Zugeordnete fixe Gemeinkosten erscheinen als Stückkosten, obwohl sie bei der Elimination ggf. weiter bestehen. Die DB-Rechnung zeigt den Beitrag zur Fixkostendeckung.",
      "hint": "",
      "bonus": true,
      "tolerance": 0.011
    },
    {
      "id": "test-01",
      "module": "test",
      "type": "single",
      "afb": 1,
      "prompt": "Welche Größe entspricht der kurzfristigen PUG?",
      "answer": "Variable Stückkosten",
      "solution": "Kurzfristige PUG = variable Stückkosten.",
      "hint": "",
      "bonus": false,
      "options": [
        "Fixkosten",
        "Variable Stückkosten",
        "Herstellkosten plus Gewinn"
      ],
      "tolerance": 0.011
    },
    {
      "id": "test-02",
      "module": "test",
      "type": "single",
      "afb": 1,
      "prompt": "Welche Größe entspricht der langfristigen PUG?",
      "answer": "Selbstkosten je Stück",
      "solution": "Langfristig müssen alle Kosten je Stück gedeckt sein.",
      "hint": "",
      "bonus": false,
      "options": [
        "Nur variable GK",
        "Nur Fixkosten",
        "Selbstkosten je Stück"
      ],
      "tolerance": 0.011
    },
    {
      "id": "test-03",
      "module": "test",
      "type": "truefalse",
      "afb": 1,
      "prompt": "Bei p = kv ist der Stückdeckungsbeitrag gleich null.",
      "answer": true,
      "solution": "db = p − kv = 0.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "test-04",
      "module": "test",
      "type": "number",
      "afb": 2,
      "prompt": "Fixkosten 4.800 €, Menge 300, variable Stückkosten 18 €. Langfristige PUG?",
      "answer": 34,
      "solution": "PUG lang = 18 € (kv) + 4.800 € (Fixkosten) ÷ 300 (Menge) = **34 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "test-05",
      "module": "test",
      "type": "number",
      "afb": 2,
      "prompt": "Gesamte Gemeinkosten 12.000 €, davon 65 % fix. Wie hoch sind die variablen GK?",
      "answer": 4200,
      "solution": "Variable GK = 12.000 € (GK) · 35 % (variabler Anteil) = **4.200 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "test-06",
      "module": "test",
      "type": "number",
      "afb": 2,
      "prompt": "Variable Einzelkosten 8.000 €, variable GK 2.000 €, Menge 500. Kurzfristige PUG?",
      "answer": 20,
      "solution": "PUG kurz = [8.000 € (variable EK) + 2.000 € (variable GK)] ÷ 500 Stück (Menge) = **20 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "test-07",
      "module": "test",
      "type": "number",
      "afb": 2,
      "prompt": "p = 35 €, kv = 22 €. Stückdeckungsbeitrag?",
      "answer": 13,
      "solution": "db = 35 € (Preis) − 22 € (kv) = **13 €/Stück**.",
      "hint": "",
      "bonus": false,
      "unit": "€/Stück",
      "tolerance": 0.011
    },
    {
      "id": "test-08",
      "module": "test",
      "type": "number",
      "afb": 2,
      "prompt": "250 Stück mit Stückdeckungsbeitrag 13 €. Gesamtdeckungsbeitrag?",
      "answer": 3250,
      "solution": "Gesamt-DB = 250 Stück (Absatzmenge) · 13 €/Stück (Stückdeckungsbeitrag) = **3.250 €**.",
      "hint": "",
      "bonus": false,
      "unit": "€",
      "tolerance": 0.011
    },
    {
      "id": "test-09",
      "module": "test",
      "type": "match",
      "afb": 2,
      "prompt": "Ordnen Sie die Kostentypen zu.",
      "answer": {
        "Hallenmiete": "Fixe Gemeinkosten",
        "Aluminium je Stück": "Variable Einzelkosten",
        "Maschinenstrom je Stück, gemeinsam": "Variable Gemeinkosten"
      },
      "solution": "Unterscheiden Sie die Zurechenbarkeit und die Beschäftigungsabhängigkeit.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011,
      "pairs": {
        "Hallenmiete": "Fixe Gemeinkosten",
        "Aluminium je Stück": "Variable Einzelkosten",
        "Maschinenstrom je Stück, gemeinsam": "Variable Gemeinkosten"
      }
    },
    {
      "id": "test-10",
      "module": "test",
      "type": "text",
      "afb": 3,
      "prompt": "Ein Unternehmen verkauft dauerhaft unter den Selbstkosten, aber über den variablen Stückkosten. Beurteilen Sie die langfristige Situation.",
      "answer": null,
      "solution": "Kurzfristig besteht ein positiver Deckungsbeitrag, langfristig werden die gesamten Kosten nicht gedeckt. Eine dauerhafte Lösung erfordert eine Anpassung von Preis, Menge oder Kosten.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "test-11",
      "module": "test",
      "type": "text",
      "afb": 3,
      "prompt": "Ein Produkt hat laut Vollkostenrechnung Verlust, erzielt aber positiven Gesamt-DB. Die fixen Kosten bleiben bei Streichung bestehen. Treffen und begründen Sie eine Entscheidung.",
      "answer": null,
      "solution": "Das Produkt sollte grundsätzlich beibehalten werden, sofern keine wirtschaftlich bessere Alternative besteht; sein positiver DB reduziert den Verlust bzw. erhöht den Gewinn.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    },
    {
      "id": "test-12",
      "module": "test",
      "type": "text",
      "afb": 3,
      "prompt": "Erläutern Sie die Wirkung einer Halbierung der Menge bei konstanten Fixkosten und variablen Stückkosten.",
      "answer": null,
      "solution": "Fixe Stückkosten verdoppeln sich; die langfristige PUG steigt. Die kurzfristige PUG bleibt konstant, weil sich kv nicht ändert.",
      "hint": "",
      "bonus": false,
      "tolerance": 0.011
    }
  ],
  "items": [
    {
      "id": "base",
      "name": "Pixel",
      "kind": "avatar",
      "emoji": "🧑‍🚀",
      "cost": 0,
      "level": 1
    },
    {
      "id": "astro",
      "name": "Orbit",
      "kind": "avatar",
      "emoji": "👩‍🚀",
      "cost": 90,
      "level": 2
    },
    {
      "id": "bot",
      "name": "Byte",
      "kind": "avatar",
      "emoji": "🤖",
      "cost": 140,
      "level": 3
    },
    {
      "id": "fox",
      "name": "Fuchs",
      "kind": "avatar",
      "emoji": "🦊",
      "cost": 180,
      "level": 4
    },
    {
      "id": "owl",
      "name": "Eule",
      "kind": "avatar",
      "emoji": "🦉",
      "cost": 230,
      "level": 5
    },
    {
      "id": "cat",
      "name": "Kalkulationskatze",
      "kind": "pet",
      "emoji": "🐈",
      "cost": 60,
      "level": 2
    },
    {
      "id": "dog",
      "name": "Fabrikhund",
      "kind": "pet",
      "emoji": "🐕",
      "cost": 100,
      "level": 3
    },
    {
      "id": "dragon",
      "name": "Mini-Drache",
      "kind": "pet",
      "emoji": "🐉",
      "cost": 250,
      "level": 5
    },
    {
      "id": "glasses",
      "name": "Strategie-Brille",
      "kind": "outfit",
      "emoji": "🕶️",
      "cost": 50,
      "level": 2
    },
    {
      "id": "crown",
      "name": "Gewinn-Krone",
      "kind": "outfit",
      "emoji": "👑",
      "cost": 170,
      "level": 4
    },
    {
      "id": "rocket",
      "name": "Raketenjacke",
      "kind": "outfit",
      "emoji": "🚀",
      "cost": 220,
      "level": 5
    }
  ],
  "glossary": [
    [
      "Einzelkosten",
      "Kosten, die einem Kostenträger direkt zugerechnet werden können."
    ],
    [
      "Gemeinkosten",
      "Kosten, die einem Kostenträger nicht direkt zugerechnet werden können."
    ],
    [
      "Fixkosten",
      "Kosten, die innerhalb des betrachteten Beschäftigungsbereichs unabhängig von der Menge anfallen."
    ],
    [
      "Variable Kosten",
      "Kosten, die sich mit der Beschäftigungsmenge ändern."
    ],
    [
      "Variable Stückkosten",
      "Variable Gesamtkosten ÷ Menge; bei proportionalem Verlauf konstant."
    ],
    [
      "Fixe Stückkosten",
      "Fixkosten ÷ Menge."
    ],
    [
      "Kostenspaltung",
      "Trennung der Gesamtkosten oder Gemeinkosten in fixe und variable Bestandteile."
    ],
    [
      "Deckungsbeitrag",
      "Erlöse abzüglich variabler Kosten; Beitrag zur Fixkostendeckung und zum Gewinn."
    ],
    [
      "Stückdeckungsbeitrag",
      "Verkaufspreis abzüglich variabler Stückkosten."
    ],
    [
      "Gesamtdeckungsbeitrag",
      "Stückdeckungsbeitrag · Absatzmenge."
    ],
    [
      "Kurzfristige Preisuntergrenze",
      "Niedrigster Verkaufspreis im Modell zur Deckung der variablen Stückkosten."
    ],
    [
      "Langfristige Preisuntergrenze",
      "Preis in Höhe der gesamten Stückkosten bzw. Selbstkosten."
    ],
    [
      "Selbstkosten",
      "Sämtliche einem Kostenträger zugerechneten Kosten in der Vollkostenrechnung."
    ],
    [
      "Fixkostendegression",
      "Sinken der fixen Stückkosten bei steigender Beschäftigungsmenge."
    ],
    [
      "Zuschlagskalkulation",
      "Berechnung von Selbstkosten durch direkte Einzelkosten und Gemeinkostenzuschläge."
    ],
    [
      "Produktelimination",
      "Entscheidung über die Streichung eines Produkts aus dem Programm."
    ],
    [
      "Zusatzauftrag",
      "Zusätzlicher Auftrag bei bestehendem Produktionsprogramm."
    ],
    [
      "Opportunitätskosten",
      "Entgangener Nutzen der besten nicht gewählten Alternative."
    ]
  ],
  "checklist": [
    "Ich unterscheide Einzel- und Gemeinkosten.",
    "Ich unterscheide fixe und variable Kosten.",
    "Ich berechne variable und fixe Stückkosten.",
    "Ich ermittle Umsatz, Gesamtkosten und Betriebsergebnis.",
    "Ich berechne Stück- und Gesamtdeckungsbeiträge.",
    "Ich bestimme die kurzfristige Preisuntergrenze.",
    "Ich bestimme die langfristige Preisuntergrenze bei veränderter Menge.",
    "Ich spalte Gemeinkosten in fixe und variable Teile.",
    "Ich nutze die Zuschlagskalkulation für Preisuntergrenzen.",
    "Ich begründe Preis- und Produktentscheidungen."
  ],
  "title": "Preisgrenzen – Die LoopLab-Mission",
  "version": "1.0.0"
};
