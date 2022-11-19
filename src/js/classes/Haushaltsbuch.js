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
        this._gesamtbilanz.aktualisieren(this._eintraege); // Ruft Methode aus Klasse Gesamtbilanz uund übergibt Array
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
        this._gesamtbilanz.aktualisieren(this._eintraege); // Ruft Methode aus Klasse Gesatbilanz
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



}
