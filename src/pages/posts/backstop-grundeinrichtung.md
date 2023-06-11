---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/backstop-grundeinrichtung"  
title: "Backstop Grundeinrichtung"
author: "Aleksej Wesselbaum"
pubDate: "2020-02-23"
categories: 
  - "tooling"
tags: 
  - "backstop"
  - "backstopjs"
  - "regression"
  - "test"
  - "testing"
excerpt: "## Vorbereitung"
---

## Vorbereitung

Um den ganzen Artikel etwas plastischer zu gestalten werde ich das Thema anhand der [HTML Templates von Foundation for Sites](https://foundation.zurb.com/templates.html) durchgehen. Dabei handelt es sich um exemplarisch gestaltete Webseitenlayouts für verschiedene Anwendungsfälle.

![Foundation HTML Templates](../../../images/Bildschirmfoto-vom-2019-12-30-um-16.34.40-768x1024.png)

Foundation HTML Templates

Zusätzlich füge ich ein Stylesheet `custom.css` hinzu, um Veränderungen herbeizuführen.

Dadurch ergibt sich folgende Baumstruktur:

```
.
|__news-magazine.html
|__ecommerce.html
|__blog.html
|__blog-simple.html
|__portfolio.html
|__custom.css
|__product-page.html
|__real-estate.html
|__marketing-site.html
|__index.html
|__agency.html
```

_Zusätzlich gibt es bei Abschnitten in denen Anpassungen vorgenommen werden Verweise auf entsprechende [Commits in einem Backstop Demo Projekt](https://github.com/wesselbaum/backstop-demo/)._

## Installation

Am einfachsten startet man mit Backstop indem man es global über npm installiert. Dazu führt man den folgenden Befehl aus:

```
npm install backstopjs --global
```

Anschließend kann man die Installation mit `backstop -v` überprüfen. Als Ergebnis sollte die aktuelle Version von Backstop ausgegeben werden. Zum jetzigen Zeitpunkt ist die aktuellste Version `BackstopJS v4.4.2`.

Wenn die Installation erfolgreich war kann Backstop in jedem Verzeichnis ausgeführt werden.

## Live Server

Nachdem Backstop global installiert ist kann mit dem folgenden Befehl ein HTTP Server mit dem Port 3000 in diesem Verzeichnis gestartet werden.

```
backstop remote
```

Es können auch Dateipfade aus dem Betriebssystem verwendet werden. In der Praxis hat man für gewöhnlich einen Browsersync oder eine Live Seite. Backstop kann alle Pfade aufrufen, die auch der Browser aufrufen kann.

## Grundeinrichtung

Zunächst muss eine Grundeinrichtung für Backstop erfolgen. Dazu führt man in dem Projektverzeichnis den folgenden Befehl aus. Damit wird Backstop in einer Standardkonfiguration eingerichtet.

```
backstop init
```

Anschließend sieht das Projektverzeichnis wie folgt aus:

```
.
|__news-magazine.html
|__backstop_data
| |__engine_scripts
| | |__chromy
| | | |__onReady.js
| | | |__onBefore.js
| | | |__loadCookies.js
| | | |__clickAndHoverHelper.js
| | |__cookies.json
| | |__imageStub.jpg
| | |__puppet
| | | |__overrideCSS.js
| | | |__onReady.js
| | | |__onBefore.js
| | | |__loadCookies.js
| | | |__interceptImages.js
| | | |__ignoreCSP.js
| | | |__clickAndHoverHelper.js
|__ecommerce.html
|__blog.html
|__blog-simple.html
|__portfolio.html
|__custom.css
|__product-page.html
|__real-estate.html
|__marketing-site.html
|__backstop.json
|__index.html
|__agency.html
```

Es wurden ein `backstop_data` Verzeichnis und `backstop.json` Dokument angelegt. Damit kann nun Backstop verwendet werden.

Übrigens: Backstop Testfälle müssen nicht zwangsläufig im Projektverzeichnis definiert werden, jedoch macht eine Koppelung von dem Projekt und den Testdokumenten in den meisten Fällen Sinn.

## Backstop.json Verstehen

Im letzten Schritt ist die Datei `backstop.json` angelegt. Hier sieht man die komplette Konfiguration:

```
{
  "id": "backstop_default",
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
    }
  ],
  "onBeforeScript": "puppet/onBefore.js",
  "onReadyScript": "puppet/onReady.js",
  "scenarios": [
    {
      "label": "BackstopJS Homepage",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "https://garris.github.io/BackstopJS/",
      "referenceUrl": "",
      "readyEvent": "",
      "readySelector": "",
      "delay": 0,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": 0,
      "selectors": [],
      "selectorExpansion": true,
      "expect": 0,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions": true
    }
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/enanzen Artikel etwas plastischer zu gestalten werde ich das Thema anhand der HTML Templates von Foundation for Sites durchgehen. Dabei handelt es sich um exemplarisch gestaltete Webseitenlayouts für verschiedene Anwendungsfälle.gine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
```

### `id`

Gibt den Präfix für die erstellten Screenshots an

### `viewports`

Legt fest, welche Auflösungen getestet werden sollen. Dabei müssen folgende Punkte beachtet werden:

- `label` wird dem Screenshot Namen angehängt, um diesen zuordnen zu können.
- `width` gibt die Breite des ViewPorts an, bei der die Screenshots aufgenommen werden.
- `height` gibt die Höhe des ViewPorts an, bei der die Screenshots aufgenommen werden.
    - Dabei ist zu beachten, dass die Höhe nur relevant ist, wenn es sich bei dem Selektor um `body` handelt. Hat man einen mehr spezifischen Selektor, so wird die Höhe des Elementes verwendet, anstatt das Element bei der Höhe des ViewPorts abzuschneiden.

### `scenarios`

Hierbei handelt es sich um ein Array von Objekten. Ein Szenario beschreibt eine Seite, ihre Elemente und Aktionen. Dabei gibt es [verschiedene Einstellungen](https://github.com/garris/backstopjs#advanced-scenarios) für die einzelnen Szenarios. Diese sind gut dokumentiert. Hier gehe ich auf die Wichtigsten ein:

- `label` gibt die Bezeichnung für das Szenario an. Die Bezeichnung wird an den Screenshot Namen angehängt.
- `url` gibt die URL an, unter welcher man die Screenshots machen möchte
- `selectors` legt die Selektoren fest. Dabei schreibt man die Selektoren, wie man sie in CSS und JS auswählen würde.

### `engine`

Legt fest, welche Browser Engine verwendet werden soll. Der Standardwert ist `puppeteer`, er kann aber auch gegen `chromy` ausgetauscht werden. In der Praxis kann man bei der Einrichtung die beiden Engines austauschen und schauen, ob eine davon bessere Ergebnisse (schnellere Tests, bessere Darstellung, kosntant bleibende Screenshots, …) liefert und dann bei dieser bleiben.

### `engineOptions`

Hier können diverse Einstellungen für die jeweiligen Engines eingetragen werden. Ein Anwendungsfall wäre z.B. die Print Version einer Seite testen zu wollen.

### `asyncCaptureLimit`

Legt fest, wie viele Browser gleichzeitig aufgerufen werden können. Bei diesem Wert gibt es keine feste Zahl die ich empfehlen könnte. Meine Handlungsempfehlung wäre es, den schwächsten Computer zu finden, der die Backstop Tests durchführen muss, niedrig anzufangen und dann die Zahl so lange hochzudrehen bis dieser überfordert ist.

### `asyncCompareLimit`

Legt fest, wie viele Screenshots gleichzeitig verglichen werden können. Hier gibt es die gleiche Handlungsempfehlung wie bei `asyncCaptureLimit`.

### alles Andere

Die restlichen Optionen sollten für gewöhnlich nicht angepasst werden. Bei Bedarf findet man aber auf der [github Seite von Backstop](https://github.com/garris/backstopjs) zu fast allen Optionen eine Erklärung.

## Testfälle Schreiben

Nachdem wir nun wissen was die einzelnen Optionen bewirken, können wir damit anfangen diese für unseren Anwendungsfall anzupassen.

Als erstes sollte man die `id` zu etwas Aussagekräftigem wie in diesem Fall zu `Foundation Template` ändern.

Anschließend könnte man einen weiteren `viewport` wie z.B. `desktop` mit einer Breite von 1440px hinzufügen.

Zusätzlich habe ich die Option `enginge` auf `chromy` umgestellt, da diese für mich zuverlässigere Testergebnisse liefert.

### Szenarios

Nun kommt der spannende Teil. Die Szenarios sind nämlich alles das, was wir testen wollen.

Dazu sammelt man zunächst alle Seiten die man testen möchte.

Fangen wir mit `index.html` an.

![Seitenstruktur](../../../images/page_structure.png)

Seitenstruktur

Auf dieser Seite sollen die wichtigsten Elemente getestet werden. Das sind die Navigation, das Callout, die einzelnen Artikel, die Seitenleiste und die Pagination.

Dafür würde das Szenario wie folgt aussehen:

```
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
}
```

Hierbei ist zu beachten, dass die Option `selectorExpansion` auf `true` gesetzt ist. Das ist wichtig, weil der Standardwert `false` dafür sorgt, dass lediglich das erste Vorkommen des Selektors für die Tests verwendet wird.

Anschließend geht man alle Seiten nacheinander durch und erstellt alle relevanten Testfälle, sodass die Datei `backstop.json` am Ende ungefähr wie folgt aussieht. Die nachfolgenden Szenarios wurden soweit vereinfacht, dass die Selektoren lediglich als `.row` dargestellt worden sind. Für echte Testfälle sollte man aber ein wenig mehr Arbeit investieren, um möglichst kleinteilige Testfälle zu erhalten.

```
{
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
  "report": ["browser"],
  "engine": "chromy",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
```

## Workflow

### Grundlage schaffen

[GitHub Commit für die Initialeinrichtung](https://github.com/wesselbaum/backstop-demo/commit/310192ba0275cfcf0080d41f101dd61ec8f498e7)

Nachdem die Testfälle stehen kann man nun mit dem Arbeiten beginnen.

Im ersten Schritt führt man den Befehl `backstop test` aus.

![BackstopJS erster Durchlauf](../../../images/Bildschirmfoto-vom-2019-12-30-um-20.47.37-768x1024.png)

BackstopJS erster Durchlauf

In der Konsole bekommt man eine Fehlermeldung und der Standardbrowser öffnet sich. Sowohl auf der Konsole als auch im Browser sieht man, dass alle Tests fehlgeschlagen sind. Das liegt daran, dass noch keine Referenzbilder vorliegen. Man sollte sich alle erstellten Screenshots anschauen und wenn das dem entspricht was man erwartet führt man `backstop approve` aus. um die Screenshots als Referenzbilder festzulegen. Führt man nun erneut `backstop test` aus, sollten keine Fehler mehr auftreten.

Somit haben wir eine Ausgangsbasis mit der wir arbeiten können.

### Tägliches Arbeiten

[GitHub commit für Anpassungen](https://github.com/wesselbaum/backstop-demo/commit/7d5e39a53a887ac0228f32e720956deb74c6ffee)

Für das Beispiel soll die `custom.css` mit folgendem CSS ergänzt werden:

```
a {
  padding-left: 4px;
}
```

Das führt dazu, dass alle Links um 4px nach rechts rutschen. Nun führt man den Befehl `backstop test` aus.

Es kann sein, dass die Anpassungen im Code keine Auswirkungen auf das Aussehen der Seite haben und es keine fehlgeschlagenen Tests gibt. Der Normalfall jedoch ist, dass Tests fehlschlagen. Dann geht man in die Übersicht von Backstop und schaut sich an, ob die Änderungen fehlerhaft sind. Wenn diese genauso gewollt sind, führt man `backstop approve` aus und akzeptiert die Testscreenshots. Ansonsten wird der Quellcode angepasst.

In dem Beispiel schlagen einige Testfälle fehl. Das liegt daran, dass die Linkverschiebung erkannt worden ist. Diese Veränderung war genau so zu erwarten und der Testfall wird mit `backstop approve` akzeptiert.

#### Versionierung

Man arbeitet oftmals mit mehreren Personen und der Unterstützung von Versionierungssoftware (von nun an wird Git als Beispiel verwendet) an Projekten.

Dann muss als erstes die Entscheidung getroffen werden, ob die Referenzbilder mit versioniert werden sollen oder nicht.

Beide Vorgehen haben Vor- und Nachteile.

- Referenzbilder versionieren
    - Vorteile
        - Man muss nicht selber vor dem Entwickeln sicherstellen, dass die Referenzbilder aktuell sind
    - Nachteile
        - Verschiedene Software (Backstop, Browser, Betriebssystem, …) können unterschiedliche Screenshots produzieren die miteinander verglichen werden und fehlgeschlagene Tests erzeugen
        - Wenn ein Entwickler beim einchecken keine Referenzbilder erzeugt hat, so werden die Testfälle von dem Vorentwickler erst nach der Entwicklung angezeigt und man kann die Anpassungen nicht zuordnen
- Referenzbilder nicht versionieren
    - Vorteile
        - Immer gleiche Software und somit gleiche Screenshots
        - Man ist nicht von der Arbeit Anderer abhängig
    - Nachteile
        - Bevor man anfängt zu arbeiten muss man zunächst den aktuellen Stand als Referenz erzeugen

Nachdem man diese Entscheidung getroffen hat, kann man den in `backstop.json` angegebenen `paths.bitmaps_reference` Pfad ignorieren, falls man die Referenzen nicht versionieren möchte.

Falls man die Referenzen nicht versioniert, kann man mit dem Befehl `backstop reference` die Screenshots in einem Schritt testen und akzeptieren.

So ergeben sich folgende zwei Vorgehensweisen:

- Referenzbilder versionieren
    1. `git pull`
    2. (Buildprozess)
    3. Entwicklung
    4. `backstop test`
        - Wenn nicht das gewünschte Ergebnis den Quellcode anpassen
    5. `backstop approve`
    6. Quellcode und Referenzbilder commiten und pushen
    7. Zu Schritt 1
- Referenzbilder nicht versionieren
    1. `git pull`
    2. (Buildprozess)
    3. `backstop reference`
    4. Entwicklung
    5. `backstop test`
        - Wenn nicht das gewünschte Ergebnis den Quellcode anpassen
    6. `backstop approve`
    7. Quellcode commiten und pushen
    8. Zu Schritt 1

## Zusammenfassung

Wenn man diesem Beitrag gefolgt ist, so ist man jetzt bereit um mit Backstop zu arbeiten. Für große Projekte kann die Einrichtung von Backstop noch weiter optimiert werden. Diesem widmen wir uns in dem nächsten Teil der Backstop Serie.
