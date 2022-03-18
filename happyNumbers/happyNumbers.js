function happyNumbers(num) {
  while (9 < num) {
    num = num
      .toString()
      .split('')
      .reduce((prev, n) => prev + n * n, 0);
  }
  return num === 1;
}

module.exports = happyNumbers;
