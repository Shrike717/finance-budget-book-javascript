"use strict";

class Haushaltsbuch {

    constructor() {
      this._eintraege = [];
      this._monatslistensammlung = new Monatslistensammlung(); // Initialisierung mit Instanz
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
        this._monatslistensammlung.eintrag_hinzufuegen(neuer_eintrag);
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
        this._gesamtbilanz.aktualisieren(this._eintraege); // Ruft Methode aus Klasse Gesatbilanz
    }


    anzeigen(){
        this._monatslistensammlung.anzeigen();
        this._gesamtbilanz.anzeigen();
    }
}
