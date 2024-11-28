import { currentPlayer } from "../script.js";

const displayPiece = function (box, id, pieces) {
  box.querySelectorAll(".cell-1").forEach((cell) => {
    cell.style.backgroundColor = "";
    cell.style.border = "2px solid transparent";
    cell.style.zIndex = "";
  });
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
      if (pieces[`piece${id}`][i][j] === 1) {
        const cell = box.querySelector(`.cell-1[pos ="[${j},${i}]"]`);
        if (currentPlayer === 0) {
          cell.style.backgroundColor = "red";
        } else if (currentPlayer === 1) {
          cell.style.backgroundColor = "yellow";
        } else if (currentPlayer === 2) {
          cell.style.backgroundColor = "green";
        } else {
          cell.style.backgroundColor = "blue";
        }
        cell.style.border = "2px solid ";
        cell.style.zIndex = "2";
      }
    }
  }
};

export const displayPieces = function (pieces) {
  const boxes = document.querySelectorAll(".piece-box");

  boxes.forEach((box) => {
    let id = Number(box.getAttribute("piece"));
    displayPiece(box, id, pieces);
  });
};
