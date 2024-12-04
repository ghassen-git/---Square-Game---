class PiecesCl {
  constructor(color, arr, score, quited, i) {
    this.color = color;
    this.possibleMoves = arr;
    this.score = score;
    this.quited = quited;
    this.index = i;
    this.piece1 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.piece2 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.piece3 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.piece4 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
      [0, 2, 0, 1, 0, 2, 0],
      [0, 0, 1, 1, 1, 0, 0],
      [0, 2, 0, 1, 0, 2, 0],
      [0, 0, 2, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.piece5 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 2, 0, 0],
      [0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0],
      [0, 2, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.piece6 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 2, 0, 0],
      [0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 0, 2, 0, 0],
      [0, 2, 0, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.piece7 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 2, 0],
      [0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 1, 0, 2, 0],
      [0, 0, 2, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.piece8 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 2, 0],
      [0, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 2, 0, 2, 0, 2, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.piece9 = [
      [0, 0, 2, 0, 2, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
    ];
    this.piece10 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 2, 0],
      [0, 0, 0, 1, 1, 0, 0],
      [0, 2, 0, 1, 0, 2, 0],
      [0, 0, 1, 1, 0, 0, 0],
      [0, 2, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.piece11 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 2, 0],
      [0, 2, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 2, 0],
      [0, 2, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.piece12 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
      [0, 2, 0, 1, 0, 2, 0],
      [0, 0, 1, 1, 1, 0, 0],
      [0, 2, 0, 0, 1, 0, 0],
      [0, 0, 0, 2, 0, 2, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.piece13 = [
      [0, 2, 0, 2, 0, 0, 0],
      [0, 0, 1, 0, 2, 0, 0],
      [0, 0, 1, 1, 0, 0, 0],
      [0, 2, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.piece14 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
    ];
    this.piece15 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 2, 0],
      [0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 1, 0, 2, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.piece16 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 2, 0],
      [0, 0, 1, 1, 1, 0, 0],
      [0, 2, 0, 1, 0, 2, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.piece17 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 2, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 2, 0],
      [0, 0, 1, 1, 1, 0, 0],
      [0, 2, 0, 0, 0, 2, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.piece18 = [
      [0, 0, 2, 0, 2, 0, 0],
      [0, 0, 0, 1, 0, 2, 0],
      [0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 1, 0, 2, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
    ];
    this.piece19 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 2, 0],
      [0, 0, 2, 0, 1, 0, 0],
      [0, 2, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 2, 0],
      [0, 2, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.piece20 = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 2, 0],
      [0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 1, 0, 2, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0],
    ];
  }
}

export let piecesSetPlayer1 = new PiecesCl(
  "#ef476f",
  [
    [0, 0],
    [19, 0],
    [0, 19],
    [19, 19],
  ],
  89,
  false,
  1
);
export let piecesSetPlayer2 = new PiecesCl(
  "#ffd166",
  [
    [0, 0],
    [19, 0],
    [0, 19],
    [19, 19],
  ],
  89,
  false,
  2
);
export let piecesSetPlayer3 = new PiecesCl(
  "#06d6a0",
  [
    [0, 0],
    [19, 0],
    [0, 19],
    [19, 19],
  ],
  89,
  false,
  3
);
export let piecesSetPlayer4 = new PiecesCl(
  "#118ab2",
  [
    [0, 0],
    [19, 0],
    [0, 19],
    [19, 19],
  ],
  89,
  false,
  4
);

/* 
export const piecesSetPlayer1 = {
  color: "red",
  piece1: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece2: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece3: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece4: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece5: [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece6: [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece7: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece8: [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece9: [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  piece10: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
};
export const piecesSetPlayer2 = {
  color: "yellow",
  piece1: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece2: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece3: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece4: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece5: [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece6: [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece7: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece8: [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece9: [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  piece10: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
};
export const piecesSetPlayer3 = {
  color: "green",
  piece1: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece2: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece3: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece4: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece5: [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece6: [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece7: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece8: [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece9: [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  piece10: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
};

export const piecesSetPlayer4 = {
  color: "blue",
  piece1: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece2: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece3: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece4: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece5: [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece6: [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece7: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece8: [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  piece9: [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  piece10: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
};
 */
