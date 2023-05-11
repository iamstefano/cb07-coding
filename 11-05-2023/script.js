const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
];

/* for (let item of users) {
  console.log(item);
} */

const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);

const divContainer = cE("div");
const usersList = cE("ul");
const listEl = cE("li");

divContainer.className = "divContainer";
usersList.className = "usersList";
listEl.className = "listEl";

document.body.appendChild(divContainer);
divContainer.appendChild(usersList);

for (let nameUser of users) {
  const listEl = cE("li");
  listEl.textContent = nameUser.name;
  usersList.appendChild(listEl);
}