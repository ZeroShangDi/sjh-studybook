// https://leetcode-cn.com/problems/maximum-score-from-removing-stones/

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
 var maximumScore = function(a, b, c) {
    // 两种情况
    // 1、刚好分完、a + b > c
    // 2、有一个有剩余 a + b < c
    
    if (a + b < c) return a + b
    if (a + c < b) return a + c
    if (b + c < a) return b + c
    return Math.floor((a + b + c) / 2)

    // 取决于两个最小的值的和与最大的值中最小的那个
    // let [x, y, z] = [a, b, c].sort((x, y) => x - y)
    // return Math.min(x + y, z)
};