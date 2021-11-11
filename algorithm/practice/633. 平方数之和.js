// https://leetcode-cn.com/problems/sum-of-square-numbers/
/**
 * @param {number} c
 * @return {boolean}
 */
 var judgeSquareSum = function(c) {
    // 双指针
    // let min = 0, max = Math.floor(Math.sqrt(c))
    // while(max >= min) {
    //     let total = Math.pow(min, 2) + Math.pow(max, 2)
    //     if (total > c) max--
    //     if (total < c) min++
    //     if (total === c) return true
    // }
    // return false
    // 二分法
    // let min = 0, max = Math.floor(Math.sqrt(c))
    // let mid = Math.floor((min + max) / 2)
    // while(max >= min) {
    //     let minmax = Math.pow(min, 2) + Math.pow(max, 2)
    //     let minmid = Math.pow(min, 2) + Math.pow(mid, 2)
    //     let maxmid = Math.pow(mid, 2) + Math.pow(max, 2)
    //     if (minmax == c || minmid == c || maxmid == c) return true 
    //     if (minmid > c) {
    //         max = mid - 1
    //     } else if (maxmid < c) {
    //         min = mid + 1
    //     } else {
    //         if (minmax > c) max--
    //         if (minmax < c) min++
    //     }
    //     mid = Math.floor((min + max) / 2)
    // }
    // return false
    // 数学法
    // 费马平方和: 奇质数能表示为两个平方数之和的充分必要条件是该质数被 4 除余 1 。
    // 翻译过来就是: 当且仅当一个自然数的质因数分解中，满足 4k+3 形式的质数次方数均为偶数时，该自然数才能被表示为两个平方数之和。
    for(let i=2; i * i <= c; i++) {
        let cnt = 0
        while(c % i == 0) {
            cnt++
            c = c / i
        }
        if (i % 4 == 3 && cnt % 2 !== 0) return false
    }
    return c % 4 != 3
};