// https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/

/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    // 插入排序
    this.k = k
    this.quenu = []
    for(num of nums) {
        insterSort(this.quenu, num, k)
    }
    return null
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    insterSort(this.quenu, val, this.k)
    return this.quenu[this.k - 1]
};

function insterSort(quenu, num, k) {
    let i = 0, len = quenu.length
    if (len >= k && quenu[len - 1] > num) return
    if (len >= k && quenu[len - 1] <= num) quenu.pop()  
    while(i<len && num <= quenu[i]) i++
    quenu.splice(i, 0, num)
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */