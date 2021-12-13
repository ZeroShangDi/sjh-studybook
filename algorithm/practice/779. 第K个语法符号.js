// https://leetcode-cn.com/problems/k-th-symbol-in-grammar/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var kthGrammar = function(n, k) {
    // 思路: 递归, 根据n和k获取上一排对应的数, 再转化并获取下标值
    if (n == 1 && k == 1) return '0'
    if (n == 2 && k == 1) return '0'
    if (n == 2 && k == 2) return '1'
    let last = kthGrammar(n - 1, Math.ceil(k / 2))
    let i = (k % 2 === 1) ? 0 : 1
    if (last === '0') return '01'[i]
    if (last === '1') return '10'[i]

    // error: 超出
    // let res = '0'
    // for(let i=2; i<=n; i++) {
    //     res = res.replaceAll('0', 'A')
    //     res = res.replaceAll('1', 'B')
    //     res = res.replaceAll('A', '01')
    //     res = res.replaceAll('B', '10')
    //     if (i === n) return res[k-1]
    // }
};