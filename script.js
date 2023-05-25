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


const countDown = setInterval (quantoMancaADomattina, 1000)

function quantoMancaADomattina () {
    let ora = adesso()
    let domaniMattina = domattina()
    let insomma = quantoManca (domaniMattina, ora)

    console.log (insomma)
    return insomma
}


function domattina () {
    let startBoolean = new Date("May 26, 2023 09:30:00").getTime()
    startBoolean = Math.floor (( startBoolean ) / 1000)

    return startBoolean
}


function adesso () {
    let currentDateAndTime = new Date().getTime()
    currentDateAndTime = Math.floor (( currentDateAndTime ) / 1000)

    return currentDateAndTime
}

function quantoManca (daDataFutura, adAdesso) {
    const quantoManca = daDataFutura - adAdesso
    return quantoManca
}