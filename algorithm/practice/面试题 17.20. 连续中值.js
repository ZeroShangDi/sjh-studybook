// https://leetcode-cn.com/problems/continuous-median-lcci/

/**
 * initialize your data structure here.
 */
 var MedianFinder = function() {
    this.nums = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let i = 0
    while(num > this.nums[i]) i++
    this.nums.splice(i, 0, num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let i = Math.floor(this.nums.length / 2)
    if (this.nums.length % 2 === 0) {
        return (this.nums[i] + this.nums[i-1]) / 2
    }
    return this.nums[i]
};

// -5, -4, -3, -2, -1

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */