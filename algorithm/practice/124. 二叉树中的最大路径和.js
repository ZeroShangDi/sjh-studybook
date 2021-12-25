// https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/

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
 * @return {number}
 */
 var maxPathSum = function(root) {
    // 父节点-子节点 === 左根右
    let max = -Infinity
    var dfs = function(root) {
        if (root === null) return 0
        let l = Math.max(dfs(root.left), 0)
        let r = Math.max(dfs(root.right), 0)
        max = Math.max(l + r + root.val, max)
        return Math.max(l, r) + root.val
    }
    dfs(root)
    return max
};