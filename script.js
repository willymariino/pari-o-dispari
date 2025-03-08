// input numero dell'utente
const userNumber = document.getElementById("new-task-number")
const userGuess = document.getElementById("new-task-even-or-odd")
const sendTask = document.getElementById("send-task")
const userNumberResult = document.getElementById("user-number-result")
const userGuessResult = document.getElementById("user-guess-result")
const cpuNumberResult = document.getElementById("cpu-number-result")
const sumNumberResult = document.getElementById("sum-number-result")
const gameResult = document.getElementById("game-result")
const winnerResult = document.getElementById("winner-result")
// validazione dell'input dell'utente per il numero inserito

sendTask.addEventListener('click', function () {

    // convertire l'input dell'utente in numero
    const number = parseInt(userNumber.value)
    const guess = (userGuess.value)

    const finalWinner = calculateWinner(number, guess)


    const validNumber = !isNaN(userNumber) && userNumber >= 1 && userNumber <= 5;

    if (!validNumber) {
        console.log("numero non valido, ricarica la pagina e scegline un altro")
        userNumberResult.innertext = "numero non valido, ricarica la pagina e scegline un altro"
    }

    else {
        console.log("l'utente ha scelto", userNumber)
        userNumberResult.innerText = "l'utente ha scelto:" + userNumber.value



        // input dell'utente se il risultato sarà pari o dispari
        const userGuess = ('inserisci la parola "pari" oppure "dispari" ');
        console.log("l'utente ha scelto - ", userGuess)
        userGuessResult.innertext = "l'utente ha scelto" + userGuess.value

    }

})

if (userGuess !== "pari" && userGuess !== "dispari") {
    console.log("input non valido. ricarica la pagina e scegline un altro")
    userGuessResult.innertext = "input non valido. ricarica la pagina e scegline un altro"
}

else {

    // generazione random del numero del computer
    let num1 = Math.round(Math.random() * 5) + 1;
    console.log("numero generato dal computer", num1) // è uguale all'altro algoritmo, non so perchè questo funziona e stampa in console, mentre l'altro non stampava.
    cpuNumberResult.innertext = "numero generato dal computer:" + " " + num1.value

    // somma dei due numeri
    let sum = userNumber + num1; { // prima avevo messo userNumber + num1 tra parentesi, rimane il dubbio su quando ci vogliono le parentesi e quando no
        console.log(sum)
        sumNumberResult.innerText = "la somma dei due numeri è:" + " " + sum.value
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
    gameResult.innertext = "risultato" + " " + result.value

    // confronto tra la scelta dell'utente e il risultato della somma
    if (userGuess === result) {
        console.log("ha vinto l'utente");
        winnerResult.innerText = "ha vinto l'utente"
    }
    else {
        console.log("ha vinto il computer");
        winnerResult.innertext = "ha vinto il computer"
    }

}





