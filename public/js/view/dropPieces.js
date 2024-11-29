import { removeFromObject } from "../model/removeFromObj.js";
import { players } from "../script.js";
import { displayPieces } from "./displayPieces.js";
import { decrease, resize } from "./resizeFunc.js";
const gameBoard = document.querySelector(".game-board");

const verify = function (arr, i, j) {
  let counter = 0;
  if (arr[i + 1][j + 1] === 1) {
    counter++;
  }
  if (arr[i - 1][j + 1] === 1) {
    counter++;
  }
  if (arr[i + 1][j - 1] === 1) {
    counter++;
  }
  if (arr[i - 1][j - 1] === 1) {
    counter++;
  }
  if (counter) return true;
  else return false;
};

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
  let finalArr = Array.from({ length: 7 }, () => Array(7).fill(0));
  let posArr = resize(pieces[`piece${num}`], 2);

  for (let i = 1; i < 8; i++) {
    for (let j = 1; j < 8; j++) {
      if (
        posArr[i][j] === 0 &&
        verify(posArr, i, j) &&
        posArr[i][j + 1] != 1 &&
        posArr[i][j - 1] != 1 &&
        posArr[i + 1][j] != 1 &&
        posArr[i - 1][j] != 1
      ) {
        finalArr[i - 1][j - 1] = 1;
      }
    }
  }
  console.log(posArr);
  console.log(pieces[`piece${num}`]);
  console.log(finalArr);
  for (let i = 0; i < finalArr.length; i++) {
    for (let j = 0; j < finalArr[0].length; j++) {
      if (finalArr[i][j] === 1) {
        console.log(i - 1 + x - 1, j - 1 + y);
      }
    }
  }
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
