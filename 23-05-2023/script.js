import { credentials } from "./utils/credentials.js";
import { GET } from "./utils/http.js";
const qS = (el) => document.querySelector(el);
const cE = (el) => document.createElement(el);

const rootEl = qS("#root");
const loginPageEl = qS(".loginPage");

const createProduct = (product) => {
  const wrapperProductEl = cE("div");
  const productTextEl = cE("h3");
  const productPriceEl = cE("p");
  const btnDeleteEl = cE("button");

  wrapperProductEl.className = "wrapperProduct";
  productTextEl.className = "productText";
  productPriceEl.className = "productPrice";
  btnDeleteEl.className = "btnDelete";

  btnDeleteEl.textContent = "❌";
  productTextEl.textContent = product.title;
  productPriceEl.textContent = product.price + "$";

  wrapperProductEl.append(productTextEl, productPriceEl, btnDeleteEl);
  document.body.appendChild(wrapperProductEl);

  btnDeleteEl.addEventListener("click", () => {
    document.body.removeChild(wrapperProductEl);
  });
};

const loginModal = () => {
  const wrapperEl = cE("form");
  const titleEl = cE("h1");
  const inputUserEl = cE("input");
  const inputUserPwEl = cE("input");
  const loginBtnEl = cE("button");

  titleEl.className = "titleLogin";
  titleEl.textContent = "Login time ⏳";
  wrapperEl.className = "loginForm";
  inputUserEl.className = "inputUser";
  inputUserEl.placeholder = "User => 'pippo'";
  inputUserPwEl.className = "inputPw";
  inputUserPwEl.placeholder = "Password => 'pippo'";
  inputUserPwEl.type = "Password";
  loginBtnEl.className = "loginBtn";
  loginBtnEl.textContent = "Login 🗝️";

  wrapperEl.append(titleEl, inputUserEl, inputUserPwEl, loginBtnEl);
  rootEl.appendChild(wrapperEl);

  wrapperEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const auth = credentials.find(
      (user) =>
        user.username === event.srcElement[0].value &&
        user.password === event.srcElement[1].value
    );

    if (auth) {
      console.log(auth.id);
      document.body.removeChild(loginPageEl);
      GET(`/carts/${auth.id}`).then((data) =>
        data.products.forEach((product) => {
          loginPageEl.textContent = "";
          loginPageEl.append(createProduct(product));
        })
      );
    } else {
      alert("Error: wrong login data");
    }
  });
};

loginModal();
