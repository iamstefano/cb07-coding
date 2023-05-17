import { cE, qS, createProduct, createProductModal, qSA } from "./utils/fn.js";

/* const productMock = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
}; */

const rootEl = qS("#root");
const productList = cE("div");
const productListTitle = cE("h2");
const searchProductEl = qS(".searchInput");
const categoriesEl = qS(".categories");

let productListData = [];

productList.className = "productList";
productListTitle.textContent = "Our products for you!";
rootEl.append(productListTitle, productList);

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
