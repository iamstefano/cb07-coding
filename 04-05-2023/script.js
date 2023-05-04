//Esercizio 1

function esercizio1() {
  let array = [1, 2, 3, 4, 5, 6, 7];

  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

esercizio1();

//Esercizio 2

function esercizio2() {
  let array2 = [33, 54, 88, 3, 12, 7, 21];

  let min = Math.min(...array2);
  let max = Math.max(...array2);

  console.log("Il valore minimo è", min, ".", "Il valore massimo è", max, ".");
}

esercizio2();
