---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/git-status-fuer-unterordner-anzeigen-lassen"  
title: "Git Status für Unterordner anzeigen lassen"
author: "Aleksej Wesselbaum"
pubDate: "2022-02-03"
categories: 
  - "git"
  - "tooling"
  - "workflow"
tags: 
  - "git"
  - "tools"
---

Arbeitet man mit vielen Projekten kann es mal passieren, dass man mit der Arbeit fertig ist, aber das Commiten bzw. Pushen in der Hektik des Alltags untergeht. Möchte man dann sicherstellen das alle Projekte auf dem Git Server angekommen sind, muss man in jedes Projekt navigieren und mit `git status` den aktuellen Zustand abfragen.

## Lösung mit Clustergit

[Clustergit](https://github.com/mnagel/clustergit) ist eine Kommandozeilenanwendung mit der man den Git Status der Unterordner mit nur einem Befehl abfragen kann.

### Installation

Als erstes muss das Projekt mittels Git geklont werden. In diesem Beispiel wird das Projekt in das Benutzerverzeichnis abgelegt.

```
cd ~
git clone https://github.com/mnagel/clustergit.git
```

Anschließend muss das Script zur Pfadvariable hinzugefügt werden. Das geht Beispielsweise in der Datei `~/.bashrc` indem man folgendes Ergänzt

```
export PATH="~/clustergit:$PATH"
```

Zum Schluss sollte die Konsole neu gestartet werden.

### Verwendung

Im Einfachsten fall führt man den Befehl `clustergit` nun in einem Verzeichnis dessen Unterordner Projekte mit Git sind aus. Die Optionen können [hier](https://github.com/mnagel/clustergit#options) nachgeschlagen werden.

#### Prüfung beim Start der Konsole

![](../../../public/images/Clustergit-initial.png)

Um regelmäßig den aktuellen Stand der Projekte abzufragen habe ich folgende Zeile in der Datei `~/.bashrc` ergänzt:

```
clustergit -qHd /pfad/zu/projekten --print-asap
```

Es wird mit der Option `d` der Pfad zum Ordner mit Projekten angegeben.

Mit `q` werden die Startausgaben und mit `H` die "sauberen" Projekte ausgeblendet.

Die Option `print-asap` liefert die Ergebnisse sobald etwas verfügbar ist und spart die bei der Option `H` irrelevanten Zählerausgaben.
