// selezionare gli elementi della pagina
const userNumber = document.getElementById("new-task-number")
const userGuess = document.getElementById("new-task-even-or-odd")
const sendTask = document.getElementById("send-task")
const userNumberResult = document.getElementById("user-number-result")
const userGuessResult = document.getElementById("user-guess-result")
const cpuNumberResult = document.getElementById("cpu-number-result")
const sumNumberResult = document.getElementById("sum-number-result")
const gameResult = document.getElementById("game-result")
const winnerResult = document.getElementById("winner-result")


// funzione per generare un numero casuale da 1 a 5
function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1
}

// funzione per verificare se il numero è pari o dispari
function verifyIfEvenOrOdd(numero) {
    if (numero % 2 === 0) {
        return "pari"
    }
    else {
        return "dispari"
    }
}

// evento al click del bottone
sendTask.addEventListener('click', function () {

    // convertire l'input dell'utente in valori utilizzabili
    const number = parseInt(userNumber.value)
    const guess = userGuess.value.toLowerCase().trim() // convertiamo in  minuscolo ed eliminiamo gli spazi

    // const validNumber = !isNaN(userNumber) && userNumber >= 1 && userNumber <= 5; codice che non uso più

    // validazione input numero
    if (isNaN(number) || number < 1 || number > 5) {
        console.log("numero non valido, ricarica la pagina e scegline un altro")
        userNumberResult.innerText = "numero non valido, ricarica la pagina e scegline un altro"
        return
    }

    // validazione input pari/dispari
    if (guess !== "pari" && guess !== "dispari") {
        userGuessResult.innerText = "Scelta non valida, inserisci 'pari' o 'dispari' "
        return
    }

    // invoco la funzione per generare un numero casuale
    const num1 = generateRandomNumber()

    // sommo i due numeri
    const sum = number + num1

    // invoco la funzione per controllare se sum è pari o dispari
    const result = verifyIfEvenOrOdd(sum)

    // stampo in pagina i risultati
    userNumberResult.innerText = "l'utente ha scelto il numero:" + " " + number
    userGuessResult.innerText = "l'utente ha scelto:" + " " + guess
    cpuNumberResult.innerText = "numero generato dal computer:" + " " + num1
    sumNumberResult.innerText = "la somma dei due numeri è:" + " " + sum
    gameResult.innerText = "risultato:" + " " + result




    // confronto tra la scelta dell'utente e il risultato della somma
    if (guess === result) {
        console.log("ha vinto l'utente");
        winnerResult.innerText = "ha vinto l'utente"
    }
    else {
        console.log("ha vinto il computer");
        winnerResult.innerText = "ha vinto il computer"
    }



})



