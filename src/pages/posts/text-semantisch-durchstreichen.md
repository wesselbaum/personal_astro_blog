---
slug: "/text-semantisch-durchstreichen"  
title: "Text semantisch durchstreichen"
author: "Aleksej Wesselbaum"
date: "2020-08-23"
categories: 
  - "html"
tags: 
  - "barrierefreiheit"
  - "html"
  - "semantik"
---

Texte durchstreichen im Web ist keine alltägliche Aufgabe. Doch wenn man dazu kommt, welches Tag ist dann zu verwenden?

Es stehen drei Tags zur Auswahl: `<strike>`, `<s>` und `<del>`. Alle diese Tags werden von den Browsern mit dem Standardstil "durchgestrichen" ausgeliefert. Doch wie unterscheiden sich diese Tags?

## `<strike>`

Bei diesem Tag handelt es sich um ein Tag, welches seit der Einführung von HTML5 nicht mehr benötigt wird. Es ist somit die schlechteste Variante einen Text durchzustreichen. Das Tag ist weder semantisch, noch ist es aktuell.

> This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.
> 
> [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike)

## `<s>`

Dieses Tag ist der Nachfolger von `<strike>`. Es streicht den Text durch, wird jedoch auch nicht von Screenreadern vorgelesen.

Es gibt jedoch die Möglichkeit mit Pseusoelementen (`::before` und `::after`) den Anfang und das Ende einer Durchstreichung anzukündigen. Dieses Vorgehen wird dann zum Problem, wenn man die Pseudoelemente für die Darstellung verwenden möchte, oder die Seite in mehreren Sprachen ausgeliefert werden soll.

## `<del>`

Mit diesem Tag gibt man dem Benutzer einer Seite Bescheid, dass ein Element entfernt ist. Dieses Element wird auch von Screenreadern unterstützt.

### `<ins>` zum Ausbessern

Wenn mit der Entfernung von Text auch eine Einfügung einher geht, so sollte man das `<ins>` Tag verwenden. So wird klar, welche Textpassagen entfernt und durch welche diese ausgetauscht werden sollen.

## Zusammenfassung

Wenn es semantisch angebracht ist, weil zum Beispiel Inhalt entfernt wird, sollte man `<del>` und in allen anderen Fällen `<s>` verwenden.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="wesselbaum" data-slug-hash="BajOMXw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Text durchstreichen"><span>See the Pen <a href="https://codepen.io/wesselbaum/pen/BajOMXw">Text durchstreichen</a> by wesselbaum (<a href="https://codepen.io/wesselbaum">@wesselbaum</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
