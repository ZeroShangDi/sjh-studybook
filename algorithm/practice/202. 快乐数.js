// https://leetcode-cn.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    if (n < 10 && (n == 1 || n == 7)) return true
    if (n < 10) return false
    return isHappy(getSum(n))
};

var getSum = function(n) {
    let sum = 0
    for(let s of n.toString()) {
        sum += Math.pow(Number(s), 2)
    }
    return sum
}