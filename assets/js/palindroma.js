//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//1 creiamo una var col prompt per chiedere una parola all'utente

//2 creiamo una funziona che esamini la parola inserita e all'interno un if per vedere se la parola capovolta ha lo stesso valore.

//3 per fare qst dobbiamo:
//3.1 trasformare la ns parola in un array
//3.2 rovesciare tutti gli elementi all'interno dell'array
//3.3 trasformare di nuovo in stringa il nostro array:

var parola = prompt("dimmi una parola");
console.log(parola);




function palindroma(text) {

  var newarray = parola.split("");
  console.log(newarray);

  var reversearray = newarray.reverse();
  console.log(reversearray);

  var nuova = reversearray.join("");
  console.log(nuova);

}




  if (palindroma(parola)) {
    console.log("la parola è palindroma");

  } else {
    console.log("la parola non è palindroma");
  }
