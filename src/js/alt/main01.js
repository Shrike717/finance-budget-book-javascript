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



// // NEUER  CODE NACH REFAKTURIERUNG MIT OBJEKTEN PRAXIS 5.1

// // Objekt haushaltsbuch anlegen
// const haushaltsbuch = {

    // gesamtbilanz: {
    //     einnahmen: 0,
    //     ausgaben: 0,
    //     bilanz: 0,
    // },

    // neuer_eintrag: {
    //     titel: null,
    //     typ: null,
    //     betrag: null,
    //     datum: null
    // },

//     // Method 01:Eingabedaten holen
//     eintrag_erfassen() {
//         this.neuer_eintrag.titel = prompt ("Titel:");
//         this.neuer_eintrag.typ = prompt ("Typ (Einnahme oder Ausgabe):");
//         this.neuer_eintrag.betrag = parseInt(prompt ("Betrag (in Cent):"));
//         this.neuer_eintrag.datum = prompt ("Datum (jjjj-mm-tt):");
//     },

//     // Method 02:Eingabedaten ausgeben
//     eintrag_ausgeben() {
//         console.log(`Titel: ${this.neuer_eintrag.titel}
//     Typ: ${this.neuer_eintrag.typ }
//     Betrag: ${this.neuer_eintrag.betrag} ct
//     Datum: ${this.neuer_eintrag.datum }`
//         );
//     },

//     // Method 03:Einträge in Einnahmen, Ausgaben und Gesamtbelanz verrechnen
//     eintrag_mit_gesamtbilanz_verrechnen() {
//     if (this.neuer_eintrag.typ === "Einnahme") {
//         this.gesamtbilanz.einnahmen += this.neuer_eintrag.betrag;
//         this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
//     } else if (this.neuer_eintrag.typ === "Ausgabe"){
//         this.gesamtbilanz.ausgaben += this.neuer_eintrag.betrag;
//         this.gesamtbilanz.bilanz -= this.neuer_eintrag.betrag;
//     } else {
//         console.log(`Der Typ "${this.neuer_eintrag.typ}" ist nicht bekannt.`);
//         }
//     },

//     // Method 04:Gesamtbilanz ausgeben
//     gesamtbilanz_ausgeben() {
//         console.log(`Einnahmen:${this.gesamtbilanz.einnahmen} ct
//     Ausgaben: ${this.gesamtbilanz.ausgaben} ct
//     Bilanz: ${this.gesamtbilanz.bilanz} ct
//     Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`
//         );
//     },

//     // Funktion 05:Alle Funktionsaufrufe zusammengefasst
//     eintrag_hinzufuegen() {
//         this.eintrag_erfassen();                                // Achtung! Hier auch mit .this referenzieren!
//         this.eintrag_ausgeben();
//         this.eintrag_mit_gesamtbilanz_verrechnen();
//         this.gesamtbilanz_ausgeben();
//     }
// };

// haushaltsbuch.eintrag_hinzufuegen();
// // haushaltsbuch.eintrag_hinzufuegen();
// // haushaltsbuch.eintrag_hinzufuegen();


// // NEUER  CODE NACH HINZUFÜGUNG VON SWITCHES PRAXIS 6

// // Objekt haushaltsbuch anlegen
// const haushaltsbuch = {

//   gesamtbilanz: {
//       einnahmen: 0,
//       ausgaben: 0,
//       bilanz: 0,
//   },

//   neuer_eintrag: {
//       titel: null,
//       typ: null,
//       betrag: null,
//       datum: null
//   },

//   // Method 01:Eingabedaten holen
//   eintrag_erfassen() {
//       this.neuer_eintrag.titel = prompt ("Titel:");
//       this.neuer_eintrag.typ = prompt ("Typ (Einnahme oder Ausgabe):");
//       this.neuer_eintrag.betrag = parseInt(prompt ("Betrag (in Cent):"));
//       this.neuer_eintrag.datum = prompt ("Datum (jjjj-mm-tt):");
//   },

//   // Method 02:Eingabedaten ausgeben
//   eintrag_ausgeben() {
//       console.log(`Titel: ${this.neuer_eintrag.titel}
//   Typ: ${this.neuer_eintrag.typ }
//   Betrag: ${this.neuer_eintrag.betrag} ct
//   Datum: ${this.neuer_eintrag.datum }`
//       );
//   },


// // Method 03:Einträge in Einnahmen, Ausgaben und Gesamtbelanz verrechnen
//   eintrag_mit_gesamtbilanz_verrechnen() {

//     switch (this.neuer_eintrag.typ) {
//       case "Einnahme":
//           this.gesamtbilanz.einnahmen += this.neuer_eintrag.betrag;
//           this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
//           break;
//       case "Ausgabe":
//           this.gesamtbilanz.ausgaben += this.neuer_eintrag.betrag;
//           this.gesamtbilanz.bilanz -= this.neuer_eintrag.betrag;
//           break;
//       default:
//           console.log(`Der Typ "${this.neuer_eintrag.typ}" ist nicht bekannt.`);
//           break;
//     }
//   },


//   // Method 04:Gesamtbilanz ausgeben
//   gesamtbilanz_ausgeben() {
//       console.log(`Einnahmen:${this.gesamtbilanz.einnahmen} ct
//   Ausgaben: ${this.gesamtbilanz.ausgaben} ct
//   Bilanz: ${this.gesamtbilanz.bilanz} ct
//   Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`
//       );
//   },

//   // Funktion 05:Alle Funktionsaufrufe zusammengefasst
//   eintrag_hinzufuegen() {
//       this.eintrag_erfassen();                                // Achtung! Hier auch mit .this referenzieren!
//       this.eintrag_ausgeben();
//       this.eintrag_mit_gesamtbilanz_verrechnen();
//       this.gesamtbilanz_ausgeben();
//   }
// };

// haushaltsbuch.eintrag_hinzufuegen();
// haushaltsbuch.eintrag_hinzufuegen();
// haushaltsbuch.eintrag_hinzufuegen();


// NEUER  CODE NACH NACH ERSTELLUNG EINES ARRAYS FÜR EINTRÄGE PRAXIS 7

// // Objekt haushaltsbuch anlegen
// const haushaltsbuch = {

//   gesamtbilanz: {
//       einnahmen: 0,
//       ausgaben: 0,
//       bilanz: 0,
//   },

//   eintraege: [],

//   // Method 01:Eingabedaten holen
//   eintrag_erfassen() {

//       this.eintraege.push(
//           {
//               titel: prompt ("Titel:"),
//               typ: prompt ("Typ (Einnahme oder Ausgabe):"),
//               betrag: parseInt(prompt ("Betrag (in Cent):")),
//               datum: prompt ("Datum (jjjj-mm-tt):")
//           }
//       );
//   },

// //   // Method 02:Eingabedaten ausgeben
// //   eintrag_ausgeben() {
// //       console.log(`Titel: ${this.neuer_eintrag.titel}
// //   Typ: ${this.neuer_eintrag.typ }
// //   Betrag: ${this.neuer_eintrag.betrag} ct
// //   Datum: ${this.neuer_eintrag.datum }`
// //       );
// //   },


// // // Method 03:Einträge in Einnahmen, Ausgaben und Gesamtbelanz verrechnen
// //   eintrag_mit_gesamtbilanz_verrechnen() {

