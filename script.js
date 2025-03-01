// input numero dell'utente
const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));

// validazione dell'input dell'utente per il numero inserito
const validNumber = !isNaN(userNumber) && userNumber >= 1 && userNumber <= 5;

if (!validNumber) {
    console.log("numero non valido. ricarica la pagina e scegline un altro")
}

else {
    console.log("l'utente ha scelto", userNumber)


    // input dell'utente se il risultato sarà pari o dispari
    const userGuess = (prompt('inserisci la parola "pari" oppure "dispari" '));
    console.log("l'utente ha scelto - ", userGuess)

    if (userGuess !== "pari" && userGuess !== "dispari") {
        console.log("numero non valido. ricarica la pagina e scegline un altro")
    }

    else {

        // generazione random del numero del computer
        let num1 = Math.round(Math.random() * 5) + 1;
        console.log("numero generato dal computer", num1) // è uguale all'altro algoritmo, non so perchè questo funziona e stampa in console, mentre l'altro non stampava.


        // somma dei due numeri
        let sum = userNumber + num1; { // prima avevo messo userNumber + num1 tra parentesi, rimane il dubbio su quando ci vogliono le parentesi e quando no
            console.log(sum)
        }

        // calcolo se il risultato è pari o dispari
        let result;
        if (sum % 2 === 0) {
            result = "pari";
        }
        else {
            result = "dispari";
        }
        console.log("risultato", result);

        // confronto tra la scelta dell'utente e il risultato della somma
        if (userGuess === result) {
            console.log("ha vinto l'utente");
        }
        else {
            console.log("ha vinto il computer");
        }

    }

}

