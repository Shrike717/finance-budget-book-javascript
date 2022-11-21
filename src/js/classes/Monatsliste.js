"use strict";

class Monatsliste {

    constructor(jahr, monat, ) {
        this._jahr = jahr;
        this._monat = monat;
        this._eintraege = [];
        this._bilanz = 0;
        this._html = this._html_generieren();
    }

    monat() {
        this._monat = monat;
    }

    jahr() {
        this._jahr = jahr;
    }

    bilanz() {
      this._bilanz = 0;
    }

    eintrag_hinzufuegen(eintrag) {
        this._eintraege.push(eintrag);
    }

    //   // Methode: Einträge nach Datum absteigend sortieren.
    //   _eintraege_sortieren() {
    //     this._eintraege.sort((eintrag_a, eintrag_b) => {
    //       return eintrag_a.datum() > eintrag_b.datum() ? -1 : eintrag_a.datum() < eintrag_b.datum() ? 1 : 0;
    //       });
    // }

    /*
    <article class="monatsliste">
    <h2>
        <span class="monat-jahr">Februar 2020</span>
        <span class="monatsbilanz negativ">-326,84€</span>
    </h2>
    <ul>
        <li></li>
        <li></li>
    </ul>
    </article>
    */

    _html_generieren() {
        let monatsliste = document.createElement("article");
        monatsliste.setAttribute("class", "monatsliste");

        let ueberschrift = document.createElement("h2");

        let monat_jahr = document.createElement("span");
        monat_jahr.setAttribute("class", "monat-jahr");
        monat_jahr.textContent = `${new Date(this._jahr, this._monat - 1).toLocaleString("de-De", {
          month: "long",
          year: "numeric"
        })}`;
        ueberschrift.insertAdjacentElement("afterbegin", monat_jahr);

        let monatsbilanz = document.createElement("span");
        monatsbilanz.setAttribute("class", "monatsbilanz");
        if(this._bilanz >= 0) {
            monatsbilanz.setAttribute("class", "monatsbilanz positiv");
        } else {
          monatsbilanz.setAttribute("class", "monatsbilanz negativ");
        }
        monatsbilanz.textContent = `${this.bilanz()} €`;

        ueberschrift.insertAdjacentElement("beforend", monatsbilanz);

        monatsliste.insertAdjacentElement("afterbegin", ueberschrift);

        // Generieren und Platzieren von <ul> und oben generierten Listenpunkten
        let eintragsliste = document.createElement("ul");
        this._eintraege.forEach(eintrag => eintragsliste.insertAdjacentElement("beforeend", eintrag.html()));
        monatsliste.insertAdjacentElement("beforeend", eintragsliste);

        return monatsliste;
    }

}