// //     switch (this.neuer_eintrag.typ) {
// //       case "Einnahme":
// //           this.gesamtbilanz.einnahmen += this.neuer_eintrag.betrag;
// //           this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
// //           break;
// //       case "Ausgabe":
// //           this.gesamtbilanz.ausgaben += this.neuer_eintrag.betrag;
// //           this.gesamtbilanz.bilanz -= this.neuer_eintrag.betrag;
// //           break;
// //       default:
// //           console.log(`Der Typ "${this.neuer_eintrag.typ}" ist nicht bekannt.`);
// //           break;
// //     }
// //   },


// //   // Method 04:Gesamtbilanz ausgeben
// //   gesamtbilanz_ausgeben() {
// //       console.log(`Einnahmen:${this.gesamtbilanz.einnahmen} ct
// //   Ausgaben: ${this.gesamtbilanz.ausgaben} ct
// //   Bilanz: ${this.gesamtbilanz.bilanz} ct
// //   Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`
// //       );
// //   },

//   // Funktion 05:Alle Funktionsaufrufe zusammengefasst
//   eintrag_hinzufuegen() {
//       this.eintrag_erfassen();                                // Achtung! Hier auch mit .this referenzieren!
//       // this.eintrag_ausgeben();
//       // this.eintrag_mit_gesamtbilanz_verrechnen();
//       // this.gesamtbilanz_ausgeben();
//   }
// };

// haushaltsbuch.eintrag_hinzufuegen();
// // haushaltsbuch.eintrag_hinzufuegen();
// // haushaltsbuch.eintrag_hinzufuegen();

// console.log(haushaltsbuch);


// NEUER  CODE NACH METHODEN WIEDERHERSTELLEN UND VERBEESSERN PRAXIS 8

// // Objekt haushaltsbuch anlegen

// const haushaltsbuch = {

//   gesamtbilanz: {
//       einnahmen: 0,
//       ausgaben: 0,
//       bilanz: 0,
//   },

//   eintraege: [],

//   // Method 01:Eingabedaten holen
//   eintrag_erfassen() {

//       this.eintraege.push(
//           {
//               titel: prompt ("Titel:"),
//               typ: prompt ("Typ (Einnahme oder Ausgabe):"),
//               betrag: parseInt(prompt ("Betrag (in Cent):")),
//               datum: prompt ("Datum (jjjj-mm-tt):")
//           }
//       );
//   },

//   // Method 02:Eingabedaten ausgeben
//   eintraege_ausgeben() {
//       console.clear();
//       this.eintraege.forEach(function (eintrag) {
//         console.log(`Titel: ${eintrag.titel}\n`
//             + `Typ: ${eintrag.typ}\n`
//             + `Betrag: ${eintrag.betrag} ct\n`
//             + `Datum: ${eintrag.datum}`
//           );
//       })
//   },

//   // Method 03: Gesamtbilanz erstellen:
//   gesamtbilanz_erstellen() {
//       let neue_gesamtbilanz = {
//           einnahmen: 0,
//           ausgaben: 0,
//           bilanz: 0,
//       };
//       this.eintraege.forEach(function (eintrag) {
//           switch (eintrag.typ) {
//               case "Einnahme":
//                   neue_gesamtbilanz.einnahmen += eintrag.betrag;
//                   neue_gesamtbilanz.bilanz += eintrag.betrag;
//                   break;
//               case "Ausgabe":
//                   neue_gesamtbilanz.ausgaben += eintrag.betrag;
//                   neue_gesamtbilanz.bilanz -= eintrag.betrag;
//                   break;
//               default:
//                   console.log(`Der Typ "${eintrag.typ}" ist nicht bekannt.`);
//                   break;
//             }
//       });
//       this.gesamtbilanz = neue_gesamtbilanz;
//   },

//   // Method 04:Gesamtbilanz ausgeben
//   gesamtbilanz_ausgeben() {
//       console.log(`Einnahmen:${this.gesamtbilanz.einnahmen} ct\n`
//         + `Ausgaben: ${this.gesamtbilanz.ausgaben} ct\n`
//         + `Bilanz: ${this.gesamtbilanz.bilanz} ct\n`
//         + `Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`
//       );
//   },


//   // Funktion 05:Alle Funktionsaufrufe zusammengefasst in einer while Schleife
//   eintrag_hinzufuegen() {
//     let weiterer_eintrag = true;

//     while (weiterer_eintrag) {
//       this.eintrag_erfassen();
//       this.eintraege_ausgeben();
//       this.gesamtbilanz_erstellen();
//       this.gesamtbilanz_ausgeben();
//       weiterer_eintrag = confirm("Weiteren Eintrag hinzufügen?");
//     }
//   }
// };

// haushaltsbuch.eintrag_hinzufuegen();

// console.log(haushaltsbuch);

// NEUER CODE MIT NEUER METHODE DIE EINTRÄGE NACH DATUM ABSTEIGEND SORTIERT PRAXIS 9

// // Objekt haushaltsbuch anlegen

// const haushaltsbuch = {

//   gesamtbilanz: {
//       einnahmen: 0,
//       ausgaben: 0,
//       bilanz: 0,
//   },

//   eintraege: [],

//   // Method 01:Eingabedaten holen
//   eintrag_erfassen() {

//       this.eintraege.push(
//           {
//               titel: prompt ("Titel:"),
//               typ: prompt ("Typ (Einnahme oder Ausgabe):"),
//               betrag: parseInt(prompt ("Betrag (in Cent):")),
//               datum: prompt ("Datum (jjjj-mm-tt):")
//           }
//       );
//   },

//   // Method 1.1: Einträge nach Datum abbsteigend sortieren.

//   eintraege_sortieren() {
//       this.eintraege.sort(function (eintrag_a, eintrag_b) {
//         if (eintrag_a.datum > eintrag_b.datum) {
//             return -1;
//         } else if (eintrag_a.datum < eintrag_b.datum){
//             return 1;
//         } else {
//             return 0;
//         };
//     });
//   },


//   // Method 02:Eingabedaten ausgeben
//   eintraege_ausgeben() {
//       console.clear();
//       this.eintraege.forEach(function (eintrag) {
//         console.log(`Titel: ${eintrag.titel}\n`
//             + `Typ: ${eintrag.typ}\n`
//             + `Betrag: ${eintrag.betrag} ct\n`
//             + `Datum: ${eintrag.datum}`
//           );
//       })
//   },

//   // Method 03: Gesamtbilanz erstellen:
//   gesamtbilanz_erstellen() {
//       let neue_gesamtbilanz = {
//           einnahmen: 0,
//           ausgaben: 0,
//           bilanz: 0,
//       };
//       this.eintraege.forEach(function (eintrag) {
//           switch (eintrag.typ) {
//               case "Einnahme":
//                   neue_gesamtbilanz.einnahmen += eintrag.betrag;
//                   neue_gesamtbilanz.bilanz += eintrag.betrag;
//                   break;
//               case "Ausgabe":
//                   neue_gesamtbilanz.ausgaben += eintrag.betrag;
//                   neue_gesamtbilanz.bilanz -= eintrag.betrag;
//                   break;
//               default:
//                   console.log(`Der Typ "${eintrag.typ}" ist nicht bekannt.`);
//                   break;
//             }
//       });
//       this.gesamtbilanz = neue_gesamtbilanz;
//   },

//   // Method 04:Gesamtbilanz ausgeben
//   gesamtbilanz_ausgeben() {
//       console.log(`Einnahmen:${this.gesamtbilanz.einnahmen} ct\n`
//         + `Ausgaben: ${this.gesamtbilanz.ausgaben} ct\n`
//         + `Bilanz: ${this.gesamtbilanz.bilanz} ct\n`
//         + `Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`
//       );
//   },


//   // Funktion 05:Alle Funktionsaufrufe zusammengefasst in einer while Schleife
//   eintrag_hinzufuegen() {
//     let weiterer_eintrag = true;

