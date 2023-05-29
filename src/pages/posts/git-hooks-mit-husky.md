---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/git-hooks-mit-husky"  
title: "Git Hooks mit Husky"
author: "Aleksej Wesselbaum"
pubDate: "2020-04-26"
categories: 
  - "javascript"
  - "tooling"
tags: 
  - "commit"
  - "conventional"
  - "git"
  - "hook"
  - "hooks"
  - "husky"
---

## Was sind git hooks

Mit _Git Hooks_ hat man die Möglichkeit vor und nach bestimmten Schritten im Git Prozess einzugreifen und zusätzliche Skripte auszuführen, Dateien anzupassen und Commits abzubrechen. Bei Interesse kann man [hier noch mehr über Git Hooks](https://blog.seibert-media.net/blog/2015/12/02/software-entwicklung-mit-git-lokale-git-hooks-teil-1/) erfahren.

## Wieso braucht man ein weiteres Tool

Das Problem mit _Git Hooks_ ist, dass diese nicht in einem Projekt abgelegt und in anderen Umgebungen wiederverwendet werden. Aus diesem Grund wird ein Tool benötigt, welches genau das machen kann. Das ist zum Beispiel dann nützlich, wenn man sich auf bestimmte Konventionen geeinigt hat und sicherstellen möchte, dass diese auch eingehalten werden.

## Was kann Husky

Mit [Husky](https://github.com/typicode/husky) kann man sehr bequem _Git Hooks_ versionieren. Dazu legt man im einfachsten Fall in der `package.json` des Projekts einen neuen Bereich an und gibt dort die gewünschten Hooks und Skripte an.

_Husky_ unterstützt alle [git-scm Dokumentierten Hooks](https://git-scm.com/docs/githooks).

## Beispiel anhand von Conventional Commit Message

Um das Ganze plastischer zu gestalten wird im Folgendem gezeigt, wie man die Einhaltung von [Conventional Commits](https://devnarrative.com/conventional-commits/) mit Husky einfordern kann.

### Installation

Neben Husky wird _CommitLint_ zum Überprüfen der _Commit Message_ verwendet. Als Erstes werden diese beiden Tools im Projekt installiert.

```
npm i --save-dev @commitlint/cli @commitlint/config-conventional husky 
```

### Konfiguration

Man könnte einen `husky` Bereich in der `package.json` einführen. Meine Empfehlung ist es aber, eine `.huskyrc.json` Datei im Wurzelverzeichnis anzulegen und dort die Konfiguration einzufügen. Dadurch wird die `package.json` nicht unnötig aufgebläht und man weiß sofort, dass und wo _Husky_ konfiguriert ist. Die Konfiguration sieht wie folgt aus:

```
{
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

Damit wird ausgedrückt, dass bei der _Git Hook_ `commit-msg` der Befehl `commitlint -E HUSKY_GIT_PARAMS` ausgeführt wird. Damit _commitlint_ auch _Conventional Commits_ überprüft muss noch eine Datei `commitlint.config.js` ebenfalls im Wurzelverzeichnis mit folgendem Inhalt angelegt werden:

```
module.exports = {
  extends: ['@commitlint/config-conventional']
};
```

Hier wird lediglich definiert, dass das Modul `@commitlint/config-conventional` verwendet werden soll. Bei Bedarf könnte man in dieser Datei auch einzelne Regeln ein- oder ausschalten.

Damit ist die Konfiguration erledigt.

### Verwendung

Wird das Projekt nun ausgecheckt und `npm install` ausgeführt, so wird die Hook von _Husky_ installiert. Beim nächsten Commit, welcher nicht _Conventional Commit_ entspricht, wird der Commit abgebrochen und eine Fehlermeldung (auf Englisch) ausgegeben.

Bei Anpassungen der Husky _Git Hooks_ muss `npm rebuild` ausgeführt werden, um diese neu zu installieren.

## Fazit

_Git Hooks_ sind fantastisch wenn man alleine arbeitet. Sobald mehrere Personen an einem Projekt arbeiten und die Hooks weiterhin gelten sollen, sollte man _Husky_ einsetzen.

Ein weiterer großer Vorteil ist es, dass man keine Shell Skripte für Hooks schreibt, sondern die Technologien verwendet, mit denen man als Webentwickler bereits näher an der _Husky_ Konfigurationsweise ist.

Alles in Allem ist Husky eine wunderbare Ergänzung für einen modernen Entwicklungsprozess.

![dog](../../../public/images/1f436.png)

_woof!_
