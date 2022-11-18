// Visualizzare in pagina 5 numeri casuali, dopo un timer di 30 secondi i numeri scompaiono e l'utene deve inserirli uno alla volta, ìl software dirà quanti numeri erano giusti e quanti erano sbagliati

// Manipolazione DOM
const output = document.getElementById("numeri");

// Array
let arrNum = [];

// Generiamo 5 numeri random
for (let i = 0; i < 5; i++){
    arrNum.push(numRandom(0, 100))
}

// Stampare i numeri a schermo a schermo
for (let i = 0; i < arrNum.length; i++){
    output.innerHTML += `<li>${arrNum[i]}</li>`
    
}

// Creare un timer di 30 secondi che nasconde i numeri

// Chiedere all'utente di inserire i numeri

// Verificare quanti numeri sono giusti

// Funzioni

// Funzione che genera numeri random
function numRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
