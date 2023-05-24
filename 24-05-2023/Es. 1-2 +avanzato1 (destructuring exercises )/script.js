//Esercizio 1 destructuring

let persona = ["Mario", "Rossi", "Italia"];

let [firstName, secondName, country] = persona;
console.log(firstName);
console.log(secondName);
console.log(country);

//Esercizio 2 destructuring
/* let book = {
  titolo: "Il Nome della Rosa",
  autore: "Umberto Eco",
  anno: 1980,
};

let { titolo, autore, anno } = book;
console.log(titolo);
console.log(autore);
console.log(anno); */

//Esercizio 1 destructuring avanzato

/* let persona = ["Mario", , "Italia"];

let [firstName, secondName = "Bianchi", country] = persona;
console.log(firstName);
console.log(secondName);
console.log(country); */

//Esercizio 2 destructuring avanzato

/* let book = {
  titolo: "Il Nome della Rosa",
  autore: "Umberto Eco",
};

let { titolo, autore, anno = "1980" } = book;

console.log(titolo);
console.log(autore);
console.log(anno); */
