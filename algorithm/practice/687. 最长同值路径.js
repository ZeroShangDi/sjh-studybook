// https://leetcode-cn.com/problems/longest-univalue-path/

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
 var longestUnivaluePath = function(root) {
    let q = [root], ans = 1
    var dfs = function(root) {
        let l = 0, r = 0
        if (root === null) return 0
        if (root.left) {
            if (root.left.val === root.val) {
                l = dfs(root.left) + 1
            } else {
                q.push(root.left)
            }
        }
        if (root.right) {
            if (root.right.val === root.val) {
                r = dfs(root.right) + 1
            } else {
                q.push(root.right)
            }
        }
        ans = Math.max(l + r + 1, ans)
        return Math.max(l, r)
    }
    while(q.length) {
        dfs(q.shift())
    }
    return ans - 1
    // 1.判断用那种遍历方式
    // 2.从当前节点出发, 判断左右两边的相同节点数量
    // 3.超出时间
    // var dfs = function(root) {
    //     let l = 0, r = 0
    //     if (root === null) return 0
    //     if (root.left && root.left.val === root.val) {
    //         l = dfs(root.left) + 1
    //     }
    //     if (root.right && root.right.val === root.val) {
    //         r = dfs(root.right) + 1
    //     }
    //     dfs(root.left)
    //     dfs(root.right)
    //     ans = Math.max(l + r + 1, ans)
    //     return Math.max(l, r)
    // }
    // let ans = 1
    // dfs(root)
    // return ans - 1
};