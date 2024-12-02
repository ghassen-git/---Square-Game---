import { removeFromObject } from "../model/removeFromObj.js";
import { players, startGame } from "../script.js";
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
  if (test) {
    let arrCell = [];
    for (let i = id[0]; i < 5 + id[0]; i++) {
      for (let j = id[1]; j < 5 + id[1]; j++) {
        if (pieces[`piece${num}`] === undefined) {
          continue;
        }
        if (pieces[`piece${num}`][i - id[0]][j - id[1]] == 1) {
          const cell = document.getElementById(`${i - x}-${j - y}`);
          arrCell.push(cell);
          cell.style.backgroundColor = pieces.color;
          cell.style.boxShadow = "0 3px 10px 3px rgba(0, 0, 0, 0.582)";
          cell.classList.add(`${pieces.color}`);
          target.style.display = "none";
        }
      }
    }
    const removePiece = function () {
      target.style.display = "flex";
      arrCell.forEach((cell) => {
        document
          .querySelectorAll(".piece-box")
          .forEach((piece) => piece.setAttribute("draggable", true));
        cell.style.backgroundColor = "white";
        cell.style.boxShadow = "none";
        cell.classList.remove(`${pieces.color}`);
        gameBoard.removeEventListener("dblclick", removePiece);
        btn.removeEventListener("click", displayBtn);
        btn.remove();
      });
    };
    gameBoard.addEventListener("dblclick", removePiece);
    document
      .querySelectorAll(".piece-box")
      .forEach((piece) => piece.setAttribute("draggable", false));

    const html = ` <button class="next-turn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#008a30"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.45"
          >
            <path
              stroke-dasharray="24"
              stroke-dashoffset="24"
              d="M8 19v-8c0 -0.55 0.45 -1 1 -1h11"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.8s"
                values="24;0"
              />
            </path>
            <path
              stroke-dasharray="6"
              stroke-dashoffset="6"
              d="M20 10l-3 -3M20 10l-3 3"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.8s"
                dur="0.4s"
                values="6;0"
              />
            </path>
          </g>
        </svg> </button>`;
    gameBoard.insertAdjacentHTML("afterbegin", html);
    const btn = document.querySelector(".next-turn");
    const displayBtn = function () {
      removeFromObject(
        players[currentPlayer],
        Number(target.getAttribute("piece"))
      );
      gameBoard.removeEventListener("dblclick", removePiece);
      currentPlayer++;
      if (currentPlayer === 4) {
        currentPlayer = 0;
      }
      btn.remove();

      startGame(currentPlayer);
    };
    btn.addEventListener("click", displayBtn);
    console.log(arrCell);
  }
}
