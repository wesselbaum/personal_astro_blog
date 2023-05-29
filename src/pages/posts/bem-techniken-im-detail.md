---
layout: "../../layouts/MarkdownPostLayout.astro"
slug: "/bem-techniken-im-detail"  
title: "BEM Techniken im Detail"
author: "Aleksej Wesselbaum"
pubDate: "2020-09-27"
categories: 
  - "css"
  - "javascript"
  - "sass"
  - "workflow"
tags: 
  - "bem"
  - "css"
  - "javascript"
  - "scss"
  - "workflow"
---

Wenn man sich bereits mit BEM vertraut gemacht hat wird man im Alltag einigen Problemstellungen begegnet sein. In diesem Artikel geht es darum möglichst viele dieser Problemstellungen zu beheben.

Die Annahme ist, dass für die Umsetzung SCSS verwendet wird. Einige der Probleme gibt es bei reinem CSS nicht, andere haben unabhängig davon ob ein Preprocessor verwendet wird Bestand.

## Modifier - Element

Anhand eines Modifiers sollen Unterelemente anders dargestellt werden.

Um die Elemente zu stylen, die unterhalb eines Modifiers anders dargestellt werden, sollte eine Variable verwendet werden die den Blockselektor speichert. Um diese in einem Selektor zu verwenden muss sie mit `#{$variable}` umschlossen werden.

```
.block {
  $el: &;
  
  &__element {
    padding: 10px;
  }
  
  &--modifier {
    #{$el}__element {
      padding: 20px;
    }
  }
}
```

## Präfixe

Bei großen Projekten ergibt es Sinn Blöcke mit Präfixen zu versehen, um ihren Zweck allein am Namen zu erkennen.

### Elementenpräfixe

Die erste Präfixkategorie sind die Präfixe für Elemente. Dabei werden Präfixe genutzt um den Zweck eines Elements zu kennzeichnen.

#### Komponente `c`

Der Standardpräfix sollte `c-` sein. Dieser steht für **component** und sagt aus, dass es sich um eine geschlossene Komponente handelt.

#### Layout `l`

Für Layout sollte der Präfix `l-` verwendet werden. In der Praxis wird z.B. ein `l-content-wrapper` verwendet um Module zu umschließen und allen den gleichen Abstand zueinander zu geben.

Andere Anwendungsfälle sind Module im Fließtext, nach links und rechts aus dem Raster ausbrechende Module und hintergrundgebende umschließende Elemente.

#### Hilfsklasse `h`

Für Hilfsklassen (helper) wird der Präfix `h` verwendet. Solche Klassen könnten z.B. verwendet werden um die `display` Property zu verändern, oder abweichende Abstände zu definieren.

```
.h-block {
  display: block !important;
}

.h-inline {
  display: inline !important;
}

.h-inline-block {
  display: inline-block !important;
}

.h-flex {
  display: block !important;
}

.h-pb-small {
  padding-bottom: 10px;
}

.h-pb-medium {
  padding-bottom: 20px;
}

.h-pb-large {
  padding-bottom: 40px;
}
```

### Zustandspräfixe

Diese Kategorie von Präfixen stellt einen Status eines Elementes dar. Bei den Zuständen ist es erlaubt und gewollt, dass die Spezifizität erhöht wird.

Üblicherweise werden die Zustandspräfixe von Javascript beeinflusst.

#### Ist Zustand - `is`

Mit dem `is` Präfix wird signalisiert, dass das Element sich in einem Zustand befindet. Solcher Zustand könnte ein Menü sein, welches geöffnet ist, oder ein Bild welches gezoomt ist.

```
.c-menu {
  display: block;
  
  &.is-opened {
    display: flex;
  }
}

.c-image {
  position: static;
  &.is-zoomed {
    position: relative;
  }
}
```

#### Hat Zustand - `has`

Mit dem `has` Präfix wird signalisiert, dass das Element etwas besitzt, oder ein Kindselement einen bestimmten Zustand hat. Solcher Zustand könnte ein Menü sein, welches Unterpunkte hat, oder ein Einkaufswagen, welcher Artikel beinhaltet.

```
.c-menu {
  position: static;
  
  &.has-children {
    position: relative;
  }
}

.c-cart {
  color: gray;

  &.has-items {
    color: green;
  }
}
```

#### Javascript - `js`

Der Präfix `js` sollte dazu verwendet werden Elemente im Javascript korrekt anzusprechen. Das Stylen von `js` Klassen ist zu vermeiden um eine Trennung von Javascript und CSS zu behalten.

### Kontextpräfixe

Es gibt Kontexte die ein Element anders darstellen lassen müssen als in seiner ursprünglichen Form.

#### Scope - `s`

Ein Scope wird auf einen Teilbereich einer Seite angewendet und kann dazu genutzt werden alle in dem Scope befindlichen Elemente anders darzustellen. Ein Scope könnte z.B. ein Footer sein, oder die Aussage, dass der Hintergrund eingefärbt ist. Ein Scope kommt üblicherweise in mehreren Komponenten vor und darf keine eigenen Stile besitzen.

```
a {
  .s-footer & {
    color: white;
  }
}

.c-card {
  &__text {
    color: black;
  }

  .s-background & {
    &__text {
      color: white;
    }
  }
}
```

#### Theme - `t`

Ein Theme verhält sich grundsätzlich wie ein Scope, jedoch wird dieser für eine ganze Seite ziemlich weit oben im DOM gesetzt (`html` oder `body`). Dieser wird verwendet, wenn eine Seite komplett anders eingefärbt werden soll, oder sich zu einer Veranstaltung alle Elemente anders verhalten sollen.

```
.c-card {
  background: darkgray;
  
  .t-subsite &{
    background: lightskyblue;
  }
  
  .t-christmas &{
    background: red;
  }
}
```
