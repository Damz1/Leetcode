//Check whether a path exist from src to dst in graph

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

//iterative using DFS
const hasPath = (graph, src, dst) => {
  const stack = [src];

  //iterate while stack is not empty
  while (stack.length) {
    const current = stack.pop();
    //if current node is equal to dst there is a path
    if (current === dst) {
      return true;
    }
    //if it's not, iterate over the node's neighbour and push them to the stack
    for (let neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }
  //finished the iteration with no matching to dst return false
  return false;
};

console.log(hasPath(graph, "f", "k")); //true
console.log(hasPath(graph, "f", "j")); // false

//has path using recursion
const hasPathRecursion = (graph, src, dst) => {
  if (src === dst) return true; //base case

  for (const neighbour of graph[src]) {
    if (hasPathRecursion(graph, neighbour, dst)) return true;
  }
  return false;
};

console.log(hasPathRecursion(graph, "f", "k")); //true
console.log(hasPathRecursion(graph, "f", "j")); // false
