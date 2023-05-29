---
slug: "/jira-workflow-fuer-mehrere-bearbeiter-in-serie"  
title: "JIRA Workflow für mehrere Bearbeiter in Serie"
author: "Aleksej Wesselbaum"
date: "2020-09-13"
categories: 
  - "workflow"
tags: 
  - "jira"
  - "workflow"
---

JIRA ist eine Software zur Vorgangs- und Projektverfolgung.

Für einfache Projekte reicht das Standardvorgehen vollkommen aus. Bei komplexeren Anwendungsfällen müssen aber auch komplexere Abläufe in JIRA angewandt werden. Einen solchen Fall stelle ich im Folgenden vor.

Mit steigender Anzahl der Bearbeiter wird das Vorgehen nach und nach komplizierter. Dazu werden in diesem Artikel die jeweils wichtigsten Prinzipien erklärt. Die für die jeweilige Vorgehen erlernten Grundlagen werden in der jeweils nächsten Stufe aufgegriffen.

## 1 Bearbeiter

Es gibt einen Entwickler und einen Projektleiter.

Der Projektleiter ist für die Priorisierung, Zuweisung und Prüfung der Tickets zuständig.

Der Entwickler ist für die Umsetzung der in den Tickets beschriebenen Anforderungen zuständig.

Es werden 5 Status benötigt, um das Vorgehen abzubilden:

1. Backlog \[Projektleiter\]
    - Erkannte Fehler oder offene Aufgaben, die aber noch nicht umgesetzt werden sollen
2. Zur Bearbeitung vorgemerkt \[Projektleiter > Entwickler\]
    - Tickets aus dem Backlog, die demnächst umgesetzt werden sollen
3. In Bearbeitung \[Entwickler\]
    - Tickets werden bearbeitet
    - Im Normalfall sollte ein Bearbeiter nicht mehr als ein Ticket gleichzeitig bearbeiten.
4. Bearbeitung abgeschlossen \[Entwickler\]
    - Dieser Status wird nur benötigt, wenn es einen Zustand geben kann, in dem die Bearbeitung abgeschlossen ist, aber das Ergebnis noch nicht überprüft werden kann. Das passiert dann, wenn man die Ergebnisse zuerst auf eine Umgebung überführen muss auf die der Projektleiter zugreifen kann
5. QS \[Entwickler > Projektleiter\]
    - In diesem Schritt wird überprüft, ob die im Ticket beschriebenen Anforderungen umgesetzt worden sind. Wenn nicht, dann muss das Ticket wieder in den Zustand "Zur Bearbeitung vorgemerkt" verschoben und dem Entwickler zugewiesen werden
