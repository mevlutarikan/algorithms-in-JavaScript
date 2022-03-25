function tripleDouble(num1, num2) {
  let num1Str = num1.toString();
  let num2Str = num2.toString();
  for (let i = 0; i < num1Str.length - 2; i++) {
    if (num1Str[i] === num1Str[i + 1] && num1Str[i] === num1Str[i + 2]) {
      if (num2Str.includes(num1Str[i] + num1Str[i])) return 1;
    }
  }
  return 0;
}

module.exports = tripleDouble;
