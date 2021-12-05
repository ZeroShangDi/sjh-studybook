// https://leetcode-cn.com/problems/pancake-sorting/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var pancakeSort = function(arr) {
    let k = 0, l = arr.length, res = []
    while(l > 1) {
        let c = arr.slice(0, l)
        let i = getMaxIndex(c)
        if (i+1 !== l) {
            arr = reverse(arr, i+1)
            res.push(i+1)
            arr = reverse(arr, l)
            res.push(l)
            k += 2
        }
        l--
    }
    if (k > 10 * arr.length) return []
    return res
};
// 获取最大下标
var getMaxIndex = function(arr) {
    let max = Math.max(...arr)
    return arr.indexOf(max)
}
// 对数组进行两次翻转
var reverse = function(arr, i) {
    let l = arr.slice(0, i)
    let r = arr.slice(i)
    return [...l.reverse(), ...r]
}