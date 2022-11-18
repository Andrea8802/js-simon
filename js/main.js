// Visualizzare in pagina 5 numeri casuali, dopo un timer di 30 secondi i numeri scompaiono e l'utene deve inserirli uno alla volta, ìl software dirà quanti numeri erano giusti e quanti erano sbagliati

// Manipolazione DOM
const output = document.getElementById("numeri");
const input = document.getElementById("input");
const corretti = document.getElementById("corretti")
const button = document.getElementById("button");

// Array
let arrNum = [];
let numeriGiusti = 0;
let user = [];

// Generiamo 5 numeri random
arrNum = [1,1,1,1,1];

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

// Far inserire i numeri all'utente
button.addEventListener("click",
    function(){
        if (input.value >= 0){
            user.push(parseInt(input.value));
            input.value = null;
            if (user.length >= arrNum.length){
                input.style.display = "none";
                button.style.display = "none";

                for (let i = 0; i < arrNum.length; i++){
                    if (arrNum[i] === user[i]){
                        numeriGiusti++;
                    }
                }


                // Stampare quanti numeri sono giusti

                if (numeriGiusti === arrNum.length){
                    corretti.innerHTML = "I numeri giusti sono: " + numeriGiusti + ", hai indovinato tutti i numeri!"

                } else if (numeriGiusti === 0){
                    corretti.innerHTML = "Hai sbagliato " + (arrNum.length - numeriGiusti) + " numeri, non ne hai indovinato nessuno!"

                } else{
                    corretti.innerHTML = "I numeri giusti sono: " + numeriGiusti + " e quelli sbagliati " + (arrNum.length - numeriGiusti);
                }
                
            }
        } else{
            alert("Devi inserire un numero!")
        }
    }
)

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
