---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/sinnvolle-commit-messages-schreiben"  
title: "Sinnvolle Commit Messages schreiben"
author: "Aleksej Wesselbaum"
pubDate: "2020-04-19"
categories: 
  - "git"
tags: 
  - "commit"
  - "conventional"
  - "git"
excerpt: "Fängt man an mit _Git_ zu arbeiten, lernt man als Erstes einen Commit zu erstellen. Doch das Erste was man lernt ist leider allzu oft nicht das worauf viel geachtet wird."
---

Fängt man an mit _Git_ zu arbeiten, lernt man als Erstes einen Commit zu erstellen. Doch das Erste was man lernt ist leider allzu oft nicht das worauf viel geachtet wird.

Commit Messages - die Beschreibung dessen, was in einem Arbeitsprozess passiert ist - wird leider oftmals sehr stiefmütterlich behandelt. "Man sieht doch was da passiert", "das liest doch eh keiner" oder "warum sollte ich meine Zeit damit verschwenden da was Sinnvolles zu schreiben" sind die Aussagen die man zu hören bekommt, wenn man Autoren von unschönen Commit Messages anspricht.

## Warum ist es wichtig?

Man sollte immer wissen was in einem Commit passiert ist. Das hat viele Gründe:

- Entwickler die ebenfalls an dem Projekt arbeiten sollten anhand des Logs erkennen können, was bereits erledigt ist
- Anpassungen, die ggf. für andere Projekte sinnvoll sein können müssen als solche gut erkennbar sein, um über einen _cherry pick_ übernommen werden zu können
- Generierung von Changelogs und Reports für Kunden wird erleichtert
- Nachvollziehbarkeit, wieso etwas so umgesetzt worden ist, wie es ist
- Falsche Anpassungen können leichter gefunden und rückgängig gemacht werden

Falls die zuvor genannten Gründe nicht bereits ausreichen um sinnvolle Commits zu schreiben, so sollte man bestimmte Syntax und Semantik festlegen, um den Entwicklern die Arbeit abzunehmen, drüber nachzudenken, wie ein Commit beschrieben sein sollte.

## Syntax

Als erstes sollte man sich Gedanken über den Aufbau machen.

Natürlich kann man sich selber einen Aufbau überlegen, muss man aber nicht, denn es gibt bereits diverse Konventionen:

- [jQuery](https://contribute.jquery.org/commits-and-pull-requests/#commit-guidelines)
- [Angular.js](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)
    - [Karma](https://karma-runner.github.io/1.0/dev/git-commit-msg.html)
    - [Angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)
        - [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
- ...

Ich persönlich verwende [Conventional Commits](https://devnarrative.com/conventional-commits/) und kann das auch empfehlen, da es sich mittlerweile in viele Unternehmen als de facto Standard durchgesetzt hat.

Hat man sich auf eine Syntax einigen können, sollte man diese auch in ein Regelwerk gießen, denn nur so kann man darauf vertrauen, dass diese Syntax auch eingehalten wird. Dazu eignet sich das Tool Husky hervorragend.

## Semantik

Nachdem man sich auf das Grundgerüst geeinigt hat sollte man auch die Schreibweise und das, was man zu lesen erwartet, festlegen.

### Sprache

Wer wird die Commit Messages lesen? Ist man ausschließlich im deutschsprachigem Raum unterwegs? Wird man einen Changelog aus dem Verlauf generieren, der an den Kunden geht? Wenn ja, in welcher Sprache wird dieser erwartet?

Das sind die Fragen, die man beantworten muss, um sich auf die Sprache der Commit Messages zu einigen.

### Kopfzeile

Die erste Zeile dient dazu einen groben Überblick über das, was im Commit passiert ist, zu bekommen.

Diese sollte nicht länger als 70 Zeichen sein, da z.B. _GitLab_ und _GitHub_ in der Commit Übersicht die Headline nach 70 Zeichen auspunkten.

Auch über die Sprachgestaltung sollte man sich Gedanken machen. Auch hier gibt es keine klare Regel an die man sich halten muss. Da darf man wie bereits zuvor seinen Weg finden und diesen festhalten. Für mich ist eine Kopfzeile gut zu lesen wenn man sie in den folgenden Satz einfügen kann.

> Wenn dieser Commit angewendet wird, dann wird/werden der/die/das ... .

### Hauptbereich

Im Hauptbereich sollte man erklären, welche Komponente, wie und warum bearbeitet worden ist, falls dies nicht bereits in der Kopfzeile klar geworden ist. Hier möchte ich gerne auf ein [Extrembeispiel](https://dhwthompson.com/2019/my-favourite-git-commit) verweisen um aufzuzeigen, wie die Maximalausprägung eines guten Commits aussehen kann. Das sollte nicht als Aufforderung verstanden werden alle Commits in dieser Fülle zu beschreiben. Wenn aber Bedarf besteht sollte man sich davon nicht abschrecken lassen.

### Fußzeile

Zuletzt kann man noch Verweise, Befehle und brechende Kompatibilität (für Conventional Commits) in der Fußzeile vermerken.

Die Verweise dienen der Suchbarkeit. Bezieht sich z.B. der Commit auf ein JIRA-Ticket oder Issue, so ist hier der Platz dafür dieses zu erwähnen.

Ist Git mit JIRA verbunden, so kann man auch Befehle wie `closes ABCD-123` eingeben, um direkt das Ticket zu schließen.

Im Kontext von Conventional Commits ist der Fußbereich auch die Stelle an der man brechende Kompatibilität (Breaking Changes) beschreibt.

## Zusammenfassung

Vereint man die Syntax und die Semantik so kann ein Commit z.B. wie folgt aussehen:

```
fix(Kommentar): Metainformationen verkleinert dargestellt

Auf Mobilen Endgeräten brechen die Metainformationen um.
Die Textgröße wurde verkleinert.

Closes #7
```

In diesem Commit sieht man anhand von `fix`, dass es sich um eine Fehlerkorrektur handelt.

Darauf folgt die betroffene Komponente. Dadurch weiß man, dass es sich um eine Anpassung in der Kommentarkomponente handelt.

Anschließend wird in der Kopfzeile beschrieben, welche Anpassung vorgenommen worden ist.

Im Hauptbereich wird nochmal beschrieben warum eine Anpassung notwendig war und was passiert ist.

Im Fußbereich wird das Issue Nr. 7 geschlossen. Bei Bedarf könnte man jetzt im Git Log nach #7 suchen, falls unklar ist, was da passiert ist.

## Fazit

Man muss einmal einen Aufwand betreiben, um Regeln für die Commit Messages zu finden und technisch festzulegen. Ist das aber erledigt, wissen alle Entwickler im Team an was man sich halten muss und müssen nicht jedes mal selber überlegen wie die Nachricht zu gestalten ist.

Wenn Syntax und Semantik eingehalten werden, so lesen sich alle Commit Messages wie von einer Person geschrieben und können bei Bedarf in einen Changelog überführt werden ohne viel neu zu schreiben.
