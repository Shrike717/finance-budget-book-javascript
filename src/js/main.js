/**
 * Das Hauptmodul "main" ist für die Instanziierung des Haushaltsbuchs und den
 * Start der Anwendung zuständig.
 * @module main
 */

import Haushaltsbuch from "./classes/Haushaltsbuch.js";

/**
 * Instanziierung des Haushaltsbuchs und Start der Anwendung.
 */
let haushaltsbuch = new Haushaltsbuch();
haushaltsbuch.start();

export default haushaltsbuch;
