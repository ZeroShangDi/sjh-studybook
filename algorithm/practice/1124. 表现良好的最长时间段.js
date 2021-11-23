// https://leetcode-cn.com/problems/longest-well-performing-interval/

/**
 * @param {number[]} hours
 * @return {number}
 */
 var longestWPI = function(hours) {
    // 正规解: 单调栈
    // 思路: 计算一个前缀和,暴力枚举
    let num = 0
    for(let i=0; i<hours.length; i++) {
        if (hours[i] > 8) {
            num++
            hours[i] = num
        } else {
            num--
            hours[i] = num
        }
    }
    hours.unshift(0)
    console.log(hours)
    let max = 0
    for(let i=0; i<hours.length-1; i++) {
        for(let j=i+1; j<hours.length; j++) {
            if (hours[j] - hours[i] > 0) {
                max = Math.max(max, j - i)
            }
        }
    }
    return max
};