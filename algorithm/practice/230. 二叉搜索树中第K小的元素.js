// https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/

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
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    var dfs = function(root) {
        if (root === null) return []
        return [
            ...dfs(root.left),
            root.val,
            ...dfs(root.right)
        ]
    }
    const nums = dfs(root)
    return nums[k-1]
};