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
