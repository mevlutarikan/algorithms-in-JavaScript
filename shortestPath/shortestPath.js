function shortestPath(strArr) {
  const totNode = +strArr[0];
  const unvisited = strArr.slice(1, totNode + 1);
  const start = unvisited[0];
  const target = unvisited[unvisited.length - 1];
  const nodes = {};

  unvisited.forEach((node) => {
    nodes[node] = {
      unvisited: true,
      paths: [],
      cost: Infinity,
      prevNode: null,
    };
  });

  // set paths
  let n1, n2;
  for (let i = totNode + 1; i < strArr.length; i++) {
    [n1, n2] = strArr[i].split('-');
    nodes[n1].paths.push(n2);
    nodes[n2].paths.push(n1);
  }

  //calculate Dijkstra’s cost
  let currNode;
  nodes[start].cost = 0;

  while (unvisited.length) {
    // find the node with min cost
    currNode = unvisited[0];
    for (let i = 1; i < unvisited.length; i++)
      if (nodes[unvisited[i]].cost < nodes[currNode].cost) currNode = unvisited[i];

    // update the neighbours's cost
    nodes[currNode].paths.forEach((next) => {
      if (nodes[next].unvisited && nodes[currNode].cost + 1 < nodes[next].cost) {
        nodes[next].cost = nodes[currNode].cost + 1;
        nodes[next].prevNode = currNode;
      }
    });

    // remove the node from unvisited list
    unvisited.splice(unvisited.indexOf(currNode), 1);
    nodes[currNode].unvisited = false;
  }

  // get the shortest path from target to start acording to its prevNode field
  const res = [target];
  currNode = nodes[target].prevNode;
  while (currNode !== null) {
    res.unshift(currNode);
    currNode = nodes[currNode].prevNode;
  }

  if (res[0] === start) return res.join('-');
  return -1;
}

module.exports = shortestPath;
