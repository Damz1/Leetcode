// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeIncludes = (root, target) => {
  if (!root) return false;

  let queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === target) {
      return true;
    }
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
};

//using recursion
const treeIncludes2 = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;

  return treeIncludes2(root.right, target) || treeIncludes2(root.left, target);
};
