const displayPiece = function (box, pieces) {
  box.querySelectorAll(".cell-1").forEach((cell) => {
    cell.style.backgroundColor = "";
    cell.style.border = "2px solid transparent";
    cell.style.zIndex = "";
  });
  let counter = 0;
  let id = Number(box.getAttribute("piece"));
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
      if (pieces[`piece${id}`] === undefined) {
        continue;
      }
      const cell = box.querySelector(`.cell-1[pos ="[${j},${i}]"]`);
      if (pieces[`piece${id}`][i][j] === 1) {
        counter++;

        cell.style.backgroundColor = pieces.color;
        cell.style.border = "2px solid ";
        cell.style.zIndex = "2";
      }
    }
  }
  if (counter === 0) {
    box.classList.add("hidden");
  }
};

export const displayPieces = function (pieces) {
  const boxes = document.querySelectorAll(".piece-box");

  boxes.forEach((box) => {
    box.classList.remove("hidden");
    displayPiece(box, pieces);
  });
};
