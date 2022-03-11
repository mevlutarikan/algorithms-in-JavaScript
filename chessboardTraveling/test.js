const tester = require('./chessboardTraveling');

const testCases = [
  // [testCase, expectedOutput]
  ['(1 1)(2 2)', 2],
  ['(1 1)(3 3)', 6],
  ['(2 2)(4 3)', 3],
  ['(2 2)(4 3)', 3],
  ['(2 2)(3 4)', 3],
  ['(2 2)(3 3)', 2],
  ['(1 1)(4 4)', 20],
  ['(1 1)(5 5)', 70],
  ['(7 7)(8 8)', 2],
  ['(1 1)(8 8)', 3432],
  ['(1 1)(4 6)', 56],
];

let testRes;
testCases.forEach((test) => {
  testRes = tester(test[0]);
  if (testRes === test[1]) console.log('\x1b[36m%s\x1b[0m', 'True');
  else console.log('\x1b[41m%s\x1b[0m', 'False : ' + test[0] + ' ==> ' + testRes);
});
