---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/jedes-stylesheet-braucht-einen-shame-bereich"  
title: "Jedes Stylesheet braucht einen \"Shame\" Bereich"
author: "Aleksej Wesselbaum"
pubDate: "2020-02-02"
categories: 
  - "css"
tags: 
  - "code"
  - "code-qualitaet"
  - "css"
  - "lint"
  - "qualitaet"
  - "sass"
  - "scss"
---

_In diesem Artikel beziehe ich mich auf CSS bzw. SCSS. Das Prnzip kann auf weitere Bereiche übertragen werden._

Jeder ist bestrebt guten Quellcode zu schreiben. Dazu gehört, dass der Quellcode so funktioniert, wie man es von ihm erwartet, richtig formatiert ist, den Code Richtlinien folgt und mit Sicherheit einiges mehr.

Manchmal jedoch schafft man es nicht sich an alle Zielvorstellungen zu halten. Genau dann braucht man einen _Shame_ Bereich.

## Was ist ein Shame Bereich

Der _Shame_ Bereich ist am Ende des Dokuments zu finden. Er ist ein klar durch einen Kommentar gekennzeichneter Abschnitt, in dem es erlaubt ist _schlechten_ Quellcode zu schreiben.

## Die Vorteile

### Wiederfinden

Man muss nach schlechtem Quellcode nicht mehr lange suchen. Wenn ein Modul nicht so funktioniert wie es soll, weiß man, wo man als erstes gucken muss. Das erleichtert bei einem Refactoring das Leben ungemein.

### Beschreibung

Man sollte sich angewöhnen, zu jedem Logischen Block eine Erklärung zu schreiben, welche Regel warum verletzt worden ist. Ggf. sollten noch Tipps für die _richtige_ Umsetzung gegeben werden.

### Bewusstsein schaffen

Der Bereich sollte möglichst drastisch heißen, wie eben z.B. _Shame_. Das führt dazu, dass man zwei mal drüber nachdenkt, ob man wirklich keine _saubere_ Alternative zu seinem Quellcode finden kann. So ist es mir teilweise passiert, dass ich Code im _Shame_ Bereich geschrieben habe und dann beim Schreiben der Beschreibung gemerkt habe, dass das sehr wohl anders und sauber funktioniert. Das wäre mir ohne den _Shame_ Bereich nicht aufgefallen.

<iframe src="https://giphy.com/embed/vX9WcCiWwUF7G" width="480" height="270" frameborder="0" class="giphy-embed" allowfullscreen></iframe>

[via GIPHY](https://giphy.com/gifs/mrw-mods-bethesda-vX9WcCiWwUF7G)

Zusätzlich kann es dazu führen, dass Personen die sehr viel in den _Shame_ Bereich schreiben sich über Ihre Unzulänglichkeiten klar werden und ggf. gegensteuern.

## Anwendungsfälle

### Strukturfehler

Man hat sich auf die BEM Methodik geeinigt, muss aber zwangsweise verschachteln um ein Element anzusprechen. Das passiert manchmal wenn man (teilweise) keinen Einfluss auf die HTML Struktur nehmen kann.

### Fehlendes Wissen

Manchmal weiß man, dass das was man gerade definiert falsch ist, jedoch fehlt (noch) das technische Know How um es richtig zu gestalten.

### Fehlende Zeit

Manchmal ist es so, dass man für einen Release keine Zeit mehr für sauberen Code hat. Auch dann sollte der schnell eingetippte Bereich nicht mit dem sauberem Quellcode vermischt werden.

## Tipps

### Beschreibung hervorheben

Manche Entwicklungsumgebungen bieten einem die Möglichkeit eigene "ToDo's" zu definieren. Dadurch können diese farbig hervorgehoben werden. Viel wichtiger jedoch ist, dass wenn man eine Datei mit einem ToDo eincheckt, man noch einmal gefragt wird, ob man nicht die ToDo erledigen möchte. Als Bonus können die ToDos dann gruppiert durchsucht werden.

### Linter ausschalten

Je nach dem wie der Linter eingestellt ist, kann es Sinn machen die angemerkten Fehler auszuschalten ([Beispiel für sass-lint](https://github.com/sasstools/sass-lint/blob/develop/README.md#disabling-linters-via-source)). Wirft z.B. der Linter Fehler in der Konsole, so würden die bereits bekannten _Shame_ Bereich Fehler bei ausreichender Größe neue Fehler überdecken, was kontraproduktiv wäre.

## Fazit

Ein _Shame_ Bereich tut niemandem weh und bringt diverse Vorteile mit sich. Im schlimmsten Fall landet der ganze Quellcode im _Shame_ Bereich und nachfolgende Entwickler wissen was sie erwartet. Im besten Fall gibt es nur einen Kommentar im Fußbereich der Datei und der Quellcode entspricht den Richtlinien.
