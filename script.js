// Traccia ---------
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

// Consigli ---------
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?


const countDown = setInterval (
    function() {
        let seconds = quantoMancaADomattina()
        // console.log(seconds)

        let minutes = Math.floor (seconds / 60)
        // console.log (minutes)

        let hours = Math.floor (minutes / 60)
        // console.log (hours)

        seconds = seconds % 60

        minutes = minutes % 60

        const timeFormat = hours + ":" + minutes + ":" + seconds
        console.log (timeFormat)

    }, 1000
)


// FUNCTIONS /////////////////////////////

/**
 * Checks current timestamp
 * @returns {number} current timestamp
 */
function adessoTimestamp () {
    let currentDateAndTime = new Date().getTime()
    currentDateAndTime = Math.floor (( currentDateAndTime ) / 1000)

    return currentDateAndTime
}

/**
 * Checks tommorrow morning @ 9.30 timestamp
 * @returns tommorrow morning @ 9.30 timestamp
 */
function domattinaTimestamp () {
    let startBoolean = new Date("May 26, 2023 09:30:00").getTime()
    startBoolean = Math.floor (( startBoolean ) / 1000)

    return startBoolean
}

/**
 * Calculates in seconds the subtraction between two different timestamps
 * @param {number} daDataFutura Future date
 * @param {number} adAdesso Current date
 * @returns the subtratction in seconds
 */
function quantoMancaADataFutura (daDataFutura, adAdesso) {
    const quantoMancaADataFutura = daDataFutura - adAdesso
    return quantoMancaADataFutura
}

/**
 * Calculates in seconds how much is missing to tomorrow morning @ 9.30
 * @returns {number} number in seconds
 */
function quantoMancaADomattina () {
    let ora = adessoTimestamp()
    let domaniMattina = domattinaTimestamp()
    let insomma = quantoMancaADataFutura (domaniMattina, ora)

    return insomma
}