---
slug: "/mikrooptimierung"  
title: "Mikrooptimierung"
author: "Aleksej Wesselbaum"
date: "2020-07-19"
categories: 
  - "css"
  - "javascript"
  - "sass"
tags: 
  - "css"
  - "javascript"
  - "performance"
  - "scss"
---

Mikrooptimierung beschreibt die Verbesserung von Performance in einem Kontext ohne konkreten Anlass dafür. Ein Beispiel dafür wäre die Funktion for von Javascript nicht zu verwenden und stattdessen eine eigene Funktion dafür zu schreiben, weil man sich davon eine Performancesteigerung verspricht.

## Warum es Sinn ergeben kann?

Mikrooptimierung ergibt dann Sinn, wenn man die bisherige Umsetzung analysiert und eine Funktion als den Flaschenhals eingestuft hat. Dann sollte man in genau dieser Funktion schauen, wie die Ausführung verbessert werden kann. Manchmal kann es Sinn ergeben andere Funktionen anzupassen, wie z.B. von synchroner zu asynchroner Ausführung zu wechseln.

## Wann sollte darauf verzichtet werden?

Wie schon der Titel vermuten lässt, ist es nicht immer sinnvoll ohne konkreten Bedarf zu optimieren.

Manchmal kann es sein, dass eine Stelle im Quellcode zwar als ein Engpass erkannt worden ist, diese zu optimieren aber unwirtschaftlich ist. Das kann z. B. dann der Fall sein, wenn

- Die Umsetzung sehr schwer und somit teuer ist
- Die Umsetzung nur einem geringen Bruchteil der Kunden eine Verbesserung verschafft
- Der Performancegewinn so klein wäre, dass auch nach der Optimierung in der Realität niemand den Unterschied bemerkt
- Der Quellcode so weit von den Industriestandards abweicht, dass neue Entwickler nicht ohne Weiteres eingearbeitet werden können

## Wie macht man es besser?

Im besten Fall informiert man sich bereits vor der Umsetzung über Best-Pracices der Sprache mit der man dann entwickeln wird, um bereits im Voraus die gängigen Stolperfallen zu umgehen.

Wenn dann etwas im Projektverlauf auffällt, muss geprüft werden, ob sich eine Anpassung lohnt. Wenn das der Fall ist, handelt es sich nicht mehr um Mikrooptimierung,

## Fazit

Man ist als Entwickler immer bestrebt die bestmögliche Performance zu erreichen. Manchmal jedoch lohnt sich eine Anpassung einfach nicht. Im Zweifel sollte von einer weiteren Stelle geprüft werden, ob sich eine Anpassung positiv auf das Projekt auswirken würde.
