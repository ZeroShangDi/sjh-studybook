// https://leetcode-cn.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    // 1、计算每个出现次数
    let o = new Map()
    for(let n of s) {
        let c = o.has(n) ? o.get(n) : 0
        o.set(n, c + 1)
    }
    // 2、进行统计
    let x = 0, y = 0
    for(let total of o.values()) {
        if (total % 2) {
            x += total - 1
            y = 1
        } else {
            x += total
        }
    }
    return x + y
};