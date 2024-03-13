// class Node {
//     constructor(val) {
//       this.val = val;
//       this.left = null;
//       this.right = null;
//     }
//   }

const breadthFirstValues = (root) => {
  if (!root) return [];
  const visited = [];
  const queue = [root];

  while (queue.length > 0) {
    let current = queue.shift();
    visited.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return visited;
};

module.exports = {
  breadthFirstValues,
};
