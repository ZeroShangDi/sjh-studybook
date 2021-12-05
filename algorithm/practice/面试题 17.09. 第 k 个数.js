// https://leetcode-cn.com/problems/get-kth-magic-number-lcci/

/**
 * @param {number} k
 * @return {number}
 */
 var getKthMagicNumber = function(k) {
    let dp = new Array(k)
    dp[0] = 1
    let p1 = 0, p2 = 0, p3 = 0
    for(let i=1; i<k; i++) {
        let v1 = dp[p1] * 3
        let v2 = dp[p2] * 5
        let v3 = dp[p3] * 7
        dp[i] = Math.min(v1, Math.min(v2, v3))
        if (dp[i] === v1) p1++
        if (dp[i] === v2) p2++
        if (dp[i] === v3) p3++
    }
    console.log(dp)
    return dp[k-1]
};