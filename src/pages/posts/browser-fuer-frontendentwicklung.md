---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/browser-fuer-frontendentwicklung"  
title: "Browser für Frontendentwicklung"
author: "Aleksej Wesselbaum"
pubDate: "2020-11-15"
tags:
  - "Tools"
excerpt: "Bei der Frage nach der Browserwahl geht es weniger um richtig oder falsch, sondern eher um Gewohnheit. In diesem Artikel möchte ich jedoch aufzeigen welche Feature für mich den Ausschlag machen den einen oder anderen Browser zu verwenden."
---

Bei der Frage nach der Browserwahl geht es weniger um richtig oder falsch, sondern eher um Gewohnheit. In diesem Artikel möchte ich jedoch aufzeigen welche Feature für mich den Ausschlag machen den einen oder anderen Browser zu verwenden.

## Welche Browser stehen zur Auswahl?

Im Prinzip gibt es aktuell nur zwei Browser: Chrome und Firefox. Der Internet Explorer wird nicht mehr weiterentwickelt, aber auch während er entwickelt worden ist, hätte ich keine Empfehlung dafür ausgesprochen.

### Firefox

Beim Firefox gibt es die Auswahl der Version: Man kann sich für den ganz normalen Release entscheiden, den man beim [Download von Firefox](https://www.mozilla.org/de/firefox/new/) erhält.

Alternativ kann man sich für die [ESR Version](https://www.mozilla.org/de/firefox/enterprise/) entscheiden. ESR steht für Extended Support Release und bedeutet in der Praxis nicht so häufige Updates wie bei der normalen Version dafür jedoch ist die ESR Version besonder stabil im vergleich zu anderen.

Die letzte Variante die man sich installieren kann ist die [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Diese wird mit dunklen Design ausgeliefert und bekommt 12 Wochen früher die neusten Features verglichen mit der Standardversion. Das kommt aber auch mit Einschränkungen: Es gibt teilweise Täglich Updates und der Browser ist weniger stabil.

### Chrome

Bei Chrome hat man deutlich mehr Auswahl, vor allem ist man nicht auf einen Anbieter eingeschränkt, sondern kann aus einer Vielzahl wählen. Das liegt daran, dass die Chromium Basis für Browser-Entwickler zur Verfügung steht und man um diese Herum das UI bauen kann.

Die bekanntesten Vertreter sind Google Chrome, Microsoft Edge und Brave. Für den Endbenutzer sehen die Browser unterschiedlich aus, die Entwicklerwerkzeuge haben jedoch sehr große Überschneidungen.

\[Screenshot Chrome, Edge und Brave Dev Tools\]

### Fokus

In diesem Artikel werden Firefox in der Standardedition und Google Chrome verglichen. Diese Auswahl sollte auch die meisten Frontendentwickler abbilden.

## Funktionalitäten

Nun geht es darum herauszufinden welcher der beiden Browser mehr Funktionalitäten für den Frontendentwickleralltag mit sich bringt.

### Überschneidungen

Es gibt sehr viele Bereiche in denen sich beide Browser sehr ähnlich sind. Dazu zählen z.B. das Untersuchen des DOM, Netzwerküberwachung, Anschauen und Setzen von Cookies etc. Diese dinge

### Nur Chrome

#### **Kontrast bei Auswahl**

![Kontrastanzeige bei der Auswahl](./images/Kontrast-1.jpeg)

Kontrastanzeige bei der Auswahl

Kontrastverhältnis von Text zum Hintergrund ist enorm wichtig, damit der Text für möglichst viele Menschen gut lesbar ist. Chrome macht es einfach herauszufinden welcher Kontrast aktuell gegeben ist. Man hovert das Element welches einen mit dem Auswahlwerkzeug und bekommt den aktuellen Kontrast.

#### Text- und Boxschatten

![](./images/c_shadow_1.jpeg)

Chrome - Hover Regel

Hovert man bei Chrome in einem Regelbereich unten rechts über die drei Punkte bekommt eine eine Auswahl von nützlichen Tools.

![](./images/c_shadow_2.jpeg)

Darunter sind auch Text- und Boxschatten. Damit kann man sehr schnell Schatten erzeugen ohne sich Gedanken über die Reihenfolge der Parameter zu machen.

#### Fokusmodus

![](./images/cc_focus.jpeg)

Chrome - Emulate a focused page

Es gibt immer wieder das Problem, dass man ein fokussiertes Element untersuchen möchte. Untersucht man das Element dann in den Tools geht der Fokus verloren.

Mit `STRG + SHIFT + p` und der Eingabe `focus` kann man den Eintrag _Emulate a focused page_ auswählen. Dann bleiben Elemente beim Untersuchen fokussiert.

#### Lighthouse

![](./images/c_lighthouse.jpeg)

Chrome - Lighthouse

Lighthouse ist das Tool schlechthin um die Performance einer Seite zu untersuchen. Es gibt Lighhouse zwar auch als einen Webdienst, jedoch ist das Aufrufen von Lighthouse direkt aus den Devtools um einiges komfortabler.

### Nur Firefox

#### Flex Unterstützung

![](./images/ff_flex.jpeg)

Firefox - Flex Unterstützung Highlights

Firefox hat eine hervorragende Unterstützung für die Arbeit mit `display: flex`. Im DOM wird angezeigt, wenn ein Element auf Flex gesetzt ist. Beim Click auf den "flex"-Button werden Außenlinien und Zwischenräume der Kindselemente hervorgehoben. Zusätzlich werden in der rechten spalte die Richtung, Umbruchverhalten und die Kindselemente angezeigt.

#### Grid Unterstützung

![](./images/ff_grid.jpeg)

Firefox - Grid Unterstützung Highlights

Ähnlich wie bei Flex ist auch die unterstützung von `display: grid`. Zusätzlich zu den bei Flex genannten Features werden auch bei Bedarf die Zeilen- und Spaltennummern (vor und rückwärts) angezeigt und das Grid nochmal in der rechten Spalte aufgemalt.

#### CSS Anpassungen

![](./images/ff_aenderungen.jpeg)

Firefox - Änderungen

Hat man Änderungen am den Styles im Browser vorgenommen, so kann man sich alle Anpassungen anzeigen lassen. Zusätzlich gibt es die Möglichkeit diese zu kopieren und die entsprechende CSS Datei wird ebenfalls angezeigt.

#### Zweispaltige Darstellung

Wie schon in den Bildschirmfotos zuvor sieht man, dass die Übersichtlichkeit von der zweispaltigen Darstellung enorm profitiert.

#### Events im DOM

![](./images/ff_events.jpeg)

Firefox - Events im DOM

Sind Events auf einem DOM Element werden diese ähnlich wie bei Flex und Grid hervorgehoben. Beil Click auf den "event"-Button erhält man dann eine Übersicht der registrierten Eventlistener mit Informationen zu dazugehörigem Javascript.

#### Schriftarten

![](./images/ff-fonts.jpeg)

Firefox - Schriftarten

Untersucht man ein Element erfährt man in einer aufgeräumten Darstellung wie die Schriftart sich zusammensetzt. Wenn etwas an der Schriftart nicht passt kann man sehr komfortabel mit den Werten rumspielen und das gewünschte Ergebnis finden.

Dieser Reiter ist auch dann sehr nützlich, wenn man sich nicht sicher ist, welche Schriftart auf den Text wirkt. Auch wenn im CSS Steht, dass Schrift A geladen werden soll, dies aber nicht passiert, bekommt man hier die tatsächlich verwendete Schriftart angezeigt.

Klappt man zusätzlich "Alle Schriftarten der Seite" auf, bekommt man - wie der Name schon sagt - eine Übersicht der verwendeten Schriftarten mit den zugehörigen Schriftstärken.

#### Absolute Positionierung

![](./images/ff_absolute.jpeg)

Firefox - Absolute Positionierung

Werden Elemente absolut positioniert, zeigt Firefox im Bereich Box-Modell neben den Werten von den einzelnen Seiten auch zusätzlich das nächste Elternelement unter `position > Versatz` an, an dem sich das Element ausrichtet.

Zusätzlich kann man die Positionierung mittels Click auf das Icon vor **absolute** per Drag & Drop anpassen.

#### `transform` Unterstützung

![](./images/transform.jpeg)

Firefox - Transform

Werden Elemente mit `transform` angepasst, können mittels hover auf `transform` das Ursprungselement und seine Positionierung angezeigt werden.

#### `transition-timing-function` Unterstützung

![](./images/transition-editor.jpeg)

Firefox - transition-timing-function Unterstützung

Nach einem Click auf das Icon vor einer `transition-timing-function` bekommt man ein Fenster in dem man zwischen verschieden Verläufen auswählen und diese anpassen kann.

## Zusammenfassung

Die Basis ist bei beiden Browsern gleich und der Unterschied liegt in den kleinen, aber feinen Unterschieden. Ich persönlich benutze Firefox in der Standardversion. Die Features wie die Flex- und Gridunterstützung waren initial ausschlaggebend zu Firefox zu wechseln, die weiter aufgeführen Feature sind anschließend ins Auge gefallen.

Es ist durchaus möglich, dass meine Einschätzung durch die einseitige Nutzung von Firefox etwas verzerrt ist und vergleichsweise wenige Alleinstellungsmerkmale für Chrome sprechen. Nichts desto trotz kann man sich die Features anschauen und den richtigen Browser für die eigenen Bedürfnisse aussuchen.

Habe ich bei der Auflistung wichtige Merkmale vergessen? Dann schreib es in die Kommentare!
