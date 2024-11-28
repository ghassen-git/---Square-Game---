import { pieces } from "../script.js ";

export function dropPieces(id, num, id2, target) {
  let x,
    y,
    test = true;
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
            ?.classList.contains("red") ||
          document
            .getElementById(`${i - x + 1}-${j - y}`)
            ?.classList.contains("red") ||
          document
            .getElementById(`${i - x}-${j - y + 1}`)
            ?.classList.contains("red") ||
          document
            .getElementById(`${i - x}-${j - y - 1}`)
            ?.classList.contains("red")
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
        if (pieces[`piece${num}`][i - id[0]][j - id[1]] == 1) {
          document.getElementById(`${i - x}-${j - y}`).style.backgroundColor =
            "red";
          document.getElementById(`${i - x}-${j - y}`).classList.add("red");
        }
      }
    }
  }
}
