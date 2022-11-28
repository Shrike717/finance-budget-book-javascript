import Navigationsleiste from "./Navigationsleiste.js";
import Eingabeformular from "./Eingabeformular.js";
import Monatslistensammlung from "./Monatslistensammlung.js";
import Gesamtbilanz from "./Gesamtbilanz.js";
import Eintrag from "./Eintrag.js";

export default class Haushaltsbuch {

    constructor() {
      this._eintraege = [];
      this._navigationsleiste = new Navigationsleiste(); // Initialisierung mit Instanz
      this._eingabeformular = new Eingabeformular(); // Initialisierung mit Instanz
      this._monatslistensammlung = new Monatslistensammlung(); // Initialisierung mit Instanz
      this._gesamtbilanz = new Gesamtbilanz(); // Initialisierung mit Instanz
      this._wiederherstellen();
    }

    // Methode: Zentral und wichtig deswegen oben
    eintrag_hinzufuegen(eintragsdaten) {  // Hier wird vom Eintragsformular zugegriffen. Kein Prefix
        let neuer_eintrag = new Eintrag(
            eintragsdaten.titel,
            eintragsdaten.typ,
            eintragsdaten.betrag,
            eintragsdaten.datum
        );
        this._eintraege.push(neuer_eintrag);
        this._monatslistensammlung.aktualisieren(this._eintraege);
        this._gesamtbilanz.aktualisieren(this._eintraege); // Ruft Methode aus Klasse Gesamtbilanz uund übergibt Array
        this._speichern();
    }

    //Methode: Löscht einen Eintrag aus UI und eintraege Array:
    eintrag_entfernen(timestamp) {
        let start_index;
        for (let i = 0; i < this._eintraege.length; i++) {
            if (this._eintraege[i].timestamp() === parseInt(timestamp)) {
                start_index = i;
                break;
            }
        }
        this._eintraege.splice(start_index, 1);
        this._monatslistensammlung.aktualisieren(this._eintraege);
        this._gesamtbilanz.aktualisieren(this._eintraege); // Ruft Methode aus Klasse Gesatbilanz
        this._speichern();
    }

    _speichern() {
        localStorage.setItem("eintraege", JSON.stringify(this._eintraege));
    }

    _wiederherstellen() {
        let gespeicherte_eintraege = localStorage.getItem("eintraege");
        if (gespeicherte_eintraege !== null) {
            JSON.parse(gespeicherte_eintraege).forEach(eintrag => {
                this.eintrag_hinzufuegen({
                    titel: eintrag._titel,
                    typ: eintrag._typ,
                    betrag: eintrag._betrag,
                    datum: new Date(eintrag._datum)
                });
            });
        }
    }

    start(){
        this._navigationsleiste.anzeigen();
        this._eingabeformular.anzeigen();
        this._monatslistensammlung.anzeigen();
        this._gesamtbilanz.anzeigen();
    }
}
