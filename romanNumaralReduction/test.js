const tester = require('./romanNumeralReduction');

const testCases = [
  // [testCase, expectedOutput]
  ['LLLXXXVVVV', 'CC'],
  ['XXXVVIIIIIIIIII', 'L'],
  ['DDLL', 'MC'],
];

let testRes;
testCases.forEach((test) => {
  testRes = tester(test[0]);
  if (testRes === test[1]) console.log('\x1b[36m%s\x1b[0m', 'True');
  else console.log('\x1b[41m%s\x1b[0m', 'False : ' + test[0] + ' ==> ' + testRes);
});
