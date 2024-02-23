//implementation of BFS

const graph = {
  A: ["B", "C"],
  B: ["D", "E", "F"],
  C: ["G"],
  D: [],
  E: [],
  F: ["H"],
  G: ["I"],
  H: [],
  I: [],
};

function bfs(graph, node) {
  const visited = [];
  const queue = [];
  visited.push(node);
  queue.push(node);

  // While there are still nodes to visit in the queue
  while (queue.length > 0) {
    // Dequeue the first node from the queue
    const edge = queue.shift();

    // Explore the adjacent nodes of the current node
    for (const adj of graph[edge]) {
      // If the adjacent node has not been visited yet
      if (!visited.includes(adj)) {
        // Mark the adjacent node as visited and enqueue it for further exploration
        visited.push(adj);
        queue.push(adj);
      }
    }
  }
}

// Start BFS from node "A"
bfs(graph, "A");
