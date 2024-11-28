import { displayCells } from "./view/displayCells.js";

import { displaySideBar } from "./view/displaySideBarCells.js";

import { removeFromObject } from "./model/removeFromObj.js";

import { displayPieces } from "./view/displayPieces.js";

import { dropPieces } from "./view/dropPieces.js";

import { piecesSetPlayer1 } from "./model/generatePieces.js";
import { piecesSetPlayer2 } from "./model/generatePieces.js";
import { piecesSetPlayer3 } from "./model/generatePieces.js";
import { piecesSetPlayer4 } from "./model/generatePieces.js";

let players = [
  piecesSetPlayer1,
  piecesSetPlayer2,
  piecesSetPlayer3,
  piecesSetPlayer4,
];
export let currentPlayer;

const startGame = function () {
  displayCells();
  displaySideBar();
  currentPlayer = 0;
  displayPieces(players[currentPlayer]);
};

startGame();
export let pieces = players[currentPlayer];
// Drag and drop
let target, piece, x, y;
document.querySelectorAll(".piece-box").forEach((pieceb) => {
  pieceb.addEventListener("dragstart", (event) => {
    target = event.target;
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
    console.log(target);

    dropPieces(
      [event.target.getAttribute("x"), event.target.getAttribute("y")],
      piece,
      [x, y]
    );
    currentPlayer++;
    if (currentPlayer === 4) {
      currentPlayer = 0;
    }
    removeFromObject(
      players[currentPlayer],
      Number(target.getAttribute("piece"))
    );
    target.remove();
    displayPieces(players[currentPlayer]);
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
