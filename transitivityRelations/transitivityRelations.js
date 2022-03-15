function transitivityRelations(strArr) {
  const N = strArr.length;

  // generate initial boolean adjacency matrix
  const paths = [];
  strArr.forEach((item) => {
    paths.push(item.match(/\d/g).map((i) => !!+i));
  });

  // clone initial matrix to derivate it
  const derived = [];
  paths.forEach((arr) => derived.push([...arr]));

  // generate derived matrix using Warshall's algorithm
  for (let index = 0; index < N; index++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (derived[i][index] && derived[index][j]) derived[i][j] = true;
      }
    }
  }

  // compare initial adjacency matrix to derived matrix
  const res = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i !== j && derived[i][j] && !paths[i][j]) {
        res.push('(' + i + ',' + j + ')');
      }
    }
  }
  if (res.length) return res.join('-');
  return 'transitive';
}

module.exports = transitivityRelations;
