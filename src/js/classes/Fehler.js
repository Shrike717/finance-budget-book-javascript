"use strict";

class Fehler {

    constructor(fehlertext, formulardaten_fehler) {

        this._fehlertext = fehlertext;
        this._formulardaten_fehler = formulardaten_fehler;
        this._html = this._html_generieren();

    }

    _html_generieren() {

        let fehlerbox = document.createElement("div");
        fehlerbox.setAttribute("class", "fehlerbox");

        let fehlertext = document.createElement("span");
        fehlertext.textContent = this._fehlertext; // Muss nicht mehr fest definiert werden hier. Kommt von Instanz
        fehlerbox.insertAdjacentElement("afterbegin", fehlertext);

        let fehlerliste = document.createElement("ul");
        this._formulardaten_fehler.forEach(fehler => { // Jetzt wird über die Eigenschaft der Klasse iteriert.
          let fehlerlistenpunkt = document.createElement("li");
          fehlerlistenpunkt.textContent = fehler;
          fehlerliste.insertAdjacentElement("beforeend", fehlerlistenpunkt);
        })
        fehlerbox.insertAdjacentElement("beforeend", fehlerliste)

        return fehlerbox;
    }

    _entfernen() {
      let bestehende_fehlerbox = document.querySelector(".fehlerbox");
      if(bestehende_fehlerbox !== null) {
        bestehende_fehlerbox.remove();
      }
    }

    anzeigen() {
        this._entfernen();
        let eingabebox_container = document.querySelector("#eingabeformular-container");
        if(eingabebox_container !== null) {
          eingabebox_container.insertAdjacentElement("afterbegin", this._html); // Wird jetzt als Eigenschaft der Klasse referenziert.
        }
    }

}
