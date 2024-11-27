import { pieces } from "../model/generatePieces.js";

const displayPiece = function (box, n, pieces) {
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
      if (pieces[`piece${n + 1}`][i][j] === 1) {
        const cell = box.querySelector(`.cell-1[pos ="[${j},${i}]"]`);
        cell.style.backgroundColor = "red";
        cell.style.border = "2px solid ";
        cell.style.zIndex = "2";
      }
    }
  }
};

export const displayPieces = function () {
  const boxes = document.querySelectorAll(".piece-box");

  boxes.forEach((box, i) => {
    displayPiece(box, i, pieces);
  });
};
