//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

var letter = prompt("scegli pari o dispari");
console.log(letter);

var choosenumber = Number(prompt("scegli un numero tra 1 e 5"));
console.log(choosenumber);



//creaimo la funzione per il numero casuale tra 1 e 5 del comp;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;

}




 // assegniamo una variabile alla funzione numrandom;
  var numeroComp  = getRndInteger(1, 5);
 console.log(numeroComp);

 var somma =  numeroComp + choosenumber;
 console.log(somma);

 function pariedispari(inserisciUnNumero) {

    if (somma %2 === 0) {

      return "pari";

    }else {

      return "dispari";
    }
 }

 if (pariedispari(somma) === letter ) {
   console.log("hai vinto!!!!");
 } else {
   console.log("spiaze....hai perso");
 };
