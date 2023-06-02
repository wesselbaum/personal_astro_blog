---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/zeilenumbruch-mit-flex-erzeugen"  
title: "Zeilenumbruch mit Flex erzeugen"
author: "Aleksej Wesselbaum"
pubDate: "2020-07-26"
categories: 
  - "css"
  - "sass"
tags: 
  - "css"
  - "flex"
  - "scss"
excerpt: "Wenn es darum geht Elemente anzuordnen ist Flex-box ein sehr mächtiges Werkzeug. Leider gibt es aber keine Möglichkeit zu bestimmen, welches Element das Letzte in einer Zeile sein soll."
---

Wenn es darum geht Elemente anzuordnen ist Flex-box ein sehr mächtiges Werkzeug. Leider gibt es aber keine Möglichkeit zu bestimmen, welches Element das Letzte in einer Zeile sein soll.

## Das Problem

Im folgendem CodePen sind 2 50%, 4 33% und 2 50% breite Elemente. Das Ziel ist es nach dem letzten 33% breiten Element einen Zeilenumbruch zu erzeugen.

<p class="codepen" data-height="550" data-theme-id="light" data-default-tab="css,result" data-user="wesselbaum" data-slug-hash="BajPBRw" style="height: 550px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="BajPBRw"><span>See the Pen <a href="https://codepen.io/wesselbaum/pen/BajPBRw">BajPBRw</a> by wesselbaum (<a href="https://codepen.io/wesselbaum">@wesselbaum</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Die Lösung

Um einen Zeilenumbruch zu erzwingen wird ein 100% breites und 0px hohes Element mit der Klasse `break` hinter das letzte 33% Element eingefügt.

<p class="codepen" data-height="550" data-theme-id="light" data-default-tab="html,result" data-user="wesselbaum" data-slug-hash="LYGBPZY" style="height: 550px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="LYGBPZY"><span>See the Pen <a href="https://codepen.io/wesselbaum/pen/LYGBPZY">LYGBPZY</a> by wesselbaum (<a href="https://codepen.io/wesselbaum">@wesselbaum</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
