"use strict";

// ==== NEUER CODE NACH CODE REFACTORING MIT ARROW-FUNCTIONS PRAXIS 14 ====

const haushaltsbuch = {

  gesamtbilanz: new Map(),
  eintraege: [],

  // Methode: Zentral und wichtig deswegen oben
  eintrag_hinzufuegen(formulardaten) {
    let neuer_eintrag = new Map();
    neuer_eintrag.set("titel", formulardaten.titel);
    neuer_eintrag.set("typ", formulardaten.typ);
    neuer_eintrag.set("betrag", formulardaten.betrag);
    neuer_eintrag.set("datum", formulardaten.datum);
    neuer_eintrag.set("timestamp", Date.now());
    this.eintraege.push(neuer_eintrag);
    this.eintraege_sortieren();
    this.eintraege_anzeigen();
    this.gesamtbilanz_erstellen();
    this.gesamtbilanz_anzeigen();
    },

  //Methode: Löscht einen Eintrag aus UI und eintraege Array:
  eintrag_entfernen(timestamp) {
    let start_index;
    for (let i = 0; i < this.eintraege.length; i++) {
        if (this.eintraege[i].get("timestamp") === parseInt(timestamp)) {
            console.log(this.eintraege[i].get("timestamp"));
            start_index = i;
            break;
        }
    }
    this.eintraege.splice(start_index, 1);
    this.eintraege_anzeigen();
    this.gesamtbilanz_erstellen();
    this.gesamtbilanz_anzeigen();
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

    this.eintrag_entfernen_event_hinzufuegen(listenpunkt); // Testlog
    // WICHTIG: Den zusammengebauten listenpunkt mit explizitem return zurückgeben:
    return listenpunkt;
  },

  //Methode: Erzeugt ein click-Event und holt den Timestamp aus der variablen listenpunkt
  eintrag_entfernen_event_hinzufuegen(listenpunkt) {

    listenpunkt.querySelector(".entfernen-button").addEventListener("click", e => {
      let timestamp = e.target.parentElement.getAttribute("data-eintrag");
      this.eintrag_entfernen(timestamp);
    })
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

  // Zeigt nach Prüfung und Löschung evt. vorhandener alter Gesamtbilanzen die Gesamtbilanz an der richtigen Stelle im HTML:
  gesamtbilanz_anzeigen() {
    // Prüfen und Löschen von evtl. vorhandener Gesamtbilanz
    document.querySelectorAll("#gesamtbilanz").forEach(gesamtbilanz => gesamtbilanz.remove()); // Arrow

    // Neue Gesamtbilanz im Frontend an richtiger Stelle anzeigen (html_gesamtbilanz_generieren())
    document.querySelector("body").insertAdjacentElement("beforeend", this.html_gesamtbilanz_generieren());
  }
};
