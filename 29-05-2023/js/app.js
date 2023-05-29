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

const contentDiv = qS(".content");
/****************Parte centrale Home/4you/following*************************************/
const homeWrapper = createEl("div", "home_wrapper", null, contentDiv);
const homeEl = createEl("h2", "homeEl", "Home", homeWrapper);
const forYouWrappEl = createEl("div", "forYou_wrapper", null, homeWrapper);
const forYouP = createEl("p", "for_you", "For you", forYouWrappEl);
const followingP = createEl("p", "following", "Following", forYouWrappEl);
/****************Parte centrale Tweet*************************************/
const tweetWrapperHome = createEl(
  "div",
  "tweet_wrapper_home",
  null,
  contentDiv
);
const userAvatarInput = createEl(
  "img",
  "user_avatar_home",
  null,
  tweetWrapperHome,
  {
    name: "src",
    value: "./images/The-Midnight-Gospel-serie-tv-Netflix.jpg",
  }
);
const tweetForm = createEl(
  "form",
  "tweet_wrapper_form",
  null,
  tweetWrapperHome
);
const tweetInputEl = createEl("input", "tweet_input", null, tweetForm, {
  name: "placeholder",
  value: "what is happening?!",
});
const tweetSubmit = createEl("input", "tweet_submit", "tweet", tweetForm, {
  name: "type",
  value: "submit",
});

/****************Parte centrale Cards*************************************/

const wrapperCardEl = createEl("div", "wrapper_card", null, contentDiv);
