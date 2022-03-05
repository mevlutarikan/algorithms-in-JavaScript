function romanNumeralReduction(str) {
  const romNum = new Map([
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1],
  ]);

  let totVal = 0;
  for (const char of str) {
    totVal += romNum.get(char);
  }

  let newRom = '';
  let romNumIter = romNum.entries();
  let [key, val] = romNumIter.next().value;

  while (0 < totVal) {
    if (val <= totVal) {
      newRom += key;
      totVal -= val;
    } else {
      [key, val] = romNumIter.next().value;
    }
  }
  return newRom;
}

module.exports = romanNumeralReduction;
