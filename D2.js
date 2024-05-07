/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 10;
const num2 = 20;

function trovaIlMaggiore(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(trovaIlMaggiore(num1, num2));

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const num3 = 5;

function checkIfEqual(num1) {
  if (num1 !== 5) {
    console.log("not equal");
  } else {
    console.log("equal");
  }
}
checkIfEqual(num1);
checkIfEqual(num3);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const num6 = 23;

function checkIfDevide(num1) {
  if (num1 % 5 === 0) {
    console.log("divisibile per 5");
  } else {
    console.log("non divisibile per 5");
  }
}
checkIfDevide(num1);
checkIfDevide(num6);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function checkIfEqualOrEquals(num1) {
  if (num1 - 2 === 8) console.log("il risultato è 8");
  else {
    console.log("il risultato non è 8");
  }
}
checkIfEqualOrEquals(num1);
checkIfEqualOrEquals(num6);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const shippingPrice = 10;
let totalShoppingCart = 65;

if (totalShoppingCart <= 50) {
  console.log("totale", totalShoppingCart + shippingPrice);
} else {
  console.log("totale", totalShoppingCart);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

const blackFriday = true;

if (blackFriday === true) {
  totalShoppingCart = totalShoppingCart - (totalShoppingCart / 100) * 20;
  if (totalShoppingCart <= 50) {
    totalShoppingCart = totalShoppingCart + 10;
    console.log("sconto black fiday; - 20%");
    console.log("spesa di spedizione: €10");
    console.log("totale: €" + totalShoppingCart);
  } else {
    console.log("sconto black fiday; - 20%");
    console.log("spedizione gratuita");
    console.log("totale: €" + totalShoppingCart);
  }
} else {
  if (totalShoppingCart <= 50) {
    totalShoppingCart = totalShoppingCart + 10;
    console.log("spesa di spedizione: €10");
    console.log("totale: €" + totalShoppingCart);
  } else {
    console.log("spedizione gratuita");
    console.log("totale: €" + totalShoppingCart);
  }
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let Aldo = 30;
let Giovanni = 65;
let Gigi = 87;

let primo, secondo, terzo;

if (Aldo >= Giovanni && Aldo >= Gigi) {
  primo = Aldo;
  if (Giovanni >= Gigi) {
    secondo = Giovanni;
    terzo = Gigi;
  } else {
    secondo = Gigi;
    terzo = Giovanni;
  }
} else if (Giovanni >= Aldo && Giovanni >= Gigi) {
  primo = Giovanni;
  if (Aldo >= Gigi) {
    secondo = Aldo;
    terzo = Gigi;
  } else {
    secondo = Gigi;
    terzo = Aldo;
  }
} else {
  primo = Gigi;
  if (Aldo >= Giovanni) {
    secondo = Aldo;
    terzo = Giovanni;
  } else {
    secondo = Giovanni;
    terzo = Aldo;
  }
}

console.log("ordine decrescente", Aldo, Giovanni, Gigi);

/* ESERCIZIO 8
 Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const surName = "PrestiGiacomo";
const numero = 5;
function verifyNumber(num4) {
  if (typeof num4 === "number") {
    console.log("il valore dato è un numero");
  } else {
    console.log("il valore dato non è un numero");
  }
}

verifyNumber(numero);
verifyNumber(totalShoppingCart);
verifyNumber(surName);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const num5 = 34;
function verifyEvenNumber(num5) {
  if (num5 % 2 === 0) {
    console.log("il numero è pari");
  } else {
    console.log("il numero non è pari");
  }
}

verifyEvenNumber(num5);
verifyEvenNumber(totalShoppingCart);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */

const val = 10;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2];

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let numberSeries = [];

for (let i = 1; i <= 10; i++) {
  numberSeries.push(i);
}

console.log(numberSeries);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numberSeries[numberSeries.length - 1] = 100;

console.log(numberSeries);
