"use strict";

// ALTER CODE VOR REFAKTURIERUNG MIT OBJEKTEN PRAXIS 5.1

// // Globale Variablen
// let einnahmen = 0,
//     ausgaben = 0,
//     bilanz = 0,
//     titel,
//     typ,
//     betrag,
//     datum;

// // Funktion 01:Eingabedaten holen
// const eintrag_erfassen = function () {
//     titel = prompt ("Titel:");
//     typ = prompt ("Typ (Einnahme oder Ausgabe):");
//     betrag = parseInt(prompt ("Betrag (in Cent):"));
//     datum = prompt ("Datum (jjjj-mm-tt):");
// };

// // Funktion 02:Eingabedaten ausgeben
// const eintrag_ausgeben = function (titel, typ, betrag, datum) {
//     console.log(`Titel: ${titel}
// Typ: ${typ}
// Betrag: ${betrag} ct
// Datum: ${datum}`
//     );
// };

// // Funktion 03:Einträge in Einnahmen, Ausgaben und Gesamtbelanz verrechnen
// const eintrag_mit_gesamtbilanz_verrechnen = function (typ, betrag) {
// if (typ === "Einnahme") {
//     einnahmen = einnahmen + betrag;
//     bilanz = bilanz + betrag;
// } else if (typ === "Ausgabe"){
//     ausgaben = ausgaben + betrag;
//     bilanz = bilanz - betrag;
// } else {
//     console.log(`Der Typ "${typ}" ist nicht bekannt.`);
//     }
// };

// // Funktion 04:Gesamtbilanz ausgeben
// const gesamtbilanz_ausgeben = function (einnahmen, ausgaben, bilanz) {
// console.log(`Einnahmen:${einnahmen} ct
// Ausgaben: ${ausgaben} ct
// Bilanz: ${bilanz} ct
// Bilanz ist positiv: ${bilanz >= 0}`
//     );
// };

// // Funktion 05:Alle Funktionsaufrufe zusammengefasst
// const eintrag_hinzufuegen =function () {
//     eintrag_erfassen();
//     eintrag_ausgeben(titel, typ, betrag, datum);
//     eintrag_mit_gesamtbilanz_verrechnen(typ, betrag);
//     gesamtbilanz_ausgeben(einnahmen, ausgaben, bilanz);
// };

// eintrag_hinzufuegen();
// // eintrag_hinzufuegen();
// // eintrag_hinzufuegen();



// NEUER  CODE NACH REFAKTURIERUNG MIT OBJEKTEN PRAXIS 5.1

// Objekt haushaltsbuch anlegen
const haushaltsbuch = {

    gesamtbilanz: {
        einnahmen: 0,
        ausgaben: 0,
        bilanz: 0,
    },

    neuer_eintrag: {
        titel: null,
        typ: null,
        betrag: null,
        datum: null
    },

    // Method 01:Eingabedaten holen
    eintrag_erfassen() {
        this.neuer_eintrag.titel = prompt ("Titel:");
        this.neuer_eintrag.typ = prompt ("Typ (Einnahme oder Ausgabe):");
        this.neuer_eintrag.betrag = parseInt(prompt ("Betrag (in Cent):"));
        this.neuer_eintrag.datum = prompt ("Datum (jjjj-mm-tt):");
    },

    // Method 02:Eingabedaten ausgeben
    eintrag_ausgeben() {
        console.log(`Titel: ${this.neuer_eintrag.titel}
    Typ: ${this.neuer_eintrag.typ }
    Betrag: ${this.neuer_eintrag.betrag} ct
    Datum: ${this.neuer_eintrag.datum }`
        );
    },

    // Method 03:Einträge in Einnahmen, Ausgaben und Gesamtbelanz verrechnen
    eintrag_mit_gesamtbilanz_verrechnen() {
    if (this.neuer_eintrag.typ === "Einnahme") {
        this.gesamtbilanz.einnahmen += this.neuer_eintrag.betrag;
        this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
    } else if (this.neuer_eintrag.typ === "Ausgabe"){
        this.gesamtbilanz.ausgaben += this.neuer_eintrag.betrag;
        this.gesamtbilanz.bilanz -= this.neuer_eintrag.betrag;
    } else {
        console.log(`Der Typ "${this.neuer_eintrag.typ}" ist nicht bekannt.`);
        }
    },

    // Method 04:Gesamtbilanz ausgeben
    gesamtbilanz_ausgeben() {
        console.log(`Einnahmen:${this.gesamtbilanz.einnahmen} ct
    Ausgaben: ${this.gesamtbilanz.ausgaben} ct
    Bilanz: ${this.gesamtbilanz.bilanz} ct
    Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`
        );
    },

    // Funktion 05:Alle Funktionsaufrufe zusammengefasst
    eintrag_hinzufuegen() {
        this.eintrag_erfassen();                                // Achtung! Hier auch mit .this referenzieren!
        this.eintrag_ausgeben();
        this.eintrag_mit_gesamtbilanz_verrechnen();
        this.gesamtbilanz_ausgeben();
    }
};

haushaltsbuch.eintrag_hinzufuegen();
// haushaltsbuch.eintrag_hinzufuegen();
// haushaltsbuch.eintrag_hinzufuegen();
