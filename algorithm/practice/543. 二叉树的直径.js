// https://leetcode-cn.com/problems/diameter-of-binary-tree/

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
 var diameterOfBinaryTree = function(root) {
    let max = 0
    let dfs = function(root) {
        if (root === null) return 0
        let left = dfs(root.left) + 1
        let right = dfs(root.right) + 1
        // 因为左右高度都包含根节点 所以-1,
        // 又因为是计算边 所以再-1
        max = Math.max(left + right - 2, max)
        return Math.max(left, right)
    }
    dfs(root)
    return max
};