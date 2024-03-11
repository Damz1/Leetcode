/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function (root, val) {
  if (!root) return null;

  if (root.val > val) {
    return searchBST(root.left, val);
  }

  if (root.val < val) {
    return searchBST(root.right, val);
  }

  if (root.val === val) {
    return root;
  }
};
