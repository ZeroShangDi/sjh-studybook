// https://leetcode-cn.com/problems/path-sum/

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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if (!root) return false
    if (!root.left && !root.right && targetSum === root.val) return true
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

var dfs = function(root, target) {
    if (!root) return false
    if (!root.left && !root.right && target === root.val) return true
    return dfs(root.left, target - root.val) || dfs(root.right, target - root.val)
}