//     while (weiterer_eintrag) {
//       this.eintrag_erfassen();
//       this.eintraege_sortieren();
//       this.eintraege_ausgeben();
//       this.gesamtbilanz_erstellen();
//       this.gesamtbilanz_ausgeben();
//       weiterer_eintrag = confirm("Weiteren Eintrag hinzufügen?");
//     }
//   }
// };

// haushaltsbuch.eintrag_hinzufuegen();

// console.log(haushaltsbuch);

// NEUER CODE MIT OBJEKTEN ZU MAPS UND VERBESSERTEN METHODEN PRAXIS 10

// // Objekt haushaltsbuch anlegen

// const haushaltsbuch = {

//   gesamtbilanz: new Map(),

//   eintraege: [],

//     // Method 01:Eingabedaten holen
//     eintrag_erfassen() {

//       let neuer_eintrag = new Map();

//       neuer_eintrag.set("titel", prompt ("Titel:"));
//       neuer_eintrag.set("typ", prompt ("Typ (Einnahme oder Ausgabe):"));
//       neuer_eintrag.set("betrag", parseInt(prompt ("Betrag (in Cent):")));
//       neuer_eintrag.set("datum", prompt ("Datum (jjjj-mm-tt):"));

//       this.eintraege.push(neuer_eintrag);
//   },

//    // Method 1.1: Einträge nach Datum abbsteigend sortieren.
//    eintraege_sortieren() {
//     this.eintraege.sort(function (eintrag_a, eintrag_b) {
//       if (eintrag_a.get("datum") > eintrag_b.get("datum")) {
//           return -1;
//       } else if (eintrag_a.get("datum") < eintrag_b.get("datum")){
//           return 1;
//       } else {
//           return 0;
//       };
//   });
// },

//     // Method 02:Eingabedaten ausgeben
//     eintraege_ausgeben() {
//       console.clear();
//       this.eintraege.forEach(function (eintrag) {
//         console.log(`Titel: ${eintrag.get("titel")}\n`
//             + `Typ: ${eintrag.get("typ")}\n`
//             + `Betrag: ${eintrag.get("betrag")} ct\n`
//             + `Datum: ${eintrag.get("datum")}`
//           );
//       })
//   },

//    // Method 03: Gesamtbilanz erstellen:
//    gesamtbilanz_erstellen() {
//     let neue_gesamtbilanz = new Map();
//     neue_gesamtbilanz.set("einnahmen", 0);
//     neue_gesamtbilanz.set("ausgaben", 0);
//     neue_gesamtbilanz.set("bilanz", 0);

//     this.eintraege.forEach(function (eintrag) {
//         switch (eintrag.get("typ")) {
//             case "Einnahme":
//                 neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einnahmen") + eintrag.get("betrag"));
//                 neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag"));
//                 break;
//             case "Ausgabe":
//                 neue_gesamtbilanz.set("ausgaben", neue_gesamtbilanz.get("ausgaben") + eintrag.get("betrag"));
//                 neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") - eintrag.get("betrag"))
//                 break;
//             default:
//                 console.log(`Der Typ "${eintrag.get("typ")}" ist nicht bekannt.`);
//                 break;
//           }
//     });
//     this.gesamtbilanz = neue_gesamtbilanz;
// },

//    // Method 04:Gesamtbilanz ausgeben
//    gesamtbilanz_ausgeben() {
//     console.log(`Einnahmen:${this.gesamtbilanz.get("einnahmen")} ct\n`
//       + `Ausgaben: ${this.gesamtbilanz.get("ausgaben")} ct\n`
//       + `Bilanz: ${this.gesamtbilanz.get("bilanz")} ct\n`
//       + `Bilanz ist positiv: ${this.gesamtbilanz.get("bilanz") >= 0}`
//     );
// },

//   // Funktion 05:Alle Funktionsaufrufe zusammengefasst in einer while Schleife
//   eintrag_hinzufuegen() {
//     let weiterer_eintrag = true;

//     while (weiterer_eintrag) {
//       this.eintrag_erfassen();
//       this.eintraege_sortieren();
//       this.eintraege_ausgeben();
//       this.gesamtbilanz_erstellen();
//       this.gesamtbilanz_ausgeben();
//       weiterer_eintrag = confirm("Weiteren Eintrag hinzufügen?");
//     }
//   }
// };

// haushaltsbuch.eintrag_hinzufuegen();

// console.log(haushaltsbuch);

// NEUER CODE EINTRÄGE MIT DATUM UND TIMESTAMP VERSEHEN PRAXIS 11

// // Objekt haushaltsbuch anlegen

// const haushaltsbuch = {

//   gesamtbilanz: new Map(),

//   eintraege: [],

//   // Method 01:Eingabedaten holen
//     eintrag_erfassen() {

//     let neuer_eintrag = new Map();

//     neuer_eintrag.set("titel", prompt ("Titel:"));
//     neuer_eintrag.set("typ", prompt ("Typ (Einnahme oder Ausgabe):"));
//     neuer_eintrag.set("betrag", parseInt(prompt ("Betrag (in Cent):")));
//     neuer_eintrag.set("datum", new Date(prompt ("Datum (jjjj-mm-tt):") + " 00:00:00"));
//     neuer_eintrag.set("timestamp", Date.now());

//     this.eintraege.push(neuer_eintrag);
// },

//    // Method 1.1: Einträge nach Datum abbsteigend sortieren.
//    eintraege_sortieren() {
//     this.eintraege.sort(function (eintrag_a, eintrag_b) {
//       if (eintrag_a.get("datum") > eintrag_b.get("datum")) {
//           return -1;
//       } else if (eintrag_a.get("datum") < eintrag_b.get("datum")){
//           return 1;
//       } else {
//           return 0;
//       };
//   });
// },


//   // Method 02:Eingabedaten ausgeben
//   eintraege_ausgeben() {
//     console.clear();
//     this.eintraege.forEach(function (eintrag) {
//       console.log(`Titel: ${eintrag.get("titel")}\n`
//           + `Typ: ${eintrag.get("typ")}\n`
//           + `Betrag: ${eintrag.get("betrag")} ct\n`
//           + `Datum: ${eintrag.get("datum").toLocaleDateString("de-DE", {
//             year: "numeric",
//             month: "2-digit",
//             day: "2-digit",
//           })}`
//         );
//     })
// },

//    // Method 03: Gesamtbilanz erstellen:
//    gesamtbilanz_erstellen() {
//     let neue_gesamtbilanz = new Map();
//     neue_gesamtbilanz.set("einnahmen", 0);
//     neue_gesamtbilanz.set("ausgaben", 0);
//     neue_gesamtbilanz.set("bilanz", 0);

//     this.eintraege.forEach(function (eintrag) {
//         switch (eintrag.get("typ")) {
//             case "Einnahme":
//                 neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einnahmen") + eintrag.get("betrag"));
//                 neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag"));
//                 break;
//             case "Ausgabe":
//                 neue_gesamtbilanz.set("ausgaben", neue_gesamtbilanz.get("ausgaben") + eintrag.get("betrag"));
//                 neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") - eintrag.get("betrag"))
//                 break;
//             default:
//                 console.log(`Der Typ "${eintrag.get("typ")}" ist nicht bekannt.`);
//                 break;
//           }
//     });
//     this.gesamtbilanz = neue_gesamtbilanz;
// },

