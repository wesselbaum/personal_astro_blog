---
layout: ../../layouts/MarkdownPostLayout.astro
slug: /animation-vs-transition  
title: Animation vs Transition
author: Aleksej Wesselbaum
pubDate: "2020-03-29"
categories: 
  - "css"
tags: 
  - "animation"
  - "css"
  - "scss"
  - "transition"
---

In CSS gibt es grundlegend zwei Möglichkeiten Elemente zu animieren: `animation` und `transition`. In diesem Artikel schauen wir uns an, welche Eigenschaft welche Vorteile hat und wann man welche verwenden sollte.

## Animation

> **CSS Animationen** ermöglichen animierte Übergänge von einem CSS Style zum nächsten. Die Animationen bestehen aus zwei Komponenten: Einem Style, der die Animation beschreibt, sowie einem Set von Keyframes, dass Start, Ende und Zwischenpositionen der Animation festlegt.
> 
> [MDN](https://developer.mozilla.org/de/docs/Web/CSS/CSS_Animations/CSS_Animationen_nutzen)

### Start

Die Animation startet beim Laden der Seite. Ist die Animation nicht unendlich, so wird diese nur einmal ausgeführt und ggf. nie gesehen.

### Verwendung & Komplexität

Die Komplexität ist eher hoch einzuschätzen. Im einfachsten Fall muss man ein `@keyframes` Block mit einem Namen definieren. In diesem werden mindestens `from` und `to` Blöcke definiert, die den Start und Endzustand beschreiben. Anschließend muss im Zielelement die Dauer `animation-duration` und der Name des `@keyframes` als `animation-name` mitgegeben werden.

Ein großer Vorteil von `animation` ist, dass auch feinere Abstufungen, als `from` und `to`, sondern auch Prozentwerte (10% von 1s entspricht dann 100ms) verwendet werden können. Damit sind auch vor- und zurück Bewegungen etc. möglich.

Ein weiterer Vorteil (den ich persönlich noch nie ausgenutzt habe) ist es, das `@keyframes` wiederverwendet werden kann und sich somit positiv auf die CSS Größe auswirken kann.

### Stolperfallen

Es gibt eine [Liste der Eigenschaften](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties), die als `transition-property` verwendet werden können. Diese Liste ist nicht unveränderlich.

1. Als Eselsbrücke kann man sich merken, dass Eigenschaften die numerisch darstellbar sind auch als `transition-property` verwendet werden können, `auto` aber in der regel nicht.

## Transition

Transition wird immer dann verwendet, wenn man bei einer Zustandsänderung von einer Darstellung zu einer anderen in einem Zeitfenster kommen möchte.

> Transitions ermöglicht die Definition von Übergängen zwischen zwei Zuständen eines Elementes. Verschiedene Zustände können mit der [Pseudoklasse](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) definiert werden, wie zum Beispiel [`:hover`](https://developer.mozilla.org/de/docs/Web/CSS/:hover) oder [`:active`](https://developer.mozilla.org/de/docs/Web/CSS/:active) oder dynamisch durch JavaScript.
> 
> [MDN](https://developer.mozilla.org/de/docs/Web/CSS/transition)

### Start

Transition startet bei einer Zustandsveränderung, wie z.B. Aktivzustände oder durch JavaScript hinzugefügte Klassen.

### Verwendung & Komplexität

Bei `transition` ist die Komplexität eher gering einzuschätzen. Im einfachsten Fall kann man mittels `transition-duration: .4s;` bereits fertig sein. In dem Minimalbeispiel helfen uns die [Initialwerte](https://developer.mozilla.org/en-US/docs/Web/CSS/transition#Specifications) einen Übergang von einem Zustand in den Anderen für alle veränderten Eigenschaften innerhalb von 400ms ohne Verzögerung durchzuführen.

### Stolperfallen

1. Man sollte `transition` bereits im Startzustand definieren.
    1. Wird `transition` im Zielzustand definiert, so gibt es einen Übergang von Ziel zu Start aber nicht von Start zu Ziel
2. Es gibt eine [Liste der Eigenschaften](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties), die als `transition-property` verwendet werden können. Diese Liste ist nicht unveränderlich.
    1. Als Eselsbrücke kann man sich merken, dass Eigenschaften die numerisch darstellbar sind auch als `transition-property` verwendet werden können, `auto` aber in der regel nicht.

## Empfehlung

Hat man einen eine Zustandsänderung, welche ein Element vom Zustand A zum Zustand B verändern soll, so sollte man `transition` verwenden, da es sehr einfach zu schreiben und verstehen ist.

Möchte man eine aufwendige Animation, welche mehr als 2 Zustände beinhaltet, so sollte (oder muss) man zu `animation` greifen.
