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

//     gesamtbilanz: {
//         einnahmen: 0,
//         ausgaben: 0,
//         bilanz: 0,
//     },

//     neuer_eintrag: {
//         titel: null,
//         typ: null,
//         betrag: null,
//         datum: null
//     },

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

// NEUER CODE DIE EINTRÄGE NEU VERARBBEITEN UND VALIDIEREN PRAXIS 12

// Objekt haushaltsbuch anlegen

const haushaltsbuch = {

  gesamtbilanz: new Map(),

  eintraege: [],

// Method 01:Eingabedaten holen
  eintrag_erfassen() {

    let neuer_eintrag = new Map();

    neuer_eintrag.set("titel", prompt ("Titel:"));
    neuer_eintrag.set("typ", prompt ("Typ (Einnahme oder Ausgabe):"));
    neuer_eintrag.set("betrag", this.betrag_verarbeiten(prompt ("Betrag (in Euro, ohne €-Zeichen):")));
    neuer_eintrag.set("datum", new Date(prompt ("Datum (jjjj-mm-tt):") + " 00:00:00"));
    neuer_eintrag.set("timestamp", Date.now());

    this.eintraege.push(neuer_eintrag);
 },

  // Method 01.1: Betrag verarbeiten:
    betrag_verarbeiten(betrag) {
      // Bsp. "23,64 " -> "23.64" -> 23.64 -> 23634
      return parseFloat(betrag.replace(",", ".")) * 100;
    },


   // Method 01.2: Einträge nach Datum abbsteigend sortieren.
   eintraege_sortieren() {
    this.eintraege.sort(function (eintrag_a, eintrag_b) {
      if (eintrag_a.get("datum") > eintrag_b.get("datum")) {
          return -1;
      } else if (eintrag_a.get("datum") < eintrag_b.get("datum")){
          return 1;
      } else {
          return 0;
      };
  });
 },


  // Method 02:Eingabedaten ausgeben
  eintraege_ausgeben() {
    console.clear();
    this.eintraege.forEach(function (eintrag) {
      console.log(`Titel: ${eintrag.get("titel")}\n`
          + `Typ: ${eintrag.get("typ")}\n`
          + `Betrag: ${(eintrag.get("betrag") / 100).toFixed(2)} €\n`
          + `Datum: ${eintrag.get("datum").toLocaleDateString("de-DE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}`
        );
    })
},

   // Method 03: Gesamtbilanz erstellen:
   gesamtbilanz_erstellen() {
    let neue_gesamtbilanz = new Map();
    neue_gesamtbilanz.set("einnahmen", 0);
    neue_gesamtbilanz.set("ausgaben", 0);
    neue_gesamtbilanz.set("bilanz", 0);

    this.eintraege.forEach(function (eintrag) {
        switch (eintrag.get("typ")) {
            case "Einnahme":
                neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einnahmen") + eintrag.get("betrag"));
                neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag"));
                break;
            case "Ausgabe":
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

   // Method 04:Gesamtbilanz ausgeben
   gesamtbilanz_ausgeben() {
    console.log(`Einnahmen:${(this.gesamtbilanz.get("einnahmen") / 100).toFixed(2)} €\n`
      + `Ausgaben: ${(this.gesamtbilanz.get("ausgaben") / 100).toFixed(2)} €\n`
      + `Bilanz: ${(this.gesamtbilanz.get("bilanz") / 100).toFixed(2)} €\n`
      + `Bilanz ist positiv: ${(this.gesamtbilanz.get("bilanz") / 100) >= 0}`
    );
},

  // Funktion 05:Alle Funktionsaufrufe zusammengefasst in einer while Schleife
  eintrag_hinzufuegen() {
    let weiterer_eintrag = true;

    while (weiterer_eintrag) {
      this.eintrag_erfassen();
      this.eintraege_sortieren();
      this.eintraege_ausgeben();
      this.gesamtbilanz_erstellen();
      this.gesamtbilanz_ausgeben();
      weiterer_eintrag = confirm("Weiteren Eintrag hinzufügen?");
    }
  }
};

haushaltsbuch.eintrag_hinzufuegen();

console.log(haushaltsbuch);
