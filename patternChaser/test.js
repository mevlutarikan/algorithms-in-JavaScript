const tester = require('./patternChaser');

const testCases = [
  // [testCase, expectedOutput]
  ['aabecaa', 'yes aa'],
  ['aabbaa', 'yes aa'],
  ['abbbaac', 'no null'],
  ['123224', 'no null'],
  ['aa2bbbaacbbb', 'yes bbb'],
  ['aabejiabkfabed', 'yes abe'],
  ['abcdef12kkk12', 'yes 12'],
  ['ahhhkskshhh6', 'yes hhh'],
  ['yoop', 'no null'],
  ['458933896893', 'yes 893'],
  ['nohere', 'no null'],
  ['aaaakkdnrjsnur998aaaaks', 'yes aaaak'],
  ['lettetr', 'yes et'],
  ['patterngaloratt', 'yes att'],
  ['urokklr9833rokklb', 'yes rokkl'],
];

let testRes;
testCases.forEach((test) => {
  testRes = tester(test[0]);
  if (testRes === test[1]) console.log('\x1b[36m%s\x1b[0m', 'True');
  else console.log('\x1b[41m%s\x1b[0m', 'False : ' + test[0] + ' ==> ' + testRes);
});
