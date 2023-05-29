---
slug: "/die-grenzen-von-at-root-und-wie-man-diese-weiten-kann"  
title: "Die Grenzen von @at-root und wie man diese weiten kann"
author: "Aleksej Wesselbaum"
date: "2020-02-09"
categories: 
  - "css"
tags: 
  - "css"
  - "scss"
---

## Was ist @at-root?

Im SCSS Kontext ist `@at-root` eine Anweisung, die dafür sorgt, dass man aus der aktuellen Verschachtelungshierarchie wieder herauskommt und sich danach einen neuen Selektors aufbauen kann.

Das ist dann nützlich, wenn man z.B. innerhalb der Verschachtelung eine Variable erstellt hat, auf die man zugreifen möchte (häufig einfach nur `&` an einer anderen Stelle) ohne diese in einen höheren Scope zu setzen.

An vielen Stellen in meinem Quellcode wird man etwa solchen Code wiederfinden. Es gibt ein Element, welches gestylt ist. In einem Scope hingegen sollen andere Styles auf das Element wirken. Da man den Scope vorne dran schreiben muss, muss man `@at-root` verwenden, da sonst die bisherige Verschachtelung vor den Scope geschrieben werden würde.

```
// Input
.element {
  h1 {
    color: white;

    @at-root {
      .scope#{&} {
        color: black;
      }
    }
  }
}

// Output
.element h1 {
  color: white;
}
.scope.element h1 {
  color: black;
}
```

## Wo ist die Grenze?

Das oben beschriebene Vorgehen funktioniert genau dann, wenn man immer nur einen Selektor je Ebene hat. Bei zwei Selektoren ist das Ergebnis nicht mehr wie erwartet.

```
// Input
.element {
  h1,
  h2 {
    color: white;

    @at-root {
      .scope#{&} {
        color: black;
      }
    }
  }
}

// Output
.element h1,
.element h2 {
  color: white;
}
.scope.element h1, .element h2 {
  color: black;
}
```

Hier ist das Problem, dass nicht das h2 Element im Scope die schwarze Textfarbe erhält. Weil der Selektor später im CSS ausgegeben wird und die gleiche Stärke besitzt wie der vorherige, bekommen alle Überschriften der zweiten Ebene die schwarze Textfarbe, und nicht nur der Sonderfall.

Das kommt daher, dass `&` als ein String von `.element h1, .element h2` gesehen wird, anstatt die einzelnen Selektoren zu verwenden.

## Die Lösung

Zum Glück lässt SASS einen bei dieser Problemstellung nicht im Regen stehen. In der Dokumentation von SASS ist [hier die Funktion `selector.append` beschrieben](https://sass-lang.com/documentation/modules/selector#append). Mit dieser kann das Problem nun wie folgt gelöst werden:

```
// Input
.element {
  h1,
  h2 {
    color: white;

    @at-root {
      #{selector_append(".scope", &)} {
        color: black;
      }
    }
  }
}

// Output
.element h1,
.element h2 {
  color: white;
}
.scope.element h1, .scope.element h2 {
  color: black;
}
```

Hierbei werden aus dem String `.element h1, .element h2` zwei Selektoren, die jeweils mit dem Scope kombiniert werden.

## Schlusswort

Neben der Lösung eines spezifischen Problems habe ich eine Weitere erkentniss aus der Lösung mitnehmen können. Einige Dinge sind nicht immer offensichtlich, wenn man weiter nachforscht kann es sich auszahlen. Man lernt einerseits eine neue Technik, anderseits aber auch schafft man eine Lösung welche stabiler und näher am DRY Ansatz ist.
