import { removeFromObject } from "../model/removeFromObj.js";
import { players, startGame } from "../script.js";

const gameBoard = document.querySelector(".game-board");

export function dropPieces(id, num, id2, target, currentPlayer) {
  let x,
    y,
    test = true;

  let pieces = players[currentPlayer];
  console.log(players);
  x = id2[0];
  y = id2[1];
  id[0] = parseInt(id[0]);
  id[1] = parseInt(id[1]);
  for (let i = id[0]; i < 5 + id[0]; i++) {
    for (let j = id[1]; j < 5 + id[1]; j++) {
      if (pieces[`piece${num}`] === undefined) {
        test = false;
        continue;
      }
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
      players[currentPlayer].score -= arrCell.length;
      document
        .querySelector(`.score-${currentPlayer + 1}`)
        .querySelector("span").textContent = players[currentPlayer].score;
      let player = document.querySelector(`.player-${currentPlayer + 1}`);
      player.classList.remove("active");
      player.querySelector(".icon").innerHTML = `  <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.875 21.125L8.3 9.275q-.125-.9.475-1.588t1.5-.687h3.45q.9 0 1.5.687t.475 1.588l-1.575 11.85q-.05.375-.337.625t-.663.25h-2.25q-.375 0-.663-.25t-.337-.625M12 6q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6"
            />
          </svg>`;

      currentPlayer++;
      if (currentPlayer === 4) {
        currentPlayer = 0;
      }
      player = document.querySelector(`.player-${currentPlayer + 1}`);
      player.classList.add("active");
      if (player.classList.contains("active")) {
        player.querySelector(".icon").innerHTML = `  <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
            <path
              d="m68.913 48.908l-.048.126l.042-.115zm-5.065 24.446l-1.383 1.71c1.87.226 3.68.491 5.375.812l-5.479 1.623l7.313 1.945l5.451-1.719c3.348 1.123 7.984 2.496 9.52 4.057h-10.93l1.086 3.176h11.342c-.034 1.79-3.234 3.244-6.29 4.422l-7.751-1.676l-7.303 2.617l7.8 1.78c-4.554 1.24-12.2 1.994-18.53 2.341l-.266-3.64h-7.606l-.267 3.64c-6.33-.347-13.975-1.1-18.53-2.34l7.801-1.781l-7.303-2.617l-7.752 1.676c-3.012-.915-6.255-2.632-6.289-4.422H25.2l1.086-3.176h-10.93c1.536-1.561 6.172-2.934 9.52-4.057l5.451 1.719l7.313-1.945l-5.479-1.623a83 83 0 0 1 5.336-.807l-1.363-1.713c-14.785 1.537-27.073 4.81-30.295 9.979C.7 91.573 19.658 99.86 49.37 99.989c.442.022.878.006 1.29 0c29.695-.136 48.636-8.42 43.501-16.654c-3.224-5.171-15.52-8.445-30.314-9.981"
              color="currentColor"
            />
            <path
              d="M49.855 0A10.5 10.5 0 0 0 39.5 10.5A10.5 10.5 0 0 0 50 21a10.5 10.5 0 0 0 10.5-10.5A10.5 10.5 0 0 0 50 0zm-.057 23.592c-7.834.002-15.596 3.368-14.78 10.096l2 14.625c.351 2.573 2.09 6.687 4.687 6.687h.185l2.127 24.531c.092 1.105.892 2 2 2h8c1.108 0 1.908-.895 2-2l2.127-24.53h.186c2.597 0 4.335-4.115 4.687-6.688l2-14.625c.524-6.734-7.384-10.097-15.219-10.096M-159.25 61.817l-.048.126c.016-.038.027-.076.043-.115q.001-.006.006-.01z"
              color="currentColor"
            />
          </svg>`;
      }
      startGame(currentPlayer);
      btn.remove();
    };

    btn.addEventListener("click", displayBtn);
  }
}
