// Visualizzare in pagina 5 numeri casuali, dopo un timer di 30 secondi i numeri scompaiono e l'utene deve inserirli uno alla volta, ìl software dirà quanti numeri erano giusti e quanti erano sbagliati

// Manipolazione DOM
const input = document.getElementById("input");
const output = document.getElementById("numeri");
const btnInizia = document.getElementById("btn-inizia");
const title = document.getElementById("title");
const btnInsert = document.getElementById("button");

// Array
let arrNum = [];
let numeriUtente = [];
let numeriIndovinati = [];

// Variabili
let livello = 5;
let score = 0;
let quantitaNumeriInseriti = 0;

// Click sul bottone inizia/continua
btnInizia.addEventListener("click", onClickStartContinue);

// Click sul bottone per inserire numero
btnInsert.addEventListener("click", onClickInsertNumber);


// Funzioni-----------------------------

function onClickStartContinue() {

    // Azzeramento output o valori
    risultato.innerHTML = "";
    btnInizia.classList.add("hidden");
    arrNum = [];
    numeriUtente = [];
    numeriIndovinati = [];
    score = 0;
    output.innerHTML = "";
    title.innerHTML = "";
    quantitaNumeriInseriti = 0;

    // Generiamo 5 numeri random
    arrNum = numRanUnici(livello);

    // Stampare i numeri a schermo a schermo
    addNumber();

    // Countdown
    let secondi = 10;
    const orologio = document.getElementById("countdown");
    orologio.innerHTML = "Tempo Rimanente: " + secondi;
    const countdown = setInterval(
        function () {
            secondi--;
            orologio.innerHTML = "Tempo Rimanente: " + secondi;
            if (secondi === 0) {
                orologio.innerHTML = "";
                clearInterval(countdown);
            }
        }
        , 1000)

    // Creare un timer di 10 secondi che nasconde i numeri
    const time = setTimeout(
        function () {
            // Rimuovere completamente la lista per evitare di vedere i risultati nel codice sorgente
            output.innerHTML = "";
            btnInsert.classList.remove("hidden");
            input.classList.remove("hidden");
            title.innerHTML = "Saimon Says 2.0"
            output.innerHTML = "Completati: " + quantitaNumeriInseriti + "/" + livello;

        }
        , 10000);

}


function onClickInsertNumber() {
    let valoreInput = parseInt(input.value);


    // Condizione per evitare una stringa come dato
    if (input.value >= 0 && input.value != "") {

        // Aggiorniamo contatore
        quantitaNumeriInseriti++;
        output.innerHTML = "Completati: " + quantitaNumeriInseriti + "/" + livello;

        // Pushamo nell'arrray
        numeriUtente.push(parseInt(valoreInput));

        // Controllo numeri giusti
        if (arrNum.includes(valoreInput)) {
            score++;
            numeriIndovinati.push(valoreInput);
        }
        input.value = null;

        // Se non inserisci un numero
    } else {
        alert("Devi inserire un numero!");
        input.value = null;
    }

    // Output-------------
    // Condizione per fermare l'input quando si arriva al numero massimo
    if (numeriUtente.length >= arrNum.length) {
        btnInsert.classList.add("hidden");
        input.classList.add("hidden");
        output.innerHTML = "";

        // Ristampare i numeri a schermo a schermo
        addNumber();

        // Facciamo riapparire il tasto per continuare
        btnInizia.classList.remove("hidden");
        btnInizia.innerHTML = "Riprova";

        // Stampare quanti numeri sono giusti
        const risultato = document.getElementById("risultato");

        if (score === arrNum.length) {
            // Sali di livello e aggiungi 1 numero in più
            livello++
            risultato.innerHTML = "I numeri giusti sono: " + score + ", hai indovinato tutti i numeri! Ora diventeranno: " + livello;

            risultato.style.color = "lime";

            btnInizia.innerHTML = "Continua";

        } else if (score === 0) {
            risultato.innerHTML = "Hai sbagliato " + (arrNum.length - score) + " numeri, non ne hai indovinato nessuno!";

            risultato.style.color = "red";

            livello = 5;

        } else {
            risultato.innerHTML = "Hai indovinato i numeri: " + numeriIndovinati + ". " + score + " corretti e " + (arrNum.length - score) + " errati"
        }
    }
}


function addNumber() {
    for (let i = 0; i < arrNum.length; i++) {
        output.innerHTML += `<li>${arrNum[i]}</li>`;
    }
}

function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function numRanUnici(quantità) {
    let array = [];
    let number
    while (array.length < quantità) {
        number = numRandom(0, 100);
        if (!array.includes(number)) {
            array.push(number);
        }
    }
    return array
}
