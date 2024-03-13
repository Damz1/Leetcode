// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
  let min = root.val;
  let queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    min = Math.min(min, current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return min;
};
