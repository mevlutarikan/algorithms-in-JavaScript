const tester = require('./tripleDouble');

const testCases = [
  // [num1,num2, expectedOutput]
  [1234, 1234, 0],
  [333, 33, 1],
  [12334455, 12355555, 0],
  [555666, 5589, 1],
  [5, 5, 0],
  [556668, 556886, 0],
  [3776777, 87766, 1],
  [17555, 55144, 1],
  [800000006, 7800, 1],
  [2233334, 3, 0],
];

let testRes;
testCases.forEach((test) => {
  testRes = tester(test[0], test[1]);
  if (testRes === test[2]) console.log('\x1b[36m%s\x1b[0m', 'True');
  else console.log('\x1b[41m%s\x1b[0m', 'False : ' + test[0] + ' ==> ' + testRes);
});
