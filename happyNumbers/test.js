const tester = require('./happyNumbers');

const testCases = [
  // [testCase, expectedOutput]
  [1, true],
  [2, false],
  [10, true],
  [100, true],
  [101, false],
  [0, false],
  [5525, true],
  [5255, true],
  [2555, true],
  [5552, true],
];

let testRes;
testCases.forEach((test) => {
  testRes = tester(test[0]);
  if (testRes === test[1]) console.log('\x1b[36m%s\x1b[0m', 'True');
  else console.log('\x1b[41m%s\x1b[0m', 'False : ' + test[0] + ' ==> ' + testRes);
});
