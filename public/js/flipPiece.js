import { displayPieces } from "./view/displayPieces.js";

const reverseRows = function (array) {
  let newArr = [];
  for (let i = array.length - 1; i > -1; i--) {
    newArr.push(array[i]);
  }
  return newArr;
};

export const flipPiece = function (id, pieces) {
  const length = pieces[`piece${id}`][0].length;
  const height = pieces[`piece${id}`].length;
  let rotatedPiece = Array.from({ length: length }, () =>
    Array(height).fill(0)
  );

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < length; j++) {
      if (pieces[`piece${id}`][i][j] === 1) {
        rotatedPiece[j][i] = 1;
      }
    }
  }
  rotatedPiece = reverseRows(rotatedPiece);
  pieces[`piece${id}`] = rotatedPiece;
  displayPieces(pieces);
};
export const flipPieceY = function (id, pieces) {
  const piece = pieces[`piece${id}`];
  const height = piece.length;
  const rotatedPiece = [];

  for (let i = 0; i < height; i++) {
    rotatedPiece.push([...piece[i]].reverse());
  }

  pieces[`piece${id}`] = rotatedPiece;
  displayPieces(pieces);
};
