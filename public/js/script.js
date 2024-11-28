import { displayCells } from "./view/displayCells.js";
displayCells();

import { displaySideBar } from "./view/displaySideBarCells.js";
displaySideBar();

import { piecesSetPlayer1 } from "./model/generatePieces.js";
import { piecesSetPlayer2 } from "./model/generatePieces.js";
import { piecesSetPlayer3 } from "./model/generatePieces.js";
import { piecesSetPlayer4 } from "./model/generatePieces.js";
import { displayPieces } from "./view/displayPieces.js";
import { dropPieces } from "./view/dropPieces.js";
displayPieces(piecesSetPlayer1);
export let pieces = piecesSetPlayer1;
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
      [x, y],
      target
    );
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
