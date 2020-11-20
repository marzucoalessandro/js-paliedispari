//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

var letter = prompt("scegli pari con p o dispari con d");

//if (letter = p) {
  //  letter = true;
    //alert("hai scelto pari ");
  //} else if (letter = d) {
    //letter = true;
    //alert("hai scelto dispari");
  //} else {
    //alert("devi scegliere p oppure d");
  //}




var choosenumber = Number(prompt("scegli un numero tra 1 e 5"));

if ((choosenumber > 5) || (choosenumber <= 0)) {
    alert("il numero inserito è sbagliato");

}

//creaimo la funzione per il numero casuale tra 1 e 5 del comp;

 function numrandom(number) {

   return Math.floor(Math.random() * 6) ;
 }

 // assegniamo una variabile alla funzione numrandom;
 var number = numrandom(number);

 var somma =  number + choosenumber;

 function pariedispari(somma) {

    if (somma %2 == 0) {
      return ("la somma è pari");

    }else {
      return ("la somma è dispari")
    }
 }

 
