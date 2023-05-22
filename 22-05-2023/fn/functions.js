import { rootEl } from "../script.js";

export const qS = (el) => document.querySelector(el);
export const cE = (el) => document.createElement(el);

const meteo = qS(".meteo");
const button = qS(".button");
const formModal = qS(".meteoModal");

export const weatherData = async (city) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=416289e83ec94b08be4132223232205&q=${city}&aqi=no`
  );
  const data = await res.json();

  return data;
};

const createWrapEl = (dataMeteo) => {
  const wrapEl = cE("div");
  const mainImg = cE("img");
  const mainText = cE("h2");
  const mainTemp = cE("h3");

  wrapEl.className = "mainWrapper";
  mainText.textContent = dataMeteo.location.name;
  mainTemp.textContent = dataMeteo.current.temp_c + "°C";
  mainImg.src = dataMeteo.current.condition.icon;

  wrapEl.append(mainText, mainImg, mainTemp);
  rootEl.appendChild(wrapEl);
};

formModal.addEventListener("submit", (evt) => {
  evt.preventDefault();
  rootEl.textContent = "";
  weatherData(evt.srcElement[0].value).then((data) => createWrapEl(data));
});
