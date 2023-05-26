// Import
/* import { getToDoUsers } from "./fn/http.js"; */

/////////////////Funzioni////////////////////
const qS = (type) => document.querySelector(type);
const cE = (type) => document.createElement(type);

//func creazione elementi
const taskGen = (itemData) => {
  const wrapper = cE("li");

  wrapper.textContent = itemData.content;
  wrapper.addEventListener("dblclick", () => {
    todoList = todoList.filter((todo) => todo.id !== itemData.id);
    listItemRender();
  });
  return wrapper;
};
//Callback onHandleSubmit
const onHandleSubmit = (e) => {
  e.preventDefault();
  todoList.push({ id: Date.now(), content: e.target[0].value });
  listItemRender();
};
//func renderizzazione elementi lista
const listItemRender = () => {
  //inizializza elementi lista vuoti
  textInputEl.value = "";
  listEl.textContent = "";
  //renderizzazione
  todoList.forEach((todo) => {
    listEl.appendChild(taskGen(todo));
  });
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

const onHandleItemDelete = (e) => {};

////////////////Variabili///////////////////
const formEl = qS("form");
const listEl = qS(".listToDo");
const textInputEl = qS(".textInput");
//localstorage
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

////////////////Corpo codice///////////////////
//invocazione render
listItemRender();

////////////////Async////////////////////////

////////////////Eventi///////////////////
formEl.addEventListener("submit", onHandleSubmit);
listEl.addEventListener("dblclick", onHandleItemDelete);
