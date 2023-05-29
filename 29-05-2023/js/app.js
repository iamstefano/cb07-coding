const qS = (el) => document.querySelector(el);
const cE = (el) => document.createElement(el);

const navItems = document.querySelectorAll(".navItem");

navItems.forEach((element) => {
  element.addEventListener("click", () => {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  });
});

const createEl = (
  type,
  cls = null,
  textContent = null,
  parent = null,
  ...attrs
) => {
  const element = cE(type);
  element.className = cls;
  element.textContent = textContent;
  attrs.length > 0
    ? attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value))
    : "";
  element;
  parent?.appendChild(element);
  return element;
};

const homeWrapper = createEl("div", "home_wrapper", null, contentWrappEl);
const homeEl = createEl("h2", null, "Home", homeWrapper);
