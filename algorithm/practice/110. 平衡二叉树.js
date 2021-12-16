// https://leetcode-cn.com/problems/balanced-binary-tree/

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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    var dfs = function(root) {
        if (root === null) return 0
        let l = dfs(root.left)
        let r = dfs(root.right)
        if (l === -2 || r === -2) return -2
        if (Math.abs(l - r) > 1) return -2
        return Math.max(l, r) + 1
    }
    return dfs(root) >= 0
};