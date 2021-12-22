// https://leetcode-cn.com/problems/super-ugly-number/

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
 var nthSuperUglyNumber = function(n, primes) {
    if (n === 1) return 1
    let dp = new Array(n)
    let ids = new Array(primes.length).fill(0)

    dp[0] = 1
    for(let i=1; i<n; i++) {
        let nums = primes.map((n, j) => n * dp[ids[j]])
        dp[i] = Math.min(...nums)
        nums.map((n, k) => n === dp[i] && (ids[k] += 1))
    }
    return dp[n - 1]
};