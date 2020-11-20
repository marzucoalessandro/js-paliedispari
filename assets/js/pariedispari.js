//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.
var pariodispari = prompt("scegli pari con p o dispari con d");
if (pariodispari !== "p" || pariodispari !== "d") {
  alert("lettera sbagliata");

}

var choosenumber = Number(prompt("scegli un numero tra 1 e 5"));

if (choosenumber > "5" && choosenumber <= "0") {
    alert("il numero inserito è sbagliato");

}
