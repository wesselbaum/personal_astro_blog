---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/transparenz-in-farbverlaeufen"  
title: "Transparenz in Farbverläufen"
author: "Aleksej Wesselbaum"
pubDate: "2020-10-18"
categories: 
  - "css"
  - "sass"
tags: 
  - "css"
  - "scss"
excerpt: "Es gibt viele Anwendungsfälle für Farbverläufe, welche teilweise transparent dargestellt werden. Jedoch gibt es ein Problem mit Safari, und somit auch iOS, welches man immer bedenken muss."
---

Es gibt viele Anwendungsfälle für Farbverläufe, welche teilweise transparent dargestellt werden. Jedoch gibt es ein Problem mit Safari, und somit auch iOS, welches man immer bedenken muss.

In der Erwartung sieht das Ergebnis von einem Farbverlauf von rot zu transparent auf einem rosa Hintergrund wie folgt aus:

![](https://ambientimpact.com/sites/default/files/styles/content_image_large/public/paragraphs/images/safari_fade_to_transparent_gradient_works.png?itok=yvOjiz8W)

Farbverlauf Erwartungshaltung - [ambientimpact.com](https://ambientimpact.com/web/snippets/safari-bug-with-gradients-that-fade-to-transparent)

Entgegen der Erwartungshaltung verhält sich der Farbverlauf unter Safari und iOS jedoch wie folgt:

![](https://ambientimpact.com/sites/default/files/styles/content_image_large/public/paragraphs/images/safari_fade_to_transparent_gradient_bad.png?itok=F1VpuBas)

Farbverlauf Safari - [ambientimpact.com](https://ambientimpact.com/web/snippets/safari-bug-with-gradients-that-fade-to-transparent)

Der Verlauf zu Grau kommt daher, dass Safari für Transparenz schwarz und nicht zu weiß verwendet. Das Interessante an diesem Verhalten ist, dass beide Varianten korrekt sind. Sowohl die wie erwartet angewandte transparenz in Chrome, Firefox und co. als auch der Verlauf zu schwarz von Safari. Die CSS Color Level 3 Spezifikation gibt Folgendes als Grundlage für die Browser:

> _transparent_
> 
> Fully transparent. This keyword can be considered a shorthand for **transparent black, rgba(0,0,0,0)**, which is its computed value.
> 
> [w3.org - CSS Color Level 3](https://www.w3.org/TR/css-color-3/#transparent)

Das bedeutet das in der Spezifikation explizit der Verlauf zu Schwarz zu erwarten wäre.

## Die Lösung

Zu Glück gibt es eine Lösung für dieses Problem. Anstatt das Ende des Verlaufs als `transparent` anzugeben, sollte man die Anfangsfarbe mit dem Alpha-Wert von 0 setzen.

### CSS

```
background: linear-gradient(
  to bottom,
  #ff0000,
  rgba(255, 0, 0, 0)
)
```

SCSS

```
background: linear-gradient(
  to bottom,
  #ff0000,
  rgba(#ff0000, 0);
)
```

CSS ab Color Module Level 4

```
background: linear-gradient(
  to bottom,
  #ff0000,
  color(#ff0000 alpha(0%))
)
```

Leider ist [Color Module Level 4](https://drafts.csswg.org/css-color/#colorunits) noch ein Arbeitsentwurf und somit kaum unterstützt.

## Zusammenfassung

Was auf den ersten Blick wie ein Bug aussieht kann eine andere - nicht weniger korrekte - Interpretation derselben Spezifikation sein. Glücklicherweise gibt es für diese Inkonsistenz eine Lösung.

Das größte Problem bei diesem Verhalten ist, das Entwickler unter Linux und Windows dieses Verhalten teilweise erst durch den Kunden aufgezeigt bekommen die dann unter iOS und OSX die Ergebnisse sich anschauen.
