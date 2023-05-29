---
slug: "/backstop-fuer-grosse-projekte.md"  
title: "Backstop für große Projekte"
author: "Aleksej Wesselbaum"
date: "2020-03-01"
categories: 
  - "tooling"
tags: 
  - "backstop"
  - "backstopjs"
  - "regression"
  - "test"
  - "testing"
---

Im vorherigen Artikel haben wir uns den Aufbau einer grundlegenden Struktur für Backstop angeschaut.

In diesem Artikel wird aufgezeigt wie man Backstop noch besser für große Projekte einrichtet und verwenden kann.

## Automatisches öffnen des Browsers für den Report

[GitHub Commit in dem das automatisch Öffnen des Browser abgestellt wird](https://github.com/wesselbaum/backstop-demo/commit/20b6d948d80266847048668bef616cb8f7eb57d3)

So nützlich das automatische Starten des Standardbrowsers für das Ausgeben des Reports ist, so nervig wird es, wenn man produktiv damit arbeiten möchte. Zum Glück kann man dieses Verhalten in `backstop.json` leicht verändern.

Dazu muss man lediglich unter `report` ein leeres Array anstatt `["browser"]` übergeben.

```
"report": []
```

Möchte man sich nun den Report anzeigen lassen, führt man folgenden Befehl aus:

```
backstop openReport
```

## Backstop im Projekt verwalten

[GitHub Commit, der die Backstop Befehle im Projekt verwaltet](https://github.com/wesselbaum/backstop-demo/commit/0f095fb82731faa5febd2eeccd161038cd43a817)

Damit alle Entwickler die gleiche Backstop Version verwenden und auch die gleichen (ggf. vereinfachten) Befehle ausführen (dazu später), kann man sich die NPM `package.json` zu Nutze machen.

Zunächst führt man den folgenden Befehl aus und beantwortet die Fragen, sofern das Projekt noch keine `package.json` Datei besitzt:

```
npm init
```

Anschließend sieht die `package.json` etwa wie folgt aus:

```
{
  "name": "backstop-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "backstop test"
  },
  "author": "wesselbaum",
  "license": "MIT"
}
```

Der spannende Punkt ist unter `scripts.test`. Dort wurde der bekannte Befehl `backstop test` eingetragen.

Nun kann man anstelle von `backstop test` den Befehl `npm test` eingeben und dasselbe Ergebnis erhalten. Noch ist das keine große Zeitersparnis, wird jedoch später umso wichtiger, wenn weitere Parameter an den Befehl angehängt werden.

Um das Arbeiten dann konsistent zu gestalten werde ich die weiteren Standardbefehle im `scripts` Block vermerken.

```
"scripts": {
  "test": "backstop test",
  "approve": "backstop approve",
  "reference": "backstop reference",
  "report": "backstop openReport"
}
```

Nun können die entsprechenden Befehle mittels z.B. `npm run approve` ausgeführt werden. Hierbei ist zu beachten, dass zusätzlich `run` angegeben werden muss. Das liegt daran, dass `test`ein reservierter Befehl im Gegensatz zu anderen Befehlen ist. Für mehr Konsistenz im Arbeitsalltag kann man natürlich auch Test mit `npm run test` ausführen.

## Aufteilung von Verantwortlichkeiten

[GitHub Commit in dem Javascript anstatt JSON Konfiguration verwendet wird und die Verantwortlichkeiten aufgeteilt werden.](https://github.com/wesselbaum/backstop-demo/commit/b410fc5574f1a412a30dff36e8e0d8f6b8f6c100)

In der Standardkonfiguration sind alle Einstellungen in einer Datei hinterlegt. Das ist für kleine Projekte noch wartbar, für große Projekte ist aber eine Aufteilung der Verantwortlichkeiten besser und fördert die Übersicht. Dazu wird die Kernkonfiguration von den Szenarios getrennt.

### Konfiguration in ein Node Modul auslagern

Damit man die gewünschten Optimierungen durchführen kann muss man im ersten Schritt die Konfiguration von einem JSON Dokument zu einem Node Modul portieren.

Etwas versteckt in dem Dokumentationsbereich [generating test bitmaps](https://github.com/garris/BackstopJS#generating-test-bitmaps) gibt es folgenden Tipp:

> **Tip** To use a js-module as a config file, just explicitly specify your config filepath and point to a `.js` file. _Just be sure to export your config object as a node module._
> 
> BackstopJS Readme

Mit dieser Information ergeben sich weitere Möglichkeiten.

Man legt eine neue Datei unter `backstop_data/config/config.js` an. Anschließend kopiert man den folgenden Rumpf hinein und fügen den Inhalt der `backstop.json` in die Variable `backstopConfiguration` ein.

```
let backstopConfiguration = {
// backstop.json    
};

// Ausgabe der Konfiguration in der Konsole für bessere Übersicht dessen, was am Ende als Ergebnis herauskommt
console.log('\x1b[32m', JSON.stringify(backstopConfiguration, null, 2), '\x1b[0m');
module.exports = backstopConfiguration;
```

Am Ende sollte das Ergebnis ungefähr so aussehen:

```
let backstopConfiguration = {
    "id": "Foundation Template",
    "viewports": [
        {
            "label": "phone",
            "width": 320,
            "height": 480
        },
        {
            "label": "tablet",
            "width": 1024,
            "height": 768
        },
        {
            "label": "desktop",
            "width": 1440,
            "height": 900
        }
    ],
    "onBeforeScript": "puppet/onBefore.js",
    "onReadyScript": "puppet/onReady.js",
    "scenarios": [
        {
            "label": "index",
            "url": "http://localhost:3000/index.html",
            "selectors": [
                ".top-bar",
                ".callout",
                ".blog-post",
                ".sticky-container",
                ".pagination"
            ],
            "selectorExpansion": true
        },
        {
            "label": "agency",
            "url": "http://localhost:3000/agency.html",
            "selectors": [
                ".row"
            ],
            "selectorExpansion": true
        },
        {
            "label": "news-magazine",
            "url": "http://localhost:3000/news-magazine.html",
            "selectors": [
                ".row"
            ],
            "selectorExpansion": true
        },
        {
            "label": "ecommerce",
            "url": "http://localhost:3000/ecommerce.html",
            "selectors": [
                ".row"
            ],
            "selectorExpansion": true
        },
        {
            "label": "blog",
            "url": "http://localhost:3000/blog.html",
            "selectors": [
                ".row"
            ],
            "selectorExpansion": true
        },
        {
            "label": "blog-simple",
            "url": "http://localhost:3000/blog-simple.html",
            "selectors": [
                ".row"
            ],
            "selectorExpansion": true
        },
        {
            "label": "portfolio",
            "url": "http://localhost:3000/portfolio.html",
            "selectors": [
                ".row"
            ],
            "selectorExpansion": true
        },
        {
            "label": "product-page",
            "url": "http://localhost:3000/product-page.html",
            "selectors": [
                ".row:not(.medium-up-3)"
            ],
            "selectorExpansion": true
        },
        {
            "label": "real-estate",
            "url": "http://localhost:3000/real-estate.html",
            "selectors": [
                ".row"
            ],
            "selectorExpansion": true
        },
        {
            "label": "marketing-site",
            "url": "http://localhost:3000/marketing-site.html",
            "selectors": [
                ".row"
            ],
            "selectorExpansion": true
        }
    ],
    "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test": "backstop_data/bitmaps_test",
        "engine_scripts": "backstop_data/engine_scripts",
        "html_report": "backstop_data/html_report",
        "ci_report": "backstop_data/ci_report"
    },
    "report": [],
    "engine": "chromy",
    "engineOptions": {
        "args": ["--no-sandbox"]
    },
    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 50,
    "debug": false,
    "debugWindow": false
};

console.log('\x1b[32m', JSON.stringify(backstopConfiguration, null, 2), '\x1b[0m');
module.exports = backstopConfiguration;
```

Damit die Konfiguration auch verwendet werden kann muss man nun die einzelnen Skripts `test`, `approve`, `reference` und `report` um die Angabe der Konfiguration ergänzen.

```
  "scripts": {
    "test": "backstop test --config=\"backstop_data/config/config.js\"",
    "approve": "backstop approve --config=\"backstop_data/config/config.js\"",
    "reference": "backstop reference --config=\"backstop_data/config/config.js\"",
    "report": "backstop openReport --config=\"backstop_data/config/config.js\"",
    "start": "backstop remote"
  },
```

Anschließend kann man `npm run test` ausführen und sollte die gleichen Ergebnisse wie zuvor erhalten.

Wenn das erfolgreich war, kann die `backstop.json` gelöscht werden, da diese nicht mehr verwendet wird. Außerdem werden so falsch ausgeführte Tests vermieden.

### Szenarios auslagern

Im ersten Schritt sollte man die Szenarios in eine eigene Datei auslagern. Dies hat den Hintergrund, dass die Szenarios der Bereich sind, der am häufigsten während eines Projekts angepasst wird. Die anderen Bereiche der Konfiguration hingegen sollten im Regelfall für die Weile des Projektes unverändert bestehen bleiben, um die Ergebnisse nicht zu verfälschen.

Dazu legt man eine neue Datei `backstop_data/config/scenarios.js` an. In dieser legt man den folgenden Rumpf an:

```
const baseUrl = "http://localhost:3000";

let scenarios = [
    // Szenarios aus ./config.js hier einfügen
];
module.exports = scenarios;
```

Als nächstes kopiert man das Szenarios Array aus der `config.json` in die neu angelegte Datei.

Um Redundanzen noch mehr zu minimieren sollte die Variable `baaeUrl` anstatt des Pfades verwendet werden, sodass diese wie folgt aussieht:

```
const baseUrl = "http://localhost:3000";

let scenarios = [
    {
        "label": "index",
        "url": baseUrl + "/index.html",
        "selectors": [
            ".top-bar",
            ".callout",
            ".blog-post",
            ".sticky-container",
            ".pagination"
        ],
        "selectorExpansion": true
    },
    {
        "label": "agency",
        "url": baseUrl + "/agency.html",
        "selectors": [
            ".row"
        ],
        "selectorExpansion": true
    },
    {
        "label": "news-magazine",
        "url": baseUrl + "/news-magazine.html",
        "selectors": [
            ".row"
        ],
        "selectorExpansion": true
    },
    {
        "label": "ecommerce",
        "url": baseUrl + "/ecommerce.html",
        "selectors": [
            ".row"
        ],
        "selectorExpansion": true
    },
    {
        "label": "blog",
        "url": baseUrl + "/blog.html",
        "selectors": [
            ".row"
        ],
        "selectorExpansion": true
    },
    {
        "label": "blog-simple",
        "url": baseUrl + "/blog-simple.html",
        "selectors": [
            ".row"
        ],
        "selectorExpansion": true
    },
    {
        "label": "portfolio",
        "url": baseUrl + "/portfolio.html",
        "selectors": [
            ".row"
        ],
        "selectorExpansion": true
    },
    {
        "label": "product-page",
        "url": baseUrl + "/product-page.html",
        "selectors": [
            ".row:not(.medium-up-3)"
        ],
        "selectorExpansion": true
    },
    {
        "label": "real-estate",
        "url": baseUrl + "/real-estate.html",
        "selectors": [
            ".row"
        ],
        "selectorExpansion": true
    },
    {
        "label": "marketing-site",
        "url": baseUrl + "/marketing-site.html",
        "selectors": [
            ".row"
        ],
        "selectorExpansion": true
    }
];
module.exports = scenarios;
```

Nun muss man dafür sorgen, dass die Szenarios wieder unter `config.js` eingelesen werden. Dazu fügt man die folgende Zeile an den Anfang von `config.js` ein und ersetzt das `scenarios` Array mit der Variable `scenarios`.

```
let scenarios = require('./scenarios.js');
```

Zuallerletzt sollte man noch einmal `npm run test` durchführen um sicherzustellen, das sich nichts an der Ausgabe verändert hat.

### Standardwerte festlegen

Der nächste Punkt, der die Lebensqualität deutlich erhöht, ist Standardwerte für die Szenarios an seine eigenen Bedürfnisse anzupassen. Aktuell sieht man noch, dass in der Mehrzahl der Tests im `selectors` Array nur `.row` angibt. Außerdem steht in jedem Szenario `"selectorExpansion": true`. Diese Redundanzen gilt es jetzt zu beseitigen.

Als erstes legt man eine neue Datei `backstop_data/config/defaultScenarioValues.js` an. In dieser Datei sollen alle Standardwerte für Szenarios verzeichnet werden. Wird in der `scenarios.js` einer der gesetzten Werte erneut gesetzt, so sollen die Standardwerte nicht verwendet werden.

Für die oben beschriebenen Anforderungen ergibt sich folgender Inhalt für die `defaultScenarioValues.js`

```
let defaultScenarioValues =
    {
        "selectors": [
            ".row"
        ],
        "selectorExpansion": true,
    };
module.exports = defaultScenarioValues;
```

Nun muss auch diese Datei mit dem folgendem Befehl in `config.js` eingebunden werden

```
let defaultScenarioValues = require('./default_scenario_values');
```

Anschließend müssen wie oben beschrieben Standard- und Szenario-Werte zusammengeführt werden. Dafür werden folgende Zeilen verwendet:

```
const mergedScenarios = scenarios.map(scenario => {
  return Object.assign(JSON.parse(JSON.stringify(defaultScenarioValues)), scenario);
});
```

Anschließend muss bei `scenarios` anstatt der Variable `scenarios` die Variable `mergedScenarios` verwendet werden. Letztendlich sollte die `config.js` wie folgt aussehen:

```
let scenarios = require('./scenarios.js');
let defaultScenarioValues = require('./default_scenario_values');

const mergedScenarios = scenarios.map(scenario => {
    return Object.assign(JSON.parse(JSON.stringify(defaultScenarizeilen  oValues)), scenario);
});

let backstopConfiguration = {
    "id": "Foundation Template",
    "viewports": [
        {
            "label": "phone",
            "width": 320,
            "height": 480
        },
        {
            "label": "tablet",
            "width": 1024,
            "height": 768
        },
        {
            "label": "desktop",
            "width": 1440,zeilen  
            "height": 900
        }
    ],
    "onBeforeScript": "puppet/onBefore.js",
    "onReadyScript": "puppet/onReady.js",
    "scenarios": mergedScenarios,
    "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test": "backstop_data/bitmaps_test",
        "engine_scripts": "backstop_data/engine_scripts",
        "html_report": "backstop_data/html_report",
        "ci_report": "backstop_data/ci_report"
    },
    "report": [],
    "engine": "chromy",
    "engineOptions": {
        "args": ["--no-sandbox"]
    },
    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 50,
    "debug": false,
    "debugWindow": false
};

console.log('\x1b[32m', JSON.stringify(backstopConfiguration, null, 2), '\x1b[0m');
module.exports = backstopConfiguration;
```

Zuletzt muss die `scenarios.js` von den Werten bereinigt werden, die ohnehin in der `defaultScenarioValues.js` gesetzt werden. Aufgeräumt sieht es dann in etwa so aus:

```
const baseUrl = "http://localhost:3000";

let scenarios = [
    {
        "label": "index",
        "url": baseUrl + "/index.html",
        "selectors": [
            ".top-bar",
            ".callout",
            ".blog-post",
            ".sticky-container",
            ".pagination"
        ]
    },
    {
        "label": "agency",
        "url": baseUrl + "/agency.html"
    },
    {
        "label": "news-magazine",
        "url": baseUrl + "/news-magazine.html"
    },
    {
        "label": "ecommerce",
        "url": baseUrl + "/ecommerce.html"
    },
    {
        "label": "blog",
        "url": baseUrl + "/blog.html"
    },
    {
        "label": "blog-simple",
        "url": baseUrl + "/blog-simple.html"
    },
    {
        "label": "portfolio",
        "url": baseUrl + "/portfolio.html"
    },
    {
        "label": "product-page",
        "url": baseUrl + "/product-page.html",
        "selectors": [
            ".row:not(.medium-up-3)"
        ]
    },
    {
        "label": "real-estate",
        "url": baseUrl + "/real-estate.html"
    },
    {
        "label": "marketing-site",
        "url": baseUrl + "/marketing-site.html"
    }
];
module.exports = scenarios;
```

In diesem Zustand ist für die meisten Entwickler in dem Projekt nur noch die `scenarios.js` relevant. Das beste daran ist, dass man nicht aus Versehen Konfigurationen anpasst, die sich auf alle auswirken würden. Das anzupassende Dokument ist sehr übersichtlich und neue Testfälle sind in einfachen Fällen in 4 Zeilen Code fertig erstellt.
