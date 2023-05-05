//Esercizio 2****************************************************

/* function esercizio2() {
  let userNum1 = parseInt(prompt("Inserisci il primo numero dell'operazione:"));
  let userNum2 = parseInt(
    prompt("Inserisci il secondo numero dell'operazione:")
  );
  let matOp = prompt("Inserisci l'operatore matematico (+ - / *):");

  switch (matOp) {
    case "+":
      console.log("Il risultato dell'addizione è: ", userNum1 + userNum2);
      break;
    case "-":
      console.log("Il risultato della sottrazione è: ", userNum1 - userNum2);
      break;
    case "/":
      console.log("Il risultato della divisione è: ", userNum1 / userNum2);
      break;
    case "*":
      console.log(
        "Il risultato della moltiplicazione è: ",
        userNum1 * userNum2
      );
      break;
    default:
      console.log("L'operazione da te selezionata non è possibile!");
  }
}

esercizio2(); */

//Esercizio 3***************************************************

/* function esercizio3() {
  const iAmStefano = {
    name: "Stefano",
    age: 34,
    height: 177,
    weight: 77,
    profession: "Developer",
  };

  console.log("Hi, my name is", iAmStefano.name);
  console.log("I am", iAmStefano["age"], "years old.");
  console.log(
    "Actually I'm studying to be the best Front End",
    iAmStefano.profession,
    "as possible."
  );
}

esercizio3(); */

//Esercizio Avanzato********************************************

function insertCalc(num1, num2, operazione) {
  function addizione() {
    return num1 + num2;
  }
  function sottrazione() {
    return num1 - num2;
  }
  function divisione() {
    return num1 / num2;
  }
  function moltiplicazione() {
    return num1 * num2;
  }

  switch (operazione) {
    case "+":
      console.log("Il risultato dell'addizione è: ", addizione());
      break;
    case "-":
      console.log("Il risultato della sottrazione è: ", sottrazione());
      break;
    case "/":
      console.log("Il risultato della divisione è: ", divisione());
      break;
    case "*":
      console.log("Il risultato della moltiplicazione è: ", moltiplicazione());
      break;
    default:
      console.log("L'operazione da te selezionata non è possibile!");
  }
}

insertCalc(7, 3, "*");
