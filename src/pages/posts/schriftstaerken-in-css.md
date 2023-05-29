---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/schriftstaerken-in-css"  
title: "Schriftstärken in CSS"
author: "Aleksej Wesselbaum"
pubDate: "2020-05-03"
categories: 
  - "css"
tags: 
  - "css"
  - "typografie"
---

## Definition von `font-weight`

In CSS kann die Schriftstärke mit der Eigenschaft `font-weight` angegeben werden. So kann mit folgender Auszeichnung bestimmt werden, dass alle Überschriften der ersten Ebene fett dargestellt werden

```
h1 {
  font-weight: bold;
}
```

## Benannte Werte

Wie im Beispiel oben können folgende Werte vergeben werden:

- normal
- bold

## Numerische Werte

Um mehr Vielfalt in die Texte zu bringen, können jedoch weitere Schriftstärken als Zahlenwerte definiert werden. Dabei dürfen Zahlen von 100 - 900 in 100er Schritten verwendet werden (100, 200, 300, ... 900).

Dabei entspricht der numerische Wert `400` dem benanntem Wert `normal` und `700` entspricht `bold`.

## Stufenwerte

Neben den festen Werten kann auch eine Abstufung zur dünneren Schriftstärke - `lighter` oder zur dickeren - `bolder` vorgenommen werden.

Dabei wird die nächste unterstützte Stärke und nicht der Numerische Wert verwendet.

### Beispiel

Eine Schriftart hat die Stärken `200`, `400` und `600` definiert.

``` css
h1 {
  font-weight: 400;
}

h1 small {
  font-size: 80%;
  font-weight: bolder;
}
```

In diesem Fall wird für `h1 small` die Schriftstärke `600` und nicht `500` verwendet, da `500` bei dieser Schriftart nicht definiert ist.

## Nicht unterstützte Werte

Ist die gewünschte Schriftstärke nicht vorhanden, so wird bis zur Schriftstärke `500` die nächst dünnere Schriftstärke verwendet. Ab `600` wird dem entgegengesetzt die nächst dickere Schriftstärke angewandt.

## Übersetzung

Da lediglich zwei benannte Werte von CSS unterstützt werden, kann es bei der Verwendung von manchen Schriften zu Verwirrung kommen. Im Folgenden liste ich die gängigen Zugehörigkeiten auf:

<table class=""><tbody><tr><td>Numerischer Wert</td><td>Bezeichnung</td></tr><tr><td>100</td><td>Thin; Hairline</td></tr><tr><td>200</td><td>Extra Light; UltraLight</td></tr><tr><td>300</td><td>Light; Book; Demi</td></tr><tr><td>400</td><td>Normal; Regular</td></tr><tr><td>500</td><td>Medium</td></tr><tr><td>600</td><td>Semi Bold; Demi Bold</td></tr><tr><td>700</td><td>Bold</td></tr><tr><td>800</td><td>Extra Bold; Black; Extra Bold</td></tr><tr><td>900</td><td>Ultra Bold, Extra Black; Heavy</td></tr></tbody></table>
