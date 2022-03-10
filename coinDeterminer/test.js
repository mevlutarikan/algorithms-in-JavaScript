const tester = require('./coinDeterminer');

const testCases = [
  // [testCase, expectedOutput]
  [6, 2],
  [16, 2],
  [25, 3],
  [12, 2],
  [5, 1],
  [34, 4],
  [37, 5],
  [100, 10],
  [14, 2],
];

let testRes;
testCases.forEach((test) => {
  testRes = tester(test[0]);
  if (testRes === test[1]) console.log('\x1b[36m%s\x1b[0m', 'True');
  else console.log('\x1b[41m%s\x1b[0m', 'False : ' + test[0] + ' ==> ' + testRes);
});
