function fibonacciChecker(num) {
  if (num < 0) return 'no';
  if (Math.sqrt(5 * num * num + 4) % 1 == 0 || Math.sqrt(5 * num * num - 4) % 1 == 0) return 'yes';
  return 'no';
}

module.exports = fibonacciChecker;
