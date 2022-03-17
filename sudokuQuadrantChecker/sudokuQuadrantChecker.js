function sudokuQuadrantChecker(strArr) {
  const cols = Array(9);
  const rows = Array(9);
  const quadrants = Array(9);
  const invalids = new Set();
  const sudoku = strArr.map((row) => row.slice(1, -1).split(','));

  for (let i = 0; i < 9; i++) {
    // each map has entry with key:number, value:quandrant num.
    rows[i] = new Map();
    cols[i] = new Map();
    quadrants[i] = new Set();
  }

  let char, qIndex;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (sudoku[i][j] === 'x') continue;
      char = sudoku[i][j];
      qIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (rows[i].has(char)) {
        invalids.add(rows[i].get(char) + 1);
        invalids.add(qIndex + 1);
      } else rows[i].set(char, qIndex);

      if (cols[j].has(char)) {
        invalids.add(cols[j].get(char) + 1);
        invalids.add(qIndex + 1);
      } else cols[j].set(char, qIndex);

      if (quadrants[qIndex].has(char)) invalids.add(qIndex + 1);
      else quadrants[qIndex].add(char);
    }
  }
  if (invalids.size) return [...invalids].sort().join(',');
  return 'legal';
}

module.exports = sudokuQuadrantChecker;
