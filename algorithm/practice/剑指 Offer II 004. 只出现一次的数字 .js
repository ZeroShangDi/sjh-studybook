// https://leetcode-cn.com/problems/WGki4K/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    // 1、记录次数
    let obj = {}
    for(num of nums) {
        switch(obj[num]) {
            case 1:
                obj[num] = 2; break
            case 2:
                delete obj[num]; break
            default:
                obj[num] = 1
        }
    }
    return Object.keys(obj)[0]
    // 二进制法
    // let ans = 0
    // for(let i=0; i<32; i++) {
    //     let res = 0
    //     for(let j=0; j<nums.length; j++) {
    //         res += (nums[j] >> (31 - i)) & 1
    //     }
    //     ans = (ans << 1) + (res % 3)
    // }
    // return ans;
    // 数学法
    // let getSum = function(s) {
    //     return s.reduce((total, item) => {
    //         total += item
    //         return total
    //     }, 0)
    // }
    // let s = [...new Set(nums)]
    // let s1 = getSum(s) // s1 = a + b
    // let s2 = getSum(nums) // s2 = 3 * a + b
    // return (3 * s1 - s2) / 2
};