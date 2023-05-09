const hamburgerBtn = document.querySelector(".hamburger");
const sidebarDiv = document.querySelector(".sidebar");

function hamburgerFunc() {
  console.log("Hai cliccato");
  sidebarDiv.classList.toggle("show");
}

// click: viene attivato quando un elemento viene cliccato

hamburgerBtn.addEventListener("click", hamburgerFunc);

hamburgerBtn.addEventListener("click", () => {
  console.log("click");
});

//******************Esercizio1*****************************************

const button = document.querySelector(".button");
const paragraph = document.querySelector(".paragraph");

button.addEventListener("click", () => {
  const userInput = prompt("Inserisci un saluto!");
  paragraph.textContent = userInput;
});

//******************Esercizio2****************************************

const form = document.querySelector(".formInputSubmit");
let input = document.querySelector(".inputForm");
let submit = document.querySelector(".submitForm");
let outputParagraph = document.querySelector(".paragraph2");

function inputSubmit(event) {
  event.preventDefault(event);
  outputParagraph.textContent = input.value;
  input.value = "";
}

form.addEventListener("submit", inputSubmit);

//******************Esercizio3****************************************

let input2 = document.querySelector(".input2");
let buttonAdd = document.querySelector(".buttonAdd");
let ulElement = document.querySelector("ul");

function addElements() {
  if (input2.value === "") {
    return;
  }
  let newElement = document.createElement("li");
  newElement.textContent = input2.value;
  ulElement.appendChild(newElement);
}

buttonAdd.addEventListener("click", addElements);
