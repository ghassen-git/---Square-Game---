import { displayCells } from "./view/displayCells.js";

import { displaySideBar } from "./view/displaySideBarCells.js";

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

// Drag and Drop
let target, piece, x, y;
document.querySelectorAll(".piece-box").forEach((pieceb) => {
  pieceb.addEventListener("dragstart", (event) => {
    target = event.target;
    piece = target.getAttribute("piece");
    target.style.background = "none";
    console.log(event.target);
  });
  pieceb.addEventListener("mousedown", function (e) {
    x = parseInt(e.target.getAttribute("x"));
    y = parseInt(e.target.getAttribute("y"));
    console.log(e.target);
  });
});
document.querySelectorAll(".cell").forEach(function (cell) {
  cell.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  cell.addEventListener("drop", (event) => {
    event.preventDefault();
    console.log(event.target);

    let a = event.target.getAttribute("x");
    let b = event.target.getAttribute("y");
    [pieces, currentPlayer] = dropPieces(
      [event.target.getAttribute("x"), event.target.getAttribute("y")],
      piece,
      [x, y],
      target,
      currentPlayer,
      a,
      b
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

//QUIT LOGIC

const btnQuit = document.querySelector(".btn-quit");

btnQuit.addEventListener("click", function () {
  let playerIdentifier = players[currentPlayer].color;
  players = players.filter((player) => player.color != playerIdentifier);
  displayPieces(players[currentPlayer]);
});
