// https://leetcode-cn.com/problems/binary-tree-right-side-view/

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
 var rightSideView = function(root) {
    if (root === null) return []
    var ans = []
    var dfs = function(root, deep) {
        if (!root) return
        ans[deep] = root.val
        dfs(root.left, deep + 1)
        dfs(root.right, deep + 1)
    }
    dfs(root, 0)
    // console.log(ans)
    return ans
};