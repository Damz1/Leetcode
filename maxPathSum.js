// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const maxPathSum = (root) => {
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.val;

  const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right));

  return root.val + maxChild;
};
