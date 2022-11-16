"use strict";

class Eingabeformular {

      constructor() {
          this._html = this._html_generieren();
      }
      // Methode: Holt die Roh-Eingabedaten aus dem submit Event
      _formulardaten_holen(e) {
        return {
          titel: e.target.elements.titel.value,
          betrag: e.target.elements.betrag.value,
          einnahme: e.target.elements.einnahme.checked,
          datum: e.target.elements.datum.valueAsDate
        }
    }

    // Methode: Verarbeitet die Roh-Eingabedaten
    _formulardaten_verarbeiten(formulardaten) {
        return {
          titel: formulardaten.titel.trim(),
          typ: formulardaten.einnahme === false ? "ausgabe" : "einnahme",
          betrag: parseFloat(formulardaten.betrag) * 100,
          datum: formulardaten.datum
        }
    }

    // Methode validiert die verarbeiteten Eingabedaten. Sammelt Fehler und gibt diese als Array zurück.
    _formulardaten_validieren(formulardaten) {
        let fehler = [];

        if(formulardaten.titel === "") {
          fehler.push("Titel:");
        }

        if(isNaN(formulardaten.betrag)) {
          fehler.push("Betrag:")
        }
        if(formulardaten.datum === null) {
          fehler.push("Datum:")
        }
        return fehler;
    }

    // Methode: Aktualisiert das Datum
    _datum_aktualisieren() {
        let datums_input = document.querySelector("#datum");

        if(datums_input !== null) {
          datums_input.valueAsDate = new Date();
        }
    }

    // Methode: Fängt das Submit Event ab am form-Tag ab.
    _absenden_event_hinzufuegen(eingabeformular) {
        eingabeformular.querySelector("#eingabeformular").addEventListener("submit", e => {
          e.preventDefault();
          // Formulardaten holen. Kommt von obiger Methode formulardaten_holen(e). Dorthin wird e zum Abgreifen geschickt.
          // Formulardaten verarbeiten
          let formulardaten = this._formulardaten_verarbeiten(this._formulardaten_holen(e));
          // Formulardaten validieren
          let formulardaten_fehler = this._formulardaten_validieren(formulardaten); // Das ist das Fehler Array
          if(formulardaten_fehler.length === 0) { // wenn die Formulardaten valide sind
            // Eintrag zum Haushaltsbuch hinzufügen
            haushaltsbuch.eintrag_hinzufuegen(formulardaten); // Bleibt öffentlich. Kein Prefix
            // wenn bereits Fehlermeldung angezeigt wird
                // Fehlermeldung entfernen
            this._fehlerbox_entfernen()
            // Formular zurücksetzen
            e.target.reset();
            // Datum auf den heutigen Tag setzen
            this._datum_aktualisieren();
          } else { // wenn die Formulardaten NICHT valide sind
            // wenn bereits Fehlermeldung angezeigt wird
                // Fehlermeldung entfernen
            this._fehlerbox_entfernen()
            // Fehlermeldung im Eingabeformular-Container anzeigen
            this._fehlerbox_anzeigen(formulardaten_fehler);
          }
        });
    }

    // Methode: Generiert HTML Fehlerbox
    _html_fehlerbox_generieren(formulardaten_fehler) {
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
    }

    //Methode: Zeigt die Fehlerbox an wenn ein Fehler im Array ist
    _fehlerbox_anzeigen(formulardaten_fehler) {
        let eingabebox_container = document.querySelector("#eingabeformular-container");
        if(eingabebox_container !== null) {
          eingabebox_container.insertAdjacentElement("afterbegin", this._html_fehlerbox_generieren(formulardaten_fehler));
        }
    }

    // Methode: Fehlerbox entfernen
    _fehlerbox_entfernen() {
        let bestehende_fehlerbox = document.querySelector(".fehlerbox");
        if(bestehende_fehlerbox !== null) {
          bestehende_fehlerbox.remove();
        }
    }



    // Methode: Kreiert das Eingabeformular und injiziert das HTML
    _html_generieren() {
        let eingabeformular = document.createElement("section");
        eingabeformular.setAttribute("id", "eingabeformular-container");
        eingabeformular.innerHTML = `<form id="eingabeformular" action="#" method="get"></form>
          <div class="eingabeformular-zeile">
              <h1>Neue Einnahme / Ausgabe hinzufügen</h1>
          </div>
          <div class="eingabeformular-zeile">
              <div class="titel-typ-eingabe-gruppe">
                  <label for="titel">Titel</label>
                  <input type="text" id="titel" form="eingabeformular" name="titel" placeholder="z.B. Einkaufen" size="10" title="Titel des Eintrags" required>
                  <input type="radio" id="einnahme" name="typ" value="einnahme" form="eingabeformular" title="Typ des Eintrags">
                  <label for="einnahme" title="Typ des Eintrags">Einnahme</label>
                  <input type="radio" id="ausgabe" name="typ" value="ausgabe" form="eingabeformular" title="Typ des Eintrags" checked>
                  <label for="ausgabe" title="Typ des Eintrags">Ausgabe</label>
              </div>
          </div>
          <div class="eingabeformular-zeile">
              <div class="betrag-datum-eingabe-gruppe">
                  <label for="betrag">Betrag</label>
                  <input type="number" id="betrag" name="betrag" form="eingabeformular" placeholder="z.B. 10,42" size="10" step="0.01" title="Betrag des Eintrags (max. zwei Nachkommastellen, kein €-Zeichen)" required>
                  <label for="datum">Datum</label>
                  <input type="date" id="datum" name="datum" form="eingabeformular" placeholder="jjjj-mm-tt" size="10" title="Datum des Eintrags (Format: jjjj-mm-tt)" required>
              </div>
          </div>
          <div class="eingabeformular-zeile">
              <button class="standard" type="submit" form="eingabeformular">Hinzufügen</button>
          </div>`;

        // eingabeformular wird nach oben übergeben.
        this._absenden_event_hinzufuegen(eingabeformular);

        return eingabeformular;
    }

    // Methode: Injeziert das ganze HTML nach der Navileiste rein.
    anzeigen() {
        let navigationsleiste = document.querySelector("body")
        if(navigationsleiste !== null) {
          navigationsleiste.insertAdjacentElement("afterbegin", this._html);
          // Datum auf den heutigen Tag setzen
          this._datum_aktualisieren()
        }
    }

}
