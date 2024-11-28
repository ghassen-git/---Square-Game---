import { displayCells } from "./view/displayCells.js";
displayCells();

import { displaySideBar } from "./view/displaySideBarCells.js";
displaySideBar();

import { displayPieces } from "./view/displayPieces.js";
import { dropPieces } from "./view/dropPieces.js";
displayPieces();

let target, piece, x, y;
document.querySelectorAll(".piece-box").forEach((pieceb) => {
  pieceb.addEventListener("dragstart", (event) => {
    target = event.target;
    console.log(event);
    piece = target.getAttribute("piece");
    target.style.background = "none";
  });
  pieceb.addEventListener("mousedown", function (e) {
    x = parseInt(e.target.getAttribute("x"));
    y = parseInt(e.target.getAttribute("y"));
  });
});
document.querySelectorAll(".cell").forEach(function (cell) {
  cell.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  cell.addEventListener("drop", (event) => {
    event.preventDefault();
    dropPieces(
      [event.target.getAttribute("x"), event.target.getAttribute("y")],
      piece,
      [x, y]
    );
    target.remove();
  });
});
