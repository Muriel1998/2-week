// // Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log? // RISPOSTA:

// const PI = 3.14;

// console.log(PI);
// darà il risultato di 3,14 perchè sto andando a richiamare il valore della costante precedentemente dichiarata



// if (PI >= 3) { console.log(PI); }
// anche qui il risultato sarà 3,14 perchè il comando dice "se PI è maggiore uguale a tre, in console.log devo avere il valore di PI"
// Essendo che PI è uguale a 3,14, avrò questo valore in console.log


// // Es. 2: Dato il seguente, qual'è il risultato dei console.log? // RISPOSTA:

// var favColour = "violet"; let monthsInAYear = 12;

// if (true) { var favColour = "violet"; console.log("Il mio colore preferito è:", favColour); }
// E' vero che in un anno ci sono 12 mesi, perciò al console.log avrò "Il mio colore preferito è: violet"

// console.log("Ci sono", monthsInAYear, "mesi in un anno.");
// qui vado a richiamare il let, quindi avrò "Ci sono 12 mesi in un anno."




// // Es. 3: Dato il seguente, qual'è il risultato dei console.log? // RISPOSTA:

// function makePizza(moreIngredients) { let theSecond = "Sugo di pomodoro freschissimo"; // { ... } console.log(theSecond + ", " + moreIngredients); return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!) }

// if (true) { makePizza("rucola, prosciutto crudo e scaglie di grana."); console.log("Il secondo ingrediente necessario: ", theSecond); }