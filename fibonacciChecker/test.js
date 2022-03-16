const tester = require('./fibonacciChecker');

const testCases = [
  // [testCase, expectedOutput]
  [-21, 'no'],
  [-1, 'no'],
  [0, 'yes'],
  [1, 'yes'],
  [2, 'yes'],
  [3, 'yes'],
  [4, 'no'],
  [5, 'yes'],
  [8, 'yes'],
  [13, 'yes'],
  [12, 'no'],
  [10, 'no'],
  [987, 'yes'],
  [986, 'no'],
  [75025, 'yes'],
  [1000, 'no'],
  [1001, 'no'],
];

let testRes;
testCases.forEach((test) => {
  testRes = tester(test[0]);
  if (testRes === test[1]) console.log('\x1b[36m%s\x1b[0m', 'True');
  else console.log('\x1b[41m%s\x1b[0m', 'False : ' + test[0] + ' ==> ' + testRes);
});
