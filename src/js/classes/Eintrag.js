import haushaltsbuch from "./../main.js";

export default class Eintrag {

    constructor(titel, typ, betrag, datum) {

        this._titel = titel;
        this._typ = typ;
        this._betrag = betrag;
        this._datum = datum;
        this._timestamp = Date.now();
        this._html = this._html_generieren();
    }

    titel() {
        return this._titel;
    }

    typ() {
        return this._typ;
    }

    betrag() {
      return this._betrag;
    }

    datum() {
      return this._datum;
    }

    timestamp() {
      return this._timestamp;
    }

    html() {
        return this._html;
    }

     // Methode: Eintrag als HTML-Listenpunkt mit allen spans darin generieren
    _html_generieren() {
        // Listenpunkt anlegen
        let listenpunkt = document.createElement("li");

        // Ternary um die Klasse zu setzen
        this._typ === "einnahme" ? listenpunkt.setAttribute("class", "einnahme") : listenpunkt.setAttribute("class", "ausgabe");

        listenpunkt.setAttribute("data-eintrag", this._timestamp);

        // Komplette Span für datum anlegen
        let datum = document.createElement("span");
        datum.setAttribute("class", "datum");
        datum.textContent = this._datum.toLocaleDateString("de-DE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        })
        listenpunkt.insertAdjacentElement("afterbegin", datum);

        // Komplette Span für titel anlegen
        let titel = document.createElement("span");
        titel.setAttribute("class", "titel");
        titel.textContent = this._titel;
        datum.insertAdjacentElement("afterend", titel);

        // Komplette Span für betrag anlegen
        let betrag = document.createElement("span");
        betrag.setAttribute("class", "betrag");
        betrag.textContent = `${(this._betrag / 100).toFixed(2).replace(/\./, ",")} €`;
        titel.insertAdjacentElement("afterend", betrag);

        // button-Element anlegen:
        let button = document.createElement("button");
        button.setAttribute("class", "entfernen-button");
        betrag.insertAdjacentElement("afterend", button);

        // icon-Element anlegen:
        let icon = document.createElement("i");
        icon.setAttribute("class", "fas fa-trash");
        button.insertAdjacentElement("afterbegin", icon);

        this._eintrag_entfernen_event_hinzufuegen(listenpunkt); // Muss für Löschfunktion hier aufgerufen werden
        // WICHTIG: Den zusammengebauten listenpunkt mit explizitem return zurückgeben:
        return listenpunkt;
    }

  //Methode: Erzeugt ein click-Event und holt den Timestamp aus der variablen listenpunkt
  // Wird bei der Eintragerstellung obben gleich hinzugefügt um späteres Löschen möglich zu machen.
  _eintrag_entfernen_event_hinzufuegen(listenpunkt) {
      listenpunkt.querySelector(".entfernen-button").addEventListener("click", e => {
        let timestamp = e.target.parentElement.getAttribute("data-eintrag");
        haushaltsbuch.eintrag_entfernen(timestamp);
      })
  }
}
