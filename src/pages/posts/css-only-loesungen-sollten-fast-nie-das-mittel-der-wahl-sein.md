---
slug: "/css-only-loesungen-sollten-fast-nie-das-mittel-der-wahl-sein"  
title: "CSS Only Lösungen sollten fast nie das Mittel der Wahl sein"
author: "Aleksej Wesselbaum"
date: "2020-03-22"
categories: 
  - "css"
  - "javascript"
tags: 
  - "accessibility"
  - "css"
  - "javascript"
  - "scss"
  - "zugaenglichkeit"
---

Im Internet findet man immer wieder Lösungen für [CSS Only Navigation](https://medialoot.com/blog/how-to-create-a-responsive-navigation-menu-using-only-css/), [Slider](https://codepen.io/dudleystorey/full/kFoGw/), [Tooltip](https://www.freecodecamp.org/news/a-step-by-step-guide-to-making-pure-css-tooltips-3d5a3e237346/) und diverse andere Dinge die nur mit CSS umgesetzt worden sind, die auf den ersten Blick gut aussehen. Doch die CSS Only Lösungen haben alle eins gemeinsam: Sie funktionieren nur gut für den Sehenden Benutzer, der nicht auf Screen Reader angewiesen ist. Doch fangen wir erst mal von vorne an.

## Wieso gibt es überhaupt CSS Only Lösungen für diverse Anwendungsbeispiele

### Technische Möglichkeiten aufzeigen

Viele dieser Lösungen dienen eher als ein Showcase, was theoretisch mit cleverer Kombination von Selektoren alles möglich ist. So wird z.B. für ein Dropdown eine Checkbox verwendet, die dann wenn sie angeklickt ist als geöffnet dargestellt wird.

### Fehlendes JavaScript Knowhow

Manchmal passiert es, dass man mit einer Aufgabe konfrontiert wird, von der man weiß, das diese mit Javascript gelöst werden sollte. Aber aufgrund von fehlender Expertise wird die CSS Only Lösung wählt, weil man sich in CSS gut und in Javascript nicht so gut auskennt.

### Performance

Man kann auch die These in den Raum stellen, dass CSS eine bessere Performance als Javascript hat. Jedoch bringt es auch Nachteile mit sich, die ich im nächsten Kapitel ansprechen werde.

## Wieso man es trotzdem nicht tun sollte

Auch wenn die Technischen Mittel da sind, sollte man auf CSS Only Lösungen (teilweise) verzichten.

Wie bereits in der Einleitung geschrieben, Screen Reader haben gar keine Möglichkeit zu verstehen, was mit den um-dekorierten Elementen nun passieren soll. Woher soll der Screen Reader die Information bekommen, dass er gerade ein Dropdown und keine Radio Buttons sieht? Auch wenn Menschen mit Einschränkungen nicht zur Zielgruppe gehören sollten, ist es dennoch kein guter Stil diese von vorne herein auszuschließen, weil man kein Javascript schreiben kann oder möchte.

## Wie man es machen sollte

Der Königsweg wäre hier alles Notwendige mit Javascript zu machen und die Stile mit CSS. Dabei kann es sein, dass die CSS Only Lösungen gar nicht weit davon entfernt sind auch zugänglich zu sein.

### Beispiel: Dropdown

Angenommen, wir haben ein Dropdown Element, das mit Checkboxen arbeitet, um Elemente ein- und aus-zuklappen. Im ersten Schritt sollte man die Funktionalität so umbauen, dass man einen Button anstatt der Checkbox verwendet. Damit das funktioniert, muss per Javascript eine Klasse gesetzt werden. Damit hat man bereits eine semantische(re) Struktur.

Anschließend sollte man die Elemente mit ARIA Attributen versehen, damit die Screen Reader wissen, wofür Elemente genutzt werden. An den Button würde in diesem Beispiel das Attribut `aria-expanded=false` und im aufgeklappten Zustand entsprechend auf `true` gesetzt werden.

Wenn man sich dann noch die Mühe machen mag, sollte man auch die Tastaturnavigation einem Standard-Dropdown nachempfinden.
