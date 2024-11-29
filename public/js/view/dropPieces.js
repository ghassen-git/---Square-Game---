import { removeFromObject } from "../model/removeFromObj.js";
import { players } from "../script.js";
import { displayPieces } from "./displayPieces.js";
const gameBoard = document.querySelector(".game-board");

export function dropPieces(id, num, id2, target, currentPlayer) {
  let x,
    y,
    test = true;
  let pieces = players[currentPlayer];
  x = id2[0];
  y = id2[1];
  id[0] = parseInt(id[0]);
  id[1] = parseInt(id[1]);
  for (let i = id[0]; i < 5 + id[0]; i++) {
    for (let j = id[1]; j < 5 + id[1]; j++) {
      console.log(num, pieces[`piece${num}`]);
      if (pieces[`piece${num}`][i - id[0]][j - id[1]] == 1) {
        if (
          document.getElementById(`${i - x}-${j - y}`) == null ||
          document
            .getElementById(`${i - x - 1}-${j - y}`)
            ?.classList.contains(pieces.color) ||
          document
            .getElementById(`${i - x + 1}-${j - y}`)
            ?.classList.contains(pieces.color) ||
          document
            .getElementById(`${i - x}-${j - y + 1}`)
            ?.classList.contains(pieces.color) ||
          document
            .getElementById(`${i - x}-${j - y - 1}`)
            ?.classList.contains(pieces.color) ||
          document.getElementById(`${i - x}-${j - y}`)?.classList.length != 1 ||
          document.getElementById(`${i - x}-${j - y}`)?.classList.length != 1 ||
          document.getElementById(`${i - x}-${j - y}`)?.classList.length != 1 ||
          document.getElementById(`${i - x}-${j - y}`)?.classList.length != 1
        ) {
          test = false;
        }
      }
    }
  }
  console.log(x, y);
  console.log(test);
  if (test) {
    for (let i = id[0]; i < 5 + id[0]; i++) {
      for (let j = id[1]; j < 5 + id[1]; j++) {
        if (pieces[`piece${num}`] === undefined) {
          continue;
        }
        if (pieces[`piece${num}`][i - id[0]][j - id[1]] == 1) {
          const cell = document.getElementById(`${i - x}-${j - y}`);
          cell.style.backgroundColor = pieces.color;
          cell.style.boxShadow = "0 3px 10px 3px rgba(0, 0, 0, 0.582)";
          cell.classList.add(`${pieces.color}`);
        }
      }
    }

    removeFromObject(
      players[currentPlayer],
      Number(target.getAttribute("piece"))
    );

    currentPlayer++;
    if (currentPlayer === 4) {
      currentPlayer = 0;
    }

    displayPieces(players[currentPlayer]);
  }
  return [players[currentPlayer], currentPlayer];
}

const gaston = 123;
