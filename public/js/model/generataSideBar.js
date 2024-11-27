const buildCellHTML = function (y, x) {
  return `<div class="cell-1" pos="[${x},${y}]"></div>`;
};

const generateSideBarCells = function (length, height) {
  let html = ``;
  for (let j = 0; j < length; j++) {
    for (let i = 0; i < height; i++) {
      html += buildCellHTML(j, i);
    }
  }

  return html;
};

const buildCellsBoxHTML = function (i) {
  const html = generateSideBarCells(5, 5);

  return `<div draggable='true' piece='${i}' class=piece-box>
  ${html}
  </div>`;
};

export const generateSideBarCellsBox = function (n) {
  let html = ``;
  for (let i = 0; i < n; i++) {
    html += buildCellsBoxHTML(i + 1);
  }

  return html;
};
