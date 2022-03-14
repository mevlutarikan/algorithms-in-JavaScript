const tester = require('./permutationStep');

const testCases = [
  // [testCase, expectedOutput]
  [12453, 12534],
  [123, 132],
  [11121, 11211],
  [41352, 41523],
  [456, 465],
  [111, -1],
  [23514, 23541],
  [897654321, 912345678],
  [12, 21],
  [9, -1],
  [44444444, -1],
  [76666666, -1],
  [7654321, -1],
];

let testRes;
testCases.forEach((test) => {
  testRes = tester(test[0]);
  if (testRes === test[1]) console.log('\x1b[36m%s\x1b[0m', 'True');
  else console.log('\x1b[41m%s\x1b[0m', 'False : ' + test[0] + ' ==> ' + testRes);
});
