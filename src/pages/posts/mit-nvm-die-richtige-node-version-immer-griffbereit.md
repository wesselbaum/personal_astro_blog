---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/mit-nvm-die-richtige-node-version-immer-griffbereit"  
title: "Mit NVM die richtige Node Version immer griffbereit"
author: "Aleksej Wesselbaum"
pubDate: "2020-05-16"
categories: 
  - "tooling"
tags: 
  - "node"
  - "node-js"
  - "nvm"
  - "version"
---

Aktuell kommt man als Webentwickler kaum an _Node.js_ vorbei. Wenn man bereits vor einer Weile angefangen hat mit Node zu arbeiten, kann folgende Situation eingetreten sein. Man hat ein Projekt mit Node 5 aufgesetzt und entwickelt. Anschließend sind einige Projekte vergangen und man hat Node 6, 8 und 10 für neuere Projekte installiert. Möchte man nun zum ersten Projekt zurückkehren und Anpassungen vornehmen hat man ein Problem: die installierte Node Version entspricht nicht der im Projekt verwendeten Version.

Natürlich könnte man Node.js 10 deinstallieren und dann Node.js 5 installieren. Bequem ist das aber nicht. Genau für diesen Zweck ist _NVM_ entwickelt worden.

_NVM_ ist ein Versionsmanager für _Node.js_ (**N**ode **V**ersion **M**anager). Damit ist es ohne Weiteres möglich mehrere _Node.js_ Installationen gleichzeitig zu betreiben und bei Bedarf zu wechseln.

## Installation

Die Installation ist unter Linux so simpel wie sie sie nur sein kann. Diese ist in dem [Abschnitt Installation von NVM](https://github.com/nvm-sh/nvm#install--update-script) beschrieben. Man führt den `curl` oder `wget` Befehl aus und schon ist _NVM_ installiert.

Nachdem _NVM_ installiert ist bestimmt man welche Versionen von _Node.js_ man installieren möchte. Dazu führt man `nvm install [version]` aus. Dabei ist zu beachten, dass die Version die als letztes installiert worden ist auch die Standardversion ist. Möchte man nachträglich die Standardversion verändern so führt man `nvm alias default [version]` aus.

## Verwendung

Zurück bei dem Beispielprojekt in _Node.js_ 5. Um das Projekt zum laufen zu bringen muss man zunächst _Node.js_ 5 installieren, den Standard wieder auf die aktuell verwendete Version (z.B. 10) zurücksetzen und dann im Projekt die Version 5 verwenden.

```
nvm install 5
nvm alias default 10
nvm use 5
```

Mit der Eingabe von `nvm use 5` wird für die aktuelle Session _Node.js_ 5 verwendet.

## Zusammenfassung

Verwendet man mehr als eine Version von _Node.js_ so sollte man definitiv _NVM_ installieren und verwenden.

Aber auch wenn man bei einer Version von _Node.js_ bleiben möchte kann es sinnvoll sein _NVM_ zu installieren. Dann ist der Updateaufwand deutlich geringer, da man nur `nvm install [version]` ausführen muss.
