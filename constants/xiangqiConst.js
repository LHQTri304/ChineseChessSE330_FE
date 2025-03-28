export default {
  BOARD_SIZE: 320,
  CELL_SIZE: 320 / 8, // : BOARD_SIZE / 8
  INIT_POSITIONS: {
    Generals: { Red: { pos: [0, 0] }, B: { pos: [0, 0] } }, // vua
    Advisors: { // sĩ
      Red: [
        { index: 1, pos: [0, 0] },
        { index: 2, pos: [0, 0] },
      ],
      B: [
        { index: 1, pos: [0, 0] },
        { index: 2, pos: [0, 0] },
      ],
    },
    Elephants: {  // tượng
      Red: [
        { index: 1, pos: [0, 0] },
        { index: 2, pos: [0, 0] },
      ],
      B: [
        { index: 1, pos: [0, 0] },
        { index: 2, pos: [0, 0] },
      ],
    },
    Horses: { // mã
      Red: [
        { index: 1, pos: [0, 0] },
        { index: 2, pos: [0, 0] },
      ],
      B: [
        { index: 1, pos: [0, 0] },
        { index: 2, pos: [0, 0] },
      ],
    },
    Chariots: { // xe
      Red: [
        { index: 1, pos: [0, 0] },
        { index: 2, pos: [0, 0] },
      ],
      B: [
        { index: 1, pos: [0, 0] },
        { index: 2, pos: [0, 0] },
      ],
    },
    Cannons: { // pháo
      Red: [
        { index: 1, pos: [0, 0] },
        { index: 2, pos: [0, 0] },
      ],
      B: [
        { index: 1, pos: [0, 0] },
        { index: 2, pos: [0, 0] },
      ],
    },
    Pawns: { // tốt
      Red: [...Array(5)].map((_, i) => ({ index: i + 1, pos: [0, 0] })),
      B: [...Array(5)].map((_, i) => ({ index: i + 1, pos: [0, 0] })),
    },
  },
};
