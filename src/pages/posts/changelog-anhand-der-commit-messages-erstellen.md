---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/changelog-anhand-der-commit-messages-erstellen"  
title: "Changelog anhand der Commit Messages erstellen"
author: "Aleksej Wesselbaum"
pubDate: "2020-06-07"
categories: 
  - "tooling"
tags: 
  - "npm"
  - "tools"
---

Ein Changelog beschreibt, welche Änderungen es seit dem letzten Release eines Produktes gegeben hat. Mit dessen Hilfe können die Benutzer sehen, ob sich ein Update lohnt.

Nun gibt es diverse Möglichkeiten einen Changelog zu erstellen. Man kann einerseits Tickets erstellen und anhand des Status' der Tickets einen Changelog generieren. Andererseits kann man sich auch die Commit Messages seit dem letzten Release anschauen und die Wichtigsten in den Changelog aufnehmen und um- bzw. beschreiben.

Die dritte Möglichkeit ist aus den Commit Messages einen Changelog zu erstellen.

## Voraussetzungen

Damit die Generierung verwertbare Ergebnisse hervorbringt müssen die folgenden zwei Voraussetzungen erfüllt sein:

### Branching

Der Branch, auf dem der Changelog generiert wird darf keine Zwischenstände von Bugfixes und Featureentwicklungen beinhalten. Stattdessen muss ein Commit eine für den Changelog relevante Information beinhalten. Um das zu erreichen, kann man z.B. [Git-Flow](https://www.atlassian.com/de/git/tutorials/comparing-workflows) verwenden. Dabei werden lediglich fertiggestellte Stände in den Entwicklungszweig gemerged.

### Struktur

Damit der Changelog sortiert werden kann und auch wie von einem Autor geschrieben aussieht, müssen die Commit Mesages die gleiche Struktur einhalten. Zu diesem Thema gibt es [hier bereits einen Artikel](https://devnarrative.com/sinnvolle-commit-messages-schreiben/).

## Generierung

Um nicht zu ausschweifend zu werden, wird hier angenommen, dass Conventional Commits verwendet wird. Andere Commit Message Standards können aber auch genutzt werden, um Changelogs zu generieren.

### Standard

Möchte man so nah wie möglich am Industriestandard bleiben, so kann man z.B. die NPM Bibliothek [conventional-changelog](https://www.npmjs.com/package/conventional-changelog) verwenden um Changelogs zu generieren.

### Angepasst

Besteht Bedarf für einen auf die eigenen Bedürfnisse zugeschnittenen Changelog, so kann man die Bibliothek conventional-git-log verwenden (Ich bin der Autor dieser Biblitohek). Dabei kann man selbst bestimmen, ob und wie Felder aus dem Commit ausgegeben werden. So kann auch der Autor und das Datum zusätzlich zu den Standardinformationen hinzugefügt werden.

## Vorteile

Wenn die einmalige Einrichtung und die Anpassung an die eigenen Bedürfnisse erfolgt ist, sollte nur noch wenig Aufwand für die Erstellung von Changelogs anfallen. In der Praxis entfernt man nur noch die unnötigen Commit Messages aus dem generierte Changelog und ist fertig.

Sofern alle Commit Messages korrekt erstellt worden sind ist das Erstellen sehr zuverlässig. Keine Commits werden übersehen.

## Nachteile

Wie schon am Anfang des Artikels erwähnt werden eine Branching Strategie und Commit Message Struktur vorausgesetzt um Changelogs generieren zu können. Kann man beides nicht gewährleisten können die Tools immer noch eine Hilfe sein und z.B. alle nicht der Konvention entsprechenden Commits in einen Bereich einsortieren. Das benötigt aber einiges an Nacharbeit.

Beim Schreiben der Git Logs muss bereits bedacht werden, dass daraus ein Changelog erstellt wird. So muss die Sprache der Commit Messages entsprechend gewählt werden.

Der Changelog kann sehr technisch werden, wenn dieser nicht weiter bearbeitet wird.

Kleinste Commits können im Changelog landen, wenn dieser nicht weiter bearbeitet wird.

## Schlusswort

Wenn Changelogs regelmäßig erstellt werden, oder zumindest ein Plan besteht das in Zukunft einzuführen, so sollte man sich dessen bewusst sein, dass diese auch automatisch generiert werden können.

Ob sich der Einrichtungsaufwand im Zweifel lohnt, muss von Fall zu Fall erneut evaluiert werden. Im besten Fall werden jedoch bereits Conventional Commits verwendet und man kann [conventional-changelog](https://www.npmjs.com/package/conventional-changelog) ausführen. Dann sieht man bereits, wie weit man von Zielzustand entfernt ist.
