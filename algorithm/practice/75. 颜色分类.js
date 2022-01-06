// https://leetcode-cn.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    // 快排
    // partition(nums, 0, nums.length - 1)
    // return nums

    // 其他
    let a = 0, b = 0
    for(let i=0; i<nums.length; i++) {
        if (nums[i] === 0) a++
        if (nums[i] === 1) b++
    }
    return nums.fill(0, 0, a).fill(1, a, a + b).fill(2, a + b)
};

var partition = function(nums, star, ende) {
    if (star >= ende) return false
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