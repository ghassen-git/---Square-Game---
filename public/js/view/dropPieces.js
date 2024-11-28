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
            ?.classList.contains(pieces.color)
          //  ||
          // !document
          //   .getElementById(`${x - 1}-${y + 1}`)
          //   .classList.contains("red") ||
          // !document
          //   .getElementById(`${x + 1}-${y - 1}`)
          //   .classList.contains("red") ||
          // !document
          //   .getElementById(`${x + 1}-${y + 1}`)
          //   .classList.contains("red") ||
          // !document
          //   .getElementById(`${x - 1}-${y - 11}`)
          //   .classList.contains("red")
        ) {
          test = false;
        }
      }
    }
  }
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
          cell.classList.add(`${pieces.color}`);
        }
      }
    }

    removeFromObject(
      players[currentPlayer],
      Number(target.getAttribute("piece"))
    );

    console.log(target);
    currentPlayer++;
    if (currentPlayer === 4) {
      currentPlayer = 0;
    }
    // gameBoard.style.transition = "all 0.5s";
    // gameBoard.style.transitionDelay = "1s";
    // let z = currentPlayer * 90;
    // console.log(gameBoard);
    // gameBoard.style.transform = `rotate(${z}deg)`;

    displayPieces(players[currentPlayer]);
  }
  return [players[currentPlayer], currentPlayer];
}
