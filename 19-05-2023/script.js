import {
  cE,
  qS,
  qSA,
  createProduct,
  createProductModal,
  createCartModal,
  createLogIn,
} from "./utils/fn.js";

export const rootEl = qS("#root");
export const productList = cE("div");
export const productListTitle = cE("h2");
export const searchProductEl = qS(".searchInput");
export const cartEl = qS(".cart");
export const navbarEl = qS(".navbar");
export const heroEl = qS(".hero");
export const categoriesEl = qS(".categories");
export const pricesEl = qS(".prices");
export let productListData = [];
export let cartItems = [];

productList.className = "productList";
productListTitle.textContent = "Our products for you!";
navbarEl.style.display = "none";
heroEl.style.display = "none";
categoriesEl.style.display = "none";
pricesEl.style.display = "none";
rootEl.append(createLogIn());

// ASYNC
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    productListData = data.products;
    productListData.forEach((product) =>
      productList.append(createProduct(product))
    );
  })
  .then(() => {
    const productCardEls = qSA(".productCard");

    productCardEls.forEach((product) =>
      product.addEventListener("click", () =>
        fetch(`https://dummyjson.com/products/${product.id}`)
          .then((res) => res.json())
          .then((data) => rootEl.append(createProductModal(data, rootEl)))
      )
    );
  });

// Event Listener sul search input
searchProductEl.addEventListener("input", (event) => {
  productList.textContent = "";

  //Metodo filter per descrizione in lowercase sull'user input in lcase
  productListData
    .filter((product) =>
      product.description
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    )
    //4Each: Per ogni object => si appende un nuovo obj filtrato al wrapper di card
    .forEach((obj) => productList.append(createProduct(obj)));
  // }
});

/* categoriesEl.addEventListener("input", (event) => {
  productList.textContent = "";

  productListData
    .filter(
      (product) =>
        product.category.toLowerCase() === event.target.value.toLowerCase()
    )
    .forEach((obj) => productList.append(createProduct(obj)));
}); */

categoriesEl.addEventListener("input", (event) => {
  if (event.target.value === "") {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        productList.textContent = "";
        productListData = data.products;
        productListData.forEach((obj) =>
          productList.append(createProduct(obj))
        );
      });
  } else {
    fetch(`https://dummyjson.com/products/category/${event.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        productList.textContent = "";
        data.products.forEach((obj) => productList.append(createProduct(obj)));
      });
  }
});

cartEl.addEventListener("click", () => {
  rootEl.append(createCartModal(cartItems, rootEl));
  const cartModal = qS(".cartModal");
  cartEl.disabled = true;
  cartModal.classList.add("cartModal__active");
});
