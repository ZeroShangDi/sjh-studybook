// https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function(arr, k) {
    return arr.sort((x, y) => x - y).slice(0, k)
    // TODO 大顶堆
};