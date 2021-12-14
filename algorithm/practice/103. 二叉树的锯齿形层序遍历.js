// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/

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
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    let level = 0, ans = []
    dfs(root, level, ans)
    for(let i=0; i<ans.length; i++) {
        if (i % 2) {
            ans[i] = ans[i].reverse()
        }
    }
    return ans
};

var dfs = function(root, level, ans) {
    if (!root) return
    if (!ans[level]) ans[level] = []

    ans[level].push(root.val)
    dfs(root.left, level + 1, ans)
    dfs(root.right, level + 1, ans)
}