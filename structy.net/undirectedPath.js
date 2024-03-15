const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

function undirectedPath(edges, nodeA, nodeB) {
  const graph = convertEdgesToAdj(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
}

function convertEdgesToAdj(edges) {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

function hasPath(graph, src, dst, visited) {
  if (src === dst) return true;
  //if visited there is a cycle
  if (visited.has(src)) return false;
  visited.add(src);

  for (const neighbour of graph[src]) {
    if (hasPath(graph, neighbour, dst, visited)) {
      return true;
    }
  }
  return false;
}

undirectedPath(edges, "j", "m"); // -> true
