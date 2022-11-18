// Visualizzare in pagina 5 numeri casuali, dopo un timer di 30 secondi i numeri scompaiono e l'utene deve inserirli uno alla volta, ìl software dirà quanti numeri erano giusti e quanti erano sbagliati

// Manipolazione DOM
const output = document.getElementById("numeri");
const input = document.getElementById("input");
const corretti = document.getElementById("corretti")

// Array
let arrNum = [];
let numeriGiusti = 0;

// Generiamo 5 numeri random
arrNum = numRanUnici(5);
console.log(arrNum)

// Stampare i numeri a schermo a schermo
for (let i = 0; i < arrNum.length; i++){
    output.innerHTML += `<li>${arrNum[i]}</li>`    
}

// Creare un timer di 30 secondi che nasconde i numeri
const time = setTimeout(
    function(){
        output.innerHTML = ""    
    }
,3000);

// Chiedere all'utente di inserire i numeri
for (let i = 0; i < arrNum.length; i++){
    let user = parseInt(prompt("inseri"));
    if (arrNum.includes(user)){
        numeriGiusti++
    }
}

// Verificare quanti numeri sono giusti
corretti.innerHTML = "I numeri giusti sono: " + numeriGiusti + " e quelli sbagliati " + (arrNum.length - numeriGiusti);



// Funzioni-----------------------------

// Funzione che genera numeri random
function numRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per generare numeri random unici
function numRanUnici(quantità){
    let array = [];
    let number
    while (array.length < quantità){
        number = numRandom(0, 100);
        if (!array.includes(number)){
            array.push(number);
        }
    }

    return array
}