//    // Method 04:Gesamtbilanz ausgeben
//    gesamtbilanz_ausgeben() {
//     console.log(`Einnahmen:${this.gesamtbilanz.get("einnahmen")} ct\n`
//       + `Ausgaben: ${this.gesamtbilanz.get("ausgaben")} ct\n`
//       + `Bilanz: ${this.gesamtbilanz.get("bilanz")} ct\n`
//       + `Bilanz ist positiv: ${this.gesamtbilanz.get("bilanz") >= 0}`
//     );
// },

//   // Funktion 05:Alle Funktionsaufrufe zusammengefasst in einer while Schleife
//   eintrag_hinzufuegen() {
//     let weiterer_eintrag = true;

//     while (weiterer_eintrag) {
//       this.eintrag_erfassen();
//       this.eintraege_sortieren();
//       this.eintraege_ausgeben();
//       this.gesamtbilanz_erstellen();
//       this.gesamtbilanz_ausgeben();
//       weiterer_eintrag = confirm("Weiteren Eintrag hinzufügen?");
//     }
//   }
// };

// haushaltsbuch.eintrag_hinzufuegen();

// console.log(haushaltsbuch);

// ==== NEUER CODE DIE EINTRÄGE NEU VERARBBEITEN UND VALIDIEREN PRAXIS 12 ====

// // Objekt haushaltsbuch anlegen

// const haushaltsbuch = {

//   gesamtbilanz: new Map(),
//   eintraege: [],
//   fehler: [],

// // Method 01:Eingabedaten holen
//   eintrag_erfassen() {

//     let neuer_eintrag = new Map();

//     neuer_eintrag.set("titel", this.titel_verarbeiten(prompt("Titel:")));
//     neuer_eintrag.set("typ", this.typ_verarbeiten(prompt("Typ (Einnahme oder Ausgabe):")));
//     neuer_eintrag.set("betrag", this.betrag_verarbeiten(prompt("Betrag (in Euro, ohne €-Zeichen):")));
//     neuer_eintrag.set("datum", this.datum_verarbeiten(prompt("Datum (jjjj-mm-tt):")));
//     neuer_eintrag.set("timestamp", Date.now());

//     if(this.fehler.length === 0) {
//       this.eintraege.push(neuer_eintrag);
//     } else {
//       console.log("Folgende Fehler wurden gefunden:");
//       this.fehler.forEach(function(fehler) {
//         console.log(fehler);
//       });
//     }
//  },

//    // Method 01.1: Titel verarbeiten:
//    titel_verarbeiten(titel) {
//     titel = titel.trim();
//     if (this.titel_validieren(titel)) {
//         return titel;
//     } else {
//         this.fehler.push("Kein Titel angegeben.");
//     }
//   },

// // Methode 01.2 Titel validieren:
//   titel_validieren(titel) {
//     if (titel !== "") {
//         return true;
//     } else {
//         return false;
//     }
// },

//    // Method 01.3: Typ verarbeiten:
//    typ_verarbeiten(typ) {
//     typ = typ.trim().toLowerCase();
//     if (this.typ_validieren(typ)) {
//         return typ;
//     } else {
//       this.fehler.push(`Ungültiger Eintrags-Typ: "${typ}".`);
//     }
//   },

// // Methode 01.4 Typ validieren:
//   typ_validieren(typ) {
//     if (typ.match(/^(?:einnahme|ausgabe)$/) !== null) {
//         return true;
//     } else {
//         return false;
//     }
// },

//   // Method 01.5: Betrag verarbeiten:
//     betrag_verarbeiten(betrag) {
//       // Bsp. "23,64 " -> "23.64" -> 23.64 -> 23634
//       betrag = betrag.trim();
//       if (this.betrag_validieren(betrag)) {
//           return parseFloat(betrag.replace(",", ".")) * 100;
//       } else {
//         this.fehler.push(`Ungültiger Betrag: ${betrag} €.`);
//       }
//     },

//   // Methode 01.6 Betrag mit Regex validieren:
//   betrag_validieren(betrag) {
//       if (betrag.match(/^\d+(?:(?:,|\.)\d\d?)?$/) !== null) {
//           return true;
//       } else {
//           return false;
//       }
//   },

//     // Method 01.7: Datum verarbeiten:
//     datum_verarbeiten(datum) {
//       datum = datum.trim();
//       if (this.datum_validieren(datum)) {
//           return new Date(`${datum} 00:00:00`);
//       } else {
//         this.fehler.push(`Ungültiges Datumsformat: "${datum}".`);
//       }
//     },

//   // Methode 01.8 Datum mit Regex validieren:
//     datum_validieren(datum) {
//       if (datum.match(/^\d{4}-\d{2}-\d{2}$/) !== null) {
//           return true;
//       } else {
//           return false;
//       }
//   },


//    // Method 01.10: Einträge nach Datum absteigend sortieren.
//    eintraege_sortieren() {
//     this.eintraege.sort(function (eintrag_a, eintrag_b) {
//       if (eintrag_a.get("datum") > eintrag_b.get("datum")) {
//           return -1;
//       } else if (eintrag_a.get("datum") < eintrag_b.get("datum")){
//           return 1;
//       } else {
//           return 0;
//       };
//   });
//  },


//   Method 02:Eingabedaten ausgeben
//   Wird durch HTML Ausgabe ersetzt
//   eintraege_ausgeben() {
//     console.clear();
//     this.eintraege.forEach(function (eintrag) {
//       console.log(`Titel: ${eintrag.get("titel")}\n`
//           + `Typ: ${eintrag.get("typ")}\n`
//           + `Betrag: ${(eintrag.get("betrag") / 100).toFixed(2)} €\n`
//           + `Datum: ${eintrag.get("datum").toLocaleDateString("de-DE", {
//             year: "numeric",
//             month: "2-digit",
//             day: "2-digit",
//           })}`
//         );
//     })
// },

//    // Method 03: Gesamtbilanz erstellen:
//    gesamtbilanz_erstellen() {
//     let neue_gesamtbilanz = new Map();
//     neue_gesamtbilanz.set("einnahmen", 0);
//     neue_gesamtbilanz.set("ausgaben", 0);
//     neue_gesamtbilanz.set("bilanz", 0);

//     this.eintraege.forEach(function (eintrag) {
//         switch (eintrag.get("typ")) {
//             case "einnahme":
//                 neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einnahmen") + eintrag.get("betrag"));
//                 neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag"));
//                 break;
//             case "ausgabe":
//                 neue_gesamtbilanz.set("ausgaben", neue_gesamtbilanz.get("ausgaben") + eintrag.get("betrag"));
//                 neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") - eintrag.get("betrag"))
//                 break;
//             default:
//                 console.log(`Der Typ "${eintrag.get("typ")}" ist nicht bekannt.`);
//                 break;
//           }
//     });
//     this.gesamtbilanz = neue_gesamtbilanz;
// },

//    Method 04:Gesamtbilanz ausgeben
//    Wird durch HTML-Ausgabe ersetzt
//    gesamtbilanz_ausgeben() {
//     console.log(`Einnahmen:${(this.gesamtbilanz.get("einnahmen") / 100).toFixed(2)} €\n`
//       + `Ausgaben: ${(this.gesamtbilanz.get("ausgaben") / 100).toFixed(2)} €\n`
//       + `Bilanz: ${(this.gesamtbilanz.get("bilanz") / 100).toFixed(2)} €\n`
//       + `Bilanz ist positiv: ${(this.gesamtbilanz.get("bilanz") / 100) >= 0}`
//     );
// },

//   // Funktion 05:Alle Funktionsaufrufe zusammengefasst in einer while Schleife
//   eintrag_hinzufuegen() {
//     let weiterer_eintrag = true;

