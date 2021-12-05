// https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses/

/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    // 左 >= 右
    let cnt = 0, res = '', q = ''
    for(let i=0; i<s.length; i++) {
        if (s[i] === '(') cnt++
        if (s[i] === ')') cnt--
        if (cnt >= 0) {
            q += s[i]
        } else {
            cnt++
        }
    }
    cnt = 0
    for(let i=q.length - 1; i>=0; i--) {
        if (q[i] === ')') cnt++
        if (q[i] === '(') cnt--
        if (cnt >= 0) {
            res += q[i]
        } else {
            cnt++
        }
    }
    return res.split('').reverse().join('')
};