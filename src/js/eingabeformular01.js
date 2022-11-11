"use strict";

const eingabeformular = {

  // Methode: Holt die Roh-Eingabedaten aus dem submit Event
  formulardaten_holen(e) {
    return {
      titel: e.target.elements.titel.value,
      betrag: e.target.elements.betrag.value,
      einnahme: e.target.elements.einnahme.checked,
      ausgabe: e.target.elements.ausgabe.checked,
      datum: e.target.elements.datum.valueAsDate
    }
  },

  // Methode: Verarbeitet die Roh-Eingabedaten
  formulardaten_verarbeiten(formulardaten) {
    let typ;
    if (formulardaten.einnahme === true) {
      typ = "einnahme";
    } else if(formulardaten.ausgabe === true) {
      typ = "ausgabe";
    }

    return {
      titel: formulardaten.titel.trim(),
      typ: typ,
      betrag: parseFloat(formulardaten.betrag) * 100,
      datum: formulardaten.datum
    }
  },

  // Methode validiert die verarbeiteten Eingabedaten. Sammelt Fehler und gibt diese als Array zurück.
  formulardaten_validieren(formulardaten) {
    let fehler = [];

    if(formulardaten.titel === "") {
      fehler.push("Titel:");
    }
    if (formulardaten.typ === undefined || formulardaten.typ.match(/^(?:einnahme|ausgabe)$/) === null) {
      fehler.push("Typ:");
    }
    if(isNaN(formulardaten.betrag)) {
      fehler.push("Betrag:")
    }
    if(formulardaten.datum === null) {
      fehler.push("Datum:")
    }
    return fehler;
  },

  // Methode: Aktualisiert das Datum
  datum_aktualisieren() {
    let datums_input = document.querySelector("#datum");

    if(datums_input !== null) {
      datums_input.valueAsDate = new Date();
    }
  },

  // Methode: Fängt das Submit Event ab am form-Tag ab.
  absenden_event_hinzufuegen(eingabeformular) {

    eingabeformular.querySelector("#eingabeformular").addEventListener("submit", e => {
      e.preventDefault();
      // Formulardaten holen. Kommt von obiger Methode formulardaten_holen(e). Dorthin wird e zum Abgreifen geschickt.
      // Formulardaten verarbeiten
      let formulardaten = this.formulardaten_verarbeiten(this.formulardaten_holen(e));
      console.log(this.formulardaten_verarbeiten(this.formulardaten_holen(e))); // Test Ausgabe Eingabedaten
      // Formulardaten validieren
      let formulardaten_fehler = this.formulardaten_validieren(formulardaten); // Das ist das Fehler Array
      console.log(formulardaten_fehler); // Test Ausgabe Fehler
      if(formulardaten_fehler.length === 0) { // wenn die Formulardaten valide sind
        // Eintrag zum Haushaltsbuch hinzufügen
        haushaltsbuch.eintrag_hinzufuegen(formulardaten);
        // wenn bereits Fehlermeldung angezeigt wird
            // Fehlermeldung entfernen
        this.fehlerbox_entfernen()
        // Formular zurücksetzen
        e.target.reset();
        // Datum auf den heutigen Tag setzen
        this.datum_aktualisieren();
      } else { // wenn die Formulardaten NICHT valide sind
        // wenn bereits Fehlermeldung angezeigt wird
            // Fehlermeldung entfernen
        this.fehlerbox_entfernen()
        // Fehlermeldung im Eingabeformular-Container anzeigen
        this.fehlerbox_anzeigen(formulardaten_fehler);
      }
    });
  },

  // Methode: Generiert HTML Fehlerbox
  html_fehlerbox_generieren(formulardaten_fehler) {

    // <div class="fehlerbox">
      // <span>Es gibt Fehler in folgenden Eingabefeldern:</span>
      // <ul>
      //   <li>Titel</li>
      //   <li>Betrag</li>
      //   <li>Datum</li>
      // </ul>
    // </div>

    let fehlerbox = document.createElement("div");
    fehlerbox.setAttribute("class", "fehlerbox");

    let fehlertext = document.createElement("span");
    fehlertext.textContent = "Es gibt Fehler in folgenden Eingabefeldern:";
    fehlerbox.insertAdjacentElement("afterbegin", fehlertext);

    let fehlerliste = document.createElement("ul");
    formulardaten_fehler.forEach(fehler => {
      let fehlerlistenpunkt = document.createElement("li");
      fehlerlistenpunkt.textContent = fehler;
      fehlerliste.insertAdjacentElement("beforeend", fehlerlistenpunkt);
    })
    fehlerbox.insertAdjacentElement("beforeend", fehlerliste)

    return fehlerbox;
  },

  //Methode: Zeigt die Fehlerbox an wenn ein Fehler im Array ist
  fehlerbox_anzeigen(formulardaten_fehler) {
    let eingabebox_container = document.querySelector("#eingabeformular-container");
    if(eingabebox_container !== null) {
      eingabebox_container.insertAdjacentElement("afterbegin", this.html_fehlerbox_generieren(formulardaten_fehler));
    }
  },

  // Methode: Fehlerbox entfernen
  fehlerbox_entfernen() {
    let bestehende_fehlerbox = document.querySelector(".fehlerbox");
    if(bestehende_fehlerbox !== null) {
      bestehende_fehlerbox.remove();
    }
  },



  // Methode: Kreiert das Eingabeformular und injiziert das HTML
  html_generieren() {

    let eingabeformular = document.createElement("section");
    eingabeformular.setAttribute("id", "eingabeformular-container");
    eingabeformular.innerHTML = `<form id="eingabeformular" action="#" method="get"></form>
      <div class="eingabeformular-zeile">
          <h1>Neue Einnahme / Ausgabe hinzufügen</h1>
      </div>
      <div class="eingabeformular-zeile">
          <div class="titel-typ-eingabe-gruppe">
              <label for="titel">Titel</label>
              <input type="text" id="titel" form="eingabeformular" name="titel" placeholder="z.B. Einkaufen" size="10" title="Titel des Eintrags">
              <input type="radio" id="einnahme" name="typ" value="einnahme" form="eingabeformular" title="Typ des Eintrags">
              <label for="einnahme" title="Typ des Eintrags">Einnahme</label>
              <input type="radio" id="ausgabe" name="typ" value="ausgabe" form="eingabeformular" title="Typ des Eintrags" checked>
              <label for="ausgabe" title="Typ des Eintrags">Ausgabe</label>
          </div>
      </div>
      <div class="eingabeformular-zeile">
          <div class="betrag-datum-eingabe-gruppe">
              <label for="betrag">Betrag</label>
              <input type="number" id="betrag" name="betrag" form="eingabeformular" placeholder="z.B. 10,42" size="10" step="0.01" title="Betrag des Eintrags (max. zwei Nachkommastellen, kein €-Zeichen)">
              <label for="datum">Datum</label>
              <input type="date" id="datum" name="datum" form="eingabeformular" placeholder="jjjj-mm-tt" size="10" title="Datum des Eintrags (Format: jjjj-mm-tt)">
          </div>
      </div>
      <div class="eingabeformular-zeile">
          <button class="standard" type="submit" form="eingabeformular">Hinzufügen</button>
      </div>`;

    // eingabeformular wird nach oben übergeben.
    this.absenden_event_hinzufuegen(eingabeformular);

    return eingabeformular;
  },

  anzeigen() {

    document.querySelector("#navigationsleiste").insertAdjacentElement("afterend", this.html_generieren());
    // Datum auf den heutigen Tag setzen
    this.datum_aktualisieren()
  }
};