//     while (weiterer_eintrag) {
//       this.eintrag_erfassen();
//       if (this.fehler.length === 0) {
//         // Methodenaufrufe anpassen
//         this.eintraege_sortieren();
//         this.eintraege_ausgeben();
//         this.gesamtbilanz_erstellen();
//         this.gesamtbilanz_ausgeben();
//       } else {
//         this.fehler = [];
//       }
//       weiterer_eintrag = confirm("Weiteren Eintrag hinzufügen?"); // Bei OK true, bei Abbrechen false
//     }
//   }
// };

// haushaltsbuch.eintrag_hinzufuegen();

// console.log(haushaltsbuch);

// ==== NEUER CODE NEUE METHODEN DIE HTML GENERIEREN PRAXIS 13 ====

// // Objekt haushaltsbuch anlegen

// const haushaltsbuch = {

//   gesamtbilanz: new Map(),
//   eintraege: [],
//   fehler: [],

//   // Methode: Eingabedaten holen
//   eintrag_erfassen() {

//     let neuer_eintrag = new Map();

//     neuer_eintrag.set("titel", this.titel_verarbeiten(prompt("Titel:")));
//     neuer_eintrag.set("typ", this.typ_verarbeiten(prompt("Typ (Einnahme oder Ausgabe):")));
//     neuer_eintrag.set("betrag", this.betrag_verarbeiten(prompt("Betrag (in Euro, ohne €-Zeichen):")));
//     neuer_eintrag.set("datum", this.datum_verarbeiten(prompt("Datum (jjjj-mm-tt):")));
//     neuer_eintrag.set("timestamp", Date.now());

//     if(this.fehler.length === 0) {
//       this.eintraege.push(neuer_eintrag);
//     } else {
//       console.log("Folgende Fehler wurden gefunden:");
//       this.fehler.forEach(function(fehler) {
//         console.log(fehler);
//       });
//     }
//   },

//    // Methode: Titel verarbeiten:
//    titel_verarbeiten(titel) {
//     titel = titel.trim();
//     if (this.titel_validieren(titel)) {
//         return titel;
//     } else {
//         this.fehler.push("Kein Titel angegeben.");
//     }
//   },

//   // Methode: Titel validieren:
//   titel_validieren(titel) {
//     if (titel !== "") {
//         return true;
//     } else {
//         return false;
//     }
//   },

//    // Methode: Typ verarbeiten:
//    typ_verarbeiten(typ) {
//     typ = typ.trim().toLowerCase();
//     if (this.typ_validieren(typ)) {
//         return typ;
//     } else {
//       this.fehler.push(`Ungültiger Eintrags-Typ: "${typ}".`);
//     }
//   },

//   // Methode: Typ validieren:
//   typ_validieren(typ) {
//     if (typ.match(/^(?:einnahme|ausgabe)$/) !== null) {
//         return true;
//     } else {
//         return false;
//     }
//   },

//   // Methode: Betrag verarbeiten:
//     betrag_verarbeiten(betrag) {
//       // Bsp. "23,64 " -> "23.64" -> 23.64 -> 23634
//       betrag = betrag.trim();
//       if (this.betrag_validieren(betrag)) {
//           return parseFloat(betrag.replace(",", ".")) * 100;
//       } else {
//         this.fehler.push(`Ungültiger Betrag: ${betrag} €.`);
//       }
//     },

//   // Methode: Betrag mit Regex validieren:
//   betrag_validieren(betrag) {
//       if (betrag.match(/^\d+(?:(?:,|\.)\d\d?)?$/) !== null) {
//           return true;
//       } else {
//           return false;
//       }
//   },

//   // Methode: Datum verarbeiten:
//   datum_verarbeiten(datum) {
//     datum = datum.trim();
//     if (this.datum_validieren(datum)) {
//         return new Date(`${datum} 00:00:00`);
//     } else {
//       this.fehler.push(`Ungültiges Datumsformat: "${datum}".`);
//     }
//   },

//   // Methode: Datum mit Regex validieren:
//     datum_validieren(datum) {
//       if (datum.match(/^\d{4}-\d{2}-\d{2}$/) !== null) {
//           return true;
//       } else {
//           return false;
//       }
//   },


//   // Methode: Einträge nach Datum absteigend sortieren.
//   eintraege_sortieren() {
//     this.eintraege.sort(function (eintrag_a, eintrag_b) {
//       if (eintrag_a.get("datum") > eintrag_b.get("datum")) {
//           return -1;
//       } else if (eintrag_a.get("datum") < eintrag_b.get("datum")){
//           return 1;
//       } else {
//           return 0;
//         };
//       });
//   },


//   // Methode: Eingabedaten ausgeben
//   // Wird durch HTML Ausgabe ersetzt
// //   eintraege_ausgeben() {
// //     console.clear();
// //     this.eintraege.forEach(function (eintrag) {
// //       console.log(`Titel: ${eintrag.get("titel")}\n`
// //           + `Typ: ${eintrag.get("typ")}\n`
// //           + `Betrag: ${(eintrag.get("betrag") / 100).toFixed(2)} €\n`
// //           + `Datum: ${eintrag.get("datum").toLocaleDateString("de-DE", {
// //             year: "numeric",
// //             month: "2-digit",
// //             day: "2-digit",
// //           })}`
// //         );
// //     })
// // },

// // Das ist der HTML-Code für die Einträge als Anschauungsbeispiel:

// // <ul>
// // <li class="ausgabe" data-timestamp=„12437253722“>
// //     <span class="datum">03.02.2020</span>
// //     <span class="titel">Miete</span>
// //     <span class="betrag">545,00 €</span>
// //     <button class="entfernen-button"><i class="fas fa-trash"></i></button>
// // </li>
// // <li class="einnahme" data-timestamp=„12437253148“>
// //     <span class="datum">01.02.2020</span>
// //     <span class="titel">Gehalt</span>
// //     <span class="betrag">2064,37 €</span>
// //     <button class="entfernen-button"><i class="fas fa-trash"></i></button>
// // </li>
// // </ul>

//   // Methode: Eintrag als HTML-Listenpunkt mit allen spans darin generieren
//   html_eintrag_generieren(eintrag) {

//     // Listenpunkt anlegen
//     let listenpunkt = document.createElement("li");
//     // Der Typ wird vom Eintrag (Map_Objekt abgegriffen). Wenn "einnahme" wird das als Klasse gesetzt.
//     // Mit else if wird nochmal auf "ausgabe" geprüft und das dann als Klasse gesetzt.
//     if (eintrag.get("typ") === "einnahme") {
//       listenpunkt.setAttribute("class", "einnahme");
//     } else if (eintrag.get("typ") === "ausgabe") {
//       listenpunkt.setAttribute("class", "ausgabe");
//     }
//     // Das Data-Objekt wird aus der Eintrag-Map abgegriffen und dem listenpunkt als Attribut gesetzt
//     listenpunkt.setAttribute("data-eintrag", eintrag.get("timestamp"));

//     //Span für datum anlegen
//     let datum = document.createElement("span");
//     // Die Klasse datum wird gesetzt
//     datum.setAttribute("class", "datum");
//     // Die Eigenschaft textContent wird gesetzt. Sie ist das abgegriffene Datum in deutscher Schreibweise und einem Format-Objekt.
//     datum.textContent = eintrag.get("datum").toLocaleDateString("de-DE", {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit"
//     })
//     // Span datum in listenpunkt als erstes Element einsetzen:
//     listenpunkt.insertAdjacentElement("afterbegin", datum);

