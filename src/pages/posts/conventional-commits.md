---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/conventional-commits"  
title: "Conventional Commits"
author: "Aleksej Wesselbaum"
pubDate: "2020-03-15"
categories: 
  - "git"
tags: 
  - "changelog"
  - "commit"
  - "commitizen"
  - "commitlint"
  - "conventional"
  - "git"
  - "husky"
---

Git hat sich mittlerweile fast überall als de facto DIE Versionierungssoftware durchgesetzt. Damit ist die ehrwürdige Geschichte des Streitens über die Versionierung von Quellcode noch lange nicht zu Ende erzählt.

Der nächste Punkt, über den gut und gerne gestritten wird, ist ob es viel, wenig und welche Form der Commit Messages es braucht.

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) ist die Antwort auf die sich die meisten Entwickler einigen können.

## Was sind Conventional Commits?

Conventional Commits ist eine Reihe von Regeln, die für das Verfassen von Commit Messages gelten.

Die Struktur sieht wie folgt aus:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

### Type

Es gibt 11 definierte Commit Types. Es ist laut der Spezifikation auch möglich andere Types zu verwenden. Das Problem mit eigenen Types ist, dass wenn man sich von Tools unterstützen lässt, diese in der Regel auf die 11 Types festgelegt sind.

| Commit Type | Titel | Beschreibung |
| --- | --- | --- |
| feat | Feature | Ein neues Feature |
| fix | Bugfix | Behebt einen Bug |
| docs | Dokumentation | Änderungen die lediglich die Dokumentation betreffen |
| style | Stil | Änderungen die nicht die Bedeutung des Quellcodes verändern (Leerzeichen, Leerzeilen, Formatierung, fehlende Zeichen, ...) |
| refactor | Code Refactoring | Quellcodeanpassung, die jedoch weder ein Feature noch ein Bugfix ist |
| perf | Performance Verbesserung | Quellcodeanpassung, die die Performance verbessert |
| test | Tests | Fügt fehlende Tests hinzu oder berichtigt bestehende |
| build | Builds | Veränderung von Build Tools oder externen Abhängigkeiten (z.B. gulp, grunt, npm) |
| ci | Continuous Integrations | Veränderung der CI Konfigurationen und Scripts (z.B. Travis, Circle, BrowserStack) |
| chore | Housekeeping | Andere Änderungen, die weder den Code noch Tests verändern |
| revert | Reverts | Rückgängig machen vorheriger Commits |

### Scope optional

Durch den Scope gibt man mehr Kontext zur Umsetzung.

Arbeitet man Modul-basiert, so kann man das Modul als Scope verwenden.

### Description

Eine kurze Beschreibung dessen, was angepasst worden ist.

Tipp: Wenn man **und** in der Description verwendet, sollte man 2 Commits daraus machen.

### Body optional

Im Body kann man ausführlich darauf eingehen was und wieso angepasst worden ist.

### Footer optional

In den Footer gehören kompatibilitätsbrechende Änderungen, die mit `BREAKING CHANGE: Beschreibung` gekennzeichnet werden, oder Verweise und Anpassungen zu Tickets (z.B. "Fixes #13" oder "Closes #13")

## Warum braucht man Conventional Commits?

Mit all der Komplexität die zuvor vorgestellt worden ist sollte man sich natürlich die Vorteile von Conventional Commits einmal genauer ansehen.

### Einheitliche Struktur im Team

Wenn man sich im Team auf Conventional Commits geeinigt hat, sollte man nach kurzer Eingewöhnungszeit eine einheitliche Struktur in den Commit Messages wiederfinden.

Das ist z.B. dann vorteilhaft, wenn in "Modul X" ein Fehler auftritt und man zurückverfolgen muss, wann das Modul angepasst worden ist. Wenn alle Entwickler Conventional Commits verwendet haben kann man entweder die letzten Commits überfliegen oder filtern und sieht auf Anhieb, welche Commits den Fehler verursacht haben könnten.

### Aussagekräftigere Commits

Beim Erstellen eines Commits muss sich jeder Entwickler zunächst die Frage stellen, welcher Type und dann welcher Scope zu verwenden ist.

Alleine durch diese Fragestellung sollte man bereits zu große Commits erkennen können, wenn z.B. sowohl Bugfixes, als auch Features in einem Schritt eingebaut worden sind. Ebenso wird verhindert, dass mehrere Module in einem Commit verändert werden.

Diese Trennung hat im Nachgang den Vorteil, dass z.B. das Cherry Pick und Revert einzelner Commits viel effizienter werden.

Natürlich braucht das ganze Disziplin, damit nicht commits wie der Folgende herauspurzeln `feat: diverse Anpassungen`.

### Generierung von Changelog

Möchte man anhand der Commit Messages einen Changelog erstellen, so bietet Conventional Commit eine Struktur an der manuell oder automatisch Changelogs erstellt werden können.

Möchte man mit seinem Changelog nah am Standard bleiben, so bietet sich [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog) an.

Wenn man die Ausgabe weiter angepasst haben möchte, so kann man [conventioal-git-log](https://github.com/wesselbaum/conventional-git-log) verwenden, um z.B. die Autoren mit auszugeben (_schamlose Eigenwerbung_).

## Die Lernkurve

Am Anfang ist es nicht immer leicht festzulegen, um welchen Type oder Scope es sich gerade handelt. Mit der Zeit wird das aber immer einfacher und irgendwann weiß man automatisch was man einzugeben hat.

## Welche Unterstützung gibt es?

Wie bereits erwähnt ist Conventional Commits ein so weit verbreiteter Standard, dass es auch mittlerweile einige Tools für das Erstellen und Verifizieren von Commit Messages gibt.

### [commitizen](https://github.com/commitizen/cz-cli)

Erstellt man seine Commit Messages über die Konsole, so kann man commitizen nutzen, um sich die Felder von Conventional Commit auswählen zu lassen.

### [commitlint](https://github.com/conventional-changelog/commitlint#what-is-commitlint)

Man verwendet commitlint um sicherzustellen, dass die Commit Messages auch Conventional Commit entsprechen.

Man kann es für sich alleine verwenden um z.B. auf der Konsole das Schreiben von Conventional Commit Messages zu lernen oder in Kombination mit anderen Tools.

### [husky](https://github.com/typicode/husky)

Husky bietet die Möglichkeit git hooks in Projekten zu verwalten. In Kombination mit commitlint können die Commit Messages überprüft werden, bevor ein Commit von git angenommen wird. So kann sichergestellt werden, dass im git Verlauf nur noch Conventional Commits landen.

## Fazit

Am Anfang der Verwendung von Conventional Commit kann der Aufwand unnötig und unverhältnismäßig erscheinen. Nach kurzer Dauer aber schon muss man sich viel weniger Gedanken machen wie man seine Commit Messages denn eintippen möchte und fängt an klar getrennte und saubere Commits zu erstellen.
