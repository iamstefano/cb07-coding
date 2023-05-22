import { qS, cE } from "./fn/functions.js";

export const rootEl = qS(".root");

const mainModal = () => {
  const wrapperEl = cE("div");
  const cityName = cE("h2");
  const cityTemp = cE("h3");

  wrapperEl.className = "mainModal";
  cityName.textContent = "";
  cityTemp.textContent = "";

  wrapperEl.append(cityName, cityTemp);

  rootEl.append(wrapperEl);
};

mainModal();
