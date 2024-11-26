import { displayCells } from "./view/displayCells.js";
displayCells();

import { displaySideBar } from "./view/displaySideBarCells.js";
displaySideBar();

import { displayPieces } from "./view/displayPieces.js";
displayPieces();
let target;
document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("dragstart", (event) => {
    target = event.target;
  });
  cell.addEventListener("dragover", (event) => {
    event.preventDefault();
    console.log(event);
  });
  cell.addEventListener("drop", (event) => {
    event.preventDefault();
    console.log(event.target.getAttribute("id"));
    cell.style.backgroundColor = "red";
    target.remove();
  });
});
