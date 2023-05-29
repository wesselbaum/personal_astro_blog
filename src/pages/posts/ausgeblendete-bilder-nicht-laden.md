---
layout: "../../layouts/MarkdownPostLayout.astro"
title: "Ausgeblendete Bilder nicht laden"
author: "Aleksej Wesselbaum"
pubDate: "2020-08-16"
categories: 
  - "css"
  - "html"
tags: 
  - "css"
  - "html"
  - "performance"
---

Es gibt immer wieder den Anwendungsfall Bilder auszublenden. Wenn das Ausblenden mit `display: none` erfolgt gibt es den großen Nachteil, dass das Bild trotzdem vom Browser heruntergeladen wird.

Die folgende Idee kam mir beim Lesen des Artikels [How CSS display:none Affects Images on Page Load](https://medium.com/better-programming/css-how-css-display-none-affects-images-on-page-load-dbdf1aaea820). Dort werden zwei Lösungen für dieses Problem aufgezeigt:

1. Bilder sollen erst dann im DOM auftauchen, wenn sie auch wirklich benötigt werden. Es gibt Frameworks und mit Sicherheit auch Javascript Bibliotheken, die das auf eine einfache Art und Weise erreichen lassen.
2. Die Bilder als Hintergrundbilder verwenden.

Mit keiner der beiden Lösungsansätzen bin ich aber zufrieden. Wenn nicht bereits Frameworks im Einsatz sind die das Nachladen von Bildern ermöglichen, erscheint es mir als wenig sinnvoll Frameworks dafür einzubinden oder Bibliotheken hinzuzufügen. Beides bringt eine Datenmenge mit sich, die im Zweifel höher ist als die Bilder die nicht geladen werden.

Das Problem mit den Hintergrundbildern ist die fehlende Semantik. Hintergrundbilder haben keinen `alt` Tag und können nicht sehenden Benutzern nicht einfach zugänglich gemacht werden.

## Die Lösung

Mit der Annahme, dass je nach Bildschirmauflösung Bilder angezeigt oder ausgeblendet werden, kann man sich das `picture` Tag zunutze machen. Für die Bereiche, in denen das Bild ausgeblendet wird (auch mit `display:none`), wird eine `source` hinzugefügt, die mittels einer Media Query ein 1x1 transparentes png Bild lädt. Dadurch wird anstatt des großen nur ein winziges Bild geladen. Wird das 1x1 Bild immer wieder für diesen Anwendungsfall verwendet, wird es trotzdem nur einmal heruntergeladen.

### Beispiel

Es soll ein Bild bis 600 Pixel breite angezeigt werden, anschließend keins bis 1024 Pixel. Ab dann wird ein anderes, hochauflösendes Bild verwendet.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="wesselbaum" data-slug-hash="rNeemqa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Hide Image"><span>See the Pen <a href="https://codepen.io/wesselbaum/pen/rNeemqa">Hide Image</a> by wesselbaum (<a href="https://codepen.io/wesselbaum">@wesselbaum</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
