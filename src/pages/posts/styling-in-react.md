---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/styling-in-react"  
title: "Styling in React"
author: "Aleksej Wesselbaum"
pubDate: "2023-04-17"
tags: 
  - "css"
  - "javascript"
  - "react"
---

Ich komme aus einem Kontext, in dem das Styling eine sehr große Rolle eingenommen hat. Daher bin ich von Methoden wie BEM sehr angetan. Nun bin ich im Kontext von React unterwegs und viele meiner Glaubenssätze müssen über Board geschmissen werden. Natürlich könnte man weiterhin wie gewohnt eine SCSS Datei pflegen in der man nach BEM arbeitet. Da bietet das Tooling run um React aber eher wenig Hilfe.

Der Standard, wenn es um React Styling geht dahin zu jeder Komponente ein CSS Modul anzulegen. Dort beschreibt man die Stile zu der Komponente und durch React Magie wird die Klasse beim kompilieren geprefixt und dadurch gibt es keine Namenskonflikte. Dann sieht eine Komponente beispielsweise wie folgt aus:

```
import styles from './styles.module.css';

function Component = () => 
  <div className={styles.component}>I am Styled now!</div>;
```

Was man hier sieht ist, dass die Stile mit einem frei gewähltem Namen importiert werden müssen. 'styles' scheint auch ein sprechender Name für das zu sein was wir hier sehen. Schwierig wird es dann, wenn wir anfangen mehrere Stile in eine Datei zu importieren. Wie nennt man sie dann? `componentStyles` und sagen wir mal `buttonStyles`? Angenommen wir sind mit der Benamung wie sie ist zufrieden. Was wenn wir die `buttonStyles` an weiteren Stellen verwenden wollen? Wissen wir immer wie die Styles benannt worden sind, oder besteht eine Chance die Styles anders zu benennen, wie z.B. `buttonsStyle`.

An dieser stelle fängt man an in bereits angelegte Dokumente zu schauen, und mit Copy&Paste zu arbeiten. Wenn man nicht alleine an einem Projekt arbeitet kann es auch passieren, dass die andere Person eine dritte import-Weise in das Projekt reingebracht hat. So wächst das import-Chaos ohne das jemand etwas böses gewollt hat.

Und hier kommt mein Lösungsansatz, den ich so noch nirgendwo gesehen habe, der mir persönlich sehr elegant vorkommt, ich mir aber fast sicher bin, dass er doch Nachteile bietet, die mir nur noch nicht aufgefallen sind. Kritik zu meiner Lösung ist also gerne gesehen!

# Lösungsidee

Man schreibt weiterhin die CSS Module wie man es klassischer Weise in React würde, jedoch importiert man diese nicht direkt in den Komponenten. Stattdessen legt man relativ weit oben im `src` Ordner eine `moduleStyles.ts` Datei an, welche alle Module importiert, benennt und exportiert. Anschließend importiert man in der Komponente die Stile die man braucht. Die Vorteile aus meiner Sicht sind folgende:

- man achtet wieder mehr auf die Namensgebung, sodass man nicht 2 mal `buttonStyle` hat, denn man kann nicht mehrmals etwas mit dem selben Namen exportieren
- man sieht alle Namensschreibweisen nah bei einander und kann somit die Namensgebung zu dem bestehenden Konzept adaptieren
- wenn einmal ein Stylesheet importiert worden ist muss man sich keine Gedanken mehr über den Pfad zu anderen Stylesheets machen, da man nur noch den Import erweitern muss

Hast du eine Meinung zu der Idee? Lass es mich wissen!
