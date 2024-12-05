import { players } from "../script.js";

export function winner() {
  let min = players[0].score;
  let plwinner = players[0];
  players.forEach(function (player) {
    if (min > player.score) {
      min = player.score;
      plwinner = player;
    }
  });
  players.forEach(function (player) {
    const playericon = document.querySelector(`.player-${player.index}`);
    playericon.classList.remove("active");
    if (player == plwinner) {
      playericon
        .querySelector(".icon")
        .querySelector("svg").style.fill = `${player.color}`;
      playericon.querySelector("p").textContent = "WINNER";
      playericon.classList.add("winner");
    } else {
      playericon.querySelector(".icon").innerHTML = `  <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.875 21.125L8.3 9.275q-.125-.9.475-1.588t1.5-.687h3.45q.9 0 1.5.687t.475 1.588l-1.575 11.85q-.05.375-.337.625t-.663.25h-2.25q-.375 0-.663-.25t-.337-.625M12 6q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6"
            />
          </svg>`;
      playericon
        .querySelector(".icon")
        .querySelector("svg").style.fill = `${player.color}`;
      playericon.classList.add("loser");
    }
  });
}
