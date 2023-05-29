---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/einheitliche-animationen-erstellen"  
title: "Einheitliche Animationen erstellen"
author: "Aleksej Wesselbaum"
pubDate: "2022-01-10"
categories: 
  - "css"
  - "sass"
tags: 
  - "css"
  - "performance"
  - "scss"
---

Damit eine Webseite oder App gut aussieht werden heutzutage viele Animationen mit der `transition` Property verwendet. Doch damit es wirklich rund wirkt sollten die Animationen bis auf wenige Ausnahmen die gleiche Dauer und das gleiche Timing haben. Die Frage wie man das in großen Projekten sicherstellen kann wird in diesem Artikel beantwortet.

## SASS Variablen

Die erste Möglichkeit sicherzustellen, dass die `transition` durchgehend gleich ist wäre Variablen anzulegen und zu verwenden.

```
// Setzen
$default-transition-duration: 200ms;
$default-transition-timing: ease-in-out;
$default-transition-delay: 0ms;
$default-transition: $default-transition-duration $default-transition-timing $default-transition-delay;

// Verwenden von $default-transition
.menu {
  transition: transform $default-transition;
  // transition: transform 200ms ease-in-out 0ms;
}

// Verwendung von einzelnen Properties
.hamburger {
  transition-duration: $default-transition-duration;
  // transition-duration: 200ms;
}
```

Dieses Vorgehen funktioniert sehr gut. Jedoch gibt es ein Problem: es wird bei häufiger Verwendung sehr viel identischer Quellcode produziert.

```
.menu {
  transition: transform $default-transition, width $default-transition, height $default-transition, padding $default-transition, margin $default-transition, top $default-transition;
  // transition: transform 200ms ease-in-out 0ms, width 200ms ease-in-out 0ms, height 200ms ease-in-out 0ms, padding 200ms ease-in-out 0ms, margin 200ms ease-in-out 0ms, top 200ms ease-in-out 0ms;
}
```

Wenn abzusehen ist, dass das zu einem (Performance-)Problem werden könnte, so sollte man die nächste Lösung wählen.

## Globales setzen von Animationen

Bei diesem Vorgehen ist die Idee für alle Elemente (`*`) einmalig die Eigenschaften `transition-duration`, `transition-timing` und `transition-delay` zu setzen und anschließend nur noch die `transition-property` anzugeben.

```
*,
*::before,
*::after {
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  transition-delay: 0;
  transition-property: none;
}

.menu {
  transition-property: transform, width, height, paddding, margin, top;
}
```

Dieses Vorgehen ist von mir getestet worden und führte zu keinen Problemen. Die Hürde hierbei ist allen beteiligten Entwicklern mitzuteilen, dass die `transition-property` zu verwenden ist.

## Zusammenfassung

Damit Animationen einheitlich dargestellt werden sollte man sich im Voraus Gedanken machen, ob und wenn ja mit welcher der beiden beschriebenen Strategien man das sicherstellen möchte. Natürlich kann man auch die beiden Strategien kombinieren und beim globalen Setzen von Animationen bereits Variablen verwenden und diese bei Bedarf an anderen Stellen wiederverwenden.
