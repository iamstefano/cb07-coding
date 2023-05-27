// Import
/* import { getToDoUsers } from "./fn/http.js"; */

/////////////////Funzioni////////////////////
const qS = (type) => document.querySelector(type);
const cE = (type) => document.createElement(type);

//func creazione elementi
const taskGen = (itemData) => {
  const wrapper = cE("li");

  wrapper.textContent = itemData.content;
  //confronto elementi e cancellazione double click elementi lista
  wrapper.addEventListener("dblclick", () => {
    todoList = todoList.filter((todo) => todo.id !== itemData.id); //high order function
    listItemRender();
  });
  wrapper.addEventListener("click", () => {
    wrapper.style.textDecoration = "line-through";
    listItemRender();
  });

  return wrapper;
};

//Callback onHandleSubmit
const onHandleSubmit = (evt) => {
  evt.preventDefault();
  todoList.push({ id: Date.now(), content: evt.target[0].value });
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
//func completamento task con click su elemento

////////////////Variabili///////////////////
const formEl = qS("form");
const listEl = qS(".listToDo");
const textInputEl = qS(".textInput");
const taskOk = qS("li");
//localstorage
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

////////////////Corpo codice///////////////////
//invocazione render
listItemRender();

////////////////Async////////////////////////

////////////////Eventi///////////////////
formEl.addEventListener("submit", onHandleSubmit);
