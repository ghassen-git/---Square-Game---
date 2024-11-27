const buildCellHTML = function (y, x) {
  return `<div id="${x}-${y}"  class="cell" pos="[${x},${y}]"></div>`;
};

export const generateCells = function () {
  let html = ``;
  for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 20; i++) {
      html += buildCellHTML(j, i);
    }
  }

  return html;
};
