// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if (prices.length < 2) return 0
    let min = prices[0]
    let max = 0
    for(let i=1; i<prices.length; i++) {
        max = Math.max(max, prices[i] - min)
        min = Math.min(min, prices[i])
    }
    return max
    // let monery = 0
    // for(let i=0; i<prices.length; i++) {
    //     let max = getMax(prices, i + 1)
    //     monery = Math.max(monery, max - prices[i])
    // }
    // return monery
};

var getMax = function(nums, star) {
    let max = 0
    for(let i=star; i<nums.length; i++) {
        max = Math.max(max, nums[i])
    }
    return max
}