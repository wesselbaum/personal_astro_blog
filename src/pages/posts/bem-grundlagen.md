---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/bem-grundlagen"  
title: "BEM Grundlagen"
author: "Aleksej Wesselbaum"
pubDate: "2020-09-20"
categories: 
  - "css"
  - "sass"
tags: 
  - "bem"
  - "css"
  - "scss"
excerpt: "BEM ist eine Methode zur Strukturierung von CSS Stylesheets. Was BEM im Detail ist und wo die Vorteile sind wird in diesem Artikel beschrieben."
---

BEM ist eine Methode zur Strukturierung von CSS Stylesheets. Was BEM im Detail ist und wo die Vorteile sind wird in diesem Artikel beschrieben.

## Wofür steht BEM?

Als Erstes die Basis - BEM steht für **B**lock **E**lement **M**odifier. Dabei handelt es sich um die drei Säulen der Benamung von Klassen im BEM Kontext.

Um das Ganze etwas plastischer zu gestalten werde ich das BEM Prinzip anhand eines Termins in einer Kalender-App darstellen.

![](../../../images/schedule_application.png)

Veröffentlich auf [dribbble.com](https://dribbble.com/shots/5707404-Schedule-Application?utm_source=Clipboard_Shot&utm_campaign=JPstyle&utm_content=Schedule%20Application&utm_medium=Social_Share) - Schedule Application  
by [Jack W.](https://dribbble.com/JPstyle) for [Queble](https://dribbble.com/queble)

Im Detail interessieren uns die einzelnen Termine

![](../../../images/image-1.png)

## Aufbau

Ein BEM Selektor ist wie folgt aufgebaut `.block__element--modifier`

### Block

Ein Block kann als eine Modulbezeichnung verstanden werden. In diesem Beispiel würde man ein Modul namens `appointment` anlegen.

### Element

Ein Element ist ein Bestandteil eines Blocks. In dem Beispiel kann man folgende Elemente identifizieren:

- Titel - `appointment__title`
- Zeit - `appointment__time`
- Dauer - `appointment__duration`
- Wiederholung - `appointment__repeatition`
- Ort - `appointment__place`
- Teilnehmer - `appointment__participant`
- Tags - `appointment__badge`
- Bearbeiten Button - `appointment__edit-button`

Neben den offensichtlichen Elementen kann es notwendig sein zusätzliche strukturierende Elemente hinzuzufügen. In diesem Fall gibt es noch folgende Elemente:

- Hauptbereich - `appointment__main`
- Seitenbereich - `appointment__aside`
- Fußbereich - `appointment__footer`
- Details - `appointment__details`

Nur weil Elemente ineinander verschachtelt werden ergibt es meistens keinen Sinn das im Selektor abzubilden. Nur weil z.B. die Dauer im Details Bereich untergebracht ist sollte der Selektor trotzdem nicht `appointment__details-duration` heißen. Der Hauptgrund dafür ist, dass bei diesem Selektor eine starke Bindung an den Details Bereich stattfinden würde. Wenn in einer späteren Anpassung der Details Bereich entfernt werden sollte steht `appointment__duration` immer noch als eigenständiges Element für sich da und kann an einer anderen Stelle wiederverwendet werden.

### Modifier

Ein Modifier wird benutzt um eine abweichende Darstellungsart zu kennzeichnen.

Der erste Termin ist rot und wird als Standardfall gesehen - `appointment`. Der zweite Termin ist blau und bekommt die Klassen `appointment appointment--blue`. Ein Modifier darf nicht für sich alleine stehen, sondern nur mit dem Standardfall zusammen. Der dritte Termin bekommt einen weiteren Modifier `appointment appointment--purple`.

Modifier dürfen sowohl an einen Block als auch an ein Element gehangen werden. Es sind mehrere Modifier je Element zulässig. Für die Übersichtlichkeit sollte jedoch die Anzahl der Modifier je Element so klein wie möglich gehalten werden.

Müssen Elemente anhand von Modifiern angepasst werden, so kann es sinnvoll sein eine Variable mit dem Blockselektor anzulegen (`$el: &`).

## Beispiel

In folgendem Codepen sind alle zuvor besprochenen Details zu sehen.

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="css,result" data-user="wesselbaum" data-slug-hash="KKzQNLR" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="BEM Beispiel"><span>See the Pen <a href="https://codepen.io/wesselbaum/pen/KKzQNLR">BEM Beispiel</a> by wesselbaum (<a href="https://codepen.io/wesselbaum">@wesselbaum</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Im Codepen sollte besonders die Verwendung von `$el` und die mühelose Schreibweise von BEM in Kombination mit SCSS beachtet werden.

## Vorteile

### Wiederverwendbarkeit

Ein Modul ist in sich geschlossen und kann in der Regel ohne Probleme von einem Projekt in ein anderes übernommen werden. Wenn Wiederverwendbarkeit im Vordergrund steht empfiehlt sich eine intensive Verwendung von Variablen, um möglichst einfach Module in andere Projekte zu übernehmen.

### Spezifizität

Der Selektor ist relativ unspezifisch. Block, Element und Modifier haben stets die Spezifizität von `0 1 0`. Bei Verschachtelung von Modifier und Elementen kann die Spezifizität auf `0 2 0` erhöht werden.

Diese niedrigen Spezifizitäten können bei Bedarf sehr einfach überschrieben werden und man weiß zu jedem Zeitpunkt mit welcher Spezifizität man es zu tun hat.

## Zusammenfassung

Das Strukturieren von CSS mittels BEM erfordert einiges an Eingewöhnung. Ist der erste Schritt einmal getan, so skaliert das Vorgehen für alle Projekte, von klein bis riesig. Die Benamung gibt eine Struktur und alle Entwickler wissen wann welches Element ein Bestandteil von etwas größerem ist. Einzelne Module sind gut gekapselt und können in andere Projekte übernommen werden. Die Spezifizität ist meistens klar und die Regeln können bei Bedarf mit wenig Aufwand und vor allem ohne `!important` überschrieben werden.
