"use strict";

// ==== NEUER CODE NACH CODE REFACTORING MIT ARROW-FUNCTIONS PRAXIS 14 ====

const haushaltsbuch = {

  gesamtbilanz: new Map(),
  eintraege: [],
  fehler: [],

  // Methode: Eingabedaten holen
  eintrag_erfassen() {

    let neuer_eintrag = new Map();

    neuer_eintrag.set("titel", this.titel_verarbeiten(prompt("Titel:")));
    neuer_eintrag.set("typ", this.typ_verarbeiten(prompt("Typ (Einnahme oder Ausgabe):")));
    neuer_eintrag.set("betrag", this.betrag_verarbeiten(prompt("Betrag (in Euro, ohne €-Zeichen):")));
    neuer_eintrag.set("datum", this.datum_verarbeiten(prompt("Datum (jjjj-mm-tt):")));
    neuer_eintrag.set("timestamp", Date.now());

    if(this.fehler.length === 0) {
      this.eintraege.push(neuer_eintrag);
    } else {
      console.log("Folgende Fehler wurden gefunden:");
      this.fehler.forEach(fehler => console.log(fehler)); // Arrow
    }
  },

   // Methode: Titel verarbeiten:
   titel_verarbeiten(titel) {
    titel = titel.trim();
    if (this.titel_validieren(titel)) {
        return titel;
    } else {
        this.fehler.push("Kein Titel angegeben.");
    }
  },

  // Methode: Titel validieren:
  titel_validieren(titel) {
    if (titel !== "") {
        return true;
    } else {
        return false;
    }
  },

   // Methode: Typ verarbeiten:
   typ_verarbeiten(typ) {
    typ = typ.trim().toLowerCase();
    if (this.typ_validieren(typ)) {
        return typ;
    } else {
      this.fehler.push(`Ungültiger Eintrags-Typ: "${typ}".`);
    }
  },

  // Methode: Typ validieren:
  typ_validieren(typ) {
    if (typ.match(/^(?:einnahme|ausgabe)$/) !== null) {
        return true;
    } else {
        return false;
    }
  },

  // Methode: Betrag verarbeiten:
    betrag_verarbeiten(betrag) {
      // Bsp. "23,64 " -> "23.64" -> 23.64 -> 23634
      betrag = betrag.trim();
      if (this.betrag_validieren(betrag)) {
          return parseFloat(betrag.replace(",", ".")) * 100;
      } else {
        this.fehler.push(`Ungültiger Betrag: ${betrag} €.`);
      }
    },

  // Methode: Betrag mit Regex validieren:
  betrag_validieren(betrag) {
      if (betrag.match(/^\d+(?:(?:,|\.)\d\d?)?$/) !== null) {
          return true;
      } else {
          return false;
      }
  },

  // Methode: Datum verarbeiten:
  datum_verarbeiten(datum) {
    datum = datum.trim();
    if (this.datum_validieren(datum)) {
        return new Date(`${datum} 00:00:00`);
    } else {
      this.fehler.push(`Ungültiges Datumsformat: "${datum}".`);
    }
  },

  // Methode: Datum mit Regex validieren:
    datum_validieren(datum) {
      if (datum.match(/^\d{4}-\d{2}-\d{2}$/) !== null) {
          return true;
      } else {
          return false;
      }
  },


  // Methode: Einträge nach Datum absteigend sortieren.
  eintraege_sortieren() {
    this.eintraege.sort((eintrag_a, eintrag_b) => { // Arrow
      if (eintrag_a.get("datum") > eintrag_b.get("datum")) {
          return -1;
      } else if (eintrag_a.get("datum") < eintrag_b.get("datum")){
          return 1;
      } else {
          return 0;
        };
      });
  },

  // Methode: Eintrag als HTML-Listenpunkt mit allen spans darin generieren
  html_eintrag_generieren(eintrag) {

    // Listenpunkt anlegen
    let listenpunkt = document.createElement("li");

    if (eintrag.get("typ") === "einnahme") {
      listenpunkt.setAttribute("class", "einnahme");
    } else if (eintrag.get("typ") === "ausgabe") {
      listenpunkt.setAttribute("class", "ausgabe");
    }
    listenpunkt.setAttribute("data-eintrag", eintrag.get("timestamp"));

    // Komplette Span für datum anlegen
    let datum = document.createElement("span");
    datum.setAttribute("class", "datum");
    datum.textContent = eintrag.get("datum").toLocaleDateString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    })
    listenpunkt.insertAdjacentElement("afterbegin", datum);

    // Komplette Span für titel anlegen
    let titel = document.createElement("span");
    titel.setAttribute("class", "titel");
    titel.textContent = eintrag.get("titel");
    datum.insertAdjacentElement("afterend", titel);

    // Komplette Span für betrag anlegen
    let betrag = document.createElement("span");
    betrag.setAttribute("class", "betrag");
    betrag.textContent = `${(eintrag.get("betrag") / 100).toFixed(2).replace(/\./, ",")} €`;
    titel.insertAdjacentElement("afterend", betrag);

    // button-Element anlegen:
    let button = document.createElement("button");
    button.setAttribute("class", "entfernen-button");
    betrag.insertAdjacentElement("afterend", button);

    // icon-Element anlegen:
    let icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-trash");
    button.insertAdjacentElement("afterbegin", icon);

    // WICHTIG: Den zusammengebauten listenpunkt mit explizitem return zurückgeben:
    return listenpunkt;
  },

  // Methode: Oben generierte Listenpunkte in <ul> schiessen und diese in <article> schiessen. eintrag erzeugen.
  eintraege_anzeigen() {

    // Überprüfen und Löschen von <ul>
    document.querySelectorAll(".monatsliste ul").forEach(eintragsliste => eintragsliste.remove()); //Arrow

    // Generieren und Platzieren von <ul> und oben generierten Listenpunkten
    let eintragsliste = document.createElement("ul");
    this.eintraege.forEach(eintrag => eintragsliste.insertAdjacentElement("beforeend", this.html_eintrag_generieren(eintrag))); //Arrow
    document.querySelector(".monatsliste").insertAdjacentElement("afterbegin", eintragsliste);
  },

  // Methode: Gesamtbilanz erstellen verrechnet die Einträge jeweils mit der Gesamtbilanz:
  gesamtbilanz_erstellen() {
    let neue_gesamtbilanz = new Map();
    neue_gesamtbilanz.set("einnahmen", 0);
    neue_gesamtbilanz.set("ausgaben", 0);
    neue_gesamtbilanz.set("bilanz", 0);

    this.eintraege.forEach(eintrag => { // Arrow
        switch (eintrag.get("typ")) {
            case "einnahme":
                neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einnahmen") + eintrag.get("betrag"));
                neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag"));
                break;
            case "ausgabe":
                neue_gesamtbilanz.set("ausgaben", neue_gesamtbilanz.get("ausgaben") + eintrag.get("betrag"));
                neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") - eintrag.get("betrag"))
                break;
            default:
                console.log(`Der Typ "${eintrag.get("typ")}" ist nicht bekannt.`);
                break;
          }
    });
    this.gesamtbilanz = neue_gesamtbilanz;


  },

  // Methode: Erzeugt das ganze HTML-Element <aside> mit den Werten für die Gesamtbilanz.
  html_gesamtbilanz_generieren() {

    // <aside> kreieren und Klasse setzen.
    let gesamtbilanz = document.createElement("aside");
    gesamtbilanz.setAttribute("id", "gesamtbilanz");

    // h1 kreieren, Text rein und an erste Stelle in <aside> platzieren.
    let ueberschrift = document.createElement("h1");
    ueberschrift.textContent = "Gesamtbilanz";
    gesamtbilanz.insertAdjacentElement("afterbegin", ueberschrift);

    // Erste Zeile Einnahmen kreieren, zusammenbauen und an letzter Stelle in <aside> platzieren.
    let einnahmen_zeile = document.createElement("div");
    einnahmen_zeile.setAttribute("class", "gesamtbilanz-zeile einnahmen");
    let einnahmen_titel = document.createElement("span");
    einnahmen_titel.textContent = "Einnahmen:";
    einnahmen_zeile.insertAdjacentElement("afterbegin", einnahmen_titel);
    let einnahmen_betrag = document.createElement("span");
    einnahmen_betrag.textContent = `${(this.gesamtbilanz.get("einnahmen") / 100).toFixed(2).replace(/\./, ",")} €`;
    einnahmen_zeile.insertAdjacentElement("beforeend", einnahmen_betrag);
    gesamtbilanz.insertAdjacentElement("beforeend", einnahmen_zeile);

     // Zweite Zeile Ausgaben kreieren, zusammenbauen und an letzter Stelle in <aside> platzieren.
     let ausgaben_zeile = document.createElement("div");
     ausgaben_zeile.setAttribute("class", "gesamtbilanz-zeile ausgaben");
     let ausgaben_titel = document.createElement("span");
     ausgaben_titel.textContent = "Ausgaben:";
     ausgaben_zeile.insertAdjacentElement("afterbegin", ausgaben_titel);
     let ausgaben_betrag = document.createElement("span");
     ausgaben_betrag.textContent = `${(this.gesamtbilanz.get("ausgaben") / 100).toFixed(2).replace(/\./, ",")} €`;
     ausgaben_zeile.insertAdjacentElement("beforeend", ausgaben_betrag);
     gesamtbilanz.insertAdjacentElement("beforeend", ausgaben_zeile);

    // Dritte Zeile Bilanz kreieren, zusammenbauen und an letzter Stelle in <aside> platzieren.
    let bilanz_zeile = document.createElement("div");
    bilanz_zeile.setAttribute("class", "gesamtbilanz-zeile bilanz");
    let bilanz_titel = document.createElement("span");
    bilanz_titel.textContent = "Bilanz:";
    bilanz_zeile.insertAdjacentElement("afterbegin", bilanz_titel);
    let bilanz_betrag = document.createElement("span");
    // Hier die Logik ob die Klasse "positiv" oder "negativ" gesetzt wird und das Feld die entsprechende Farbe bekommt:
    if (this.gesamtbilanz.get("bilanz") >= 0) {
      bilanz_betrag.setAttribute("class", "positiv");
    } else if (this.gesamtbilanz.get("bilanz") < 0) {
      bilanz_betrag.setAttribute("class", "negativ");
    }
    bilanz_betrag.textContent = `${(this.gesamtbilanz.get("bilanz") / 100).toFixed(2).replace(/\./, ",")} €`;
    bilanz_zeile.insertAdjacentElement("beforeend", bilanz_betrag);

    gesamtbilanz.insertAdjacentElement("beforeend", bilanz_zeile);

    // WICHTIG: Explizite Rückgabe mit return
    return gesamtbilanz;
  },

  gesamtbilanz_anzeigen() {

    // Prüfen und Löschen von evtl. vorhandener Gesamtbilanz
    document.querySelectorAll("#gesamtbilanz").forEach(gesamtbilanz => gesamtbilanz.remove()); // Arrow

    // Neue Gesamtbilanz im Frontend an richtiger Stelle anzeigen (html_gesamtbilanz_generieren())
    document.querySelector("body").insertAdjacentElement("beforeend", this.html_gesamtbilanz_generieren());
  },


  // Methode: Alle Funktionsaufrufe zusammengefasst in einer while Schleife
  eintrag_hinzufuegen() {
    let weiterer_eintrag = true;

    while (weiterer_eintrag) {
      this.eintrag_erfassen();
      if (this.fehler.length === 0) {
        // Methodenaufrufe anpassen
        this.eintraege_sortieren();
        this.eintraege_anzeigen();
        this.gesamtbilanz_erstellen();
        this.gesamtbilanz_anzeigen();
      } else {
        // Fehler Array wieder löschen, sonst stuck an der Stelle.
        this.fehler = [];
      }
      weiterer_eintrag = confirm("Weiteren Eintrag hinzufügen?"); // Bei OK true, bei Abbrechen false
    }
  }
};
