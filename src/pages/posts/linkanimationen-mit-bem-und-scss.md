---
slug: "/linkanimationen-mit-bem-und-scss"  
title: "Linkanimationen mit BEM und SCSS"
author: "Aleksej Wesselbaum"
date: "2021-03-18"
categories: 
  - "css"
  - "sass"
tags: 
  - "css"
  - "sass"
  - "scss"
---

Es kommt vor, dass Module angelegt werden, bei denen man zunächst fest davon ausgeht, dass diese immer Links beinhalten werden. So gibt es Teaser mit dem Element Link.

```
.c-teaser {

  &__link {
    &:hover {
      border-bottom: solid 1px red;
    }
  }
}
```

Nun kann es passieren, dass die Anforderungen sich ändern und das Link Element auch mal ein Text sein muss, welcher nicht verlinkt wird.

Es wäre nicht schön, wenn der Aktivzustand des Links ebenfalls auf einfachen Text greifen würde.

Für diesen Fall kann man die SASS Regel [@at-root](https://sass-lang.com/documentation/at-rules/at-root) verwenden, um nur Links auszuwählen.

```
.c-teaser {

  &__link {

    @at-root a#{&} {
      &:hover {
        border-bottom: solid 1px red;
      }
    }
  }
}
```

Die Nachteile dieser Lösung sind, dass der Selektor für den Link nicht mehr die Spezifizität von 010 sondern 011 hat und die Lesbarkeit des Codes leidet.

Alternativ zu diesem Vorgehen, könnte man neben dem Link ein weiteres Element hinzufügen, welches die gleiche Darstellung wie der Link hat und die Aktivzustände nur im Link behandeln.

```
.c-teaser {

  &__link,
  &__text {
    // Gemeinsame Stile
  }

  &__link {

    &:hover {
      border-bottom: solid 1px red;
    }
  }
}
```

Hierdurch bleibt die Spezifizität niedrig und der Code lesbar. Dafür erhöht sich die Komplexität bei der HTML Umsetzung.
