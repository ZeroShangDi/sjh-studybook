// https://leetcode-cn.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    //19:48
    //20:16
    // let ans = 0
    // var dfs = function(cost, i) {
    //     if (i + 2 > cost.length - 1) return
    //     if (cost[i + 1] > cost[i + 2]) {
    //         ans += cost[i + 2]
    //         dfs(cost, i + 2)
    //     } else {
    //         ans += cost[i + 1]
    //         dfs(cost, i + 1)
    //     }
    // }
    // dfs(cost, -1)
    // return ans
    // 双指针 or 递归
    let q = 0, p = 0, k
    for(let i=1; i<cost.length; i++) {
        k = p
        p = Math.min(q + cost[i - 1], p + cost[i])
        q = k
    }
    return p
};