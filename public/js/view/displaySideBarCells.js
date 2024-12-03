import { generateSideBarCellsBox } from "../model/generataSideBar.js";

const sideBar = document.querySelector(".pieces-container");

export const displaySideBar = function (obj) {
  console.log(Object.keys(obj).length);
  sideBar.innerHTML = generateSideBarCellsBox(Object.keys(obj).length - 2);
};
