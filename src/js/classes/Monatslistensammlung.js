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
        let eintragsmonat = eintrag.datum().toLocaleString("de-De", {month: "numeric"});
        let eintragsjahr = eintrag.datum().toLocaleString("de-De", {year: "numeric"});

        // Prüfen, ob Monatsliste schon vorhanden ist
        let monatsliste_vorhanden = false;
        this._monatslisten.forEach(monatsliste => {
            if (eintragsmonat === monatsliste.monat() && eintragsjahr === monatsliste.jahr()) {
              // Eintrag wird dem Array in schon vorhandene Monatsliste.js hinzugefügt
                monatsliste.eintrag_hinzufuegen(eintrag);
                monatsliste_vorhanden = true;
            }
        });
        // Wenn keine Monatsliste: Eine neue wird angelegt
        if(!monatsliste_vorhanden) { // Ich kann auch schreiben !monatsliste_vorhanden
          this._monatsliste_hinzufuegen(eintragsjahr, eintragsmonat, eintrag);
        }
        this._aktualisieren();
    }

    _monatsliste_hinzufuegen(jahr, monat, eintrag) {
        // Neue Monatsliste instanziieren
        let neue_monatsliste = new Monatsliste(jahr, monat);
        // Eintrag zu neuer Monatsliste hinzufügen
        neue_monatsliste.eintrag_hinzufuegen(eintrag);
        // Neue Monatsliste zu monatslistensammlung hinzufügen
        this._monatslisten.push(neue_monatsliste);
    }

    _monatslisten_sortieren() {
        this._monatslisten.sort((monatsliste_a, monatsliste_b) => {
            if (monatsliste_a.jahr() < monatsliste_b.jahr()) {
                return 1;
            } else if (monatsliste_a.jahr() > monatsliste_b.jahr()) {
                return -1;
            } else {
                if (monatsliste_a.monat() < monatsliste_b.monat()) {
                    return 1;
                } else {
                    return -1;
            }
        }})
    }

    _html_generieren() {
        let monatslisten = document.createElement("section");
        monatslisten.setAttribute("id", "monatslisten");

        this._monatslisten.forEach(monatsliste => {
            monatslisten.insertAdjacentElement("beforeend", monatsliste.html());
        })

        return monatslisten;
    }

    _aktualisieren() {
        this._monatslisten_sortieren();
        this._html = this._html_generieren(); // Generiert das HTML neu
        this.anzeigen(); // Und zeigt es danach neu an.
    }

    anzeigen() {
      let eingabeformular_container = document.querySelector("#eingabeformular-container");
      let monatslistensammlung = document.querySelector("#monatslisten");

      if(eingabeformular_container !== null) {
          if(monatslistensammlung !== null) {
            monatslistensammlung.remove();
          }
          eingabeformular_container.insertAdjacentElement("afterend", this._html);
      }
    }
}
