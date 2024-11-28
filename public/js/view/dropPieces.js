import { pieces } from "../script.js ";

export function dropPieces(id, num, id2) {
  let x, y;
  x = id2[0];
  y = id2[1];
  id[0] = parseInt(id[0]);
  id[1] = parseInt(id[1]);
  for (let i = id[0]; i < 5 + id[0]; i++) {
    for (let j = id[1]; j < 5 + id[1]; j++) {
      if (pieces[`piece${num}`][i - id[0]][j - id[1]] == 1) {
        document.getElementById(`${i - x}-${j - y}`).style.backgroundColor =
          "red";
      }
      // const cell=document.querySelector(`${id[0]}-${id[2]}`)
    }
  }
}
