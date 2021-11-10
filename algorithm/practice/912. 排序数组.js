// 地址: https://leetcode-cn.com/problems/sort-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    // 用时: 45min
    partition(nums, 0, nums.length - 1)
    return nums
};

var partition = function(nums, star, ende) {
    if (star >= ende) return
    let l = star, r = ende
    let povit = getPovit(nums, l, r)
    while(l <= r) {
        while(l <= r && nums[l] < povit) l++
        while(l <= r && nums[r] > povit) r--
        if (l <= r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++
            r--
        }
    }
    partition(nums, star, r)
    partition(nums, l, ende)
}

var getPovit = function(nums, l, r) {
    let idx = Math.floor((l + r) / 2)
    return nums[idx]
}