//     //Komplette Span für titel anlegen  und NACH der ersten Span datum in listenpunkt setzen:
//     let titel = document.createElement("span");
//     titel.setAttribute("class", "titel");
//     titel.textContent = eintrag.get("titel");
//     // Hier wird jetzt die span datum referenziert und die titel-Span danach eingesetzt!
//     datum.insertAdjacentElement("afterend", titel);

//     // Komplette Span für betrag anlegen
//     let betrag = document.createElement("span");
//     betrag.setAttribute("class", "betrag");
//     // Betragdarstellung kniffelig deswegen Ausgabe als Template-String:
//     // Betrag kommt in Cent. Deswegen beim Abgreifen den Begriff in Klammern setzen und darin durch 100 teilen. Jetzt sinds Euro
//     // An diese Klammern kann ich .toFixed(2) anschliessen. Ergibt 2 Nachkommastellen in Ausgabe als String.
//     // Da ich jetzt String habe, kann ich reeplace() dranhängen. Mit Regex den . auswählen(escape) und mit , ersetzen. Dann €-Zeichen.
//     betrag.textContent = `${(eintrag.get("betrag") / 100).toFixed(2).replace(/\./, ",")} €`;
//     // Hier wird jetzt die span titel referenziert und die betrag-Span danach eingesetzt!
//     titel.insertAdjacentElement("afterend", betrag);

//     // button-Element anlegen:
//     let button = document.createElement("button");
//     button.setAttribute("class", "entfernen-button");
//     // VOR Erstellung des icon-Elements wird jetzt zuerst das button-Element in listenpunkt platziert!
//     betrag.insertAdjacentElement("afterend", button);

//     // icon-Element anlegen:
//     let icon = document.createElement("i");
//     icon.setAttribute("class", "fas fa-trash");
//     // Jetzt wird das icon-Element in den Button eingesetzt:
//     button.insertAdjacentElement("afterbegin", icon);

//     // WICHTIG: Den zusammengebauten listenpunkt mit explizitem return zurückgeben:
//     return listenpunkt;
//   },

  // // Methode: Oben generierte Listenpunkte in <ul> schiessen und diese in <article> schiessen. eintrag erzeugen.
  // eintraege_anzeigen() {

  //   // Überprüfen, ob bereits eine oder mehrere <ul> im container article.monatsliste vorhanden sind
  //   // ggfls. <ul> entfernen
  //   document.querySelectorAll(".monatsliste ul").forEach(function(eintragsliste) {
  //     eintragsliste.remove();
  // });

  //   // <ul> erstellen
  //   // über eintragege [] iterieren
  //     // Für jeden Eintrag einen HTML-Eintrag erstellen
  //     // HTML-Eintrag in ul einsetzen
  //   // Die generierte <ul> in den article.monatsliste einsetzen

  //   let eintragsliste = document.createElement("ul");
  //   for (let eintrag of this.eintraege) {
  //     eintragsliste.insertAdjacentElement("beforeend", this.html_eintrag_generieren(eintrag))
  //   }
  //   document.querySelector(".monatsliste").insertAdjacentElement("afterbegin", eintragsliste);
  // },

//   // Methode: Gesamtbilanz erstellen verrchnet die Einträge jeweils mit der Gesamtbilanz:
//   gesamtbilanz_erstellen() {
//     let neue_gesamtbilanz = new Map();
//     neue_gesamtbilanz.set("einnahmen", 0);
//     neue_gesamtbilanz.set("ausgaben", 0);
//     neue_gesamtbilanz.set("bilanz", 0);

//     this.eintraege.forEach(function (eintrag) {
//         switch (eintrag.get("typ")) {
//             case "einnahme":
//                 neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einnahmen") + eintrag.get("betrag"));
//                 neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag"));
//                 break;
//             case "ausgabe":
//                 neue_gesamtbilanz.set("ausgaben", neue_gesamtbilanz.get("ausgaben") + eintrag.get("betrag"));
//                 neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") - eintrag.get("betrag"))
//                 break;
//             default:
//                 console.log(`Der Typ "${eintrag.get("typ")}" ist nicht bekannt.`);
//                 break;
//           }
//     });
//     this.gesamtbilanz = neue_gesamtbilanz;
//   },

//    // Methode: Gesamtbilanz ausgeben
//    // Wird durch HTML-Ausgabe ersetzt
// //    gesamtbilanz_ausgeben() {
// //     console.log(`Einnahmen:${(this.gesamtbilanz.get("einnahmen") / 100).toFixed(2)} €\n`
// //       + `Ausgaben: ${(this.gesamtbilanz.get("ausgaben") / 100).toFixed(2)} €\n`
// //       + `Bilanz: ${(this.gesamtbilanz.get("bilanz") / 100).toFixed(2)} €\n`
// //       + `Bilanz ist positiv: ${(this.gesamtbilanz.get("bilanz") / 100) >= 0}`
// //     );
// // },

// // Das ist der HTML-Code für die Gesamtbilanz als Anschauungsbeispiel:

// // <aside id="gesamtbilanz">
// // <h1>Gesamtbilanz</h1>
// // <div class="gesamtbilanz-zeile einnahmen"><span>Einnahmen:</span><span>0,00€</span></div>
// // <div class="gesamtbilanz-zeile ausgaben"><span>Ausgaben:</span><span>0,00€</span></div>
// // <div class="gesamtbilanz-zeile bilanz"><span>Bilanz:</span><span class="positiv">0,00€</span></div>
// // </aside>

//   // Methode: Erzeugt das ganze HTML-Element <aside> mit den Werten für die Gesamtbilanz.
//   html_gesamtbilanz_generieren() {

//     // Anhand der aktuellen gesamtbilanz die Gesamtbilanz neu generieren.

//     // <aside> kreieren und Klasse setzen.
//     let gesamtbilanz = document.createElement("aside");
//     gesamtbilanz.setAttribute("id", "gesamtbilanz");

//     // h1 kreieren, Text rein und an erste Stelle in <aside> platzieren.
//     let ueberschrift = document.createElement("h1");
//     ueberschrift.textContent = "Gesamtbilanz";
//     gesamtbilanz.insertAdjacentElement("afterbegin", ueberschrift);

//     // Erste Zeile Einnahmen kreieren, zusammenbauen und an letzter Stelle in <aside> platzieren.
//     let einnahmen_zeile = document.createElement("div");
//     einnahmen_zeile.setAttribute("class", "gesamtbilanz-zeile einnahmen");

//     let einnahmen_titel = document.createElement("span");
//     einnahmen_titel.textContent = "Einnahmen:";
//     einnahmen_zeile.insertAdjacentElement("afterbegin", einnahmen_titel);

//     let einnahmen_betrag = document.createElement("span");
//     einnahmen_betrag.textContent = `${(this.gesamtbilanz.get("einnahmen") / 100).toFixed(2).replace(/\./, ",")} €`;
//     einnahmen_zeile.insertAdjacentElement("beforeend", einnahmen_betrag);

//     gesamtbilanz.insertAdjacentElement("beforeend", einnahmen_zeile);

//      // Zweite Zeile Ausgaben kreieren, zusammenbauen und an letzter Stelle in <aside> platzieren.
//      let ausgaben_zeile = document.createElement("div");
//      ausgaben_zeile.setAttribute("class", "gesamtbilanz-zeile ausgaben");

//      let ausgaben_titel = document.createElement("span");
//      ausgaben_titel.textContent = "Ausgaben:";
//      ausgaben_zeile.insertAdjacentElement("afterbegin", ausgaben_titel);

//      let ausgaben_betrag = document.createElement("span");
//      ausgaben_betrag.textContent = `${(this.gesamtbilanz.get("ausgaben") / 100).toFixed(2).replace(/\./, ",")} €`;
//      ausgaben_zeile.insertAdjacentElement("beforeend", ausgaben_betrag);