6. Erledigt \[Projektleiter\]
    - Das Ticket ist abgeschlossen und kann für einen Bericht an den Kunden oder die [Generierung von Releasenotes](https://confluence.atlassian.com/adminjiraserver/creating-release-notes-938847219.html) verwendet werden.

### Was tun bei Fehlern in bereits erledigten Tickets?

Es gibt zwei Möglichkeiten mit Tickets, die einmal den Status "Erledigt" erreicht haben und sich im Nachhinein als fehlerhaft erweisen, umzugehen.

#### Erneut öffnen

Das Ticket wird erneut geöffnet und in der nächsten Iteration bearbeitet.

Diese Methode funktioniert, hat aber den Nachteil, dass aus den Tickets nicht zu erkennen ist, dass eine neue Funktion im Produkt zu finden ist.

Werden die Releasenotes erstellt und das Ticket ist wieder in Bearbeitung, so ist der Quellcode bereits im Produkt, ohne das der Kunde das erkennen kann.

Werden erst Releasenotes erstellt und das Ticket dann erneut bearbeitet, so taucht dasselbe Ticket doppelt in zwei Releasenotes auf und ist nicht klar zuzuordnen.

#### Einen Fehler öffnen

Es wird ein neuer Fehler mit einem Verweis auf das Ursprungsticket geöffnet.

In diesem Ticket werden nicht mehr alle Informationen aufgelistet, die im Originalticket erhalten waren. Lediglich die Punkte die nachgebessert werden sollen tauchen in der Beschreibung auf. Werden mehr Informationen benötigt, schaut man sich das Originalticket an.

## 2 Bearbeiter

Dieses Szenario beschreibt, dass es 2 Entwickler mit unterschiedlichen Zuständigkeiten gibt, z.B. Frontend und Backend. Der Backendentwickler (ab jetzt BE) kann auf den Frontendentwickler (ab jetzt FE) angewiesen sein, um ein Ticket zu bearbeiten.

### Zusätzliche Status anlegen

Es besteht die Möglichkeit für jeden Entwicklertypen zusätzliche Status anzulegen, der Ablauf wäre wie folgt:

1. Backlog \[Projektleiter\]
2. Zur Frontendbearbeitung vorgemerkt \[Projektleiter > FE\]
3. In Bearbeitung \[FE\]
4. Bearbeitung abgeschlossen \[FE\]
5. QS \[FE > Projektleiter\]
6. Zur Backendbearbeitung vorgemerkt \[Projektleiter > BE\]
7. In Bearbeitung \[BE\]
8. Bearbeitung abgeschlossen \[BE\]
9. QS \[BE > Projektleiter\]
10. Erledigt \[Projektleiter\]

Das Vorgehen funktioniert, hat jedoch zwei Probleme. Zum einen skaliert dieses Vorgehen nicht, wenn eine weitere Fertigungsstufe hinzukommt. Zum anderen müssen die Tickets erst den FE durchlaufen, um dann zum BE zu gelangen.

### Mit bestehenden Vorgehen weiterarbeiten

Man setzt auf das zuvor beschriebene Vorgehen für einen Bearbeiter. Dabei gibt es zwei Szenarien. Zum einen baut der BE auf der Arbeit des FE auf. Zum anderen gibt es den Fall, dass der BE unabhängig vom FE die Aufgaben erledigen kann.

#### Bearbeiter sind aufeinander angewiesen

Im Status "Zur Bearbeitung vorgemerkt" wird das Ticket zunächst dem FE zugewiesen. Bis zum Status QS verändert sich das Vorgehen nicht. Im QS Status jedoch wird bei korrekter Umsetzung das Ticket nicht geschlossen, sondern wieder in den Status "Zur Bearbeitung vorgemerkt" gesetzt und dem BE zugewiesen.

Zum Nachverfolgen, welche Tätigkeiten bereits abgeschlossen sind können Tags wie "Frontend fertig" und "Backend fertig" verwendet werden.

Das schöne an dieser Vorgehensweise ist, dass man die Reihenfolge auch vertauschen könnte. So könnte z.B. der BE zunächst eine Schnittstelle bereitstellen, auf die der FE zugreift.

#### Bearbeiter sind nicht aufeinander angewiesen

In diesem Fall werden Tags verwendet um zu kennzeichnen, dass es im Frontend oder Backend nichts zu erledigen gibt.

## n Bearbeiter

Besteht nun Bedarf an weiteren Fertigungslinien, so können beliebig viele Tags für das Vorgehen "2 Bearbeiter - Mit bestehendem Vorgehen weiterarbeiten" angelegt werden.

Es gibt jedoch einen Nachteil, der bei diesem Vorgehen noch nicht berücksichtigt worden ist. Die Arbeit läuft immer seriell und nicht parallel. Wenn das gegeben sein soll, dann müssen mehrere Tickets angelegt und miteinander verknüpft werden. Ist paralleles Arbeiten eher die Regel als die Ausnahme, so sollte ein anderes Vorgehen gewählt werden.

## Fazit

Wenn man sich von Anfang an Gedanken dazu macht, wie viele Bearbeiter im Prozess beteiligt sein sollen kann man eine entsprechende Lösung finden. Das schöne ist, wenn man die Lösung für n Bearbeiter wählt, ist die Komplexität bei nur einem Bearbeiter nicht viel höher, als beim Vorgehen für 20. Dafür kann der Prozess unendlich skaliert werden.
