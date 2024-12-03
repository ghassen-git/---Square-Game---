import { removeFromObject } from "../model/removeFromObj.js";
import { players } from "../script.js";
import { displayPieces } from "./displayPieces.js";
export function dropPieces(id, num, id2, target, currentPlayer) {
  let x,
    y,
    test = true,
    test2 = false;
  let pieces = players[currentPlayer];
  x = id2[0];
  y = id2[1];
  id[0] = parseInt(id[0]);
  id[1] = parseInt(id[1]);
  for (let i = id[0]; i < 7 + id[0]; i++) {
    for (let j = id[1]; j < 7 + id[1]; j++) {
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
          document.getElementById(`${i - x}-${j - y}`)?.classList.length != 1
        ) {
          test = false;
        }
      }
    }
  }
  for (let i = id[0]; i < 7 + id[0]; i++) {
    for (let j = id[1]; j < 7 + id[1]; j++) {
      if (pieces[`piece${num}`][i - id[0]][j - id[1]] == 1) {
        pieces.possibleMoves.forEach((mov) => {
          if (mov[0] === i - x && mov[1] === j - y) {
            test2 = true;
          }
        });
      }
    }
  }
  if (test && test2) {
    // Update the game board and possible moves
    for (let i = id[0]; i < 7 + id[0]; i++) {
      for (let j = id[1]; j < 7 + id[1]; j++) {
        if (pieces[`piece${num}`] === undefined) {
          continue;
        }
        if (pieces[`piece${num}`][i - id[0]][j - id[1]] == 1) {
          const cell = document.getElementById(`${i - x}-${j - y}`);
          cell.style.backgroundColor = pieces.color;
          cell.classList.add(`${pieces.color}`);

          players.forEach((pieces) => {
            pieces.possibleMoves = pieces.possibleMoves.filter(
              (mov) => !(mov[0] === i - x && mov[1] === j - y)
            );
          });
        }
        if (
          pieces[`piece${num}`][i - id[0]][j - id[1]] === 2 &&
          document.getElementById(`${i - x}-${j - y}`)
        ) {
          console.log(document.getElementById(`${i - x}-${j - y}`));
          const cell = document.getElementById(`${i - x}-${j - y}`);
          const color = cell.style.backgroundColor;
          if (!color) {
            pieces.possibleMoves.push([i - x, j - y]);
          }
        }
      }
    }
    // Update possible moves

    console.log(pieces.possibleMoves);
    removeFromObject(
      players[currentPlayer],
      Number(target.getAttribute("piece"))
    );
    currentPlayer++;
    if (currentPlayer === players.length) {
      currentPlayer = 0;
    }
    displayPieces(players[currentPlayer]);
  }
  return [players[currentPlayer], currentPlayer];
}
