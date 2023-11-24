/*
Runtime: 44ms
Beats 91.98%

Memory: 42.32MB
Beats 36.52%

*/
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    // Base case - empty
    if (!root) {
        return null;
    }

    // Switch my left/right and recurse down each subtree
    return new TreeNode(
        root.val,
        invertTree(root.right),
        invertTree(root.left)
    );
};
