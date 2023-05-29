---
slug: "/farben-benennen"  
title: "Farben benennen"
author: "Aleksej Wesselbaum"
date: "2021-03-28"
categories: 
  - "css"
  - "sass"
tags: 
  - "css"
  - "scss"
---

Es gibt laut Phil Karlton zwei komplizierte Dinge die Programierern begegnen.

> There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.
> 
> **Phil Karlton**

Das Benennen von Dingen soll aber ab jetzt ein wenig einfacher werden.

## Wofür überhaupt benennen?

Beim Erstellen von Webseiten arbeitet man oft mit Preprozessoren wie SASS und Less. Diese bieten die Möglichkeit Variablen zu erstellen damit in einem Projekt die gleiche Farbe für den gleichen Zweck verwendet wird, anstatt vieler Variationen von dieser. Das wird spätestens dann zu einem Vorteil, wenn diese Farbe verändert werden soll.

## Grundfarben

Im einfachsten Fall kommt man mit den Grundfarben wie rot, grün, gelb etc. aus. Wenn es nicht viele Variationen einer Farbe gibt, sollte man auf die Grundfarben zurückgreifen, damit man sich sehr einfach über Elemente unterhalten kann. "_Der Knopf 'abbrechen' sollte rot sein."_ ist ein Satz der einfach zu formulieren und zu verstehen ist.

## Präzise Farbnamen

Sobald es mehr Farben im Projekt gibt als man mit den Grundfarben abdecken kann sollte man sich spezifischere Namen heraussuchen.

Für diesen Zweck gibt es zum Nachschlagen zwischendurch die Seite [Name that Color](http://chir.ag/projects/name-that-color/#6195ED). Dort muss der HEX-Wert eingegeben werden und es wird ein Farbname zurückgegeben.

Benötigt man öfter Farbnamen und fühlt sich auf der Konsole wohl, kann man entsprechende NPM Module installieren.

[https://www.npmjs.com/package/@distributed/cherangi](https://www.npmjs.com/package/@distributed/cherangi)

## Farben nach Funktion

Es ergibt ebenfalls Sinn Farben nach ihrer Funktion zu benennen. Primär, Sekundär, Hintergrund, Text, Warnung etc.

Wenn ein Umfärben der Seite erfolgt, muss nicht mehr aus blau plötzlich rot werden, sondern die Primärfarbe wird angepasst.

In der Realität jedoch kommt man in der Regel nicht mit den Funktionsnamen aus und muss eine Kombination aus Farbnamen und Funktionsnamen wählen.

## Kombination

Soll es eine Kombination aus Farben nach Namen und Funktion geben, so ist ein bewährtes Vorgehen zunächst die Farben nach Namen anzulegen und diese bei Funktionen wiederzuverwenden.
