---
slug: "/mit-avn-automatisch-die-richtige-node-js-version-auswaehlen"  
title: "Mit AVN automatisch die Richtige Node.js Version auswählen"
author: "Aleksej Wesselbaum"
date: "2020-05-31"
categories: 
  - "tooling"
tags: 
  - "avn"
  - "node"
  - "node-js"
  - "npm"
  - "nvm"
  - "tools"
---

Im vorherigem Artikel habe ich bereits [_NVM_ vorgestellt](https://devnarrative.com/mit-nvm-die-richtige-node-version-immer-griffbereit/). Mit _NVM_ hat man die Möglichkeit zwischen verschiedenen _Node.js_ Versionen zu wählen. Nun muss man leider immer noch wissen welches Projekt welche _Node.js_ Version voraussetzt und manuell diese Version mit `nvm use [version]` auswählen.

Das geht aber noch komfortabler. Mit [AVN](https://github.com/wbyoung/avn) (**A**utomatic **V**ersion Swtiching for **N**ode) muss man sich auch darum nicht mehr kümmern. _AVN_ wird als [Node Modul installiert](https://github.com/wbyoung/avn#install).

Nach der Installation muss im Wurzelverzeichnis des Projekts die Datei `.node-version` angelegt werden. Darin gibt man die gewünschte _Node.js_ Version an. Bei der Version kann es sich um eine ausgeschriebene Version oder lediglich die Major Version handeln.

Navigiert man nun in das Projektverzeichnis, bekommt man die Nachricht, dass die entsprechende _Node.js_ Version ausgewählt ist und kann bedenkenlos arbeiten.
