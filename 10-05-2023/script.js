const sum = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

const calculate = (num1, num2, operationFn) => operationFn(num1, num2);

let operation; // global variable
document
  .querySelector("#plus")
  .addEventListener("click", () => (operation = sum));
document
  .querySelector("#minus")
  .addEventListener("click", () => (operation = subtraction));
document
  .querySelector("#multiplication")
  .addEventListener("click", () => (operation = multiplication));
document
  .querySelector("#division")
  .addEventListener("click", () => (operation = division));

document.querySelector("#equal").addEventListener("click", () => {
  let a = parseInt(document.querySelector("#num1").value);
  let b = parseInt(document.querySelector("#num2").value);
  document.querySelector("#result").innerHTML =
    "Result: " + calculate(a, b, operation);
});
