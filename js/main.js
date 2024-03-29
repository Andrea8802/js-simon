// Visualizzare in pagina 5 numeri casuali, dopo un timer di 30 secondi i numeri scompaiono e l'utene deve inserirli uno alla volta, ìl software dirà quanti numeri erano giusti e quanti erano sbagliati

// Manipolazione DOM
const input = document.getElementById("input");
const output = document.getElementById("numeri");
const risultato = document.getElementById("risultato")
const button = document.getElementById("button");

// Array
let arrNum = [];
let score = 0;
let numeriUtente = [];
let numeriIndovinati = [];

// Generiamo 5 numeri random
arrNum = numRanUnici(5);

// Stampare i numeri a schermo a schermo
for (let i = 0; i < arrNum.length; i++) {
    output.innerHTML += `<li>${arrNum[i]}</li>`;
}

// Creare un timer di 10 secondi che nasconde i numeri
const time = setTimeout(
    function () {
        // Rimuovere completamente la lista per evitare di vedere i risultati nel codice sorgente
        output.innerHTML = "";
        button.classList.remove("hidden");
        input.classList.remove("hidden");
    }
    , 10000);

// Bottone inserire numero
button.addEventListener("click", onClickInsertButton)

// Funzioni------------------------------------

// Funzione bottone per inserire numeri
function onClickInsertButton() {
    let valoreInput = parseInt(input.value);

    // Condizione per evitare una stringa come dato
    if (input.value >= 0 && input.value != "") {
        numeriUtente.push(parseInt(valoreInput));
        // Controllo numeri giusti
        if (arrNum.includes(valoreInput)) {
            score++;
            numeriIndovinati.push(valoreInput);
        }
        input.value = null;

        // Condizione per fermare l'input quando si arriva al numero massimo
        if (numeriUtente.length >= arrNum.length) {
            input.style.display = "none";
            button.style.display = "none";

            // Ristampare i numeri a schermo a schermo
            for (let i = 0; i < arrNum.length; i++) {
                output.innerHTML += `<li>${arrNum[i]}</li>`;
            }

            // Stampare quanti numeri sono giusti
            if (score === arrNum.length) {
                // Sali di livello e aggiungi 1 numero in più
                risultato.innerHTML = "I numeri giusti sono: " + score + ", hai indovinato tutti i numeri!"

                btnInizia.innerHTML = "Continua";

            } else if (score === 0) {
                risultato.innerHTML = "Hai sbagliato " + (arrNum.length - score) + " numeri, non ne hai indovinato nessuno!";

            } else {
                risultato.innerHTML = "Hai indovinato i numeri: " + numeriIndovinati + ". " + score + " corretti e " + (arrNum.length - score) + " errati"
            }
        }

        // Se non inserisci un numero
    } else {
        alert("Devi inserire un numero!");
        input.value = null;
    }
}

// Funzione che genera numeri random
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per generare numeri random unici
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
