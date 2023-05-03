//Esercizio 1

let userNumber = parseInt (prompt("Inserisci un numero:"));

if (userNumber % 2 ===0){
    console.log(userNumber, " è un numero pari.");
    alert("Il numero che hai inserito è pari!");
} else {
    console.log(userNumber, " è un numero dispari.");
    alert("Il numero che hai inserito è dispari!"); 
} 


//Esercizio 2

alert("Inizio Esercizio 2");

let userNumber1 = parseInt (prompt("Inserisci un numero:"));

userNumber1 % 2 ===0 ? console.log("È un numero pari.") : console.log("E' un numero dispari.");


//Esercizio 3 Switch
alert("Inizio Esercizio 3");

let userNum1 = parseInt (prompt("Inserisci il primo numero dell'operazione:"));
let userNum2 = parseInt (prompt("Inserisci il secondo numero dell'operazione:"));
let matOp = (prompt("Inserisci l'operatore matematico (+ - / *):"));

switch (matOp) {
    case "+":
        console.log("Il risultato dell'addizione è: ", (userNum1 + userNum2) );
        break;
    case "-":
        console.log("Il risultato della sottrazione è: ", (userNum1 - userNum2));
        break;
    case "/":
        console.log("Il risultato della divisione è: ", (userNum1 / userNum2) );
        break;
    case "*":
        console.log("Il risultato della moltiplicazione è: ", (userNum1 * userNum2) );
        break;
    default:
    console.log("L'operazione da te selezionata non è possibile!");
}