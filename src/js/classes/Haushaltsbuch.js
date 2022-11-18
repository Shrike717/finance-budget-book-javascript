"use strict";

class Haushaltsbuch {

    constructor() {
      this._eintraege = [];
      this.monatslistensammlung = new Monatslistensammlung(); // Initialisierung mit Instanz
      this._gesamtbilanz = new Gesamtbilanz(); // Initialisierung mit Instanz
    }


    // Methode: Zentral und wichtig deswegen oben
    eintrag_hinzufuegen(formulardaten) {  // Hier wird vom Eintragsformular zugegriffen. Kein Prefix
        let neuer_eintrag = new Eintrag(
            formulardaten.titel,
            formulardaten.typ,
            formulardaten.betrag,
            formulardaten.datum
        );
        this._eintraege.push(neuer_eintrag);
        console.log(this);
        this._eintraege_sortieren();
        this._eintraege_anzeigen();
        this._gesamtbilanz_erstellen();
        this._gesamtbilanz_anzeigen();
    }

    //Methode: Löscht einen Eintrag aus UI und eintraege Array:
    eintrag_entfernen(timestamp) {
        let start_index;
        for (let i = 0; i < this._eintraege.length; i++) {
            if (this._eintraege[i].timestamp() === parseInt(timestamp)) {
                // console.log(this._eintraege[i].get("timestamp")); Test
                start_index = i;
                break;
            }
        }
        this._eintraege.splice(start_index, 1);
        this._eintraege_anzeigen();
        this._gesamtbilanz_erstellen();
        this._gesamtbilanz_anzeigen();
    }

    // Methode: Einträge nach Datum absteigend sortieren.
    _eintraege_sortieren() {
        this._eintraege.sort((eintrag_a, eintrag_b) => {
          return eintrag_a.datum() > eintrag_b.datum() ? -1 : eintrag_a.datum() < eintrag_b.datum() ? 1 : 0;
          });
    }

      // Methode: Oben generierte Listenpunkte in <ul> schiessen und diese in <article> schiessen. eintrag erzeugen.
    _eintraege_anzeigen() {
        // Überprüfen und Löschen von <ul>
        document.querySelectorAll(".monatsliste ul").forEach(eintragsliste => eintragsliste.remove()); //Arrow

        // Generieren und Platzieren von <ul> und oben generierten Listenpunkten
        let eintragsliste = document.createElement("ul");
        this._eintraege.forEach(eintrag => eintragsliste.insertAdjacentElement("beforeend", eintrag.html())); //Arrow
        document.querySelector(".monatsliste").insertAdjacentElement("afterbegin", eintragsliste);
    }

    // Methode: Gesamtbilanz erstellen verrechnet die Einträge jeweils mit der Gesamtbilanz:
    _gesamtbilanz_erstellen() {
        let neue_gesamtbilanz = new Map();
        neue_gesamtbilanz.set("einnahmen", 0);
        neue_gesamtbilanz.set("ausgaben", 0);
        neue_gesamtbilanz.set("bilanz", 0);

        this._eintraege.forEach(eintrag => { // Arrow
            switch (eintrag.typ()) {
                case "einnahme":
                    neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einnahmen") + eintrag.betrag());
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.betrag());
                    break;
                case "ausgabe":
                    neue_gesamtbilanz.set("ausgaben", neue_gesamtbilanz.get("ausgaben") + eintrag.betrag());
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") - eintrag.betrag());
                    break;
                default:
                    console.log(`Der Typ "${eintrag.typ()}" ist nicht bekannt.`);
                    break;
              }
        });
        this.gesamtbilanz = neue_gesamtbilanz;
    }

    // Methode: Erzeugt das ganze HTML-Element <aside> mit den Werten für die Gesamtbilanz.
   _html_gesamtbilanz_generieren() {
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
        this.gesamtbilanz.get("bilanz") >= 0 ? bilanz_betrag.setAttribute("class", "positiv") : bilanz_betrag.setAttribute("class", "negativ");
        bilanz_betrag.textContent = `${(this.gesamtbilanz.get("bilanz") / 100).toFixed(2).replace(/\./, ",")} €`;
        bilanz_zeile.insertAdjacentElement("beforeend", bilanz_betrag);

        gesamtbilanz.insertAdjacentElement("beforeend", bilanz_zeile);

        // WICHTIG: Explizite Rückgabe mit return
        return gesamtbilanz;
    }

    // Zeigt nach Prüfung und Löschung evt. vorhandener alter Gesamtbilanzen die Gesamtbilanz an der richtigen Stelle im HTML:
    _gesamtbilanz_anzeigen() {
        // Prüfen und Löschen von evtl. vorhandener Gesamtbilanz
        document.querySelectorAll("#gesamtbilanz").forEach(gesamtbilanz => gesamtbilanz.remove()); // Arrow

        // Neue Gesamtbilanz im Frontend an richtiger Stelle anzeigen (html_gesamtbilanz_generieren())
        document.querySelector("body").insertAdjacentElement("beforeend", this._html_gesamtbilanz_generieren());
    }

}
