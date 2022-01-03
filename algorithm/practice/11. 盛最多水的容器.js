// https://leetcode-cn.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    // 动态规划:
    // 从左右两边开始、
    let max = 0
    let i = 0, j = height.length - 1

    while (i < j) {
        let a = height[i]
        let d = height[j]
        max = Math.max(max, (j - i) * Math.min(a, d))
        if (a > d) {
            j--
        } else {
            i++
        }
    }
    return max
    

    // 穷尽法:
    // let maxR = 0
    // for(let i=0; i<height.length; i++) {
    //     for(let j=i+1; j<height.length; j++) {
    //         let w = j - i
    //         let l = Math.min(height[i], height[j])
    //         let r = w * l
    //         maxR = maxR > r ? maxR : r
    //     }
    // }
    // return maxR
};