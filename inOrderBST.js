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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const inOrder = [];

  const inorderHelper = (node) => {
    if (node) {
      inorderHelper(node.left);
      inOrder.push(node.val);
      inorderHelper(node.right);
    }
  };

  inorderHelper(root);
  return inOrder;
};

/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.


Example 1:

Input: root = [1,null,2,3]
Output: [1,3,2]

*/
