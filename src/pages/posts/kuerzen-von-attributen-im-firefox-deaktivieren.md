---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/kuerzen-von-attributen-im-firefox-deaktivieren"  
title: "Kürzen von Attributen im Firefox deaktivieren"
author: "Aleksej Wesselbaum"
pubDate: "2020-07-12"
categories: 
  - "tooling"
tags: 
  - "einstellungen"
  - "firefox"
excerpt: "In den Firefox DevTools werden DOM Attribute, die länger als 120 Zeichen sind standardmäßig gekürzt. Über den Nutzen dieser Funktion kann man streiten, jedoch sollte die Kürzung zumindest deutlicher Hervorgehoben werden."
---

In den Firefox DevTools werden DOM Attribute, die länger als 120 Zeichen sind standardmäßig gekürzt. Über den Nutzen dieser Funktion kann man streiten, jedoch sollte die Kürzung zumindest deutlicher Hervorgehoben werden.

![Firefox - Gekürzte Attribute Ausschnitt](../../../images/firefox_1.png)

Diese Funktion lässt sich jedoch zum Glück ausschalten. Dazu muss man die folgenden Schritte durchführen:

1. DevTools öffnen (F12)
2. Einstellungen aufrufen (F1)
3. Unter **Inspektor** den Haken bei **DOM-Attribute kürzen** entfernen

![Firefox - Gekürzte Attribute anzeigen](../../../images/firefox_2.png)

Beim erneuten Laden der Seite sollte man nun die ungekürzte Variante sehen können.
