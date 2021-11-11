// https://leetcode-cn.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    let qb = new Array(nums.length).fill(1)
    for(let i=1; i<nums.length; i++) {
        let s = [1], j = i - 1
        for(let j=i-1; j>-1; j--) {
            if (nums[j] < nums[i]) {
                s.push(qb[j] + 1)
            }
        }
        qb[i] = Math.max(...s)
    }
    return Math.max(...qb)
};