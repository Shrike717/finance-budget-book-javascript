"use strict";

/*
<section id="monatslisten">
</section>
*/

class Monatslistensammlung {

    constructor() {
        this._monatslisten = [];
        this._html = this._html_generieren();
    }

    eintrag_hinzufuegen(eintrag) {
        // Werte für Monat und Jahr holen
        let eintragsmonat = eintrag.date().toLocaleString("de-De", {month: "numeric"});
        let eintragsjahr = eintrag.date().toLocaleString("de-De", {year: "numeric"});
        // Prüfen, ob Monatsliste schon vorhanden ist
        let monatsliste_vorhanden = false;
        this._monatslisten.forEach(monatsliste => {
            if(eintragsmonat === monatsliste.monat() && eintragsjahr === monatsliste.jahr()) {
              // Eintrag wird dem Array in schon vorhandene Monatsliste.js hinzugefügt
              monatsliste.eintrag_hinzufuegen(eintrag);
              monatsliste_vorhanden = true;
            }
            // Wenn keine Monatsliste: Eine neue wird angelegt
            if(monatsliste_vorhanden = false) { // Ich kann auch schreiben !monatsliste_vorhanden
              this._monatsliste_hinzufuegen();
            }
        })
    }

    _monatsliste_hinzufuegen() {


    }

    _html_generieren() {

    }

    anzeigen() {


    }
}
