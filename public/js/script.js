import { displayCells } from "./view/displayCells.js";

import { displaySideBar } from "./view/displaySideBarCells.js";

import { removeFromObject } from "./model/removeFromObj.js";

import { displayPieces } from "./view/displayPieces.js";

import { dropPieces } from "./view/dropPieces.js";

import { piecesSetPlayer1 } from "./model/generatePieces.js";
import { piecesSetPlayer2 } from "./model/generatePieces.js";
import { piecesSetPlayer3 } from "./model/generatePieces.js";
import { piecesSetPlayer4 } from "./model/generatePieces.js";

export let players = [
  piecesSetPlayer1,
  piecesSetPlayer2,
  piecesSetPlayer3,
  piecesSetPlayer4,
];
export let currentPlayer;
export let pieces;
const startGame = function () {
  displayCells();
  currentPlayer = 0;
  displaySideBar(players[currentPlayer]);
  displayPieces(players[currentPlayer]);
  pieces = players[currentPlayer];
};

startGame();
document.getElementById("0-0").style.backgroundColor = "red";
document.getElementById("0-0").classList.add(`red`);
document.getElementById("0-0").style.boxShadow =
  "0 3px 10px 3px rgba(0, 0, 0, 0.582)";
// Drag and Dr§op
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

    let coords = document.querySelector(
      `.cell .${players[currentPlayer].color}`
    );
    console.log(coords);
    [pieces, currentPlayer] = dropPieces(
      [event.target.getAttribute("x"), event.target.getAttribute("y")],
      piece,
      [x, y],
      target,
      currentPlayer
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
