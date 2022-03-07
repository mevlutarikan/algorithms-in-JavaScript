const tester = require('./nimWinner');

const testCases = [
  // [testCase, expectedOutput]
  [[1, 2, 3], 2],
  [[1, 1, 1, 4, 5, 4], 1],
  [[1, 3, 5, 7], 2],
];

let testRes;
testCases.forEach((test) => {
  testRes = tester(test[0]);
  if (testRes === test[1]) console.log('\x1b[36m%s\x1b[0m', 'True');
  else console.log('\x1b[41m%s\x1b[0m', 'False : ' + test[0] + ' ==> ' + testRes);
});
