---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/teaser-vollflaechig-verlinken"  
title: "Teaser vollflächig verlinken"
author: "Aleksej Wesselbaum"
pubDate: "2021-04-04"
categories: 
  - "css"
  - "html"
tags: 
  - "barrierefreiheit"
  - "css"
  - "html"
  - "scss"
---

Um den Besuchern einer Webseite möglichst viel Komfort zu bieten geht der Trend dazu Teaser vollflächig zu verlinken, um die Clickfläche möglichst groß und klar zu gestalten, anstatt nur den "mehr" Link als Clickfläche anzubieten.

## Das Problem

Das Problem bei diesem vorgehen ist es, dass Links auch im Teasertext vorkommen können oder sogar sollen. Es ist jedoch nicht erlaubt `<a>` Tags in andere `<a>` Tags zu verschachteln. Wird das Problem nicht behandelt und es kommen doch Links innerhalb von Links vor, so treffen die Browser eigene Entscheidungen, wie mit dem HTML umzugehen ist. So wird z.B. das Element beim äußeren Link geöffnet aber beim inneren Link geschlossen, sodass das Design in der Regel bricht.

## Die Lösung

Um dieses Problem zu Lösen habe ich das Modul mit dem Namen `c-full-link` ins Leben gerufen. Dieses behandelt mehrere Schichten des Problems und in vier Teillösungen aufgesplittet.

Als Basis für das Modul wird das CodePen [Material Design Card (Simple) von Travis Williamson](https://codepen.io/travisw/pen/xOvJYQ) verwendet.

<p class="codepen" data-height="540" data-theme-id="light" data-default-tab="result" data-user="travisw" data-slug-hash="xOvJYQ" style="height: 540px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Material Design Card (Simple)"><span>See the Pen <a href="https://codepen.io/travisw/pen/xOvJYQ">Material Design Card (Simple)</a> by Travis Williamson (<a href="https://codepen.io/travisw">@travisw</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Überlagerung

Als erstes wird eine Überlagerung über die komplette Fläche benötigt. Dazu legt man einen absolut positionierten Link innerhalb eines relativ positionierten Elternelementes ab. Dadurch ist nun über dem gesamten Teaser ein Link.

<p class="codepen" data-height="540" data-theme-id="light" data-default-tab="result" data-user="wesselbaum" data-slug-hash="RwKboMM" style="height: 540px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Material Design Card (Simple) - c-full-link - 1"><span>See the Pen <a href="https://codepen.io/wesselbaum/pen/RwKboMM">Material Design Card (Simple) - c-full-link - 1</a> by wesselbaum (<a href="https://codepen.io/wesselbaum">@wesselbaum</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Beinhaltende Elemente clickbar gestalten

Durch die Überlagerung geht nun die Interaktion mit den Kindselementen verloren. Um das zu beheben muss der Überlagerung und den interaktiven Elementen ein `z-index` gegeben werden.

<p class="codepen" data-height="540" data-theme-id="light" data-default-tab="result" data-user="wesselbaum" data-slug-hash="wvgwoEN" style="height: 540px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Material Design Card (Simple) - c-full-link - 2"><span>See the Pen <a href="https://codepen.io/wesselbaum/pen/wvgwoEN">Material Design Card (Simple) - c-full-link - 2</a> by wesselbaum (<a href="https://codepen.io/wesselbaum">@wesselbaum</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Hauptlink

Im nächsten Schritt muss definiert werden, bei welchem der Links es sich um den Hauptlink handelt. Dieser wird mit der Klasse `c-link__main-link` versehen. Anschließend muss dafür gesorgt werden, dass die Aktivzustände der Elementlinks auf den Hauptlink übertragen werden, sobald es Interaktionen mit dem vollflächigen Link gibt.

Zusätzlich sollte der Hauptlink keine Interaktionen mit der Maus anbieten, da die Clickfläche bereits durch den `c-full-link__link` gegeben ist. Das ist vor allem dann wichtig, wenn weitere Elemente einen Aktivzustand haben. Solche Elemente können z.B. die Titelzeile mit einer Unterstreichung o.Ä. sein.

<p class="codepen" data-height="540" data-theme-id="light" data-default-tab="result" data-user="wesselbaum" data-slug-hash="QWdLGPL" style="height: 540px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Material Design Card (Simple) - c-full-link - 3"><span>See the Pen <a href="https://codepen.io/wesselbaum/pen/QWdLGPL">Material Design Card (Simple) - c-full-link - 3</a> by wesselbaum (<a href="https://codepen.io/wesselbaum">@wesselbaum</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Barrierefreiheit

Für die Barrierefreiheit ist es wichtig, an welcher Stelle der `c-full-link__link` im Quellcode positioniert ist.

#### Hauptlink vorhanden

Wenn ein Hauptlink vorhanden ist, so sollte `c-full-link__link` als erstes Kindelment von `c-full-link` sich befinden mit den Attributen `aria-hidden="true" tabindex="-1"`. Dadurch wird der Link nicht bei der Bedienung mit der Tastatur ausgewählt oder vorgelesen, jedoch kann der Hauptlink eine Animation erhalten, da er eines der Geschwisterelemente ist, oder darin beinhaltet wird.

<p class="codepen" data-height="537" data-theme-id="light" data-default-tab="result" data-user="wesselbaum" data-slug-hash="WNReRPo" style="height: 537px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Material Design Card (Simple) - c-full-link -4"><span>See the Pen <a href="https://codepen.io/wesselbaum/pen/WNReRPo">Material Design Card (Simple) - c-full-link -4</a> by wesselbaum (<a href="https://codepen.io/wesselbaum">@wesselbaum</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

#### Kein Hauptlink vorhanden

Wenn kein Hauptlink vorhanden ist, so sollte `c-full-link__link` als letztes Kindelement von `c-full-link` sich befinden und zwar ohne weitere Attribute. Das hat den Hintergrund, dass dieser Link weiterhin mit der Tastatur anwählbar und von Screenreadern vorgelesen werden soll. Die Aktivzustände sollten dann auf `c-full-link__link` liegen.

### Kompromiss

Leider kommt die Lösung nicht ohne eine Einschränkung. Dadurch, dass der Link über dem Inhalt liegt, können nur interaktive Elemente in den Vordergrund gebracht werden. Dadurch ist der normale Fließtext für die Benutzer der Seite nicht auswähl- und kopierbar.
