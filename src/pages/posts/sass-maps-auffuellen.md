---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/sass-maps-auffuellen"  
title: "Sass Maps auffüllen"
author: "Aleksej Wesselbaum"
pubDate: "2020-06-14"
categories: 
  - "css"
  - "sass"
tags: 
  - "css"
  - "sass"
  - "scss"
excerpt: "Maps sind ein wunderbares Mittel in Sass um Key Value Inhalte abzubilden. Manchmal reichen die Inhalte einer Map nicht aus um das gewünschte Verhalten abzubilden. Aber zunächst die Grundlagen."
---

Maps sind ein wunderbares Mittel in Sass um Key Value Inhalte abzubilden. Manchmal reichen die Inhalte einer Map nicht aus um das gewünschte Verhalten abzubilden. Aber zunächst die Grundlagen.

## Maps in Sass

> Mit Sass können Stylesheet Autoren sogenannte Maps definieren — der Sass Term für assoziative Arrays, Hashes oder sogar JavaScript Objects. Eine Map ist eine Datenstruktur welche Keys mit Werten vereinigt. Keys und Werte können von jedem Typ, einschließlich Maps, sein. \[...\]
> 
> [https://sass-guidelin.es/de/](https://sass-guidelin.es/de/)

Oft werden Maps verwendet um Einstellungen für verschiedene Breakpoints bereitzustellen.

## Das Problem

Zu ersten Mal habe ich dieses Vorgehen gebraucht als ich den globalen Zeilenabstand (`gutter`) innerhalb eines Moduls gebraucht habe. Für gewöhnlich wird die Abstands-Map nur für die Breakpoints gepflegt. Dabei ist es üblich nur die Breakpoints zu pflegen, die unterschiedlich zum kleineren Breakpoint sind.

So kann es sein, dass man für `small`, `medium` und `xlarge` Gutter definiert hat. `large`, `xxlarge` und `xxlarge` haben aber keine Definition des Gutters.

Man gestaltet ein Modul. Das Modul wird für die diversen Breakpoints gestaltet und entsprechend wird das Gutter für den jeweiligen Breakpoint verwenden. Dadrunter können auch die nicht befüllten Breakpoints, wie z.B. `large` sein. Versucht man dann auf den Wert von `large` zuzugreifen erhält man eine Fehlermeldung, weil dieser nicht definiert ist.

## Die Umsetzung

Die Lösung des Problems sieht wie folgt aus:

```
$breakpoints: (small, medium, large, xlarge, xxlarge, xxxlarge);

$grid-column-gutter: (
  small: 20px,
  medium: 30px,
  xlarge: 50px
);

@function fillup-map($map, $desired-keys) {
  $last: '';
  $filled-up-map: ();
  @each $desired-key in $desired-keys {
    $tmp-last: map_get($map, $desired-key);
    @if($tmp-last != null) {
      $last: $tmp-last;
    }
    $new-map: map_merge($filled-up-map, ($desired-key: $last));
  }

  @return $filled-up-map;
}

@function gutter($breakpoint) {
  @return map-get(fillup-map($grid-column-gutter, $breakpoints), $breakpoint);
}

.debug {
  small: gutter(small);
  medium: gutter(medium);
  large: gutter(large);
  xlarge: gutter(xlarge);
  xxlarge: gutter(xxlarge);
  xxxlarge: gutter(xxxlarge);
}
```

Die Variable `$breakpoints` gibt alle möglichen Breakpoints an. `$grid-column-gutter` ist die Auflistung definierter Gutter werte für `small`, `medium` und `xlarge`.

Die Funktion `fillup-map` sorgt dafür, dass eine Map mit Werten befüllt wird. In dieser Funktion wird für alle Werte aus der `$breakpoints` liste einmal überprüft, ob zum aktuellen Wert auch ein Eintrag in `$grid-column-gutter` vorhanden ist. Wenn kein Wert gefunden wurde wird der Wert aus der letzten Iteration verwendet.
