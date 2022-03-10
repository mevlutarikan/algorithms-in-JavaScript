function coinDeterminer(num) {
  if (num < 5) return num;
  const coins = [11, 9, 7, 5];
  let count = 0;

  for (const coin of coins) {
    if (coin <= num) {
      count += Number.parseInt(num / coin);
      num = num % coin;
      // if remainder num is 0 break the loop
      if (!num) break;
    }
  }

  if (num < 3) return count + num;
  // if num is 3 change 11 to 9 and add 5
  if (num === 3) return count + 1;
  // so at the end the num is 4
  // change 11 to 9, add 1 and 5
  return count + 2;
}

module.exports = coinDeterminer;
