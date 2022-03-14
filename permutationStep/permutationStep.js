function permutationStep(num) {
  let digitArr, maxDigit;
  let strNum = num.toString();
  for (let i = strNum.length - 1; 0 < i; i--) {
    if (strNum[i - 1] < strNum[i]) {
      digitArr = strNum
        .slice(i - 1)
        .split('')
        .sort();
      maxDigit = digitArr.pop();
      return +(strNum.slice(0, i - 1) + maxDigit + digitArr.join(''));
    }
  }
  return -1;
}

module.exports = permutationStep;
