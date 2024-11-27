import { displayCells } from "./view/displayCells.js";
displayCells();

import { displaySideBar } from "./view/displaySideBarCells.js";
displaySideBar();

import { piecesSetPlayer1 } from "./model/generatePieces.js";
import { piecesSetPlayer2 } from "./model/generatePieces.js";
import { piecesSetPlayer3 } from "./model/generatePieces.js";
import { piecesSetPlayer4 } from "./model/generatePieces.js";
import { displayPieces } from "./view/displayPieces.js";

displayPieces(piecesSetPlayer1);

// Drag and Drop
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

//Flip A Peace
import { flipPiece } from "./flipPiece.js";
import { flipPieceY } from "./flipPiece.js";
const piecesEl = document.querySelectorAll(".piece-box");
piecesEl.forEach((pieceEl) => {
  const pieceID = Number(pieceEl.getAttribute("piece"));
  pieceEl.addEventListener("click", function () {
    flipPiece(pieceID, pieces);
  });
});
piecesEl.forEach((pieceEl) => {
  const pieceID = Number(pieceEl.getAttribute("piece"));
  pieceEl.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    flipPieceY(pieceID, pieces);
  });

  pieceEl.onclick = function (e) {
    if (e && (e.which == 2 || e.button == 4)) {
      console.log("middleclicked");
    }
  };
});
