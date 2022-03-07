function nimWinner(arr) {
  let twos = 0,
    ones = 0,
    fours = 0;

  arr.forEach((num) => {
    if (4 <= num) {
      fours++;
      num -= 4;
    }

    if (2 <= num) {
      twos++;
      num -= 2;
    }

    if (1 <= num) {
      ones++;
    }
  });

  if (fours % 2 || twos % 2 || ones % 2) return 1;
  return 2;
}

module.exports = nimWinner;
