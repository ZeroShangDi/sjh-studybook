// https://leetcode-cn.com/problems/legal-binary-search-tree-lcci/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    var dfs = function(root, min, max) {
        if (root === null) return true
        if (root.val >= max || root.val <= min) return false
        return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)
    }
    return dfs(root, -Infinity, Infinity)
};