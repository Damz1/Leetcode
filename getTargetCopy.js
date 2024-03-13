/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  function traverse(originalNode, clonedNode) {
    if (!originalNode) return;
    if (originalNode === target) return clonedNode;

    return (
      traverse(originalNode.left, clonedNode.left) ||
      traverse(originalNode.right, clonedNode.right)
    );
  }

  return traverse(original, cloned);
};

/*
1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree
Given two binary trees original and cloned and given a reference to a node target in the original tree.
The cloned tree is a copy of the original tree.
Return a reference to the same node in the cloned tree.
Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.
    */
