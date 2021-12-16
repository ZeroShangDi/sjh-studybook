// https://leetcode-cn.com/problems/binary-tree-cameras/

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
 var minCameraCover = function(root) {
    let ans = 0
    var dfs = function(root) {
        // 左 右 根
        // 0: 看不到
        // 1: 看到、但没有监控
        // 2: 看到、且安装了监控
        if (root === null) return 1
        let l = dfs(root.left)
        let r = dfs(root.right)
        if (l === 0 || r === 0) {
            ans++
            return 2
        } else if (l === 2 || r === 2) {
            return 1
        }
        return 0
    }
    if (dfs(root) === 0) ans++
    return ans
};