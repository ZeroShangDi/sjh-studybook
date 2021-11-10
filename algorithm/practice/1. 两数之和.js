// https://leetcode-cn.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let length = nums.length
    for (let index = 0; index < length; index++) {
        // 1、未考虑都是0的情况
        // 2、未考虑可能存在负数的情况
        // 3、
        let item = nums[index]
        let diff = target - item
        let diffInd = nums.indexOf(diff, index + 1)
        if (diffInd > -1) {
            return [index, diffInd]
        }
    }
};