// https://leetcode-cn.com/problems/paths-with-sum-lcci/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
 var pathSum = function(root, sum) {
    // 思路2: 前缀和
    let ans = 0
    var dfs = function(root, sums) {
        if (root === null) return
        let total = sums[sums.length - 1] + root.val
        for(let i=0; i<sums.length; i++) {
            if (total - sums[i] < sum) continue
            if (total - sums[i] === sum) ans++
        }
        sums.push(total)
        dfs(root.left, [...sums])
        dfs(root.right, [...sums])
    }
    dfs(root, [0])
    return ans
    // 思路1: 递归遍历 error TODO
    // let ans = 0
    // var dfs = function(root, total) {
    //     if (root === null) return
    //     let newSum = total + root.val
    //     if (newSum === sum) ans++
    //     dfs(root.left, 0)
    //     dfs(root.right, 0)
    //     dfs(root.left, newSum)
    //     dfs(root.right, newSum)
    // }
    // dfs(root, 0)
    // return ans
};