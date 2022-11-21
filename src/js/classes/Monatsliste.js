"use strict";

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

    eintrag_hinzufuegen(eintrag) {
        this._eintraege.push(eintrag);
    }

    //   // Methode: Einträge nach Datum absteigend sortieren.
    //   _eintraege_sortieren() {
    //     this._eintraege.sort((eintrag_a, eintrag_b) => {
    //       return eintrag_a.datum() > eintrag_b.datum() ? -1 : eintrag_a.datum() < eintrag_b.datum() ? 1 : 0;
    //       });
    // }


    //   // Methode: Oben generierte Listenpunkte in <ul> schiessen und diese in <article> schiessen. eintrag erzeugen.
    //   _eintraege_anzeigen() {
    //     // Überprüfen und Löschen von <ul>
    //     document.querySelectorAll(".monatsliste ul").forEach(eintragsliste => eintragsliste.remove()); //Arrow

    //     // Generieren und Platzieren von <ul> und oben generierten Listenpunkten
    //     let eintragsliste = document.createElement("ul");
    //     this._eintraege.forEach(eintrag => eintragsliste.insertAdjacentElement("beforeend", eintrag.html())); //Arrow
    //     document.querySelector(".monatsliste").insertAdjacentElement("afterbegin", eintragsliste);
    // }

    _html_generieren() {

    }


}