//      gesamtbilanz.insertAdjacentElement("beforeend", ausgaben_zeile);

//     // Dritte Zeile Bilanz kreieren, zusammenbauen und an letzter Stelle in <aside> platzieren.
//     let bilanz_zeile = document.createElement("div");
//     bilanz_zeile.setAttribute("class", "gesamtbilanz-zeile bilanz");

//     let bilanz_titel = document.createElement("span");
//     bilanz_titel.textContent = "Bilanz:";
//     bilanz_zeile.insertAdjacentElement("afterbegin", bilanz_titel);

//     let bilanz_betrag = document.createElement("span");
//     // Hier die Logik ob die Klasse "positiv" oder "negativ" gesetzt wird und das Feld die entsprechende Farbe bekommt:
//     if (this.gesamtbilanz.get("bilanz") >= 0) {
//       bilanz_betrag.setAttribute("class", "positiv");
//     } else if (this.gesamtbilanz.get("bilanz") < 0) {
//       bilanz_betrag.setAttribute("class", "negativ");
//     }
//     bilanz_betrag.textContent = `${(this.gesamtbilanz.get("bilanz") / 100).toFixed(2).replace(/\./, ",")} €`;
//     bilanz_zeile.insertAdjacentElement("beforeend", bilanz_betrag);

//     gesamtbilanz.insertAdjacentElement("beforeend", bilanz_zeile);

//     // WICHTIG: Explizite Rückgabe mit return
//     return gesamtbilanz;
//   },

//   gesamtbilanz_anzeigen() {

//     // Prüfen, ob bereits eine Gesamtbilanz angezeigt wird
//      // Dann ggfls. entfernen.
//     document.querySelectorAll("#gesamtbilanz").forEach(function(gesamzbilanz) {
//       gesamtbilanz.remove();
//     })

//     // Neue Gesamtbilanz im Frontend an richtiger Stelle anzeigen (html_gesamtbilanz_generieren())
//     document.querySelector("body").insertAdjacentElement("beforeend", this.html_gesamtbilanz_generieren());
//   },


//   // Methode: Alle Funktionsaufrufe zusammengefasst in einer while Schleife
//   eintrag_hinzufuegen() {
//     let weiterer_eintrag = true;

//     while (weiterer_eintrag) {
//       this.eintrag_erfassen();
//       if (this.fehler.length === 0) {
//         // Methodenaufrufe anpassen
//         this.eintraege_sortieren();
//         this.eintraege_anzeigen();
//         this.gesamtbilanz_erstellen();
//         this.gesamtbilanz_anzeigen();
//       } else {
//         // Fehler Array wieder löschen, sonst stuck an der Stelle.
//         this.fehler = [];
//       }
//       weiterer_eintrag = confirm("Weiteren Eintrag hinzufügen?"); // Bei OK true, bei Abbrechen false
//     }
//   }
// };

// haushaltsbuch.eintrag_hinzufuegen();

// console.log(haushaltsbuch);

// ==== NEUER CODE NACH CODE REFACTORING MIT ARROW-FUNCTIONS PRAXIS 14 ====

// Objekt haushaltsbuch anlegen

