function patternChaser(str) {
  let pLength = Math.floor(str.length / 2);
  let pattern;
  while (1 < pLength) {
    for (i = 0; i < str.length - pLength; i++) {
      pattern = str.slice(i, i + pLength);
      if (str.includes(pattern, i + pLength)) return 'yes ' + pattern;
    }
    pLength--;
  }
  return 'no null';
}
module.exports = patternChaser;
