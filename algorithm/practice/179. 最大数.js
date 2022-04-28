// https://leetcode-cn.com/problems/largest-number/

/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    // 思路3: 比较组合后的大小关系
    // fix: 去除前导0
    // fix: 为空时补0
    let larger = function(a, b) {
        return (a + '' + b) - (b + '' + a)
    }
    return nums.sort(larger).reverse().join('').replace(/\b(0+)/gi,"") || '0'

    // 思路2: 字典序?
};