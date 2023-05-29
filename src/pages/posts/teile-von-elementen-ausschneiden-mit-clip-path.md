---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/teile-von-elementen-ausschneiden-mit-clip-path"  
title: "Teile von Elementen ausschneiden mit clip-path"
author: "Aleksej Wesselbaum"
pubDate: "2022-07-25"
tags: 
  - "css"
---

Wenn es früher darum ging Teile von Elementen auszuschneiden hat man oft zum Pseudo-Element als Lösung gegriffen. Dabei hat man die Pseudoelemente an den ausgeschnittenen Stellen platziert und in der Hintergrundfarbe eingefärbt.

Bei dem oben beschriebenem Vorgehen entstehen jedoch mehrere Probleme.

1. Die Pseudoelemente können nicht anderweitig verwendet und es gibt nur 2 Elemente.
2. Die Ausschnitte müssen müssen mittels Rechtecken mit abgerundeten Kanten abgebildet werden können.
3. Das Element darf keinen Schatten oder sonstige Umrandungen haben.

# Die Lösung

Mit `clip-path` lassen sich nicht nur wie in den meisten Beispielen online Figuren in der Mitte des Elements ausschneiden, sondern auch Formen entlang der Außenkante des Elements.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="MWVmBBo" data-user="wesselbaum" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"><span>See the Pen <a href="https://codepen.io/wesselbaum/pen/MWVmBBo">Teaser Cutout</a> by wesselbaum (<a href="https://codepen.io/wesselbaum">@wesselbaum</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

In dem Beispiel sieht man, wie mit etwas `calc` Berechnungen ein Ausschnitt in der unteren rechten Ecke entstanden ist.

Dabei ist zu beachten, dass der Schatten, der auf dem Element liegt durch ein umschließendes Element kommt.