const haushaltsbuch = {

  gesamtbilanz: new Map(),
  eintraege: [],
  fehler: [],

  // Methode: Eingabedaten holen
  eintrag_erfassen() {

    let neuer_eintrag = new Map();

    neuer_eintrag.set("titel", this.titel_verarbeiten(prompt("Titel:")));
    neuer_eintrag.set("typ", this.typ_verarbeiten(prompt("Typ (Einnahme oder Ausgabe):")));
    neuer_eintrag.set("betrag", this.betrag_verarbeiten(prompt("Betrag (in Euro, ohne €-Zeichen):")));
    neuer_eintrag.set("datum", this.datum_verarbeiten(prompt("Datum (jjjj-mm-tt):")));
    neuer_eintrag.set("timestamp", Date.now());

    if(this.fehler.length === 0) {
      this.eintraege.push(neuer_eintrag);
    } else {
      console.log("Folgende Fehler wurden gefunden:");
      this.fehler.forEach(fehler => console.log(fehler)); // Arrow
    }
  },

   // Methode: Titel verarbeiten:
   titel_verarbeiten(titel) {
    titel = titel.trim();
    if (this.titel_validieren(titel)) {
        return titel;
    } else {
        this.fehler.push("Kein Titel angegeben.");
    }
  },

  // Methode: Titel validieren:
  titel_validieren(titel) {
    if (titel !== "") {
        return true;
    } else {
        return false;
    }
  },

   // Methode: Typ verarbeiten:
   typ_verarbeiten(typ) {
    typ = typ.trim().toLowerCase();
    if (this.typ_validieren(typ)) {
        return typ;
    } else {
      this.fehler.push(`Ungültiger Eintrags-Typ: "${typ}".`);
    }
  },

  // Methode: Typ validieren:
  typ_validieren(typ) {
    if (typ.match(/^(?:einnahme|ausgabe)$/) !== null) {
        return true;
    } else {
        return false;
    }
  },

  // Methode: Betrag verarbeiten:
    betrag_verarbeiten(betrag) {
      // Bsp. "23,64 " -> "23.64" -> 23.64 -> 23634
      betrag = betrag.trim();
      if (this.betrag_validieren(betrag)) {
          return parseFloat(betrag.replace(",", ".")) * 100;
      } else {
        this.fehler.push(`Ungültiger Betrag: ${betrag} €.`);
      }
    },

  // Methode: Betrag mit Regex validieren:
  betrag_validieren(betrag) {
      if (betrag.match(/^\d+(?:(?:,|\.)\d\d?)?$/) !== null) {
          return true;
      } else {
          return false;
      }
  },

  // Methode: Datum verarbeiten:
  datum_verarbeiten(datum) {
    datum = datum.trim();
    if (this.datum_validieren(datum)) {
        return new Date(`${datum} 00:00:00`);
    } else {
      this.fehler.push(`Ungültiges Datumsformat: "${datum}".`);
    }
  },

  // Methode: Datum mit Regex validieren:
    datum_validieren(datum) {
      if (datum.match(/^\d{4}-\d{2}-\d{2}$/) !== null) {
          return true;
      } else {
          return false;
      }
  },


  // Methode: Einträge nach Datum absteigend sortieren.
  eintraege_sortieren() {
    this.eintraege.sort((eintrag_a, eintrag_b) => { // Arrow
      if (eintrag_a.get("datum") > eintrag_b.get("datum")) {
          return -1;
      } else if (eintrag_a.get("datum") < eintrag_b.get("datum")){
          return 1;
      } else {
          return 0;
        };
      });
  },

  // Methode: Eintrag als HTML-Listenpunkt mit allen spans darin generieren
  html_eintrag_generieren(eintrag) {

    // Listenpunkt anlegen
    let listenpunkt = document.createElement("li");

    if (eintrag.get("typ") === "einnahme") {
      listenpunkt.setAttribute("class", "einnahme");
    } else if (eintrag.get("typ") === "ausgabe") {
      listenpunkt.setAttribute("class", "ausgabe");
    }
    listenpunkt.setAttribute("data-eintrag", eintrag.get("timestamp"));

    // Komplette Span für datum anlegen
    let datum = document.createElement("span");
    datum.setAttribute("class", "datum");
    datum.textContent = eintrag.get("datum").toLocaleDateString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    })
    listenpunkt.insertAdjacentElement("afterbegin", datum);

    // Komplette Span für titel anlegen
    let titel = document.createElement("span");
    titel.setAttribute("class", "titel");
    titel.textContent = eintrag.get("titel");
    datum.insertAdjacentElement("afterend", titel);

    // Komplette Span für betrag anlegen
    let betrag = document.createElement("span");
    betrag.setAttribute("class", "betrag");
    betrag.textContent = `${(eintrag.get("betrag") / 100).toFixed(2).replace(/\./, ",")} €`;
    titel.insertAdjacentElement("afterend", betrag);

    // button-Element anlegen:
    let button = document.createElement("button");
    button.setAttribute("class", "entfernen-button");
    betrag.insertAdjacentElement("afterend", button);

    // icon-Element anlegen:
    let icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-trash");
    button.insertAdjacentElement("afterbegin", icon);

    // WICHTIG: Den zusammengebauten listenpunkt mit explizitem return zurückgeben:
    return listenpunkt;
  },

  // Methode: Oben generierte Listenpunkte in <ul> schiessen und diese in <article> schiessen. eintrag erzeugen.
  eintraege_anzeigen() {

    // Überprüfen und Löschen von <ul>
    document.querySelectorAll(".monatsliste ul").forEach(eintragsliste => eintragsliste.remove()); //Arrow

    // Generieren und Platzieren von <ul> und oben generierten Listenpunkten
    let eintragsliste = document.createElement("ul");
    this.eintraege.forEach(eintrag => eintragsliste.insertAdjacentElement("beforeend", this.html_eintrag_generieren(eintrag))); //Arrow
    document.querySelector(".monatsliste").insertAdjacentElement("afterbegin", eintragsliste);
  },

  // Methode: Gesamtbilanz erstellen verrechnet die Einträge jeweils mit der Gesamtbilanz:
  gesamtbilanz_erstellen() {
    let neue_gesamtbilanz = new Map();
    neue_gesamtbilanz.set("einnahmen", 0);
    neue_gesamtbilanz.set("ausgaben", 0);
    neue_gesamtbilanz.set("bilanz", 0);

    this.eintraege.forEach(eintrag => { // Arrow
        switch (eintrag.get("typ")) {
            case "einnahme":
                neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einnahmen") + eintrag.get("betrag"));
                neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag"));
                break;
            case "ausgabe":
                neue_gesamtbilanz.set("ausgaben", neue_gesamtbilanz.get("ausgaben") + eintrag.get("betrag"));
                neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") - eintrag.get("betrag"))
                break;
            default:
                console.log(`Der Typ "${eintrag.get("typ")}" ist nicht bekannt.`);
                break;
          }
    });
    this.gesamtbilanz = neue_gesamtbilanz;


  },

  // Methode: Erzeugt das ganze HTML-Element <aside> mit den Werten für die Gesamtbilanz.
  html_gesamtbilanz_generieren() {

    // <aside> kreieren und Klasse setzen.
    let gesamtbilanz = document.createElement("aside");
    gesamtbilanz.setAttribute("id", "gesamtbilanz");

    // h1 kreieren, Text rein und an erste Stelle in <aside> platzieren.
    let ueberschrift = document.createElement("h1");
    ueberschrift.textContent = "Gesamtbilanz";
    gesamtbilanz.insertAdjacentElement("afterbegin", ueberschrift);

    // Erste Zeile Einnahmen kreieren, zusammenbauen und an letzter Stelle in <aside> platzieren.
    let einnahmen_zeile = document.createElement("div");
    einnahmen_zeile.setAttribute("class", "gesamtbilanz-zeile einnahmen");
    let einnahmen_titel = document.createElement("span");
    einnahmen_titel.textContent = "Einnahmen:";
    einnahmen_zeile.insertAdjacentElement("afterbegin", einnahmen_titel);
    let einnahmen_betrag = document.createElement("span");
    einnahmen_betrag.textContent = `${(this.gesamtbilanz.get("einnahmen") / 100).toFixed(2).replace(/\./, ",")} €`;
    einnahmen_zeile.insertAdjacentElement("beforeend", einnahmen_betrag);
    gesamtbilanz.insertAdjacentElement("beforeend", einnahmen_zeile);

     // Zweite Zeile Ausgaben kreieren, zusammenbauen und an letzter Stelle in <aside> platzieren.
     let ausgaben_zeile = document.createElement("div");
     ausgaben_zeile.setAttribute("class", "gesamtbilanz-zeile ausgaben");
     let ausgaben_titel = document.createElement("span");
     ausgaben_titel.textContent = "Ausgaben:";
     ausgaben_zeile.insertAdjacentElement("afterbegin", ausgaben_titel);
     let ausgaben_betrag = document.createElement("span");
     ausgaben_betrag.textContent = `${(this.gesamtbilanz.get("ausgaben") / 100).toFixed(2).replace(/\./, ",")} €`;
     ausgaben_zeile.insertAdjacentElement("beforeend", ausgaben_betrag);
     gesamtbilanz.insertAdjacentElement("beforeend", ausgaben_zeile);

    // Dritte Zeile Bilanz kreieren, zusammenbauen und an letzter Stelle in <aside> platzieren.
    let bilanz_zeile = document.createElement("div");
    bilanz_zeile.setAttribute("class", "gesamtbilanz-zeile bilanz");
    let bilanz_titel = document.createElement("span");
    bilanz_titel.textContent = "Bilanz:";
    bilanz_zeile.insertAdjacentElement("afterbegin", bilanz_titel);
    let bilanz_betrag = document.createElement("span");
    // Hier die Logik ob die Klasse "positiv" oder "negativ" gesetzt wird und das Feld die entsprechende Farbe bekommt:
    if (this.gesamtbilanz.get("bilanz") >= 0) {
      bilanz_betrag.setAttribute("class", "positiv");
    } else if (this.gesamtbilanz.get("bilanz") < 0) {
      bilanz_betrag.setAttribute("class", "negativ");
    }
    bilanz_betrag.textContent = `${(this.gesamtbilanz.get("bilanz") / 100).toFixed(2).replace(/\./, ",")} €`;
    bilanz_zeile.insertAdjacentElement("beforeend", bilanz_betrag);

    gesamtbilanz.insertAdjacentElement("beforeend", bilanz_zeile);

    // WICHTIG: Explizite Rückgabe mit return
    return gesamtbilanz;
  },

  gesamtbilanz_anzeigen() {

    // Prüfen und Löschen von evtl. vorhandener Gesamtbilanz
    document.querySelectorAll("#gesamtbilanz").forEach(gesamtbilanz => gesamtbilanz.remove()); // Arrow

    // Neue Gesamtbilanz im Frontend an richtiger Stelle anzeigen (html_gesamtbilanz_generieren())
    document.querySelector("body").insertAdjacentElement("beforeend", this.html_gesamtbilanz_generieren());
  },


  // Methode: Alle Funktionsaufrufe zusammengefasst in einer while Schleife
  eintrag_hinzufuegen() {
    let weiterer_eintrag = true;

    while (weiterer_eintrag) {
      this.eintrag_erfassen();
      if (this.fehler.length === 0) {
        // Methodenaufrufe anpassen
        this.eintraege_sortieren();
        this.eintraege_anzeigen();
        this.gesamtbilanz_erstellen();
        this.gesamtbilanz_anzeigen();
      } else {
        // Fehler Array wieder löschen, sonst stuck an der Stelle.
        this.fehler = [];
      }
      weiterer_eintrag = confirm("Weiteren Eintrag hinzufügen?"); // Bei OK true, bei Abbrechen false
    }
  }
};

haushaltsbuch.eintrag_hinzufuegen();

console.log(haushaltsbuch);
