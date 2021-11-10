// https://leetcode-cn.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    // 用时: 13min
    let getMid = (star, ende) => Math.floor((star + ende) / 2)
    let dfs = (nums, star, ende) => {
        if (ende - star < 3) {
            for(let i=star; i<=ende; i++) {
                if (nums[i] === target) return i
            }
            return -1
        }
        let i = getMid(star, ende)
        if (nums[i] > target) {
            return dfs(nums, star, i)
        } else {
            return dfs(nums, i, ende)
        }
    }
    return dfs(nums, 0, nums.length - 1)
};