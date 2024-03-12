class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValues = (root) => {
  if (!root) return [];

  let visited = [];
  let stack = [root];

  while (stack.length > 0) {
    let current = stack.pop();
    visited.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return visited;
};

//problem from struct.net website
const depthFirstValuesRecursive = (root) => {
  if (!root) return [];

  const leftValues = depthFirstValuesRecursive(root.left);
  const rightValues = depthFirstValuesRecursive(root.right);
  return [root.val, ...leftValues, ...rightValues];
};
