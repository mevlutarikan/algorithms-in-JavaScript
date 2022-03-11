function chessboardTraveling(str) {
  const [x, y, a, b] = str.match(/\d/g).map((n) => +n);

  // create reduced board with index [0,0] to [a-x,b-y]
  const boardWidth = a - x + 1;
  const boardHeight = b - y + 1;
  const board = Array.from(Array(boardHeight), (i) => Array(boardWidth));

  // initiliaze the board edges
  board[0][0] = 0;
  for (let i = 1; i < boardWidth; i++) board[0][i] = 1;
  for (let i = 1; i < boardHeight; i++) board[i][0] = 1;

  // each row value is sum of its left and its under
  for (let i = 1; i < boardHeight; i++) {
    for (let j = 1; j < boardWidth; j++) {
      board[i][j] = board[i][j - 1] + board[i - 1][j];
    }
  }
  return board[boardHeight - 1][boardWidth - 1];
}

module.exports = chessboardTraveling;
