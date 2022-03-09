const tester = require('./shortestPath');

const testCases = [
  // [testCase, expectedOutput]
  [['4', 'A', 'B', 'C', 'D', 'A-B', 'B-D', 'B-C', 'C-D'], 'A-B-D'],
  [
    ['7', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A-B', 'A-E', 'B-C', 'C-D', 'D-F', 'E-D', 'F-G'],
    'A-E-D-F-G',
  ],
  [['5', 'A', 'B', 'C', 'D', 'F', 'A-B', 'A-C', 'B-C', 'C-D', 'D-F'], 'A-C-D-F'],
  [['4', 'X', 'Y', 'Z', 'W', 'X-Y', 'Y-Z', 'X-W'], 'X-W'],
  [['5', 'A', 'B', 'C', 'D', 'F', 'A-B', 'A-C', 'B-C', 'D-F'], -1],
  [['3', 'A', 'B', 'C', 'B-C', 'A-B'], 'A-B-C'],
  [['5', 'A', 'B', 'C', 'Z', 'Y', 'B-C', 'A-B', 'A-Z', 'C-Y', 'Z-Y'], 'A-Z-Y'],
  [['6', 'A', 'B', 'C', 'Z', 'Y', 'Q', 'B-C', 'A-B', 'A-Z', 'C-Y', 'Z-Y', 'C-Q'], 'A-B-C-Q'],
  [['6', 'Z', 'B', 'C', 'A', 'Y', 'Q', 'B-C', 'A-B', 'A-Z', 'C-Y', 'Z-Y', 'C-Q'], 'Z-Y-C-Q'],
  [['5', 'c', 'h', 'd', 's', 'm', 'c-s', 's-h', 'd-m', 'h-d'], 'c-s-h-d-m'],
  [['2', 'First Street', 'Third Street'], -1],
  [
    ['7', 'C', 'B', 'A', 'D', 'E', 'G', 'F', 'A-B', 'B-E', 'E-G', 'C-D', 'D-B', 'D-E', 'E-F'],
    'C-D-E-F',
  ],
  [
    [
      '9',
      'Z',
      'B',
      'C',
      'D',
      'R',
      'A',
      'Y',
      'Q',
      'E',
      'A-Z',
      'A-R',
      'Z-Y',
      'Z-C',
      'C-B',
      'Y-Q',
      'Q-D',
      'D-E',
      'R-E',
    ],
    'Z-A-R-E',
  ],
  [['5', 'N1', 'N2', 'N3', 'N4', 'N5', 'N1-N3', 'N3-N4', 'N4-N5', 'N5-N2', 'N2-N1'], 'N1-N2-N5'],
];

let testRes;
testCases.forEach((test) => {
  testRes = tester(test[0]);
  if (testRes === test[1]) console.log('\x1b[36m%s\x1b[0m', 'True');
  else console.log('\x1b[41m%s\x1b[0m', 'False : ' + test[0] + ' ==> ' + testRes);
});
