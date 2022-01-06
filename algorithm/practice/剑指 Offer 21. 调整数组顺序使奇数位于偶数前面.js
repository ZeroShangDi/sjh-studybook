// https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    let l = 0, r = nums.length - 1
    while(l < r) {
        while(l < r && nums[l]%2 === 1) { l++ }
        while(l < r && nums[r]%2 === 0) { r-- }
        if (l < r) {
            temp(l, r, nums)
            l++; r--;
        }
    }
    return nums
};


const temp = (a, b, data) => [data[a], data[b]] = [data[b], data[a]]